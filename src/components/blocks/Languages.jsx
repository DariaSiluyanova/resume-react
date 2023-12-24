import React from 'react'
import Title from './Title'
const title = "Языки"

export default function Languages() {
  return (
    <section className="contacts">
        <Title title={title}></Title>
        <ul className="lang__list">
            <li className="lang__item">English - B1</li>
        </ul>
    </section>
  )
}
