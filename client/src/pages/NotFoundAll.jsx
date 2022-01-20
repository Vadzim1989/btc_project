import { Link } from "react-router-dom";

export const NotFoundAll = () => {
  return(
    <div style={{textAlign: 'center', margin: '0 auto'}}>
      <h1>Полная выгрузка временно не работает!</h1>
      <Link to='/gomel'>Вернуться на страницу Гомеля</Link>
    </div>
  )
}