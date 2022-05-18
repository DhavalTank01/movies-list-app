import React from "react";
import Like from "./Like";

const Movie = ({ item, handelDelete, id, handelClick }) => {
  const { liked, genre, numberInStock, title, dailyRentalRate } = item;
  return (
    <tr>
      <th scope="row">{id + 1}</th>
      <td>{title}</td>
      <td>{genre.name}</td>
      <td>{numberInStock}</td>
      <td>{dailyRentalRate}</td>
      <td>
        <Like liked={liked} onClick={() => handelClick(item)} key={id} />
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => handelDelete(item)}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </td>
    </tr>
  );
};

export default Movie;
