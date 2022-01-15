import { useEffect, useState } from "react";
import { Accordion, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Card } from "./HomeComponents/PastRecruiter";
import axios from "axios";
const Data = () => {
  const params = useParams();
  console.log(params);

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/${params.type}/${params.company_name}`)
      .then((response) => {
        // console.log(response.data);
        setData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [params]);

  if (params.type !== "placement" && params.type !== "internship") {
    return <>Not found</>;
  }
  return (
    <div>

{data &&
          data.map((comp, idx) => (
            <Card key={idx}>
              <h3 style={{ textTransform: "uppercase", textAlign: "center" }}>
                {comp.company_name}
              </h3>
              <p>{comp.selected_students}</p>
              {/* <p>{comp.eligible_branch}</p> */}
              <p>{comp.CGPA}</p>
              {comp.logo && (
                <img style={{ height: "20%" }} src={`${comp.logo}`} alt="" />
              )}
            </Card>
          ))
        }



      <h1 className=" text-center mt-3"> Selection Process</h1>
      <Container className="sm-6 md-6 lg-6 flex">
        <Accordion defaultActiveKey="1">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Round 1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit sed do ut et magna . Ut ad minim ,
              exercitation nisi ut ex ea . dolor in in esse eu . sint non , in
              culpa qui anim id est .
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Group Discussion Round</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit sed do ut et magna . Ut ad minim ,
              exercitation nisi ut ex ea . dolor in in esse eu . sint non , in
              culpa qui anim id est .
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Interview Round</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit sed do ut et magna . Ut ad minim ,
              exercitation nisi ut ex ea . dolor in in esse eu . sint non , in
              culpa qui anim id est .
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
      {/* ======================================================================================== */}
      <h1 className="text-center mt-3"> Influence Of</h1>
      <Container className="sm-6 md-6 lg-6 flex">
        <Accordion defaultActiveKey="1">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Projects/Previous Internships</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit sed do ut et magna . Ut ad minim ,
              exercitation nisi ut ex ea . dolor in in esse eu . sint non , in
              culpa qui anim id est .
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>PORs</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit sed do ut et magna . Ut ad minim ,
              exercitation nisi ut ex ea . dolor in in esse eu . sint non , in
              culpa qui anim id est .
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
      {/* ======================================================================================== */}
      <h1 className="text-center mt-3">Test Preparation</h1>
      <Container className="sm-6 md-6 lg-6 flex">
        <Accordion defaultActiveKey="1">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Test Series</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit sed do ut et magna . Ut ad minim ,
              exercitation nisi ut ex ea . dolor in in esse eu . sint non , in
              culpa qui anim id est .
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
      {/* ======================================================================================== */}
      <h1 className="text-center mt-3"> Takeaways</h1>
      <Container className="sm-6 md-6 lg-6 flex">
        <Accordion defaultActiveKey="1">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Key Takeaways</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit sed do ut et magna . Ut ad minim ,
              exercitation nisi ut ex ea . dolor in in esse eu . sint non , in
              culpa qui anim id est .
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
      </div>
  );
};

export default Data;
