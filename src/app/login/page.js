"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [phone, setPhone] = useState("");

  const handleSendOTP = () => {
    if (!/^[6-9]\d{9}$/.test(phone)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    router.push(
      `/verify-otp?type=login&phone=${encodeURIComponent("+91" + phone)}`
    );
  };

  const images = [
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
    "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
    "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
    "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
  ];

  return (
    <main className="login-page">

      {/* Background Gallery */}
      <div className="background-gallery">
        {images.map((img, index) => (
          <div
            key={index}
            className="gallery-image"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* Dark Blue Overlay */}
      <div className="blue-overlay"></div>

      {/* Login Content */}
      <div className="login-content">

        {/* Logo */}
        <div className="logo">
          <span className="acre">Acre</span>
          <span className="aura">Aura</span>
        </div>

        {/* Welcome Text */}
        <div className="welcome-section">

          <p className="description">
            Your dream property is just a step away.
            Sign in to continue your journey with AcreAura.
          </p>

          {/* Login Card */}
          <div className="login-card">

            <h2>Login to Your Account</h2>

            <p className="card-description">
              Enter your registered mobile number to receive an OTP.
            </p>

            <label>Mobile Number</label>

            <div className="phone-input">
              <span className="country-code">🇮🇳 +91</span>

              <div className="input-divider"></div>

              <input
                type="tel"
                placeholder="Enter 10-digit mobile number"
                maxLength={10}
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value.replace(/\D/g, ""))
                }
              />
            </div>

            <button
              className="otp-button"
              onClick={handleSendOTP}
            >
              Send OTP
              <span> → </span>
            </button>

            <div className="signup-text">
              Don't have an account?
              <button onClick={() => router.push("/signup")}>
                Sign Up
              </button>
            </div>

          </div>

          <p className="bottom-text">
            Find your place. Begin your story.
          </p>
        </div>
      </div>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .login-page {
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: Arial, sans-serif;
          background: #073D70;
          padding: 35px 18px;
        }

        .background-gallery {
          position: absolute;
          inset: 0;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(4, 1fr);
          gap: 10px;
          transform: scale(1.04);
        }

        .gallery-image {
          background-size: cover;
          background-position: center;
          border-radius: 5px;
        }

        .blue-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              ellipse at 85% 90%,
              rgba(255, 218, 130, 0.18),
              transparent 35%
            ),
            radial-gradient(
              ellipse at 10% 100%,
              rgba(255, 224, 155, 0.12),
              transparent 30%
            ),
            linear-gradient(
              to bottom,
              rgba(7, 61, 112, 0.72) 0%,
              rgba(7, 61, 112, 0.82) 45%,
              rgba(7, 61, 112, 0.94) 75%,
              #073D70 100%
            );
        }

        .login-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 500px;
          text-align: center;
        }

        .logo {
          font-size: 43px;
          font-weight: 800;
          letter-spacing: -2px;
          margin-bottom: 30px;
        }

        .acre {
          color: white;
        }

        .aura {
          color: #FF967D;
        }

        .welcome-tag {
          color: #FFDDA0;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          margin-bottom: 13px;
        }

        h1 {
          color: white;
          font-size: 39px;
          margin: 0;
          font-weight: 800;
        }

        h1 span {
          color: #FF967D;
        }

        .description {
          color: rgba(255, 255, 255, 0.82);
          font-size: 14px;
          line-height: 1.7;
          max-width: 380px;
          margin: 13px auto 25px;
        }

        .login-card {
          width: 100%;
          background: rgba(255, 255, 255, 0.97);
          padding: 30px 27px;
          border-radius: 20px;
          text-align: left;
          box-shadow: 0 18px 55px rgba(0, 0, 0, 0.25);
        }

        .login-card h2 {
          color: #073D70;
          font-size: 23px;
          text-align: center;
          margin: 0 0 9px;
          font-weight: 800;
        }

        .card-description {
          color: #777;
          font-size: 13px;
          text-align: center;
          line-height: 1.5;
          margin: 0 0 25px;
        }

        label {
          display: block;
          color: #173B5D;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 9px;
        }

        .phone-input {
          height: 54px;
          width: 100%;
          display: flex;
          align-items: center;
          border: 1.5px solid #D8E1EA;
          border-radius: 11px;
          padding: 0 12px;
          background: white;
          transition: border 0.2s;
        }

        .phone-input:focus-within {
          border-color: #FF967D;
        }

        .country-code {
          color: #073D70;
          font-size: 14px;
          font-weight: 700;
          white-space: nowrap;
        }

        .input-divider {
          height: 25px;
          width: 1px;
          background: #D8E1EA;
          margin: 0 12px;
        }

        .phone-input input {
          width: 100%;
          min-width: 0;
          border: none;
          outline: none;
          background: transparent;
          color: #173B5D;
          font-size: 14px;
        }

        .phone-input input::placeholder {
          color: #A1AAB3;
          font-size: 12px;
        }

        .otp-button {
          width: 100%;
          height: 53px;
          margin-top: 22px;
          border: none;
          border-radius: 11px;
          background: linear-gradient(
            110deg,
            #FF967D,
            #E96F68
          );
          color: white;
          font-size: 16px;
          font-weight: 800;
          cursor: pointer;
          box-shadow: 0 7px 18px rgba(233, 111, 104, 0.25);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .otp-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 22px rgba(233, 111, 104, 0.35);
        }

        .otp-button span {
          margin-left: 7px;
          font-size: 19px;
        }

        .signup-text {
          text-align: center;
          color: #737E89;
          font-size: 13px;
          margin-top: 23px;
        }

        .signup-text button {
          background: none;
          border: none;
          color: #E96F68;
          font-size: 13px;
          font-weight: 800;
          cursor: pointer;
          margin-left: 5px;
        }

        .bottom-text {
          color: rgba(255, 255, 255, 0.82);
          font-size: 12px;
          letter-spacing: 1.2px;
          margin-top: 25px;
        }

        @media (max-width: 600px) {
          .login-page {
            padding: 25px 17px;
          }

          .background-gallery {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(5, 1fr);
          }

          .logo {
            font-size: 39px;
            margin-bottom: 23px;
          }

          h1 {
            font-size: 33px;
          }

          .description {
            font-size: 13px;
            margin-bottom: 22px;
          }

          .login-card {
            padding: 27px 20px;
          }

          .login-card h2 {
            font-size: 21px;
          }

          .bottom-text {
            margin-top: 21px;
          }
        }

        @media (max-width: 360px) {
          .login-card {
            padding: 24px 15px;
          }

          .phone-input {
            padding: 0 9px;
          }

          .input-divider {
            margin: 0 8px;
          }
        }
      `}</style>
    </main>
  );
}