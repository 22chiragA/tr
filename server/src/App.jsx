import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  // Fetch jokes once when the component mounts
  useEffect(() => {
    axios.get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // empty dependency array = run once

  return (
    <>
      <h1>Chirag</h1>
      <h1>Chai aur Full Stack</h1>
      <p>JOKES: {jokes.length}</p>
      
      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
