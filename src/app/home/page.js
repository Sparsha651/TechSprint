"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
    const router = useRouter();
    const [search, setSearch] = useState("");

    const properties = [
        {
            name: "Noida",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        },
        {
            name: "Ghaziabad",
            image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
        },
        {
            name: "Gurgaon",
            image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
        }
    ];

    const goToProperties = () => {
        router.push("/properties");
    };

    return (
        <div style={{
            minHeight: "100vh",
            background: "#ffffff",
            paddingBottom: "100px",
            fontFamily: "Arial, sans-serif"
        }}>

            {/* Header */}
            <div style={{
                background: "#0B3D68",
                padding: "35px 25px 30px",
                color: "white"
            }}>

                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "35px"
                }}>
                    <h1 style={{ fontSize: "30px", margin: 0 }}>
                        Acre<span style={{ color: "#FF967D" }}>Aura</span>
                    </h1>

                    <div style={{ fontSize: "25px" }}>
                        ♧　♙
                    </div>
                </div>

                {/* Search bar */}
                <input
                    type="text"
                    placeholder="⌕  Search for properties"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") goToProperties();
                    }}
                    style={{
                        width: "100%",
                        padding: "17px",
                        borderRadius: "15px",
                        border: "none",
                        fontSize: "16px",
                        boxSizing: "border-box",
                        outline: "none"
                    }}
                />
            </div>

            {/* Banner */}
            <div style={{
                margin: "20px 25px",
                height: "200px",
                borderRadius: "15px",
                backgroundImage: "linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.35)), url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "flex-start",
                padding: "25px",
                boxSizing: "border-box"
            }}>
                <h2 style={{
                    color: "#ffffff",
                    fontSize: "21px",
                    maxWidth: "280px",
                    lineHeight: "1.4"
                }}>
                    The Hassle-Free Way of Buying and Selling Resale Homes
                </h2>
            </div>

            {/* Properties */}
            <section style={{ padding: "15px 25px" }}>
                <h2 style={{ fontSize: "25px", color: "#111" }}>
                    Our Properties
                </h2>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                    gap: "12px"
                }}>
                    {properties.map((property, index) => (
                        <div
                            key={index}
                            onClick={goToProperties}
                            style={{
                                textAlign: "center",
                                cursor: "pointer"
                            }}
                        >
                            <img
                                src={property.image}
                                alt={property.name}
                                style={{
                                    width: "100%",
                                    height: "145px",
                                    objectFit: "cover",
                                    borderRadius: "45% 45% 15px 15px"
                                }}
                            />

                            <h3 style={{
                                color: "#123F70",
                                fontSize: "17px"
                            }}>
                                {property.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Channel partner section */}
            <section style={{ padding: "20px 25px" }}>
                <h2 style={{ fontSize: "23px" }}>
                    Join The <span style={{ color: "#E96F68" }}>AcreAura</span> Revolution
                </h2>

                <img
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
                    alt="Real estate property"
                    style={{
                        width: "100%",
                        height: "210px",
                        objectFit: "cover",
                        borderRadius: "15px"
                    }}
                />
            </section>

            {/* Why work with us */}
            <section style={{
                padding: "20px 25px",
                background: "#F3F8FB"
            }}>
                <h2>Why Work With Us</h2>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                    gap: "10px"
                }}>
                    {[
                        ["4x", "More Opportunities"],
                        ["3x", "Better Connections"],
                        ["Fast", "Easy Transactions"]
                    ].map((item, index) => (
                        <div key={index} style={{
                            background: ["#203D52", "#243D5C", "#236779"][index],
                            color: "white",
                            padding: "15px 10px",
                            borderRadius: "15px",
                            minHeight: "115px"
                        }}>
                            <h2>{item[0]}</h2>
                            <p>{item[1]}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Social links */}
            <section style={{
                padding: "25px",
                textAlign: "center"
            }}>
                <h2>Connect With Us</h2>
                <p style={{ fontSize: "25px" }}>
                    f　◎　in　▶
                </p>
            </section>

            {/* Bottom navigation */}
            <div style={{
                position: "fixed",
                bottom: "12px",
                left: "3%",
                width: "94%",
                background: "#0B3D68",
                borderRadius: "40px",
                display: "flex",
                justifyContent: "space-around",
                padding: "15px 5px",
                boxSizing: "border-box",
                color: "white",
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
            }}>

                <button
                    onClick={() => router.push("/home")}
                    style={navStyle}
                >
                    🏠<span>Home</span>
                </button>

                <button
                    onClick={goToProperties}
                    style={navStyle}
                >
                    🏢<span>Properties</span>
                </button>

                <button
                    onClick={() => router.push("/leads")}
                    style={navStyle}
                >
                    👥<span>Leads</span>
                </button>

                <button
                    onClick={() => router.push("/community")}
                    style={navStyle}
                >
                    💬<span>Community</span>
                </button>

            </div>

        </div>
    );
}

const navStyle = {
    background: "transparent",
    border: "none",
    color: "white",
    fontSize: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "5px",
    cursor: "pointer"
};