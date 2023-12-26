import React from "react";
import "./promo.scss";

export default function Promo(props) {
  let key = props.id;
  let text = props.text;
  return <section key={key} className="promo index-main__promo">{text}</section>;
}
