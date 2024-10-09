import style from "./Button.module.css";


const Button = ({bgColor, textColor, text, borderType,}) => {
  return (
    <button
      className={style.btn}
      style={{
        backgroundColor: bgColor,
        borderRadius: borderType,
        color: textColor,
      }}
    >
      {text}
    </button>
  );
};

export default Button;


