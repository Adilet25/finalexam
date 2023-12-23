import React from 'react';
import { useNavigate } from "react-router-dom";
import "../styles/NoviyRezume.scss";
import "../assets/image 3.svg"

type Props = {};

const NoviyRezume = (_props: Props) => {
  return (
    <div className="NoviyRezumesub">
      <div><h2 className='h1'>Создание вакансии </h2></div>
      <div className="button"><p className='h2'>Основная информация</p>
          <p >Обязанности</p>
          <p >Требования</p>
            </div>
      <div className="sub">
        <h3>Названия вакансии</h3>
        <h3>Тип стажировки</h3>
        
      </div>
      <div className="Vod"> <input className="Vod1"  type="text"  placeholder="Названия" /> 
      <input className="Vod2" type="text"  placeholder="Тип стажировки" />
      </div>
      <div className="Pod"><h3>Подробнее</h3></div>
      <div className="Pole"><input className="Pole1" type="text" />
      <div><img src="../assets/image 3.svg" alt="" /> </div> 
      </div>
      
      
      

    </div>
  )
};

export default NoviyRezume;