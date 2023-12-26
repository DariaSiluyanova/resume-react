import Btn from "../Buttons/Btn";
import React from "react";
import "./navigation.scss";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { makeActive } from "../../../scripts/makeActive.js";
import { toggleActive } from "../../../scripts/toggle.js"

const buttons = [
  {
    id: 0,
    path: "/",
    text: "Главная",
  },
  {
    id: 1,
    path: "/portfolio",
    text: "Портфолио",
  },
];

export default function Navigation() {
  const location = useLocation();
  const [btnState, changeState] = useState({
    activeBtn: null,
    content: buttons,
  });

  useEffect(() => {
    /**
     * Находим кнопку, путь которой соответствует текущему
     */
    const activeButton = buttons.find((btn) => btn.path === location.pathname);

    //добавляем соответствующую кнопку в свойство activeBtn объекта btnState
    if (activeButton) {
      changeState({ ...btnState, activeBtn: activeButton });
    }
  }, [location.pathname]);

  return (
    <nav className="nav">
      <ul className="nav__list">
        {btnState.content.map((btn, index) => (
          <Btn
            click={() => {
              toggleActive(index, changeState, btnState);
            }}
            active={makeActive(index, btnState)}
            link={btn.path}
            text={btn.text}
            key={btn.id}
            id={btn.id}
          />
        ))}
      </ul>
    </nav>
  );
}
