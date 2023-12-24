import React from 'react';
import { Link } from 'react-router-dom';

export default function Btn({ click, active, link, text, id}) {
  return (
    <li className={`nav__item ${active}`} key={ id } onClick={ click }>
        <Link to={ link }>{ text }</Link>
    </li>
  )
}
