import Btn from './Btn';
import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
];

export default function Navigation() {
    const location = useLocation();
    const [btnState, changeState] = useState(
        {
            activeBtn: null,
            content: buttons,
        }
    );

    useEffect(() => {
        /**
         * Находим кнопку, путь которой соответствует текущему
         */
        const activeButton = buttons.find((btn) => btn.path === location.pathname);

        //добавляем соответствующую кнопку в свойство activeBtn объекта btnState
        if (activeButton) {
            changeState({ ...btnState, activeBtn: activeButton });
        }
    }, [btnState, location.pathname]);

    /**
     * функция добавляет кнопку по клику в свойство activeBtn объекта btnState
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

    return (
        <nav className="nav">
            <ul className="nav__list">
                { btnState.content.map((btn) => 
                    <Btn 
                        click={()=>{ toggleActive(btn.id) }} 
                        active={ makeActive(btn.id)} 
                        link={btn.path} 
                        text={btn.text} 
                        key={btn.id} 
                        id={btn.id}
                    />
                )}
            </ul>
        </nav>
    )
}
