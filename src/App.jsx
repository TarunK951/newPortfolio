import "./App.css";
import AboutMe from "./myComponents/AboutMe";
import Certificates from "./myComponents/Certificates";
import CursorEffect from "./myComponents/CursorEffect";
import Page1 from "./myComponents/Page1";
import Projects from "./myComponents/Projects";
import Skills from "./myComponents/Skills";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Page1 />
      <Skills />
      <AboutMe />
      <Projects />
      <CursorEffect />
      <Certificates />
    </div>
  );
}

export default App;
