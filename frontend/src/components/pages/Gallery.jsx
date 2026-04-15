import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

import g1 from "../../assets/images/gallery1.png";
import g2 from "../../assets/images/gallery2.png";
import g3 from "../../assets/images/gallery3.png";
import g4 from "../../assets/images/gallery4.png";
import g5 from "../../assets/images/gallery5.png";
import g6 from "../../assets/images/gallery6.png";

const Gallery = () => {
  return (
    <>
      <Header />

      <div className="back_re">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2>Gallery</h2>
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
                <span>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                </span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="gallery_img">
                <figure>
                  <img src={g1} alt="#" />
                </figure>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="gallery_img">
                <figure>
                  <img src={g2} alt="#" />
                </figure>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="gallery_img">
                <figure>
                  <img src={g3} alt="#" />
                </figure>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="gallery_img">
                <figure>
                  <img src={g4} alt="#" />
                </figure>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="gallery_img">
                <figure>
                  <img src={g5} alt="#" />
                </figure>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="gallery_img">
                <figure>
                  <img src={g6} alt="#" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Gallery;