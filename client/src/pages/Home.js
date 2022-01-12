import About from "../components/HomeComponents/About";
import HomeStat from "../components/HomeComponents/HomeStat";
import Insight from "../components/HomeComponents/Insight";
import styled from "styled-components";
import PastRecruiter from "../components/HomeComponents/PastRecruiter";
import HomeStatSection from "../components/HomeComponents/HomeStatSection";
import Contact from "../components/HomeComponents/Contact";
import Footer from "../components/HomeComponents/Footer";

import { Helmet } from "react-helmet";
const Card = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 80%;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  @media screen and (max-width: 600) {
    font-size: 1.5rem;
  }
`;

const Stat = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 5px;
`;

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Placementor</title>
        {/* <link rel="icon" type="image/png" sizes="16x16" href="/"> */}
        <link
          rel="icon"
          type="image/png"
          href="../assets/favicon_io/favicon-16x16.png"
        />
        <meta name="theme-color" content="#064420" />
      </Helmet>

      <About />
      <Insight />
      <HomeStat>
        <Card>
          <Stat>
            <p>Total offers received</p>
            <h2>920+</h2>
          </Stat>
          <Stat>
            <p>Total offers Accepted</p>
            <h2>815+</h2>
          </Stat>
          <Stat>
            <p>Companies Participated</p>
            <h2>200+</h2>
          </Stat>
        </Card>
      </HomeStat>
      <PastRecruiter />
      <HomeStatSection />
    </>
  );
}
