import Product from "../models/Product";
import Clothing from "../models/Clothing";
import Food from "../models/Food";

export default {
  render(product: Product){
    if(product.categoryId == 1){
      let clothing = new Clothing();
      clothing.name = product.name;
      clothing.price = product.price;
      clothing.registrationDate = product.registrationDate;
      clothing.code = product.code;
      clothing.description = product.description;
      clothing.color = product.color;
      
      return clothing;
    }else{
      let food = new Food();
      food.name = product.name;
      food.price = product.price;
      food.registrationDate = product.registrationDate;
      food.code = product.code;
      food.perishable = product.perishable;
      food.fabricationDate = product.fabricationDate;
      food.validUntil = product.validUntil;
      food.measurementUnit = product.measurementUnit;
      
      return food;
    }
  },

  renderMany(products: Product[]){
    return products.map(product => this.render(product));
  }
}