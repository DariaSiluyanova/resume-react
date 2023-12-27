import React from "react";
import "./index.scss";

export default function Experience() {
  return (
    <section className="index-main__item exp">
      <h3 className="exp__title index-title">Опыт работы</h3>
      <div className="exp__body">
        <div className="edu__text exp__place">
          <p className="edu-info">ООО “Goodfill LTD”</p>
          <p>Должность - Frontend разработчик</p>
          <p>сентябрь 2022 - настоящее время</p>
          <h4 className="exp__subtitle"> Обязанности</h4>
          <ul className="exp__list">
            <li className="exp__item">
              •&nbsp;Миграция каталога интернет-магазина с Vue&nbsp;2 на
              Vue&nbsp;3
            </li>
            <li className="exp__item">
              •&nbsp;Создание визуальной части при помощи Quasar&nbsp;Framework
            </li>
            <li className="exp__item">
              •&nbsp;Разработка компонентов на Vue&nbsp;3 с использованием
              Composition&nbsp;API
            </li>
            <li className="exp__item">
              •&nbsp;Адаптивная и кросс-браузерная верстка
            </li>
            <li className="exp__item">
              •&nbsp;Настройка функционала (кнопок, слайдеров, форм, инпутов,
              личного кабинета пользователя)
            </li>
            <li className="exp__item">•&nbsp;Взаимодействие с REST&nbsp;API</li>
            <li className="exp__item">•&nbsp;Работа с git</li>
            <li className="exp__item">•&nbsp;Поддержка и развитие проекта</li>
            <li className="exp__item">
              •&nbsp;Участие в запуске нового проекта с нуля
            </li>
            <li className="exp__item">
              •&nbsp;Участие в разработке дополнительного функционала компании
            </li>
            <li className="exp__item">
              •&nbsp;Проектирование и разработка функционала проекта
            </li>
            <li className="exp__item">•&nbsp;Рефакторинг и поддержание кода</li>
            <li className="exp__item">•&nbsp;Управление проектами</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
