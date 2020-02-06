import React, { useState } from "react";
import Title from "../global/Title";
import Img from "gatsby-image";

const Menu = ({ items }) => {
  const getCategories = items => {
    let tempItems = items.map(items => {
      return items.node.category.title;
    });
    let tempCategories = new Set(tempItems);
    let categories = Array.from(tempCategories);
    categories = ["all", ...categories];
    return categories;
  };

  const [menuItems] = useState([...items.edges]);
  const [coffeeItems, setCoffeeItems] = useState(menuItems);
  const [categories] = useState(getCategories([...items.edges]));

  const handleItems = category => {
    if (category === "all") {
      setCoffeeItems(menuItems);
    } else {
      let filteredItems = menuItems.filter(
        ({ node }) => node.category.title === category
      );
      setCoffeeItems(filteredItems);
    }
  };

  if (!menuItems.length) {
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title="best of our menu" />
          <div className="row">
            <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
              <h2>there are no items to display</h2>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="menu py-5">
      <div className="container">
        <Title title="best of our menu" />
        <div className="row mb-5">
          <div className="col-10 mx-auto text-center">
            {categories.map((category, index) => {
              return (
                <button
                  type="button"
                  value={category}
                  key={category}
                  className="btn btn-yellow text-capitalize m-3"
                  onClick={() => handleItems(category)}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
        <div className="row">
          {menuItems.length > 0 &&
            coffeeItems.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="col-11 col-md-6 my-3 d-flex mx-auto"
                >
                  <div>
                    <Img fixed={node.image.fixed} />
                  </div>
                  {/* item text */}
                  <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-0">
                        <small className="text-capitalize">{node.title}</small>
                      </h6>
                      <h6 className="mb-0">${node.price}</h6>
                    </div>
                    <p className="text-muted">
                      <small>{node.description.description}</small>
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Menu;
