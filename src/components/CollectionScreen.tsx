import React, { useState, useMemo } from 'react';
import { Saree } from '../data/sarees';

interface CollectionScreenProps {
  sarees: Saree[];
  onSelectSaree: (sareeId: string) => void;
  onAddToCart: (saree: Saree) => void;
  wishlistIds: Set<string>;
  onToggleWishlist: (saree: Saree) => void;
  onShowToast: (msg: string) => void;
  initialCategory?: string;
}

export const CollectionScreen: React.FC<CollectionScreenProps> = ({
  sarees,
  onSelectSaree,
  onAddToCart,
  wishlistIds,
  onToggleWishlist,
  onShowToast,
  initialCategory = 'সকল শাড়ি'
}) => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortOption, setSortOption] = useState('জনপ্রিয়তা');
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);
  const [selectedColorFilter, setSelectedColorFilter] = useState<string | null>(null);

  // Sync initial category when it changes from outside
  React.useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  // Filters state inside drawer
  const [activeOccasions, setActiveOccasions] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState(60000);
  const [selectedFabrics, setSelectedFabrics] = useState<string[]>([]);

  const categories = [
    'সকল শাড়ি',
    'শিফন ও জর্জেট',
    'ঢাকাই জামদানি',
    'কাতান ও বেনারসি',
    'তসর ও মটকা',
    'পিওর সিল্ক',
    'খাদি ও সুতি'
  ];

  // Bengali number formatting helper
  const toBnNum = (n: number): string => {
    const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return n.toString().split('').map(d => bnDigits[parseInt(d, 10)] ?? d).join('');
  };

  // Count helper for category pills
  const getCategoryCount = (cat: string) => {
    if (cat === 'সকল শাড়ি') return sarees.length;
    return sarees.filter(
      (s) =>
        s.category === cat ||
        s.subCategory === cat ||
        s.category.includes(cat) ||
        s.name.includes(cat)
    ).length;
  };

  // Quick color swatches with rich diversity
  const colorSwatches = [
    { name: 'ল্যাভেন্ডার', hex: '#b39ddb' },
    { name: 'রুবী ওয়াইন', hex: '#5b1328' },
    { name: 'পুদিনা সবুজ', hex: '#81c784' },
    { name: 'রয়েল মেরুন', hex: '#7a0c22' },
    { name: 'ময়ূরকণ্ঠী নীল', hex: '#004d40' },
    { name: 'বাসন্তী হলুদ', hex: '#fbc02d' },
    { name: 'গোলাপি', hex: '#f48fb1' },
    { name: 'সোনালী', hex: '#d4af37' }
  ];

  // Sort and filter computation
  const filteredSarees = useMemo(() => {
    let list = [...sarees];

    // Category filter
    if (selectedCategory !== 'সকল শাড়ি') {
      list = list.filter(
        (s) =>
          s.category === selectedCategory ||
          s.subCategory === selectedCategory ||
          s.category.includes(selectedCategory) ||
          s.name.includes(selectedCategory)
      );
    }

    // Quick color swatch filter
    if (selectedColorFilter) {
      list = list.filter(
        (s) =>
          s.colorName.includes(selectedColorFilter) ||
          s.colors.some((c) => c.name.includes(selectedColorFilter)) ||
          s.name.includes(selectedColorFilter)
      );
    }

    // Fabric filter (if active)
    if (selectedFabrics.length > 0) {
      list = list.filter((s) =>
        selectedFabrics.some(
          (f) =>
            s.category.includes(f) ||
            s.subCategory.includes(f) ||
            s.fabric.includes(f)
        )
      );
    }

    // Occasion filter (if active)
    if (activeOccasions.length > 0) {
      list = list.filter((s) => activeOccasions.includes(s.occasion));
    }

    // Max price filter
    list = list.filter((s) => s.price <= maxPrice);

    // Sorting
    if (sortOption === 'দাম: কম থেকে বেশি') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'দাম: বেশি থেকে কম') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'নতুন আগমন') {
      list.reverse();
    } else {
      // জনপ্রিয়তা (Rating & review count)
      list.sort((a, b) => b.rating * b.reviewCount - a.rating * a.reviewCount);
    }

    return list;
  }, [sarees, selectedCategory, selectedColorFilter, activeOccasions, maxPrice, sortOption]);

  const handleSelectSort = (label: string) => {
    setSortOption(label);
    setShowSortMenu(false);
    onShowToast(`${label} অনুযায়ী সাজানো হয়েছে`);
  };

  const handleSwatchClick = (name: string) => {
    if (selectedColorFilter === name) {
      setSelectedColorFilter(null);
      onShowToast('রং ফিল্টার সরানো হয়েছে');
    } else {
      setSelectedColorFilter(name);
      onShowToast(`${name} রঙের শাড়ি ফিল্টার করা হয়েছে`);
    }
  };

  const handleClearFilters = () => {
    setSelectedCategory('সকল শাড়ি');
    setSelectedColorFilter(null);
    setActiveOccasions([]);
    setMaxPrice(60000);
    setSelectedFabrics([]);
    onShowToast('সকল ফিল্টার রিসেট করা হয়েছে');
  };

  return (
    <div className="flex flex-col relative w-full pt-16 pb-28 bg-[#fcf9f8] min-h-screen">
      <div className="flex flex-col w-full pb-8">
        {/* Title and Sort Bar */}
        <div className="w-full px-4 sm:px-6 pt-3 pb-2 flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <h1 className="font-serif text-[22px] font-semibold text-[#550012]">
                {selectedCategory === 'সকল শাড়ি' ? 'সকল কালেকশন' : `${selectedCategory} কালেকশন`}
              </h1>
              <span className="text-[12px] text-[#775a19] tracking-wider font-semibold">
                ({toBnNum(filteredSarees.length)}টি শাড়ি)
              </span>
            </div>

            {/* Quick Sort Trigger Pill */}
            <div className="relative">
              <button
                className="h-8 px-3 rounded-full bg-[#f6f3f2] text-[#550012] flex items-center gap-1.5 shadow-sm active:scale-95 transition-transform border border-[#7a0c22]/10 cursor-pointer"
                onClick={() => setShowSortMenu(!showSortMenu)}
              >
                <span className="material-symbols-outlined text-[16px] text-[#775a19]">
                  swap_vert
                </span>
                <span className="text-[11px] font-bold">{sortOption}</span>
                <span className="material-symbols-outlined text-[14px]">expand_more</span>
              </button>

              {/* Sort Dropdown Menu */}
              {showSortMenu && (
                <div className="absolute right-0 mt-1.5 w-48 bg-white rounded-xl shadow-xl z-30 p-1.5 flex flex-col gap-0.5 border border-[#7a0c22]/15">
                  {[
                    'জনপ্রিয়তা',
                    'দাম: কম থেকে বেশি',
                    'দাম: বেশি থেকে কম',
                    'নতুন আগমন'
                  ].map((option) => (
                    <button
                      key={option}
                      className={`w-full text-left px-3 py-2 rounded-lg text-[12px] flex items-center justify-between transition-colors cursor-pointer ${
                        sortOption === option
                          ? 'text-[#550012] bg-[#f6f3f2] font-bold'
                          : 'text-[#574142] hover:bg-[#f6f3f2]'
                      }`}
                      onClick={() => handleSelectSort(option)}
                    >
                      <span>{option}</span>
                      {sortOption === option && (
                        <span className="material-symbols-outlined text-[16px] text-[#550012]">
                          check
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <p className="text-[13px] text-[#574142] italic">
            {selectedCategory === 'সকল শাড়ি'
              ? 'বাংলার ঐতিহ্যবাহী তাঁতের খাঁটি সম্ভার ও রাজকীয় নকশা'
              : `প্রতিটি কালেকশনে রয়েছে সর্বনিম্ন ১০টি আকর্ষণীয় ও খাঁটি নকশার মাস্টারপিস`}
          </p>
        </div>

        {/* Horizontal Category Filter Pills (Scrollable with Counts) */}
        <div className="w-full overflow-x-auto no-scrollbar py-2 px-4 sm:px-6 flex items-center gap-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            const count = getCategoryCount(cat);
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`shrink-0 px-3.5 py-1.5 rounded-full text-[12px] font-semibold transition-all active:scale-95 cursor-pointer shadow-sm flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#7a0c22] text-white shadow-md'
                    : 'bg-[#f6f3f2] text-[#1b1b1c] hover:text-[#550012] border border-black/5 hover:bg-[#f0eded]'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isSelected
                      ? 'bg-[#ffdada] text-[#550012]'
                      : 'bg-[#e5dfdd] text-[#574142]'
                  }`}
                >
                  {toBnNum(count)}
                </span>
              </button>
            );
          })}
        </div>

        {/* Micro Filter Strip & Color Swatches */}
        <div className="px-4 sm:px-6 py-2.5 flex items-center justify-between gap-2">
          {/* Filter Modal Trigger */}
          <button
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f0eded] text-[#550012] text-[11px] uppercase tracking-wider font-bold shadow-sm active:scale-95 transition-transform border border-[#7a0c22]/10 cursor-pointer"
            onClick={() => setShowFilterDrawer(true)}
          >
            <span className="material-symbols-outlined text-[18px] text-[#775a19]">tune</span>
            <span>ফিল্টার</span>
            <span className="w-4 h-4 rounded-full bg-[#7a0c22] text-white text-[10px] flex items-center justify-center font-bold">
              ৩
            </span>
          </button>

          {/* Royal Color Swatch Quick Strip */}
          <div className="flex items-center gap-1.5 bg-[#f6f3f2] px-2.5 py-1 rounded-full shadow-sm border border-black/5">
            <span className="text-[10px] text-[#574142] pl-0.5 font-bold">রং:</span>
            {colorSwatches.map((swatch) => {
              const isSelected = selectedColorFilter === swatch.name;
              return (
                <button
                  key={swatch.name}
                  className={`w-5 h-5 rounded-full shadow-sm transform transition-all cursor-pointer ${
                    isSelected ? 'ring-2 ring-[#7a0c22] scale-125' : 'hover:scale-110 active:scale-125'
                  }`}
                  style={{ backgroundColor: swatch.hex }}
                  onClick={() => handleSwatchClick(swatch.name)}
                  title={swatch.name}
                />
              );
            })}
          </div>
        </div>

        {/* Applied Filter Tags Display */}
        <div className="px-4 sm:px-6 pb-2 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          <span className="text-[10px] text-[#775a19] shrink-0 tracking-widest uppercase font-bold">
            সক্রিয়:
          </span>

          {activeOccasions.map((occ) => (
            <span
              key={occ}
              className="shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#fed488] text-[#785a1a] text-[11px] font-bold"
            >
              {occ}
              <span
                className="material-symbols-outlined text-[13px] cursor-pointer hover:text-black"
                onClick={() =>
                  setActiveOccasions(activeOccasions.filter((o) => o !== occ))
                }
              >
                close
              </span>
            </span>
          ))}

          {maxPrice < 60000 && (
            <span className="shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#fed488] text-[#785a1a] text-[11px] font-bold">
              ৳৩,০০০ - ৳{maxPrice.toLocaleString('bn-BD')}
              <span
                className="material-symbols-outlined text-[13px] cursor-pointer hover:text-black"
                onClick={() => setMaxPrice(60000)}
              >
                close
              </span>
            </span>
          )}

          {selectedColorFilter && (
            <span className="shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#ffdada] text-[#550012] text-[11px] font-bold">
              {selectedColorFilter}
              <span
                className="material-symbols-outlined text-[13px] cursor-pointer hover:text-black"
                onClick={() => setSelectedColorFilter(null)}
              >
                close
              </span>
            </span>
          )}

          <button
            onClick={handleClearFilters}
            className="shrink-0 text-[#550012] text-[11px] underline ml-1 font-bold cursor-pointer"
          >
            মুছে ফেলুন
          </button>
        </div>

        {/* Saree Grid (2-Column Regal Handloom Layout) */}
        <div className="px-4 sm:px-6 grid grid-cols-2 gap-3 pt-1">
          {filteredSarees.length === 0 ? (
            <div className="col-span-2 py-12 text-center bg-white rounded-xl border border-black/5 p-6">
              <span className="material-symbols-outlined text-[36px] text-[#8b7171]">filter_list_off</span>
              <p className="font-serif text-[18px] text-[#550012] mt-2 font-bold">কোনো শাড়ি পাওয়া যায়নি</p>
              <p className="text-[13px] text-[#574142] mt-1">দয়া করে অন্যান্য ফিল্টার বা ক্যাটাগরি বেছে নিন।</p>
              <button
                onClick={handleClearFilters}
                className="mt-3 px-4 py-2 bg-[#7a0c22] text-white rounded-lg text-[12px] font-bold"
              >
                ফিল্টার রিসেট করুন
              </button>
            </div>
          ) : (
            filteredSarees.map((saree) => {
              const isFav = wishlistIds.has(saree.id);
              return (
                <div
                  key={saree.id}
                  className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-[#7a0c22]/10 relative"
                >
                  {/* Image Showcase */}
                  <div
                    className="relative w-full aspect-[3/4] bg-[#eae7e7] overflow-hidden cursor-pointer"
                    onClick={() => onSelectSaree(saree.id)}
                  >
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      alt={saree.name}
                      src={saree.image}
                    />

                    {/* Badge */}
                    {saree.badge && (
                      <div
                        className={`absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold tracking-wide shadow-sm backdrop-blur-sm ${
                          saree.badgeType === 'exclusive'
                            ? 'bg-[#550012] text-white'
                            : saree.badgeType === 'secondary'
                            ? 'bg-[#fed488] text-[#785a1a]'
                            : 'bg-white/90 text-[#550012]'
                        }`}
                      >
                        {saree.badge}
                      </div>
                    )}

                    {/* Wishlist Button */}
                    <button
                      aria-label="Add to Wishlist"
                      className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transition-colors shadow-sm active:scale-90 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist(saree);
                      }}
                    >
                      <span
                        className={`material-symbols-outlined text-[17px] ${
                          isFav ? 'text-[#7a0c22]' : 'text-[#574142]'
                        }`}
                        style={{
                          fontVariationSettings: isFav ? "'FILL' 1" : "'FILL' 0"
                        }}
                      >
                        favorite
                      </span>
                    </button>

                    {/* Purity Mark Chip */}
                    <div className="absolute bottom-2 left-2 px-1.5 py-0.5 rounded bg-white/85 backdrop-blur-sm flex items-center gap-0.5 text-[#775a19] shadow-sm">
                      <span className="material-symbols-outlined text-[12px] text-[#775a19]">
                        verified
                      </span>
                      <span className="text-[9px] font-bold tracking-tight">
                        {saree.purityMark}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-2.5 flex flex-col flex-1 justify-between">
                    <div
                      className="flex flex-col cursor-pointer"
                      onClick={() => onSelectSaree(saree.id)}
                    >
                      <div className="flex items-center gap-1 mb-1">
                        <span
                          className="material-symbols-outlined text-[13px] text-[#775a19]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                        <span className="text-[11px] text-[#1b1b1c] font-bold">
                          {saree.rating}
                        </span>
                        <span className="text-[10px] text-[#8b7171]">({saree.reviewCount})</span>
                      </div>
                      <h2 className="font-serif text-[15px] sm:text-[16px] leading-tight text-[#550012] font-bold line-clamp-1 mb-0.5 group-hover:text-[#7a0c22]">
                        {saree.name}
                      </h2>
                      <p className="text-[11px] leading-tight text-[#574142] line-clamp-1 mb-2">
                        {saree.subtitle}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 pt-1">
                      <div className="flex items-baseline gap-1.5 flex-wrap">
                        <span className="font-serif text-[16px] sm:text-[17px] font-bold text-[#550012] leading-none">
                          ৳{saree.price.toLocaleString('bn-BD')}
                        </span>
                        {saree.originalPrice && (
                          <span className="text-[11px] text-[#8b7171] line-through leading-none">
                            ৳{saree.originalPrice.toLocaleString('bn-BD')}
                          </span>
                        )}
                      </div>

                      {/* Quick Add to Bag */}
                      <button
                        className="w-full py-1.5 rounded-lg bg-[#7a0c22] text-white text-[11px] font-bold tracking-wider flex items-center justify-center gap-1 active:scale-95 transition-all shadow-sm hover:bg-[#550012] cursor-pointer"
                        onClick={() => onAddToCart(saree)}
                      >
                        <span className="material-symbols-outlined text-[15px]">shopping_bag</span>
                        <span>ব্যাগে যোগ করুন</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Handloom Assurance Strip */}
        <div className="mx-4 sm:px-6 mt-6 p-4 rounded-xl bg-[#f6f3f2] flex items-center gap-3 shadow-sm border border-[#7a0c22]/10">
          <div className="w-10 h-10 rounded-full bg-[#ffdea5] flex items-center justify-center text-[#261900] shrink-0">
            <span className="material-symbols-outlined text-[24px]">workspace_premium</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-[16px] font-bold text-[#550012] leading-tight">
              আঁচল শতভাগ সত্যতা নিশ্চয়তা
            </span>
            <span className="text-[12px] text-[#574142] mt-0.5">
              প্রত্যেকটি শাড়ি নিজস্ব তাঁতিদের দ্বারা নিপুণ হাতে বোনা ও সরকার অনুমোদিত সিল্ক মার্ক যুক্ত।
            </span>
          </div>
        </div>
      </div>

      {/* Filter & Refinement Modal Drawer */}
      {showFilterDrawer && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex flex-col justify-end">
          <div className="w-full max-h-[85vh] bg-white rounded-t-2xl flex flex-col overflow-hidden shadow-2xl max-w-2xl mx-auto">
            {/* Drawer Header */}
            <div className="px-5 py-4 flex items-center justify-between bg-[#f6f3f2] border-b border-[#7a0c22]/10">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#550012] text-[22px]">tune</span>
                <span className="font-serif text-[20px] font-bold text-[#550012]">
                  ফিল্টার ও পছন্দসমূহ
                </span>
              </div>
              <button
                className="w-8 h-8 rounded-full bg-[#f0eded] flex items-center justify-center text-[#574142] hover:text-[#550012] cursor-pointer"
                onClick={() => setShowFilterDrawer(false)}
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {/* Drawer Content */}
            <div className="p-5 overflow-y-auto space-y-6">
              {/* Fabric Filter */}
              <div className="flex flex-col gap-2.5">
                <label className="text-[13px] font-bold text-[#550012]">ফেব্রিক ও উপাদান</label>
                <div className="flex flex-wrap gap-2">
                  {[
                    'শিফন ও জর্জেট',
                    'ঢাকাই জামদানি',
                    'কাতান ও বেনারসি',
                    'তসর ও মটকা',
                    'খাদি কটন',
                    'স্বর্ণচুরি সিল্ক',
                    'পিওর শিফন',
                    'পিওর জর্জেট'
                  ].map((fabric) => {
                    const isSelected = selectedFabrics.includes(fabric);
                    return (
                      <button
                        key={fabric}
                        onClick={() => {
                          if (isSelected) {
                            setSelectedFabrics(selectedFabrics.filter((f) => f !== fabric));
                          } else {
                            setSelectedFabrics([...selectedFabrics, fabric]);
                          }
                        }}
                        className={`px-3 py-1.5 rounded-lg text-[12px] font-semibold cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-[#7a0c22] text-white shadow-sm'
                            : 'bg-[#f0eded] text-[#1b1b1c] hover:bg-[#e5e2e1]'
                        }`}
                      >
                        {fabric}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Occasion Filter */}
              <div className="flex flex-col gap-2.5">
                <label className="text-[13px] font-bold text-[#550012]">উপলক্ষ</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: 'বিয়ে ও উৎসব', icon: 'celebration' },
                    { label: 'সান্ধ্য অনুষ্ঠান', icon: 'nightlife' },
                    { label: 'দৈনন্দিন পরিধান', icon: 'wb_sunny' }
                  ].map((occ) => {
                    const isSelected = activeOccasions.includes(occ.label);
                    return (
                      <div
                        key={occ.label}
                        onClick={() => {
                          if (isSelected) {
                            setActiveOccasions(activeOccasions.filter((o) => o !== occ.label));
                          } else {
                            setActiveOccasions([...activeOccasions, occ.label]);
                          }
                        }}
                        className={`p-2.5 rounded-xl flex flex-col items-center gap-1 cursor-pointer transition-all border ${
                          isSelected
                            ? 'bg-[#fed488] text-[#785a1a] border-[#fed488]'
                            : 'bg-[#f0eded] text-[#1b1b1c] border-transparent'
                        }`}
                      >
                        <span className="material-symbols-outlined text-[20px]">{occ.icon}</span>
                        <span className="text-[11px] font-bold text-center leading-tight">
                          {occ.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Price Range Slider */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label className="text-[13px] font-bold text-[#550012]">দামের পরিসীমা</label>
                  <span className="text-[13px] font-bold text-[#775a19]">
                    ৳৩,০০০ - ৳{maxPrice.toLocaleString('bn-BD')}
                  </span>
                </div>
                <input
                  type="range"
                  min="3000"
                  max="60000"
                  step="1000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-[#7a0c22] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-[#8b7171]">
                  <span>৳৩,০০০</span>
                  <span>৳৫০,০০০+</span>
                </div>
              </div>

              {/* Color Palette Selection */}
              <div className="flex flex-col gap-2.5">
                <label className="text-[13px] font-bold text-[#550012]">রং পছন্দ</label>
                <div className="flex items-center gap-3 flex-wrap">
                  {[
                    { name: 'ল্যাভেন্ডার', hex: '#b39ddb' },
                    { name: 'রুবী ওয়াইন', hex: '#5b1328' },
                    { name: 'পুদিনা সবুজ', hex: '#81c784' },
                    { name: 'মিডনাইট নেভি', hex: '#0a1a36' },
                    { name: 'রয়েল মেরুন', hex: '#7a0c22' },
                    { name: 'ময়ূরকণ্ঠী নীল', hex: '#004d40' },
                    { name: 'সোনালী', hex: '#d4af37' },
                    { name: 'বাসন্তী হলুদ', hex: '#fbc02d' },
                    { name: 'গোলাপি', hex: '#f48fb1' },
                    { name: 'আইভরি সাদা', hex: '#ffffff' }
                  ].map((color) => {
                    const isSelected = selectedColorFilter === color.name;
                    return (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColorFilter(isSelected ? null : color.name)}
                        className={`w-8 h-8 rounded-full shadow-sm flex items-center justify-center cursor-pointer transition-transform ${
                          isSelected ? 'ring-2 ring-offset-2 ring-[#550012] scale-110' : ''
                        } ${color.hex === '#ffffff' ? 'border border-neutral-300' : ''}`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      >
                        {isSelected && (
                          <span
                            className={`material-symbols-outlined text-[16px] ${
                              color.hex === '#ffffff' ? 'text-black' : 'text-white'
                            }`}
                          >
                            check
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Drawer Footer Action Bar */}
            <div className="p-4 bg-[#f6f3f2] flex items-center gap-3 border-t border-[#7a0c22]/10">
              <button
                className="flex-1 py-2.5 rounded-lg bg-[#f0eded] text-[#550012] text-[13px] font-bold hover:bg-[#e5e2e1] cursor-pointer"
                onClick={handleClearFilters}
              >
                রিসেট করুন
              </button>
              <button
                className="flex-1 py-2.5 rounded-lg bg-[#7a0c22] text-white text-[13px] font-bold shadow-md active:scale-95 transition-transform hover:bg-[#550012] cursor-pointer"
                onClick={() => {
                  setShowFilterDrawer(false);
                  onShowToast('ফিল্টার প্রয়োগ করা হয়েছে');
                }}
              >
                ফিল্টার প্রয়োগ করুন
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
