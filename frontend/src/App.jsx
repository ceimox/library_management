import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'
import SignIn from './pages/SignIn'
import Books from './pages/Books'


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/admin/signin" element={<SignIn />} />
          <Route path="/" element={<Books />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
