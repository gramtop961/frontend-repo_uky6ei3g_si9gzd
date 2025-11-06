import React from 'react';
import { Search, Store } from 'lucide-react';

const Header = ({ query, setQuery }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto max-w-screen-sm px-4 py-3 flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-emerald-100 text-emerald-700">
            <Store size={20} />
          </div>
          <div className="leading-tight">
            <h1 className="text-base font-semibold">JajanKaki</h1>
            <p className="text-xs text-neutral-500">Social media pedagang kaki lima</p>
          </div>
        </div>
        <div className="flex-1" />
      </div>
      <div className="mx-auto max-w-screen-sm px-4 pb-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari pedagang, produk, atau lokasi..."
            className="w-full pl-10 pr-3 py-2 rounded-lg bg-neutral-100 focus:bg-white border border-transparent focus:border-emerald-300 outline-none text-sm"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
