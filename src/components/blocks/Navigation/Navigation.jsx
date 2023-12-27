import Btn from "../Buttons/Btn";
import React, { useState, useEffect } from "react";
import "./navigation.scss";
import { useLocation } from "react-router-dom";
import { toggleActive } from "../../../scripts/toggle.js";
import { makeActive } from "../../../scripts/makeActive.js";

export default function Navigation() {
  const location = useLocation();
  const [btnState, changeState] = useState({
    activeBtn: null,
    content: [
      {
        id: 0,
        path: "/",
      },
      {
        id: 1,
        path: "/portfolio",
      },
    ],
  });

  useEffect(() => {
    /**
     * Находим кнопку, путь которой соответствует текущему
     */
    const activeButton = btnState.content.find(
      (btn) => btn.path === location.pathname
    );

    //добавляем соответствующую кнопку в свойство activeBtn объекта btnState
    if (activeButton) {
      changeState({ ...btnState, activeBtn: activeButton });
    }
  }, [location.pathname]);

  return (
    <nav className="nav">
      <ul className="nav__list">
        <Btn
          key={0}
          click={() => {
            toggleActive(0, changeState, btnState);
          }}
          active={makeActive(0, btnState)}
          link={"/"}
          text={"Главная"}
          id={0}
        />
        <Btn
          key={1}
          click={() => {
            toggleActive(1, changeState, btnState);
          }}
          active={makeActive(1, btnState)}
          link={"/portfolio"}
          text={"Портфолио"}
          id={1}
        />
      </ul>
    </nav>
  );
}
