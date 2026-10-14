import React, { useState } from 'react';
import { Saree, ZOOM_MODAL_IMAGE } from '../data/sarees';

interface ProductDetailScreenProps {
  saree: Saree;
  onBack: () => void;
  onAddToCart: (saree: Saree, selectedColor: string, withBlousePiece: boolean) => void;
  onBuyNow: (saree: Saree, selectedColor: string, withBlousePiece: boolean) => void;
  isWishlisted: boolean;
  onToggleWishlist: (saree: Saree) => void;
  onShowToast: (msg: string) => void;
}

export const ProductDetailScreen: React.FC<ProductDetailScreenProps> = ({
  saree,
  onAddToCart,
  onBuyNow,
  isWishlisted,
  onToggleWishlist,
  onShowToast
}) => {
  const [activeThumbIndex, setActiveThumbIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(saree.colors[0]?.name || 'নীলাম্বরী নীল');
  const [withBlousePiece, setWithBlousePiece] = useState(true);
  const [showZoomModal, setShowZoomModal] = useState(false);
  const [imgFading, setImgFading] = useState(false);

  const bngNumerals = ['১', '২', '৩', '৪', '৫', '৬'];

  // Current display image based on selected gallery or main
  const currentImage = saree.galleryImages[activeThumbIndex]?.url || saree.image;

  // Price adjusted based on blouse piece
  const effectivePrice = withBlousePiece ? saree.price : saree.price - 1000;
  const effectiveOriginalPrice = saree.originalPrice
    ? withBlousePiece
      ? saree.originalPrice
      : saree.originalPrice - 1000
    : undefined;

  const handleSelectGallery = (index: number) => {
    setImgFading(true);
    setActiveThumbIndex(index);
    setTimeout(() => {
      setImgFading(false);
    }, 150);
  };

  const handleColorPick = (colorName: string) => {
    setSelectedColor(colorName);
    onShowToast(`${colorName} সংস্করণ নির্বাচিত হয়েছে`);
  };

  const handleBlouseToggle = (val: boolean) => {
    setWithBlousePiece(val);
    onShowToast(val ? 'ব্লাউজ পিস অন্তর্ভুক্ত করা হয়েছে' : 'ব্লাউজ পিস ছাড়া অর্ডার সিলেক্টেড (-৳১,০০০)');
  };

  return (
    <div className="flex flex-col relative w-full pt-16 pb-28 bg-[#fcf9f8] min-h-screen">
      {/* Image Gallery & Weave Showcase */}
      <section className="relative w-full overflow-hidden bg-white shadow-sm">
        <div className="relative w-full aspect-[4/5] max-h-[520px] overflow-hidden bg-[#eae7e7]">
          <img
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              imgFading ? 'opacity-30' : 'opacity-100'
            }`}
            alt={saree.name}
            src={currentImage}
          />

          {/* GI Tag Certification Pill */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/92 backdrop-blur-md shadow-sm border border-[#775a19]/20">
            <span
              className="material-symbols-outlined text-[#775a19] text-[16px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified
            </span>
            <span className="text-[10px] text-[#550012] uppercase tracking-wider font-bold">
              GI Certified • {saree.origin.includes('নারায়ণগঞ্জ') ? 'রূপগঞ্জ জামদানি' : 'খাঁটি হস্তশিল্প'}
            </span>
          </div>

          {/* Zoom Loupe Button */}
          <button
            className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#550012]/92 text-white backdrop-blur-md shadow-md active:scale-95 transition-transform cursor-pointer hover:bg-[#7a0c22]"
            onClick={() => setShowZoomModal(true)}
          >
            <span className="material-symbols-outlined text-[16px]">zoom_in</span>
            <span className="text-[10px] text-white tracking-wide font-medium">জুম করে বুনন দেখুন</span>
          </button>

          {/* Carousel Pagination Pill */}
          <div className="absolute bottom-4 left-4 z-10 px-2.5 py-1 rounded-full bg-[#303030]/65 text-[#f3f0ef] backdrop-blur-sm text-[10px]">
            <span className="font-semibold">{bngNumerals[activeThumbIndex] || '১'}</span>
            <span className="opacity-75"> / {bngNumerals[saree.galleryImages.length - 1] || '৪'}</span>
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="flex gap-2.5 px-4 sm:px-6 py-3.5 overflow-x-auto bg-[#f6f3f2] no-scrollbar">
          {saree.galleryImages.map((thumb, idx) => {
            const isSelected = activeThumbIndex === idx;
            return (
              <button
                key={idx}
                className={`thumb-btn flex-shrink-0 w-16 h-20 rounded-lg overflow-hidden relative shadow-sm transition-all cursor-pointer ${
                  isSelected
                    ? 'ring-2 ring-[#7a0c22] opacity-100 shadow-md shadow-[#7a0c22]/20 scale-102'
                    : 'opacity-70 hover:opacity-100'
                }`}
                onClick={() => handleSelectGallery(idx)}
              >
                <img
                  className="w-full h-full object-cover"
                  alt={thumb.label}
                  src={thumb.url}
                />
                <div
                  className={`absolute inset-0 ${
                    isSelected ? 'bg-[#550012]/15' : 'bg-transparent'
                  }`}
                />
                <span
                  className={`absolute bottom-0 inset-x-0 font-medium text-[10px] text-center py-0.5 truncate ${
                    isSelected ? 'bg-[#550012]/85 text-white' : 'bg-[#303030]/75 text-white'
                  }`}
                >
                  {thumb.label}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Title & Pricing Section */}
      <section className="flex flex-col px-4 sm:px-6 pt-5 pb-3">
        {/* Purity / Heritage Badge */}
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-1 rounded bg-[#fed488]/40 text-[#785a1a] text-[10px] tracking-wide font-medium flex items-center gap-1 border border-[#fed488]/70">
            <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
            ১০০% হাতে বোনা ঐতিহ্যবাহী {saree.origin.includes('নারায়ণগঞ্জ') ? 'রূপগঞ্জ জামদানি' : 'হস্তনির্মিত শাড়ি'}
          </span>
        </div>

        {/* Product Title */}
        <h1 className="font-serif text-[26px] sm:text-[30px] text-[#1b1b1c] tracking-normal leading-snug font-semibold">
          {saree.name}
        </h1>
        <p className="text-[13px] text-[#574142] mt-1 leading-relaxed">
          {saree.subtitle}
        </p>

        {/* Ratings & Credibility */}
        <div className="flex items-center gap-2.5 mt-3 pt-1 flex-wrap">
          <div className="flex items-center gap-1 px-2.5 py-0.5 rounded bg-[#ffdada] text-[#40000c] text-[12px] font-bold">
            <span>{saree.rating}</span>
            <span
              className="material-symbols-outlined text-[14px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
          </div>
          <span className="text-[13px] text-[#1b1b1c] font-medium underline underline-offset-4 decoration-[#debfbf]">
            {saree.reviewCount}টি রিভিউ
          </span>
          <span className="text-[#debfbf]">•</span>
          <span className="text-[13px] text-[#775a19] font-medium flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">thumb_up</span>
            {saree.buyersRecommended}% ক্রেতা সুপারিশ করেছেন
          </span>
        </div>

        {/* Price Block */}
        <div className="mt-4 p-4 rounded-xl bg-[#f6f3f2] shadow-sm border border-[#7a0c22]/10">
          <div className="flex items-baseline gap-3">
            <span className="font-serif text-[32px] sm:text-[38px] text-[#550012] font-semibold leading-none">
              ৳{effectivePrice.toLocaleString('bn-BD')}
            </span>
            {effectiveOriginalPrice && (
              <span className="text-[18px] text-[#8b7171] line-through leading-none">
                ৳{effectiveOriginalPrice.toLocaleString('bn-BD')}
              </span>
            )}
            {saree.discountBadge && (
              <span className="px-2 py-0.5 rounded-full bg-[#7a0c22] text-white text-[10px] font-bold">
                {saree.discountBadge}
              </span>
            )}
          </div>
          <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-[#7a0c22]/10">
            <span className="text-[10px] text-[#574142]">সকল ট্যাক্স ও ভ্যাট অন্তর্ভুক্ত</span>
            <div className="flex items-center gap-1 text-[#775a19] text-[12px] font-medium hover:underline cursor-pointer">
              <span className="material-symbols-outlined text-[15px]">credit_card</span>
              <span>ইএমআই সুবিধা ৳১,৫৪২/মাস থেকে</span>
            </div>
          </div>
        </div>
      </section>

      {/* Artisan Tribute Card */}
      <section className="px-4 sm:px-6 my-2">
        <div className="relative overflow-hidden rounded-xl bg-[#f0eded] p-4 shadow-sm border border-[#775a19]/20">
          <div className="flex items-start gap-3.5 relative z-10">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 shadow-sm ring-2 ring-[#775a19]/40">
              <img
                className="w-full h-full object-cover"
                alt={saree.artisanName}
                src={saree.artisanImage}
              />
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-[12px] text-[#550012] font-bold">কারিগর পরিচিতি</span>
                <span className="material-symbols-outlined text-[#775a19] text-[16px]">
                  workspace_premium
                </span>
              </div>
              <p className="text-[14px] text-[#1b1b1c] mt-0.5 leading-relaxed font-sans">
                {saree.artisanBio}
              </p>
            </div>
          </div>
          {/* Subtle decorative glow */}
          <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-[#ffdea5]/30 pointer-events-none blur-xl"></div>
        </div>
      </section>

      {/* Color Variations Selector */}
      <section className="flex flex-col px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-[14px] text-[#1b1b1c] font-bold">রং নির্বাচন করুন:</span>
          <span className="text-[13px] text-[#550012] font-medium">
            {selectedColor} (Selected)
          </span>
        </div>
        <div className="grid grid-cols-4 gap-2.5">
          {saree.colors.map((c) => {
            const isPicked = selectedColor === c.name;
            return (
              <button
                key={c.name}
                onClick={() => handleColorPick(c.name)}
                className={`p-2 rounded-xl flex flex-col items-center gap-1.5 transition-all shadow-sm cursor-pointer ${
                  isPicked
                    ? 'bg-[#f0eded] ring-2 ring-[#550012]'
                    : 'bg-[#f6f3f2] opacity-85 hover:opacity-100'
                }`}
              >
                <div
                  className="w-8 h-8 rounded-full shadow-inner flex items-center justify-center border border-black/10"
                  style={{ backgroundColor: c.hex }}
                >
                  <span
                    className={`material-symbols-outlined text-[16px] ${
                      isPicked ? 'text-white' : 'text-transparent'
                    }`}
                  >
                    check
                  </span>
                </div>
                <span className="text-[10px] text-[#1b1b1c] text-center font-medium leading-tight">
                  {c.name}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Blouse Piece Options */}
      <section className="flex flex-col px-4 sm:px-6 py-3">
        <span className="text-[14px] text-[#1b1b1c] font-bold mb-2.5">ব্লাউজ পিস অপশন:</span>
        <div className="flex flex-col gap-2.5">
          {/* With piece */}
          <div
            onClick={() => handleBlouseToggle(true)}
            className={`cursor-pointer flex items-center justify-between p-3.5 rounded-xl bg-[#f6f3f2] shadow-sm transition-all border ${
              withBlousePiece
                ? 'border-[#550012] bg-[#fcf9f8] ring-1 ring-[#550012]'
                : 'border-transparent opacity-70'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center ${
                  withBlousePiece ? 'bg-[#550012] text-white' : 'bg-[#e5e2e1]'
                }`}
              >
                {withBlousePiece && <div className="w-2 h-2 rounded-full bg-white"></div>}
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] text-[#1b1b1c] font-medium leading-snug">
                  ব্লাউজ পিস সহ
                </span>
                <span className="text-[12px] text-[#574142]">
                  ১ মিটার আনস্টিচড জামদানি বর্ডার সমৃদ্ধ
                </span>
              </div>
            </div>
            <span className="text-[12px] text-[#550012] font-bold">স্ট্যান্ডার্ড</span>
          </div>

          {/* Without piece */}
          <div
            onClick={() => handleBlouseToggle(false)}
            className={`cursor-pointer flex items-center justify-between p-3.5 rounded-xl bg-[#f6f3f2] shadow-sm transition-all border ${
              !withBlousePiece
                ? 'border-[#550012] bg-[#fcf9f8] ring-1 ring-[#550012]'
                : 'border-transparent opacity-70'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center ${
                  !withBlousePiece ? 'bg-[#550012] text-white' : 'bg-[#e5e2e1]'
                }`}
              >
                {!withBlousePiece && <div className="w-2 h-2 rounded-full bg-white"></div>}
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] text-[#1b1b1c] font-medium leading-snug">
                  ব্লাউজ পিস ছাড়া
                </span>
                <span className="text-[12px] text-[#574142]">
                  শুধুমাত্র মূল ৫.৫ মিটার শাড়ি
                </span>
              </div>
            </div>
            <span className="text-[12px] text-[#775a19] font-bold">-৳১,০০০</span>
          </div>
        </div>
      </section>

      {/* Handloom Guarantee & Delivery Perks */}
      <section className="px-4 sm:px-6 py-3">
        <div className="grid grid-cols-3 gap-2 p-3.5 rounded-xl bg-[#f6f3f2] shadow-sm border border-[#7a0c22]/10">
          <div className="flex flex-col items-center text-center p-2">
            <div className="w-10 h-10 rounded-full bg-[#e5e2e1] flex items-center justify-center text-[#550012] mb-2">
              <span className="material-symbols-outlined text-[20px]">assignment_return</span>
            </div>
            <span className="text-[11px] text-[#1b1b1c] font-bold">৭ দিনের সহজ রিটার্ন</span>
            <span className="text-[10px] text-[#574142] mt-0.5">নিশ্চিন্ত কেনাকাটা</span>
          </div>
          <div className="flex flex-col items-center text-center p-2">
            <div className="w-10 h-10 rounded-full bg-[#e5e2e1] flex items-center justify-center text-[#550012] mb-2">
              <span className="material-symbols-outlined text-[20px]">payments</span>
            </div>
            <span className="text-[11px] text-[#1b1b1c] font-bold">ক্যাশ অন ডেলিভারি</span>
            <span className="text-[10px] text-[#574142] mt-0.5">দেখে মূল্য পরিশোধ</span>
          </div>
          <div className="flex flex-col items-center text-center p-2">
            <div className="w-10 h-10 rounded-full bg-[#e5e2e1] flex items-center justify-center text-[#550012] mb-2">
              <span className="material-symbols-outlined text-[20px]">local_shipping</span>
            </div>
            <span className="text-[11px] text-[#1b1b1c] font-bold">ফ্রি হোম ডেলিভারি</span>
            <span className="text-[10px] text-[#574142] mt-0.5">২-৩ কর্মদিবসে প্রাপ্তি</span>
          </div>
        </div>
      </section>

      {/* Product Specifications Grid */}
      <section className="flex flex-col px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-serif text-[20px] font-semibold text-[#1b1b1c]">
            পণ্যের বিস্তারিত বিবরণ
          </h2>
          <span className="text-[10px] text-[#775a19] uppercase tracking-wider font-bold">
            প্রামাণিক তথ্য
          </span>
        </div>
        <div className="flex flex-col gap-2 rounded-xl overflow-hidden">
          {/* Spec 1: Fabric */}
          <div className="flex items-center justify-between p-3.5 bg-[#f6f3f2] rounded-lg">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#550012] text-[20px]">texture</span>
              <span className="text-[13px] text-[#574142]">ফেব্রিক ও কাউন্ট</span>
            </div>
            <span className="text-[13px] text-[#1b1b1c] font-semibold text-right">
              {saree.fabric}
            </span>
          </div>

          {/* Spec 2: Craftsmanship */}
          <div className="flex items-center justify-between p-3.5 bg-[#f6f3f2] rounded-lg">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#550012] text-[20px]">brush</span>
              <span className="text-[13px] text-[#574142]">কারুকাজ ও বুনন</span>
            </div>
            <span className="text-[13px] text-[#1b1b1c] font-semibold text-right">
              {saree.craftsmanship}
            </span>
          </div>

          {/* Spec 3: Length */}
          <div className="flex items-center justify-between p-3.5 bg-[#f6f3f2] rounded-lg">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#550012] text-[20px]">straighten</span>
              <span className="text-[13px] text-[#574142]">শাড়ির দৈর্ঘ্য</span>
            </div>
            <span className="text-[13px] text-[#1b1b1c] font-semibold text-right">
              {saree.length}
            </span>
          </div>

          {/* Spec 4: Origin */}
          <div className="flex items-center justify-between p-3.5 bg-[#f6f3f2] rounded-lg">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#550012] text-[20px]">location_on</span>
              <span className="text-[13px] text-[#574142]">উৎপত্তি স্থান</span>
            </div>
            <span className="text-[13px] text-[#1b1b1c] font-semibold text-right">
              {saree.origin}
            </span>
          </div>

          {/* Spec 5: Care Instructions */}
          <div className="flex items-center justify-between p-3.5 bg-[#f6f3f2] rounded-lg">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#550012] text-[20px]">dry_cleaning</span>
              <span className="text-[13px] text-[#574142]">পরিচর্যা নির্দেশনা</span>
            </div>
            <span className="text-[13px] text-[#1b1b1c] font-semibold text-right">
              {saree.careInstructions}
            </span>
          </div>
        </div>
      </section>

      {/* Authenticity Assurance Box */}
      <section className="px-4 sm:px-6 py-4">
        <div className="p-4 rounded-xl bg-[#ffdada]/40 flex items-center gap-3.5 shadow-sm border border-[#550012]/15">
          <div className="w-11 h-11 rounded-full bg-[#550012] flex items-center justify-center text-white flex-shrink-0">
            <span className="material-symbols-outlined text-[22px]">verified_user</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[13px] text-[#550012] font-bold">
              আঁচল বোতাম খাঁটি সিল্ক গ্যারান্টি
            </span>
            <span className="text-[12px] text-[#574142] mt-0.5 leading-snug">
              প্রতিটি শাড়ির সাথে প্রদান করা হয় সিল্ক মার্ক ও তাঁত বোর্ডের কিউআর হলোগ্রাম সার্টিফিকেট।
            </span>
          </div>
        </div>
      </section>

      {/* Sticky Bottom Action Bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-[#fcf9f8]/95 backdrop-blur-xl border-t border-[#7a0c22]/10 shadow-[0_-8px_24px_rgba(122,12,34,0.08)] px-4 sm:px-6 py-3 pb-safe">
        <div className="flex items-center gap-2.5 max-w-2xl mx-auto">
          {/* Wishlist Button */}
          <button
            aria-label="Add to Wishlist"
            className="w-12 h-12 flex-shrink-0 rounded-xl bg-[#f0eded] flex items-center justify-center active:scale-95 transition-all cursor-pointer hover:bg-[#eae7e7]"
            onClick={() => onToggleWishlist(saree)}
          >
            <span
              className={`material-symbols-outlined text-[24px] ${
                isWishlisted ? 'text-[#7a0c22]' : 'text-[#574142]'
              }`}
              style={{
                fontVariationSettings: isWishlisted ? "'FILL' 1" : "'FILL' 0"
              }}
            >
              favorite
            </span>
          </button>

          {/* Add to Bag (Outline / Secondary) */}
          <button
            className="flex-1 h-12 rounded-xl bg-[#eae7e7] text-[#550012] hover:bg-[#e5e2e1] active:scale-95 transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer font-bold text-[14px]"
            onClick={() => onAddToCart(saree, selectedColor, withBlousePiece)}
          >
            <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
            <span>ব্যাগে যোগ করুন</span>
          </button>

          {/* Buy Now (Primary Regal Maroon) */}
          <button
            className="flex-1 h-12 rounded-xl bg-[#550012] text-white hover:bg-[#7a0c22] active:scale-95 transition-all flex items-center justify-center gap-1.5 shadow-md shadow-[#550012]/20 cursor-pointer font-bold text-[14px]"
            onClick={() => onBuyNow(saree, selectedColor, withBlousePiece)}
          >
            <span className="material-symbols-outlined text-[20px]">bolt</span>
            <span>এখনই কিনুন</span>
          </button>
        </div>
      </div>

      {/* Fullscreen Fabric Zoom Micro-Modal */}
      {showZoomModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4">
          <div className="relative w-full max-w-sm aspect-square rounded-xl overflow-hidden bg-white shadow-2xl">
            <img
              className="w-full h-full object-cover scale-105"
              alt="Fabric Zoom Detail"
              src={ZOOM_MODAL_IMAGE}
            />
            <div className="absolute top-3 left-3 bg-[#303030]/85 text-[#f3f0ef] px-2.5 py-1 rounded text-[11px] font-medium backdrop-blur-sm">
              ৮৪ কাউন্ট সুতো ও নিখুঁত কারুকাজ (4X Zoom)
            </div>
            <button
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#303030]/85 text-[#f3f0ef] flex items-center justify-center hover:bg-black transition-colors cursor-pointer"
              onClick={() => setShowZoomModal(false)}
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
          <p className="text-white text-[13px] mt-4 text-center font-sans">
            আঙুল দিয়ে টেনে নিখুঁত সুতোর বুনন পর্যবেক্ষণ করুন
          </p>
        </div>
      )}
    </div>
  );
};
