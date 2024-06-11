import style from "./Footer.module.scss";
import { IoIosArrowRoundUp } from "react-icons/io";
import { Link } from "react-scroll";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.left}>
          <img src="./logo1.png" alt="logo" />
          <p>The Premier tuition institute in kerala for</p>
          <p> science and mathematics.</p>
          <div className={style.icons}>
            <FaFacebookF className={style.icon} />
            <FaInstagram className={style.icon} />
            <FaTwitter className={style.icon} />
            <FaLinkedinIn className={style.icon} />
          </div>
        </div>
        <div className={style.links}>
          <p>Quick Links</p>
          <ul>
            <li>Home</li>
            <li>Contact US</li>
            <li>Register</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <div className={style.branch}>
          <p>Branches</p>
          <ul>
            <li>Kollam</li>
            <li>Ernakulam</li>
            <li>Thiroor</li>
            <li>Chalakkudi</li>
          </ul>
        </div>
        <div className={style.contact}>
          <p>Contact</p>
          <ul>
            <li>
              Toll free: <span className={style.dark}>+1234568963</span>
              <p>(9:AM to 8:PM IST)</p>
            </li>
            <li>
              Email: <span className={style.dark}>example@gmail.com</span>
            </li>
            <li>
              Address:{" "}
              <span className={style.dark}>Kerala First Tuition Academy</span>
            </li>
            <li>Opposite Students Book Stall</li>
            <li>ChurchShop, Chalakkudy South Junction</li>
          </ul>
        </div>
      </div>
      <div className={style.bottom}>
        <div className={style.bottomLeft}>
          <hr />
          <p>Copyrights ©2023 Kerala First. Build by MashupTech</p>
        </div>
        <div className={style.bottomRight}>
          <Link to={"navbar"}>
            <IoIosArrowRoundUp size={30} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
