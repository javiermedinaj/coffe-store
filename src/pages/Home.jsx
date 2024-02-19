import React from "react";
import Hero from "../components/Hero";
import SectionProducts from "../components/SectionProducts";
import Layout from "../components/Layout";
import About from "../components/About";


const Home = () => {
  return (
    <Layout>
      <Hero />
      <SectionProducts />
      <About />
      
    </Layout>
  );
};

export default Home;
