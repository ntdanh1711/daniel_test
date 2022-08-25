import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <h1>My First Heading</h1>
        <p>My first paragraph.</p>
        <div>
          <button style={{position: "absolute", zIndex: -1}}>Yes</button>
          <div style={{opacity: 0}} class="fb-like" data-href="https://www.facebook.com/A9-Confessions-171514153014780" data-width="" data-layout="standard" data-action="like" data-size="small" data-share="false"></div>
        </div>
        <div style={{margin: 50}}>
          Test
        </div>
    </div>
  );
}

export default App;
