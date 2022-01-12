import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
export const Nav = styled.nav`
  background: linear-gradient(
    90deg,
    rgba(238, 109, 152, 1) 15%,
    rgba(138, 94, 191, 1) 85%
  );
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 0.5rem;
  color: #fff;
`;
export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  margin: 10px;
  transition: all 0.1s;
  &:hover {
    transform: scale(1.05);
    color: #fff;
  }
`;
export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 600px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.8em;
    transform: translate(-100%, 75%);
    cursor: pointer;
  }
`;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
export const HeadingStyle = styled.span`
  font-family: "Dancing Script", cursive;
`;
