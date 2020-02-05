import React from "react";
import { graphql } from "gatsby";
import BackgroundSection from "../components/global/BackgroundSection";
import Layout from "../components/layout";
import Info from "../components/Home/Info";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title="Regular Joe's"
      />
      <Info />
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
