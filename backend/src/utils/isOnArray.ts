import { number } from "yup";
import RelatoryField from "../classes/RelatoryField"

function isOnArray(array : RelatoryField[], name: string): number{
  return array.findIndex(( product )=>{
    return product.name == name;
  })
}

export default isOnArray;