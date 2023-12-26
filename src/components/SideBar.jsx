import Avatar from '../assets/Avatar2x.png'
import Contacts from './blocks/Contact';
import Skills from './blocks/Skills';
import Languages from './blocks/Languages';
import Interests from './blocks/Interests';
import { motion } from 'framer-motion';
import Resume from './Siluyanova_resume.pdf';
import Navigation from './blocks/Navigation';

export default function SideBar() {
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
            <Navigation />
          </section>
        </header>
        <div className="main-info">
          <Contacts />
          <Skills />
          <Languages />
          <Interests />
          <div className="download">
            <a href={Resume} download="Siluyanova">
              <button type='button' className="nav__item btn-download">
                  Загрузить резюме
              </button>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
