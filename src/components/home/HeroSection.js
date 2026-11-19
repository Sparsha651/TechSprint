"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="home-hero">

      {/* TOP HEADER */}
      <header className="home-header">
        <div className="header-top">

          <Link href="/home" className="brand-logo">
            ACRE<span>AURA</span>
          </Link>

          <div className="header-icons">
            <Link href="/notifications" aria-label="Notifications">
              ♧
            </Link>

            <Link href="/profile" aria-label="Profile">
              ◉
            </Link>
          </div>

        </div>

        {/* SEARCH BAR */}
        <form action="/properties" method="GET" className="home-search">

          <button type="submit" aria-label="Search">
            ⌕
          </button>

          <input
            type="search"
            name="search"
            placeholder="Search for properties"
          />

        </form>
      </header>

      {/* HERO IMAGE SECTION */}
     <div className="hero-banner">
  <img
    src="/images/hero-property.png"
    alt="Property"
    className="hero-background-image"
  />

  <div className="hero-banner-content">
    <h2>
      The Hassle-Free Way of
      <br />
      Buying/Selling Properties
    </h2>
    <p>Exclusive Inventory | Best Prices | Trusted Connections</p>
  </div>
</div>

    </section>
  );
}