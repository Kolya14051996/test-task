import React from 'react'
import './afterSent.scss'
import successImg from '../../img/success-image.svg'

const AfterSent = () => {
  return (
    <section className='after-sent'>
      <h1 className='after-sent__title'>User successfully registered</h1>
      <div className='after-sent__img-wrapper'>
        <img src={successImg} alt="Register to get a work" />
      </div>
    </section>
  )
}

export default AfterSent