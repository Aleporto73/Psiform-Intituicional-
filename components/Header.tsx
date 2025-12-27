
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Fixed: Define NavLink outside Header and use explicit prop types to resolve children missing error
interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  const location = useLocation();
  const active = location.pathname === to;
  return (
    <Link
      to={to}
      className={`px-4 py-2 text-sm font-medium transition-colors hover:text-blue-700 ${
        active ? 'text-blue-900 border-b-2 border-blue-900' : 'text-slate-600'
      }`}
    >
      {children}
    </Link>
  );
};

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-slate-900">
              PSIFORM<span className="text-blue-800">.</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-2">
            <NavLink to="/">Início</NavLink>
            <NavLink to="/abasimples">AbaSimples</NavLink>
            <NavLink to="/neurorastreio">NeuroRastreio</NavLink>
            <a 
              href="https://psicoblog.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-blue-700"
            >
              Psicoblog
            </a>
            <NavLink to="/whitepaper">Base Institucional</NavLink>
          </nav>
          <div className="md:hidden">
            <span className="text-slate-400 text-xs">Menu</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
