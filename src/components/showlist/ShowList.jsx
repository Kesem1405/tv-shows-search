import React from "react";
import './ShowList.css';
import ShowCard from "../showcard/ShowCard";

function ShowList({ results, hasSearched, onSelectShow, searchQuery }) {
  if (!hasSearched) {
    return <p className="empty-text">Start by searching for a TV show.</p>;
  }

  if (!results || results.length === 0) {
    return <p className="empty-text">No shows found.</p>;
  }

  return (
    <div>
        <div>
    <h2 className="results-header">Searching Results for "{searchQuery}" - {results.length} shows found</h2>
        </div>
  <div className="show-list">
    {results.map((item) => (
      <ShowCard
        key={item.show.id}
        show={item.show}
        onMoreInfo={() => onSelectShow(item.show)}
      />
    ))}
  </div>
  </div>
);
}

export default ShowList;
