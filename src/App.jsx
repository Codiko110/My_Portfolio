
import "./App.css";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="lg:mx-15 md:mx-5 ">
      <Hero />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
