import React, { Component } from "react";
import Banner from "../components/Banner";
import StyledHero from "../components/StyledHero";
import defaultImg from "../images/room-1.jpeg";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";

class SingleRoom extends Component {
  static contextType = RoomContext;

  constructor(props) {
    super(props);
    this.state = { slug: this.props.match.params.slug, defaultImg };
  }

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3>No such room could be found</h3>
          <Link to="/rooms/" className="btn-primary">
            return rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      images,
      price,
      size,
      capacity,
      pets,
      breakfast,
      description,
      extras
    } = room;

    const [mainImg, ...restImages] = images;

    return (
      <>
        <StyledHero img={mainImg || this.state.defaultImg}>
          <Banner title={name}>
            <Link to="/" className="btn-primary">
              Return Home
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {restImages.map((image, index) => {
              return <img src={image} key={index} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price: ${price}</h6>
              <h6>size: {size} square meter</h6>
              <h6>
                max capacity:{" "}
                {capacity > 1 ? `${capacity} people` : `${capacity} persone`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h3>extras</h3>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}

export default SingleRoom;
