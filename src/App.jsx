/* import { BrowserRouter, Route, Routes } from "react-router-dom"; */
import "./App.css";
import Menu from "./Component/Menu/Menu";
import Section from "./Component/Section/Section";
/* import About from './Component/Pages/About/About'; */
/* import cardsData from "./Component/Cards/CardPosts"; */
import Button from "./Component/Button/Button.jsx";
import { cardsData } from "./Component/Cards/CardPosts";
import Card from './Component/Cards/Card.jsx';

function App() {
  return (
    /*     <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="" element={<Section />} />
        <Route path="Home" element={<div>Home</div>} />
        <Route path="About" element={<About/>} />
      </Routes>
    </BrowserRouter> */
    <div className="App">
      <Menu />
      <Section />
      <div className="cards-container">
        {cardsData.map((card) => (
          <Card key={card.id} title={card.title} body={card.body} />
        ))}
      </div>
    </div>
  );
}

export default App;
