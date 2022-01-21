import React from "react"
import { NavLink } from "react-router-dom";
import FindContext from "../context";
import logoSrc from '../img/logo_btk.png'


export const List = () => {
  const {setIsFind} = React.useContext(FindContext);
  const onClickHandle = () => {
    setIsFind(null);
  }
  

  return (
    <div className="list__wrapper">
      <div className="list-group">
        <div className="img__wrapper">
          <img src={logoSrc} alt="logo" />
        </div>        
        <NavLink to='/' onClick={onClickHandle} className="list-group-item list-group-item-action">
          Гомельский филиал
        </NavLink>
        <NavLink to='/gomel' onClick={onClickHandle} className="list-group-item list-group-item-action">
          Гомель
        </NavLink>
        <NavLink to='/vetka' onClick={onClickHandle} className="list-group-item list-group-item-action">
          Ветка
        </NavLink>
        <NavLink to='/chechersk' onClick={onClickHandle} className="list-group-item list-group-item-action">
          Чечерск
        </NavLink>
        <NavLink to='/dobrush' onClick={onClickHandle} className="list-group-item list-group-item-action">
          Добруш
        </NavLink>
        <NavLink to='/jlobin' onClick={onClickHandle} className="list-group-item list-group-item-action">
          Жлобин
        </NavLink>
        <NavLink to='/buda' onClick={onClickHandle} className="list-group-item list-group-item-action">
          Буда-Кошелево
        </NavLink>
        <NavLink to='/korma' onClick={onClickHandle} className="list-group-item list-group-item-action">
          Корма
        </NavLink>
        <NavLink to='/rogachev' onClick={onClickHandle} className="list-group-item list-group-item-action">
          Рогачев
        </NavLink>
        <NavLink to='/rechica' onClick={onClickHandle} className="list-group-item list-group-item-action">
          Речица
        </NavLink>
        <NavLink to='/svetlogorsk' onClick={onClickHandle} className="list-group-item list-group-item-action">
          Светлогорск
        </NavLink>
        <NavLink to='/bragin' onClick={onClickHandle} className="list-group-item list-group-item-action">
          Брагин
        </NavLink>
        <NavLink to='/kalinkovichi' onClick={onClickHandle} className="list-group-item list-group-item-action">
          Калинковичи
        </NavLink>
        <NavLink to='/hoiniki' onClick={onClickHandle} className="list-group-item list-group-item-action">
          Хойники
        </NavLink>
        <NavLink to='/loev' onClick={onClickHandle} className="list-group-item list-group-item-action">
          Лоев
        </NavLink>
        <NavLink to='/petrikov' onClick={onClickHandle} className="list-group-item list-group-item-action">
          Петриков
        </NavLink>
        <NavLink to='/mozir' onClick={onClickHandle} className="list-group-item list-group-item-action">
          Мозырь
        </NavLink>
        <NavLink to='/jitkovichi' onClick={onClickHandle} className="list-group-item list-group-item-action">
          Житковичи
        </NavLink>
        <NavLink to='/elsk' onClick={onClickHandle} className="list-group-item list-group-item-action">
          Ельск
        </NavLink>
        <NavLink to='/narovlya' onClick={onClickHandle} className="list-group-item list-group-item-action">
          Наровля
        </NavLink>
        <NavLink to='/lelchici' onClick={onClickHandle} className="list-group-item list-group-item-action">
          Лельчицы
        </NavLink>
        <NavLink to='/october' onClick={onClickHandle} className="list-group-item list-group-item-action">
          Октябрьский
        </NavLink>
        <NavLink to='/gomelzues' onClick={onClickHandle} className="list-group-item list-group-item-action">
          Гомельский ЗУЭС
        </NavLink>
      </div> 
    </div>   
  )
}