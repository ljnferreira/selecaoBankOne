export default class SummaryField {

  name: string;
  totalValue: number;
  quantity: number;

  constructor(name: string, totalValue: number, quantity: number) {
    this.name = name;
    this.totalValue = totalValue;
    this.quantity = quantity;
  }
}