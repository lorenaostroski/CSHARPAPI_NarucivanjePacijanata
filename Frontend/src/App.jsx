import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavBarEdunova from './components/NavBarEdunova'
import { Route, Routes } from 'react-router-dom'
import { RoutesNames } from './constants'
import Pocetna from './pages/Pocetna'
import UstanovePregled from './pages/ustanove/UstanovePregled'
import UstanoveDodaj from './pages/ustanove/UstanoveDodaj'
import UstanovePromjena from './pages/ustanove/UstanovePromjena'



function App() {

  
  return (
    <>
      <NavBarEdunova />
      <Routes>
        <Route path={RoutesNames.HOME} element={<Pocetna />} />

        <Route path={RoutesNames.USTANOVA_PREGLED} element={<UstanovePregled/>} />
        <Route path={RoutesNames.USTANOVA_NOVI} element={<UstanoveDodaj/>} />
        <Route path={RoutesNames.USTANOVA_PROMJENA} element={<UstanovePromjena/>} />
      </Routes>
    </>
  )
}

export default App
