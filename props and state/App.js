import './App.css'
import React from 'react';
import  ReactDOM  from 'react-dom';
import Mekha from './simple';
function App(Props) {
  return (
    <div >
      <Mekha />
      {Props.name}

      <h2>my reactcodes</h2>
    </div>
  );
}
const sim = <App name ="manufactured by Yamaha Automobiles"/>;
ReactDOM.render(sim, document.getElementById('root'))
export default App;
