import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../resources/css/header/header.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import Phiworks_logo from "../../resources/images/logo/phiworks_logo.png";
import HamburgerMenu from "./menu/HamburgurMenu";
function Header() {
  const [isDropDown, setIsDropDown] = useState(false);
  const [open, setOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const navigation = useLocation().pathname;
  
  const dropDown = () => {
    setIsDropDown(!isDropDown)
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 0 ? setIsScroll(true) : setIsScroll(false)
    });
  }, [isScroll]);
  
  
  return (
    <div className="header" id="header">
      <div className={isScroll ? "container scroll" : "container"}>
        <div className="wrap_logo">
          <div className="logo">
            <Link to={"/phiworks"}>
              <img src={Phiworks_logo} />
            </Link>
          </div>
          <div className="wrap_menu">
            <Link to={"/phiworks"}>
              <div className={navigation === "/phiworks" || navigation === "/phiworks/" ? "wrap_menu_item active" : "wrap_menu_item"}>About US</div>
            </Link>
            <Link to={"/service"}>
              <div className={navigation === "/service" ? "wrap_menu_item active" : "wrap_menu_item"}>Services</div>
            </Link>
            <Link to={"/contact"}>
              <div className={navigation === "/contact" ? "wrap_menu_item active" : "wrap_menu_item"}>Contact US</div>
            </Link>
          </div>
        </div>
        <div className="wrap_family" onClick={dropDown}>
          <div>Family Site</div>
          {
            isDropDown ? <IoIosArrowUp/> : <IoIosArrowDown />
          }
          {
            isDropDown && 
            <div className="family_menu">
              <ul>
                <li onClick={()=>{window.open("http://xmountain.co.kr/")}}>㈜아이앤지</li>
                <li onClick={()=>{window.open("https://www.ahoka.co.kr/")}}>㈜아호카</li>
                <li onClick={()=>{window.open("https://ahocare.com")}}>AHOCA USA</li>
                <li onClick={()=>{window.open("https://www.tnsolution.net/")}}>㈜티엔솔루션</li>
                <li>㈜DS 산업</li>
              </ul>
            </div>
          }
        </div>
        <div className="hamburgerMenuIco" onClick={() => setOpen(!open)}>
          {
            open ? <MdClose size={25} /> : <GiHamburgerMenu size={25} />
          }
        </div>
          {
            open && <HamburgerMenu />
          }
      </div>
    </div>
  );
}
export default Header;
