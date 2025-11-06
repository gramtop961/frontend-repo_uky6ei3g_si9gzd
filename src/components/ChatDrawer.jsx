import React, { useEffect, useRef, useState } from 'react';
import { X, Send } from 'lucide-react';

const MessageBubble = ({ message }) => {
  const isMe = message.sender === 'me';
  return (
    <div className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[75%] rounded-2xl px-3 py-2 text-sm ${
        isMe ? 'bg-emerald-600 text-white rounded-br-sm' : 'bg-neutral-100 text-neutral-800 rounded-bl-sm'
      }`}>
        <p>{message.text}</p>
        <p className={`mt-1 text-[10px] ${isMe ? 'text-emerald-100/80' : 'text-neutral-500'}`}>{message.time}</p>
      </div>
    </div>
  );
};

const ChatDrawer = ({ open, onClose, seller }) => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'seller', text: 'Halo! Ada yang bisa dibantu?', time: '09:30' },
  ]);
  const [input, setInput] = useState('');
  const endRef = useRef(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => endRef.current?.scrollIntoView({ behavior: 'smooth' }), 50);
    }
  }, [open, messages]);

  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;
    const now = new Date();
    const time = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    setMessages((prev) => [...prev, { id: Date.now(), sender: 'me', text, time }]);
    setInput('');
    setTimeout(() => {
      setMessages((prev) => [...prev, { id: Date.now() + 1, sender: 'seller', text: 'Baik, kami proses ya 👍', time }]);
    }, 600);
  };

  if (!open || !seller) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-screen-sm h-[70vh] bg-white rounded-t-2xl shadow-xl flex flex-col">
        <div className="flex items-center gap-3 p-3 border-b">
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-neutral-100">
            <X size={18} />
          </button>
          <img src={seller.cover} alt={seller.name} className="w-8 h-8 rounded-lg object-cover" />
          <div className="leading-tight">
            <p className="text-sm font-semibold">{seller.name}</p>
            <p className="text-xs text-neutral-500">{seller.isOpen ? 'Sedang buka' : 'Sedang tutup'} • {seller.isRoaming ? 'Keliling' : 'Stay'}</p>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-neutral-50">
          {messages.map((m) => (
            <MessageBubble key={m.id} message={m} />
          ))}
          <div ref={endRef} />
        </div>
        <div className="p-3 border-t bg-white">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tulis pesan..."
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              className="flex-1 px-3 py-2 rounded-lg bg-neutral-100 focus:bg-white border border-transparent focus:border-emerald-300 outline-none text-sm"
            />
            <button onClick={sendMessage} className="p-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDrawer;
