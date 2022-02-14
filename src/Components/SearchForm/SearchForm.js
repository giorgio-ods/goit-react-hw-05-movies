import { useState } from "react";

export default function SearchForm({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim() === "") {
      alert("Empty");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="search" value={query} onChange={handleInputChange}></input>
        <button type="submit">Search</button>
      </form>
    </>
  );
}
