"use client";

import FeedbackForm from "./FeedbackForm";
import ReviewCard from "./ReviewCard";

export default function FeedbackSection({
  reviews,
  onAddReview,
}) {
  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((total, review) => total + review.rating, 0) /
          reviews.length
        ).toFixed(1)
      : "0.0";

  return (
    <section className="feedback-section">
      <div className="feedback-heading">
        <h2>User Feedback & Reviews</h2>
        <p>Experiences shared by our Acre Aura community.</p>
      </div>

      <div className="rating-summary">
        <h3>{averageRating} / 5</h3>
        <div className="review-stars">★★★★★</div>
        <p>Based on {reviews.length} reviews</p>
      </div>

      <FeedbackForm onAddReview={onAddReview} />

      <div className="reviews-list">
        <h2>Community Reviews</h2>

        {reviews.length === 0 ? (
          <p>Be the first to share your feedback!</p>
        ) : (
          reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))
        )}
      </div>
    </section>
  );
}