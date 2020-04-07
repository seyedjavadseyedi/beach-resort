import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import Loading from "../components/Loading";
import { RoomConsumer } from "../context";

const RoomContainer = () => {
  return (
    <RoomConsumer>
      {value => {
        const { loading, rooms, sortedRooms } = value;
        if(loading) {
            return (<Loading/>)
        }
        return (
          <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms}/>
          </>
        );
      }}
    </RoomConsumer>
  );
};

export default RoomContainer;
