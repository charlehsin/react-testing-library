import React from 'react';
import './App.css';
import * as FileSaver from './FileSaver';

function App() {
  const handleClick = (even: React.MouseEvent) => {
    var blob = new Blob(["Hello, world!"], { type: "text/plain;charset=utf-8" });
    FileSaver.saveAs(blob, 'mytest.txt');
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Save file
      </button>
    </div>
  );
}

export default App;
