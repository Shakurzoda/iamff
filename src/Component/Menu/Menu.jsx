import style from "./Menu.module.css";
/* import Button from "./../Button/Button";
import { borderType, buttonColor, textColor } from "../Button/variables"; */
import { Link } from "react-router-dom";
import MyButton from '../MyButton/MyButton';

const Menu = () => {
  return (
    <header className={style.conteiner}>
      <div className={style.menu}>
        <div>
          <Link to="">
            <img src="/src/assets/123.png" alt="" />
          </Link>
        </div>
        <nav className={style.menuNav}>
          <ul>
            <li>
              <Link to="" className={style.links}>
                Домой
              </Link>
            </li>
            <li>
              <Link to="About" className={style.links}>
                О нас
              </Link>
            </li>
          </ul>
          {/* <MyButton>Перейти</MyButton> */}
        </nav>
      </div>
    </header>
  );
};

export default Menu;
