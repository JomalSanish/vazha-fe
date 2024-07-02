import React from 'react';
import { Route, BrowserRouter ,Routes} from 'react-router-dom';
import './App.css';
import Home from './Components/home';
import BookDetails from './Components/Bookdetails';

function App() {
  const books = [
    {
        id:1,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        booked:true,
        description: 'A novel set in the 1920s that tells the story of the mysterious millionaire Jay Gatsby and his obsession with Daisy Buchanan.',
        // image: 'https://example.com/the-great-gatsby-cover.jpg' // Replace with an actual image URL
    },
    {
      id:2,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        booked:false,
        description: 'A novel about the serious issues of rape and racial inequality, but it is also full of warmth and humor.',
        // image: 'https://example.com/to-kill-a-mockingbird-cover.jpg' // Replace with an actual image URL
    },
    {
      id:3,
        title: '1984',
        author: 'George Orwell',
        booked:false,
        description: 'A dystopian novel set in a totalitarian society ruled by Big Brother.',
        // image: 'https://example.com/1984-cover.jpg' // Replace with an actual image URL
    },
    {
      id:4,
        title: 'Moby Dick',
        author: 'Herman Melville',
        booked:false,
        description: 'The narrative of Captain Ahab’s obsessive quest to kill the white whale, Moby Dick.',
        // image: 'https://example.com/moby-dick-cover.jpg' // Replace with an actual image URL
    },
    {
      id:5,
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        booked:false,
        description: 'A romantic novel of manners set in early 19th-century England, dealing with issues of marriage, morality, and social class.',
        // image: 'https://example.com/pride-and-prejudice-cover.jpg' // Replace with an actual image URL
    },
    {
      id:6,
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        booked:false,
        description: 'A novel about a disenchanted teenager named Holden Caulfield and his existential journey through New York City.',
        // image: 'https://example.com/the-catcher-in-the-rye-cover.jpg' // Replace with an actual image URL
    },
    {
      id:7,
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        booked:false,
        description: 'An epic high-fantasy novel set in the fictional world of Middle-earth, depicting the struggle for the One Ring and the quest to destroy it.',
        // image: 'https://example.com/the-lord-of-the-rings-cover.jpg' // Replace with an actual image URL
    },
    {
        id:8,
        title: 'Harry Potter and the Sorcerer\'s Stone',
        author: 'J.K. Rowling',
        booked:false,
        description: 'The first novel in the Harry Potter series, which follows a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley.',
        // image: 'https://example.com/harry-potter-cover.jpg' // Replace with an actual image URL
    }
];
  
    return (
        <div className="App">
            <header className="header">MITS Library</header>
            <main className="card-container">
            <BrowserRouter>
        <Routes>
          <Route path="/" element ={<Home books={books}/>}/>
          <Route path="/bookdetails" element ={<BookDetails books={books}/>}/>
        </Routes>
        </BrowserRouter>
            </main>
        </div>
    );
}

export default App;
