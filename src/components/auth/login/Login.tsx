import { useNavigate } from "react-router-dom";
import loginimg from "../../../assets/Tablet login-amico 1.svg";
import "../../../styles/Login.scss";
import { useState } from "react";
type Props = {};

const Login = (_props: Props) => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="loginMain_block">
      <div>
        <img src={loginimg} alt="" />
      </div>
      <div className="loginPanel">
        <h2>Вход</h2>
        <input type="text" placeholder="Электронный адрес" />
        <input type={showPass ? "text" : "password"} placeholder="Пароль" />
        <div className="checkBox_login">
          <input
            type="checkbox"
            id="scales"
            name="scales"
            onClick={() => setShowPass(!showPass)}
          />
          <label htmlFor="scales">Показать пароль</label>
        </div>
        <p className="loginPanel_btn" onClick={() => navigate("/")}>
          Войти
        </p>
        <p className="loginPanel_register">
          Нет аккаунта?{" "}
          <span onClick={() => navigate("/register")}>Регистрация</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
