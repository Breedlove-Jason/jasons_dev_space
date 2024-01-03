import { Fragment } from "react";
import {
  LayoutGrid,
  Header,
  Sidebar,
  MainContent,
  FooterDiv,
} from "./App.styles";
import Navigation from "./routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";
import Home from "../src/routes/home/home.component";
import About from "../src/routes/about/about.component";
import Projects from "../src/routes/projects/projects.component";
import Contact from "../src/routes/contact/contact.component";
import SocialIcons from "./components/social-media/social-media.component";
import ContactButton from "./components/contact-button/contact-button.component";
import Footer from "./components/footer/footer.component.jsx";
import "../src/assets/css/styles.css";
import GlobalStyles from "./GlobalStyles";
import "../src/assets/css/styles.css";

function App() {
  return (
    <>
      {/*<div>*/}
      {/*<GlobalStyles />*/}
      {/*<Navigation />*/}
      {/*<Routes>*/}
      {/*  <Route path="/" element={<Navigation />}>*/}
      {/*    <Route index element={<Home />} />*/}
      {/*    <Route path="/about" element={<About />} />*/}
      {/*    <Route path="/projects" element={<Projects />} />*/}
      {/*    <Route path="/contact" element={<Contact />} />*/}
      {/*    /!*<Route path="/skills" element={<Skills />} />*!/*/}
      {/*  </Route>*/}
      {/*</Routes>*/}
      {/*</div>*/}

      <LayoutGrid>
        <Header>
          <Navigation />
        </Header>
        <Sidebar>
          <SocialIcons />
        </Sidebar>
        <MainContent>
          <GlobalStyles />
          <div className="home-contact-wrapper">
            <Home />
            <ContactButton />
          </div>
        </MainContent>
        <FooterDiv>
          <Footer />
        </FooterDiv>
      </LayoutGrid>
    </>
  );
}

export default App;
