import React from "react";
import "../../styles/Footer.scss";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="footerBlock">
      <h1>JOB KG</h1>
      <div>
        <p>Для соискателя</p>
        <p>Для работодателя</p>
        <p>Инвесторам</p>
      </div>
      <div>
        <p>О сервисе </p>
        <p>Помощь</p>
        <p>Служба поддержки</p>
      </div>
      <div>
        <p>+996 999 661 777</p>
        <p>+996 709 831 050</p>
      </div>
    </div>
  );
};

export default Footer;
