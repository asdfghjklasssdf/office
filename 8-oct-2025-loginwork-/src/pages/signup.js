import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';
import './css/Signup.css';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    const cleanedValue =
      name === "password" || name === "cpassword"
        ? value.replace(/\s/g, "")
        : value;

    setFormData({ ...formData, [name]: cleanedValue });

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) tempErrors.email = "Valid email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Email is invalid";
    if (!formData.phone) tempErrors.phone = "Phone is required";
    else if (!/^\d{10}$/.test(formData.phone))
      tempErrors.phone = "Phone must be 10 digits";
    if (!formData.work) tempErrors.work = "Work is required";
    if (!formData.password) tempErrors.password = "Password is required";
    if (!formData.cpassword) tempErrors.cpassword = "Confirm password is required";
    else if (formData.password !== formData.cpassword)
      tempErrors.cpassword = "Passwords do not match";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const user = {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),
        work: formData.work.trim(),
        password: formData.password.trim(),
      };
      localStorage.setItem("user", JSON.stringify(user));
      alert("Signup successful!");
      navigate("/login");
    }
  };

  return (
    <section className="banner">
      <div className="container h-100 d-flex align-items-center justify-content-center">
        <div className="card text-black" style={{ borderRadius: "25px" }}>
          <div className="card-body">
            <p className="text-center h1 fw-bold mb-5 mt-4">Sign Up</p>
            <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-user fa-lg me-3 fa-fw"></i> <label className="form-label">Name</label>
                <div className="form-outline flex-fill mb-0">
                  <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange}/>
                  <div className="text-danger">{errors.name}</div>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>                  <label className="form-label">Email</label>

                <div className="form-outline flex-fill mb-0">
                  <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange}/>
                  <div className="text-danger">{errors.email}</div>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-phone fa-lg me-3 fa-fw"></i>
                                  <label className="form-label">Phone</label>
                  <label className="form-label">Phone</label>

                <div className="form-outline flex-fill mb-0">
                  <input type="text" className="form-control" name="phone" value={formData.phone} onChange={handleChange}/>
                  <div className="text-danger">{errors.phone}</div>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-briefcase fa-lg me-3 fa-fw"></i>
                                  <label className="form-label">Work</label>

                <div className="form-outline flex-fill mb-0">
                  <input type="text" className="form-control" name="work" value={formData.work} onChange={handleChange}/>
                  <div className="text-danger">{errors.work}</div>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>                  <label className="form-label">Password</label>

                <div className="form-outline flex-fill mb-0">
                  <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange}/>
                  <div className="text-danger">{errors.password}</div>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-key fa-lg me-3 fa-fw"></i>                  <label className="form-label">Confirm Password</label>

                <div className="form-outline flex-fill mb-0">
                  <input type="password" className="form-control" name="cpassword" value={formData.cpassword} onChange={handleChange}/>
                  <div className="text-danger">{errors.cpassword}</div>
                </div>
              </div>
              <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                <button type="submit" className="btn btn-primary btn-lg btn-block w-100">Register</button>
              </div>
              <p className="text-center">
                Already have an account?{" "}
                <span style={{ color: "blue", cursor: "pointer" }} onClick={() => navigate("/login")}>Login</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
