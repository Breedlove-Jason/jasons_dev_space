import React, { Fragment } from "react";
import Typewriter from "../../components/typewriter/typewriter.component";
import BackToTop from "../../components/back-to-top/backToTopButton.component";

import { HomeContent, HomeWelcome, HomeTitle } from "./home.styles";

function Home() {
  return (
    <>
      <HomeWelcome>Welcome to my Portfolio Website! {/*</small>*/}</HomeWelcome>
      <HomeTitle> Hey I'm </HomeTitle>
      <Typewriter
        wordsList={[
          "Jason Breedlove",
          "A Combat Soldier",
          "A Computer Programmer",
          "A Full-Stack Developer",
          "A Designer",
          "A Creator",
        ]}
      />
      <HomeContent>
        Developer enthusiastic about technology and software development. Once a
        military Sergeant who fought with valor during the Iraq war, now a
        computer programmer.
      </HomeContent>

      <BackToTop />
    </>
  );
}
export default Home;
