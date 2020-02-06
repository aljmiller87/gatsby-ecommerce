import React from "react";
import { graphql } from "gatsby";
import BackgroundSection from "../components/global/BackgroundSection";
import Layout from "../components/layout";
import Info from "../components/Home/Info";
import Menu from "../components/Home/Menu";
import Products from "../components/Home/Products";
import Contact from "../components/Home/Contact";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title="Regular Joe's"
      />
      <Info />
      <Menu items={data.menu} />
      <Products items={data.products} />
      <Contact />
    </Layout>
  );
};

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    menu: allContentfulCoffeeItem {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          category {
            title
          }
          image {
            fixed(width: 50, height: 50) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
    products: allContentfulCoffeeProduct {
      edges {
        node {
          id: contentful_id
          title
          price
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
