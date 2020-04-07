import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";

const Room = props => {
  const { room } = props;
  const { images, name, slug, price } = room;

  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="featured room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="room-link btn-primary">
          Features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
};

export default Room;
