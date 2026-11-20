"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AuthLayout from "../../components/common/AuthLayout";
import AuthButton from "../../components/common/AuthButton";
import "./page.css";

export default function VerifyOTP() {
    const router = useRouter();
    const [otp, setOtp] = useState("");
    const [phone, setPhone] = useState("");
    const [type, setType] = useState("login");

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        setPhone(params.get("phone") || "");
        setType(params.get("type") || "login");
    }, []);

    const handleVerify = () => {
        if (otp.length !== 6) {
            alert("Please enter the complete 6-digit OTP.");
            return;
        }

        // Demo only: replace with actual Firebase verification.
        router.push("/home");
    };

    return (
        <AuthLayout>
            <section className="verify-section">
                <div className="verify-card">
                    <div className="otp-icon">✉</div>

                    <h1>Verify Your Number</h1>

                    <p className="description">
                        Enter the 6-digit verification code
                        sent to your mobile number.
                    </p>

                    <p className="phone-number">
                        {phone || "Your registered mobile number"}
                    </p>

                    <label>Enter OTP</label>

                    <input
                        type="text"
                        inputMode="numeric"
                        autoComplete="one-time-code"
                        maxLength={6}
                        placeholder="------"
                        value={otp}
                        onChange={(e) =>
                            setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
                        }
                    />

                    <AuthButton onClick={handleVerify}>
                        Verify & Continue
                    </AuthButton>

                    <p className="resend-text">
                        Didn't receive the OTP?
                    </p>

                    <button
                        className="resend-button"
                        onClick={() =>
                            alert("Connect Firebase to resend the OTP.")
                        }
                    >
                        Resend OTP
                    </button>

                    <button
                        className="change-number"
                        onClick={() =>
                            router.push(type === "signup" ? "/signup" : "/login")
                        }
                    >
                        ← Change Mobile Number
                    </button>
                </div>

                <p className="bottom-text">
                    Your Property Journey Starts Here
                </p>
            </section>
        </AuthLayout>
    );
}