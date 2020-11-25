import {
  Entity,
  Column,
  PrimaryColumn
} from "typeorm";

@Entity("clothingDetails")
export default class ClothingDetails{
  @PrimaryColumn() 
  productId: number;

  @Column()
  description: string;
  
  @Column()
  color: string;

}