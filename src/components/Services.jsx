import React, { Component } from "react";
import Title from "./Title";
import { FaHiking, FaShuttleVan, FaCocktail, FaCoffee } from "react-icons/fa";

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaHiking/>,
        tilte: "endless hiking",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, officia."
      },
      {
        icon: <FaShuttleVan/>,
        tilte: "free shuttle",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, officia."
      },
      {
        icon: <FaCocktail/>,
        tilte: "free cocktail",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, officia."
      },
      {
        icon: <FaCoffee/>,
        tilte: "stronges coffee",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, officia."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article className="service" key={index}>
                <span>{item.icon}</span>
                <h6>{item.tilte}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
