export const TableCreater = ({id_adr, god_vvod, zues, name_titul, all_socket, 
    check_socket, byfly_pon, zala_pon, byfly_zala_pon, 
    packet_pon, phone_null_pon, vpn}) => {
    return (        
        <tr key={id_adr}>
            <td>{id_adr}</td>
            <td>{zues}</td>
            <td>{name_titul}</td>
            <td className="titulsNumbers">{god_vvod}</td>
            <td className="titulsNumbers">{all_socket}</td>
            <td className="titulsNumbers">{check_socket}</td>
            <td className="titulsNumbers">{byfly_pon}</td>
            <td className="titulsNumbers">{zala_pon}</td>
            <td className="titulsNumbers">{byfly_zala_pon}</td>
            <td className="titulsNumbers">{packet_pon}</td>
            <td className="titulsNumbers">{phone_null_pon}</td>
            <td className="titulsNumbers">{vpn}</td>
        </tr>   
    )
}