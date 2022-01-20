import { Link } from "react-router-dom";

export const NotFoundCity = () => {
  return(
    <div style={{textAlign: 'center', margin: '0 auto'}}>
      <h1>Страница не найдена!</h1>
      <Link to='/gomel'>Вернуться на главную страницу</Link>
    </div>
  )
}