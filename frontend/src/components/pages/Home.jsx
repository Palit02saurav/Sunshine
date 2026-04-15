import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";

import bannerImg from "../../assets/images/banner2.jpg";

import aboutImg from "../../assets/images/about.png";

import pro1 from "../../assets/images/pro1.png";
import pro2 from "../../assets/images/pro2.png";
import pro3 from "../../assets/images/pro3.png";
import pro4 from "../../assets/images/pro4.png";

import g1 from "../../assets/images/gallery1.png";
import g2 from "../../assets/images/gallery2.png";
import g3 from "../../assets/images/gallery3.png";
import g4 from "../../assets/images/gallery4.png";
import g5 from "../../assets/images/gallery5.png";
import g6 from "../../assets/images/gallery6.png";

import froutImg from "../../assets/images/frout.png";
import Read_Button from "../buttons/Read_Button";
import Add_Cart_Button from "../buttons/Add_Cart_Button";
import Send_Button from "../buttons/Send";

import { CartContext } from "../../context/CartContext";

const Home = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleBuyNow = (product) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn) {
      addToCart(product);
      navigate("/cart");
    } else {
      navigate("/login");
    }
  };

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { placeholder, value } = e.target;

    if (placeholder === "Phone") {
      if (value && isNaN(value)) return;
      if (value.length > 10) return;
      setForm({ ...form, phone: value });
    } else {
      setForm({ ...form, [placeholder.toLowerCase()]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, email, message } = form;

    if (!name || !phone || !email || !message) {
      alert("All fields are required!");
      return;
    }

    if (phone.length !== 10) {
      alert("Phone number must be exactly 10 digits!");
      return;
    }

    alert("Form submitted successfully!");
  };

  return (
    <>
      <Header />

      <section
        className="banner_main"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="banner_po">
            <div className="row">
              <div className="col-md-7">
                <div className="text_box">
                  <span>Now started</span>
                  <h1>
                    <strong>Fruit And </strong> <br /> Vegetables
                  </h1>
                  <a className="read_more" href="#about" role="button">
                    About us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="about" className="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="titlepage">
                <h2>About Us</h2>
                <span>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptu
                </span>
              </div>
            </div>
            <div className="col-md-12">
              <div className="about_img">
                <figure>
                  <img src={aboutImg} alt="" />
                </figure>
                <Read_Button />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="products">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="titlepage">
                <h2>Our Products</h2>
                <span>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptu
                </span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div id="ho_bo" className="our_products">
                <div className="product">
                  <figure><img src={pro1} alt="" /></figure>
                </div>
                <h3>Mangoes For Juice</h3>
                <span>Nam libero tempore</span>
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non </p>
                <Add_Cart_Button product={{ id: 1, name: "Mangoes", price: 100, image: pro1 }} />
                <div style={{ height: "10px" }}></div>
                <button className="read_more" onClick={() => handleBuyNow({ id: 1, name: "Mangoes", price: 100, image: pro1 })}>
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
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non </p>
                <Add_Cart_Button product={{ id: 2, name: "Apple", price: 120, image: pro2 }} />
                <div style={{ height: "10px" }}></div>
                <button className="read_more" onClick={() => handleBuyNow({ id: 2, name: "Apple", price: 120, image: pro2 })}>
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
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non </p>
                <Add_Cart_Button product={{ id: 3, name: "Orange", price: 90, image: pro3 }} />
                <div style={{ height: "10px" }}></div>
                <button className="read_more" onClick={() => handleBuyNow({ id: 3, name: "Orange", price: 90, image: pro3 })}>
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
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non </p>
                <Add_Cart_Button product={{ id: 4, name: "Pineapple", price: 150, image: pro4 }} />
                <div style={{ height: "10px" }}></div>
                <button className="read_more" onClick={() => handleBuyNow({ id: 4, name: "Pineapple", price: 150, image: pro4 })}>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="using">
        <div className="container-fluid">
          <div className="row d_flex">
            <div className="col-md-6">
              <div className="titlepage">
                <h2>Lorem Ipsum using</h2>
                <p>
                  Nor again is there anyone who loves or pursues or desires to obtain pain of itself...
                </p>
                <Read_Button />
              </div>
            </div>
            <div className="col-md-5 offset-md-1 padding_right0">
              <div className="frout_img">
                <figure><img src={froutImg} alt="" /></figure>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="gallery">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Gallery</h2>
                <span>Lorem ipsum dolor sit amet...</span>
              </div>
            </div>
          </div>

          <div className="row">
            {[g1, g2, g3, g4, g5, g6].map((img, i) => (
              <div className="col-md-4 col-sm-6" key={i}>
                <div className="gallery_img">
                  <figure><img src={img} alt="" /></figure>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Contact Us</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 padding_right0">
              <div className="map_main">
                <div className="map-responsive">
                  <iframe
                    title="map"
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                    width="600"
                    height="453"
                    style={{ border: 0, width: "100%" }}
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="col-md-6 padding_left0">
              <form id="request" className="main_form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-12">
                    <input className="contactus" placeholder="Name" value={form.name} onChange={handleChange} />
                  </div>
                  <div className="col-md-12">
                    <input className="contactus" placeholder="Phone" value={form.phone} onChange={handleChange} />
                  </div>
                  <div className="col-md-12">
                    <input className="contactus" placeholder="Email" value={form.email} onChange={handleChange} />
                  </div>
                  <div className="col-md-12">
                    <textarea className="textarea" placeholder="Message" value={form.message} onChange={handleChange}></textarea>
                  </div>
                  <div className="col-md-12">
                    <button className="send_btn">Send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;