import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditMovie = () => {

    const [data,setData] = useState({
        title:'',
        rating:'',
        genre:'',
        duration:'',
        language:'',
        poster:""
    })

    const navigate = useNavigate()
    const { id } = useParams()

    // movie data fetch
useEffect(()=>{
    axios.get(`http://localhost:4000/api/movie/${id}`)
    .then((res)=>{
        setData(res.data)
    })
    .catch((err)=>console.log(err))
},[id])

    // update movie
    const handleSubmit =(e)=>{
        e.preventDefault()
        

        axios.put(`http://localhost:4000/api/edit/${id}`, data)
        .then(()=>navigate('/'))
        .catch((err)=>console.log(err))
    }

  return (
    <>
        <div className="container">
            <div className="row justify-content-center align-items-center g-2">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title text-center">Edit Movie</h4>

                            <form onSubmit={handleSubmit}>

                                {/* Title */}
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={data.title}
                                        onChange={(e)=>setData({...data,title:e.target.value})}
                                    />
                                    <label>Movie Title</label>
                                </div>

                                {/* Rating */}
                                <div className="form-floating mb-3">
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={data.rating}
                                        onChange={(e)=>setData({...data,rating:e.target.value})}
                                    />
                                    <label>Rating</label>
                                </div>

                                {/* Genre */}
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={data.genre}
                                        onChange={(e)=>setData({...data,genre:e.target.value})}
                                    />
                                    <label>Genre</label>
                                </div>

                                {/* Duration */}
                                <div className="form-floating mb-3">
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={data.duration}
                                        onChange={(e)=>setData({...data,duration:e.target.value})}
                                    />
                                    <label>Duration (minutes)</label>
                                </div>

                                {/* Language */}
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={data.language}
                                        onChange={(e)=>setData({...data,language:e.target.value})}
                                    />
                                    <label>Language</label>
                                </div>

                                {/* Poster */}
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={data.poster}
                                        onChange={(e)=>setData({...data,poster:e.target.value})}
                                    />
                                    <label>Poster URL</label>
                                </div>

                                <button type="submit" className="btn btn-primary">
                                    Update Movie
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default EditMovie