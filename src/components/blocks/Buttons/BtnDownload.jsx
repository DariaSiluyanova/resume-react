import React from "react";
import Resume from "../../Siluyanova_resume.pdf";
import "./btn.scss";

export default function BtnDownload() {
  return (
    <div className="download">
      <a href={Resume} download="Siluyanova">
        <button type="button" className="nav__item btn-download">
          Загрузить резюме
        </button>
      </a>
    </div>
  );
}
