// import React, { useState } from "react";
// import "./Test.css";

// function SubmitButton({ onSubmit }) {
//   return (
//     <button className="submit-button" onClick={onSubmit}>
//       Submit
//     </button>
//   );
// }

// function App() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   async function handleSubmit() {
//     setIsLoading(true);
//     setError(null);

//     try {
//       const response = await fetch(`http://localhost:4000/projectIdeas`);
//       const uncleanData = await response.json();
//       const data = uncleanData.description.split("\n").splice(1);
//       setData(data);
//     } catch (error) {
//       setError(error);
//     }

//     setIsLoading(false);
//   }
//   return (
//     <div className="container">
//       <h1>My Lists</h1>
//       {/* <form>
//         <label>
//           Name:
//           <input type="text" name="name" />
//         </label>
//         <button type="submit">Generate Ideas</button>
//       </form> */}
//       <form
//         onSubmit={(event) => {
//           event.preventDefault();
//           handleSubmit();
//         }}
//       >
//         {/* Form elements go here */}
//         <SubmitButton onSubmit={handleSubmit} />
//       </form>

//       {isLoading && <p>Loading...</p>}
//       {error && <p>Error: {error.message}</p>}

//       <div className="lists-container">
//         {/* <ul className="list">
//           <li>Item 1</li>
//         </ul> */}
//         {data && (
//           // <ul className="list">
//             data.map((item) => (
//               <ul className="list">
//                 {<li>{item}</li>}
//               </ul>
//             ))
//           // </ul>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { Button, List, Input } from 'antd';
import "./Test.css";

const MyComponent = () => {
  return (
    <div className='container'>
      <Input placeholder="Enter text here" />
      <Button type="primary">Submit</Button>
      <List>
        <List.Item>Item 1</List.Item>
        <List.Item>Item 2</List.Item>
        <List.Item>Item 3</List.Item>
        <List.Item>Item 4</List.Item>
        <List.Item>Item 5</List.Item>
        <List.Item>Item 6</List.Item>
        <List.Item>Item 7</List.Item>
        <List.Item>Item 8</List.Item>
        <List.Item>Item 9</List.Item>
        <List.Item>Item 10</List.Item>
      </List>
    </div>
  );
};

export default MyComponent;

