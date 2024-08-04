import React, { useEffect, useState } from 'react'
import SectionDetails from '../SectionDetails/SectionDetails'
import SectionTwoDetails from '../SectionTwoDetails/SectionTwoDetails'
import RelatedTopics from '../RelatedTopics/RelatedTopics'
RelatedTopics
export default function DetailsArticle() {
  return (<React.Fragment>
    <SectionDetails/>
    <SectionTwoDetails/>
    <RelatedTopics/>
  </React.Fragment>

  )
}
