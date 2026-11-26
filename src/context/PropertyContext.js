"use client";

import { createContext, useContext, useState } from "react";
import { properties as initialProperties } from "../data/properties";

const PropertyContext = createContext(null);

export function PropertyProvider({ children }) {
  const [properties, setProperties] = useState(initialProperties);

  return (
    <PropertyContext.Provider value={{ properties, setProperties }}>
      {children}
    </PropertyContext.Provider>
  );
}

export function useProperties() {
  const context = useContext(PropertyContext);

  if (!context) {
    throw new Error("useProperties must be used inside PropertyProvider");
  }

  return context;
}