import style from "./Menu.module.css";
import Button from "./../Button/Button";
import { borderType, buttonColor, textColor } from "../Button/variables";
/* import { Link } from "react-router-dom"; */

const Menu = () => {
  return (
    <header>
      <div>
        <a href="">
          <img src="/src/assets/logo.png" alt="" />
        </a>
        {/*         <Link to="">
          <img src="/src/assets/logo.png" alt="" />
        </Link> */}
      </div>
      <nav>
        <ul>
          <li>
            <a href="">Домой</a>
            {/* <Link to="">Домой</Link> */}
          </li>
          <li>
            <a href="">О нас</a>
            {/* <Link to="About">О нас</Link> */}
          </li>
        </ul>
        <Button
          text="Hello"
          bgColor={buttonColor.poorgray}
          borderType={borderType.two}
          textColor={textColor.white}
        />
      </nav>
    </header>
  );
};

export default Menu;
