"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EntryPage() {
  const router = useRouter();
  const [mobile, setMobile] = useState("");

  const handleContinue = (e) => {
    e.preventDefault();

    if (mobile.length !== 10) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    router.push(`/verify-otp?mobile=${mobile}`);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#083D70",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Background Image Section */}

      <div
        style={{
          height: "72vh",
          minHeight: "400px",
          width: "100%",
          position: "relative",
          backgroundImage: `
            linear-gradient(
              rgba(5, 48, 85, 0.65),
              rgba(5, 48, 85, 0.85)
            ),
            url('/images/house-collage.jpg')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* House Eazy Logo */}

        <h1
          style={{
            position: "absolute",
            top: "8%",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "clamp(38px, 8vw, 55px)",
            fontWeight: "bold",
            color: "white",
            margin: 0,
            whiteSpace: "nowrap",
          }}
        >
          House
          <span style={{ color: "#ED7377" }}>
            Eazy
          </span>
        </h1>
      </div>

      {/* Login or Signup Section */}

      <div
        style={{
          width: "100%",
          padding: "25px",
          boxSizing: "border-box",
          backgroundColor: "#083D70",
          marginTop: "auto",
        }}
      >
        <h2
          style={{
            color: "white",
            fontSize: "21px",
            fontWeight: "bold",
            marginBottom: "18px",
          }}
        >
          Login or Signup
        </h2>

        <form onSubmit={handleContinue}>

          {/* Mobile Number Input */}

          <input
            type="tel"
            placeholder="Mobile number"
            value={mobile}
            onChange={(e) =>
              setMobile(
                e.target.value.replace(/\D/g, "").slice(0, 10)
              )
            }
            maxLength={10}
            required
            style={{
              width: "100%",
              height: "74px",
              padding: "0 25px",
              boxSizing: "border-box",
              border: "none",
              outline: "none",
              borderRadius: "18px",
              backgroundColor: "white",
              fontSize: "20px",
              color: "#333",
            }}
          />

          {/* Terms and Conditions */}

          <p
            style={{
              color: "#B9C9D9",
              fontSize: "15px",
              marginTop: "35px",
              lineHeight: "1.6",
            }}
          >
            By continuing, I agree to the{" "}
            <span
              style={{
                color: "#5596D4",
                cursor: "pointer",
              }}
            >
              Terms and Conditions.
            </span>
          </p>

          {/* Send OTP Button */}

          <button
            type="submit"
            style={{
              display: "block",
              width: "200px",
              height: "70px",
              margin: "48px auto 0",
              backgroundColor: "#ED7377",
              color: "white",
              border: "none",
              borderRadius: "15px",
              fontSize: "21px",
              fontWeight: "500",
              cursor: "pointer",
            }}
          >
            Send OTP
          </button>

        </form>
      </div>
    </div>
  );
}