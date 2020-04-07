import React from "react";
import Tilte from "./Title";
import { RoomContext } from "../context";
import { useContext } from "react";

// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const RoomsFilter = props => {
  const { rooms } = props;
  const context = useContext(RoomContext);

  const {
    type,
    capacity,
    price,
    maxPrice,
    minPrice,
    maxSize,
    minSize,
    breakfast,
    pets,
    handleChange
  } = context;

  // get unique types
  let types = getUnique(rooms, "type");
  // add all
  types = ["all", ...types];
  // map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  // get unique capacity
  let people = getUnique(rooms, "capacity");
  // map to jsx
  people = people.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Tilte title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end of select type */}
        {/* select capacity */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* end of select capacity */}
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            type="range"
            name="price"
            id="price"
            className="form-control"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={handleChange}
          />
        </div>
        {/* end of room price */}
        {/* room size  */}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input
              type="number"
              className="size-input"
              id="minSize"
              name="minSize"
              value={minSize}
              onChange={handleChange}
            />
            <input
              type="number"
              className="size-input"
              id="maxSize"
              name="maxSize"
              value={maxSize}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* end of room size  */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
        {/* end of extras */}
      </form>
    </section>
  );
};

export default RoomsFilter;
