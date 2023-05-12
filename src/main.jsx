import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Recruitment from './Recruitment.jsx'
import Profile from './Profile.jsx'
import { MantineProvider, Grid, } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';

ReactDOM.createRoot(document.getElementById('root')).render(
  <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: "dark" }}>

    <React.StrictMode>

      <BrowserRouter>
        <ModalsProvider>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/recruitment' element={<Recruitment />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </ModalsProvider>
      </BrowserRouter>

    </React.StrictMode>
  </MantineProvider>
  ,
)
