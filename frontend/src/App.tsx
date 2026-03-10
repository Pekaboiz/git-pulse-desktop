import './App.css';
import './style.css'
import { Route, Routes } from 'react-router-dom';
import Sidebar from './pages/Sidebar';
import Header from './pages/Header';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Commits from './pages/Commits';
import Branches from './pages/Branches';
import User from './pages/User';
import ActivityItem from './components/ActivityItem';
import Repos from './components/Repos';

function App() {
    return (
        <div id="App">
            <div className="app-layout">
                <Sidebar/>
                <Header/>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Dashboard/>} />
                        <Route path="/repos" element={<Repos/>} />
                        <Route path="/commits" element={<Commits/>} />
                        <Route path="/branches" element={<Branches/>} />
                        <Route path="/activity" element={<ActivityItem/>} />
                        
                        <Route path="/settings" element={<Settings/>} />
                        <Route path="/user" element={<User/>} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default App
