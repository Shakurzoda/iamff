import style from "./Card.module.css";
import {Link} from "react-router-dom";

const Card = ({card}) => {
    const {title, body, link, img} = card;
  return (
    <div className={style.card}>
      <div className={style.cardImg}>
        <img src={img} alt="" />
      </div>
      <div className={style.cardDetails}>
        <p className={style.textTitle}>{title}</p>
        <p className={style.textBody}>{body}</p>
      </div>
      <Link to={link} className={style.cardButton}>
        Перейти
      </Link>
    </div>
  );
};

export default Card;
