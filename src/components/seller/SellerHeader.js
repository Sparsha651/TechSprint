
import Logo from "../common/Logo";

export default function SellerHeader() {
  return (
    <header className="seller-header">
      <div className="header-logo">
        <Logo />
      </div>
      <h1>List Your Property</h1>
      <p>
        Connect with potential buyers and showcase
        your property through Acre Aura.
      </p>
    </header>
  );
}