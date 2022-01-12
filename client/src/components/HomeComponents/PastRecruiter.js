import styled from "styled-components";
import ToDoList from "../../assets/todolist.svg";
import google from "../../assets/logo/google-color.svg";
import microsoft from "../../assets/logo/microsoft.svg";
import amazon from "../../assets/logo/amazon-a-logo.svg";
import adobe from "../../assets/logo/adobe.svg";
import sprinklr from "../../assets/logo/sprinklr-logo.svg";
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 1rem;
  color: rgba(138, 94, 191, 1);
  overflow-x: hidden;
  .heading {
    font-size: 3rem;
  }
  .paragraph {
    margin-top: 20px;
    font-size: 1.2rem;
    font-weight: bold;
    width: 50%;
    text-align: center;
  }
  .company_container {
    max-width: 750px;
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 600px) {
    .paragraph {
      width: 80%;
    }
  }
`;

export const Card = styled.div`
  width: 180px;
  height: 230px;
  margin: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 2px dashed rgba(138, 94, 191, 1);
  border-radius: 10px;
  transition: all 0.5s;
  padding: 10px;
  &:hover {
    color: #fff;
    transform: scale(1.05);
    transition: all 0.5s;
    border: 0;
    background: linear-gradient(
      90deg,
      rgba(238, 109, 152, 1) 15%,
      rgba(138, 94, 191, 1) 85%
    );
  }
`;

const Svg1 = styled.img`
  position: absolute;
  left: 0;
  width: 400px;
  transform: scale(0.8);
  transform: translateX(-50%) translateY(40%);
  display: none;
  @media screen and (min-width: 1000px) {
    display: block;
  }
`;

const logo_style = {
  height: "30%",
};
const Svg2 = styled.img`
  position: absolute;
  left: 100%;
  width: 400px;
  transform: scale(0.8);
  transform: translateX(-50%) translateY(40%);

  display: none;
  @media screen and (min-width: 1000px) {
    display: block;
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
  cursor: pointer;
  background: linear-gradient(
    90deg,
    rgba(238, 109, 152, 1) 15%,
    rgba(138, 94, 191, 1) 85%
  );
  transition: all 0.5s;
  font-size: 1rem;
  font-weight: bolder;
  &:hover {
    transform: scale(1.1);
  }
`;
export default function PastRecruiters() {
  return (
    <>
      <Container>
        <Svg1 src={ToDoList} />
        <Svg2 src={ToDoList} />
        <h1 className="heading" style={{ "fontWeight": "bold"}}> Past Recruiters</h1>
        <p className="paragraph">
          The institute has had active relations with many corporations of high
          repute for several decades. Some of the prominent recruiters are:
        </p>
        <div className="company_container">
          <Card>
            <h3>GOOGLE</h3>
            <img style={logo_style} alt="google logo" src={google}></img>
          </Card>
          <Card>
            <h3>MICROSOFT</h3>
            <img style={logo_style} alt="google logo" src={microsoft}></img>
          </Card>
          <Card>
            <h3>AMAZON</h3>
            <img style={logo_style} alt="google logo" src={amazon}></img>
          </Card>
          <Card>
            <h3>ADOBE</h3>
            <img style={logo_style} alt="google logo" src={adobe}></img>
          </Card>
          <Card>
            <h3>SPRINKLR</h3>
            <img
              style={{ height: "40%" }}
              alt="google logo"
              src={sprinklr}
            ></img>
          </Card>
        </div>
        <Button
          onClick={(event) => (window.location.href = "/insight/placement")}
        >
          View All {"->"}
        </Button>
      </Container>
    </>
  );
}
