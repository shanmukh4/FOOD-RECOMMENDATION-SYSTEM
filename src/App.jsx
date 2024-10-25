import Home from './pages/Home';
import Company from './pages/Company.jsx'
import Features from './pages/Features.jsx'
import MarketPlace from './pages/MarketPlace.jsx'
import Team from './pages/Team.jsx';
import Contact from './pages/Contact.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import SignIn from './pages/SignIn.jsx'
import Raisevoice from './pages/raisevoice.jsx'; 


function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/company' element={<Company/>}/>
        <Route path='/market' element={<MarketPlace/>}/>
        <Route path='/features' element={<Features/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/Raisevoice' element={<Raisevoice/>}/>
        
        
      

      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
