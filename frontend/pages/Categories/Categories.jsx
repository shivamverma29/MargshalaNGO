import React from "react";
import "../Categories/Categories.css";

const Categories = () => {
  const cards = [
    {
      id: 1,
      title: "Embroidery",
      imageUrl: "https://placeimg.com/300/200/nature",
    },
    {
      id: 2,
      title: "Pottery",
      imageUrl: "https://placeimg.com/300/200/arch",
    },
    {
      id: 3,
      title: "Stonecraft",
      imageUrl: "https://placeimg.com/300/200/tech",
    },
    {
      id: 4,
      title: "Card 4",
      imageUrl: "https://placeimg.com/300/200/people",
    },
    {
      id: 5,
      title: "Card 5",
      imageUrl: "https://placeimg.com/300/200/animals",
    },
    {
      id: 6,
      title: "Card 6",
      imageUrl: "https://placeimg.com/300/200/any",
    },
  ];
  return (
    <>
      {" "}
      <div className="card-grid">
        {cards.map(card => (
          <div key={card.id} className="card">
            <img src={card.imageUrl} alt={card.title} />
            <h3>{card.title}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
