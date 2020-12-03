import SummaryField from "../classes/SummaryField"

function isOnArray(array : SummaryField[], name: string): number{
  return array.findIndex(( product )=>{
    return product.name == name;
  })
}

export default isOnArray;