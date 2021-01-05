import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import "./Landing.css";

const Landing = (props) => {
  return (
    <Layout user={props.user}>
      <div className="landing-screen"></div>
    </Layout>
  );
};

export default Landing;
