import { useState } from 'react';
import { Send, User, Building2, CreditCard, FileText, Globe } from 'lucide-react';
import { USER_DATA } from '@/src/constants';

export default function TransferPage({ onTransferSubmit }: { onTransferSubmit: () => void }) {
  const [transferType, setTransferType] = useState<'local' | 'intl'>('local');

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="bg-white rounded-[2.5rem] p-6 md:p-10 shadow-sm border border-slate-100">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            {transferType === 'local' ? <Send className="w-5 h-5 text-brand-primary" /> : <Globe className="w-5 h-5 text-brand-primary" />}
            {transferType === 'local' ? 'Fund Transfer' : 'International Transfer'}
          </h2>
          <div className="flex bg-slate-50 p-1 rounded-2xl border border-slate-100 w-full sm:w-auto">
            <button 
              onClick={() => setTransferType('local')}
              className={`flex-1 sm:flex-none px-6 py-2 rounded-xl text-xs font-bold transition-all ${transferType === 'local' ? 'bg-white text-[#003399] shadow-sm' : 'text-slate-400'}`}
            >
              Local
            </button>
            <button 
              onClick={() => setTransferType('intl')}
              className={`flex-1 sm:flex-none px-6 py-2 rounded-xl text-xs font-bold transition-all ${transferType === 'intl' ? 'bg-white text-[#003399] shadow-sm' : 'text-slate-400'}`}
            >
              International
            </button>
          </div>
        </div>

        <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); onTransferSubmit(); }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Recipient Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                <input 
                  type="text" 
                  placeholder="Recipient Full Name" 
                  className="w-full h-14 bg-slate-50 border border-slate-100 focus:bg-white focus:border-indigo-100 rounded-2xl pl-12 pr-4 text-sm font-semibold outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Bank Name</label>
              <div className="relative">
                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                <input 
                  type="text" 
                  placeholder="Recipient Bank Name" 
                  className="w-full h-14 bg-slate-50 border border-slate-100 focus:bg-white focus:border-indigo-100 rounded-2xl pl-12 pr-4 text-sm font-semibold outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
                {transferType === 'local' ? 'Account Number' : 'IBAN / Swift Code'}
              </label>
              <div className="relative">
                <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                <input 
                  type="text" 
                  placeholder={transferType === 'local' ? "0000 1111 2222" : "GB29 XXXX XXXX XXXX"}
                  className="w-full h-14 bg-slate-50 border border-slate-100 focus:bg-white focus:border-indigo-100 rounded-2xl pl-12 pr-4 text-sm font-semibold outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Amount (£)</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">£</span>
                <input 
                  type="number" 
                  placeholder="0.00" 
                  className="w-full h-14 bg-slate-50 border border-slate-100 focus:bg-white focus:border-indigo-100 rounded-2xl pl-10 pr-4 text-sm font-semibold outline-none transition-all"
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Description (Optional)</label>
            <div className="relative">
              <FileText className="absolute left-4 top-6 w-5 h-5 text-slate-300" />
              <textarea 
                placeholder="What is this for?"
                className="w-full h-32 bg-slate-50 border border-slate-100 focus:bg-white focus:border-indigo-100 rounded-2xl pl-12 pr-4 py-5 text-sm font-semibold outline-none transition-all resize-none"
              />
            </div>
          </div>

          <div className="pt-4 text-center">
            <button 
              type="submit"
              className="w-full bg-[#003399] text-white font-bold py-5 rounded-[1.5rem] hover:bg-blue-800 transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-900/10 active:scale-95 transform"
            >
              <Send className="w-5 h-5" />
              {transferType === 'local' ? 'Transfer Now' : 'Initiate International Transfer'}
            </button>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-6">
              Total available balance: £{USER_DATA.balance.toLocaleString()}.00
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
