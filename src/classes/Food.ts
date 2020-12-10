import Product from "./Product";

export default class Food extends Product{
  measurementUnit: string;
  fabricationDate: Date;
  perishable: boolean;
  validUntil: Date;
}