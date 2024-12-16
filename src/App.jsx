import { Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./Component/Menu/Menu";
import About from "./Component/Pages/About/About";
import { cardsData } from "./Component/Cards/CardPosts";
import Home from "./Component/Pages/Home/Home.jsx";
import CategoryPage from "./Component/Pages/CategoryPage/CategoryPage";
import ItemPage from "./Component/Pages/ItemPage/ItemPage.jsx";
import Fotter from "./Component/Fotter/Fotter.jsx";

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="Home" element={<div>Home</div>} />
        <Route path="About" element={<About />} />
        {cardsData.map((card) => (
          <>
            <Route
              path={card.link}
              element={<CategoryPage categoryName={card.title} />}
              key={card.id}
            />
            <Route
              path={`${card.link}/:id`}
              element={<ItemPage />}
              key={card.id}
            />
            <Route path="/restaraunt/ItemPage/:id" element={<ItemPage />} />
            <Route path="/singer/ItemPage/:id" element={<ItemPage />} />
            <Route path="/registration/ItemPage/:id" element={<ItemPage />} />
            <Route path="/photographers/ItemPage/:id" element={<ItemPage />} />
            <Route path="/musicians/ItemPage/:id" element={<ItemPage />} />
            <Route path="/cars/ItemPage/:id" element={<ItemPage />} />
            <Route path="/salons/ItemPage/:id" element={<ItemPage />} />
            <Route path="/presenters/ItemPage/:id" element={<ItemPage />} />
          </>
        ))}
      </Routes>
      <Fotter />
    </div>
  );
}

export default App;
