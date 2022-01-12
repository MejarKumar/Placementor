import Loader from "react-loader-spinner";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;
export default function MyLoader() {
  return (
    <Container>
      <Loader type="ThreeDots" color="rgba(138, 94, 191, 1) " />
    </Container>
  );
}
