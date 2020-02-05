import React from "react";
import { graphql } from "gatsby";
import BackgroundSection from "../components/global/BackgroundSection";
import Layout from "../components/layout";
import Info from "../components/Home/Info";
import Menu from "../components/Home/Menu";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title="Regular Joe's"
      />
      <Info />
      <Menu items={data.menu} />
    </Layout>
  );
};

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
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
          category
          image {
            fixed(width: 50, height: 50) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
