import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Routes,Route,BrowserRouter } from 'react-router-dom'
import Recruitment from './Recruitment.jsx'
import Profile from './Profile.jsx'
import Detail from './Components/Detail.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/recruitment' element={<Recruitment />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/detail' element={<Detail />}/>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
