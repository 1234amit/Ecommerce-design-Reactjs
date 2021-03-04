import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import ProductsContexProvider from './Global/ProductsContex';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Cart from './components/Cart';
import NotFound from './components/NotFound';

function App() {
  return (
    <div>
      <ProductsContexProvider>
        <Router>
        <Navbar />
          <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/cart" exact component={Cart} />
            <Route component={NotFound} />
          </Switch>
        </Router>
        
      </ProductsContexProvider>
    </div>
  );
}

export default App;
