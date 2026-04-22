import React, { useContext, useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { CartContext } from "../../context/CartContext";

import pro1 from "../../assets/images/pro1.png";
import pro2 from "../../assets/images/pro2.png";
import pro3 from "../../assets/images/pro3.png";
import pro4 from "../../assets/images/pro4.png";

const Cart = () => {
  const { cart, increaseQty, decreaseQty, addToCart } = useContext(CartContext);




  const [showForm, setShowForm] = useState(false);
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    city: "",
    pincode: "",
  });




  const totalAmount = cart.reduce((total, item) => {
    return total + item.price * item.qty;
  }, 0);




  const recommendations = [
    { id: 1, name: "Mangoes", price: 100, image: pro1 },
    { id: 2, name: "Apple", price: 120, image: pro2 },
    { id: 3, name: "Orange", price: 90, image: pro3 },
    { id: 4, name: "Pineapple", price: 150, image: pro4 },
  ];




  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };



  const handleAddressSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("address", JSON.stringify(address));
    alert("Address saved successfully");
    setShowForm(false);
    window.location.reload()
  };

  return (


    
    <>
      <Header />

      <div className="back_re">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2>Cart</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">

          <div className="col-md-8">
            {cart.length === 0 ? (
              <h3>Your Cart is Empty</h3>
            ) : (
              <>
                {cart.map((item) => (
                  <div className="cart_item" key={item.id}>
                    <img src={item.image} alt={item.name} width="80" />

                    <div>
                      <h4>{item.name}</h4>
                      <p>₹{item.price}</p>

                      <button onClick={() => decreaseQty(item.id)}>-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => increaseQty(item.id)}>+</button>
                    </div>
                  </div>
                ))}

                <h3>Total: ₹{totalAmount}</h3>

                <button
                  className="btn btn-success mt-3"
                  onClick={() => setShowForm(true)}
                >
                  Proceed to Checkout
                </button>

                {showForm && (
                  <div className="mt-4">
                    <h4>Enter Address</h4>

                    <form onSubmit={handleAddressSubmit}>
                      <input
                        name="name"
                        placeholder="Name"
                        className="form-control mb-2"
                        onChange={handleChange}
                      />

                      <input
                        name="phone"
                        placeholder="Phone"
                        className="form-control mb-2"
                        onChange={handleChange}
                      />

                      <input
                        name="city"
                        placeholder="City"
                        className="form-control mb-2"
                        onChange={handleChange}
                      />

                      <input
                        name="pincode"
                        placeholder="Pincode"
                        className="form-control mb-2"
                        onChange={handleChange}
                      />

                      <button className="btn btn-primary">
                        Save Address
                      </button>
                    </form>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="col-md-4">
            <h4>Recommended Products</h4>

            {recommendations.map((item) => (
              <div key={item.id} style={{ marginBottom: "20px" }}>
                <img src={item.image} alt={item.name} width="80" />
                <h6>{item.name}</h6>
                <p>₹{item.price}</p>

                <button
                  className="btn btn-primary"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cart;