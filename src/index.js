import React from 'react';
import ReactDOM from 'react-dom';

function Welcome(props) {
  return <h1>hello, {props.name}</h1>;
}

function App() {
  return (  
    <div>
      <Welcome name="hong" />
      <Welcome name="in" />
      <Welcome name="young" />
    </div>
  );
}

ReactDOM.render(
  App(), document.getElementById('root')
);
