import style from "./Card.module.css";

const Card = ({ title, body }) => {
  return (
    <div className={style.card}>
      <div className={style.cardDetails}>
        <p className={StyleSheet.textTitle}>{title}</p>
        <p className={style.textBody}>{body}</p>
      </div>
      <button className={style.cardButton}>Перейти</button>
    </div>
  );
};

export default Card;
