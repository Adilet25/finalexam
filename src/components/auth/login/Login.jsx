import { useNavigate } from "react-router-dom";
import loginimg from "../../../assets/Tablet login-amico 1.svg";
import "../../../styles/Login.scss";
import { FormEvent, useState } from "react";
import { useAuth } from "../../../contexts/AuthContextProvider";

const Login = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const { login, loginStatus } = useAuth();

  function loginUser() {
    let formData = new FormData();
    formData = {
      email: email,
      password: password,
    };
    login(formData);
  }

  const handleSubmit = () => {
    e.preventDefault();
  };

  return (
    <div className="loginMain_block">
      <div>
        <img src={loginimg} alt="" />
      </div>
      <div className="loginPanel">
        <h2>Вход</h2>
        {loginStatus ? (
          <div></div>
        ) : (
          <div style={{ color: "red" }}>Неправильный логин или пароль</div>
        )}
        <input
          type="text"
          placeholder="Электронный адрес"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
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
          onClick={() => {
            loginUser();
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
