import React from 'react'
import ReactDOM from 'react-dom/client'
import { QRCODE } from './QRCODE.jsx'
import "./qrcode.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QRCODE />
  </React.StrictMode>,
)
