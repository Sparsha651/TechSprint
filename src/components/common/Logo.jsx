import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/home" className="acre-aura-logo">
      <span className="logo-acre">ACRE</span>
      <span className="logo-aura">AURA</span>
    </Link>
  );
}