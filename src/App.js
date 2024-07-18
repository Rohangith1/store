import Cart from "./components/Cart";
import React from "react";
import product from './product.json'
import Count from "./components/Count";
import Data from "./components/Data";
import Form from "./components/Form";

function App() {
  
  return (
    <div>
      {product.map((element) => {
        return  <Cart
            image={element.image}
            name={element.name}
            price={element.price}
          />
        
       
      })}
      <Count />
      <Data />
      
    
      
      <Form />
    </div>
  );
}

export default App;
