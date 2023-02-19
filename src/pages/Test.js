// import React, { useState } from 'react';
// import { Input, Button } from 'antd';
// import './Test.css';

// function TextInputPage() {
//   const [text, setText] = useState('');

//   const handleInputChange = (event) => {
//     setText(event.target.value);
//   };

//   const handleButtonClick = () => {
//     console.log(text);
//   };

//   return (
//     <div className="text-input-page">
//       <Input.TextArea rows={10} value={text} onChange={handleInputChange} />
//       <Button type="primary" onClick={handleButtonClick}>
//         Submit
//       </Button>
//     </div>
//   );
// }

// export default TextInputPage;

import React, { useState } from "react";
import "./Test.css";

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

  async function handleSubmit() {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:4000/projectIdeas`);
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
      <h1>My Lists</h1>
      {/* <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <button type="submit">Generate Ideas</button>
      </form> */}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        {/* Form elements go here */}
        <SubmitButton onSubmit={handleSubmit} />
      </form>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      <div className="lists-container">
        {/* <ul className="list">
          <li>Item 1</li>
        </ul> */}
        {data && (
          // <ul className="list">
            data.map((item) => (
              <ul className="list">
                {<li>{item}</li>}
              </ul>
            ))
          // </ul>
        )}
      </div>
    </div>
  );
}

export default App;
