import './App.css'
import * as city from './pages'
import { List } from './components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


export const App = () => {
    return (
        <Router>            
            <List/> 
            <Routes>
                <Route path='/' element={<city.All/>}/>
                <Route path='/gomel' element={<city.Gomel/>}></Route>
                <Route path='/vetka' element={<city.Vetka/>}></Route>
                <Route path='/chechersk' element={<city.Chechersk/>}></Route>
                <Route path='/dobrush' element={<city.Dobrush/>}></Route>
                <Route path='/jlobin' element={<city.Jlobin/>}></Route>
                <Route path='/buda' element={<city.Buda/>}></Route>
                <Route path='/korma' element={<city.Korma/>}></Route>
                <Route path='/rogachev' element={<city.Rogachev/>}></Route>
                <Route path='/rechica' element={<city.Rechica/>}></Route>
                <Route path='/svetlogorsk' element={<city.Svetlogorsk/>}></Route>
                <Route path='/bragin' element={<city.Bragin/>}></Route>
                <Route path='/kalinkovichi' element={<city.Kalinkovichi/>}></Route>
                <Route path='/hoiniki' element={<city.Hoiniki/>}></Route>
                <Route path='/loev' element={<city.Loev/>}></Route>
                <Route path='/petrikov' element={<city.Petrikov/>}></Route>
                <Route path='/mozir' element={<city.Mozir/>}></Route>
                <Route path='/jitkovichi' element={<city.Jitkovichi/>}></Route>
                <Route path='/elsk' element={<city.Elsk/>}></Route>
                <Route path='/narovlya' element={<city.Narovlya/>}></Route>
                <Route path='/lelchici' element={<city.Lelchici/>}></Route>
                <Route path='/october' element={<city.October/>}></Route>
                <Route path='/gomelzues' element={<city.GomelZues/>}></Route> 
                {/* <Route path='/test' element={<city.Test/>}></Route>  */}
            </Routes>            
        </Router>
    )
}