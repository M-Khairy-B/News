import React from 'react'
import BusinessSlider from '../BusinessSlider/BusinessSlider'
import BusinessArticle from '../BusinessArticle/BusinessArticle'
import { Helmet } from 'react-helmet'

export default function Business() {
  return (<>
              <Helmet>
                <title> Business </title>
                <meta name="description" content="Helmet application" />
            </Helmet>
      <BusinessSlider/>
      <BusinessArticle/>
  </>
  )
}
