import './styles/styles.css';
import Navbar from './components/Navbar/Navbar';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import { CartProvider } from "./Context/CartContext";
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import Checkout from './components/Checkout/Checkout';


function App() {

    return (
      <div className="home-container">
        <div className="content">
          <CartProvider>
            <Router>
              <Navbar/>
            <Switch>
              <Route exact path="/"><ItemListContainer/></Route>
              <Route path="/category/:categoryName"><ItemListContainer/></Route>
              <Route path="/item/:id"><ItemDetailContainer/></Route>
              <Route path="/cart"><Cart/></Route>
              <Route path="/checkout"><Checkout/></Route>
              <Route path="*">Error 404</Route>
            </Switch>
              <Footer/>
            </Router>
          </CartProvider>
        </div>
      </div>
    );
  }
export default App;


