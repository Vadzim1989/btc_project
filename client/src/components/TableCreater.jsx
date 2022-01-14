import { Link } from "react-router-dom"
import { CITY } from "../data/cityMap"
import { useContext } from 'react'
import FindContext from '../context'

window.onload = function () {
    return document.getElementById('search_form');         
} // ловим input только после прогрузки страницы


export const TableCreater = ({id_adr, god_vvod, zues, name_titul, all_socket, 
    check_socket, kv_all, kv_pon, ta_all, ta_pon, byfly_pon, zala_pon, byfly_zala_pon, 
    packet_pon, phone_null_pon, vpn}) => {
    
    const {isFind, setIsFind} = useContext(FindContext);
    const input = window.onload();

    /* const onClickHandle = ({target: {textContent}}) => {
        isFind ? setIsFind(null) : setIsFind(+textContent)
    } */

    const onClickHandle = ({target: {textContent}}) => {
        if(!isFind) {
            setIsFind(+textContent);
            input.value = textContent;
        } else {
            setIsFind(null);
            input.value = null;
        }
    }
    
    return (        
        <tr key={id_adr}>
            <td>{id_adr}</td>
            <td><Link to={CITY.get(zues)} className="city_link">{zues}</Link></td>
            <td>{name_titul}</td>
            <td className="titulsNumbers god_vvod" onClick={onClickHandle}>
                {god_vvod}
            </td>
            <td className="titulsNumbers">{all_socket}</td>
            <td className="titulsNumbers">{check_socket}</td>
            <td className="titulsNumbers">{kv_all}</td>
            <td className="titulsNumbers">{kv_pon}</td>
            <td className="titulsNumbers">{ta_all}</td>
            <td className="titulsNumbers">{ta_pon}</td>
            <td className="titulsNumbers">{byfly_pon}</td>
            <td className="titulsNumbers">{zala_pon}</td>
            <td className="titulsNumbers">{byfly_zala_pon}</td>
            <td className="titulsNumbers">{packet_pon}</td>
            <td className="titulsNumbers">{phone_null_pon}</td>
            <td className="titulsNumbers">{vpn}</td>
        </tr>   
    )
}