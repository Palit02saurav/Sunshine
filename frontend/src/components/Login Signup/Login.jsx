import React, { useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user")) || {}

    if (
      savedUser.email === form.email &&
      savedUser.password === form.password
    ) {
      alert("Login Successful");
      localStorage.setItem("isLoggedIn", "true");
      setForm({ email: "", password: "" });

      navigate("/products"); 
    } else {
      alert("Invalid Email or Password");
      navigate("/signup");
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
                <h2>Login</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <form onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="form-control mb-3"
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="form-control mb-3"
            required
          />

          <button className="btn btn-primary w-100">Login</button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Login;