import { Search, Bell, Maximize2, ChevronDown, Menu } from 'lucide-react';
import { USER_DATA, PROFILE_IMAGE } from '@/src/constants';

interface HeaderProps {
  onMenuClick?: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-30">
      <div className="flex items-center gap-4 flex-1">
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 text-slate-500 hover:bg-slate-50 rounded-lg"
        >
          <Menu className="w-6 h-6" />
        </button>
        
        <h1 className="text-lg font-semibold text-slate-900">Dashboard</h1>
        <span className="text-slate-300 hidden sm:block">|</span>
        <span className="text-slate-500 text-sm hidden sm:block font-medium">
          Welcome back, {USER_DATA.surname} {USER_DATA.lastName}
        </span>
      </div>

      <div className="flex items-center space-x-6">
        <div className="relative group hidden md:block">
          <Search className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-colors cursor-pointer" />
        </div>
        
        <div className="w-px h-6 bg-slate-200 hidden md:block"></div>
        
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-semibold text-slate-900 leading-none mb-1">
              {USER_DATA.username}
            </p>
            <p className="text-[10px] text-slate-500 font-medium">
              Personal Account
            </p>
          </div>
          
          <div className="w-10 h-10 rounded-full border-2 border-white shadow-sm flex items-center justify-center overflow-hidden ring-1 ring-slate-100 bg-slate-50">
             <img 
               src={PROFILE_IMAGE} 
               alt="Profile" 
               className="w-full h-full object-cover"
             />
          </div>
        </div>
      </div>
    </header>
  );
}
