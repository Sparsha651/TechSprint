const categories = [
  "All Posts",
  "Buyers",
  "Sellers",
  "Channel Partners",
];

export default function CommunityTabs({ activeTab, setActiveTab }) {
  return (
    <div className="community-tabs">
      {categories.map((category) => (
        <button
          key={category}
          className={
            activeTab === category
              ? "community-tab active"
              : "community-tab"
          }
          onClick={() => setActiveTab(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}