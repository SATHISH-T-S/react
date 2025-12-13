import React from "react";

const Login = () => {
  const containerStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  };

  const cardStyle = {
    width: "300px",
    backgroundColor: "#bb0000ff",
    padding: "25px",
    borderRadius: "20px",
    textAlign: "center",
  };

  const titleStyle = {
    color: "#000000ff",
    marginBottom: "20px",
  };

  const inputStyle = {
    width: "90%",
    padding: "10px",
    margin: "8px 0",
    borderRadius: "12px",
    border: "none",
    outline: "none",
  };

  const buttonStyle = {
    width: "50%",
    padding: "12px",
    marginTop: "15px",
    backgroundColor: "#e6e6e6ff",
    color: "black",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  };

  const linkStyle = {
    color: "#fffaf7ff",
    cursor: "pointer",
  };

  return (
    <div class="adiv">
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>
           <br /> Login page
        </h1>

        <input style={inputStyle} type="text" placeholder="First Name" />
        <input style={inputStyle} type="text" placeholder="Last Name" />
        <input style={inputStyle} type="text" placeholder="Phone Number" />
        <input style={inputStyle} type="email" placeholder="Email ID" />
        <input style={inputStyle} type="password" placeholder="Password" />

        <button
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#7f8883ff")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#0c0d0dff")}
        >
          Login
        </button>
       <button
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#7f8883ff")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#0c0d0dff")}
        >
           REGISTER
        </button>

        <p style={{ color: "white", marginTop: "15px", fontSize: "14px" }}>
          Don’t have an account? <span style={linkStyle}>Sign Up</span>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Login;