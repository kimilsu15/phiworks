import { Link } from "react-router-dom";
export default function HamburgerMenu() {
    return(
        <div className="hamburgerMenu">
            <div className="container">
                <div className="ham_wrap_menu">
                    <Link to={"/"}>
                        <div className="ham_wrap_menu_item">About US</div>
                    </Link>
                    <Link to={"/service"}>
                        <div className="ham_wrap_menu_item">Services</div>
                    </Link>
                    <Link to={"/contact"}>
                        <div className="ham_wrap_menu_item">Contact US</div>
                    </Link>
                </div>
                <div className="wrap_family">
                    <div>Family Site</div>
                </div>
            </div>
        </div>
    )
}