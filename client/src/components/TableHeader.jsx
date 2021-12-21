import { memo, useContext } from "react"
import FindContext from "../context";

export const TableHeader = memo(() => {  
    const {setIsFind} = useContext(FindContext);
    const onChangeHandle = ({target: {value}}) => {
      setIsFind(value);
    }
    
    return (
        <thead>
          <tr>
            <th>№ титула</th>
            <th style={{width: "8%"}}>Район</th>
            <th style={{width: "45%"}}>Имя титула</th>
            <th><input  type="text" 
                        className="form-control" 
                        placeholder="Год ввода"
                        onChange={onChangeHandle}/>
                        </th>
            <th>Всего розеток</th>
            <th>Занято розеток</th>
            <th>Byfly</th>
            <th>Zala</th>
            <th>Byfly_Zala</th>
            <th>Пакеты</th>
            <th>Голая телефония</th>
            <th>VPN</th>
          </tr>
        </thead>
    )
});