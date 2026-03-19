import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddMovie = () => {

    const [data,setData] = useState({
        title:'',
        rating:'',
        genre:'',
        duration:'',
        language:'',
        poster:""
    })

    const navigate = useNavigate()

    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(data) 
         axios.post('http://localhost:4000/api/add',data)
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
                            <h4 className="card-title text-center">Add Movie</h4>

                            <form onSubmit={handleSubmit}>

                                {/* Title */}
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder=""
                                        onChange={(e)=>setData({...data,title:e.target.value})}
                                    />
                                    <label>Movie Title</label>
                                </div>

                                {/* Rating */}
                                <div className="form-floating mb-3">
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder=""
                                        onChange={(e)=>setData({...data,rating:e.target.value})}
                                    />
                                    <label>Rating</label>
                                </div>

                                {/* Genre */}
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder=""
                                        onChange={(e)=>setData({...data,genre:e.target.value})}
                                    />
                                    <label>Genre</label>
                                </div>

                                {/* Duration */}
                                <div className="form-floating mb-3">
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder=""
                                        onChange={(e)=>setData({...data,duration:e.target.value})}
                                    />
                                    <label>Duration (minutes)</label>
                                </div>

                                {/* Language */}
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder=""
                                        onChange={(e)=>setData({...data,language:e.target.value})}
                                    />
                                    <label>Language</label>
                                </div>

                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="formId1"
                                        id="formId1"
                                        placeholder=""
                                        onChange={(e)=>setData({...data,poster:e.target.value})}
                                    />
                                   <label htmlFor="formId1">Poster</label>
                                </div>
                                


                                

                                <button type="submit" className="btn btn-primary">
                                    Add Movie
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

export default AddMovie