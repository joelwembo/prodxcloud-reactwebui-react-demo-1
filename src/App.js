import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        App Deployment With <code>PRODXCLOUD</code> Using S3 and CDK.
        </p>
        <a
          className="App-link"
          href="https://joelwembo.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          React App Using AWS S3 and AWS CDK
        </a>
      </header>
    </div>
  );
}

export default App;
