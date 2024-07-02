// src/BookCard.js

import React from 'react';
import './Card.css'; // Optional: Create a CSS file for styling

const Card = ({ title, author, description, image }) => {
    return (
        <div className="card">
          
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <h3 className="card-author">{author}</h3>
                <p className="card-description">{description}</p>
            </div>
        </div>
    );
};

export default Card;
