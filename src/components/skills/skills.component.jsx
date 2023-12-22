import React from "react";
import {
  SkillsContainerCard,
  ImgBx,
  CardInner,
  CardFront,
  CardBack,
  SkillCard,
} from "./skills.styles";
import html5Logo from "../../assets/images/html5.svg";
import css3Logo from "../../assets/images/css3.svg";
import bootstrap5Logo from "../../assets/images/bootstrap-5.svg";
import javascriptLogo from "../../assets/images/javascript.svg";
import python3Logo from "../../assets/images/python.svg";
import reactLogo from "../../assets/images/react.svg";
import linuxLogo from "../../assets/images/linux.svg";

const skills = [
  {
    img: html5Logo,
    name: "HTML",
  },
  {
    img: css3Logo,
    name: "CSS",
  },
  {
    img: bootstrap5Logo,
    name: "Bootstrap",
  },

  {
    img: javascriptLogo,
    name: "Javascript",
  },
  {
    img: python3Logo,
    name: "Python",
  },
  {
    img: reactLogo,
    name: "React",
  },
  {
    img: linuxLogo,
    name: "Linux",
  },
];

const Skills = () => (
  <SkillsContainerCard>
    {skills.map((skill, index) => (
      <SkillCard key={index}>
        <CardInner>
          <CardFront>
            <ImgBx>
              <img src={skill.img} alt={`${skill.name} logo`} />
            </ImgBx>
          </CardFront>
          <CardBack>
            <h2>{skill.name}</h2>
            <p>Some additional information about the skill.</p>
          </CardBack>
        </CardInner>
      </SkillCard>
    ))}
  </SkillsContainerCard>
);

export default Skills;
