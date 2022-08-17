import React from "react";

const Categories = ({
  categories,
  filterItems,
  countries,
  filterCountries,
}) => {
  return (
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
