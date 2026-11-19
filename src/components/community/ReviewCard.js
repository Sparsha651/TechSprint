export default function ReviewCard({ review }) {
  return (
    <article className="review-card">
      <div className="review-card-top">
        <div className="review-avatar">
          {review.name.charAt(0).toUpperCase()}
        </div>

        <div className="review-user">
          <h3>{review.name}</h3>
          <p>{review.role} · {review.time}</p>
        </div>
      </div>

      <div className="review-stars">
        {"★".repeat(review.rating)}
        {"☆".repeat(5 - review.rating)}
      </div>

      <p className="review-comment">
        {review.comment}
      </p>
    </article>
  );
}