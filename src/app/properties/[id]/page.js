
"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function PropertyDetails() {
  const params = useParams();

  // PROPERTY DATA
  const properties = [
    {
      id: "1",
      name: "Signature Global Park 2&3",
      location: "Sohna Road, Gurgaon",
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
      bhk: "3 BHK",
      area: "1450 sqft",
      price: "₹1.30 Cr",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900",
      description: "A modern home with spacious interiors in Varthur, Bangalore.",
      features: ["Parking", "Security", "Power Backup"],
    },
  ];

  const property = properties.find(
    (item) => item.id === String(params.id)
  );

  if (!property) {
    return (
      <main className="details-page">
        <h1>Property Not Found</h1>
        <Link href="/properties">
          Back to Properties
        </Link>
      </main>
    );
  }

  return (
    <main className="details-page">

      <Link href="/properties" className="back-link">
        ← Back to Properties
      </Link>

      <div className="details-card">

        <img
          src={property.image}
          alt={property.name}
          className="details-image"
        />

        <div className="details-content">

          <h1>{property.name}</h1>

          <p className="details-location">
            📍 {property.location}
          </p>

          <h2 className="details-price">
            {property.price}
          </h2>

          {/* PROPERTY INFORMATION */}

          <div className="details-info">

            <div>
              <strong>BHK</strong>
              <p>{property.bhk}</p>
            </div>

            <div>
              <strong>Area</strong>
              <p>{property.area}</p>
            </div>

            <div>
              <strong>Property Type</strong>
              <p>Apartment</p>
            </div>

          </div>

          {/* DESCRIPTION */}

          <h2>About This Property</h2>

          <p>{property.description}</p>

          {/* AMENITIES */}

          <h2>Facilities and Amenities</h2>

          <ul>
            {property.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <Link
            href="/properties"
            className="back-button-link"
          >
            Explore More Properties
          </Link>

        </div>
      </div>

      <style jsx>{`
        .details-page {
          min-height: 100vh;
          background: #f6f7f9;
          padding: 35px 5%;
          font-family: Arial, sans-serif;
          color: #222;
        }

        .back-link {
          display: inline-block;
          margin-bottom: 20px;
          color: #073d70;
          text-decoration: none;
        }

        .details-card {
          background: white;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
        }

        .details-image {
          width: 100%;
          height: 400px;
          object-fit: cover;
        }

        .details-content {
          padding: 30px;
        }

        .details-content h1 {
          color: #073d70;
          margin-bottom: 12px;
        }

        .details-location {
          color: #777;
          margin-bottom: 18px;
        }

        .details-price {
          color: #c97878;
          margin-bottom: 25px;
        }

        .details-info {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
          margin-bottom: 30px;
          padding: 20px;
          background: #f6f7f9;
          border-radius: 10px;
        }

        .details-info p {
          margin-top: 8px;
          color: #666;
        }

        .details-content h2 {
          color: #073d70;
          margin: 25px 0 12px;
        }

        .details-content li {
          margin: 10px 0;
        }

        .back-button-link {
          display: inline-block;
          margin-top: 25px;
          background: #073d70;
          color: white;
          padding: 12px 18px;
          border-radius: 7px;
          text-decoration: none;
        }

        @media (max-width: 600px) {
          .details-image {
            height: 250px;
          }

          .details-content {
            padding: 18px;
          }

          .details-info {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

    </main>
  );
}
