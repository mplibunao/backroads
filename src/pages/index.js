import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"

export default () => (
  <>
    <Layout>
      <SimpleHero>
        <Banner
          title="continue exploring"
          info=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget"
        >
          <Link to="/tours" className="btn-white">
            explore tours
          </Link>
        </Banner>
      </SimpleHero>
    </Layout>
  </>
)
