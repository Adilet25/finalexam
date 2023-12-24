import { useState } from "react";
import "../styles/MyProfileMySettingsPage.scss";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
type Props = {};

const MyProfileMySettingsPage = (_props: Props) => {
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div>
      {" "}
      <div className="mainBlock_myProfile">
        <div>
          <h3>ФИО</h3>
          <div className="myProfile_info">
            <input type="text" placeholder="Имя" />
            <input type="text" placeholder="Фамилия" />
            <input type="text" placeholder="Отчество" />
            <input type="text" placeholder="Тэг" />
          </div>
          <div className="myProfile_moreInfo">
            <h3>Доп информация</h3>
            <div className="myProfile_inputBlock">
              <p>Дата рождения</p>
              <input
                type="date"
                id="start"
                name="start"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="myProfile_inputBlock">
              <p>Пол</p>
              <input type="text" />
            </div>
            <div className="myProfile_inputBlock">
              <p>Образование</p>
              <input type="text" />
            </div>
            <div className="myProfile_inputBlock">
              <p>Специализация</p>
              <input type="text" />
            </div>
          </div>
          <div className="myProfile_contacts">
            {" "}
            <h3>Контакты</h3>
            <div className="myProfile_contactsMini">
              <div>
                <p>Номер телефона</p>
              </div>
              <PhoneInput
                country={"kg"}
                value={phone}
                onChange={(value) => setPhone(value)}
                countryCodeEditable={false}
              />
            </div>
            <div className="myProfile_contactsMini">
              <div>
                <p>Эллектронный адрес</p>
              </div>
              <input type="email" placeholder="your@email.com" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfileMySettingsPage;
