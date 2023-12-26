import React from 'react';
import Title from './Title';
const skills = ['HTML', 'CSS','VUE 3', 'Quasar', 'Vuetify', 'Gulp', 'JavaScript', 'Git'];
const title = "Навыки";

export default function Skills() {
  return (
    <section className="contacts">
        <Title title={title} />
        <ul className="skills__list">
          { skills.map(skill => <li className="skills__item" key={skills.indexOf(skill)}>{skill}</li>) };
        </ul>
    </section>
  )
}
