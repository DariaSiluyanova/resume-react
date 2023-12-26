import React from "react";
import "./index.scss";

export default function About() {
  return (
    <section className="index-main__item about">
      <h3 className="about__title index-title">Обо мне</h3>
      <p className="about__info main-text">
        Свой путь в разработку я начала на предпоследнем курсе университа.
        Процесс создания сайта с нуля, разработки графических элементов и
        выстраивания взаимодействия между пользователем и страничкой настолько
        увлек меня, что я решила сделать это своей профессией!
      </p>
      <p className="about__info main-text">
        О моих личных качествах - люблю изучать новое, стараюсь держать руку на
        пульсе и следить за тем, что происходит в мире it. Люблю чистый и
        задокументированный код с продуманной структурой.
      </p>
    </section>
  );
}
