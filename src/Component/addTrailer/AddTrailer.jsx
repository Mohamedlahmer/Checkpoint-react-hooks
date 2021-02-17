import React from 'react'
import ReactPlayer from 'react-player/youtube'
import  '../addTrailer/AddTrailer.css'
import { Button } from "react-bootstrap";


const AddTrailer = (props) => {
    const movie=props.location.state.movie
    

   
return (
        <div>
           
            <h5 className='description' > Movie description : <hr />  {movie.description}</h5>
            <div className='video'>
            <ReactPlayer controls url={movie.trailer} />
            <div>
            <Button className='backbtn' variant="dark" onClick={()=>{props.history.push("/")}}>Back to home page</Button>
            </div>
            </div>
            
        </div>
    )
}

export default AddTrailer
