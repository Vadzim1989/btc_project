import React from 'react';
import { TableCreater, TableHeader } from '../components/index';
import FindContext from '../context';


const titulData = [
    {
        id_adr: 10,
        god_vvod: 2020,
        zues: "Gomel",
        name_titul: 'titul1',
        all_socket: 50,
        check_socket: 50,
        byfly_pon: 10,
        zala_pon: 10,
        byfly_zala_pon: 10,
        packet_pon: 20,
        phone_null_pon: 0,
        vpn: 0
    },
    {
        id_adr: 14,
        god_vvod: 2018,
        zues: "Vetka",
        name_titul: 'titul2',
        all_socket: 50,
        check_socket: 50,
        byfly_pon: 10,
        zala_pon: 10,
        byfly_zala_pon: 10,
        packet_pon: 20,
        phone_null_pon: 0,
        vpn: 0
    }
];


export const Test = () => {
    const {isFind} = React.useContext(FindContext);
    const filteredTitul = titulData.filter(({god_vvod}) => god_vvod === +isFind)

    return (
      <table className='table table-striped'>
        <TableHeader/>
        <tbody>
          { !isFind ? titulData.map(({...titulInfo}) => (<TableCreater {...titulInfo}/>))
          : filteredTitul.map(({...titulInfo}) => (<TableCreater {...titulInfo}/>))}    
        </tbody>
      </table>
    );
}