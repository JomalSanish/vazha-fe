<<<<<<< HEAD
const Card = (props) => {
    return(
        <div className = "card">
            <p>{props.taskName}</p>
            <button className="button" onClick={() =>props.completeTaskHandler(props.id)}>Book</button>
=======
// src/BookCard.js

import React from 'react';
import './Card.css'; // Optional: Create a CSS file for styling
import { useNavigate } from 'react-router-dom';

const Card = ({ id,title, author, description, image }) => {
    const navi = useNavigate()
    function handleclick()
    {
       navi("/bookdetails?bookId="+id)
    }
    return (
        <div className="card" onClick={handleclick}>
          
            <div className="card-content">
                <p className='card-id'>{id}</p>
                <h2 className="card-title">{title}</h2>
                <h3 className="card-author">{author}</h3>
                <p className="card-description">{description}</p>
                
            </div>
>>>>>>> c196e8c7464814854571547de6c31d5b5776a776
        </div>
    );
};

export default Card;
