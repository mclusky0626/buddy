import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold text-slate-800">
          <span className="text-teal-600">AI</span>-Powered Safety
        </h1>
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="nav-link font-medium">소개</Link>
          <Link to="/system" className="nav-link font-medium">시스템</Link>
          <Link to="/bot" className="nav-link font-medium">텔레그램 봇</Link>
          <Link to="/scenarios" className="nav-link font-medium">적용 시나리오</Link>
          <Link to="/vision" className="nav-link font-medium">미래 비전</Link>
          <Link to="/contributors" className="nav-link font-medium">기여</Link>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-slate-700 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-white" onClick={() => setOpen(false)}>
          <Link to="/" className="block py-2 px-6 text-sm text-slate-700 hover:bg-slate-100">소개</Link>
          <Link to="/system" className="block py-2 px-6 text-sm text-slate-700 hover:bg-slate-100">시스템</Link>
          <Link to="/bot" className="block py-2 px-6 text-sm text-slate-700 hover:bg-slate-100">텔레그램 봇</Link>
          <Link to="/scenarios" className="block py-2 px-6 text-sm text-slate-700 hover:bg-slate-100">적용 시나리오</Link>
          <Link to="/vision" className="block py-2 px-6 text-sm text-slate-700 hover:bg-slate-100">미래 비전</Link>
          <Link to="/contributors" className="block py-2 px-6 text-sm text-slate-700 hover:bg-slate-100">기여</Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;