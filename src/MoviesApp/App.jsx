import React, { useCallback, useEffect, useState } from "react";
import { getMovies } from "../services/fakeMovieService";
import Alert from "../Components/SimpleAlert";
import Movie from "./Movie";
import TabelHader from "./TabelHader";
import Title from "./Title";
import Navbar from "./Navbar";

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

  const titles = [
    "id",
    "title",
    "genre",
    "numberInStock",
    "dailyRentalRate",
    "liked",
    "action",
  ];
  const handelClick = useCallback(
    (item) => {
      const list = movies.filter((cele) => {
        if (cele === item) {
          cele.liked = !cele.liked;
          return cele;
        }
        return cele;
      });

      setMovies(list);
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
        <Navbar />
        {movies.length === 0 ? (
          <Title title={"there are no movies in the database"} />
        ) : (
          <>
            <Title title={`showing ${movies.length} movies in the database`} />

            <table className="table table-hover">
              <thead>
                <tr>
                  {titles.map((item, id) => {
                    return <TabelHader key={id} id={id} item={item} />;
                  })}
                </tr>
              </thead>
              <tbody>
                {movies.map((item, id) => {
                  return (
                    <Movie
                      item={item}
                      key={id}
                      handelDelete={handelDelete}
                      id={id}
                      handelClick={handelClick}
                    />
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
