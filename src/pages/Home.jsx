import React from 'react'
import Hero from '../components/Hero'
import SectionProducts from '../components/SectionProducts'
import Layout from '../components/Layout'
const Home = () => {
  return (
    <Layout>
        <Hero />
        <SectionProducts />
    </Layout>
  )
}

export default Home