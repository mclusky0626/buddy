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

const App = () => {
  return (
    <>
      {/* The Navbar will be visible on all pages */}
      <Navbar />
      <main className="flex-grow">
        {/* Routes will render the component that matches the current URL path */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/system" element={<System />} />
          <Route path="/bot" element={<Bot />} />
          <Route path="/scenarios" element={<Scenarios />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/contributors" element={<Contributors />} />
        </Routes>
      </main>
      {/* The Footer will be visible on all pages */}
      <Footer />
    </>
  );
};

export default App;
