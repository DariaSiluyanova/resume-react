import Avatar from "../../../assets/Avatar2x.png";
import Contacts from "../Contacts/Contact";
import Skills from "../Skills/Skills";
import Languages from "../Langua/Languages";
import Interests from "../Interests/Interests";
import { motion } from "framer-motion";
import Navigation from "../Navigation/Navigation";
import BtnDownload from "../Buttons/BtnDownload";
import "./sidebar.scss";

export default function SideBar() {
  return (
    <div className="side-info">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
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
          <BtnDownload />
        </div>
      </motion.div>
    </div>
  );
}
