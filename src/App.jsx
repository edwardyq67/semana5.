
import { HashRouter, Routes,Route } from 'react-router-dom'

import './App.css'
import CharacterDetail from './component/CharacterDetail'
import Characters from './component/Characters'
import ProtectedRoutes from './component/ProtectedRoutes'
import UserInput from './component/UserInput'

function App() {
  
  document.body.style=`background:black`;
  return (<HashRouter>
    <div className="App">
      <div className='contenedor' >
      <Routes>
            <Route className="portada1" path="/" element={<UserInput/>}/>
        <Route element={<ProtectedRoutes/>}>
            <Route path="/characters" element={<Characters/>}/>
            <Route path="/characters/:id" element={<CharacterDetail/>}/>
        </Route>
        
        
      </Routes>
    </div>
    </div>
    </HashRouter>
  )
}

export default App
