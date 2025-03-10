import React from "react";

function EventFilter({ setFilter }) {
  return (
    <div className="btn-group">
      <label>Filter by Category:</label>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">All</option>
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
      </select>
    </div>
  );
}

export default EventFilter;
