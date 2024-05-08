import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import timelineData from "./timelineData";
import "./timeline.styles.css";

import { ReactComponent as PythonIcon } from "../../assets/images/python.svg";
import { ReactComponent as CppIcon } from "../../assets/images/cpp.svg";
import { ReactComponent as DiplomaIcon } from "../../assets/images/diploma.svg";
import { ReactComponent as DjangoIcon } from "../../assets/images/django.svg";
import { ReactComponent as Html5Icon } from "../../assets/images/html5.svg";
import { ReactComponent as JavascriptIcon } from "../../assets/images/javascript.svg";
import { ReactComponent as LinuxIcon } from "../../assets/images/linux.svg";
import { ReactComponent as ReactIcon } from "../../assets/images/react.svg";
import { ReactComponent as FlaskIcon } from "../../assets/images/flask.svg";
import { ReactComponent as WebDevIcon } from "../../assets/images/html5.svg";

const icons = {
  python: PythonIcon,
  cpp: CppIcon,
  diploma: DiplomaIcon,
  django: DjangoIcon,
  html5: Html5Icon,
  javascript: JavascriptIcon,
  linux: LinuxIcon,
  react: ReactIcon,
  webDevelopment: WebDevIcon,
};

const Timeline = () => {
  return (
    <div>
      <VerticalTimeline>
        {timelineData.map((section, index) =>
          (section.timelineItems || section.items).map(
            (education, subIndex) => {
              const IconComponent = icons[education.icon];
              if (!IconComponent) {
                console.error(`Icon not found: ${education.icon}`);
                return null;
              }
              return (
                <VerticalTimelineElement
                  key={`${index}-${subIndex}`}
                  className="vertical-timeline-element--work"
                  contentArrowStyle={{
                    borderRight: "7px solid rgb(33, 150, 243)",
                  }}
                  // iconStyle={{
                  //   background: "rgb(33, 150, 243)",
                  //   color: "#fff",
                  // }}
                  icon={<IconComponent className="icon" />}
                >
                  <h3 className="vertical-timeline-element-title">
                    {education.title}
                  </h3>
                  <p className="vertical-timeline-element-details">
                    {education.details}
                  </p>
                </VerticalTimelineElement>
              );
            },
          ),
        )}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
