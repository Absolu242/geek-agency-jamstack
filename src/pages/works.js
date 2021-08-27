import React from "react"
import { Works, GenericH2 } from "../styles/IndexStyles"
import Layout from "../components/layout"
import Project from "../components/Project"

const projects = [
  { image: "2.jpg", title: "PrintBill", link: "https://www.printbill.in/" },

  { image: "5.jpg", title: "Sprung", link: "https://sprung.us" },
  {
    image: "banner.jpg",
    title: "Orange Health",
    link: "https://whispering-bastion-herokuapp.com/",
  },
  {
    image: "2.jpg",
    title: "Billing Restro",
    link: "https://billingrestro-react-prod.herokuapp.com/",
  },
]

const works = () => (
  <Layout>
    <Works>
      <GenericH2 none dark some style={{ textAlign: "center" }}>
        Our Works
      </GenericH2>
      <section class="gallery__flex">
        {projects &&
          projects.map(proj => <Project key={proj.title} project={proj} />)}
      </section>
    </Works>
  </Layout>
)

export default works
