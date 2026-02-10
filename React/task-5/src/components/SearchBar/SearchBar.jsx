export default function SearchBar({ onSearch, updateParams }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const query = form.elements.query.value.trim();

    if (query === "") {
      return;
    }

    onSearch(query);
    updateParams(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" />
      <button type="submit">Search</button>
    </form>
  );
}
