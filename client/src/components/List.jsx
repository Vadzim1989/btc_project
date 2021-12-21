import React from "react"
import { NavLink } from "react-router-dom";


export const List = () => {
  return (
      <ul className="list-group">
        <NavLink to='/'>
          <li className="list-group-item">Гомельский филиал</li>
        </NavLink>
        <NavLink to='/gomel'>
          <li className="list-group-item">Гомель</li>
        </NavLink>
        <NavLink to='/vetka'>
          <li className="list-group-item">Ветка</li>
        </NavLink>
        <NavLink to='/chechersk'>
          <li className="list-group-item">Чечерск</li>
        </NavLink>
        <NavLink to='/dobrush'>
          <li className="list-group-item">Добруш</li>
        </NavLink>
        <NavLink to='/jlobin'>
          <li className="list-group-item">Жлобин</li>
        </NavLink>
        <NavLink to='/buda'>
          <li className="list-group-item">Буда-Кошелево</li>
        </NavLink>
        <NavLink to='/korma'>
          <li className="list-group-item">Корма</li>
        </NavLink>
        <NavLink to='/rogachev'>
          <li className="list-group-item">Рогачев</li>
        </NavLink>
        <NavLink to='/rechica'>
          <li className="list-group-item">Речица</li>
        </NavLink>
        <NavLink to='/svetlogorsk'>
          <li className="list-group-item">Светлогорск</li>
        </NavLink>
        <NavLink to='/bragin'>
          <li className="list-group-item">Брагин</li>
        </NavLink>
        <NavLink to='/kalinkovichi'>
          <li className="list-group-item">Калинковичи</li>
        </NavLink>
        <NavLink to='/hoiniki'>
          <li className="list-group-item">Хойники</li>
        </NavLink>
        <NavLink to='/loev'>
          <li className="list-group-item">Лоев</li>
        </NavLink>
        <NavLink to='/petrikov'>
          <li className="list-group-item">Петриков</li>
        </NavLink>
        <NavLink to='/mozir'>
          <li className="list-group-item">Мозырь</li>
        </NavLink>
        <NavLink to='/jitkovichi'>
          <li className="list-group-item">Житковичи</li>
        </NavLink>
        <NavLink to='/elsk'>
          <li className="list-group-item">Ельск</li>
        </NavLink>
        <NavLink to='/narovlya'>
          <li className="list-group-item">Наровля</li>
        </NavLink>
        <NavLink to='/lelchici'>
          <li className="list-group-item">Лельчицы</li>
        </NavLink>
        <NavLink to='/october'>
          <li className="list-group-item">Октябрьский</li>
        </NavLink>
        <NavLink to='/gomelzues'>
          <li className="list-group-item">Гомельский ЗУЭС</li>
        </NavLink>
        {/* <NavLink to='/test'>
          <li className="list-group-item">Test</li>
        </NavLink> */}
      </ul>    
  )
}