import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const ShowMovie = () => {
  const [movie, setMovie] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  // movie fetch
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/movie/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  // delete movie
  const handleDelete = () => {
    axios
      .delete(`http://localhost:4000/api/${id}`)
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col">
          <div className="card" >
            <img
              src={movie.poster}
              className="card-img-top"
              alt="movie"
              style={{ height: "700px", objectFit: "cover" }}
            />

            <div className="card-body">
              <h3>{movie.title}</h3>
              <p><b>Rating:</b> {movie.rating}</p>
              <p><b>Genre:</b> {movie.genre}</p>
              <p><b>Duration:</b> {movie.duration}</p>
              <p><b>Language:</b> {movie.language}</p>

              {/* Buttons */}
              <NavLink className="btn btn-warning me-2" to={`/edit/${movie._id}`}>
                Edit
              </NavLink>

              <button className="btn btn-danger me-2" onClick={handleDelete}>
                Delete
              </button>

              {/* Back Button */}
              <button className="btn btn-secondary" onClick={() => navigate(-1)}>
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowMovie;