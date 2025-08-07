import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { IoMdPerson } from "react-icons/io";
import img1 from "../../assets/images/background-removed (1).png";
import imgmain from "../../assets/images/background-removed (2).png"

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

      <div className="main">
        <div className="main_card">
          <h1>
            Ijara ol, ijara ber, uy sot – barchasi Makler.uz’da! Talabalar uchun
            maxsus imkoniyatlar!
          </h1>
          <p>
            Biz — orzuingizdagi uyga yetaklovchi ishonchli ko‘chmas mulk
            agentligimiz. Keling, birgalikda ideal uyingizni topamiz!
          </p>
        </div>

        <div className="main_card">
          <img src={imgmain} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
