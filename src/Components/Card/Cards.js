import React from "react";
import { Card } from "react-bootstrap";

const Cards = ({ thumbnail, title, description, videoId }) => {
  const handleShare = () => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
  };
  return (
    <>
      <Card
        onClick={() => handleShare()}
        style={{ minWidth: "18rem", maxWidth: "18rem", cursor: "pointer" }}
      >
        <Card.Img
          variant="top"
          src={thumbnail}
          style={{
            minHeight: "14rem",
            maxHeight: "14rem",
            objectFit: "cover",
          }}
        />
        <Card.Body
          style={{ minHeight: "14rem", maxHeight: "14rem", overflow: "hidden" }}
        >
          <Card.Title style={{ fontSize: "1rem" }}>{title}</Card.Title>
          <hr />
          <Card.Text style={{ fontSize: ".9rem" }}>{description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards;
