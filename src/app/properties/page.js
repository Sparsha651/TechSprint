
'use client';

import { useState } from 'react';

export default function Properties() {
  const [search, setSearch] = useState('');
  const [bhk, setBhk] = useState('All');
  const [locality, setLocality] = useState('All');
  const [view, setView] = useState('grid');

  const properties = [
    {
      id: 1,
      name: 'Signature Global Park 2&3',
      location: 'Sohna Road, Gurgaon',
      bhk: '2 BHK',
      area: '1153 sqft',
      price: '₹1.16 Cr',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900'
    },
    {
      id: 2,
      name: 'Mahagun Puram',
      location: 'Ghaziabad, Delhi NCR',
      bhk: '3 BHK',
      area: '1350 sqft',
      price: '₹85 Lac',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900'
    },
    {
      id: 3,
      name: 'Godrej Woods',
      location: 'Sector 43, Noida',
      bhk: '2 BHK',
      area: '1200 sqft',
      price: '₹1.25 Cr',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900'
    },
    {
      id: 4,
      name: 'Prestige Lakeside',
      location: 'Whitefield, Bangalore',
      bhk: '3 BHK',
      area: '1600 sqft',
      price: '₹1.45 Cr',
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900'
    },
    {
      id: 5,
      name: 'Sobha Dream Acres',
      location: 'Panathur, Bangalore',
      bhk: '2 BHK',
      area: '1050 sqft',
      price: '₹95 Lac',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=900'
    },
    {
      id: 6,
      name: 'Brigade Cornerstone',
      location: 'Varthur, Bangalore',
      bhk: '3 BHK',
      area: '1450 sqft',
      price: '₹1.30 Cr',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900'
    }
  ];

  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.name.toLowerCase().includes(search.toLowerCase()) ||
      property.location.toLowerCase().includes(search.toLowerCase());

    const matchesBhk =
      bhk === 'All' || property.bhk === bhk;

    const matchesLocality =
      locality === 'All' ||
      property.location.toLowerCase().includes(locality.toLowerCase());

    return matchesSearch && matchesBhk && matchesLocality;
  });

  return (
    <main className="properties-page">

      {/* HEADER */}
      <header className="header">
        <button
          className="back-button"
          onClick={() => window.history.back()}
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
            <button onClick={() => setSearch('')}>✕</button>
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
              className={view === 'list' ? 'active' : ''}
              onClick={() => setView('list')}
            >
              ☰
            </button>

            <button
              className={view === 'grid' ? 'active' : ''}
              onClick={() => setView('grid')}
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

      {/* PROPERTY CARDS */}
      <section className={`property-container ${view}`}>

        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (

            <article className="property-card" key={property.id}>

              <div className="property-image">
                <img src={property.image} alt={property.name} />

                <span className="featured">Featured</span>

                <button
                  className="share-button"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: property.name,
                        text: property.location
                      });
                    } else {
                      navigator.clipboard.writeText(
                        `${property.name} - ${property.location}`
                      );
                      alert('Property details copied!');
                    }
                  }}
                >
                  ↗
                </button>
              </div>

              <div className="property-details">

                <h3>{property.name}</h3>

                <p className="location">
                  📍 {property.location}
                </p>

                <div className="property-info">
                  <span>{property.bhk}</span>
                  <span>|</span>
                  <span>{property.area}</span>
                </div>

                <div className="price-section">
                  <h3>{property.price}</h3>
                  <small>Starting Price</small>
                </div>

              </div>

            </article>

          ))
        ) : (
          <div className="empty">
            <h3>No properties found!</h3>
            <p>Try changing your search or filters.</p>
            <button onClick={() => {
              setSearch('');
              setBhk('All');
              setLocality('All');
            }}>
              Clear Filters
            </button>
          </div>
        )}

      </section>

      {/* BOTTOM NAVIGATION */}
      <nav className="bottom-nav">
        <div>⌂<small>Home</small></div>
        <div className="selected">▦<small>Properties</small></div>
        <div>♧<small>Leads</small></div>
        <div>₹<small>Payouts</small></div>
        <div>⌂<small>HouseCanvas</small></div>
        <div>☰<small>Menu</small></div>
      </nav>

      {/* CSS IN SAME FILE */}
      <style jsx>{`

        * {
          box-sizing: border-box;
        }

        .properties-page {
          min-height: 100vh;
          background: #f6f7f9;
          padding-bottom: 110px;
          font-family: Arial, sans-serif;
        }

        /* HEADER */

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

        /* SEARCH */

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

        /* FILTERS */

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

        /* HEADING */

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

        /* PROPERTY GRID */

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

        /* DETAILS */

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

        /* LIST VIEW */

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

        /* EMPTY RESULTS */

        .empty {
          grid-column: 1 / -1;
          text-align: center;
          padding: 45px 15px;
        }

        .empty p {
          color: #777;
          margin: 12px 0;
        }

        .empty button {
          background: #073d70;
          color: white;
          border: none;
          padding: 10px 18px;
          border-radius: 8px;
          cursor: pointer;
        }

        /* BOTTOM NAVIGATION */

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

        /* MOBILE */

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
