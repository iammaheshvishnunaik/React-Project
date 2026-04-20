import React from 'react'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import Login from './components/login/login';
export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
