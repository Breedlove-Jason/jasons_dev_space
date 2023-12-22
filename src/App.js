import Navigation from "./routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";
import Home from "../src/routes/home/home.component";
import About from "../src/routes/about/about.component";
import Projects from "../src/routes/projects/projects.component";
import Contact from "../src/routes/contact/contact.component";
import Skills from "../src/routes/skills/skills.component";
import "../src/assets/css/styles.css";

import GlobalStyles from "./GlobalStyles";
import "../src/assets/css/styles.css";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <div>
        <GlobalStyles />
        {/*<Navigation />*/}
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
          </Route>
        </Routes>
      </div>
      {/*<div className="container">*/}
      {/*  <Home />*/}
      {/*  <ContactButton />*/}
      {/*  <Experience />*/}
      {/*  <SocialIcons />*/}
      {/*  <ScrollDownIcon />*/}
      {/*  <About />*/}
      {/*</div>*/}
    </Fragment>
  );
}

export default App;
