import "./App.css";
import Navigation from "./components/navbar/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./components/cards/Cards";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
    </div>
  );
}

export default App;
