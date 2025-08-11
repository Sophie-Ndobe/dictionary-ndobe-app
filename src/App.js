import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="mt-3">My Dictionary App</h1>
        <footer>
          <p>
            Authored by{" "}
            <a
              href="https://github.com/Sophie-Ndobe?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Nkateko Ndobe</strong>
            </a>
            , this{" "}
            <a
              href="https://github.com/Sophie-Ndobe/dictionary-ndobe-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-source{" "}
            </a>
            project is deployed and hosted on{" "}
            <a
              href="https://dictionary-words-check.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
