import React from 'react';
import Title from './Title';
const skills = ['HTML', 'CSS','VUE 3', 'Quasar', 'Vuetify', 'Gulp', 'JavaScript', 'Git'];
const title = "Навыки";
const skillsList = skills.map(skill => <li className="skills__item" key={skills.indexOf(skill)}>{skill}</li>);

export default function Skills() {
  return (
    <section className="contacts">
        <Title title={title} />
        <ul className="skills__list">
            {skillsList}
        </ul>
    </section>
  )
}
