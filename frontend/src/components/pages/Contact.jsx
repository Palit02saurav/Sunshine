  import React, { useState } from "react";
  import Header from "../common/Header";
  import Footer from "../common/Footer";

  const Contact = () => {
    const [form, setForm] = useState({
      name: "",
      phone: "",
      email: "",
      message: "",
    });



    const handleChange = (e) => {
      const { placeholder, value } = e.target;

      if (placeholder === "Phone") 
        {
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

        <div className="back_re">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="title">
                  <h2>Contact Us</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact">
          <div className="container">
            <div className="row">
              
              <div className="col-md-6 padding_right0">
                <div className="map_main">
                  <div className="map-responsive">
                    <iframe
                      title="map"
                      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                      style={{ width: "100%", height: "450px", border: 0 }}
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>

              <div className="col-md-6 padding_left0">
                <form className="main_form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-12">
                      <input
                        className="contactus"
                        placeholder="Name"
                        value={form.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-12">
                      <input
                        className="contactus"
                        placeholder="Phone"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-12">
                      <input
                        className="contactus"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-12">
                      <textarea
                        className="textarea"
                        placeholder="Message"
                        value={form.message}
                        onChange={handleChange}
                      ></textarea>
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

  export default Contact;