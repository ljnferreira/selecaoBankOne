import{
  Entity,
  Column,
  PrimaryColumn
} from "typeorm";

@Entity("foodDetails")
export default class FoodDetails{
  
  @PrimaryColumn()
  productId: number;
  
  @Column()
  measurementUnit: string;

  @Column()
  fabricationDate: Date;

  @Column()
  perishable: boolean;

  @Column()
  validUntil: Date;

}