export default function BuyerSearch({ search, setSearch }) {
  return (
    <input
      className="buyer-search-input"
      type="text"
      placeholder="Search by property name or location"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}