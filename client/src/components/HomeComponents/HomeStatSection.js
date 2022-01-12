import styled from "styled-components";
import Statsgirl from "../../assets/Statsgirl.svg";
import StatTableGuy from "../../assets/Statstableguy.svg";
import StatsScreen from "../../assets/StatsScreens.svg";

const Container = styled.div`
  width: 100%;
  padding: 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(138, 94, 191, 1);

  .paragraph {
    margin-top: 20px;
    font-weight: bold;
    max-width: 50%;
    margin: auto;
  }
`;

const Button = styled.button`
  width: 150px;
  border-radius: 5px;
  outline: none;
  border: none;
  margin: 20px;
  padding: 10px;
  color: #fff;
  background: linear-gradient(
    90deg,
    rgba(238, 109, 152, 1) 15%,
    rgba(138, 94, 191, 1) 85%
  );
  transition: all 0.5s;
  font-size: 1rem;
  font-weight: bolder;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const SvgContainer = styled.div`
  display: none;
  width: 100%;
  position: relative;
  margin-top: -100px;
  .statsgirl {
    width: 230px;
    height: 230px;
    position: absolute;
    bottom: 0;
    right: 50px;
  }
  .statsscreen {
    width: 700px;
    height: 500px;
  }
  .statstableguy {
    width: 230px;
    height: 230px;
  }
  @media screen and (min-width: 1000px) {
    display: block;
  }
`;

export default function HomeStatSection() {
  return (
    <>
      <Container>
        <h1 style={{"fontWeight":"700"}}>Statistics</h1>
        <p className="paragraph">
          Concise and accurate data on every company that has visited the campus
          for hiring.
        </p>

        <SvgContainer>
          <img className="statstableguy" src={StatTableGuy} alt="svg" />
          <img className="statsscreen" src={StatsScreen} alt="svg" />
          <img className="statsgirl" src={Statsgirl} alt="svg" />
        </SvgContainer>
        <br />
        <p className="paragraph">
          An in-depth company-wise breakdown for the previous placement seasons.
        </p>
        <Button onClick={(event) => (window.location.href = "/stats")}>
          View All Stats {"->"}
        </Button>
      </Container>
    </>
  );
}
