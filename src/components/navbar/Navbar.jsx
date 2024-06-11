import { useState } from "react";
import "./Navbar.scss";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyle = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };
  return (
    <div name="navbar" className="header">
      <div className="container">
        <div className="left">
          <img src="./logo1.png" alt="logo" />
        </div>
        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <div className="right" style={getMenuStyle(menuOpened)}>
            <a href="">Home</a>
            <a href="">contact us</a>
          </div>
        </OutsideClickHandler>
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          {" "}
          <BiMenuAltRight className="icon" size={30} />
          <button className="bt" type="button">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
