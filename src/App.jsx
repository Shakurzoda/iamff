import { Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./Component/Menu/Menu";
import About from "./Component/Pages/About/About";
import { cardsData } from "./Component/Cards/CardPosts";
import Home from "./Component/Pages/Home/Home.jsx";
import CategoryPage from "./Component/Pages/CategoryPage/CategoryPage";

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="Home" element={<div>Home</div>} />
        <Route path="About" element={<About />} />
        {cardsData.map((card) => (
          <Route
            path={card.link}
            element={<CategoryPage categoryName={card.title} />}
            key={card.id}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
