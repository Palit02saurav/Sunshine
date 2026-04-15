import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";

import pro1 from "../../assets/images/pro1.png";
import pro2 from "../../assets/images/pro2.png";
import pro3 from "../../assets/images/pro3.png";
import pro4 from "../../assets/images/pro4.png";

import Add_Cart_Button from "../buttons/Add_Cart_Button";
import { CartContext } from "../../context/CartContext";

const Product = () => {
  const context = useContext(CartContext);
  const navigate = useNavigate();

  const { addToCart } = context;

  const [fruit, setFruit] = useState("Mangoes");
  const [qty, setQty] = useState(1);

  const priceList = {
    Mangoes: 100,
    Apple: 120,
    Orange: 90,
    Pineapple: 150,
  };

  const imageMap = {
    Mangoes: pro1,
    Apple: pro2,
    Orange: pro3,
    Pineapple: pro4,
  };

  const idMap = {
    Mangoes: 1,
    Apple: 2,
    Orange: 3,
    Pineapple: 4,
  };

  const totalPrice = priceList[fruit] * qty;

  const handleCheckout = () => {
    addToCart({
      id: idMap[fruit],
      name: fruit,
      price: priceList[fruit],
      qty: qty,
      image: imageMap[fruit],
    });

    navigate("/cart");
  };

  const handleBuyNow = (product) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn) {
      addToCart(product);
      navigate("/cart");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <Header />

      <div className="back_re">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2>Our Products</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">

            <select
              className="form-control mb-3"
              value={fruit}
              onChange={(e) => setFruit(e.target.value)}
            >
              <option>Mangoes</option>
              <option>Apple</option>
              <option>Orange</option>
              <option>Pineapple</option>
            </select>

            <select
              className="form-control mb-3"
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
            >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
            </select>

            <h5>Total Price: ₹{totalPrice}</h5>

            <button
              className="read_more"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>

          </div>
        </div>
      </div>

      <div className="products">
        <div className="container">
          <div className="row mt-5">

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div id="ho_bo" className="our_products">
                <div className="product">
                  <figure><img src={pro1} alt="" /></figure>
                </div>
                <h3>Mangoes For Juice</h3>
                <span>Nam libero tempore</span>
                <p>Neque porro quisquam est...</p>
                <Add_Cart_Button product={{ id: 1, name: "Mangoes", price: 100, image: pro1 }} />
                <div style={{ height: "10px" }}></div>
                <button className="read_more" onClick={() =>
                  handleBuyNow({ id: 1, name: "Mangoes", price: 100, image: pro1 })
                }>
                  Buy Now
                </button>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div id="ho_bo" className="our_products">
                <div className="product">
                  <figure><img src={pro2} alt="" /></figure>
                </div>
                <h3>Apple For Juice</h3>
                <span>Nam libero tempore</span>
                <p>Neque porro quisquam est...</p>
                <Add_Cart_Button product={{ id: 2, name: "Apple", price: 120, image: pro2 }} />
                <div style={{ height: "10px" }}></div>
                <button className="read_more" onClick={() =>
                  handleBuyNow({ id: 2, name: "Apple", price: 120, image: pro2 })
                }>
                  Buy Now
                </button>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div id="ho_bo" className="our_products">
                <div className="product">
                  <figure><img src={pro3} alt="" /></figure>
                </div>
                <h3>Orange For Juice</h3>
                <span>Nam libero tempore</span>
                <p>Neque porro quisquam est...</p>
                <Add_Cart_Button product={{ id: 3, name: "Orange", price: 90, image: pro3 }} />
                <div style={{ height: "10px" }}></div>
                <button className="read_more" onClick={() =>
                  handleBuyNow({ id: 3, name: "Orange", price: 90, image: pro3 })
                }>
                  Buy Now
                </button>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div id="ho_bo" className="our_products">
                <div className="product">
                  <figure><img src={pro4} alt="" /></figure>
                </div>
                <h3>Pineapple For Juice</h3>
                <span>Nam libero tempore</span>
                <p>Neque porro quisquam est...</p>
                <Add_Cart_Button product={{ id: 4, name: "Pineapple", price: 150, image: pro4 }} />
                <div style={{ height: "10px" }}></div>
                <button className="read_more" onClick={() =>
                  handleBuyNow({ id: 4, name: "Pineapple", price: 150, image: pro4 })
                }>
                  Buy Now
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Product;