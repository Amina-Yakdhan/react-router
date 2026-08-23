import React from "react";

const Filter = ({ titleFilter, setTitleFilter, ratingFilter, setRatingFilter }) => {
  return (
    <section className="filter-section">
      <h2>Filter Movies</h2>
      <div className="filter-inputs">
        <input
          type="text"
          placeholder="Search by title..."
          value={titleFilter}
          onChange={(e) => setTitleFilter(e.target.value)}
        />
        <input
          type="number"
          min="0"
          max="10"
          step="0.1"
          placeholder="Minimum rating"
          value={ratingFilter}
          onChange={(e) => setRatingFilter(e.target.value)}
        />
      </div>
    </section>
  );
};

export default Filter;
