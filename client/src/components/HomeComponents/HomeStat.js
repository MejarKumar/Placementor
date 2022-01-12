import styled from "styled-components";

const HomeStat = styled.div`
  background: rgb(238, 111, 153);
  background: linear-gradient(
    90deg,
    rgba(238, 111, 153, 1) 12%,
    rgba(138, 94, 191, 1) 85%,
    rgba(138, 94, 191, 1) 100%
  );
  width: 80%;
  height: 8rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  z-index: 1;

  @media screen and (max-width: 600px) {
    height: 5rem;
  }
  @media screen and (min-width: 1000px) {
    transform: translateY(-30px);
  }
`;

export default HomeStat;
