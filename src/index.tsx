import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Car from './components/Car';
import Footer from './components/footer/Footer'
import Header from './components/header/header'
import DataComponent from './components/data/DataComponent';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Header/>
    <DataComponent/>
    <Car/>
    <App />
   
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

