import styled from "styled-components";
import { Link } from "react-router-dom";
import Instagram from "../../assets/icons/instagram.svg";
import Facebook from "../../assets/icons/facebook.svg";
import Youtube from "../../assets/icons/youtube.svg";
import Linkedin from "../../assets/icons/linkedin.svg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  background: linear-gradient(
    90deg,
    rgba(238, 109, 152, 1) 15%,
    rgba(138, 94, 191, 1) 85%
  );

  .logoContainer {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
    height: 80%;
    border-radius: 7px;
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
  }
`;

const MyLink = styled.a`
  text-decoration: none;
`;
export default function Footer() {
  return (
    <>
      <Container>
        <div className="logoContainer">
          <MyLink href="https://www.instagram.com/md_iit_dhanbad/">
            <img src={Instagram} alt="insta" />
          </MyLink>
          <MyLink href="https://x.facebook.com/MDiitism/">
            <img src={Facebook} alt="facebook" />
          </MyLink>
          <MyLink href="https://www.youtube.com/channel/UCrcdJ3AGxugb7X2k5uadBFg">
            <img src={Youtube} alt="youtube" />
          </MyLink>
          <MyLink href="https://www.linkedin.com/company/mailer-daemon/">
            <img src={Linkedin} alt="linkedin" />
          </MyLink>
        </div>
      </Container>
    </>
  );
}
