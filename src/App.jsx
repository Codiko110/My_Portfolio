
import "./App.css";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="lg:mx-15 ">
      <Hero />
      <Skills />
      <Project />
    </div>
  );
}

export default App;
