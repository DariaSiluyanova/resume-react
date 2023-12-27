import React from "react";
import Promo from "./blocks/Promo/Promo";
import PortfolioItem from "./blocks/Portfolio/PortfolioItem";
import CatEnergy from "../assets/content-catEnergy.jpg";
import CatEnergy2x from "../assets/content-catEnergy2x.jpg";
import ChatBot from "../assets/content-chat-bot.jpg";
import ChatBot2x from "../assets/content-chat-bot2x.jpg";
import Wb from "../assets/content-wb.jpg";
import Wb2x from "../assets/content-wb2x.jpg";
import Welbex from "../assets/content-welbex.jpg";
import Welbex2x from "../assets/content-welbex2x.jpg";
import ToDo2x from "../assets/content-todo2x.jpg";
import ToDo from "../assets/content-todo.jpg";
import Sedona from "../assets/content-sedona.jpg";
import Sedona2x from "../assets/content-sedona2x.jpg";
import { motion } from "framer-motion";

const promo = [
  <div className="promo__text">
    Все проекты выложены на хостинге! Ты можешь перейти по ссылке в описании к
    проекту <span className="promo__pos">на github</span> и посмотреть готовую
    реализацию того, что тебе интересно.
  </div>,
];

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
  {
    id: 5,
    href: "https://github.com/DariaSiluyanova/1489759-sedona-30",
    src2x: Sedona2x,
    src1x: Sedona,
    text: "Брошюра туристического городка Седона",
  },
];

export default function Portfolio() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="index-main">
        <Promo key={promo.length} id={promo.length} text={promo} />
        <ul className="portfolio">
          {dataPortfolio.map((data) => (
            <PortfolioItem {...data} />
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
