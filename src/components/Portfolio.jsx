import React from 'react'
import Promo from './blocks/Promo';
import PortfolioItem from './blocks/PortfolioItem';
import CatEnergy from '../assets/content-catEnergy.jpg';
import CatEnergy2x from '../assets/content-catEnergy2x.jpg';
import ChatBot from '../assets/content-chat-bot.jpg';
import ChatBot2x from '../assets/content-chat-bot2x.jpg';
import Wb from '../assets/content-wb.jpg';
import Wb2x from '../assets/content-wb2x.jpg';
import Welbex from '../assets/content-welbex.jpg';
import Welbex2x from '../assets/content-welbex2x.jpg';
import ToDo2x from '../assets/content-todo2x.jpg';
import ToDo from '../assets/content-todo.jpg';

const promo = [
  <p className="promo__text">
    Все проекты выложены на хостинге! Ты можешь перейти по ссылке в описании
    к проекту <span className="promo__pos">на github</span> и посмотреть
    готовую реализацию того, что тебе интересно.
  </p>
]

const dataPortfolio = [
  {
    id: 0,
    href: "https://github.com/DariaSiluyanova/1489759-cat-energy-22", 
    src2x: CatEnergy2x, 
    src1x: CatEnergy, 
    text: "Проект для подбора программы питания твоего кота",
  }, 
  {
    id: 1,
    href: "https://github.com/DariaSiluyanova/chatBot", 
    src2x: ChatBot2x, 
    src1x: ChatBot, 
    text: "Простой чат бот, который всегда поможет",
  }, 
  {
    id: 2,
    href: "https://github.com/DariaSiluyanova/wbbasket.github.io", 
    src2x: Wb2x, 
    src1x: Wb, 
    text: "Реализация корзины Wildberries",
  },
  {
    id: 3,
    href: "https://github.com/DariaSiluyanova/welbex", 
    src2x: Welbex2x, 
    src1x: Welbex, 
    text: "Cтраничка интегратора CRM",
  },
  {
    id: 4,
    href: "https://github.com/DariaSiluyanova/todo", 
    src2x: ToDo2x, 
    src1x: ToDo, 
    text: "TODO приложение для рабочих и личных задач",
  },
]

const dataList = dataPortfolio.map( data => <PortfolioItem key={data.id} id={data.id} href={data.href} src2x={data.src2x} src1x={data.src1x} text={data.text}/>)

export default function Portfolio() {
  return (
    <div className="index-main">
      <Promo text={promo}/>
      <ul className="portfolio">
          {dataList}
      </ul>
    </div>
  )
}
