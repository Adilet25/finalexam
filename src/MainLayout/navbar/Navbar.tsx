import { useState } from "react";
import { useNavigate } from "react-router-dom";
import burger from "../../assets/burger-menu-svgrepo-com.svg";
import closeburgericon from "../../assets/closeburger.svg";
import "../../styles/Navbar.scss";

type Props = {};

const Navbar = (_props: Props) => {
  const navigate = useNavigate();
  const [buttonStatus, setButtonStatus] = useState(true);

  return (
    <>
      <div className="mainBlock">
        <div className="firstBlock">
          <div>
            <h2 className="logo" onClick={() => navigate("/")}>
              JOB KG
            </h2>
          </div>
          <div className="firstBlock_nav">
            <p onClick={() => navigate("/vacancy")}>Вакансии</p>
            <p onClick={() => navigate("/contacts")}>Контакты</p>
          </div>
        </div>
        <div className="secondBlock">
          <p onClick={() => navigate("/login")}>Войти</p>
          <p onClick={() => navigate("/register")}>Регистрация</p>
        </div>
        <div className="burgerMenu">
          {buttonStatus ? (
            <img
              src={burger}
              alt="X"
              className="burgerMenu_img"
              onClick={() => {
                setButtonStatus(!buttonStatus);
              }}
            />
          ) : (
            <img
              src={closeburgericon}
              alt="X"
              className="burgerMenu_img"
              onClick={() => {
                setButtonStatus(!buttonStatus);
              }}
            />
          )}
        </div>
      </div>
      {buttonStatus ? (
        <div style={{ display: "none" }}></div>
      ) : (
        <div className="openedBurger">
          <h2 className="logo" onClick={() => navigate("/")}>
            JOB KG
          </h2>
          <p onClick={() => navigate("/vacancy")}>Вакансии</p>
          <p onClick={() => navigate("/contacts")}>Контакты</p>
          <p onClick={() => navigate("/login")}>Войти</p>
          <p onClick={() => navigate("/register")}>Регистрация</p>
        </div>
      )}
    </>
  );
};

export default Navbar;
