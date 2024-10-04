import style from "./Section.module.css";
import Button from "../Button/Button";
import { borderType, buttonColor, textColor } from "../Button/variables";

const Section = () => {
  return (
    <section>
      <div className={style.sectionTxt}>
        <h1 className={style.welc}>Добро пожаловать! На наш сайт</h1>
        <p>Все для вашей свадьбы</p>
      </div>
      <Button
        text="Get started"
        bgColor={buttonColor.white}
        borderType={borderType.two}
        textColor={textColor.green}
      />
    </section>
  );
};

export default Section;
