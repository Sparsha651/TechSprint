"use client";

import { useRouter } from "next/navigation";

export default function EntryPage() {
    const router = useRouter();

    const images = [
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f"
    ];

    return (
        <main className="entry-page">

            {/* BACKGROUND HOUSE COLLAGE */}

            <div className="background-gallery">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="gallery-image"
                        style={{
                            backgroundImage: `url("${image}?w=700")`
                        }}
                    />
                ))}
            </div>

            {/* ORIGINAL DARK BLUE + YELLOW OVERLAY */}

            <div className="blue-overlay"></div>

            {/* LOGO */}

            <div className="logo">
                Acre<span>Aura</span>
            </div>

            {/* WELCOME SECTION */}

            <section className="welcome-section">

                <h1>Find Your Perfect Home</h1>

                <p>
                    Discover properties, connect with people
                    and make your property journey easier.
                </p>

                <div className="button-section">

                    <button
                        className="login-button"
                        onClick={() => router.push("/login")}
                    >
                        Login
                    </button>

                    <button
                        className="signup-button"
                        onClick={() => router.push("/signup")}
                    >
                        Sign Up
                    </button>

                </div>

                <p className="bottom-text">
                    Your Property Journey Starts Here
                </p>

            </section>

            {/* STYLING */}

            <style jsx>{`

                * {
                    box-sizing: border-box;
                }

                .entry-page {
                    position: relative;
                    min-height: 100vh;
                    min-height: 100svh;
                    width: 100%;
                    overflow: hidden;
                    background: #073D70;
                    font-family: Arial, sans-serif;
                }

                /* BACKGROUND HOUSE COLLAGE */

                .background-gallery {
                    position: absolute;
                    inset: 0;
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    grid-template-rows: repeat(4, 1fr);
                    gap: 10px;
                    background: #073D70;
                }

                .gallery-image {
                    background-size: cover;
                    background-position: center;
                    min-width: 0;
                    min-height: 0;
                }

                /* DARK NAVY BLUE OVERLAY WITH YELLOW GLOW */

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

                /* LOGO */

                .logo {
                    position: absolute;
                    z-index: 2;
                    top: 13%;
                    left: 0;
                    width: 100%;
                    text-align: center;
                    color: white;
                    font-size: 46px;
                    font-weight: bold;
                    letter-spacing: -2px;
                }

                .logo span {
                    color: #FF807D;
                }

                /* WELCOME SECTION */

                .welcome-section {
                    position: absolute;
                    z-index: 3;
                    width: 90%;
                    left: 5%;
                    bottom: 9%;
                    text-align: center;
                    color: white;
                }

                .welcome-section h1 {
                    font-size: 27px;
                    margin-bottom: 15px;
                }

                .welcome-section p {
                    font-size: 15px;
                    line-height: 1.7;
                    color: #e0edf7;
                    margin-bottom: 30px;
                }

                /* LOGIN AND SIGNUP BUTTONS */

                .button-section {
                    display: flex;
                    flex-direction: column;
                    gap: 17px;
                    width: 100%;
                    max-width: 330px;
                    margin: 0 auto;
                }

                .button-section button {
                    width: 100%;
                    padding: 17px;
                    border-radius: 13px;
                    font-size: 18px;
                    font-weight: bold;
                    cursor: pointer;

                    /* ADDED HOVER TRANSITION */
                    transition: transform 0.25s ease-in-out,
                                box-shadow 0.25s ease-in-out;
                }

                .login-button {
                    background: linear-gradient(
                        135deg,
                        #FF967D,
                        #E96F68
                    );
                    color: white;
                    border: none;
                }

                .signup-button {
                    background: rgba(255,255,255,0.95);
                    color: #073D70;
                    border: 2px solid white;
                }

                /* ADDED HOVER EFFECT FOR BOTH BUTTONS */

                .login-button:hover,
                .signup-button:hover {
                    transform: translateY(-5px) scale(1.02);
                    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.25);
                }

                /* ADDED CLICK EFFECT */

                .button-section button:active {
                    transform: translateY(1px) scale(0.97);
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.18);
                }

                /* BOTTOM TEXT */

                .bottom-text {
                    margin-top: 30px !important;
                    margin-bottom: 0 !important;
                    font-size: 13px !important;
                    color: #dceaf5 !important;
                }

                /* MOBILE RESPONSIVENESS */

                @media (max-width: 600px) {

                    .logo {
                        top: 13%;
                        font-size: 43px;
                    }

                    .welcome-section {
                        bottom: 8%;
                    }

                    .welcome-section h1 {
                        font-size: 25px;
                    }

                    .welcome-section p {
                        font-size: 14px;
                    }

                    .button-section {
                        max-width: 100%;
                    }
                }

            `}</style>

        </main>
    );
}