"use client";

import { useState } from "react";

export default function CommunityComposer({ onAddPost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Buyers");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      return;
    }

    onAddPost({
      id: Date.now(),
      author: "You",
      role:
        category === "Channel Partners"
          ? "Channel Partner"
          : category === "Buyers"
          ? "Buyer"
          : "Seller",
      category,
      time: "Just now",
      title: title.trim(),
      content: content.trim(),
      likes: 0,
    });

    setTitle("");
    setContent("");
    setCategory("Buyers");
  }

  return (
    <form className="community-composer" onSubmit={handleSubmit}>
      <h2>Create a Post</h2>

      <input
        type="text"
        placeholder="Give your post a title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Share something with the community..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows="4"
        required
      />

      <div className="composer-bottom">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Buyers">Buyers</option>
          <option value="Sellers">Sellers</option>
          <option value="Channel Partners">
            Channel Partners
          </option>
        </select>

        <button type="submit">Publish Post</button>
      </div>
    </form>
  );
}