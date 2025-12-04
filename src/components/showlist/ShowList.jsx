import React, { useState, useEffect, useRef } from "react";
import "./ShowList.css";
import ShowCard from "../showcard/ShowCard";

const PAGE_SIZE = 10;

function ShowList({ results, hasSearched, onSelectShow, searchQuery }) {
  const [currentPage, setCurrentPage] = useState(1);
  const listTopRef = useRef(null);

  // Whenever a new search is made, go back to page 1
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, results]);

  if (!hasSearched) {
    return <p className="empty-text">Start by searching for a TV show.</p>;
  }

  if (!results || results.length === 0) {
    return <p className="empty-text">No shows found.</p>;
  }

  const totalPages = Math.ceil(results.length / PAGE_SIZE);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const currentResults = results.slice(startIndex, startIndex + PAGE_SIZE);

  const handleChangePage = (nextPage) => {
    setCurrentPage(nextPage);
    if (listTopRef.current) {
      listTopRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <div ref={listTopRef}>
        <h2 className="results-header">
          Searching Results for "{searchQuery}" – {results.length} shows found
        </h2>
      </div>

      <div className="show-list">
        {currentResults.map((item) => (
          <ShowCard
            key={item.show.id}
            show={item.show}
            onMoreInfo={() => onSelectShow(item.show)}
          />
        ))}
      </div>

      {/* Pagination controls */}
      <div className="pagination">
        <button
          className="page-btn"
          onClick={() => handleChangePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        <span className="page-info">
          Page {currentPage} of {totalPages}
        </span>

        <button
          className="page-btn"
          onClick={() => handleChangePage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ShowList;
