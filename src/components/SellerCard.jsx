import React from 'react';
import { Star, MapPin, Clock, Truck } from 'lucide-react';

const Rating = ({ value }) => {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="flex items-center gap-0.5">
      {stars.map((s) => (
        <Star key={s} size={14} className={s <= value ? 'fill-yellow-400 text-yellow-400' : 'text-neutral-300'} />
      ))}
    </div>
  );
};

const Badge = ({ color = 'emerald', children }) => (
  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-${color}-100 text-${color}-700`}>{children}</span>
);

const SellerCard = ({ seller, onOpenChat }) => {
  const statusColor = seller.isOpen ? 'emerald' : 'rose';
  const moveLabel = seller.isRoaming ? 'Keliling' : 'Stay';

  return (
    <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
      <img src={seller.cover} alt={seller.name} className="w-full h-36 object-cover" />
      <div className="p-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold text-sm">{seller.name}</h3>
            <div className="flex items-center gap-2 mt-1">
              <Rating value={seller.rating} />
              <span className="text-xs text-neutral-500">({seller.reviews})</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-neutral-500 mt-2">
              <MapPin size={14} />
              <span>{seller.location}</span>
            </div>
          </div>
          <div className="text-right space-y-1">
            <div className="flex items-center gap-1 justify-end text-xs">
              <Clock size={14} className={seller.isOpen ? 'text-emerald-600' : 'text-rose-600'} />
              <span className={seller.isOpen ? 'text-emerald-700' : 'text-rose-700'}>{seller.isOpen ? 'Buka' : 'Tutup'}</span>
            </div>
            <div className="flex items-center gap-1 justify-end text-xs text-sky-700">
              <Truck size={14} />
              <span>{moveLabel}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mt-3 overflow-x-auto no-scrollbar">
          {seller.products.map((p) => (
            <div key={p.id} className="min-w-[120px] bg-neutral-50 rounded-lg p-2 border border-neutral-200">
              <img src={p.image} alt={p.name} className="w-full h-16 object-cover rounded" />
              <p className="text-xs font-medium mt-1 truncate">{p.name}</p>
              <p className="text-xs text-emerald-700 font-semibold">Rp{p.price.toLocaleString()}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 mt-3">
          <button onClick={() => onOpenChat(seller)} className="flex-1 py-2 text-sm font-medium rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors">Chat</button>
          <button className="flex-1 py-2 text-sm font-medium rounded-lg border border-neutral-300 hover:bg-neutral-50 transition-colors">Lihat</button>
        </div>
      </div>
    </div>
  );
};

export default SellerCard;
