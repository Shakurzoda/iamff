import style from "./ItemPage.module.css";
import imgg from '/src/assets/videoIcon.png'

const ItemPage = () => {
  return (
    <article className={style.conteiner}>
      <div className={style.topBaner}>
        <h2>Название</h2>
      </div>
      <div className={style.mainContent}>
        <div className={style.mediaInf}>
          <div className={style.mainVideo}>
            <img src={imgg} alt="" />
          </div>
          <div className={style.info}>
            <div className={style.telInfo}>
              <strong>Tel: +992933333333</strong>
            </div>
            <div className={style.socialInfo}>
              <ul>
                <li>asd</li>
                <li>qwe</li>
                <li>qwe</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={style.txtInf}>
          <h3 style={{ textAlign: "center", paddingTop: "100px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            obcaecati vitae ex incidunt. Sapiente, deserunt veritatis? Velit
            itaque, error magni placeat officiis facilis perferendis sunt
            obcaecati sed dolorum culpa delectus.
          </h3>
        </div>
      </div>
    </article>
  );
};

export default ItemPage;
