import React from 'react'
import testmonail from "../../assets/images/testmonail.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function TestmonialMain() {
  return (
    <div className='testmonial-main d-flex  flex-column flex-lg-row '>
            <div className='info-testmonial d-flex flex-column flex-lg-row'>
                <div className='img-testmonial'>
                    <img src={testmonail} alt="" />
                </div>
                <div className='details-info'>
                    <span className='author'>Author</span>
                    <h4 className='author-name'>Caroline Casey</h4>
                    <p className='author-p'>Caroline Casey is an award-winning social activist and founder of The Valuable 500, a global movement aimed at getting 500 companies to commit to disability inclusion. </p>
                </div>
            </div>
            <div className='follow'>
                <button className='btn-follow'><FontAwesomeIcon className='icon-twitter' icon={faTwitter} />Follow</button>
            </div>
    </div>
  )
}
