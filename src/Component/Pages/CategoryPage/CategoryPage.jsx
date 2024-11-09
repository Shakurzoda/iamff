import style from "./CategoryPage.module.css";
import PersonCard from "./../../PersonCard/PersonCard";

const CategoryPage = ({ categoryName }) => {
  return (
    <div className={style.categoryPage}>
      <div className={style.categoryTitle}>{categoryName}</div>
      <div className={style.cardSection}>
        <div className={style.itemMain}>
          <PersonCard />
          <PersonCard />
          <PersonCard />
          <PersonCard />
          <PersonCard />
          <PersonCard />
          <PersonCard />
          <PersonCard />
          <PersonCard />
          <PersonCard />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
