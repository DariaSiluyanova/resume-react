import React from 'react'
import Promo from './blocks/Promo/Promo'
import About from './blocks/Index/About'
import Edu from './blocks/Index/Edu'
import Experience from './blocks/Index/Experience'
import { motion } from 'framer-motion';

const promo = [
  <h3 className="promo__title">Привет!</h3>,
  <p className="promo__text">Я&nbsp;начинающий <span className="promo__pos">frontend&nbsp;developer</span>, рада&nbsp;познакомиться! <div className='promoAdd'>На&nbsp;этой страничке ты&nbsp;найдешь&nbsp;всю&nbsp;информацию о&nbsp;моих&nbsp;профессиональных навыках и&nbsp;обязательно не забудь посмотреть моё портфолио!</div></p>,
]

export default function Index() {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <div className="index-main">
        <Promo text={promo}/>
        <div className="index-main__container">
          <About />
          <Edu />
          <Experience />
        </div>
      </div>
    </motion.div>
  )
}
