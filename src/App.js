import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import players from "./Jugadores";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];
const allBirthCountries = [
  "all",
  ...new Set(players.map((player) => player.birthCountry)),
];
console.log("Todos los Paises", allBirthCountries);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [menuCountries, setMenuCountries] = useState(players);
  const [categories, setCategories] = useState(allCategories);
  const [countries, setCountries] = useState(allBirthCountries);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  const filterCountries = (birthCountry) => {
    if (birthCountry === "all") {
      setMenuCountries(players);
      return;
    }
    const newPlayers = players.filter(
      (player) => player.birthCountry === birthCountry
    );
    setMenuCountries(newPlayers);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>jugadores MLB</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          filterItems={filterItems}
          countries={countries}
          filterCountries={filterCountries}
        />
        <Menu items={menuItems} players={menuCountries} />
      </section>
    </main>
  );
}

export default App;
