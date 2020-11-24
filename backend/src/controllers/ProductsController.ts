import { Request, Response } from "express";
import {getRepository} from "typeorm";
import ClothingDetails from "../models/ClothingDetails";
import FoodDetails from "../models/FoodDetails";

import format from "date-fns/format";

import Product from "../models/Product";
import ProductsView from "../views/ProductsView";

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
    
    const registrationDate = format(new Date(Date.now()), 'dd/MM/yyyy')

    const productRepository = getRepository(Product);
    
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
    const productRepository = getRepository(Product);

    const products = await productRepository.find();

    return response.json(ProductsView.renderMany(products));
  },

  async show(request: Request, response: Response){
    const { id } =request.params;

    const productRepository = getRepository(Product);

    const product = await productRepository.findOneOrFail(id);

    return response.json(ProductsView.render(product));
  },

  async delete(request: Request, response: Response){
    const { id } = request.params;

    const productRepository = getRepository(Product);
     
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
      return response.json({
        message: "error, register not found",
        error: error        
      })
    }
    
    return response.json({
      message: "deleted succesfully"
    });
  },
}