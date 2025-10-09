import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  .google-btn {
    display: flex !important;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #8d6e63, #5d4037);
    color: white;
    font-weight: bold;
    border-radius: 25px;
    padding: 12px 20px !important;
    border: none;
    font-size: 16px;
    cursor: pointer;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    transition: background 0.3s ease, transform 0.2s ease;
    width: 100%;
    max-width: 300px;
  }

  .google-btn:hover {
    background: linear-gradient(135deg, #5d4037, #8d6e63);
    transform: translateY(-2px);
  }

  .google-btn img {
    margin-right: 10px;
    height: 20px;
    width: 20px;
  }
`;

const GoogleLoginButton = () => {
  const navigate = useNavigate();

  const handleSuccess = async (credentialResponse) => {
    try {
      const token = credentialResponse.credential;

      const res = await axios.post(
        "http://localhost:8080/auth/google-login",
        { token },
        { withCredentials: true }
      );

      const user = res.data.user;

      if (!user) {
        toast.error("User data not found");
        return;
      }

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userEmail", user.email);

      toast.success(`Welcome ${user.name}`);

      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/user");
      }
    } catch (error) {
      console.error("Google login failed:", error);
      toast.error("Google login failed");
    }
  };

  const handleError = () => {
    console.error("Google login failed");
    toast.error("Google login failed");
  };

  return (
    <ButtonWrapper>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
        width="100%"
        shape="pill"
        text="signin_with"
        type="standard"
      />
    </ButtonWrapper>
  );
};

export default GoogleLoginButton;
