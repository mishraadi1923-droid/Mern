import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {

    const [datas, setDatas] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/api/')
            .then((res) => setDatas(res.data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">

                    {datas.map((movie) => (

                        <div className="col-md-3 mb-4" key={movie._id}>
                            <div className="card">

                                <img 
                                    className="card-img-top" 
                                    src={movie.poster} 
                                    alt="movie"
                                    style={{height:"180px", objectFit:"cover"}}
                                />

                                <div className="card-body">

                                    <h5 className="card-title">{movie.title}</h5>

                                    <p><b>Rating:</b> {movie.rating}</p>
                                    <p><b>Genre:</b> {movie.genre}</p>
                                    <p><b>Duration:</b> {movie.duration} min</p>
                                    <p><b>Language:</b> {movie.language}</p>
<NavLink className="btn btn-primary" to={`/movie/${movie._id}`}>
  View
</NavLink>

                                </div>

                            </div>
                        </div>

                    ))}

                </div>
            </div>
        </>
    )
}

export default Home