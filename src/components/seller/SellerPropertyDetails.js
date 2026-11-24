export default function SellerPropertyDetails({ formData, handleChange }) {
  return (
    <>
      <label>Property Type</label>
      <select
        name="propertyType"
        value={formData.propertyType}
        onChange={handleChange}
        required
      >
        <option value="">Select property type</option>
        <option value="House">House</option>
        <option value="Apartment">Apartment</option>
        <option value="Land">Land</option>
      </select>

      <label>Property Location</label>
      <input
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="Enter property location"
        required
      />

      <label>Expected Price</label>
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Enter expected price"
        required
      />

      <label>Property Description</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Describe your property"
        rows="5"
        required
      />
    </>
  );
}