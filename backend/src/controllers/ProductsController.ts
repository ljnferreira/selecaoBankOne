import { Request, Response } from "express";
import {getRepository} from "typeorm";

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
      perishable,
      validUntil
    } = request.body;

    const productRepository = getRepository(Product);
    
    const registrationDate = new Date(Date.now());
    const fabricationDate = new Date(Date.now());
    
    const data = {
      name,
      price,
      registrationDate,
      categoryId,
      description,
      color,
      measurementUnit,
      fabricationDate,
      perishable,
      validUntil
    }

    const product = productRepository.create(data);

    await productRepository.save(product);

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
    const { id } =request.params;

    const productRepository = getRepository(Product);
    let product; 
    try {
      product = await productRepository.findOneOrFail(id);
    } catch (error) {
      return response.json({
        message: "error, register not found",
        error: error        
      })
    }
    if (product) { 
      await productRepository.delete(id);
    } 
    return response.json({
      message: "deleted succesfully"
    });
  },
}