
import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";

// components
import HomeView from './Views/HomeView'
import LandingView from './Views/LandingView';
import JournalsView from './Views/JournalsView';
import NavBar from "./Components/Layout/NavBar";

//styles
import './App.css'

//db functions
import { getJournals } from "./data/data";

const testJournals = getJournals()

export default function App() {
    const [journals, setJournals] = useState(getJournals);
    // const [userData, setUserData] = useState({});

  return (
    <div >
        <NavBar />
        <Routes>
            <Route path="/" element={<LandingView />}/>
            <Route path="home/" element={<HomeView journals={journals} />}/>
            <Route path="journals/*" element={<JournalsView setJournals={setJournals} journals={journals}/>} />
            <Route path="*" element={<LandingView />} />
        </Routes>
  </div>
  );
}