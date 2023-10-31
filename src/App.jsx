import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  const [textArea, setTextArea] = useState("");

  useEffect(() => {
    const localPosts = localStorage.getItem("posts");

    if (localPosts) {
      setPosts(JSON.parse(localPosts));
    }
  }, []);

  function handleAddName(event) {
    event.preventDefault();

    if (input === "" || textArea === "") {
      return;
    }

    const newPosts = [...posts, { title: input, textArea }];

    setPosts(newPosts);
    localStorage.setItem("posts", JSON.stringify(newPosts));
    setInput("");
    setTextArea("");
  }

  function handleClearOnePost(index) {
    const updatePost = [...posts];
    updatePost.splice(index, 1);
    localStorage.setItem("posts", JSON.stringify(updatePost));
    setPosts(updatePost);
  }

  // Видалення всіх постів
  function handleClear() {
    localStorage.setItem("posts", JSON.stringify(""));
    setPosts([]);
  }

  return (
    <div className="App">
      <main>
        <ul>
          {posts.length < 1 ? (
            <h2>No posts yet.</h2>
          ) : (
            posts.map((el, ind) => (
              <div key={ind}>
                <p
                  className="trash"
                  onClick={() => handleClearOnePost(ind)}
                ></p>
                <h2>{el.title}</h2>
                <p>{el.textArea}</p>
              </div>
            ))
          )}
        </ul>
        <button className="clear" onClick={handleClear}>
          Clear
        </button>
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
            onClick={(e) => handleAddName(e)}
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
