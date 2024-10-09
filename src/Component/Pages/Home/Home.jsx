import style from './Home.module.css'
import Section from "../../Section/Section.jsx";
import {cardsData} from "../../Cards/CardPosts.js";
import Card from "../../Cards/Card.jsx";

const Home = () => {
    return (
      <div className={style.home}>
          <Section />
          <h1 style={{textAlign: "center", marginTop: '10rem',  textTransform: 'uppercase'}}>Список категорий</h1>
          <div className={style.cardsContainer}>
              {cardsData.map((card) => (
                  <Card key={card.id} card={card} />
              ))}
      </div>
      </div>
    );
};

export default Home;