"use client";

import Link from "next/link";

export default function PropertyCard({ property }) {
  const handleShare = async () => {
    const url = `${window.location.origin}/properties/${property.id}`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: property.name,
          text: property.location,
          url,
        });
      } else {
        await navigator.clipboard.writeText(url);
        alert("Property link copied!");
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        alert("Unable to share property.");
      }
    }
  };

  return (
    <article className="property-card">
      <div className="property-image">
        <img
          src={property.image}
          alt={property.name}
        />

        <span className="featured">
          {property.type}
        </span>

        <button
          className="share-button"
          onClick={handleShare}
          type="button"
          aria-label="Share property"
        >
          ↗
        </button>
      </div>

      <div className="property-card-content">
        <h3>{property.name}</h3>

        <p className="property-location">
          📍 {property.location}
        </p>

        <div className="property-info">
          {property.bhk && (
            <span>{property.bhk} BHK</span>
          )}

          {property.bhk && <span>|</span>}

          <span>{property.area} sqft</span>
        </div>

        <div className="price-section">
          <h3>{property.price}</h3>
          <small>Listed Price</small>
        </div>

        <Link
          href={`/properties/${property.id}`}
          className="view-details"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}