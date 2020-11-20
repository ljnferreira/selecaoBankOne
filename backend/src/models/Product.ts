import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("product")
export default class Product{
  @PrimaryGeneratedColumn("increment")
  code: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  registrationDate: Date;

  @Column()
  categoryId: number;

  @Column()
  description: string;
  
  @Column()
  color: string;

  @Column()
  measurementUnit: string;

  @Column()
  fabricationDate: Date;

  @Column()
  perishable: boolean;

  @Column()
  validUntil: Date;
}