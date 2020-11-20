import {
  Entity,
  Column,
  PrimaryGeneratedColumn
} from "typeorm";

import Product from "./Product";

@Entity("Clothing")
export default class Clothing extends Product{
  @Column()
  description: string;
  
  @Column()
  color: string;

}