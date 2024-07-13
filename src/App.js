import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      {/* <Project/> */}
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
