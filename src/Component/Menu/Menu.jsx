import style from "./Menu.module.css";
import { Link } from "react-router-dom";
import logo from '/src/assets/123.png'

const Menu = () => {
  return (
    <header className={style.conteiner}>
      <div className={style.menu}>
        <div>
          <Link to="">
            <img src={logo} alt="Logo" />
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
        </nav>
      </div>
    </header>
  );
};

export default Menu;
