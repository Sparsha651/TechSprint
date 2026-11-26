export default function BuyerFilters({ propertyType, setPropertyType }) {
  return (
    <select
      className="buyer-filter-select"
      value={propertyType}
      onChange={(e) => setPropertyType(e.target.value)}
    >
      <option value="All">All Properties</option>
      <option value="House">House</option>
      <option value="Apartment">Apartment</option>
      <option value="Land">Land</option>
    </select>
  );
}