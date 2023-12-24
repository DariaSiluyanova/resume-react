import React from 'react'
import Avatar from '../assets/Avatar2x.png'
import Btn from './blocks/Btn';
import Contacts from './blocks/Contact';
import Skills from './blocks/Skills';
import Languages from './blocks/Languages';
import Interests from './blocks/Interests';
const buttons = [
  {
    id: 0,
    path:"/",
    text: "Главная",
  },
  {
    id: 1,
    path:"/portfolio",
    text: "Портфолио",
  },
]
const btnList = buttons.map(btn => <Btn link={btn.path} text={btn.text} key={btn.id} id={btn.id}/>)

export default function SideBar() {
  return (
    <div className="side-info">
      <header className="main-header">
        <section className="person">
          <div className="mobile">
            <div className="person__container">
              <img
                src={Avatar}
                alt="Аватар соискателя"
                className="person__avatar"
              />
            </div>
            <h1 className="person__name">Силуянова Дарья</h1>
          </div>
          <nav className="nav">
            <ul className="nav__list">
             {btnList}
            </ul>
          </nav>
        </section>
      </header>
      <div className="main-info">
        <Contacts />
        <Skills />
        <Languages />
        <Interests />
      </div>
    </div>
  )
}
