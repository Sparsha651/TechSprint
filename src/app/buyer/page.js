"use client";

import { useState } from "react";
import Navbar from "../../components/common/navbar";
import BuyerHeader from "../../components/buyer/BuyerHeader";
import BuyerSearch from "../../components/buyer/BuyerSearch";
import BuyerFilters from "../../components/buyer/BuyerFilters";
import BuyerPropertyList from "../../components/buyer/BuyerPropertyList";

import "./buyer.css";

const properties = [
  {
    id: 1,
    title: "Beautiful Family House",
    location: "Mangalore",
    price: "₹75,00,000",
    type: "House",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900",
  },
  {
    id: 2,
    title: "Modern Apartment",
    location: "Bangalore",
    price: "₹55,00,000",
    type: "Apartment",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900",
  },
  {
    id: 3,
    title: "Residential Land",
    location: "Mysore",
    price: "₹30,00,000",
    type: "Land",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900",
  },
];

export default function BuyerPage() {
  const [search, setSearch] = useState("");
  const [propertyType, setPropertyType] = useState("All");

  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(search.toLowerCase()) ||
      property.location.toLowerCase().includes(search.toLowerCase());

    const matchesType =
      propertyType === "All" || property.type === propertyType;

    return matchesSearch && matchesType;
  });

  return (
    <>
      <main className="buyer-page">

        

        <BuyerHeader />

        <section className="buyer-content">
          <h2>Explore Properties</h2>

          <div className="buyer-controls">
            <BuyerSearch search={search} setSearch={setSearch} />
            <BuyerFilters
              propertyType={propertyType}
              setPropertyType={setPropertyType}
            />
          </div>

          <BuyerPropertyList properties={filteredProperties} />
        </section>
      </main>

      <Navbar />
    </>
  );
}