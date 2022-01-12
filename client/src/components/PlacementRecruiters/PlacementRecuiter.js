import "./PlacementRecuiter.css";
import Button from "react-bootstrap/Button";
import { Card } from "../HomeComponents/PastRecruiter";
import { Container, Row, Col, Stack } from "react-bootstrap";
import CommentComponent from "../CommentComponent/Comment"
// import logo from "./logo.jpg";
import headimg from "../../assets/Suitboi1.svg";
function App() {
  return (
    <>
    <Stack gap={3}>
      <div
        className="bg-light border c1 justify-content-md-center"
        style={{ height: "300px" }}
      >
        <h1 style={{ paddingLeft: "140px" }}>Placement Recruiters</h1>
        <img src={headimg} id="top-head" />
      </div>
      <div className="c2">
        <h1> Google inc</h1>
        {/* <img src={logo} id="company-logo" /> */}
      </div>
      <div
        className="bg-light border c1 justify-content-md-center"
        style={{ paddingTop: "20px" }}
      >
        <h2>Selection Process</h2>
      </div>
      <div className="container1">
        <Card>sdaffadsfdsafasfsafad sfsdfsd dsfsafasfs</Card>
        <Card>sdaffadsfdsafasfsafadsf sdfsd dsfsafasfs</Card>
        <Card>sdaffadsfdsafasfsaf adsfsdfsd dsfsafasfs</Card>
      </div>
      <div className="bg-light border c1 justify-content-md-center">
        <h1>Influence of</h1>
      </div>
      <div className="container1">
        <Card>sdaffadsfdsafasfsafadsfsdfsd dsfsafasfs</Card>
        <Card>sdaffadsfdsafasfsafadsfsdfsd dsfsafasfs</Card>
      </div>

      <div className="bg-light border c1">
        <h1>Test Prep</h1>
      </div>
      <div className="container1">
        <Card>sdaffadsfdsafasfsafadsfsdfsd dsfsafasfs</Card>
      </div>
      <div className="bg-light border c1">
        <h1>Takeaways</h1>
      </div>
      <div className="container1">
        <Card>sdaffadsfdsafasfsafadsfsdfsd dsfsafasfs</Card>
      </div>
    </Stack>


 <CommentComponent/>
    </>
  );
}

export default App;
