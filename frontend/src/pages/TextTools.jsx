import React, { useState } from 'react';
import API from '../services/api';

const TextTools = () => {
  const [text, setText] = useState('');
  const [stats, setStats] = useState({ words: 0, characters: 0, sentences: 0, lines: 0 });

  const handleTextChange = async (e) => {
    const inputText = e.target.value;
    setText(inputText);

    try {
      const res = await API.post('/tools/text/analyze', { text: inputText });
      setStats(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleConvert = async (type) => {
    try {
      const res = await API.post('/tools/text/convert-case', { text, type });
      setText(res.data.result);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Text & Content Utility</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-slate-800 p-4 rounded-lg text-center border border-slate-700">
          <p className="text-2xl font-bold text-blue-400">{stats.words}</p>
          <p className="text-slate-400 text-xs uppercase">Words</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg text-center border border-slate-700">
          <p className="text-2xl font-bold text-emerald-400">{stats.characters}</p>
          <p className="text-slate-400 text-xs uppercase">Characters</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg text-center border border-slate-700">
          <p className="text-2xl font-bold text-purple-400">{stats.sentences}</p>
          <p className="text-slate-400 text-xs uppercase">Sentences</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg text-center border border-slate-700">
          <p className="text-2xl font-bold text-amber-400">{stats.lines}</p>
          <p className="text-slate-400 text-xs uppercase">Lines</p>
        </div>
      </div>

      <textarea
        rows="8"
        className="w-full bg-slate-800 text-white p-4 rounded-lg border border-slate-700 focus:outline-none focus:border-blue-500 mb-4"
        placeholder="Type or paste your text here..."
        value={text}
        onChange={handleTextChange}
      />

      <div className="flex flex-wrap gap-3">
        <button onClick={() => handleConvert('uppercase')} className="bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded text-sm font-medium border border-slate-700">UPPERCASE</button>
        <button onClick={() => handleConvert('lowercase')} className="bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded text-sm font-medium border border-slate-700">lowercase</button>
        <button onClick={() => handleConvert('titlecase')} className="bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded text-sm font-medium border border-slate-700">Title Case</button>
        <button onClick={() => handleConvert('slug')} className="bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded text-sm font-medium border border-slate-700">URL-slug</button>
      </div>
    </div>
  );
};

export default TextTools;
