import SellerPropertyDetails from "./SellerPropertyDetails";
export default function SellerForm({
  formData,
  handleChange,
  handleSubmit,
  message,
}) {
  return (
    <section className="seller-form-section">
      <h2>Seller Details</h2>
      <p>Enter your contact and property information.</p>

      <form className="seller-form" onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          name="sellerName"
          value={formData.sellerName}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
        />

        <label>Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          required
        />

        <SellerPropertyDetails
          formData={formData}
          handleChange={handleChange}
        />

        <button type="submit">Submit Property Details</button>

        {message && (
          <>
          <p className="seller-success-message">{message}</p>
          <p style={{ color: "red", marginTop: "8px" }}>
      Your request will be verified by the Admin soon and you will be notified.
    </p>
          </>
        )}
      </form>
    </section>
  );
}