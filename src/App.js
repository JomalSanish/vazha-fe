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
        image: 'https://i0.wp.com/americanwritersmuseum.org/wp-content/uploads/2018/02/CK-3.jpg?resize=267%2C400&ssl=1' // Replace with an actual image URL
    },
    {
      id:2,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        booked:false,
        description: 'A novel about the serious issues of rape and racial inequality, but it is also full of warmth and humor.',
        image: 'https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg' // Replace with an actual image URL
    },
    {
      id:3,
        title: '1984',
        author: 'George Orwell',
        booked:false,
        description: 'A dystopian novel set in a totalitarian society ruled by Big Brother.',
        image: 'https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg' // Replace with an actual image URL
    },
    {
      id:4,
        title: 'Moby Dick',
        author: 'Herman Melville',
        booked:false,
        description: 'The narrative of Captain Ahab’s obsessive quest to kill the white whale, Moby Dick.',
        image: 'https://m.media-amazon.com/images/I/616R20nvohL._AC_UF1000,1000_QL80_.jpg' // Replace with an actual image URL
    },
    {
      id:5,
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        booked:false,
        description: 'A romantic novel of manners set in early 19th-century England, dealing with issues of marriage, morality, and social class.',
        image: 'https://images.squarespace-cdn.com/content/v1/58c180edff7c50dd0e51a2ad/1596042032039-IN7LLXRVDKGVC854LVHE/9780241375273.jpg' // Replace with an actual image URL
    },
    {
      id:6,
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        booked:false,
        description: 'A novel about a disenchanted teenager named Holden Caulfield and his existential journey through New York City.',
        image: 'https://m.media-amazon.com/images/I/8125BDk3l9L._AC_UF1000,1000_QL80_.jpg' // Replace with an actual image URL
    },
    {
      id:7,
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        booked:false,
        description: 'An epic high-fantasy novel set in the fictional world of Middle-earth, depicting the struggle for the One Ring and the quest to destroy it.',
        image: 'https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif' // Replace with an actual image URL
    },
    {
        id:8,
        title: 'Harry Potter and the Sorcerer\'s Stone',
        author: 'J.K. Rowling',
        booked:false,
        description: 'The first novel in the Harry Potter series, which follows a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt7mscBLXbU8E1SFRB8fU_6tnuL0l4O9FF4Q&s' // Replace with an actual image URL
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
