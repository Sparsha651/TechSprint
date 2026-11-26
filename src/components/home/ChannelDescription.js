import Link from "next/link";

export default function ChannelDescription() {
  return (
    <section className="channel-section">
      <h2>
        Join The ACRE <span>AURA</span> Revolution
      </h2>

      <div className="channel-intro">
        <p>
          Be part of a growing property network.
          Connect with buyers, sellers and channel
          partners through ACRE ARAURA.
        </p>
      </div>

      <h2 className="strength-heading">Channel Strength</h2>

      <div className="strength-card">
        <div>
          <h3>4000+</h3>
          <p>Strong Family of Channel Partners</p>
        </div>
        <div className="strength-icon">👥</div>
      </div>

      <div className="strength-card">
        <div>
          <h3>₹25+ Cr</h3>
          <p>Brokerage & Incentive Paid</p>
        </div>
        <div className="strength-icon">🏆</div>
      </div>

      <div className="social-links">
        <Link href="https://www.facebook.com/" target="_blank">f</Link>
        <Link href="https://www.instagram.com/" target="_blank">◎</Link>
        <Link href="https://www.linkedin.com/" target="_blank">in</Link>
        <Link href="https://www.youtube.com/" target="_blank">▶</Link>
      </div>
    </section>
  );
}