"use client";

import { useRouter } from "next/navigation";
import AuthLayout from "../components/common/AuthLayout";
import AuthButton from "../components/common/AuthButton";
import "./page.css";

export default function EntryPage() {
    const router = useRouter();

    return (
        <AuthLayout>
            <section className="welcome-section">
                <h1>Find Your Perfect Home</h1>

                <p>
                    Discover properties, connect with people
                    and make your property journey easier.
                </p>

                <div className="button-section">
                    <AuthButton onClick={() => router.push("/login")}>
                        Login
                    </AuthButton>

                    <AuthButton
                        className="signup-button"
                        onClick={() => router.push("/signup")}
                    >
                        Sign Up
                    </AuthButton>
                </div>

                <p className="bottom-text">
                    Your Property Journey Starts Here
                </p>
            </section>
        </AuthLayout>
    );
}