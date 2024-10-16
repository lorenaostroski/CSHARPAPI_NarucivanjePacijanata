import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavBarEdunova from './components/NavBarEdunova'
import { Route, Routes } from 'react-router-dom'
import { RoutesNames } from './constants'
import Pocetna from './pages/Pocetna'
import UstanovePregled from './pages/ustanove/UstanovePregled'
import UstanoveDodaj from './pages/ustanove/UstanoveDodaj'
import UstanovePromjena from './pages/ustanove/UstanovePromjena'
import { Container } from 'react-bootstrap'



function App() {

  function godina(){
    const pocetna=2024;
    const trenutna=new Data().getFullYear;
    if(pocetna===trenutna){
      return trenutna;
    }
    return pocetna +'-'+ trenutna;
  }

  
  return (
    <>
    <Container className='aplikacija'>
      <NavBarEdunova />
      <Routes>
        <Route path={RoutesNames.HOME} element={<Pocetna />} />

        <Route path={RoutesNames.USTANOVA_PREGLED} element={<UstanovePregled/>} />
        <Route path={RoutesNames.USTANOVA_NOVI} element={<UstanoveDodaj/>} />
        <Route path={RoutesNames.USTANOVA_PROMJENA} element={<UstanovePromjena/>} />
      </Routes>
      </Container>
      <Container>
      <hr />
      Edunova &copy;{godina ()}
      </Container>
    </>
  )
}

export default App
