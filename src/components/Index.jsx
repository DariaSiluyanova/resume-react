import React from 'react'
import Promo from './blocks/Promo'
import About from './blocks/About'
import Edu from './blocks/Edu'
import Experience from './blocks/Experience'
import { motion } from 'framer-motion';

const promo = [
  <h3 className="promo__title">Привет!</h3>,
  <p className="promo__text">Я начинающий <span className="promo__pos">frontend developer</span>,&nbsp;рада познакомиться!&nbsp;На&nbsp;этой страничке ты найдешь всю информацию о моих профессиональных навыках и обязательно не забудь посмотреть моё портфолио!</p>,
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
