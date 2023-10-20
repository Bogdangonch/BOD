import { useState } from "react";

function App() {
  const [tenzies, setTenzies] = useState(newTenzies());

  function newTenzies() {
    const result = [];
    for (let i = 1; i <= 10; i++) {
      result.push({
        value: Math.ceil(Math.random() * 5) + 1, 
        id: "point" + i,
        isLocked: false,
      });
    }
    return result;
  }

  function rollTenzies() {
    setTenzies((tenz) => {
      const newTenzies = [...tenz];
      for (let i = 0; i < newTenzies.length; i++) {
        if (!newTenzies[i].isLocked) {
          newTenzies[i].value = Math.ceil(Math.random() * 5) + 1;
        }
      }
      return newTenzies;
    });
  }

  function lockTenz(id) {
    setTenzies((tenz) => {
      const newTenzies = tenz.map((tenz) => {
        if (tenz.id === id) {
          return { ...tenz, isLocked: !tenz.isLocked };
        }
        return tenz;
      });
      return newTenzies;
    });
  }

  return (
    <div className="App">
      <div className="wrapper">
        <h1>Tenzies</h1>
        <p>Games Bohdan and Oleksii</p>
        <ul>
          {tenzies.map((tenz) => {
            return (
              <li
                className={tenz.isLocked ? "coin red" : "coin"}
                onClick={() => lockTenz(tenz.id)} clicked
                key={tenz.id}
              >
                {tenz.value}
              </li>
            );
          })}
        </ul>
        <button onClick={rollTenzies}>Roll</button>
      </div>
    </div>
  );
}

export default App;
