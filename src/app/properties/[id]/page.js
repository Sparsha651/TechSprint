"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import Navbar from "../../../components/common/navbar";
import { useProperties } from "../../../context/PropertyContext";

import "./page.css";

export default function PropertyDetailsPage() {
  const { id } = useParams();

  const { properties } = useProperties();

  const property = properties.find(
    (item) => String(item.id) === String(id)
  );

  if (!property) {
    return (
      <>
        <Navbar />

        <main className="property-detail-page">
          <h1>Property Not Found</h1>

          <p>This property does not exist.</p>

          <Link href="/properties">
            Back to Properties
          </Link>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="property-detail-page">
        <Link
          href="/properties"
          className="back-properties"
        >
          ← Back to Properties
        </Link>

        <div className="property-detail-card">
          <img
            src={property.image}
            alt={property.name}
            className="property-detail-image"
          />

          <div className="property-detail-content">
            <span className="detail-type">
              {property.type}
            </span>

            <h1>{property.name}</h1>

            <p className="property-location">
              📍 {property.location}
            </p>

            <h2>{property.price}</h2>

            <div className="detail-info">
              {property.bhk && (
                <span>{property.bhk} BHK</span>
              )}

              <span>{property.area} sqft</span>

              <span>{property.city}</span>
            </div>

            <h3>About this Property</h3>

            <p>{property.description}</p>

            <div className="property-features">
              {property.features?.map((feature, index) => (
                <span key={index}>
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}