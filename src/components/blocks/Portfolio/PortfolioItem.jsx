import React from "react";
import { motion } from "framer-motion";
import "./portfolio.scss";

export default function PortfolioItem({ id, href, src2x, src1x, text }) {
  return (
    <li className="portfolio__item" key={id}>
      <motion.div
        animate={{ y: 10 }}
        transition={{
          ease: "linear",
          duration: 1,
          y: { duration: 0.5 },
        }}
      >
        <a href={href}>
          <img
            className="portfolio__img"
            srcSet={`${{ src1x }} 576w,+${{ src2x }} 992pw`}
            src={src2x}
            alt={text}
            sizes="(max-width: 576px) 576px, (max-width: 992px) 992px"
          />
          <p className="portfolio__info">{text}</p>
        </a>
      </motion.div>
    </li>
  );
}
