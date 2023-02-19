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
  const [name, setName] = useState(null);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  async function handleSubmit() {
    setIsLoading(true);
    setError(null);
  
    try {
      const response = await fetch(
        `http://localhost:4000/projectDescription?name=${name}`
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
      <h1>Project description generator</h1>
      <p>Skip the time of writing description for your project.</p>
      <h3>Thanks to Cohere!!!</h3>
      <br/>
      <Input
        type="text"
        id="name"
        name="message"
        onChange={handleChange}
        placeholder="fashion, technology, saas..."
      />
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
          setData(null);
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
