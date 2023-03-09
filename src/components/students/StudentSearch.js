import React from "react";

export default function SearchStudent({ title, search, setSearch }) {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder={title}
        aria-label={title}
        aria-describedby="button-addon2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
