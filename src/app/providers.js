"use client";

import { PropertyProvider } from "../context/PropertyContext";

export default function Providers({ children }) {
  return (
    <PropertyProvider>
      {children}
    </PropertyProvider>
  );
}