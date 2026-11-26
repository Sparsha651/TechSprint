"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/common/navbar";
import { useProperties } from "../../context/PropertyContext";
import "./page.css";
import Logo from "../../components/common/Logo";

export default function PropertiesPage() {
  const { properties } = useProperties();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredProperties = properties.filter((property) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      property.name?.toLowerCase().includes(searchText) ||
      property.location?.toLowerCase().includes(searchText) ||
      property.city?.toLowerCase().includes(searchText);

    const matchesFilter =
      filter === "All" || property.type === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <Navbar />

      <main className="properties-page">

    

        <section className="properties-hero">

           <div className="header-logo">
    <Logo />
  </div>
  
          <h1>Discover Your Perfect Property</h1>

          <p>
            Explore apartments, homes and land with ACRE AURA.
          </p>

          <input
            type="text"
            placeholder="Search by property name or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="property-search"
          />

          <div className="property-filters">
            {["All", "Apartment", "Land"].map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={
                  filter === item
                    ? "filter-btn active"
                    : "filter-btn"
                }
              >
                {item}
              </button>
            ))}
          </div>
        </section>

        <section className="properties-list-section">
          <h2>Available Properties</h2>

          <p className="property-count">
            {filteredProperties.length} properties found
          </p>

          {filteredProperties.length === 0 ? (
            <div className="no-properties">
              <h3>No Properties Found</h3>
              <p>Try another search or filter.</p>

              <button
                onClick={() => {
                  setSearch("");
                  setFilter("All");
                }}
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="properties-grid">
              {filteredProperties.map((property) => (
                <Link
                  href={`/properties/${property.id}`}
                  key={property.id}
                  className="property-card"
                >
                  <img
                    src={property.image}
                    alt={property.name}
                    className="property-image"
                  />

                  <div className="property-card-content">
                    <span className="property-type">
                      {property.type}
                    </span>

                    <h3>{property.name}</h3>

                    <p className="property-location">
                      📍 {property.location}
                    </p>

                    <div className="property-info">
                      {property.bhk && (
                        <span>{property.bhk} BHK</span>
                      )}

                      <span>{property.area} sqft</span>
                      <span>{property.city}</span>
                    </div>

                    <p className="property-description">
                      {property.description}
                    </p>

                    <h3 className="property-price">
                      {property.price}
                    </h3>

                    <span className="view-details">
                      View Details →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  );
}