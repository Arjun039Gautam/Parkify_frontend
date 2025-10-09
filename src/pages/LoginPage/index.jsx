import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Wrapper from "./style";
import parkifyIcon from "../parkifyIcon.png";
import { toast } from "react-toastify";
import GoogleLoginButton from "../googleloginbutton/GoogleLoginButton";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/users/login`,
        { email, password }
      );

      const user = response.data.user;

      if (user.role === "admin") {
        toast.success(response.data.message);
        navigate("/admin");
      } else if (user.role === "user") {
        localStorage.setItem("userEmail", user.email);
        toast.success(`${user.name} successfully logged in`);
        navigate("/user");
      }
    } catch (error) {
      toast.error(error.response?.data?.error || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGuest = () => {
    toast.success("Continue as guest");
    navigate("/guest");
  };

  return (
    <Wrapper>
      <div className="main-container">
        <div className="login-box">
          <header>
            <img src={parkifyIcon} alt="Parkify" />
          </header>

          <div className="google-login">
            <GoogleLoginButton />
          </div>

          <h2>LOGIN</h2>

          <div className="form-content">
            <div className="input-box">
              <input
                type="email"
                placeholder="Email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btn" onClick={handleLogin} disabled={loading}>
              {loading ? "Loading..." : "Sign in"}
            </button>

            <div className="links">
              <Link to="/signup">Don't have an account? Sign up</Link>
              <button onClick={handleGuest} className="guest-button">
                Continue as Guest
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default LoginPage;
