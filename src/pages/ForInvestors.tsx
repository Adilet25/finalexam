import investors from "../assets/Investing-rafiki.svg";
import "../styles/SubPages.scss";
type Props = {};

const ForInvestors = (_props: Props) => {
  return (
    <div className="mainBlockSub">
      <img
        src={investors}
        alt="error"
        style={{ width: "40vmax" }}
        className="imageSub"
      />

      <div>
        <h2>Здравствуйте!</h2>
        <h4
          style={{
            lineHeight: "1.3rem",
            fontWeight: "normal",
            marginTop: "2rem",
          }}
          className="textSub">
          Уважаемые инвесторы, добро пожаловать на наш сайт, где мы
          предоставляем уникальные возможности для ваших инвестиций в будущее
          трудоустройства. Мы являемся платформой, связывающей инвесторов с
          перспективными компаниями в сфере трудоустройства. Наша миссия -
          поддерживать и финансово помогать компаниям, которые революционизируют
          процесс найма и создают новые стандарты в области трудоустройства. Мы
          ищем компании с инновационными подходами к рынку труда и помогаем им в
          их развитии и росте. Инвестирование через нашу платформу предоставляет
          вам возможность внести вклад в инновационные и перспективные проекты в
          области трудоустройства. Мы стремимся к созданию партнерских отношений
          с инвесторами, разделяющими наши ценности и желающими вложить средства
          в компании, способные изменить пейзаж рынка труда. Присоединяйтесь к
          нам, чтобы стать частью изменений в сфере трудоустройства и вместе
          создать перспективное будущее для многих людей. Наши возможности
          инвестирования способствуют инновациям и улучшению процессов по всему
          миру.
        </h4>
      </div>
    </div>
  );
};

export default ForInvestors;