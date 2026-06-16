import { useState, useEffect } from 'react';

export default function App() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbzwCibasAHrlxpim5GfZFef2Awl16tkarBOEUTmbE_HVKRNWTg_fVvlP1v5uSD9XDUF/exec')
      .then(res => res.json())
      .then(data => setMembers(data));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-cyan-400">Direktori Anggota</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {members.map((m, i) => (
          <div key={i} className="p-6 border border-gray-800 rounded-2xl bg-gray-900">
            <h2 className="text-xl font-bold">{m.Nama}</h2>
            <p className="text-cyan-400">{m.Jabatan}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
