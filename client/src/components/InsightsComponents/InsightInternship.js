import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CompanyFetch from "./CompanyFetch";
import HeadingSection from "./HeadingSection";
import SearchBar from "./SearchBar";
import styled from "styled-components";
import {Helmet} from "react-helmet";
const BodyLink = styled(Link)`
  background-color: ${(props) => props.activeColor || "white"};
  border-radius: 10px;
  padding: 10px 20px;
  margin: 5px;
  color: ${(props) => (props.activeColor ? "white" : "rgba(238, 109, 152, 1)")};
  border: ${(props) =>
    props.activeColor ? "" : "dashed 2px rgba(238, 109, 152, 1)"};
  text-decoration: none;

  &:hover {
    color: ${(props) =>
      props.activeColor ? "white" : "rgba(238, 109, 152, 1)"};
  }
`;
const Div = styled.div`
  margin: auto;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function InsightInternship() {
  const params = useParams();
  console.log(params);
  return (
    <>

    <Helmet>
    <meta charSet="utf-8" />
    <title>Internship Insight </title>
    </Helmet>
    

      <HeadingSection />
      <Div>
        <BodyLink to="/insight/placement">Placement</BodyLink>
        <BodyLink activeColor="rgba(138, 94, 191, 1)" to="/insight/internship">
          Internship
        </BodyLink>
      </Div>
      <SearchBar />
      <CompanyFetch url="internship" />
    </>
  );
}
