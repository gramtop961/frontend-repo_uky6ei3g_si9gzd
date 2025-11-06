import React, { useMemo, useState } from 'react';
import Header from './components/Header';
import Filters from './components/Filters';
import SellerCard from './components/SellerCard';
import ChatDrawer from './components/ChatDrawer';

const MOCK_SELLERS = [
  {
    id: 1,
    name: 'Bakso Mang Udin',
    rating: 4,
    reviews: 128,
    isOpen: true,
    isRoaming: true,
    location: 'Jl. Melati No. 12',
    cover: 'https://images.unsplash.com/photo-1604908177220-5d9cbe6739a2?q=80&w=1200&auto=format&fit=crop',
    products: [
      { id: 'p1', name: 'Bakso Urat', price: 15000, image: 'https://images.unsplash.com/photo-1625944524900-3ef798b5f294?q=80&w=800&auto=format&fit=crop' },
      { id: 'p2', name: 'Mie Bakso', price: 18000, image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08b?q=80&w=800&auto=format&fit=crop' },
    ],
  },
  {
    id: 2,
    name: 'Sate Ayam Bu Rina',
    rating: 5,
    reviews: 342,
    isOpen: true,
    isRoaming: false,
    location: 'Lapangan Merdeka',
    cover: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1200&auto=format&fit=crop',
    products: [
      { id: 'p1', name: 'Sate Ayam 10 Tusuk', price: 25000, image: 'https://images.unsplash.com/photo-1616494180369-b7023ae4b8f9?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTYXRlJTIwQXlhbSUyMDEwJTIwVHVzdWt8ZW58MHwwfHx8MTc2MjQwNDQxN3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
      { id: 'p2', name: 'Lontong', price: 5000, image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop' },
    ],
  },
  {
    id: 3,
    name: 'Es Cendol Dini',
    rating: 4,
    reviews: 87,
    isOpen: false,
    isRoaming: true,
    location: 'Pasar Pagi Blok C',
    cover: 'https://images.unsplash.com/photo-1542379950-b3bd7bfa86b3?q=80&w=1200&auto=format&fit=crop',
    products: [
      { id: 'p1', name: 'Es Cendol', price: 12000, image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=800&auto=format&fit=crop' },
      { id: 'p2', name: 'Cendol Durian', price: 18000, image: 'https://images.unsplash.com/photo-1542826438-059b9d93d3c9?q=80&w=800&auto=format&fit=crop' },
    ],
  },
];

function App() {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [chatSeller, setChatSeller] = useState(null);

  const filtered = useMemo(() => {
    return MOCK_SELLERS.filter((s) => {
      if (activeTab === 'open' && !s.isOpen) return false;
      if (activeTab === 'roaming' && !s.isRoaming) return false;
      if (activeTab === 'stay' && s.isRoaming) return false;
      if (query && !s.name.toLowerCase().includes(query.toLowerCase())) return false;
      return true;
    });
  }, [activeTab, query]);

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header query={query} setQuery={setQuery} />
      <Filters activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="mx-auto max-w-screen-sm px-4 pb-24">
        <div className="grid grid-cols-1 gap-4">
          {filtered.map((seller) => (
            <SellerCard key={seller.id} seller={seller} onOpenChat={setChatSeller} />
          ))}
        </div>
      </main>
      <ChatDrawer open={!!chatSeller} seller={chatSeller} onClose={() => setChatSeller(null)} />
    </div>
  );
}

export default App;
