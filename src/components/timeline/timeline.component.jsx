import React from "react";
import { Icon } from "@iconify/react";
import cppIcon from "@iconify-icons/logos/c-plusplus";
import flaskIcon from "@iconify-icons/logos/flask";
import djangoIcon from "@iconify-icons/logos/django";
import reactIcon from "@iconify-icons/logos/react";
import jsIcon from "@iconify-icons/logos/javascript";
import html5Icon from "@iconify-icons/logos/html-5";
import graduationCapIcon from "@iconify-icons/fa-solid/graduation-cap";
import pythonIcon from "@iconify-icons/logos/python";
import linuxIcon from "@iconify-icons/fa-brands/linux";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import timelineData from "./timelineData";

const icons = {
  cpp: cppIcon,
  flask: flaskIcon,
  django: djangoIcon,
  react: reactIcon,
  javascript: jsIcon,
  webDevelopment: html5Icon,
  python: pythonIcon,
  diploma: graduationCapIcon,
  linux: linuxIcon,
};

const Timeline = () => {
  return (
    <div>
      <VerticalTimeline>
        {timelineData.map((section, index) =>
          (section.timelineItems || section.items).map(
            (education, subIndex) => (
              <VerticalTimelineElement
                key={`${index}-${subIndex}`}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                // date={education.date}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<Icon icon={icons[education.icon]} />}
              >
                <h3 className="vertical-timeline-element-title">
                  {education.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {education.subtitle}
                </h4>
                <p>{education.details}</p>
              </VerticalTimelineElement>
            ),
          ),
        )}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
