import { Wifi, Plus, Lock, Settings } from 'lucide-react';
import { USER_DATA } from '@/src/constants';

const CARDS = [
  { id: 1, type: 'Visa Platinum', number: '4484 9527 2838 5537', expiry: '03/29', color: 'bg-slate-900', secondary: 'bg-slate-800' },
  { id: 2, type: 'Mastercard Gold', number: '5172 8229 1023 9991', expiry: '11/27', color: 'bg-blue-900', secondary: 'bg-blue-800' },
];

export default function CardsPage() {
  return (
    <div className="max-w-6xl mx-auto py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h2 className="text-xl font-bold text-slate-900 tracking-tight">Your Cards</h2>
        <button className="w-full sm:w-auto bg-[#003399] text-white px-6 py-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/10">
          <Plus className="w-4 h-4" /> Add New Card
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CARDS.map((card) => (
          <div key={card.id} className="space-y-6">
            <div className={`relative aspect-[1.6/1] ${card.id === 1 ? 'bg-slate-900' : 'bg-[#003399]'} rounded-[2.5rem] p-6 sm:p-8 text-white shadow-2xl group overflow-hidden`}>
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:12px_12px]" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-10 bg-white/10 backdrop-blur rounded-lg border border-white/10 flex items-center justify-center">
                    <div className="w-8 h-6 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-sm" />
                  </div>
                  <Wifi className="w-6 h-6 text-white/40" />
                </div>
                
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-lg sm:text-2xl font-mono tracking-[0.2em] font-medium">{card.number}</p>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Card Holder</p>
                      <p className="text-sm font-bold uppercase tracking-wider">{USER_DATA.surname} {USER_DATA.lastName}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Expires</p>
                      <p className="text-sm font-bold">{card.expiry}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 flex items-center justify-between">
              <div className="flex gap-4">
                <button className="p-3 bg-slate-50 rounded-xl text-slate-400 hover:text-[#003399] hover:bg-blue-50 transition-all">
                  <Lock className="w-5 h-5" />
                </button>
                <button className="p-3 bg-slate-50 rounded-xl text-slate-400 hover:text-[#003399] hover:bg-blue-50 transition-all">
                  <Settings className="w-5 h-5" />
                </button>
              </div>
              <div className="text-right">
                <p className="text-xs font-bold text-emerald-500 uppercase tracking-widest">Active Card</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Manage limits & security</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
