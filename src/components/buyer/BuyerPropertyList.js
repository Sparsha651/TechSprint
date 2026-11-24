import BuyerPropertyCard from "./BuyerPropertyCard";

export default function BuyerPropertyList({ properties }) {
  if (properties.length === 0) {
    return (
      <div className="buyer-empty-state">
        <div>🏡</div>
        <h3>No Properties Found</h3>
        <p>Try changing your search or property filters.</p>
      </div>
    );
  }

  return (
    <div className="buyer-property-list">
      {properties.map((property) => (
        <BuyerPropertyCard
          key={property.id}
          property={property}
        />
      ))}
    </div>
  );
}