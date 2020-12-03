import { Request, Response } from "express";
import {Between, getRepository, Like} from "typeorm";

import format from "date-fns/format";

import ProductModel from "../models/ProductModel";
import ClothingDetails from "../models/ClothingDetails";
import FoodDetails from "../models/FoodDetails";

import ProductsView from "../views/ProductsView";
import Product from "../classes/Product";
import { getProductWithDetails } from "../utils/getProductWithDetails";
import SummaryField from "../classes/SummaryField";
import isOnArray from "../utils/isOnArray";

export default {
  async create(request: Request, response: Response){
    let{
      name,
      price,
      categoryId,
      description,
      color,
      measurementUnit,
      fabricationDate,
      perishable,
      validUntil
    } = request.body;
    
    const registrationDate = format(new Date(Date.now()), 'MM/dd/yyyy');

    const productRepository = getRepository(ProductModel);
    
    const productData = {
      name,
      price,
      registrationDate,
      categoryId
    }

    const product = productRepository.create(productData);

    await productRepository.save(product);

    const productId = product.code;

    if(productData.categoryId == 1){
      const clothingRepository = getRepository(ClothingDetails);
      const clothingData = {
        productId,
        description,
        color
      }

      const clothingDetails = clothingRepository.create(clothingData);

      await clothingRepository.save(clothingDetails);

    }else if(productData.categoryId == 2){
      const foodRepository = getRepository(FoodDetails);
      const foodData = {
        productId,
        measurementUnit,
        fabricationDate,
        perishable,
        validUntil
      }

      const foodDetails = foodRepository.create(foodData);

      await foodRepository.save(foodDetails);
      
    }

    response.status(201).json(product);
  },

  async index(request: Request, response: Response){
    const productRepository = getRepository(ProductModel);

    const products = await productRepository.find();

    const productsWithDetails: Product[] = await Promise.all(products.map(async (product) => {
      return getProductWithDetails(product);
    }))
    
    return response.json(ProductsView.renderMany(productsWithDetails));
  },

  async show(request: Request, response: Response){
    const { id } =request.params;

    const productRepository = getRepository(ProductModel);

    try{
      const product = await productRepository.findOneOrFail(id);
      const productWithDetails = await getProductWithDetails(product);

      return response.json(ProductsView.render(productWithDetails));
    }catch(error){
      return response.json({
        message: "error, register not found",
        error: error        
      })
    }
    
  },

  async delete(request: Request, response: Response){
    const { id } = request.params;

    const productRepository = getRepository(ProductModel);
     
    try {
      let details;
      const product = await productRepository.findOneOrFail(id);
      if(product.categoryId == 1){
        const clothingRepository = getRepository(ClothingDetails);
        details = await clothingRepository.findOneOrFail(id);
        if(details){
          await clothingRepository.delete(id);
        }
      }else if(product.categoryId == 2){
        const foodRepository = getRepository(FoodDetails);
        details = await foodRepository.findOneOrFail(id);
        if(details){
          await foodRepository.delete(id);
        }
      }
      if (product) { 
        await productRepository.delete(id);
      } 
    } catch (error) {
      return response.status(500).json({
        message: "error, register not found",
        error: error        
      })
    }
    
    return response.json({
      message: "deleted succesfully"
    });
  },

  async filterByDate(request: Request, response: Response) {
    const {
      initialDate,
      finalDate,
      name
    } = request.body;
    
    const productRepository = getRepository(ProductModel);
    const products = await productRepository.find({
      where:{
        registrationDate: Between(initialDate, finalDate),
        name: Like(name)
      }
    });

    const result = {
      name: name,
      quantity: products.length
    }

    return response.status(200).json(result);
    
  },

  async summary(request: Request, response: Response) {
    const productRepository = getRepository(ProductModel);
    const products = await productRepository.find();

    const partialSummary = products.map((product) => {
      return new SummaryField(product.name, product.price, 1);
    })

    let finalSummary: SummaryField[] = [];

    partialSummary.map((product) => {
      let index = isOnArray(finalSummary, product.name);
      if(index == (-1)){
        finalSummary.push(product);
      }else{
        finalSummary[index].quantity += product.quantity;
        finalSummary[index].totalValue += product.totalValue;
      }
    })

    return response.status(200).json(finalSummary);

  }

}