import React from 'react'

export default function ContactItem({ href, src, alt, id}) {
  return (
    <li className="contacts-list__item" key={id}>
      <a href={href}>
      <img className="icon-contacts" src={src} alt={alt} />
      </a>
    </li>
  )
}
