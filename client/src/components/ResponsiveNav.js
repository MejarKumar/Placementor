import styled from "styled-components";
export const ResponsiveNav = styled.div`
  background: linear-gradient(
    90deg,
    rgba(238, 109, 152, 1) 15%,
    rgba(138, 94, 191, 1) 85%
  );
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  clip-path: circle(0px at 100% 0);
  -webkit-clip-path: circle(00px at 100% 0);
  transition: all 1s ease-out;
  &.open {
    transition: all 1s ease-out;

    clip-path: circle(1100px at 100% 0);
  }
`;
