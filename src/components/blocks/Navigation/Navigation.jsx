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
    content: [{
      id: 0,
      path: "/",
      text: "Главная",
    },
    {
      id: 1,
      path: "/portfolio",
      text: "Портфолио",
    }],
  });

  useEffect(() => {
    /**
     * Находим кнопку, путь которой соответствует текущему
     */
    const activeButton = btnState.content.find((btn) => btn.path === location.pathname);

    //добавляем соответствующую кнопку в свойство activeBtn объекта btnState
    if (activeButton) {
      changeState({ ...btnState, activeBtn: activeButton });
    }
  }, [location.pathname]);

  return (
    <nav className="nav">
      <ul className="nav__list">
        {btnState.content.map((btn) => (
          <Btn
            key={btn.id}
            click={() => {
              toggleActive(btn.id, changeState, btnState);
            }}
            active={makeActive(btn.id, btnState)}
            link={btn.path}
            text={btn.text}
            id={btn.id}
          />
        ))}
      </ul>
    </nav>
  );
}
