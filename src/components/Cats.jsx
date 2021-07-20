import React from "react";

const Cats = ({ catData, addToCart }) => {
    
    function messageOnClick(){
        alert("Item added to your basket")
    }
    
  return (
    <div className="catsImg">
      {catData.map((item, index) => {
        return (
          <div className="card">
            <img src={item.url} alt="" />
            <p><span>Breed:</span> {item.breed}</p>
            <p><span>Price:</span> £{item.price}</p>
            <button className="addBtn" onClick={() => { addToCart(item); messageOnClick()}}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
                Add to cart</button>
          
          </div>
          
        );
      })}
    </div>
  );
};

export default Cats;


