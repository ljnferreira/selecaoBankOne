import {
  Entity,
  Column,
  PrimaryGeneratedColumn
} from "typeorm";

@Entity("category")
export default class Category{
  @PrimaryGeneratedColumn('increment')
  id: number;
  
  @Column()
  categoryName: string;

}