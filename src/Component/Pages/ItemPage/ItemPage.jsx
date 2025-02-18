import style from "./ItemPage.module.css";
import { FiInstagram } from "react-icons/fi";
import { BsTelegram } from "react-icons/bs";
import { MdOutlineWhatsapp } from "react-icons/md";
import itemImg from "/videoIcon.png";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import ThumbsGallery from '../../Swiper/ThumbsGallery';

const ItemPage = () => {
  const { id } = useParams();
  const [itemData, setItemData] = useState(null);
  const url = new URL(window.location.href);
  const pathSegments = url.pathname.split("/");
  const lastSegment = pathSegments[pathSegments.length - 3];

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(
          `http://localhost:3002/api/${lastSegment}/getById?id=${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch item data");
        }
        const data = await response.json();
        setItemData(data);
      } catch (error) {
        console.error("Error fetching item:", error);
      }
    };

    fetchItem();
  }, [id]);

  if (!itemData) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.itemContent}>
      <div className={style.mainContent}>
        <div className={style.itemImg}>
          {/* <img src={itemImg} alt="" /> */}
          <ThumbsGallery/>
          <div className={style.itemSocialMedia}>
            <span className={style.numberInf}>
              <a href={`tel:${itemData.phone}`}>tel: {itemData.phone}</a>
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
              <span className={style.txtStrong}>{itemData.city}</span>
            </div>
            <div className={style.infItem}>
              <span className={style.txtGrey}>Улица</span>
              <span className={style.txtStrong}>{itemData.street}</span>
            </div>
            <div className={style.infItem}>
              <span className={style.txtGrey}>Цена</span>{" "}
              <span className={style.txtStrong}>{itemData.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
