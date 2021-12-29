import React from "react"
import { NavLink } from "react-router-dom";
import logoSrc from '../img/logo_btk.png'


export const List = () => {
  return (
    <div className="list__wrapper">
      <div className="list-group">
        <div className="img__wrapper">
          <img src={logoSrc} alt="logo" />
        </div>        
        <NavLink to='/' className="list-group-item list-group-item-action">
          Гомельский филиал
        </NavLink>
        <NavLink to='/gomel' className="list-group-item list-group-item-action">
          Гомель
        </NavLink>
        <NavLink to='/vetka' className="list-group-item list-group-item-action">
          Ветка
        </NavLink>
        <NavLink to='/chechersk' className="list-group-item list-group-item-action">
          Чечерск
        </NavLink>
        <NavLink to='/dobrush' className="list-group-item list-group-item-action">
          Добруш
        </NavLink>
        <NavLink to='/jlobin' className="list-group-item list-group-item-action">
          Жлобин
        </NavLink>
        <NavLink to='/buda' className="list-group-item list-group-item-action">
          Буда-Кошелево
        </NavLink>
        <NavLink to='/korma' className="list-group-item list-group-item-action">
          Корма
        </NavLink>
        <NavLink to='/rogachev' className="list-group-item list-group-item-action">
          Рогачев
        </NavLink>
        <NavLink to='/rechica' className="list-group-item list-group-item-action">
          Речица
        </NavLink>
        <NavLink to='/svetlogorsk' className="list-group-item list-group-item-action">
          Светлогорск
        </NavLink>
        <NavLink to='/bragin' className="list-group-item list-group-item-action">
          Брагин
        </NavLink>
        <NavLink to='/kalinkovichi' className="list-group-item list-group-item-action">
          Калинковичи
        </NavLink>
        <NavLink to='/hoiniki' className="list-group-item list-group-item-action">
          Хойники
        </NavLink>
        <NavLink to='/loev' className="list-group-item list-group-item-action">
          Лоев
        </NavLink>
        <NavLink to='/petrikov' className="list-group-item list-group-item-action">
          Петриков
        </NavLink>
        <NavLink to='/mozir' className="list-group-item list-group-item-action">
          Мозырь
        </NavLink>
        <NavLink to='/jitkovichi' className="list-group-item list-group-item-action">
          Житковичи
        </NavLink>
        <NavLink to='/elsk' className="list-group-item list-group-item-action">
          Ельск
        </NavLink>
        <NavLink to='/narovlya' className="list-group-item list-group-item-action">
          Наровля
        </NavLink>
        <NavLink to='/lelchici' className="list-group-item list-group-item-action">
          Лельчицы
        </NavLink>
        <NavLink to='/october' className="list-group-item list-group-item-action">
          Октябрьский
        </NavLink>
        <NavLink to='/gomelzues' className="list-group-item list-group-item-action">
          Гомельский ЗУЭС
        </NavLink>
      </div> 
    </div>   
  )
}