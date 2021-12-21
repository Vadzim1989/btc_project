import React, { useEffect, useState } from 'react';
import { delay } from '../utils/delay';
import preloaderSrc from '../img/preloader.gif';
import { TableCreater, TableHeader } from '../components/index';
import FindContext from '../context';


export const Jitkovichi = () => {
  let [titulData, setTitulData] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  
  const {isFind} = React.useContext(FindContext);
  const filteredTitul = titulData.filter(({god_vvod}) => god_vvod === +isFind)

    useEffect(() => {
        setIsLoading(true);
        delay(2000);
        fetch("http://localhost:4000/api/titulinfo/jitkovichi")
        .then((res) => {
            if(res.status >=400 && res.status < 600) {
                throw new Error('Failed fetching data')
            }
            return res.json();
        })
        .then((data) => setTitulData(data))
        .finally(() => setIsLoading(false))
    },[])

    return (
      <table className='table table-striped'>
        <TableHeader/>
        <tbody>
          { !isLoading ?  
          ( !isFind ? titulData.map(({...titulInfo}) => (<TableCreater {...titulInfo}/>))
            : filteredTitul.map(({...titulInfo}) => (<TableCreater {...titulInfo}/>)))
          : <img src={preloaderSrc} alt="preloader" style={{position:'relative', top:"50vh", left:"70vh"}}/>}         
        </tbody>
      </table>
    );
}