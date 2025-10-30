import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "20px",
          padding: "40px 60px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          textAlign: "center",
          maxWidth: "400px",
          width: "90%",
          transition: "transform 0.3s ease",
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="User Avatar"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            marginBottom: "20px",
          }}
        />
        <h1 style={{ color: "#333", fontSize: "24px", marginBottom: "10px" }}>
          Welcome, {user ? user.name : "User"}!
        </h1>
        <p style={{ color: "#555", margin: "5px 0" }}>
          <strong>Email:</strong> {user ? user.email : ""}
        </p>
        <p style={{ color: "#555", margin: "5px 0" }}>
          <strong>Phone:</strong> {user ? user.phone : ""}
        </p>
        <p style={{ color: "#555", margin: "5px 0 20px" }}>
          <strong>Work:</strong> {user ? user.work : ""}
        </p>

        <button
          onClick={handleLogout}
          style={{
            background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            border: "none",
            borderRadius: "30px",
            padding: "12px 30px",
            fontSize: "16px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) =>
            (e.target.style.background =
              "linear-gradient(90deg, #5a67d8 0%, #6b46c1 100%)")
          }
          onMouseOut={(e) =>
            (e.target.style.background =
              "linear-gradient(90deg, #667eea 0%, #764ba2 100%)")
          }
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;

