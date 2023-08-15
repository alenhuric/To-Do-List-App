import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Page from './pages/page.jsx'
import './styles/tailwind.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Page />
  </React.StrictMode>,
)