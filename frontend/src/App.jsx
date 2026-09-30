import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Home from './pages/Home';
import TextTools from './pages/TextTools';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-900 text-slate-100">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tools/text" element={<TextTools />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
