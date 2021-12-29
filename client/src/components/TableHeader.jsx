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
            <th style={{width: "2%"}}>№ титула</th>
            <th style={{width: "5%"}}>Район</th>
            <th style={{width: "45%"}}>Имя титула</th>
            <th style={{width: "5%"}}>
              <label htmlFor="search_form">Год ввода
                  <input  type="search" id="search_form" 
                          className="search_input" 
                          onChange={onChangeHandle}
                          onMouseOver={(e) => e.currentTarget.select()}/>
              </label> 
            </th>             
            <th style={{width: "3%"}}>Всего розеток</th>
            <th style={{width: "3%"}}>Занято розеток</th>
            <th style={{width: "3%"}}>Byfly (PON)</th>
            <th style={{width: "3%"}}>Zala (PON)</th>
            <th style={{width: "3%"}}>Byfly_Zala (PON)</th>
            <th style={{width: "3%"}}>Пакеты (PON)</th>
            <th style={{width: "4%"}}>Голая телефония (PON)</th>
            <th style={{width: "2%"}}>VPN</th>
          </tr>
        </thead>
    )
});