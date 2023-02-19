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
    <>
      <Navbar />
      <div className="container">
        <h1>Project title generator</h1>
        <p>
          Paste the description of your project and{" "}
          <s>
            <i>our</i>
          </s>{" "}
          Cohere's NLP technology will give you cool project names
        </p>
        <br />
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
