import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';
import './css/Signup.css';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value });

  const validate = () => {
    let tempErrors = {};
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.password) tempErrors.password = "Password is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const savedUser = JSON.parse(localStorage.getItem("user"));
      if (
        savedUser &&
        savedUser.email.toLowerCase() === formData.email.trim().toLowerCase() &&
        savedUser.password.toLowerCase() === formData.password.trim().toLowerCase()
      ) {
        localStorage.setItem("isLoggedIn", true);
        alert("Login successful!");
        navigate("/Dashboard");
      } else {
        alert("Invalid email or password");
      }
    }
  };

  return (
    <section className="banner">
      <div className="container h-100 d-flex align-items-center justify-content-center">
        <div className="card text-black" style={{ borderRadius: "25px" }}>
          <div className="card-body">
            <p className="text-center h1 fw-bold mb-5 mt-4">Login</p>
            <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange}/>
                  <div className="text-danger">{errors.email}</div>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  <label className="form-label">Password</label>
<input
  type="password"
  className="form-control"
  name="password"
  value={formData.password}
  onChange={handleChange}
  onKeyDown={(e) => {
    if (e.key === " ") {
      e.preventDefault(); 
    }
  }}
/>
                  <div className="text-danger">{errors.password}</div>
                </div>
              </div>
              <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                <button type="submit" className="btn btn-primary btn-lg btn-block w-100">Login</button>
              </div>
              <p className="text-center">
                Don't have an account?{" "}
                <span style={{ color: "blue", cursor: "pointer" }} onClick={() => navigate("/signup")}>Signup</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
