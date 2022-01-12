import styled from "styled-components";
import React, { useEffect } from "react";
import AboutSvg from "../../assets/Suitboi1.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSection = styled.div`
  background: linear-gradient(
    90deg,
    rgba(238, 109, 152, 1) 15%,
    rgba(138, 94, 191, 1) 85%
  );
  color: #fff;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;

  min-height: 50vh;
  padding: 0.5rem;
  @media screen and (max-width: 600px) {
    padding: 0.3rem;
  }
`;
const Heading = styled.h1`
  text-align: left;
  margin: 15px;
  font-weight:700;
`;
const Paragraph = styled.p`
  text-align: left;
  margin: 15px;
  max-width: 50%;
  font-weight: 500;
`;

const Image = styled.img`
  width: 300px;
  height: 22rem;
  position: absolute;
  right: 15px;
  top: 70px;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <AboutSection>
        <Heading>About Us</Heading>
        <Paragraph>
          Mailer Daemon is the best recognised student-run media body of IIT
          (ISM) Dhanbad. Our pages have produced exhaustive reports and
          statistics every day for the last two decades, helping the student
          community express their opinions, identify opportunities and stay
          updated with news and ideas centred around the college.
        </Paragraph>
        <br />
        <Paragraph>
          'Placementor' is another initiative towards the same: creating a
          compendium of valuable insights, data and statistics to help you
          clinch your dream job.
        </Paragraph>
        <Image src={AboutSvg} alt="about-svg"></Image>
      </AboutSection>
    </>
  );
}
