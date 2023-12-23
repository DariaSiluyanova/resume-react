import React from 'react'

export default function Portfolio() {
  return (
    <div className="index-main">
      <div className="promo index-main__promo">
        <p className="promo__text">
          Все проекты выложены на хостинге! Ты можешь перейти по ссылке в описании
          к проекту <span className="promo__pos">на github</span> и посмотреть
          готовую реализацию того, что тебе интересно.
        </p>
      </div>
      <ul className="portfolio">
        <li className="portfolio__item">
          <a href="https://github.com/DariaSiluyanova/1489759-cat-energy-22">
            <img
              className="portfolio__img"
              srcSet="img/content-catEnergy.jpg 1x,
                      img/content-catEnergy2x.jpg 2x"
              src="img/content-catEnergy2x.jpg"
              alt="Проект cat Energy"
            />
            <p className="portfolio__info">
              Проект для подбора программы питания твоего кота
            </p>
          </a>
        </li>
        <li className="portfolio__item">
          <a href="https://github.com/DariaSiluyanova/1489759-sedona-30">
            <img
              className="portfolio__img"
              srcSet="img/content-sedona.jpg 1x,
                    img/content-sedona2x.jpg 2x"
              src="img/content-sedona2x.jpg"
              alt="Проект городка Sedona"
            />
            <p className="portfolio__info">
              Туристическая брошюра городка Седона
            </p>
          </a>
        </li>
        <li className="portfolio__item">
          <a href="https://github.com/DariaSiluyanova/chatBot">
            <img
              className="portfolio__img"
              srcSet="img/content-chat-bot.jpg 1x,
                    img/content-chat-bot2x.jpg 2x"
              src="img/content-chat-bot.jpg"
              alt="Простой чат бот, который всегда поможет"
            />
            <p className="portfolio__info">
              Простой чат бот, который всегда поможет
            </p>
          </a>
        </li>
        <li className="portfolio__item">
          <a href="https://github.com/DariaSiluyanova/wbbasket.github.io">
            <img
              className="portfolio__img"
              srcSet="img/content-wb.jpg 1x,
                    img/content-wb2x.jpg 2x"
              src="img/content-wb.jpg"
              alt="Реализация корзины Wildberries"
            />
            <p className="portfolio__info">
              Реализация страницы корзины Wildberries
            </p>
          </a>
        </li>
        <li className="portfolio__item">
          <a href="https://github.com/DariaSiluyanova/welbex">
            <img
              className="portfolio__img"
              srcSet="img/content-welbex.jpg 1x,
                    img/content-welbex2x.jpg 2x"
              src="img/content-welbex.jpg"
              alt="Cтраничка интегратора CRM"
            />
            <p className="portfolio__info">Cтраничка интегратора CRM</p>
          </a>
        </li>
        <li className="portfolio__item">
          <a href="https://github.com/DariaSiluyanova/todo">
            <img
              className="portfolio__img"
              srcSet="img/content-todo.jpg 1x,
                    img/content-todo2x.jpg 2x"
              src="img/content-todo.jpg"
              alt="TODO приложение для рабочих и личных задач"
            />
            <p className="portfolio__info">
              TODO приложение для рабочих и личных задач
            </p>
          </a>
        </li>
      </ul>
    </div>
  )
}
