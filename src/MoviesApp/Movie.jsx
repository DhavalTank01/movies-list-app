import React from "react";

const Movie = ({ item, handelDelete, id }) => {
  const { genre, numberInStock, title, dailyRentalRate } = item;
  return (
    <tr>
      <th scope="row">{id + 1}</th>
      <td>{title}</td>
      <td>{genre.name}</td>
      <td>{numberInStock}</td>
      <td>{dailyRentalRate}</td>
      <td>
        <button className="btn btn-danger" onClick={() => handelDelete(item)}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </td>
    </tr>
  );
};

export default Movie;
