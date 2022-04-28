import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Organisms/Layout'

const UnknownPage = () => {
  return (
    <Layout>
      <div style={{ margin: 'auto' }}>
        <h3>Page not found</h3>
        <hr></hr>
        <Link to="/">Go home</Link>
      </div>
    </Layout>
  )
}

export default UnknownPage
