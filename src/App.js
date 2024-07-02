import './App.css';
import { Card } from './Components/Card';
import Task from './Components/Task';
import { Input } from './Components/Input';
function App() {
  return (
    <div className="App">
      <header className="header">MITS Library
      </header>
      <main>
        <Input/>
      <Card/>
      </main>
    </div>
  );
}

export default App;
