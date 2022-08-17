import React, { useState } from "react";

const Categories = ({
  categories,
  filterItems,
  countries,
  filterCountries,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  // const menus =
  // {countries.map((country, index) => {
  //   return (
  //     <button
  //       type="button"
  //       className="filter-btn"
  //       key={index}
  //       onClick={() => filterCountries(country)
  //       }
  //     >
  //       {country}
  //     </button>
  //   );
  // })}

  return (
    <>
      <button
        className="menu-countries-btn"
        type="button"
        onClick={() => setShowMenu(!showMenu)}
      >
        Countries
      </button>
      <header>
        {showMenu && (
          <div className="btn-container-grid">
            {countries.map((country, index) => {
              return (
                <button
                  type="button"
                  className="filter-btn"
                  key={index}
                  onClick={() => filterCountries(country)}
                >
                  {country}
                </button>
              );
            })}
          </div>
        )}
      </header>
    </>

    // <div className="btn-container">
    //   {categories.map((category, index) => {
    //     return (
    //       <button
    //         type="button"
    //         className="filter-btn"
    //         key={index}
    //         onClick={() => filterItems(category)}
    //       >
    //         {category}
    //       </button>
    //     );
    //   })}
    // </div>
  );
};

export default Categories;
