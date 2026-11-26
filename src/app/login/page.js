"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AuthLayout from "../../components/common/AuthLayout";
import AuthButton from "../../components/common/AuthButton";
import "./page.css";

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

    return (
        <AuthLayout>
            <section className="login-section">
                <div className="login-card">
                    <h1>Welcome Back!</h1>

                    <p>Login to continue your property journey.</p>

                    <label>Mobile Number</label>

                    <div className="phone-input">
                        <span>🇮🇳 +91</span>
                        <input
                            type="tel"
                            maxLength={10}
                            placeholder="Enter mobile number"
                            value={phone}
                            onChange={(e) =>
                                setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
                            }
                        />
                    </div>

                    <AuthButton onClick={handleSendOTP}>
                        Send OTP
                    </AuthButton>

                    <p className="signup-text">
                        Don't have an account?
                        <button onClick={() => router.push("/signup")}>
                            Sign Up
                        </button>
                    </p>
                </div>
            </section>
        </AuthLayout>
    );
}