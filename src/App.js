import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Social from "./components/Social";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Social />
    </div>
  );
}

export default App;
