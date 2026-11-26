"use client";

export default function CommunityPostCard({ post, onLike }) {
  return (
    <article className="community-post">
      <div className="post-top">
        <div className="post-avatar">
          {post.author.charAt(0).toUpperCase()}
        </div>

        <div className="post-author">
          <h3>{post.author}</h3>
          <p>{post.role} · {post.time}</p>
        </div>

        <span className="post-category">
          {post.category}
        </span>
      </div>

      <div className="post-content">
        <h2>{post.title}</h2>
        <p>{post.content}</p>
      </div>

      <div className="post-actions">
        <button
          type="button"
          onClick={() => onLike(post.id)}
        >
          ❤️ Like ({post.likes})
        </button>

        <span>Community Discussion</span>
      </div>
    </article>
  );
}