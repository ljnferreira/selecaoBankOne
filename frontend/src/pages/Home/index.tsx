import React, { useEffect, useState } from 'react';
import Conection from '../../API/Conection';
import Clothing from '../../utils/classes/Clothing';
import Product from '../../utils/classes/Product';

import { Container } from './styles';

const Home: React.FC = () => {
  const [teste, setTeste] = useState(new Product());
  const baseURL = 'http://localhost:5000';

  const conection = new Conection(baseURL);
  const camisa = new Clothing();
  camisa.name = "Camisa Polo";
  camisa.price = 50;
  camisa.registrationDate = new Date();
  camisa.categoryId = 1;
  camisa.color = "green";
  camisa.description = "Camisa com bolso na frente, ralph lauren";
  setTeste(conection.createProduct(camisa));

  console.log(teste)

  

  return (
    <Container>
      <h1>Home</h1>
      <p>{teste.name}</p>
    </Container>
  );
}

export default Home;