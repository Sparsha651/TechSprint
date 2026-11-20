"use client";

import { useState } from "react";

export default function FeedbackForm({ onAddReview }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("Buyer");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !comment.trim()) {
      return;
    }

    onAddReview({
      id: Date.now(),
      name: name.trim(),
      role,
      rating,
      comment: comment.trim(),
      time: "Just now",
    });

    setName("");
    setRole("Buyer");
    setRating(5);
    setComment("");
  }

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <h2>Share Your Feedback</h2>
      <p>Tell us about your experience with Acre Aura.</p>

      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="Buyer">Buyer</option>
        <option value="Seller">Seller</option>
        <option value="Channel Partner">Channel Partner</option>
      </select>

      <label>Rate your experience</label>

      <div className="rating-selector">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className={rating >= star ? "selected-star" : ""}
            onClick={() => setRating(star)}
            aria-label={`Rate ${star} out of 5`}
          >
            ★
          </button>
        ))}
      </div>

      <textarea
        placeholder="Write your feedback..."
        rows="4"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
      />

      <button type="submit" className="feedback-submit">
        Submit Feedback
      </button>
    </form>
  );
}