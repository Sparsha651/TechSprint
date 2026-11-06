"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EntryPage() {
    const router = useRouter();
    const [mobile, setMobile] = useState("");

    const handleSendOTP = () => {
        if (mobile.length !== 10) {
            alert("Please enter a valid 10-digit mobile number");
            return;
        }

        router.push("/home");
    };

    return (
        <div style={{
            minHeight: "100vh",
            background: "linear-gradient(to bottom, #F5C95D, #397FA5, #071D3B)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px"
        }}>

            <div style={{
                width: "100%",
                maxWidth: "420px",
                background: "white",
                borderRadius: "20px",
                padding: "35px 25px",
                textAlign: "center",
                boxShadow: "0 8px 25px rgba(0,0,0,0.2)"
            }}>

                <h1 style={{
                    fontSize: "36px",
                    marginBottom: "10px",
                    color: "#123F70"
                }}>
                    Acre<span style={{ color: "#FF967D" }}>Aura</span>
                </h1>

                <p style={{
                    color: "#555",
                    fontSize: "16px",
                    marginBottom: "30px"
                }}>
                    Find Your Perfect Home
                </p>

                <h2 style={{
                    fontSize: "23px",
                    color: "#123F70",
                    marginBottom: "20px"
                }}>
                    Login or Signup
                </h2>

                <input
                    type="tel"
                    placeholder="Enter mobile number"
                    value={mobile}
                    onChange={(e) =>
                        setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))
                    }
                    style={{
                        width: "100%",
                        padding: "15px",
                        border: "1px solid #ccc",
                        borderRadius: "10px",
                        fontSize: "16px",
                        boxSizing: "border-box",
                        marginBottom: "15px"
                    }}
                />

                <p style={{
                    fontSize: "12px",
                    color: "#777",
                    marginBottom: "20px"
                }}>
                    By continuing, you agree to our Terms and Conditions.
                </p>

                <button
                    onClick={handleSendOTP}
                    style={{
                        width: "100%",
                        padding: "15px",
                        background: "linear-gradient(135deg, #FF967D, #E96F68)",
                        color: "white",
                        border: "none",
                        borderRadius: "10px",
                        fontSize: "17px",
                        fontWeight: "bold",
                        cursor: "pointer"
                    }}
                >
                    Send OTP
                </button>

            </div>
        </div>
    );
}