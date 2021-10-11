import React, { useState } from 'react';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button/Button';

function App() {
  const [paragraphShown, setParahraphShown] = useState(false);
  console.log('APP');
  const toggleParagraphShownHandler = () =>{
    setParahraphShown((previous) => !previous);
  };

  
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false}></DemoOutput>
      <Button onClick={toggleParagraphShownHandler}>Show Paragraph</Button>
    </div>
  );
}

export default App;
