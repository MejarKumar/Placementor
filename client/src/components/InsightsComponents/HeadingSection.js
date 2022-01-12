import styled from "styled-components";
import SuitBoi from "../../assets/Suitboi2.svg";
const HeadingDiv = styled.div`
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(238, 109, 152, 1) 15%,
    rgba(138, 94, 191, 1) 85%
  );
  padding: 1rem;
  color: #fff;
  display: flex;
  justify-content: flex-end;
  .text_area {
    display: flex;
    flex-direction: column;
    text-align: right;
    width: 80%;
  }
  .suitboi_svg {
    display: none;
    width: 300px;
    height: 300px;
    transform: translateY(10%);
  }
  @media screen and (min-width: 1000px) {
    justify-content: space-between;
    .suitboi_svg {
      display: inline;
    }
  }
`;
export default function HeadingSection() {
  return (
    <>
      <HeadingDiv>
        <img className="suitboi_svg" src={SuitBoi} alt="suitboi" />
        <div className="text_area">
          <h1>Insights</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam
          </p>
        </div>
      </HeadingDiv>
    </>
  );
}
