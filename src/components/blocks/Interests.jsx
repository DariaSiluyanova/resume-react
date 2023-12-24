import React from 'react';
import Title from './Title';
import Book from '../../assets/book.svg';
import Music from '../../assets/music.svg';
import Swim from '../../assets/swim.svg';

const title = "Интересы";
const interests = [
    {
        id: 0,
        src: Book,
        alt: "interests-reading",
    },
    {
        id: 1,
        src: Music,
        alt: "interests-music",
    },
    {
        id: 2,
        src: Swim,
        alt: "interests-swimming",
    },
]
const interestList = interests.map(item => 
    <li className="interests__item" key={ item.id }>
        <img
            src={ item.src }
            alt={ item.alt }
            className="interest"
        />
    </li>
);

export default function Interests() {
  return (
    <section className="contacts interests">
        <Title title={ title } />
        <ul className="interests__list">
            { interestList }
        </ul>
    </section>
  )
}
