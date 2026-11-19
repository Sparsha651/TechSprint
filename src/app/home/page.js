import Navbar from "../../components/common/navbar";
import HeroSection from "../../components/home/HeroSection";
import FeaturedProperties from "../../components/home/FeaturedProperties";
import ChannelDescription from "../../components/home/ChannelDescription";
import "../../components/home/home.css";

export default function HomePage() {
  return (
    <>
      <main className="home-page">
        <HeroSection />
        <FeaturedProperties />
        <ChannelDescription />

        <footer className="home-footer">
          © {new Date().getFullYear()} ACRE ARAURA.
          All rights reserved.
        </footer>
      </main>

      <Navbar />
    </>
  );
}