import Header from "../common/Header";
import Footer from "../common/Footer";

import aboutImg from "../../assets/images/about.png";

const About = () => {
  return (
    <>
      <Header />

      <div className="back_re">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2>About Us</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="about" className="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="titlepage">
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
                  <img src={aboutImg} alt="about" />
                </figure>
                <a className="read_more" href="Javascript:void(0)">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;