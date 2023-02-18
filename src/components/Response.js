import React, { useState, useEffect } from 'react';
import './Response.css';

function APIResponse() {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/projectIdeas')
      .then(response => response.json())
      .then(data => setResponseData(data));
  }, []);

  return (
    <div className="api-response">
      <h1>API Response</h1>
      {responseData ? (
        <div>
          {/* <h2>{responseData.genereations}</h2> */}
          <p>{responseData.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default APIResponse;
