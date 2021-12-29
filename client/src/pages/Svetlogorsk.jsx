import React, { useEffect, useState, memo } from 'react';
import { delay } from '../utils/delay';
import preloaderSrc from '../img/preloader.gif';
import { TableCreater, TableHeader } from '../components/index';
import FindContext from '../context';
import { connStr } from '../config/connectionString';
import { ExportToExcel } from '../config/toExcel';
import { Footer } from '../components/Footer';


export const Svetlogorsk = memo(() => {
  let [titulData, setTitulData] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  const date = new Date();
  
  const {isFind} = React.useContext(FindContext);
  const filteredTitul = titulData.filter(({god_vvod}) => god_vvod === +isFind)

    useEffect(() => {
        setIsLoading(true);
        delay(2000);
        fetch(`${connStr}/svetlogorsk`)
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
      <div className='table__wrapper'>
        <div className='excel_import_wrapper'>
              <ExportToExcel apiData={titulData} 
                      fileName={`titulsinfo_${date.getFullYear()}_${date.getMonth()+1}_${date.getDate()}`}/>
        </div>
        <table className='table table-striped'>
          <TableHeader/>
          {
            !isFind ? <Footer titulData={titulData}/> : <Footer titulData={filteredTitul}/>
          }          
          <tbody>            
            { !isLoading ?  
            ( !isFind ? titulData.map(({...titulInfo}) => (<TableCreater {...titulInfo}/>))
              : filteredTitul.map(({...titulInfo}) => (<TableCreater {...titulInfo}/>)))
            : <img src={preloaderSrc} alt="preloader" style={{position:'relative', top:"50vh", left:"70vh"}}/>}         
          </tbody>
        </table>
      </div>
    );
})