import React from 'react';

const Tab = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
      active ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white text-neutral-700 border-neutral-300 hover:bg-neutral-50'
    }`}
  >
    {children}
  </button>
);

const Filters = ({ activeTab, setActiveTab }) => {
  return (
    <div className="mx-auto max-w-screen-sm px-4 py-3 flex items-center gap-2 overflow-x-auto no-scrollbar">
      <Tab active={activeTab === 'all'} onClick={() => setActiveTab('all')}>Semua</Tab>
      <Tab active={activeTab === 'open'} onClick={() => setActiveTab('open')}>Sedang Buka</Tab>
      <Tab active={activeTab === 'roaming'} onClick={() => setActiveTab('roaming')}>Keliling</Tab>
      <Tab active={activeTab === 'stay'} onClick={() => setActiveTab('stay')}>Stay</Tab>
    </div>
  );
};

export default Filters;
