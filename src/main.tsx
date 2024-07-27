import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ToastContainer } from 'react-toastify';
import './assets/css/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ToastContainer style={{ zIndex: 99999 }} />
        <App />
    </React.StrictMode>,
);
