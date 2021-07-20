import React from "react";


const Checkout = ({ cart, removeFromCart }) => {

    
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
        totalVal = +totalVal + +cart[i].price;
    }

    return(
    <div>
      <h1>Checkout</h1>
        {cart.map((item) => (
            <div className="checkoutCard">
                 <h3 className="checkh3"><span>Item selected</span></h3>
                 <img className="checkoutImg" src={item.url} alt="" />
                 <h3 className="checkh3"><span>Breed:</span> {item.breed}</h3>
                 <h3 className="checkh3"><span>Price:</span> £{item.price}</h3>

                <button className="removeBtn" onClick={() => removeFromCart(item)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Remove</button>
            </div>
        ))}

        <h2>Total: £{totalVal}</h2>        
    </div>
    )
};

export default Checkout;