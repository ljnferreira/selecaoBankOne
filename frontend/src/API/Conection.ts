import axios from 'axios';
import Product from '../utils/classes/Product';

export default class Conection{

  constructor(baseURL: string){
    axios.defaults.baseURL = baseURL;
  }

  createProduct(product: Product): any{
    return axios({
      method: 'post',
      url: '/products',
      data: product
    }).then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    })
    .finally(() => {
      console.log('request closed');
    });

  }
}