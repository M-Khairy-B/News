import React from 'react'
import ScienceSlider from '../ScienceSlider/ScienceSlider'
import ScienceArticals from '../ScienceArticals/ScienceArticals'
import { Helmet } from "react-helmet";

export default function Science() {
  return (<React.Fragment>
         <Helmet>
                <title> Science</title>
                <meta name="description" content="Technology " />
            </Helmet>
    <ScienceSlider/>
    <ScienceArticals/>
  </React.Fragment>
  )
}
