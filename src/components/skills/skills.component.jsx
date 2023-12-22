import React from "react";
import {
  SkillsContainerCard,
  ImgBx,
  CardInner,
  CardFront,
  SkillCard,
  SkillsTitle,
} from "./skills.styles";
import html5Logo from "../../assets/images/html5.svg";
// import css3Logo from "../../assets/images/css3.svg";
import cssLogo from "../../assets/images/css3.png";
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
    img: cssLogo,
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
  <>
    <SkillsTitle>My Skills</SkillsTitle>
    <SkillsContainerCard>
      {skills.map((skill, index) => (
        <SkillCard key={index}>
          <CardInner>
            <CardFront>
              <ImgBx>
                <img src={skill.img} alt={`${skill.name} logo`} />
                <span className="skill-title">{skill.name}</span>{" "}
                {/* Add title here */}
              </ImgBx>
            </CardFront>
          </CardInner>
        </SkillCard>
      ))}
    </SkillsContainerCard>
  </>
);
export default Skills;
