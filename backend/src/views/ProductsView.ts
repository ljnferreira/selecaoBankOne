import Product from "../classes/Product";
import Clothing from "../classes/Clothing";
import Food from "../classes/Food";

export default {
  render(product: Product):Product{
    console.log(product instanceof(Clothing));
    return product;
  },

  renderMany(products: Product[]):Product[]{
    return products.map(product => this.render(product));
  }
}