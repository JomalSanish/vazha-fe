
import React from 'react';
import { useSearchParams } from 'react-router-dom';
const BookDetails = ({ books, onAddBook }) => {
    const [searchParams,setSearchParams] = useSearchParams();// Get book ID from URL params
    const id =searchParams.get("bookId");

    const book = books.find((book, index) => book.id == id);

    if (!book) return <div>Book not found.</div>;

    const handleAddBook = () => {
        // Add book functionality, e.g., using onAddBook callback
        onAddBook(book);
        alert(`Book "${book.title}" added successfully!`);
    };

    return (
        <div>
            <h2>{book.title}</h2>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Description:</strong> {book.description}</p>
            {/* Add more details as needed */}
            <p>Status: {book.booked ? 'Booked' : 'Available'}</p>
            {!book.booked && <button onClick={handleAddBook}>Add Book</button>}
        </div>
    );
};

export default BookDetails;
