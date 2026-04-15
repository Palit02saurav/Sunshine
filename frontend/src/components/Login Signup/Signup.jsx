import React, { useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify(form));

    alert("Signup Successful");

    setForm({ name: "", email: "", password: "" });
  };

  return (
    <>
      <Header />

      <div className="back_re">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2>Signup</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="form-control mb-3"
          />

          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="form-control mb-3"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="form-control mb-3"
          />

          <button className="btn btn-success">Signup</button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Signup;