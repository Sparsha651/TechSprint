"use client";

import { useRouter } from "next/navigation";
import Logo from "../common/Logo.jsx";
export default function LeadRoleSelection() {
  const router = useRouter();

  return (
    <div className="leads-content">

      {/* Leads Header */}
      <section className="leads-header">
        <Logo/>
        <h1 style={{ textAlign: "center" }}>LEADS</h1>

        <h1>Connect. Explore. Discover.</h1>

        <p>
          Find the right property opportunities or connect
          with people looking to buy and sell.
        </p>
      </section>

      {/* Buyer and Seller Selection */}
      <section className="lead-role-section">

        <h2>How would you like to continue?</h2>

        <p>Choose your role to explore the right opportunities.</p>

        <div className="lead-role-cards">

          {/* Buyer Card */}
          <article className="lead-role-card">
            <div className="role-icon">🏡</div>

            <h3>I'm a Buyer</h3>

            <p>
              Explore residential properties, apartments
              and available land.
            </p>

            <button onClick={() => router.push("/buyer")}>
              Continue as Buyer
            </button>
          </article>

          {/* Seller Card */}
          <article className="lead-role-card">
            <div className="role-icon">📋</div>

            <h3>I'm a Seller</h3>

            <p>
              Connect with potential buyers and get started
              with your property listing.
            </p>

            <button onClick={() => router.push("/seller")}>
              Continue as Seller
            </button>
          </article>

        </div>
      </section>

    </div>
  );
}