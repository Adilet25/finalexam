import "../styles/NoviyRezume.scss";
import "../assets/image 3.svg";

type Props = {};

const NoviyRezume = (_props: Props) => {
  return (
    <div className="NoviyRezumesub">
      <div>
        <h2 className="h1">Создание вакансии </h2>
      </div>
      <div className="button">
        <p className="h2">Основная информация</p>
      </div>
      <div className="infoBlock_rezume">
        <div className="sub">
          <h3>Названия вакансии</h3>
          <input
            className="rezumeInp rezumeInp_name"
            type="text"
            placeholder="Названия"
          />
        </div>
        <div className="Vod">
          <h3>Тип стажировки</h3>
          <select name="type" id="type" className="rezumeInp">
            <option selected disabled>
              Время работы?
            </option>
            <option value="EMPLOYER">Part Time</option>
            <option value="EMPLOYEE">Full Time</option>
          </select>
        </div>
      </div>
      <div className="Pod">
        <h3>Подробнее</h3>
        <textarea name="" id="" className="oPole"></textarea>
      </div>
      <div className="Pod">
        <h3>Обязанности</h3>
        <textarea name="" id="" className="oPole"></textarea>
      </div>{" "}
      <div className="Pod">
        <h3>Требования</h3>
        <textarea name="" id="" className="oPole"></textarea>
      </div>
      <button className="rezum_btn">Сохранить</button>
    </div>
  );
};

export default NoviyRezume;
