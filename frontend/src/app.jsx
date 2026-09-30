import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-indigo-500 mb-4">
        Freelancer Super Toolkit 🛠️
      </h1>
      <p className="text-slate-300 text-lg max-w-md text-center">
        Phase 1 Foundation Setup Complete! Client & Server properly initialized.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
