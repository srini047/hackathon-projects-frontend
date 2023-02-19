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

import React from "react";
import "./Test.css";

function App() {
  return (
    <div className="container">
      <h1>My Lists</h1>
      <form>
        {/* <label>
          Name:
          <input type="text" name="name" />
        </label> */}
        <button type="submit">Generate Ideas</button>
      </form>
      <div className="lists-container">
        <ul className="list">
          <li>Item 1</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
