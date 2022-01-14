import { memo, useContext } from "react"
import FindContext from "../context";

export const TableHeader = memo(() => {  
    let {setIsFind} = useContext(FindContext);
    const onChangeHandle = ({target: {value}}) => {
      setIsFind(+value);
    }
    const onChangeHandleName = ({target: {value}}) => {
      setIsFind(value);
    }

    
    return (
        <thead>
          <tr>
            <th style={{width: "2%"}}>№ титула</th>
            <th style={{width: "5%"}}>Район</th>
            <th style={{width: "37%"}}>
              <label htmlFor="search_form">Имя титула
                  <input  type="search" id="text_search_form" 
                          className="form-control form-control-sm" 
                          onChange={onChangeHandleName}
                          onMouseOver={(e) => e.currentTarget.select()}/>
              </label>               
            </th>
            <th style={{width: "5%"}}>
              <label htmlFor="search_form">Год ввода
                  <input  type="search" id="search_form" 
                          className="form-control form-control-sm" 
                          onChange={onChangeHandle}
                          onMouseOver={(e) => e.currentTarget.select()}/>
              </label> 
            </th>             
            <th style={{width: "3%"}}>Всего розеток</th>
            <th style={{width: "3%"}}>Занято розеток</th>
            <th style={{width: "3%"}}>Кол-во квартир</th>
            <th style={{width: "3%"}}>Кол-во квартир PON</th>
            <th style={{width: "3%"}}>Кол-во ТА</th>
            <th style={{width: "3%"}}>Кол-во ТА PON</th>
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