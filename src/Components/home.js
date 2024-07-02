import React from 'react';
import Card from './Card';


function Home({books}) {
  


    return (
            <main className="card-container">
                {books.map((book, index) => (
                    <Card 
                        key={index}
                        id= {book.id}
                        title={book.title}
                        author={book.author}
                        description={book.description}
                        // image={book.image}
                    />
                ))}
            </main>
    );
}
export default Home;
