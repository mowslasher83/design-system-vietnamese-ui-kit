import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const App = () => {
  return (
    <div className="app">
      <h1>Bộ Công Cụ Thiết Kế Giao Diện Việt Nam</h1>
      <button className="primary-button">Click Me</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));