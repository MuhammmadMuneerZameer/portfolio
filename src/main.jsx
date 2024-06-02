import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Spline from '@splinetool/react-spline';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    {/* <Spline className='spline' scene="https://prod.spline.design/tMoBwoV6i6NTm7JB/scene.splinecode" /> */}

    <App/>
    <ToastContainer/>

  </React.StrictMode>,
)
