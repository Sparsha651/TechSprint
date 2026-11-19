"use client";

import { useState } from "react";

import Navbar from "../../components/common/navbar";

import CommunityHeader from "../../components/community/CommunityHeader";
import CommunityTabs from "../../components/community/CommunityTabs";
import CommunityComposer from "../../components/community/CommunityComposer";
import CommunityPostCard from "../../components/community/CommunityPostCard";
import CommunitySidebar from "../../components/community/CommunitySidebar";

import { initialCommunityPosts } from "../../data/communityPosts";

import "./page.css";

export default function CommunityPage() {
  const [posts, setPosts] = useState(initialCommunityPosts);
  const [activeTab, setActiveTab] = useState("All Posts");

  function addPost(newPost) {
    setPosts((previousPosts) => [newPost, ...previousPosts]);
  }

  function likePost(postId) {
    setPosts((previousPosts) =>
      previousPosts.map((post) =>
        post.id === postId
          ? { ...post, likes: post.likes + 1 }
          : post
      )
    );
  }

  const filteredPosts =
    activeTab === "All Posts"
      ? posts
      : posts.filter((post) => post.category === activeTab);

  return (
    <>
      <main className="community-page">

        <CommunityHeader />

        <div className="community-layout">

          <section className="community-main">

            <CommunityComposer onAddPost={addPost} />

            <CommunityTabs
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            <div className="community-feed">

              <div className="feed-heading">
                <h2>Community Feed</h2>
                <span>{filteredPosts.length} Posts</span>
              </div>

              {filteredPosts.length === 0 ? (
                <div className="empty-community">
                  <h3>No Posts Yet</h3>
                  <p>
                    Be the first to share something
                    in this category.
                  </p>
                </div>
              ) : (
                filteredPosts.map((post) => (
                  <CommunityPostCard
                    key={post.id}
                    post={post}
                    onLike={likePost}
                  />
                ))
              )}

            </div>

          </section>

          <CommunitySidebar />

        </div>

      </main>

      <Navbar />
    </>
  );
}