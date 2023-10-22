import { useEffect, useState } from "react";

function App() {
  const [textValueJoke, setTextValueJoke] = useState({});

  useEffect(() => {
    handleSetJoke();
  }, []);

  async function getJoke() {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    return data;
  }

  async function handleSetJoke() {
    const newJoke = await getJoke();
    setTextValueJoke(newJoke);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Random Joke</h1>
        <div className="text-item">
          <button onClick={handleSetJoke} className="btn">
            Get a Joke
          </button>
          <p>{textValueJoke.value}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
