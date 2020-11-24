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
  
}