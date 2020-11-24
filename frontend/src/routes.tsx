import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,

 } from "react-router-dom";

import Home from './pages/Home';
import CreateProduct from "./pages/CreateProduct";
import ListProducts from "./pages/ListProducts";
import ListProductById from "./pages/ListProductById";

const src: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/new/product" component={CreateProduct}/>
        <Route exact path="/products" component={ListProducts}/>
        <Route exact path="/products/:id" component={ListProductById}/>
      </Switch>
    </Router>
  );
}

export default src;