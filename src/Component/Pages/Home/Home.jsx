import style from './Home.module.css'
import Section from "../../Section/Section.jsx";
import {cardsData} from "../../Cards/CardPosts.js";
import Card from "../../Cards/Card.jsx";

const Home = () => {
    return (
      <div className={style.home}>
        <Section />
        <div className={style.cardsContainer}>
          <h1 style={{ textAlign: "center", textTransform: "uppercase" }}>
            Категории
            <hr style={{width: '250px'}}/>
          </h1>
          <div className={style.mainConteiner}>
            {cardsData.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
    );
};

export default Home;