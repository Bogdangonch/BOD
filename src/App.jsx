import { useEffect, useState } from "react";

function App() {
  const [tenzies, setTenzies] = useState(newTenzies());

  const [isVictory, setIsVictory] = useState(false);

  function newTenzies() {
    const result = [];
    for (let i = 1; i <= 10; i++) {
      result.push({
        value: Math.ceil(Math.random() * 6),
        id: "point" + i,
        isLocked: false,
      });
    }
    return result;
  }

  function rollTenzies() {
    setTenzies((prev) => {
      return prev.map((tenz) => {
        if (tenz.isLocked) {
          return tenz;
        }
        return {
          ...tenz,
          value: Math.ceil(Math.random() * 5),
        };
      });
    });
  }

  function lockTenz(id) {
    setTenzies((prev) => {
      return prev.map((tenz) => {
        if (tenz.id === id) {
          return {
            ...tenz,
            isLocked: !tenz.isLocked,
          };
        }
        return tenz;
      });
    });
  }

  function finish() {
    const allLocked = tenzies.every((tenz) => tenz.isLocked);
    const sameValues = tenzies.every((tenz) => tenz.value === tenzies[0].value);

    if (allLocked && sameValues) {
      setIsVictory(true);
    } else {
      setIsVictory(false);
    }
  }

  useEffect(() => {
    finish();
  }, [tenzies]);

  function restartGame() {
    setTenzies(newTenzies());
    setIsVictory(false);
  }

  return (
    <div className="App">
      <div className={isVictory ? "wrapper opacity" : "wrapper"}>
        <h1>Tenzies</h1>
        <p>Games Bohdan and Oleksii</p>
        <ul>
          {tenzies.map((tenz) => {
            return (
              <li
                className={tenz.isLocked ? "coin red" : "coin"}
                onClick={() => lockTenz(tenz.id)}
                key={tenz.id}
              >
                {tenz.value}
              </li>
            );
          })}
        </ul>
        <button onClick={rollTenzies}>Roll</button>
      </div>
      {isVictory && (
        <div className="finish">
          <p>Victory</p>
          <button className="finish-btn" onClick={restartGame}>
            Почати заново
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
