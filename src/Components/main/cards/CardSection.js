import star from "../../images/star.png";
import React from "react";


const CardSection = ({
  coverImg,
  title,
  location,
  openSpots,
  stats: { rating },
  stats: { reviewCount },
  price,
  description,
}) => {
  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  } else if (location === "onsight") {
    badgeText = "ON SIGHT";
  }

  return (
    <section>
      <figure className="cardContainer">
        <img
          src={`../../images/${coverImg}`}
          alt={title}
          className="cardImg"
        />

        {badgeText && (
          <figcaption className="cardStatus">{badgeText}</figcaption>
        )}
      </figure>

      <div className="cardInfo">
        <div className="cardRating">
          <img src={star} alt={""} className="starIcon" />
          {rating}
          <span>
            ({reviewCount}) {location}
          </span>
        </div>

        <div className="cardTitle">{title}</div>

        <div className="cardDesc">{description}</div>

        <div className="cardPrice">
          <b>From £{price}</b> / person
        </div>
      </div>
    </section>
  );
};
export default CardSection;
