
"use client";

import { useState } from "react";
import PropertyList from "@/components/properties/PropertyList";

export default function Properties() {
  // PROPERTY DATA
  const properties = [
    {
      id: "1",
      name: "Signature Global Park 2&3",
      location: "Sohna Road, Gurgaon",
      city: "Gurgaon",
      bhk: "2 BHK",
      area: "1153 sqft",
      price: "₹1.16 Cr",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900",
      description: "A residential property with spacious interiors and modern facilities.",
      features: ["Parking", "Security", "Power Backup"],
    },
    {
      id: "2",
      name: "Mahagun Puram",
      location: "Ghaziabad, Delhi NCR",
      city: "Ghaziabad",
      bhk: "3 BHK",
      area: "1350 sqft",
      price: "₹85 Lac",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900",
      description: "A comfortable family home with spacious rooms.",
      features: ["Parking", "Garden", "Security"],
    },
    {
      id: "3",
      name: "Godrej Woods",
      location: "Sector 43, Noida",
      city: "Noida",
      bhk: "2 BHK",
      area: "1200 sqft",
      price: "₹1.25 Cr",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900",
      description: "A modern residential property in Sector 43, Noida.",
      features: ["Gym", "Garden", "Security"],
    },
    {
      id: "4",
      name: "Prestige Lakeside",
      location: "Whitefield, Bangalore",
      city: "Bangalore",
      bhk: "3 BHK",
      area: "1600 sqft",
      price: "₹1.45 Cr",
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900",
      description: "A spacious residential property in Whitefield, Bangalore.",
      features: ["Swimming Pool", "Parking", "Gym"],
    },
    {
      id: "5",
      name: "Sobha Dream Acres",
      location: "Panathur, Bangalore",
      city: "Bangalore",
      bhk: "2 BHK",
      area: "1050 sqft",
      price: "₹95 Lac",
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=900",
      description: "A residential property with convenient nearby facilities.",
      features: ["Parking", "Security", "Garden"],
    },
    {
      id: "6",
      name: "Brigade Cornerstone",
      location: "Varthur, Bangalore",
      city: "Bangalore",
      bhk: "3 BHK",
      area: "1450 sqft",
      price: "₹1.30 Cr",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900",
      description: "A modern home with spacious interiors in Varthur, Bangalore.",
      features: ["Parking", "Security", "Power Backup"],
    },
  ];

  const [search, setSearch] = useState("");
  const [bhk, setBhk] = useState("All");
  const [locality, setLocality] = useState("All");
  const [view, setView] = useState("grid");

  // FILTER PROPERTIES
  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.name.toLowerCase().includes(search.toLowerCase()) ||
      property.location.toLowerCase().includes(search.toLowerCase());

    const matchesBhk =
      bhk === "All" || property.bhk === bhk;

    const matchesLocality =
      locality === "All" || property.city === locality;

    return matchesSearch && matchesBhk && matchesLocality;
  });

  const clearFilters = () => {
    setSearch("");
    setBhk("All");
    setLocality("All");
  };

  return (
    <main className="properties-page">

      {/* HEADER */}
      <header className="header">
        <button
          className="back-button"
          onClick={() => window.history.back()}
          type="button"
        >
          ←
        </button>

        <h1>Our Properties</h1>

        <div></div>
      </header>

      {/* SEARCH AND FILTERS */}
      <section className="controls">
        <div className="search-box">
          <span>⌕</span>

          <input
            type="text"
            placeholder="Search for projects"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
            >
              ✕
            </button>
          )}
        </div>

        <div className="filter-row">
          <select
            value={bhk}
            onChange={(e) => setBhk(e.target.value)}
          >
            <option value="All">All BHK</option>
            <option value="1 BHK">1 BHK</option>
            <option value="2 BHK">2 BHK</option>
            <option value="3 BHK">3 BHK</option>
          </select>

          <select
            value={locality}
            onChange={(e) => setLocality(e.target.value)}
          >
            <option value="All">All Localities</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Gurgaon">Gurgaon</option>
            <option value="Noida">Noida</option>
            <option value="Ghaziabad">Ghaziabad</option>
          </select>

          <div className="view-buttons">
            <button
              type="button"
              className={view === "list" ? "active" : ""}
              onClick={() => setView("list")}
            >
              ☰
            </button>

            <button
              type="button"
              className={view === "grid" ? "active" : ""}
              onClick={() => setView("grid")}
            >
              ▦
            </button>
          </div>
        </div>
      </section>

      {/* PROPERTY HEADING */}
      <section className="property-heading">
        <h2>Explore Properties</h2>
        <p>{filteredProperties.length} properties found</p>
      </section>

      {/* PROPERTY LIST */}
      <PropertyList
        properties={filteredProperties}
        view={view}
      />

      {filteredProperties.length === 0 && (
        <div className="clear-filter">
          <button onClick={clearFilters} type="button">
            Clear Filters
          </button>
        </div>
      )}

      {/* BOTTOM NAVIGATION */}
      <nav className="bottom-nav">
        <div>⌂<small>Home</small></div>
        <div className="selected">▦<small>Properties</small></div>
        <div>♧<small>Leads</small></div>
        <div>₹<small>Payouts</small></div>
        <div>⌂<small>HouseCanvas</small></div>
        <div>☰<small>Menu</small></div>
      </nav>

      {/* STYLING */}
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        .properties-page {
          min-height: 100vh;
          background: #f6f7f9;
          padding-bottom: 110px;
          font-family: Arial, sans-serif;
        }

        .header {
          background: #073d70;
          color: white;
          height: 90px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 5%;
        }

        .header h1 {
          font-size: 26px;
        }

        .back-button {
          background: transparent;
          border: none;
          color: white;
          font-size: 32px;
          cursor: pointer;
        }

        .controls {
          background: white;
          padding: 25px 4%;
        }

        .search-box {
          display: flex;
          align-items: center;
          gap: 12px;
          height: 55px;
          padding: 0 15px;
          border: 1px solid #ccc;
          border-radius: 12px;
        }

        .search-box span {
          font-size: 27px;
          color: #073d70;
        }

        .search-box input {
          flex: 1;
          min-width: 0;
          border: none;
          outline: none;
          font-size: 16px;
        }

        .search-box button {
          background: transparent;
          border: none;
          cursor: pointer;
        }

        .filter-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 18px;
        }

        .filter-row select {
          padding: 12px;
          border: 1px solid #ccc;
          border-radius: 25px;
          background: white;
          cursor: pointer;
          min-width: 110px;
        }

        .view-buttons {
          display: flex;
          gap: 7px;
          margin-left: auto;
        }

        .view-buttons button {
          background: white;
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 9px 13px;
          cursor: pointer;
          font-size: 20px;
        }

        .view-buttons button.active {
          background: #dce8f5;
          color: #073d70;
        }

        .property-heading {
          padding: 22px 4% 0;
        }

        .property-heading h2 {
          font-size: 23px;
          color: #172536;
        }

        .property-heading p {
          color: #777;
          font-size: 14px;
          margin-top: 7px;
        }

        .property-container {
          padding: 22px 4%;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 25px;
        }

        .property-card {
          background: white;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
          min-width: 0;
        }

        .property-image {
          height: 230px;
          position: relative;
        }

        .property-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .featured {
          position: absolute;
          top: 12px;
          left: 12px;
          background: #073d70;
          color: white;
          padding: 7px 12px;
          border-radius: 5px;
          font-size: 12px;
        }

        .share-button {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 38px;
          height: 38px;
          border: none;
          border-radius: 50%;
          background: white;
          color: #073d70;
          cursor: pointer;
          font-size: 20px;
        }

        .property-details {
          padding: 17px;
        }

        .property-details h3 {
          font-size: 18px;
          color: #222;
          margin-bottom: 10px;
        }

        .location {
          font-size: 14px;
          color: #777;
          margin-bottom: 13px;
        }

        .property-info {
          display: flex;
          gap: 10px;
          color: #555;
          font-size: 14px;
          margin-bottom: 17px;
        }

        .price-section h3 {
          color: #c97878;
          font-size: 23px;
          margin-bottom: 5px;
        }

        .price-section small {
          color: #999;
        }

        .view-details {
          display: inline-block;
          margin-top: 15px;
          padding: 10px 16px;
          background: #073d70;
          color: white;
          text-decoration: none;
          border-radius: 7px;
          font-size: 14px;
        }

        .property-container.list {
          grid-template-columns: 1fr;
        }

        .property-container.list .property-card {
          display: flex;
        }

        .property-container.list .property-image {
          width: 40%;
          height: 200px;
          flex-shrink: 0;
        }

        .property-container.list .property-details {
          flex: 1;
          min-width: 0;
        }

        .empty {
          grid-column: 1 / -1;
          text-align: center;
          padding: 45px 15px;
        }

        .empty p {
          color: #777;
          margin: 12px 0;
        }

        .clear-filter {
          text-align: center;
          padding-bottom: 25px;
        }

        .clear-filter button {
          background: #073d70;
          color: white;
          border: none;
          padding: 10px 18px;
          border-radius: 8px;
          cursor: pointer;
        }

        .bottom-nav {
          position: fixed;
          bottom: 12px;
          left: 3%;
          width: 94%;
          background: #073d70;
          border-radius: 40px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 13px 5px;
          z-index: 100;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }

        .bottom-nav div {
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
          font-size: 22px;
          flex: 1;
        }

        .bottom-nav small {
          font-size: 10px;
        }

        .bottom-nav .selected {
          color: #e28c9c;
        }

        @media (max-width: 650px) {
          .header {
            height: 80px;
          }

          .header h1 {
            font-size: 22px;
          }

          .property-container {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .property-image {
            height: 240px;
          }

          .filter-row {
            flex-wrap: wrap;
          }

          .filter-row select {
            flex: 1;
            min-width: 0;
          }

          .view-buttons {
            margin-left: 0;
          }

          .property-container.list .property-image {
            width: 40%;
            height: 180px;
          }

          .property-container.list .property-details {
            padding: 10px;
          }

          .property-container.list .property-details h3 {
            font-size: 14px;
          }

          .bottom-nav div {
            font-size: 19px;
          }

          .bottom-nav small {
            font-size: 9px;
          }
        }
      `}</style>
    </main>
  );
}
