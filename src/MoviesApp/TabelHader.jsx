import React from "react";

const TabelHader = ({ item }) => {
  return (
    <th scope="col">
      <span className="text-capitalize">{item}</span>
    </th>
  );
};

export default TabelHader;
