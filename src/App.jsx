import "./App.css";
import AboutMe from "./myComponents/AboutMe";
import Page1 from "./myComponents/Page1";
import Skills from "./myComponents/Skills";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Page1 />
      <Skills />
      <AboutMe />
    </div>
  );
}

export default App;
