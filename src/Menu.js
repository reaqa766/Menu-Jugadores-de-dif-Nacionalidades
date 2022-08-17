import React from "react";

const Menu = ({ items, players }) => {
  return (
    <div className="total-menu">
      <div className="section-center-top">
        <h3 className="sub-titulo">Total Jugadores: {players.length}</h3>
      </div>
      <div className="section-center">
        {players.map((menuCountries, index) => {
          const { id, firstName, lastName, birthDate, currentAge } =
            menuCountries;
          return (
            <article key={id} className="menu-item">
              <img
                src={`https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/${id}/headshot/67/current`}
                alt={id}
                className="imagePlayer"
              />

              {/* <img src={img} alt={title} className="photo" /> */}
              <div className="item-info">
                <header>
                  <h4>
                    {index + 1} - {firstName} {lastName}
                  </h4>
                </header>
                {/* <div> */}
                <p className="price">
                  <span className="datos-players">FNac:</span> {birthDate}
                </p>
                {/* </div> */}
                <p className="price">
                  <span className="datos-players">Edad:</span> {currentAge}
                </p>
                {/* <p className="item-text">Edad: {currentAge}</p> */}
              </div>
            </article>
          );
        })}
      </div>
    </div>

    // <div className='sectioncenter-'>
    //   {items.map((menuItem) => {
    //     const { id, title, img, desc, price } = menuItem;
    //     return (
    //       <article key={id} className='menu-item'>
    //         <img src={img} alt={title} className='photo' />
    //         <div className='item-info'>
    //           <header>
    //             <h4>{title}</h4>
    //             <h4 className='price'>${price}</h4>
    //           </header>
    //           <p className='item-text'>{desc}</p>
    //         </div>
    //       </article>
    //     );
    //   })}
    // </div>
  );
};

export default Menu;
