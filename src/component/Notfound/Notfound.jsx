import React from 'react'
import notfound from "../../assets/images/notfound.png";

export default function Notfound() {
  return (<>
  <section className='py-5'>
  <div className='container'>
        <div className='row justify-content-center' >
          <div className='col-10'>
            <div className='d-flex justify-content-center align-items-center'>
            <img src={notfound} alt="" />

            </div>
          </div>
        </div>
      </div>
  </section>
    
  </>
  )
}
