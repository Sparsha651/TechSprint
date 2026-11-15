"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import AuthLayout from "@/components/common/AuthLayout";
import AuthButton from "@/components/common/AuthButton";

import "./page.css";

export default function SignupPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    occupation: "",
    location: "",
    purpose: "",
    propertyType: "",
    budget: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    router.push(
      `/verify-otp?type=signup&phone=${encodeURIComponent(formData.phone)}`
    );
  };

  return (
    <AuthLayout>
      <div className="signup-card">
        <h1>Create Your Account</h1>

        <p className="signup-description">
          Join AcreAura and discover the right property for your future.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="signup-field">
            <label>Full Name *</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="signup-field">
            <label>Mobile Number *</label>
            <div className="signup-phone">
              <span>+91</span>
              <input
                type="tel"
                name="phone"
                placeholder="Enter 10-digit mobile number"
                value={formData.phone}
                onChange={handleChange}
                maxLength="10"
                inputMode="numeric"
                pattern="[0-9]{10}"
                required
              />
            </div>
          </div>

          <div className="signup-field">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="signup-field">
            <label>Occupation *</label>
            <input
              type="text"
              name="occupation"
              placeholder="Example: Student, Engineer, Business"
              value={formData.occupation}
              onChange={handleChange}
              required
            />
          </div>

          <div className="signup-field">
            <label>Current Location *</label>
            <input
              type="text"
              name="location"
              placeholder="Enter your city or location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="signup-field">
            <label>What is your purpose of joining AcreAura? *</label>
            <select
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              required
            >
              <option value="">Select your purpose</option>
              <option value="Buying a home">Buying a Home</option>
              <option value="Buying land or a plot">Buying Land / Plot</option>
              <option value="Buying commercial property">
                Buying Commercial Property
              </option>
              <option value="Selling a property">Selling a Property</option>
              <option value="Exploring property investment">
                Exploring Property Investment
              </option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="signup-field">
            <label>Preferred Property Type *</label>
            <select
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              required
            >
              <option value="">Select property type</option>
              <option value="House">House</option>
              <option value="Apartment / Flat">Apartment / Flat</option>
              <option value="Residential Plot">Residential Plot</option>
              <option value="Agricultural Land">Agricultural Land</option>
              <option value="Commercial Property">Commercial Property</option>
              <option value="Not Decided Yet">Not Decided Yet</option>
            </select>
          </div>

          <div className="signup-field">
            <label>Approximate Budget (Optional)</label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
            >
              <option value="">Select your budget</option>
              <option value="Below ₹20 Lakhs">Below ₹20 Lakhs</option>
              <option value="₹20–50 Lakhs">₹20–50 Lakhs</option>
              <option value="₹50 Lakhs–1 Crore">₹50 Lakhs–1 Crore</option>
              <option value="₹1–2 Crores">₹1–2 Crores</option>
              <option value="Above ₹2 Crores">Above ₹2 Crores</option>
              <option value="Not Decided">Not Decided</option>
            </select>
          </div>

          <AuthButton className="signup-submit">
            Continue to Verify OTP
          </AuthButton>
        </form>

        <p className="signup-login">
          Already have an account?{" "}
          <Link href="/login">Login</Link>
        </p>

        <p className="signup-terms">
          By continuing, you agree to AcreAura's Terms and Privacy Policy.
        </p>
      </div>
    </AuthLayout>
  );
}