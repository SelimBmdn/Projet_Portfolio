import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import '../src/styles/index.css';

import Home from './pages/Home';
import About from './pages/About';
import ContactPage from './pages/ContactPage';
import ProjectPage from './pages/ProjectPage';
import SkillsPage from './pages/SkillsPage';
import ServicePage from './pages/ServicePage';
import ResumePage from './pages/ResumePage';
import ErrorPage from './pages/ErrorPage';
//import App from '../src/App';


// Création de la racine de rendu ReactDOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/* Mise en place du Router */}
    <Router>
      <Routes>
     {/* Définition des différentes routes */}
     <Route path='/' element = {<Home />} /> 
        <Route path='/Home' element = {<Home />}/>
        <Route path='/About' element = {<About />}/>
        <Route path='/ContactPage' element = {<ContactPage />}/>
        <Route path='/ProjectPage' element = {<ProjectPage />}/>
        <Route path='/SkillsPage' element = {<SkillsPage />}/>
        <Route path='/ServicePage' element = {<ServicePage />}/>
        <Route path='/ResumePage' element = {<ResumePage />}/>
        <Route path='/*' element = {<ErrorPage />}/> 
        <Route path='/*' element = {<ErrorPage />}/> 
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
;

/*

<Route path='/' element = {<App />} /> 
        <Route path='/Home' element = {<Home />}/>
        <Route path='/About' element = {<About />}/>
        <Route path='/ContactPage' element = {<ContactPage />}/>
        <Route path='/ProjectPage' element = {<ProjectPage />}/>
        <Route path='/SkillsPage' element = {<SkillsPage />}/>
        <Route path='/ServicePage' element = {<ServicePage />}/>
        <Route path='/ResumePage' element = {<ResumePage />}/>
        <Route path='/*' element = {<ErrorPage />}/> 

        */