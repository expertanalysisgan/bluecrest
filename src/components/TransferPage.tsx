import { useState, useEffect } from 'react';
import { Send, User, Building2, CreditCard, FileText, Globe, Key, Shield } from 'lucide-react';
import { USER_DATA } from '@/src/constants';

export default function TransferPage({ onTransferSubmit }: { onTransferSubmit: () => void }) {
  const [transferType, setTransferType] = useState<'local' | 'intl'>('local');
  const [urlParams, setUrlParams] = useState(new URLSearchParams(window.location.search));
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (window.location.pathname.includes('dom-transfer')) setTransferType('local');
    if (window.location.pathname.includes('wire-transfer')) setTransferType('intl');
  }, []);

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

        {urlParams.get('error') && (
          <div className="mb-6 p-4 bg-rose-50 border border-rose-100 rounded-xl text-rose-600 text-sm font-bold flex items-center gap-2">
            <Shield className="w-5 h-5" />
            {urlParams.get('error')}
          </div>
        )}

        {urlParams.get('success') && (
          <div className="mb-6 p-4 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-600 text-sm font-bold flex items-center gap-2">
            <Shield className="w-5 h-5" />
            {urlParams.get('success')}
          </div>
        )}

        <form className="space-y-8" onSubmit={(e) => {
          e.preventDefault();
          setIsModalOpen(true);
        }}>
          <input type="hidden" name="account_type" value="Savings" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Recipient Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                <input 
                  type="text" 
                  name="beneficiary_name"
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
                  name="bank_name"
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
                  name="account_number"
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
                  name="amount"
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
                name="narration"
                placeholder="What is this for?"
                className="w-full h-32 bg-slate-50 border border-slate-100 focus:bg-white focus:border-indigo-100 rounded-2xl pl-12 pr-4 py-5 text-sm font-semibold outline-none transition-all resize-none"
              />
            </div>
          </div>

          {urlParams.get('resume_transfer') === '1' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 border-t border-slate-100">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">OTP Code</label>
                <div className="relative">
                  <Key className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                  <input type="text" name="otp_code" placeholder="6-digit code" className="w-full h-14 bg-slate-50 border border-slate-100 focus:bg-white focus:border-indigo-100 rounded-2xl pl-12 pr-4 text-sm font-semibold outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">FDIC Code</label>
                <div className="relative">
                  <Shield className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                  <input type="text" name="fdic_code" placeholder="If applicable" className="w-full h-14 bg-slate-50 border border-slate-100 focus:bg-white focus:border-indigo-100 rounded-2xl pl-12 pr-4 text-sm font-semibold outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Banking Code</label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                  <input type="text" name="banking_code" placeholder="If applicable" className="w-full h-14 bg-slate-50 border border-slate-100 focus:bg-white focus:border-indigo-100 rounded-2xl pl-12 pr-4 text-sm font-semibold outline-none transition-all" />
                </div>
              </div>
            </div>
          )}

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

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-white rounded-[2rem] p-8 max-w-md w-full shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Shield className="w-8 h-8 text-rose-500" />
            </div>
            <h3 className="text-xl font-bold text-center text-slate-900 mb-2">Transfer Restricted</h3>
            <p className="text-center text-slate-500 mb-8 font-medium">
              Transfer restricted due to geographical location. Please contact your account manager for further assistance.
            </p>
            <button 
              onClick={() => setIsModalOpen(false)}
              className="w-full bg-slate-100 text-slate-900 font-bold py-4 rounded-xl hover:bg-slate-200 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
