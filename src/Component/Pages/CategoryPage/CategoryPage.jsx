import style from "./CategoryPage.module.css";
import PersonCard from "./../../PersonCard/PersonCard";
import { useEffect, useState } from "react";

const CategoryPage = ({ categoryName }) => {
  const [arr, setArray] = useState([]);
const url = new URL(window.location.href);
const pathSegments = url.pathname.split("/");
const lastSegment = pathSegments[pathSegments.length - 1];

  async function fetchData() {
    try {
      const response = await fetch(
        `http://localhost:3002/api/${lastSegment}/getAll`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json(); // Преобразование в JSON
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  }

  useEffect(() => {
    fetchData().then((data) => {
      console.log(data);
      setArray(data);
    });
  }, []);

  return (
    <div className={style.categoryPage}>
      <div className={style.categoryTitle}>{categoryName}</div>
      <div className={style.cardSection}>
        <div className={style.itemMain}>
          {arr.map((element) => {
            return (
              <PersonCard
                key={element.name}
                name={element.name}
                img={element.img}
                id={element.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
