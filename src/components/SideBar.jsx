import React from 'react'
import { Link } from 'react-router-dom';

export default function SideBar() {
  return (
    <div className="side-info">
      <header className="main-header">
        <section className="person">
          <div className="mobile">
            <div className="person__container">
              <img
                src="img/Avatar2x.png"
                alt="Аватар соискателя"
                className="person__avatar"
              />
            </div>
            <h1 className="person__name">Силуянова Дарья</h1>
          </div>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <Link to="/">Главная</Link>
              </li>
              <li className="nav__item">
                <Link to="/portfolio">Портфолио</Link>
              </li>
            </ul>
          </nav>
        </section>
      </header>
      <div className="main-info">
        <section className="contacts">
          <h1 className="title">Контакты</h1>
          <ul className="main-info__list contacts-list">
            <li className="contacts-list__item">
              <a href="tel:8-977-661-52-15">
                <img className="icon-contacts" src="img/phone-icon.svg" alt="" />
              </a>
            </li>
            <li className="contacts-list__item">
              <a href="mailto:dariasiluyanowa@gmail.com">
                <img
                  className="icon-contacts"
                  src="img/email-icon.svg"
                  alt="email-address"
                />
              </a>
            </li>
            <li className="contacts-list__item">
              <a href="https://t.me/+79776615215">
                <img
                  className="icon-contacts"
                  src="img/telegram-icon.svg"
                  alt="telegram-link"
                />
              </a>
            </li>
            <li className="contacts-list__item">
              <a href="https://www.linkedin.com/in/darya-siluyanova">
                <img
                  className="icon-contacts"
                  src="img/linkedIn-iconsvg.svg"
                  alt="linkedIn-link"
                />
              </a>
            </li>
            <li className="contacts-list__item">
              <a href="https://github.com/DariaSiluyanova">
                <img
                  className="icon-contacts"
                  src="img/github-icon.svg"
                  alt="github-link"
                />
              </a>
            </li>
          </ul>
        </section>
        <section className="skills">
          <h1 className="title">Навыки</h1>
          <ul className="skills__list">
            <li className="skills__item">HTML</li>
            <li className="skills__item">CSS</li>
            <li className="skills__item">VUE 3</li>
            <li className="skills__item">Quasar</li>
            <li className="skills__item">Vuetify</li>
            <li className="skills__item">Gulp</li>
            <li className="skills__item">Java Script</li>
            <li className="skills__item">Git</li>
          </ul>
        </section>
        <section className="lang">
          <h1 className="title">Языки</h1>
          <ul className="lang__list">
            <li className="lang__item">English - B1</li>
          </ul>
        </section>
        <section className="interests">
          <h1 className="title">Интересы</h1>
          <ul className="interests__list">
            <li className="interests__item">
              <img
                src="img/book.svg"
                alt="interests-reading"
                className="interest"
              />
            </li>
            <li className="interests__item">
              <img
                src="img/music.svg"
                alt="interests-listening"
                className="interest"
              />
            </li>
            <li className="interests__item">
              <img
                src="img/swim.svg"
                alt="interests-swimming"
                className="interest"
              />
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
