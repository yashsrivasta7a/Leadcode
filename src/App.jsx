import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './modules/login/login'
import Navbar from './components/navbar'
import Rooms from './modules/rooms/rooms'
// You'll need to create these components or import them from the correct paths
// import Dashboard from './components/Dashboard'
// import Leaderboard from './components/Leaderboard'
 
// import Profile from './components/Profile'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* Uncomment these routes when you have the components ready */}
        {/* <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leaderboard" element={<Leaderboard />} />*/}
        <Route path="/rooms" element={<Rooms />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </Router>
  )
}

export default App
