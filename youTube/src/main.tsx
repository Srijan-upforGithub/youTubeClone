import React from 'react'
import {BrowserRouter} from "react-router-dom"
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { GlobalPage } from './styledComponents'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
  <GlobalPage/>
  <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
)
