"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./navbar.css";

const navItems = [
  { name: "Home", path: "/home", icon: "⌂" },
  { name: "Property", path: "/properties", icon: "▦" },
  { name: "Leads", path: "/leads", icon: "♧" },
  { name: "Community", path: "/community", icon: "♙" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bottom-navbar">
      {navItems.map((item) => (
        <Link
          href={item.path}
          key={item.name}
          className={`bottom-nav-item ${
            pathname === item.path ? "active" : ""
          }`}
        >
          <span className="nav-icon">{item.icon}</span>
          <span>{item.name}</span>
        </Link>
      ))}
    </nav>
  );
}