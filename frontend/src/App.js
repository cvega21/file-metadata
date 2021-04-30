import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form action="/api/fileanalyse" method="post" enctype="multipart/form-data">
          <input type="file" name="upfile" />
          <input type="submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
