import React from 'react';
import './Test.css';

function App() {
  return (
    <div className="container">
      <h1>My Lists</h1>
      <form>
        {/* <label>
          Name:
          <input type="text" name="name" />
        </label> */}
        <button type="submit">Submit</button>
      </form>
      <div className="lists-container">
        <ul className="list">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
        <ul className="list">
          <li>Item 4</li>
          <li>Item 5</li>
          <li>Item 6</li>
        </ul>
        <ul className="list">
          <li>Item 7</li>
          <li>Item 8</li>
          <li>Item 9</li>
        </ul>
        <ul className="list">
          <li>Item 10</li>
          <li>Item 11</li>
          <li>Item 12</li>
        </ul>
        <ul className="list">
          <li>Item 13</li>
          <li>Item 14</li>
          <li>Item 15</li>
        </ul>
        <ul className="list">
          <li>Item 16</li>
          <li>Item 17</li>
          <li>Item 18</li>
        </ul>
        <ul className="list">
          <li>Item 19</li>
          <li>Item 20</li>
          <li>Item 21</li>
        </ul>
        <ul className="list">
          <li>Item 22</li>
          <li>Item 23</li>
          <li>Item 24</li>
        </ul>
        <ul className="list">
          <li>Item 25</li>
          <li>Item 26</li>
          <li>Item 27</li>
        </ul>
        <ul className="list">
          <li>Item 28</li>
          <li>Item 29</li>
          <li>Item 30</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
