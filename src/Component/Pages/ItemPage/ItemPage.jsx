import style from "./ItemPage.module.css";
import { FiInstagram } from "react-icons/fi";
import { BsTelegram } from "react-icons/bs";
import { MdOutlineWhatsapp } from "react-icons/md";
import itemImg from "/videoIcon.png";

const ItemPage = () => {
  return (
    <div className={style.itemContent}>
      <div className={style.mainContent}>
        <div className={style.itemImg}>
          <img src={itemImg} alt="" />
          <div className={style.itemSocialMedia}>
            <span className={style.numberInf}>
              <a href="+992933333333">tel: +992933333333</a>
            </span>
            <span className={style.mediaInf}>
              <ul className={style.socialMedList}>
                <li>
                  <a href="">
                    <FiInstagram size={25} />
                  </a>
                </li>
                <li>
                  <a href="">
                    <BsTelegram size={25} />
                  </a>
                </li>
                <li>
                  <a href="">
                    <MdOutlineWhatsapp size={25} />
                  </a>
                </li>
              </ul>
            </span>
          </div>
        </div>
        <div className={style.itemInf}>
          <div className={style.itemTitle}>
            <h2>Описание</h2>
          </div>
          <div className={style.itemTxt}>
            <div className={style.infItem}>
              <span className={style.txtGrey}>Город</span>{" "}
              <span className={style.txtStrong}>Душанбе</span>
            </div>
            <div className={style.infItem}>
              <span className={style.txtGrey}>Улица</span>
              <span className={style.txtStrong}>Исмоили Сомони 2</span>
            </div>
            <div className={style.infItem}>
              <span className={style.txtGrey}>Цена</span>{" "}
              <span className={style.txtStrong}>Договорная</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
