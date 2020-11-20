import{
  Entity,
  Column,
  PrimaryGeneratedColumn
} from "typeorm";

import Product from "./Product";

@Entity("foods")
export default class Foods extends Product{
  @Column()
  measurementUnit: string;

  @Column()
  fabricationDate: Date;

  @Column()
  perishable: boolean;

  @Column()
  validUntil: Date;

}