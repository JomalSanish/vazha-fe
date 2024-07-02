import './App.css';
import Card from './Components/Card';
import Task from './Components/Task';
import { Input } from './Components/Input';
function App() {
  const book = [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      description: 'A novel set in the 1920s that tells the story of the mysterious millionaire Jay Gatsby and his obsession with Daisy Buchanan.',
    //  image: 'https://example.com/the-great-gatsby-cover.jpg' // Replace with an actual image URL
  },
  {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      description: 'A novel about the serious issues of rape and racial inequality, but it is also full of warmth and humor.',
      //image: 'https://example.com/to-kill-a-mockingbird-cover.jpg' // Replace with an actual image URL
  },
  {
      title: '1984',
      author: 'George Orwell',
      description: 'A dystopian novel set in a totalitarian society ruled by Big Brother.',
     // image: 'https://example.com/1984-cover.jpg' // Replace with an actual image URL
  },
  {
      title: 'Moby Dick',
      author: 'Herman Melville',
      description: 'The narrative of Captain Ahab’s obsessive quest to kill the white whale, Moby Dick.',
    //  image: 'https://example.com/moby-dick-cover.jpg' // Replace with an actual image URL
  }
  ];
  return (
    <div className="App">
      <header className="header">MITS Library
      </header>
      <main>
        <Input/>
        {book.map((book, index) => (
                <Card 
                    key={index}
                    title={book.title}
                    author={book.author}
                    description={book.description}
                   //  image={book.image}
                />
            ))}
      </main>
    </div>
  );
}

export default App;
