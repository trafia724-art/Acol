import React from 'react';

export type TabType = 'home' | 'catalog' | 'bag' | 'profile';

interface BottomNavProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  cartCount: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  onTabChange,
  cartCount
}) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 pb-safe bg-[#fcf9f8]/92 backdrop-blur-xl border-t border-[#7a0c22]/10 shadow-[0_-8px_24px_-4px_rgba(122,12,34,0.06)]">
      <div className="max-w-2xl mx-auto flex justify-around items-center h-16 px-3">
        {/* Home */}
        <button
          onClick={() => onTabChange('home')}
          className={`flex flex-col items-center justify-center gap-0.5 min-w-[56px] h-12 transition-colors group cursor-pointer ${
            activeTab === 'home'
              ? 'text-[#7a0c22] font-semibold'
              : 'text-[#574142] hover:text-[#550012]'
          }`}
        >
          <span
            className={`material-symbols-outlined text-[24px] ${
              activeTab === 'home' ? 'text-[#7a0c22]' : 'text-[#574142]'
            }`}
            style={{
              fontVariationSettings: activeTab === 'home' ? "'FILL' 1" : "'FILL' 0"
            }}
          >
            home
          </span>
          <span className="text-[10px] leading-none tracking-tight">হোম</span>
        </button>

        {/* Collection */}
        <button
          onClick={() => onTabChange('catalog')}
          className={`flex flex-col items-center justify-center gap-0.5 min-w-[56px] h-12 transition-colors group cursor-pointer ${
            activeTab === 'catalog'
              ? 'text-[#7a0c22] font-semibold'
              : 'text-[#574142] hover:text-[#550012]'
          }`}
        >
          <span
            className={`material-symbols-outlined text-[24px] ${
              activeTab === 'catalog' ? 'text-[#7a0c22]' : 'text-[#574142]'
            }`}
            style={{
              fontVariationSettings: activeTab === 'catalog' ? "'FILL' 1" : "'FILL' 0"
            }}
          >
            auto_awesome
          </span>
          <span className="text-[10px] leading-none tracking-tight">কালেকশন</span>
        </button>

        {/* Bag */}
        <button
          onClick={() => onTabChange('bag')}
          className={`flex flex-col items-center justify-center gap-0.5 min-w-[56px] h-12 transition-colors group relative cursor-pointer ${
            activeTab === 'bag'
              ? 'text-[#7a0c22] font-semibold'
              : 'text-[#574142] hover:text-[#550012]'
          }`}
        >
          <div className="relative flex items-center justify-center">
            <span
              className={`material-symbols-outlined text-[24px] ${
                activeTab === 'bag' ? 'text-[#7a0c22]' : 'text-[#574142]'
              }`}
              style={{
                fontVariationSettings: activeTab === 'bag' ? "'FILL' 1" : "'FILL' 0"
              }}
            >
              shopping_bag
            </span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2.5 min-w-[16px] h-4 px-1 rounded-full bg-[#7a0c22] text-[#ffffff] text-[10px] font-bold leading-4 flex items-center justify-center ring-1 ring-[#fcf9f8]">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] leading-none tracking-tight">ব্যাগ</span>
        </button>

        {/* Profile */}
        <button
          onClick={() => onTabChange('profile')}
          className={`flex flex-col items-center justify-center gap-0.5 min-w-[56px] h-12 transition-colors group cursor-pointer ${
            activeTab === 'profile'
              ? 'text-[#7a0c22] font-semibold'
              : 'text-[#574142] hover:text-[#550012]'
          }`}
        >
          <span
            className={`material-symbols-outlined text-[24px] ${
              activeTab === 'profile' ? 'text-[#7a0c22]' : 'text-[#574142]'
            }`}
            style={{
              fontVariationSettings: activeTab === 'profile' ? "'FILL' 1" : "'FILL' 0"
            }}
          >
            person
          </span>
          <span className="text-[10px] leading-none tracking-tight">প্রোফাইল</span>
        </button>
      </div>
    </nav>
  );
};
