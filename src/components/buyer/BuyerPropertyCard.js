export default function BuyerPropertyCard({ property }) {

  return (
    <article className="buyer-property-card">
      <div className="buyer-property-image">
  <img
    src={property.image}
    alt={property.name}
  />
</div>

      <div className="buyer-property-info">
        <h3>{property.title}</h3>
        <p>{property.location}</p>
        <h4>{property.price}</h4>
        <span>{property.type}</span>
      </div>
    </article>
  );
}