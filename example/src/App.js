import { useState } from 'react';
import './App.css';
import TypeWriter from 'react-dynamic-typewriter'

function Content1(){
  const content = ['Hello World!', 'This is dynamic typewriter...', 'It handles multiple lines as well\nPretty cool, right?']
  return <TypeWriter writeSpeed={100} deleteSpeed={50} content={content}/>
}

function Content2() {
  const content = ['It does not loop when a single line is provided!']
  return <TypeWriter writeSpeed={100} deleteSpeed={50} content={content}/>
}

function Content3() {
  const [content, setContent] = useState(['It responds to State Change as well!'])

  const handleClick = () => {
    setContent(prev=> prev[0] === 'It responds to State Change as well!'? ['It animates when the State changes!'] : ['It responds to State Change as well!'])
  }

  return <>
    <p><TypeWriter writeSpeed={100} deleteSpeed={50} content = {content}/></p>
    <button onClick={handleClick}>Change Text</button>
  </>
}

function App() {

  return (
    <div className="App">
      <p style={{height:100}}><Content1/></p>
      <p style={{height:100}}><Content2/></p>
      <Content3 style={{height:50}}/>
    </div>
  );
}

export default App;
