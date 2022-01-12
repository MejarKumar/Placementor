import { useState,useEffect } from "react";
import { Nav, NavLink, NavMenu, Bars, HeadingStyle } from "./NavElements";
import { ResponsiveNav } from "./ResponsiveNav";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function NaveBar() {
  const [responsiveNavState, setResponsiveNavState] = useState(false);

  function reportWindowSize() {
    if (window.innerWidth > 600) setResponsiveNavState(false);
  }
  window.onresize = reportWindowSize;
  //==================================================================================
  window.onscroll = function () {
    if (responsiveNavState === true) window.scrollTo(0, 0);
  };
  //==================================================================================
  const hamburgerHandler = () => {
    setResponsiveNavState((prev) => {
      return !prev;
    });
  };

  useEffect(()=>{
    AOS.init({
      duration:500,
  
    });
  },[]);
  



  return (
    <>
      <Nav >
        <NavLink to="/">
          <h1 style={{ fontSize: "35px" }}>
            Place<HeadingStyle>mentor</HeadingStyle>
          </h1>
        </NavLink>

        <Bars onClick={hamburgerHandler} />
        <NavMenu  data-aos="fade-down-up">
          <NavLink to="/insight/placement">Insights</NavLink>
          <NavLink to="/past-recuiters">Past Recutiers</NavLink>
          <NavLink to="/stats">Statistics</NavLink>
        </NavMenu>
      </Nav>
      <ResponsiveNav className={`${responsiveNavState ? "open" : ""}`}>
        <NavLink to="/" onClick={hamburgerHandler}>
          Home
        </NavLink>
        <NavLink to="/insight" onClick={hamburgerHandler}>
          Insights
        </NavLink>
        <NavLink to="/past-recuiters" onClick={hamburgerHandler}>
          Past Recutiers
        </NavLink>
        <NavLink to="/stats" onClick={hamburgerHandler}>
          Statistics
        </NavLink>
      </ResponsiveNav>
    </>
  );
}
