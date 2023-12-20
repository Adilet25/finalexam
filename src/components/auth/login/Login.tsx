import { useNavigate } from "react-router-dom";
import loginimg from "../../../assets/Tablet login-amico 1.svg";
import "../../../styles/Login.scss";
import { FormEvent, useState } from "react";
type Props = {};

const Login = (_props: Props) => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPass] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="loginMain_block">
      <div>
        <img src={loginimg} alt="" />
      </div>
      <div className="loginPanel">
        <h2>Вход</h2>
        <input
          type="text"
          placeholder="Электронный адрес"
          value={login}
          onChange={(e) => {
            setLogin(e.target.value);
          }}
        />
        <input
          type={showPass ? "text" : "password"}
          placeholder="Пароль"
          value={password}
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        <div className="checkBox_login">
          <input
            type="checkbox"
            id="scales"
            name="scales"
            onClick={() => setShowPass(!showPass)}
          />
          <label htmlFor="scales">Показать пароль</label>
        </div>
        <p
          className="loginPanel_btn"
          onClick={(e) => {
            handleSubmit(e);
            navigate("/");
          }}>
          Войти
        </p>
        <p className="loginPanel_register">
          Нет аккаунта?{" "}
          <span
            onClick={() => {
              navigate("/register");
            }}>
            Регистрация
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
