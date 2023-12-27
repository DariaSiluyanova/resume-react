import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Btn({ click, active, link = "/", text, id }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Link to={link}>
        <button
          type="button"
          className={`nav__item ${active ? "active" : ""}`}
          key={id}
          onClick={click}
        >
          {text}
        </button>
      </Link>
    </motion.div>
  );
}
