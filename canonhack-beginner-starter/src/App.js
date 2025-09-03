import React, { useState } from "react";
import { baseText } from "./baseText";

const filters = {
  "Daddy Darcy": (text) =>
    text.replace(/Mr\. Darcy/g, "Daddy Darcy").replace(/Darcy/g, "Daddy"),
  "Pride & Profanity": (text) =>
    text.replace(/very/g, "hella").replace(/indeed/g, "damn right"),
};

export default function App() {
  const [activeFilters, setActiveFilters] = useState([]);

  const toggleFilter = (name) => {
    setActiveFilters((prev) =>
      prev.includes(name) ? prev.filter((f) => f !== name) : [...prev, name]
    );
  };

  const filteredText = activeFilters.reduce(
    (text, filterName) => filters[filterName](text),
    baseText
  );

  return (
    <div style={{ padding: "2em", fontFamily: "sans-serif" }}>
      <h1>CanonHack • Beginner Demo</h1>
      <h3>Filters</h3>
      {Object.keys(filters).map((name) => (
        <label key={name} style={{ display: "block" }}>
          <input
            type="checkbox"
            checked={activeFilters.includes(name)}
            onChange={() => toggleFilter(name)}
          />
          {name}
        </label>
      ))}
      <hr />
      <pre style={{ whiteSpace: "pre-wrap" }}>{filteredText}</pre>
    </div>
  );
}
