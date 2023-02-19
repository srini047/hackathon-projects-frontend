import React, { useState } from "react";
import { Button, Input } from "antd";
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
  const [name, setName] = useState(null);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  async function handleSubmit() {
    setIsLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await fetch(
        `http://localhost:4000/projectDescription?name=${name}`
      );
      const data = await response.json();
      // const data = uncleanData.description.split("\n").splice(1);
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
        <h1>Project description generator</h1>
        <p>Skip the time of writing description for your project.</p>
        <h3>Thanks to Cohere!!!</h3>
        <br />
        <Input
          type="text"
          id="name"
          name="message"
          onChange={handleChange}
          placeholder="Provide your project title..."
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
        {data && <p>{data.description.split("\n").join("")}</p>}
      </div>
      <Footer />
    </>
  );
}

export default App;
