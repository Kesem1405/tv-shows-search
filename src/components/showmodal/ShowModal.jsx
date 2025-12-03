import React from "react";
import "./ShowModal.css";
function ShowModal({ show, onClose }) {
  const imageUrl = show.image?.original || show.image?.medium;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <h2 className="modal-title">{show.name}</h2>
        {show.rating?.average != null ? (
          <p className="modal-rating">⭐ {show.rating.average}</p>
        ) : (
          <p className="modal-rating">⭐ N/A</p>
        )}
        <h3 className="modal-type">{show.type}</h3>

        {imageUrl && (
          <img src={imageUrl} alt={show.name} className="modal-image" />
        )}

        {show.genres && show.genres.length > 0 ? (
          <ul className="genre-list">
            {show.genres.map((genre, i) => (
              <li key={i} className="genre-tag">
                {genre}
              </li>
            ))}
          </ul>
        ) : (
          <ul className="genre-list">
            <li className="genre-tag genre-list-not-found">N/A</li>
          </ul>
        )}
        {show.language ? (
          <p className="modal-language">
            <strong>Language:</strong> {show.language}
          </p>
        ) : null}

        {show.summary && (
          <div className="modal-summary">
            <strong>Summary:</strong>
            <p dangerouslySetInnerHTML={{ __html: show.summary }}></p>
          </div>
        )}

        {show.officialSite ? (
          <p className="modal-link">
            <a href={show.officialSite} target="_blank" rel="noreferrer">
              Official Website
            </a>
          </p>
        ) : (
          <p className="modal-link not-available">Official Website: N/A</p>
        )}
      </div>
    </div>
  );
}

export default ShowModal;
