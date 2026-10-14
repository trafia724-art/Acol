import React, { useState } from 'react';
import { Saree, STORY_WEAVES, CATEGORY_TYPES } from '../data/sarees';

interface HomeScreenProps {
  bestsellers: Saree[];
  onSelectSaree: (sareeId: string) => void;
  onAddToCart: (saree: Saree) => void;
  wishlistIds: Set<string>;
  onToggleWishlist: (saree: Saree) => void;
  onGoToCollection: (category?: string) => void;
  onShowToast: (msg: string) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  bestsellers,
  onSelectSaree,
  onAddToCart,
  wishlistIds,
  onToggleWishlist,
  onGoToCollection,
  onShowToast
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const [showArtisanStoryModal, setShowArtisanStoryModal] = useState(false);
  const [selectedStoryBubble, setSelectedStoryBubble] = useState<string | null>(null);

  const heroSlides = [
    {
      title: 'উৎসবের রাজকীয় সাজ',
      badge: 'উৎসব কালেকশন ২০২৫',
      description: 'সোনারগাঁওয়ে নিখুঁত দক্ষতায় তৈরি অরিজিনাল ঢাকাই জামদানির আভিজাত্য',
      category: 'ঢাকাই জামদানি'
    },
    {
      title: 'ব্রাইডাল কাতানের রূপকথা',
      badge: 'বিয়ে ও উৎসব ২০২৫',
      description: 'মিরপুর বেনারসি পল্লীর ঐতিহ্যবাহী স্বর্ণ জরি ও মীনাকারি কাতান',
      category: 'কাতান ও বেনারসি'
    },
    {
      title: 'প্রাকৃতিক তসর ও বালুচরি',
      badge: 'হেরিটেজ রেশম সিরিজ',
      description: 'খাঁটি চাঁপাইনবাবগঞ্জ রেশমে বোনা অমর পৌরাণিক নকশা',
      category: 'তসর ও মটকা'
    }
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onGoToCollection(searchQuery.trim());
      onShowToast(`"${searchQuery}" এর জন্য কালেকশন দেখাচ্ছে`);
    }
  };

  const handleVoiceSearch = () => {
    onShowToast('ভয়েস সার্চ সক্রিয় করা হচ্ছে... অনুগ্রহ করে কথা বলুন');
    setTimeout(() => {
      setSearchQuery('জামদানি শাড়ি');
      onShowToast('স্বীকৃত শব্দ: "জামদানি শাড়ি"');
    }, 1200);
  };

  const handleCameraSearch = () => {
    onShowToast('ক্যামেরা ভিজ্যুয়াল সার্চ সক্রিয় হচ্ছে...');
  };

  return (
    <div className="flex flex-col relative w-full pt-16 pb-28 bg-[#fcf9f8] min-h-screen">
      {/* Search & Visual Discovery Bar */}
      <section className="px-4 sm:px-6 pt-4 pb-2 max-w-2xl mx-auto w-full">
        <form
          onSubmit={handleSearchSubmit}
          className="relative flex items-center bg-[#f0eded] rounded-full px-4 py-2.5 shadow-sm border border-[#7a0c22]/10 focus-within:border-[#775a19] focus-within:bg-white transition-all"
        >
          <span className="material-symbols-outlined text-[#775a19] shrink-0 text-[22px]">
            search
          </span>
          <input
            className="w-full bg-transparent px-2.5 text-[13px] text-[#1b1b1c] placeholder:text-[#8b7171] focus:outline-none min-w-0 font-medium"
            placeholder="খুঁজুন জামদানি, কাতান, তসর সিল্ক..."
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="flex items-center gap-1 shrink-0">
            <button
              type="button"
              aria-label="ভয়েস সার্চ"
              className="w-8 h-8 flex items-center justify-center text-[#574142] hover:text-[#550012] transition-colors cursor-pointer"
              onClick={handleVoiceSearch}
            >
              <span className="material-symbols-outlined text-[20px]">mic</span>
            </button>
            <button
              type="button"
              aria-label="ক্যামেরা সার্চ"
              className="w-8 h-8 flex items-center justify-center text-[#574142] hover:text-[#550012] transition-colors cursor-pointer"
              onClick={handleCameraSearch}
            >
              <span className="material-symbols-outlined text-[20px]">photo_camera</span>
            </button>
          </div>
        </form>
      </section>

      {/* Story / Heritage Weave Bubbles */}
      <section className="pt-2 pb-4">
        <div className="flex gap-4 overflow-x-auto px-4 sm:px-6 no-scrollbar scroll-smooth">
          {STORY_WEAVES.map((bubble) => (
            <button
              key={bubble.id}
              onClick={() => {
                setSelectedStoryBubble(bubble.title);
                onGoToCollection(bubble.filterTag);
              }}
              className="flex flex-col items-center gap-1.5 shrink-0 group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr from-[#775a19] via-[#e9c176] to-[#550012] shadow-sm group-hover:scale-105 transition-transform">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#f6f3f2] p-0.5">
                  <img
                    className="w-full h-full rounded-full object-cover"
                    alt={bubble.title}
                    src={bubble.image}
                  />
                </div>
              </div>
              <span className="text-[11px] font-bold text-[#1b1b1c] group-hover:text-[#7a0c22] transition-colors whitespace-nowrap">
                {bubble.title}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Festive Hero Carousel Banner */}
      <section className="px-4 sm:px-6 pb-6 max-w-2xl mx-auto w-full">
        <div className="relative w-full rounded-2xl overflow-hidden bg-white shadow-md border border-[#7a0c22]/10">
          <div className="relative h-96 w-full">
            <div
              className="bg-cover bg-center w-full h-full transition-all duration-700"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJDqG55vvCh2bIlVfbDqsm-Ezh9S_KoLlHod-mMl2lEbxzHSN_MIlaDxUe27XgkHRlHx9Fww9fKgHEdkQztEgjm1nvV0Xwch13fCpisKLAmjbIKbKigIUJy21LLRW9TfjyTNQXE8NdxF4G_p_cxLQHK_oXOYxEI-Ijaku4H5nxSJdNKlbg8UXyOL4dwcpe-23MIvwI-53FtNWn3WSZsgikQTm9L9cPUs4yFXkVLfwdTGK1t_EB5WU')`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#550012] via-[#550012]/50 to-transparent"></div>
            </div>

            <div className="absolute bottom-0 inset-x-0 p-5 flex flex-col items-start gap-1.5 text-white">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#ffdea5]/90 backdrop-blur-sm text-[#261900] text-[10px] font-bold shadow-sm">
                <span className="material-symbols-outlined text-[14px]">stars</span>
                <span>{heroSlides[activeHeroIndex].badge}</span>
              </div>

              <h2 className="font-serif text-[28px] sm:text-[32px] leading-tight font-semibold tracking-tight drop-shadow-sm">
                {heroSlides[activeHeroIndex].title}
              </h2>

              <p className="text-[12px] sm:text-[13px] text-[#ffdada] leading-snug max-w-[300px]">
                {heroSlides[activeHeroIndex].description}
              </p>

              <div className="pt-2 flex items-center justify-between w-full">
                <button
                  onClick={() => onGoToCollection(heroSlides[activeHeroIndex].category)}
                  className="px-5 py-2.5 bg-[#7a0c22] text-white rounded-lg text-[13px] font-bold shadow-md hover:bg-[#550012] transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>কালেকশন দেখুন</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>

                <div className="flex items-center gap-1.5 pr-1">
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveHeroIndex(idx)}
                      className={`transition-all rounded-full ${
                        activeHeroIndex === idx
                          ? 'w-5 h-1.5 bg-[#ffdea5]'
                          : 'w-1.5 h-1.5 bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Grid (শাড়ির ধরন) */}
      <section className="px-4 sm:px-6 pb-6 max-w-2xl mx-auto w-full">
        <div className="flex items-center justify-between pb-3">
          <div>
            <h3 className="font-serif text-[20px] font-bold text-[#550012]">শাড়ির ধরন</h3>
            <p className="text-[12px] text-[#574142]">বাংলার ঐতিহ্যবাহী বুননরীতি</p>
          </div>
          <button
            onClick={() => onGoToCollection('সকল শাড়ি')}
            className="text-[12px] text-[#775a19] hover:text-[#550012] font-bold transition-colors flex items-center gap-0.5 cursor-pointer"
          >
            <span>সব দেখুন</span>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {CATEGORY_TYPES.map((cat, idx) => (
            <div
              key={idx}
              onClick={() => onGoToCollection(cat.categoryKey)}
              className="group relative rounded-xl overflow-hidden bg-[#f0eded] shadow-sm cursor-pointer border border-[#7a0c22]/10"
            >
              <div className="h-44 w-full">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  alt={cat.title}
                  src={cat.image}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#550012]/90 via-[#550012]/35 to-transparent flex flex-col justify-end p-3 text-white">
                <span className="text-[9px] text-[#e9c176] uppercase tracking-wider font-bold">
                  {cat.badge}
                </span>
                <h4 className="font-serif text-[18px] font-bold leading-tight mt-0.5">
                  {cat.title}
                </h4>
                <span className="text-[11px] opacity-85 mt-0.5">{cat.count}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trending / Best Sellers Section ('সেরা বিক্রি হওয়া শাড়ি') */}
      <section className="pb-6">
        <div className="px-4 sm:px-6 flex items-center justify-between pb-3 max-w-2xl mx-auto">
          <div>
            <div className="flex items-center gap-1.5 text-[#775a19]">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span className="text-[10px] uppercase tracking-wider font-bold">সর্বোচ্চ প্রশংসিত</span>
            </div>
            <h3 className="font-serif text-[20px] font-bold text-[#550012]">
              সেরা বিক্রি হওয়া শাড়ি
            </h3>
          </div>
          <button
            onClick={() => onGoToCollection('সকল শাড়ি')}
            className="text-[12px] text-[#775a19] hover:text-[#550012] font-bold transition-colors cursor-pointer"
          >
            সব দেখুন
          </button>
        </div>

        {/* Horizontal Product Scroll */}
        <div className="flex gap-4 overflow-x-auto px-4 sm:px-6 no-scrollbar pb-2">
          {bestsellers.map((saree) => {
            const isFav = wishlistIds.has(saree.id);
            return (
              <div
                key={saree.id}
                className="w-64 shrink-0 rounded-xl bg-white shadow-md border border-[#7a0c22]/10 overflow-hidden flex flex-col transition-all hover:shadow-lg"
              >
                <div
                  className="relative h-72 w-full bg-[#eae7e7] cursor-pointer"
                  onClick={() => onSelectSaree(saree.id)}
                >
                  <img
                    className="w-full h-full object-cover"
                    alt={saree.name}
                    src={saree.image}
                  />

                  {saree.discountBadge && (
                    <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-[#7a0c22] text-white text-[10px] font-bold shadow-sm">
                      {saree.discountBadge}
                    </div>
                  )}

                  <button
                    aria-label="সংরক্ষণ করুন"
                    className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/85 backdrop-blur-md flex items-center justify-center transition-transform hover:scale-110 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(saree);
                    }}
                  >
                    <span
                      className={`material-symbols-outlined text-[18px] ${
                        isFav ? 'text-[#7a0c22]' : 'text-[#574142]'
                      }`}
                      style={{ fontVariationSettings: isFav ? "'FILL' 1" : "'FILL' 0" }}
                    >
                      favorite
                    </span>
                  </button>

                  <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded bg-white/90 backdrop-blur-sm flex items-center gap-1 text-[#1b1b1c] shadow-xs">
                    <span
                      className="material-symbols-outlined text-[#775a19] text-[14px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span className="text-[11px] font-bold">{saree.rating}</span>
                    <span className="text-[10px] text-[#574142]">({saree.reviewCount}+)</span>
                  </div>
                </div>

                <div className="p-3.5 flex flex-col justify-between flex-1 gap-2">
                  <div
                    className="cursor-pointer"
                    onClick={() => onSelectSaree(saree.id)}
                  >
                    <span className="text-[10px] uppercase text-[#775a19] tracking-wider font-bold">
                      {saree.subCategory}
                    </span>
                    <h4 className="font-serif text-[17px] text-[#1b1b1c] leading-tight font-bold mt-0.5 line-clamp-1 hover:text-[#550012]">
                      {saree.name}
                    </h4>
                  </div>

                  <div className="flex items-baseline gap-2 pt-1">
                    <span className="text-[15px] font-bold text-[#550012]">
                      ৳{saree.price.toLocaleString('bn-BD')}
                    </span>
                    {saree.originalPrice && (
                      <span className="text-[12px] text-[#8b7171] line-through">
                        ৳{saree.originalPrice.toLocaleString('bn-BD')}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => onAddToCart(saree)}
                    className="w-full mt-1 py-2 bg-[#eae7e7] text-[#550012] hover:bg-[#7a0c22] hover:text-white rounded-lg text-[12px] font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                  >
                    <span className="material-symbols-outlined text-[16px]">shopping_bag</span>
                    <span>ব্যাগে যোগ করুন</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Artisan Craft Spotlight ('তাঁতশিল্পীদের গল্প') */}
      <section className="px-4 sm:px-6 pb-6 max-w-2xl mx-auto w-full">
        <div className="rounded-2xl overflow-hidden bg-[#3e1d1c] text-white shadow-lg border border-[#775a19]/30">
          <div className="relative h-48 w-full">
            <img
              className="w-full h-full object-cover"
              alt="Artisan Story"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgIJowKIS89WzDK0zSu4ebhQRprvAcIJy7oftPaTs5PqRB6WWvgkFYyHSRSZWt1RNE0yfSG4RFEl75HfC7DAwyX1eaQN19cKTPVoucEYkFtKtIcjUkPt9oilLmOIDTzWCBTK_M33p-8WtwQ4ova4qFpLc9X_jFoyIXFuKCN1osdIs5AVxcsZN12gufgYqY-x-igJllMfRW2zpYeBoK9hy3XhtBTGPCrVxw_8JCDercEdRpewXI8WY"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3e1d1c] via-[#3e1d1c]/40 to-transparent"></div>
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#fed488]/90 backdrop-blur-sm text-[#785a1a] text-[10px] font-bold flex items-center gap-1 shadow-xs">
              <span className="material-symbols-outlined text-[14px]">history_edu</span>
              <span>তাঁতশিল্পীদের সম্মাননা</span>
            </div>
          </div>

          <div className="p-4 flex flex-col gap-1.5">
            <h3 className="font-serif text-[20px] font-bold leading-snug">
              প্রজন্মের সুতোয় বোনা গল্প
            </h3>
            <p className="text-[13px] text-[#f1b9b7] leading-relaxed">
              নারায়ণগঞ্জের রূপগঞ্জ ও সোনারগাঁওয়ে আমাদের প্রতিটি তাঁতি পরিবার ৩ থেকে ৫ মাস সময় নিয়ে একটি খাঁটি জামদানি নিখুঁত হাতে রূপ দেন। তাঁদের এই অমূল্য শিল্পকে বিশ্বমঞ্চে তুলে ধরতে ‘আঁচল’ প্রতিশ্রুতিবদ্ধ।
            </p>
            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => setShowArtisanStoryModal(true)}
                className="text-[#ffdea5] hover:underline text-[13px] font-bold flex items-center gap-1 cursor-pointer"
              >
                <span>ইতিহাস ও তাঁতিদের গল্প জানুন</span>
                <span className="material-symbols-outlined text-[18px]">arrow_right_alt</span>
              </button>
              <button
                onClick={() => setShowArtisanStoryModal(true)}
                className="w-9 h-9 rounded-full bg-[#583231] flex items-center justify-center text-[#ffdea5] hover:scale-105 transition-transform cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">play_arrow</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Special Festival Offer Banner */}
      <section className="px-4 sm:px-6 pb-6 max-w-2xl mx-auto w-full">
        <div className="rounded-2xl p-4 bg-gradient-to-r from-[#7a0c22] via-[#550012] to-[#7a0c22] text-white shadow-md relative overflow-hidden border border-[#ffdea5]/20">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-[#775a19]/25 pointer-events-none blur-xl"></div>
          <div className="relative z-10 flex flex-col gap-1.5">
            <div className="flex items-center gap-1.5 text-[#ffdea5]">
              <span className="material-symbols-outlined text-[20px]">celebration</span>
              <span className="text-[10px] uppercase tracking-widest font-bold">
                সীমিত সময়ের উৎসব অফার
              </span>
            </div>
            <h4 className="font-serif text-[20px] font-bold leading-snug">
              নববর্ষ ও বিয়ের এক্সক্লুসিভ অফার
            </h4>
            <p className="text-[12px] text-[#ffdada] leading-normal">
              যেকোনো শাড়ির অর্ডারে পাচ্ছেন সমগ্র বাংলাদেশে ফ্রি হোম ডেলিভারি এবং আঁচল সিগনেচার হ্যান্ডক্রাফটেড সুগন্ধি ভেলভেট গিফট বক্স।
            </p>
            <div className="pt-2 flex items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-white/15 backdrop-blur-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-[#ffdea5] text-[18px]">
                  local_shipping
                </span>
                <span className="text-[11px] text-white font-bold">ফ্রি ডেলিভারি</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-white/15 backdrop-blur-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-[#ffdea5] text-[18px]">
                  featured_seasonal_and_gifts
                </span>
                <span className="text-[11px] text-white font-bold">উপহার বক্স</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authenticity Assurance Strip */}
      <section className="px-4 sm:px-6 pb-6 max-w-2xl mx-auto w-full">
        <div className="grid grid-cols-3 gap-1 py-3 px-2 rounded-xl bg-[#f0eded] text-center border border-[#7a0c22]/10">
          <div className="flex flex-col items-center gap-1 p-1">
            <span className="material-symbols-outlined text-[#550012] text-[22px]">
              verified_user
            </span>
            <span className="text-[11px] font-bold text-[#1b1b1c]">১০০% আসল জরি</span>
            <span className="text-[10px] text-[#574142]">পবিত্র রূপোর সুতো</span>
          </div>
          <div className="flex flex-col items-center gap-1 p-1 border-x border-[#debfbf]">
            <span className="material-symbols-outlined text-[#550012] text-[22px]">
              handyman
            </span>
            <span className="text-[11px] font-bold text-[#1b1b1c]">খাঁটি তাঁতশিল্প</span>
            <span className="text-[10px] text-[#574142]">সোনারগাঁও ও টাঙ্গাইল</span>
          </div>
          <div className="flex flex-col items-center gap-1 p-1">
            <span className="material-symbols-outlined text-[#550012] text-[22px]">
              published_with_changes
            </span>
            <span className="text-[11px] font-bold text-[#1b1b1c]">সহজ রিটার্ন</span>
            <span className="text-[10px] text-[#574142]">৭ দিনের নিশ্চয়তা</span>
          </div>
        </div>
      </section>

      {/* Artisan Story Detail Modal */}
      {showArtisanStoryModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-5 shadow-2xl border border-[#7a0c22]/20 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-[#7a0c22]/10 mb-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#550012]">history_edu</span>
                <h3 className="font-serif text-[18px] font-bold text-[#550012]">
                  তাঁতশিল্পের গৌরবগাঁথা
                </h3>
              </div>
              <button
                onClick={() => setShowArtisanStoryModal(false)}
                className="text-[#8b7171] hover:text-black cursor-pointer"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="space-y-3 text-[13px] text-[#1b1b1c] leading-relaxed">
              <p>
                ঢাকাই জামদানি কেবল একটি শাড়ি নয়; এটি শতাব্দীর পর শতাব্দী ধরে টিকে থাকা এক অমূল্য শিল্পসাধনা। ইউনেস্কো স্বীকৃত এই শিল্পে কোনো ড্রাফট বা প্রিন্ট ব্যবহার করা হয় না। তাঁতিরা তাঁদের স্মৃতি ও কল্পনা থেকে কাঠের নালি দিয়ে সরাসরি সুতোর ফাঁকে ফাঁকে ফুটিয়ে তোলেন পদ্ম, করলা, জুঁই ও ময়ূরের নকশা।
              </p>
              <div className="p-3 bg-[#f6f3f2] rounded-xl border-l-4 border-[#7a0c22]">
                <p className="font-serif italic text-[#550012] font-semibold">
                  "একটি নিখুঁত ঢাকাই জামদানি বুনতে দু’জন তাঁতির টানা দুই থেকে পাঁচ মাস সময় লাগে। প্রতিটি সুতো যেন আমাদের পরিবারের আত্মার প্রতিচ্ছবি।"
                </p>
                <span className="block mt-1 text-[11px] text-[#775a19] font-bold">
                  — ওস্তাদ রফিকুল ইসলাম, প্রধান কারিগর, রূপগঞ্জ
                </span>
              </div>
              <p>
                ‘আঁচল’ সরাসরি তাঁতিদের সাথে কাজ করে মধ্যস্বত্বভোগীদের অবসান ঘটিয়েছে এবং প্রতিটি শাড়ির ন্যায্যমূল্য সরাসরি তাঁতি পরিবারের কাছে পৌঁছে দেয়।
              </p>
            </div>

            <button
              onClick={() => setShowArtisanStoryModal(false)}
              className="mt-5 w-full py-2.5 bg-[#7a0c22] text-white font-bold text-[13px] rounded-lg cursor-pointer hover:bg-[#550012]"
            >
              ধন্যবাদ, বুঝেছি
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
