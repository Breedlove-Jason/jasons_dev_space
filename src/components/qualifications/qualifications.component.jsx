import React from "react";
import timelineData from "./timelineData";
import { FaGraduationCap, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import "../../assets/css/styles.css";

const Qualifications = () => {
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle"></span>

      <div className="qualification__container container">
        <div className="row mt-lg-0">
          {timelineData.map((timelineItem) => (
            <div
              key={timelineItem.type}
              className={`col-lg-6 col-sm-10 col-md-10 mt-2 qualification__content`}
              id={timelineItem.type}
            >
              <div className="qualification__button button--flex">
                {timelineItem.type === "education" ? (
                  <FaGraduationCap className="qualification__icon" />
                ) : (
                  <FaBriefcase className="qualification__icon" />
                )}
                {timelineItem.type.charAt(0).toUpperCase() +
                  timelineItem.type.slice(1)}
              </div>

              <div id={`${timelineItem.type}_timeline`}>
                <div className="container py-2">
                  {timelineItem.items.map((item) => (
                    <div key={item.date} className="row">
                      <div className="col-auto text-center flex-column d-sm-flex">
                        <div className="row h-50 qualification__journey">
                          <div className="col">
                            <span className="qualification__line"></span>
                          </div>
                          <div className="col">&nbsp;</div>
                        </div>

                        <h5>
                          <span className="badge qualification__calendar">
                            <FaCalendarAlt className="qualification__calendar-icon" />
                            {item.date}
                          </span>
                        </h5>

                        <div className="row h-50 qualification__journey">
                          <div className="col">
                            <span className="qualification__line"></span>
                          </div>
                          <div className="col">&nbsp;</div>
                        </div>
                      </div>

                      <div className="col py-2">
                        <div className="card education-card transparent_card mirror-face shadow2">
                          <div className="card-body">
                            <div className="task">
                              <div className="abstract">
                                <h3 className="qualification__title">
                                  {item.title}
                                </h3>
                                <p className="qualification__subtitle">
                                  {item.subtitle}
                                </p>
                              </div>
                              <div className="details">
                                <p className="qualification__subtitle">
                                  {item.details}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
