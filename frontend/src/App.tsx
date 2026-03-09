import {useState} from 'react';
import logo from './assets/images/logo-universal.png';
import './App.css';
import './style.css'
import {Greet} from "../wailsjs/go/main/App";
import { Route, Routes } from 'react-router-dom';
import Sidebar from './pages/Sidebar';
import Header from './pages/Header';
import Dashboard from './pages/Dashboard';

function App() {
    const [resultText, setResultText] = useState("Please enter your name below 👇");
    const [name, setName] = useState('');
    const updateName = (e: any) => setName(e.target.value);
    const updateResultText = (result: string) => setResultText(result);

    function greet() {
        Greet(name).then(updateResultText);
    }

    return (
        <div id="App">
            <div className="app-layout">
                <Sidebar/>
                <Header/>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Dashboard/>} />
                        <Route path="/settings" element={<div> another </div>} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default App
