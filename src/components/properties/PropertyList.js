import PropertyCard from "./PropertyCard";

export default function PropertyList({ properties = [], view = "grid" }) {
  if (properties.length === 0) {
    return (
      <div className="property-empty">
        <h3>No properties found!</h3>
        <p>Try changing your search or filters.</p>
      </div>
    );
  }

  return (
    <section className={`property-container ${view}`}>
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
        />
      ))}
    </section>
  );
}