import { useState } from "react";

function App() {
  // "Den", "Jack", "Bill", "Antonio"
  const [posts, setPosts] = useState([
    {
      title: "Fruits",
      textArea: "Banana,Apple,Blueberry",
    },
    {
      title: "Actors",
      textArea: "Jony,Arnold,Jeyson",
    },
    {
      title: "Street food",
      textArea: "Hot dogs,pies,pizza",
    },
    {
      title: "Post about how to make money",
      textArea: "You can never make a lot of money",
    },
  ]);
  const [input, setInput] = useState("");
  const [textArea, setTextArea] = useState("");

  function handleAddName(event, title) {
    event.preventDefault();

    if (input === "" || textArea === "") {
      return;
    }

    setPosts((prev) => [...prev, { title, textArea: textArea }]);
    setInput("");
    setTextArea("");
  }

  return (
    <div className="App">
      <main>
        <ul>
          {posts.map((el, ind) => (
            <div key={ind}>
              <h2>{el.title}</h2>
              <p>{el.textArea}</p>
            </div>
          ))}
        </ul>
      </main>

      <aside>
        <h3 style={{ textAlign: "center" }}>Enter your posts</h3>
        <form>
          <input
            type="text"
            placeholder="Post title"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <textarea
            cols="30"
            rows="10"
            placeholder="Text post"
            value={textArea}
            onChange={(e) => setTextArea(e.target.value)}
          ></textarea>
          <button
            className="btn"
            onClick={(e) => handleAddName(e, input)}
            disabled={input === "" || textArea === ""}
          >
            Add post
          </button>
        </form>
      </aside>
    </div>
  );
}

export default App;
