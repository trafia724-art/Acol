import React from 'react';
import { LOGO_URL, PROFILE_AVATAR } from '../data/sarees';

interface HeaderProps {
  isDetailView?: boolean;
  onBack?: () => void;
  onOpenSearch?: () => void;
  onOpenWishlist?: () => void;
  onOpenProfile?: () => void;
  wishlistCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  isDetailView = false,
  onBack,
  onOpenSearch,
  onOpenWishlist,
  onOpenProfile,
  wishlistCount
}) => {
  return (
    <header className="fixed top-0 w-full z-40 pt-safe bg-[#fcf9f8]/90 backdrop-blur-xl border-b border-[#7a0c22]/10 shadow-[0_4px_20px_-2px_rgba(122,12,34,0.05)]">
      <div className="h-16 max-w-2xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-2">
        {isDetailView ? (
          <div className="flex items-center gap-1 min-w-0">
            <button
              aria-label="Go Back"
              className="w-11 h-11 flex items-center justify-center -ml-2 text-[#550012] hover:text-[#7a0c22] active:scale-95 transition-all cursor-pointer"
              onClick={onBack}
            >
              <span className="material-symbols-outlined text-[24px]">arrow_back</span>
            </button>
            <img
              alt="Aachol Saree Boutique Logo"
              className="h-8 w-auto object-contain hidden sm:block"
              src={LOGO_URL}
            />
            <h1 className="font-serif text-[22px] font-semibold text-[#1b1b1c] tracking-tight truncate leading-tight ml-1">
              Saree Details
            </h1>
          </div>
        ) : (
          <div className="flex items-center gap-2.5 min-w-0">
            <img
              alt="Aachol Saree Boutique Logo"
              className="h-8 w-auto object-contain"
              src={LOGO_URL}
            />
            <div className="flex flex-col truncate">
              <span className="font-serif text-[20px] font-semibold text-[#550012] tracking-tight truncate leading-none">
                আঁচল
              </span>
              <span className="text-[10px] text-[#775a19] tracking-widest uppercase font-bold mt-0.5">
                Heritage Sarees
              </span>
            </div>
          </div>
        )}

        <div className="flex items-center gap-1 shrink-0">
          {!isDetailView && (
            <button
              aria-label="Search Archive"
              className="w-10 h-10 flex items-center justify-center text-[#574142] hover:text-[#550012] active:scale-95 transition-colors cursor-pointer"
              onClick={onOpenSearch}
            >
              <span className="material-symbols-outlined text-[22px]">search</span>
            </button>
          )}

          <button
            aria-label="Wishlist"
            className="relative w-10 h-10 flex items-center justify-center text-[#574142] hover:text-[#550012] active:scale-95 transition-colors cursor-pointer"
            onClick={onOpenWishlist}
          >
            <span
              className={`material-symbols-outlined text-[22px] ${
                wishlistCount > 0 ? 'text-[#7a0c22]' : ''
              }`}
              style={{
                fontVariationSettings: wishlistCount > 0 ? "'FILL' 1" : "'FILL' 0"
              }}
            >
              favorite
            </span>
            {wishlistCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#7a0c22] ring-2 ring-[#fcf9f8]"></span>
            )}
          </button>

          <button
            aria-label="Profile"
            className="w-10 h-10 flex items-center justify-center pl-0.5 active:scale-95 transition-transform cursor-pointer"
            onClick={onOpenProfile}
          >
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover ring-1 ring-[#775a19]/40 hover:ring-[#550012] transition-all"
              src={PROFILE_AVATAR}
            />
          </button>
        </div>
      </div>
    </header>
  );
};
