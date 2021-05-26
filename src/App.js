import logo from './logo.svg';
import './App.css';

import FizzBuzz from './fizzbuzz';

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <FizzBuzz/>
      </header>
    </div>
  );
}

export default App;
