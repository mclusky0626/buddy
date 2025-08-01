import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import System from './pages/System';
import Bot from './pages/Bot';
import Scenarios from './pages/Scenarios';
import Vision from './pages/Vision';
import Contributors from './pages/Contributors';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/system" element={<System />} />
          <Route path="/bot" element={<Bot />} />
          <Route path="/scenarios" element={<Scenarios />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/contributors" element={<Contributors />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
