"use client";

import { useState } from "react";
import Navbar from "../../components/common/navbar";
import SellerHeader from "../../components/seller/SellerHeader";
import SellerForm from "../../components/seller/SellerForm";

import "./seller.css";

export default function SellerPage() {
  const [formData, setFormData] = useState({
    sellerName: "",
    email: "",
    phone: "",
    propertyType: "",
    location: "",
    price: "",
    description: "",
  });

  const [message, setMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setMessage(
      "Your details have been submitted successfully."
    );
  }

  return (
    <>
      <main className="seller-page">


        <SellerHeader />

        <SellerForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          message={message}
        />
      </main>

      <Navbar />
    </>
  );
}