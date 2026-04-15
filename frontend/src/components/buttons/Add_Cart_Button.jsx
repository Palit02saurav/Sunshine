import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Add_Cart_Button = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleClick = () => {
    addToCart({ ...product, qty: product.qty || 1 });
    alert("Product added to cart");
    navigate("/cart");
  };

  return (
    <button className="read_more" onClick={handleClick}>
      Add To Cart
    </button>
  );
};

export default Add_Cart_Button;