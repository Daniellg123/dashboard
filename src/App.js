import logo from './logo.svg';
import './App.css';


import SecondaryCard from './molecules/SecondaryCard/SecondaryCard';

function App() {
  return (
    <div className="App">
      <SecondaryCard 
        title='Diseño UX' 
        img='./img/logo1.png' 
        units={120} 
        users={300}
        name='Nombre'
        position='Cargo'        />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
