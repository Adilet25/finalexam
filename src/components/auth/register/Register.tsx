import { useNavigate } from "react-router-dom";
import loginimg from "../../../assets/Tablet login-amico 1.svg";
import "../../../styles/Register.scss";
import { useState } from "react";

type Props = {};

const Register = (_props: Props) => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="regMain_block">
      <div>
        <img src={loginimg} alt="" />
      </div>
      <div className="regPanel">
        <h2>Регистрация</h2>
        <div className="regPanel_inputsBlock">
          <input type="text" placeholder="Имя" className="regPanel_inputs" />
          <input
            type="text"
            placeholder="Фамилия"
            className="regPanel_inputs"
          />
        </div>
        <input type="text" placeholder="Электронный адрес" />
        <input type={showPass ? "text" : "password"} placeholder="Пароль" />
        <input
          type={showPass ? "text" : "password"}
          placeholder="Повторите пароль"
        />

        <div className="checkBox_reg">
          <input
            type="checkbox"
            id="scales"
            name="scales"
            onClick={() => setShowPass(!showPass)}
          />
          <label htmlFor="scales">Показать пароль</label>
        </div>
        <select name="who" id="who" className="selectreg">
          <option disabled>Кто вы?</option>
          <option value="employer">Я работодатель</option>
          <option value="worker">Я ищу работу</option>
        </select>
        <p className="regPanel_btn" onClick={() => navigate("/")}>
          Регистрация
        </p>
        <p className="regPanel_register">
          Уже есть аккаунт?{" "}
          <span onClick={() => navigate("/login")}>Войти</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
