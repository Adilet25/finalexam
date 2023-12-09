import React from "react";
import "../../styles/Navbar.scss";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="mainBlock">
      <div className="firstBlock">
        <div>
          <h2>JOB KG</h2>
        </div>
        <div className="firstBlock_nav">
          <p>Вакансии</p>
          <p>Контакты</p>
        </div>
      </div>
      <div className="secondBlock">
        <p>Войти</p>
        <p>Регистрация</p>
      </div>
    </div>
  );
};

export default Navbar;
