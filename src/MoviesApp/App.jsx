import React, { useCallback, useEffect, useState } from "react";
import { getMovies } from "../services/fakeMovieService";
import Alert from "../Components/SimpleAlert";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [alert, setAlert] = useState({
    isShow: false,
    type: "warning",
    message: "Hii",
  });
  const OnClose = useCallback(() => {
    setAlert({
      isShow: false,
      type: "",
      message: "",
    });
  }, []);

  useEffect(() => {
    if (alert.isShow) {
      setTimeout(() => {
        OnClose();
      }, 3000);
    }
  });
  useEffect(() => {
    setMovies(getMovies());
  }, []);

  const handelDelete = useCallback(
    (item) => {
      const new_list = movies.filter((movie) => {
        if (movie._id !== item._id) {
          return movie;
        } else {
          return null;
        }
      });
      setMovies(new_list);
      setAlert({
        isShow: true,
        type: "success",
        message: "Movie delete successfully.",
      });
    },
    [movies]
  );

  return (
    <>
      {alert.isShow && (
        <Alert
          type={alert.type}
          message={alert.message}
          OnClose={OnClose}
        ></Alert>
      )}
      <div className="m-3">
        <p className="text-center  text-uppercase  h2">all movies list</p>

        {movies.length === 0 ? (
          <p className="fs-4 text-capitalize border border-1 border-top-0 border-end-0 border-start-0">
            there are no movies in the database
          </p>
        ) : (
          <>
            <p className="fs-4 text-capitalize border border-1 border-top-0 border-end-0 border-start-0">
              showing {movies.length} movies in the database
            </p>

            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">
                    <span className="text-capitalize">#</span>
                  </th>
                  <th scope="col">
                    <span className="text-capitalize">title</span>
                  </th>
                  <th scope="col">
                    <span className="text-capitalize">genre</span>
                  </th>
                  <th scope="col">
                    <span className="text-capitalize">numberInStock</span>
                  </th>
                  <th scope="col">
                    <span className="text-capitalize">dailyRentalRate</span>
                  </th>
                  <th scope="col">
                    <span className="text-capitalize">action</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {movies.map((item, id) => {
                  const { genre, numberInStock, title, dailyRentalRate } = item;
                  return (
                    <tr key={id}>
                      <th scope="row">{id + 1}</th>
                      <td>{title}</td>
                      <td>{genre.name}</td>
                      <td>{numberInStock}</td>
                      <td>{dailyRentalRate}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => handelDelete(item)}
                        >
                          <i className="fa-solid fa-trash-can"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
      </div>
    </>
  );
};

export default App;
