import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-indigo-400 font-bold text-lg mb-3">WorkFlowKit</h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            All-in-one productivity SaaS toolkit designed for freelancers, developers, and creators.
          </p>
        </div>

        <div>
          <h4 className="text-slate-200 font-semibold mb-3">Tool Suite</h4>
          <ul className="space-y-2 text-xs">
            <li><Link to="/tools" className="hover:text-indigo-400">PDF Converter</Link></li>
            <li><Link to="/tools" className="hover:text-indigo-400">Image Compressor</Link></li>
            <li><Link to="/tools" className="hover:text-indigo-400">JSON Formatter</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-slate-200 font-semibold mb-3">Platform</h4>
          <ul className="space-y-2 text-xs">
            <li><Link to="/pricing" className="hover:text-indigo-400">Pricing Plans</Link></li>
            <li><Link to="/dashboard" className="hover:text-indigo-400">User Dashboard</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-slate-200 font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#" className="hover:text-indigo-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-indigo-400">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
        © 2026 WorkFlowKit. All rights reserved.
      </div>
    </footer>
  );
}
