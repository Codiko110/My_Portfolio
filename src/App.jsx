import "./App.css";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Skills from "./components/Skills";
import {useRef} from "react";


function App() {
  const contactRef = useRef(null);

  const handleScroll = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });

  };
  return (
    <div className="lg:mx-15 md:mx-5">
      <Hero onClickScroll={handleScroll}/>
      <Skills />
      <Project />
      <Contact refProps={contactRef}/>
    </div>
  );
}

export default App;
