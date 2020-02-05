import React, { useState } from "react";
import Title from "../global/Title";
import Img from "gatsby-image";
const Menu = ({ items }) => {
  const [menuItems, setMenuItems] = useState([...items.edges]);
  const [coffeeItems, setCoffeeItems] = useState([...items.edges]);
  console.log("menuItems", menuItems);
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
