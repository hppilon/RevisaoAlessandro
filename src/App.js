import logo from "./logo.svg";
import "./App.css";
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";
import Router from "./Router";

function App() {
  return (
    <div className="App">
      <Cabecalho />
      <Router />
      <Rodape />
    </div>
  );
}

export default App;
