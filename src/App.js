import Navigation from "./routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";
import Home from "../src/routes/home/home.component";
import About from "../src/routes/about/about.component";
import Projects from "../src/routes/projects/projects.component";
import Contact from "../src/routes/contact/contact.component";
import Skills from "../src/routes/skills/skills.component";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
        </Route>
      </Routes>
      <Navigation />
    </div>
  );
}

export default App;
