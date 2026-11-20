import Link from "next/link";

export default function HomePage() {
  return (
    <main style={styles.container}>
      <nav style={styles.nav}>
        <h2 style={styles.logo}>House Easy</h2>

        <Link href="/properties" style={styles.navLink}>
          Properties
        </Link>
      </nav>

      <section style={styles.hero}>
        <h1>Find Your Perfect Property</h1>

        <p>
          Explore apartments, residential plots and commercial land
          with House Easy.
        </p>

        <Link href="/properties" style={styles.button}>
          Explore Properties
        </Link>
      </section>

      <section style={styles.features}>
        <h2>What Are You Looking For?</h2>

        <div style={styles.cards}>
          <div style={styles.featureCard}>
            <h3>Apartments</h3>
            <p>Explore comfortable homes for your family.</p>
            <Link href="/properties">View Apartments →</Link>
          </div>

          <div style={styles.featureCard}>
            <h3>Land & Plots</h3>
            <p>Discover residential, commercial and agricultural land.</p>
            <Link href="/properties">View Land →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#f8fafc",
  },

  nav: {
    padding: "18px 6%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "white",
  },

  logo: {
    color: "#2563eb",
  },

  navLink: {
    textDecoration: "none",
    color: "#2563eb",
  },

  hero: {
    textAlign: "center",
    padding: "100px 20px",
    background: "#eff6ff",
  },

  button: {
    display: "inline-block",
    marginTop: "20px",
    padding: "13px 22px",
    background: "#2563eb",
    color: "white",
    textDecoration: "none",
    borderRadius: "7px",
  },

  features: {
    padding: "45px 6%",
    textAlign: "center",
  },

  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
    gap: "20px",
    marginTop: "25px",
  },

  featureCard: {
    padding: "25px",
    background: "white",
    border: "1px solid #e5e7eb",
    borderRadius: "10px",
  },
};