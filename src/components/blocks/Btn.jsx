import React from 'react'
import { Link } from 'react-router-dom';

export default function Btn({link, text, id}) {
  return (
    <li className="nav__item" key={id}>
        <Link to={link}>{text}</Link>
    </li>
  )
}
