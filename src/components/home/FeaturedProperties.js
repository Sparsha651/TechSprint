"use client";

import Link from "next/link";
import { useProperties } from "../../context/PropertyContext";

const cities = [
  { name: "Noida", search: "Noida" },
  { name: "Ghaziabad", search: "Ghaziabad" },
  { name: "Gurgaon", search: "Gurgaon" },
];

export default function FeaturedProperties() {
  const { properties } = useProperties();

  return (
    <section className="featured-section">
      <h2>Our Properties</h2>

      <div className="city-grid">
        {cities.map((city) => {
          const property = properties.find((item) =>
            `${item.city} ${item.location}`
              .toLowerCase()
              .includes(city.search.toLowerCase())
          );

          return (
            <Link
              href={`/properties?search=${encodeURIComponent(city.search)}`}
              className="city-card"
              key={city.name}
            >
              {property?.image ? (
                <img src={property.image} alt={city.name} />
              ) : (
                <div className="city-placeholder">⌂</div>
              )}

              <h3>{city.name}</h3>
            </Link>
          );
        })}
      </div>
    </section>
  );
}