import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="text-center py-20 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
          Freelancer Super Toolkit
        </h1>
        <p className="text-slate-400 text-lg md:text-xl mb-8">
          Automate your daily repetitive tasks. Compress images, merge PDFs, analyze text, and boost productivity in seconds.
        </p>
        
        <div className="flex justify-center gap-4">
          <Link to="/tools/text" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition">
            Try Text Tools
          </Link>
          <Link to="/tools/file" className="bg-slate-800 hover:bg-slate-700 border border-slate-700 px-6 py-3 rounded-lg font-medium transition">
            File Processing Engine
          </Link>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
          <h3 className="text-xl font-bold mb-2 text-blue-400">📝 Text Toolkit</h3>
          <p className="text-slate-400 text-sm mb-4">Word count, character count, sentence analyzer, and case converter.</p>
          <Link to="/tools/text" className="text-blue-400 text-sm hover:underline">Open Tools →</Link>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
          <h3 className="text-xl font-bold mb-2 text-emerald-400">🖼️ Image Toolkit</h3>
          <p className="text-slate-400 text-sm mb-4">Compress JPG/PNG files using high performance sharp engine.</p>
          <Link to="/tools/file" className="text-emerald-400 text-sm hover:underline">Open Tools →</Link>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
          <h3 className="text-xl font-bold mb-2 text-purple-400">📄 PDF Toolkit</h3>
          <p className="text-slate-400 text-sm mb-4">Merge multiple PDF documents together effortlessly.</p>
          <Link to="/tools/file" className="text-purple-400 text-sm hover:underline">Open Tools →</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

