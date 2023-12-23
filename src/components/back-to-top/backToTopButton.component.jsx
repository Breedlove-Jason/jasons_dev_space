import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import arrowUpCircleFill from "@iconify-icons/bi/arrow-up-circle-fill"; // Choose an appropriate icon
import { StyledBackToTopButton } from "./backToTopButton.styles";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <StyledBackToTopButton
      onClick={scrollToTop}
      style={{ display: visible ? "block" : "none" }}
    >
      <Icon icon={arrowUpCircleFill} style={{ fontSize: "48px" }} />
    </StyledBackToTopButton>
  );
};

export default BackToTop;
