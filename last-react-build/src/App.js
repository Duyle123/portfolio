import React, {useState, useEffect, useRef} from 'react';
import {gsap, Power3} from 'gsap';

//========= Import Firebase ==============
import './App.css';
import * as firebase from "firebase/app";
import { firebaseConfig } from "./firebase-config";
// import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

//========= Import Pages ==============
import HomePage from "./pages/home";
// import BlogIndex from "./pages/blogs/blog-index";
// import ProjectIndex from "./pages/projects/project-index";



//========= Initialize Firebase ==============
firebase.initializeApp(firebaseConfig);


function App() {

  let lt1 = useRef(null);
  let lt2 = useRef(null);
  let lt3 = useRef(null);
  let lt4 = useRef(null);
  let lt5 = useRef(null);

  let loadingScreen = useRef(null)
  const tl = gsap.timeline()

  useEffect(() => {;
    tl.to([lt1,lt2,lt3,lt4], 1, {y: -30, rotationX: 10, opacity: 1, scale: 1, stagger: 0.7, ease: Power3.easeOut, delay: 0.5});
    tl.to([lt1,lt2,lt3,lt4], 0.7, {y: -60, rotationX: -100, opacity: 0, scale: 0.8, stagger: 0.7, ease: Power3.easeOut, delay: 0.4}, "-=3");
    tl.to(loadingScreen, 1, {height: 0, ease: Power3.easeOut});
    tl.to([lt1,lt2,lt3,lt4, loadingScreen], {visibility: 'hidden'});
  },[0])

  return (
    <>
    <div ref={el => loadingScreen = el} className="loading-screen">
      <div className='loading-text-container justify-content-center'>
        <p ref={el => lt1 = el} className="ch3 loading-text lt1">ANALYZE</p>
        <p ref={el => lt2 = el} className="ch3 loading-text lt2">STRATEGIZE</p>
        <p ref={el => lt3 = el} className="ch3 loading-text lt3">DESIGN</p>
        <p ref={el => lt4 = el} className="ch3 loading-text lt5">OPTIMIZE</p>
      </div>
    </div>
    <HomePage />
    </>
  )}

export default App;

