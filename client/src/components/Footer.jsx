
export const Footer = ({titulData}) => {
    
    function arraySum(array){
        let sum = 0;
        for(var i = 0; i < array.length; i++){
            sum += array[i];
            }
        return sum;
    }
    
    // собираем сумму полей
    const all_tituls = titulData.map(({id_adr}) => id_adr).length;
    const all_socket_sum = arraySum(titulData.map(({all_socket}) => all_socket));
    const check_socket_sum = arraySum(titulData.map(({check_socket}) => check_socket));
    const kv_all_sum = arraySum(titulData.map(({kv_all}) => kv_all));
    const kv_pon_sum = arraySum(titulData.map(({kv_pon}) => kv_pon));
    const ta_all_sum = arraySum(titulData.map(({ta_all}) => ta_all));
    const ta_pon_sum = arraySum(titulData.map(({ta_pon}) => ta_pon));
    const byfly_pon_sum = arraySum(titulData.map(({byfly_pon}) => byfly_pon));
    const zala_pon_sum = arraySum(titulData.map(({zala_pon}) => zala_pon));
    const byfly_zala_pon_sum = arraySum(titulData.map(({byfly_zala_pon}) => byfly_zala_pon));
    const packet_pon_sum = arraySum(titulData.map(({packet_pon}) => packet_pon));
    const phone_null_pon_sum = arraySum(titulData.map(({phone_null_pon}) => phone_null_pon));
    const vpn_sum = arraySum(titulData.map(({vpn}) => vpn));

    

    return (
        <tfoot>        
            <tr key='footer'>
                <td colSpan={4} style={{textAlign: 'left'}}>{`ВСЕГО: ${all_tituls} титулов`}</td>
                <td className="titulsNumbers">{all_socket_sum}</td>
                <td className="titulsNumbers">{check_socket_sum}</td>
                <td className="titulsNumbers">{kv_all_sum}</td>
                <td className="titulsNumbers">{kv_pon_sum}</td>
                <td className="titulsNumbers">{ta_all_sum}</td>
                <td className="titulsNumbers">{ta_pon_sum}</td>
                <td className="titulsNumbers">{byfly_pon_sum}</td>
                <td className="titulsNumbers">{zala_pon_sum}</td>
                <td className="titulsNumbers">{byfly_zala_pon_sum}</td>
                <td className="titulsNumbers">{packet_pon_sum}</td>
                <td className="titulsNumbers">{phone_null_pon_sum}</td>
                <td className="titulsNumbers">{vpn_sum}</td>
            </tr>
        </tfoot> 
    )
}