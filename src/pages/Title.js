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
  const [desc, setDesc] = useState(null);

  const handleChange = (event) => {
    setDesc(event.target.value);
  };

  async function handleSubmit() {
    setIsLoading(true);
    setError(null);
    setData(null);
  
    try {
      const response = await fetch(
        `http://localhost:4000/projectTitle?desc=${desc}`
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
      <h1>Project title generator</h1>
      <p>Paste the description of your project and <s><i>our</i></s> Cohere's NLP technology will give you cool project names</p>
      <br/>
      <Input.TextArea
        rows={4}
        columns={15}
        type="text"
        id="desc"
        name="message"
        onChange={handleChange}
        placeholder="Enter the project description..."
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
