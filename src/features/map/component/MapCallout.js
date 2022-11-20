import React from "react";

import CompactRestaurantInfo from "../../../components/restaurant/CompactRestaurantInfo";

const MapCallout = ({ restaurant }) => (
  <CompactRestaurantInfo isMap restaurant={restaurant} />
);

export default MapCallout;
