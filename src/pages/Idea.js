import React, { useState } from "react";
import { Button, List, Input } from 'antd';
import "./Idea.css";

function SubmitButton({ onSubmit }) {
  return (
    <Button type="primary" onClick={onSubmit}>
      Submit
    </Button>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [topic, setTopic] = useState(null);

  const handleChange = (event) => {
    setTopic(event.target.value);
  };

  async function handleSubmit() {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `http://localhost:4000/projectIdea?topic=${topic}`
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
    <div className="container">
      <h1>Topic specific ideas generator</h1>
      <p>Got an theme in mind, then go ahead to get crazy ideas based on your favourite themes</p>
      <br/>
      <Input
        type="text"
        id="topic"
        name="message"
        onChange={handleChange}
        placeholder="fashion, technology, saas..."
      />
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
        <List>
          {data.map((item) => (
            <List.Item>{item}</List.Item>
          ))}
        </List>
      )}
    </div>
  );
}

export default App;
