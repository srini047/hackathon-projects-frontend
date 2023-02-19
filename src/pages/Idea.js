import React, { useState } from "react";
import { Button, List, Input } from "antd";
import Spinner from "react-bootstrap/Spinner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
    setData(null);

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
    <>
      <Navbar />
      <div className="container">
        <h1>Topic specific ideas generator</h1>
        <p>
          Got an theme in mind, then go ahead to get crazy ideas based on your
          favourite themes
        </p>
        <br />
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
        {isLoading && (
          <p>
            Loading...
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          </p>
        )}
        {error && <p>Error: {error.message}</p>}
        {data && (
          <List>
            {data.map((item) => (
              <List.Item>{item}</List.Item>
            ))}
          </List>
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
