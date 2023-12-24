import React from 'react'

export default function PortfolioItem({id, href, src2x, src1x, text}) {
  return (
    <li className="portfolio__item" key={id}>
        <a href={href}>
        <img
            className="portfolio__img"
            srcSet={`${{src1x}}+320w,+${{src2x}} 768w`}
            src={src2x}
            alt={text}
            sizes="(max-width: 300px) 320px, (max-width: 768px) 768px"
        />
        <p className="portfolio__info">
           {text}
        </p>
        </a>
    </li>
  )
}
