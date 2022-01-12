import styled from "styled-components";
import { Card } from "../HomeComponents/PastRecruiter";
import axios from "axios";
import { useEffect, useState } from "react";

import MyLoader from "./MyLoader";
const Container = styled.div`
  color: rgba(138, 94, 191, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .card_container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;
export default function CompanyFetch(props) {
  //
  let [company, getCompany] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/${props.url}/all_companies`)
      .then((response) => {
        console.log(response.data);
        getCompany(response.data);
      });
  }, [props.url]);

  return (
    <Container>
      <h1> Recruiters</h1>
      <div className="card_container">
        {!company ? (
          <MyLoader />
        ) : (
          company.map((comp, idx) => (
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
        )}
      </div>
    </Container>
  );
}
