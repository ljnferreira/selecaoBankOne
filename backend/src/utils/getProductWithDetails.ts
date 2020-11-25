import { getRepository } from "typeorm";
import Clothing from "../classes/Clothing";
import Food from "../classes/Food";
import Product from "../classes/Product";
import ClothingDetails from "../models/ClothingDetails";
import FoodDetails from "../models/FoodDetails";

export const getProductWithDetails = async (product: Product):Promise<Product> => {
  if (product.categoryId == 1){
    const clothing = new Clothing();
    clothing.code = product.code;
    clothing.name = product.name;
    clothing.price = product.price;
    clothing.categoryId = product.categoryId;
    clothing.registrationDate = product.registrationDate;

    const clothingRepository = getRepository(ClothingDetails);
    const clothingDetails = await clothingRepository.findOneOrFail(clothing.code);
    
    if (clothingDetails){
      clothing.color = clothingDetails.color;
      clothing.description = clothingDetails.description;

      product = clothing;
    }

  }else if(product.categoryId == 2){
    const food = new Food();
    food.code = product.code;
    food.name = product.name;
    food.price = product.price;
    food.categoryId = product.categoryId;
    food.registrationDate = product.registrationDate;

    const foodRepository = getRepository(FoodDetails);
    const foodDetails = await foodRepository.findOneOrFail(food.code);        

    if (foodDetails){
      food.fabricationDate = foodDetails.fabricationDate;
      food.measurementUnit = foodDetails.measurementUnit;
      food.perishable = foodDetails.perishable;
      food.validUntil = foodDetails.validUntil;
    
      product = food;     
    }
  }
  return product;
}
