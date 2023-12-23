import React from 'react'
import Promo from './blocks/Promo'
import About from './blocks/About'
import Edu from './blocks/Edu'
import Experience from './blocks/Experience'

export default function Index() {
  return (
    <div className="index-main">
      <Promo />
      <div className="index-main__container">
        <About />
        <Edu />
        <Experience />
      </div>
    </div>
  )
}
