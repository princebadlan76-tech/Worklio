import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, User, LogIn } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-slate-900 border-b border-slate-800 text-slate-200 px-6 py-4 sticky top-0 z-50 backdrop-blur-md bg-opacity-80">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center space-x-2 text-indigo-400 font-bold text-xl tracking-wide">
          <Wrench className="w-6 h-6 text-indigo-500" />
          <span>WorkFlowKit</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link>
          <Link to="/tools" className="hover:text-indigo-400 transition-colors">All Tools</Link>
          <Link to="/pricing" className="hover:text-indigo-400 transition-colors">Pricing</Link>
          <Link to="/dashboard" className="hover:text-indigo-400 transition-colors">Dashboard</Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <Link 
            to="/login" 
            className="flex items-center space-x-1 text-sm font-medium hover:text-indigo-400 px-3 py-2 rounded-lg transition-colors"
          >
            <LogIn className="w-4 h-4" />
            <span>Login</span>
          </Link>
          <Link 
            to="/register" 
            className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-lg shadow-indigo-600/30 transition-all"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
