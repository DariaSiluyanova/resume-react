import React from 'react';
import Title from './Title';
import ContactItem from './ContactItem';
import Phone from '../../assets/phone-icon.svg';
import Email from '../../assets/email-icon.svg';
import Telegram from '../../assets/telegram-icon.svg';
import InkedIn from '../../assets/linkedIn-iconsvg.svg';
import Github from '../../assets/github-icon.svg';

const title = "Контакты";
const data = [
    {
        id: 0,
        href: "tel:8-977-661-52-15",
        src: Phone,
        alt: "phone-icon",
    },
    {
        id: 1,
        href: "mailto:dariasiluyanowa@gmail.com",
        src: Email,
        alt: "email-address",
    },
    {
        id: 2,
        href: "https://t.me/+79776615215",
        src: Telegram,
        alt: "telegram-link",
    },
    {
        id: 3,
        href: "https://www.linkedin.com/in/darya-siluyanova",
        src: InkedIn,
        alt: "linkedIn-link",
    },
    {
        id: 4,
        href: "https://github.com/DariaSiluyanova",
        src: Github,
        alt: "github-link",
    },
];

export default function Contact() {
  return (
    <section className="contacts">
        <Title title={title}/>
        <ul className="main-info__list contacts-list">
            { data.map(item => <ContactItem {...item}/>) }
        </ul>
    </section>
  )
}
