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
                {image && <img src={image} alt={title} className="card-image" />}
                <p className='card-id'>{id}</p>
                <h2 className="card-title">{title}</h2>
                <h3 className="card-author">{author}</h3>
                <p className="card-description">{description}</p>
            </div>
        </div>
    );
};

export default Card;
