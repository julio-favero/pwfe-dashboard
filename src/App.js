//Bibliotecas
import {Route, Routes, BrowserRouter} from 'react-router-dom';

// Estilo
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Pages/Home';
import Tabela from './Pages/Tabela';
import Dashboard from './Pages/Dasboard';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element = {<Home/>} path='/' exact>
            <Route element = {<Dashboard/>} path='/dashboard'/>
            <Route element = {<Tabela/>} path='/tabela'/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
