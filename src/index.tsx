import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Details from "./pages/details";
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Route,
  Routes 
} from "react-router-dom";
import Header from './components/header'
import Footer from './components/footer'

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </Router>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
