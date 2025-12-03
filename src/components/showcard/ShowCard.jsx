import React from "react";
import "./ShowCard.css";
import InfoImage from "../../assets/information.png";
function ShowCard({ show, onMoreInfo }) {
  const imageUrl =
    show.image?.medium ||
    "https://www.content.numetro.co.za/ui_images/no_poster.png";
  const rating = show.rating?.average ?? "N/A";

  return (
    <div className="show-card">
      <h3>{show.name}</h3>
      <img src={imageUrl} alt={show.name} className="show-image" />
       {show.rating?.average != null ? (
          <p className="modal-rating">⭐ {show.rating.average}</p>
        ) : (
          <p className="modal-rating">⭐ N/A</p>
        )}
      <p>{show.type}</p>
  
      <button onClick={onMoreInfo}>
        <img src={InfoImage} alt="More Info" className="info-icon" />
      </button>
    </div>
  );
}

export default ShowCard;
