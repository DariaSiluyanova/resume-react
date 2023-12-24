import React, { useState } from 'react'
import Avatar from '../assets/Avatar2x.png'
import Btn from './blocks/Btn';
import Contacts from './blocks/Contact';
import Skills from './blocks/Skills';
import Languages from './blocks/Languages';
import Interests from './blocks/Interests';
import { motion } from 'framer-motion';

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
// const btnList = buttons.map(btn => <Btn link={btn.path} text={btn.text} key={btn.id} id={btn.id}/>)

export default function SideBar() {
  const [btnState, changeState] = useState(
    {
      activeBtn: null,
      content: buttons,
    }
  );

  /**
   * функция переключает состояние кнопки на active
   */
  function toggleActive (index) {
    changeState({...btnState, activeBtn: btnState.content[index]})
  }

  /**
   * функция возвращает класс active для нажатой кнопки 
   * @param {Number} index 
   * @returns className
   */
  function makeActive(index) {
    if(btnState.content[index] === btnState.activeBtn) {
        return 'active'
    } else {
      return ''
    }
  }

  const onButtonClick = () => {
    const pdfUrl = "../Siluyanova_resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Siluyanova_resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

  return (
    <div className="side-info">
      
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
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
              {btnState.content.map((btn) => 
                <Btn 
                  click={()=>{ toggleActive(btn.id) }} 
                  active={makeActive(btn.id)} 
                  link={btn.path} 
                  text={btn.text} 
                  key={btn.id} 
                  id={btn.id}
                />
              )}
            </ul>
          </nav>
        </section>
      </header>
      <div className="main-info">
        <Contacts />
        <Skills />
        <Languages />
        <Interests />
        <div className="download">
          <Btn text="Загрузить резюме" active="download" click={onButtonClick()}/>
        </div>
      </div>
    </motion.div>
    </div>
  )
}
