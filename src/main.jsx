import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import Dashboard from './Dashboard.jsx'
import AdminPanel from './Adminpanel.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Dashboard/> */}
  {/* <AdminPanel/> */}
  </StrictMode>,
)
