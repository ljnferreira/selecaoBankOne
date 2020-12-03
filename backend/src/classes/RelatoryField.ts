export default class RelatoryField {

  name: string;
  totalValue: number;
  quantity: number;

  constructor(name: string, totalValue: number, quantity: number) {
    this.name = name;
    this.totalValue = totalValue;
    this.quantity = quantity;
  }
}