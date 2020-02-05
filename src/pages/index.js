import React from "react";
import { Link, graphql } from "gatsby";
import { FaGulp } from "react-icons/fa";
import BackgroundSection from "../components/global/BackgroundSection";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = ({ data }) => {
  console.log("data", data);
  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        styleClass="hello"
      />
      <FaGulp />
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
  }
`;

export default IndexPage;
