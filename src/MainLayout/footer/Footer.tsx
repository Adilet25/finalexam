import React from "react";
import "../../styles/Footer.scss";
import { useNavigate } from "react-router-dom";

type Props = {};

const Footer = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className="footerBlock">
      <h1 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        JOB KG
      </h1>
      <div className="close1024">
        <p onClick={() => navigate("/forworkers")}>Для соискателя</p>
        <p onClick={() => navigate("/foremployers")}>Для работодателя</p>
        <p onClick={() => navigate("/forinvestors")}>Инвесторам</p>
      </div>
      <div>
        <p onClick={() => navigate("/aboutus")} className="close1024">
          О сервисе{" "}
        </p>
        <p onClick={() => navigate("/contacts")} className="close1024">
          Служба поддержки
        </p>
        <p onClick={() => navigate("/more")}>Доп Сведения...</p>
      </div>
      <div className="close425">
        <p>+996 999 661 777</p>
        <p>+996 709 831 050</p>
      </div>
    </div>
  );
};

export default Footer;
