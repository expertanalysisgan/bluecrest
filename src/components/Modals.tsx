import React from 'react';
import { X, ShieldAlert, LifeBuoy, Send, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white rounded-[2.5rem] shadow-2xl w-full max-w-xl overflow-hidden"
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-slate-900 tracking-tight">{title}</h2>
                <button 
                  onClick={onClose}
                  className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-all"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export function RestrictedModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Transfer Restricted">
      <div className="flex flex-col items-center text-center gap-6">
        <div className="w-20 h-20 bg-rose-50 rounded-3xl flex items-center justify-center text-rose-500 mb-2">
          <ShieldAlert className="w-10 h-10" />
        </div>
        
        <div className="space-y-4">
          <p className="text-slate-600 leading-relaxed font-medium">
            For security, compliance, geographical verification, and account protection purposes, 
            both local and international transfers are currently restricted on this account.
          </p>
          <p className="text-slate-600 leading-relaxed font-medium">
            Please contact your account officer or visit your registered branch for further 
            verification and transfer activation.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full mt-4">
          <button 
            onClick={onClose}
            className="flex-1 bg-indigo-600 text-white font-bold py-4 rounded-2xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-900/10"
          >
            <LifeBuoy className="w-5 h-5" />
            Contact Support
          </button>
          <button 
            onClick={onClose}
            className="flex-1 bg-slate-100 text-slate-600 font-bold py-4 rounded-2xl hover:bg-slate-200 transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
}

export function SelectTransferTypeModal({ isOpen, onClose, onSelect }: { isOpen: boolean; onClose: () => void; onSelect: (type: string) => void }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Select Transfer Type">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <button 
          onClick={() => onSelect('local')}
          className="group p-8 rounded-[2rem] bg-slate-50 border-2 border-transparent hover:border-indigo-600 transition-all text-center flex flex-col items-center gap-4"
        >
          <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all transform group-hover:scale-110">
            <Send className="w-8 h-8" />
          </div>
          <div>
            <p className="text-lg font-bold text-slate-900">Local</p>
            <p className="text-xs font-semibold text-slate-400">Within same country</p>
          </div>
        </button>

        <button 
          onClick={() => onSelect('intl')}
          className="group p-8 rounded-[2rem] bg-slate-50 border-2 border-transparent hover:border-indigo-600 transition-all text-center flex flex-col items-center gap-4"
        >
          <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all transform group-hover:scale-110">
            <Globe className="w-8 h-8" />
          </div>
          <div>
            <p className="text-lg font-bold text-slate-900">International</p>
            <p className="text-xs font-semibold text-slate-400">Send across borders</p>
          </div>
        </button>
      </div>
    </Modal>
  );
}

