import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import faker from "faker";

import "./App.css";
import Cats from "./components/Cats";
import Checkout from "./components/Checkout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faCat } from '@fortawesome/free-solid-svg-icons'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'


const url = "https://api.thecatapi.com/v1/images/search?limit=18";

const App = () => {

  const [catData, setCatData] = useState([]);
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    getCat();
  }, []);
  
  const addToCart = (el) => {
    setCart([...cart, el]);
  };

  const removeFromCart = (el) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
    setCart(hardCopy);
  };


  const getCat = () => {
    fetch(url)
      .then((res) => res.json())
      .then((cats) => {
        for (let i = 0; i < cats.length; i++) {
          let cat = cats[i];
          cat.price = faker.commerce.price(200, 500);
          cat.breed = faker.animal.cat ("American Curl");
        }
        setCatData(cats);
      });
  };


  return (
    <Router>
      <nav className="nav-bar">
        <ul>
          <li>
            <Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link>
          </li>
          <li>
            <Link to="/Cats"><FontAwesomeIcon icon={faCat} /> Cats showcase</Link>
          </li>
          <li>
            <Link to="/Checkout"><FontAwesomeIcon icon={faShoppingBasket} /> Checkout</Link>
          </li>
        </ul>
      </nav>
      <div className="container">
        <div className="layer">
        <Switch>
          <Route path="/cats">
            <Cats
              catData={catData}
              addToCart={addToCart}
            />
          </Route>

          <Route path="/checkout">
            <Checkout
              cart={cart}
              removeFromCart={removeFromCart}
            />
          </Route>

          <Route path="/">
            <h1>OnlyCats</h1>
            <h3 className="mainh3">Welcome to your online cats shop!</h3>

            <p className="homePar">
              Welcome cat lover! This is the first website that allows you to buy cats. <br /> <br /> Choose from a range of cats from our cats showcase and simply add them into the basket!
            </p>
            
          </Route>
        </Switch>
      

      <Switch>
        <Route></Route>
      </Switch>
      </div>
      </div>
    </Router>
    
  );
};

export default App;


