import {
  Entity,
  Column,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  PrimaryColumn
} from "typeorm";

import Product from "./Product";

@Entity("clothingDetails")
export default class ClothingDetails{
  @PrimaryColumn() 
  productId: number;

  @Column()
  description: string;
  
  @Column()
  color: string;

}