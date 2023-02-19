import React, { useState } from "react";
import "./Idea.css";

function SubmitButton({ onSubmit }) {
  return (
    <button className="submit-button" onClick={onSubmit}>
      Submit
    </button>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [desc, setDesc] = useState(null);

  const handleChange = (event) => {
    setDesc(event.target.value);
  };

  async function handleSubmit() {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `http://localhost:3000/projectTitle?desc=${desc}`
      );
      const uncleanData = await response.json();
      const data = uncleanData.description.split("\n").splice(1);
      setData(data);
    } catch (error) {
      setError(error);
    }

    setIsLoading(false);
  }

  return (
    <div className="App">
        <textarea id="desc" name="desc" rows="4" cols="50" onChange={handleChange}>
        </textarea>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <SubmitButton onSubmit={handleSubmit} />
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <p>
          {data.map((item) => (
            <li>{item}</li>
          ))}
        </p>
      )}
    </div>
  );
}

export default App;