import React, { useState } from 'react';
import { CartItem } from '../data/sarees';

interface BagScreenProps {
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onSelectSaree: (sareeId: string) => void;
  onShowToast: (msg: string) => void;
  onOrderSuccess: (orderTotal: number, address: string, paymentMethod: string) => void;
}

export const BagScreen: React.FC<BagScreenProps> = ({
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onSelectSaree,
  onShowToast,
  onOrderSuccess
}) => {
  const [promoCode, setPromoCode] = useState('উৎসব২০');
  const [promoApplied, setPromoApplied] = useState(true);
  const [promoDiscount, setPromoDiscount] = useState(1000);
  const [paymentMethod, setPaymentMethod] = useState<'mfs' | 'card' | 'cod'>('mfs');
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [address, setAddress] = useState({
    name: 'ফারহানা হক',
    tag: 'ডিফল্ট',
    details: 'বাড়ি #১২, রোড #৪, ধানমন্ডি আ/এ, ঢাকা - ১২০৫',
    phone: '+৮৮০ ১৭১২-৩৪৫৬৭৮'
  });

  // Calculate pricing
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.pricePerUnit * item.quantity,
    0
  );
  const totalItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const effectiveDiscount = promoApplied ? Math.min(promoDiscount, subtotal) : 0;
  const grandTotal = Math.max(0, subtotal - effectiveDiscount);

  // Free gift box threshold (e.g. ৳32,000 threshold or 80% progress)
  const giftThreshold = 32000;
  const giftProgress = Math.min(100, Math.round((subtotal / giftThreshold) * 100)) || 80;
  const neededForGift = Math.max(0, giftThreshold - subtotal);

  const handleApplyPromo = () => {
    if (!promoCode.trim()) {
      onShowToast('অনুগ্রহ করে কুপন কোড লিখুন');
      return;
    }
    if (promoCode.trim().toUpperCase() === 'উৎসব২০' || promoCode.trim().toUpperCase() === 'UTSHOB20') {
      setPromoApplied(true);
      setPromoDiscount(1000);
      onShowToast("'উৎসব২০' কোড সফলভাবে যোগ হয়েছে (৳১,০০০ ছাড়!)");
    } else if (promoCode.trim().toUpperCase() === 'AACHOL10') {
      setPromoApplied(true);
      setPromoDiscount(1500);
      onShowToast("'AACHOL10' কোড প্রয়োগ করা হয়েছে (৳১,৫০০ ছাড়!)");
    } else {
      setPromoApplied(false);
      onShowToast('দুঃখিত, কুপন কোডটি সঠিক নয়');
    }
  };

  const handleConfirmOrder = () => {
    if (cartItems.length === 0) {
      onShowToast('আপনার শপিং ব্যাগ খালি!');
      return;
    }
    const paymentLabels = {
      mfs: 'বিকাশ / নগদ / রকেট',
      card: 'ক্রেডিট / ডেবিট কার্ড',
      cod: 'ক্যাশ অন ডেলিভারি'
    };
    onOrderSuccess(grandTotal, address.details, paymentLabels[paymentMethod]);
  };

  return (
    <div className="flex flex-col relative w-full pt-16 pb-28 bg-[#fcf9f8] min-h-screen">
      {/* Title & Gift Progress */}
      <div className="px-4 sm:px-6 py-4 flex flex-col gap-1.5 bg-[#f6f3f2] shadow-sm border-b border-[#7a0c22]/10">
        <div className="flex items-center justify-between">
          <h1 className="font-serif text-[22px] font-semibold text-[#550012] flex items-center gap-2">
            <span>আপনার শপিং ব্যাগ</span>
            <span className="text-[12px] font-bold px-2 py-0.5 rounded-full bg-[#ffdea5] text-[#261900]">
              {totalItemCount}টি আইটেম
            </span>
          </h1>
          <span
            className="material-symbols-outlined text-[#775a19]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            local_mall
          </span>
        </div>

        {/* Free Gift Box Progress Bar */}
        <div className="mt-1 bg-white p-3 rounded-xl flex flex-col gap-1.5 shadow-sm border border-[#7a0c22]/5">
          <div className="flex items-center justify-between text-[#574142] text-[12px]">
            <span className="flex items-center gap-1.5 text-[#550012] font-medium">
              <span className="material-symbols-outlined text-[18px] text-[#775a19]">
                featured_seasonal_and_gifts
              </span>
              <span>
                {neededForGift > 0
                  ? `আর মাত্র ৳${neededForGift.toLocaleString('bn-BD')} টাকার কেনাকাটায় পাচ্ছেন ফ্রি গিফট বক্স!`
                  : 'অভিনন্দন! আপনি ফ্রি রয়াল গিফট বক্স আনলক করেছেন!'}
              </span>
            </span>
            <span className="text-[11px] text-[#775a19] font-bold">
              {giftProgress}%
            </span>
          </div>
          <div className="w-full h-2 rounded-full bg-[#e5e2e1] overflow-hidden">
            <div
              className="h-full bg-[#7a0c22] rounded-full transition-all duration-500"
              style={{ width: `${giftProgress}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 py-4 flex flex-col gap-4">
        {/* Section title */}
        <div className="flex items-center justify-between">
          <span className="text-[11px] text-[#775a19] tracking-widest uppercase font-bold">
            নির্বাচনকৃত শাড়ি সমূহ
          </span>
          <span className="text-[11px] text-[#574142] flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px] text-[#775a19]">verified</span>{' '}
            জিআই সার্টিফাইড তাঁত
          </span>
        </div>

        {/* Cart items list */}
        {cartItems.length === 0 ? (
          <div className="bg-white p-8 rounded-xl text-center flex flex-col items-center justify-center gap-3 border border-[#7a0c22]/10">
            <span className="material-symbols-outlined text-[48px] text-[#8b7171]">shopping_basket</span>
            <p className="text-[16px] font-serif text-[#550012] font-semibold">আপনার শপিং ব্যাগটি খালি</p>
            <p className="text-[13px] text-[#574142]">আঁচল কালেকশন থেকে আপনার পছন্দের শাড়ি যুক্ত করুন।</p>
          </div>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="relative bg-white p-4 rounded-xl shadow-sm border border-[#7a0c22]/10 flex gap-3.5 transition-all hover:shadow-md"
            >
              {/* Product thumbnail */}
              <div
                className="w-24 h-32 rounded-lg overflow-hidden shrink-0 bg-[#f0eded] relative cursor-pointer"
                onClick={() => onSelectSaree(item.saree.id)}
              >
                <img
                  className="w-full h-full object-cover"
                  alt={item.saree.name}
                  src={item.saree.image}
                />
                <span className="absolute top-1 left-1 px-1.5 py-0.5 bg-[#7a0c22] text-white rounded text-[9px] uppercase tracking-wider font-bold">
                  {item.saree.subCategory.includes('জামদানি') ? 'ঢাকাই' : 'তসর সিল্ক'}
                </span>
              </div>

              {/* Product Info */}
              <div className="flex flex-col justify-between flex-1 min-w-0">
                <div>
                  <div className="flex items-start justify-between gap-1">
                    <h2
                      className="font-serif text-[17px] font-semibold leading-tight text-[#1b1b1c] line-clamp-1 cursor-pointer hover:text-[#550012]"
                      onClick={() => onSelectSaree(item.saree.id)}
                    >
                      {item.saree.name}
                    </h2>
                    <button
                      aria-label="রিমুভ করুন"
                      className="text-[#8b7171] hover:text-[#ba1a1a] p-1 -mr-1 transition-colors cursor-pointer"
                      onClick={() => onRemoveItem(item.id)}
                    >
                      <span className="material-symbols-outlined text-[20px]">delete_outline</span>
                    </button>
                  </div>
                  <p className="text-[12px] text-[#574142] mt-0.5">
                    {item.selectedColor} • {item.withBlousePiece ? 'ব্লাউজ পিস সহ' : 'ব্লাউজ ছাড়া'}
                  </p>
                  <div className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded bg-[#f6f3f2] text-[#775a19] text-[11px] font-medium">
                    <span className="material-symbols-outlined text-[13px]">
                      {item.saree.category.includes('তসর') ? 'eco' : 'workspace_premium'}
                    </span>{' '}
                    {item.saree.countInfo}
                  </div>
                </div>

                <div className="flex items-end justify-between pt-2">
                  <div>
                    <span className="font-serif text-[16px] font-bold text-[#550012]">
                      ৳{(item.pricePerUnit * item.quantity).toLocaleString('bn-BD')}
                    </span>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center rounded-lg bg-[#f0eded] p-0.5 shadow-sm border border-black/5">
                    <button
                      className="w-7 h-7 flex items-center justify-center text-[#1b1b1c] hover:text-[#550012] transition-colors cursor-pointer active:scale-95"
                      onClick={() => onUpdateQuantity(item.id, -1)}
                    >
                      <span className="material-symbols-outlined text-[16px]">remove</span>
                    </button>
                    <span className="w-7 text-center text-[13px] font-bold text-[#1b1b1c]">
                      {item.quantity}
                    </span>
                    <button
                      className="w-7 h-7 flex items-center justify-center text-[#1b1b1c] hover:text-[#550012] transition-colors cursor-pointer active:scale-95"
                      onClick={() => onUpdateQuantity(item.id, 1)}
                    >
                      <span className="material-symbols-outlined text-[16px]">add</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}

        {/* Promo Code Section */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-[#7a0c22]/10 flex flex-col gap-1.5">
          <span className="text-[12px] text-[#574142] flex items-center gap-1 font-medium">
            <span className="material-symbols-outlined text-[16px] text-[#775a19]">sell</span>{' '}
            কুপন বা প্রোমো কোড
          </span>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <input
                className="w-full bg-[#f6f3f2] px-3.5 py-2.5 rounded-lg text-[13px] text-[#1b1b1c] focus:outline-none uppercase tracking-wider font-semibold border border-transparent focus:border-[#775a19]"
                placeholder="কুপন কোড লিখুন"
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              {promoApplied && (
                <span
                  className="absolute right-3 top-2.5 material-symbols-outlined text-[18px] text-[#775a19]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
              )}
            </div>
            <button
              onClick={handleApplyPromo}
              className="px-4 py-2.5 bg-[#7a0c22] text-white rounded-lg text-[13px] font-bold uppercase tracking-wider shadow-sm hover:opacity-95 transition-all cursor-pointer active:scale-95"
            >
              প্রয়োগ করুন
            </button>
          </div>
          {promoApplied && (
            <div className="flex items-center gap-1.5 text-[#775a19] text-[11px] pt-1 font-medium">
              <span className="material-symbols-outlined text-[15px]">celebration</span>
              <span>'{promoCode}' কোড সফলভাবে যোগ হয়েছে (৳{effectiveDiscount.toLocaleString('bn-BD')} ছাড়!)</span>
            </div>
          )}
        </div>

        {/* Delivery Address Card */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-[#7a0c22]/10 flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[13px] text-[#550012] font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-[18px] text-[#775a19]">pin_drop</span>{' '}
              হোম ডেলিভারি ঠিকানা
            </span>
            <button
              onClick={() => setShowAddressModal(true)}
              className="text-[#775a19] text-[11px] font-bold hover:underline cursor-pointer"
            >
              পরিবর্তন করুন
            </button>
          </div>
          <div className="p-3 bg-[#f6f3f2] rounded-lg flex items-start gap-3">
            <span className="material-symbols-outlined text-[#550012] text-[20px] mt-0.5">home</span>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[14px] font-bold text-[#1b1b1c]">{address.name}</span>
                <span className="px-1.5 py-0.2 bg-[#fed488] text-[#785a1a] text-[10px] rounded font-bold">
                  {address.tag}
                </span>
              </div>
              <span className="text-[12px] text-[#574142] leading-snug mt-0.5">
                {address.details}
              </span>
              <span className="text-[11px] text-[#574142] mt-1 font-medium">{address.phone}</span>
            </div>
          </div>
        </div>

        {/* Payment Options Card */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-[#7a0c22]/10 flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <span className="text-[13px] text-[#550012] font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-[18px] text-[#775a19]">payments</span>{' '}
              পেমেন্ট মাধ্যম নির্বাচন করুন
            </span>
            <span className="text-[10px] text-[#574142]">নিরাপদ ট্রানজেকশন</span>
          </div>

          {/* Payment Method 1: MFS */}
          <label
            onClick={() => setPaymentMethod('mfs')}
            className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all border ${
              paymentMethod === 'mfs'
                ? 'bg-[#f6f3f2] border-[#7a0c22]'
                : 'bg-white border-black/5 hover:bg-[#f6f3f2]'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                  paymentMethod === 'mfs' ? 'bg-[#7a0c22]' : 'bg-[#e5e2e1]'
                }`}
              >
                {paymentMethod === 'mfs' && (
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                )}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-[13px] text-[#1b1b1c] font-bold">বিকাশ / নগদ / রকেট</span>
                  <span className="px-1.5 py-0.2 bg-[#ffdea5] text-[#261900] text-[10px] rounded font-bold">
                    ৫% ক্যাশব্যাক
                  </span>
                </div>
                <span className="text-[11px] text-[#574142]">
                  ইনস্ট্যান্ট মোবাইল রিফান্ড সুবিধা সহ
                </span>
              </div>
            </div>
            <span className="material-symbols-outlined text-[#775a19]">account_balance_wallet</span>
          </label>

          {/* Payment Method 2: Cards */}
          <label
            onClick={() => setPaymentMethod('card')}
            className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all border ${
              paymentMethod === 'card'
                ? 'bg-[#f6f3f2] border-[#7a0c22]'
                : 'bg-white border-black/5 hover:bg-[#f6f3f2]'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                  paymentMethod === 'card' ? 'bg-[#7a0c22]' : 'bg-[#e5e2e1]'
                }`}
              >
                {paymentMethod === 'card' && (
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] text-[#1b1b1c] font-bold">ক্রেডিট / ডেবিট কার্ড</span>
                <span className="text-[11px] text-[#574142]">
                  Visa, Mastercard, Amex, UnionPay
                </span>
              </div>
            </div>
            <span className="material-symbols-outlined text-[#8b7171]">credit_card</span>
          </label>

          {/* Payment Method 3: COD */}
          <label
            onClick={() => setPaymentMethod('cod')}
            className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all border ${
              paymentMethod === 'cod'
                ? 'bg-[#f6f3f2] border-[#7a0c22]'
                : 'bg-white border-black/5 hover:bg-[#f6f3f2]'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                  paymentMethod === 'cod' ? 'bg-[#7a0c22]' : 'bg-[#e5e2e1]'
                }`}
              >
                {paymentMethod === 'cod' && (
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] text-[#1b1b1c] font-bold">ক্যাশ অন ডেলিভারি</span>
                <span className="text-[11px] text-[#574142]">
                  পণ্য দেখে মূল্য পরিশোধ করুন
                </span>
              </div>
            </div>
            <span className="material-symbols-outlined text-[#8b7171]">local_shipping</span>
          </label>
        </div>

        {/* Order Summary Card */}
        <div className="bg-white p-4 rounded-xl shadow-md border border-[#7a0c22]/10 flex flex-col gap-2.5">
          <div className="flex items-center justify-between pb-1 border-b border-[#7a0c22]/10">
            <h3 className="font-serif text-[18px] text-[#550012] font-semibold">মূল্য বিবরণী</h3>
            <span className="text-[10px] text-[#775a19] tracking-widest uppercase font-bold">
              ইনভয়েস খসড়া
            </span>
          </div>

          <div className="flex flex-col gap-2 text-[14px] text-[#574142]">
            <div className="flex justify-between">
              <span>মোট আইটেম মূল্য ({totalItemCount}টি)</span>
              <span className="font-semibold text-[#1b1b1c]">
                ৳{subtotal.toLocaleString('bn-BD')}
              </span>
            </div>
            {effectiveDiscount > 0 && (
              <div className="flex justify-between text-[#775a19]">
                <span className="flex items-center gap-1 font-medium">
                  <span className="material-symbols-outlined text-[16px]">redeem</span> উৎসব ডিসকাউন্ট
                </span>
                <span className="font-semibold">-৳{effectiveDiscount.toLocaleString('bn-BD')}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>ডেলিভারি চার্জ</span>
              <span className="font-semibold text-[#775a19]">ফ্রি (সারা দেশ)</span>
            </div>
            <div className="flex justify-between">
              <span>প্রিমিয়াম বক্সিং ও সিল্ক র‍্যাপার</span>
              <span className="font-semibold text-[#775a19]">উপহারস্বরূপ ফ্রি</span>
            </div>
          </div>

          <div className="mt-1 pt-2 flex items-center justify-between bg-[#f6f3f2] p-3 rounded-lg border border-[#7a0c22]/10">
            <div className="flex flex-col">
              <span className="text-[12px] text-[#574142] font-bold">সর্বমোট প্রদেয়</span>
              <span className="text-[10px] text-[#775a19]">ভ্যাট ও ট্যাক্স সহ</span>
            </div>
            <span className="font-serif text-[22px] text-[#550012] font-bold">
              ৳{grandTotal.toLocaleString('bn-BD')}
            </span>
          </div>
        </div>

        {/* Trust Badges Grid */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <div className="p-3 rounded-xl bg-[#f6f3f2] flex items-center gap-2.5 border border-[#7a0c22]/10">
            <div className="w-9 h-9 rounded-full bg-[#ffdea5] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[#261900] text-[20px]">verified</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[12px] font-bold text-[#1b1b1c] leading-tight">
                ১০০% খাঁটি পণ্য
              </span>
              <span className="text-[10px] text-[#574142]">আসল হ্যান্ডলুম সিল্ক</span>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-[#f6f3f2] flex items-center gap-2.5 border border-[#7a0c22]/10">
            <div className="w-9 h-9 rounded-full bg-[#ffdea5] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[#261900] text-[20px]">lock</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[12px] font-bold text-[#1b1b1c] leading-tight">
                সুরক্ষিত SSL
              </span>
              <span className="text-[10px] text-[#574142]">এনক্রিপ্টেড পেমেন্ট</span>
            </div>
          </div>
        </div>

        {/* Assurance banner */}
        <div className="p-4 rounded-xl bg-[#550012] text-white flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[28px] text-[#ffdea5]">
              auto_awesome
            </span>
            <div className="flex flex-col">
              <span className="text-[14px] font-bold leading-tight">
                আঁচল হেরিটেজ ট্রাস্ট
              </span>
              <span className="text-[11px] text-[#ffdea5]">
                ৭ দিনের সহজ রিটার্ন পলিসি এবং রয়াল কেয়ার
              </span>
            </div>
          </div>
          <span className="material-symbols-outlined text-[#ffdea5]">chevron_right</span>
        </div>
      </div>

      {/* Bottom Sticky Checkout Action Bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 p-4 bg-white/95 backdrop-blur-xl border-t border-[#7a0c22]/10 shadow-[0_-8px_24px_-4px_rgba(122,12,34,0.12)] pb-safe">
        <div className="max-w-2xl mx-auto flex items-center justify-between gap-4">
          <div className="flex flex-col min-w-0">
            <span className="text-[10px] text-[#574142] tracking-wider uppercase font-semibold">
              সর্বমোট বিল
            </span>
            <span className="font-serif text-[22px] sm:text-[24px] text-[#550012] font-bold leading-none">
              ৳{grandTotal.toLocaleString('bn-BD')}
            </span>
          </div>

          <button
            onClick={handleConfirmOrder}
            disabled={cartItems.length === 0}
            className="flex-1 py-3 px-4 bg-[#7a0c22] text-white rounded-lg text-[14px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:bg-[#550012] transition-all active:scale-[0.98] disabled:opacity-50 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">lock</span>
            <span>অর্ডার নিশ্চিত করুন</span>
          </button>
        </div>
      </div>

      {/* Address Edit Modal */}
      {showAddressModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-5 shadow-2xl border border-[#7a0c22]/20">
            <div className="flex items-center justify-between pb-3 border-b border-[#7a0c22]/10 mb-4">
              <h3 className="font-serif text-[18px] font-bold text-[#550012]">
                ডেলিভারি ঠিকানা আপডেট
              </h3>
              <button
                onClick={() => setShowAddressModal(false)}
                className="text-[#8b7171] hover:text-black cursor-pointer"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-[12px] font-bold text-[#574142]">গ্রাহকের নাম</label>
                <input
                  type="text"
                  value={address.name}
                  onChange={(e) => setAddress({ ...address, name: e.target.value })}
                  className="w-full mt-1 p-2.5 bg-[#f6f3f2] rounded-lg text-[13px] border border-black/10 focus:border-[#7a0c22] outline-none"
                />
              </div>
              <div>
                <label className="text-[12px] font-bold text-[#574142]">সম্পূর্ণ ঠিকানা</label>
                <textarea
                  rows={2}
                  value={address.details}
                  onChange={(e) => setAddress({ ...address, details: e.target.value })}
                  className="w-full mt-1 p-2.5 bg-[#f6f3f2] rounded-lg text-[13px] border border-black/10 focus:border-[#7a0c22] outline-none"
                />
              </div>
              <div>
                <label className="text-[12px] font-bold text-[#574142]">মোবাইল নম্বর</label>
                <input
                  type="text"
                  value={address.phone}
                  onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                  className="w-full mt-1 p-2.5 bg-[#f6f3f2] rounded-lg text-[13px] border border-black/10 focus:border-[#7a0c22] outline-none"
                />
              </div>
            </div>

            <div className="mt-5 flex gap-2">
              <button
                onClick={() => setShowAddressModal(false)}
                className="flex-1 py-2.5 bg-[#f0eded] text-[#550012] font-bold text-[13px] rounded-lg cursor-pointer"
              >
                বাতিল
              </button>
              <button
                onClick={() => {
                  setShowAddressModal(false);
                  onShowToast('ডেলিভারি ঠিকানা সফলভাবে সংরক্ষিত হয়েছে');
                }}
                className="flex-1 py-2.5 bg-[#7a0c22] text-white font-bold text-[13px] rounded-lg cursor-pointer hover:bg-[#550012]"
              >
                সংরক্ষণ করুন
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
