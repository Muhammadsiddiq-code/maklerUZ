import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { IoMdPerson } from "react-icons/io";
import img1 from "../../assets/images/background-removed (1).png";


function Navbar() {
  return (
    <div className="banner">
      <nav className="navbar">
        <div className="head">
          <Link className="a a1" to="/">
            <img className="img1" src={img1} alt="" />
          </Link>
        </div>

        <div className="head">
          <ul>
            <li>
              <NavLink className="a a2" to="/uylars">
                Sotiladigan Uylar
              </NavLink>
            </li>
            <li>
              <NavLink className="a a2" to="/talabalar-uchun">
                Talabalar uchun uylar
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="head">
          <NavLink className="a" to="/kirish">
            <button className="button1">
              {" "}
              <IoMdPerson /> <p>Log in</p>
            </button>
          </NavLink>

          <NavLink className="a" to="/SignIn">
            <button className="button2">
              {" "}
              <p>Sign in</p>
            </button>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
