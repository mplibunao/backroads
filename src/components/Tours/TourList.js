import React, { useState, useEffect } from "react"
import styles from "../../css/items.module.css"
import Tour from "./Tour"
import Title from "../Title"

export default ({ tours }) => {
  const [state, setState] = useState({
    tours: [],
    sortedTours: [],
  })

  useEffect(() => {
    setState({ tours: tours.edges, sortedTours: tours.edges })
  }, [tours])

  return (
    <section className={styles.tours}>
      <Title title="our" subtitle="tours" />
      <div className={styles.center}>
        {state.sortedTours.map(({ node }) => {
          return <Tour tour={node} key={node.contentful_id} />
        })}
      </div>
    </section>
  )
}
