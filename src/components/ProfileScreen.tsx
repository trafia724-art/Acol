import React from 'react';
import { PROFILE_AVATAR } from '../data/sarees';

interface ProfileScreenProps {
  onGoToWishlist: () => void;
  onGoToBag: () => void;
  onShowToast: (msg: string) => void;
  wishlistCount: number;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({
  onGoToWishlist,
  onGoToBag,
  onShowToast,
  wishlistCount
}) => {
  return (
    <div className="flex flex-col relative w-full pt-16 pb-28 bg-[#fcf9f8] min-h-screen">
      <div className="max-w-2xl mx-auto w-full px-4 sm:px-6 py-4 flex flex-col gap-4">
        {/* User Profile Card */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#7a0c22]/10 flex items-center gap-4">
          <div className="relative">
            <img
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover ring-2 ring-[#775a19]"
              src={PROFILE_AVATAR}
            />
            <span className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 rounded-full ring-2 ring-white" />
          </div>

          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-2">
              <h2 className="font-serif text-[20px] font-bold text-[#1b1b1c]">
                ফারহানা হক
              </h2>
              <span className="px-2 py-0.5 rounded-full bg-[#fed488] text-[#785a1a] text-[10px] font-bold">
                রয়্যাল মেম্বার
              </span>
            </div>
            <span className="text-[12px] text-[#574142] mt-0.5">
              farhana.haq@example.com • +৮৮০ ১৭১২-৩৪৫৬৭৮
            </span>
            <div className="flex items-center gap-1 text-[11px] text-[#775a19] font-medium mt-1">
              <span className="material-symbols-outlined text-[15px]">stars</span>
              <span>আঁচল রিওয়ার্ড পয়েন্ট: ১,৪৫০ কয়েন</span>
            </div>
          </div>
        </div>

        {/* Quick Stat Tiles */}
        <div className="grid grid-cols-3 gap-2.5">
          <div
            onClick={onGoToBag}
            className="p-3 bg-white rounded-xl shadow-sm border border-[#7a0c22]/10 flex flex-col items-center text-center cursor-pointer hover:border-[#7a0c22] transition-colors"
          >
            <span className="material-symbols-outlined text-[#550012] text-[22px]">
              shopping_bag
            </span>
            <span className="font-serif text-[18px] font-bold text-[#1b1b1c] mt-0.5">২টি</span>
            <span className="text-[11px] text-[#574142]">ব্যাগে সংরক্ষিত</span>
          </div>

          <div
            onClick={onGoToWishlist}
            className="p-3 bg-white rounded-xl shadow-sm border border-[#7a0c22]/10 flex flex-col items-center text-center cursor-pointer hover:border-[#7a0c22] transition-colors"
          >
            <span className="material-symbols-outlined text-[#7a0c22] text-[22px]">
              favorite
            </span>
            <span className="font-serif text-[18px] font-bold text-[#1b1b1c] mt-0.5">
              {wishlistCount}টি
            </span>
            <span className="text-[11px] text-[#574142]">উইশলিস্ট</span>
          </div>

          <div
            onClick={() => onShowToast('আপনার পূর্বের ৪টি অর্ডার সফলভাবে ডেলিভারি হয়েছে')}
            className="p-3 bg-white rounded-xl shadow-sm border border-[#7a0c22]/10 flex flex-col items-center text-center cursor-pointer hover:border-[#7a0c22] transition-colors"
          >
            <span className="material-symbols-outlined text-[#775a19] text-[22px]">
              local_shipping
            </span>
            <span className="font-serif text-[18px] font-bold text-[#1b1b1c] mt-0.5">৪টি</span>
            <span className="text-[11px] text-[#574142]">সম্পন্ন অর্ডার</span>
          </div>
        </div>

        {/* Active Order Tracking Card */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-[#7a0c22]/10 flex flex-col gap-2.5">
          <div className="flex items-center justify-between pb-2 border-b border-[#7a0c22]/10">
            <span className="text-[13px] font-bold text-[#550012] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px]">package_2</span>
              <span>চলমান অর্ডার (#ACH-84920)</span>
            </span>
            <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px] font-bold">
              ট্রানজিটে আছে
            </span>
          </div>

          <p className="text-[12px] text-[#1b1b1c] leading-relaxed">
            নীলাম্বরী খাঁটি ঢাকাই জামদানি শাড়ি (রয়্যাল ব্লু) সুদৃশ্য ভেলভেট গিফট বক্সে মোড়ানো অবস্থায় কুরিয়ারে হস্তান্তর করা হয়েছে।
          </p>

          <div className="flex items-center justify-between pt-1 text-[11px] text-[#574142]">
            <span>আনুমানিক ডেলিভারি: ১৫ অক্টোবর, ২০২৬</span>
            <button
              onClick={() => onShowToast('কুরিয়ার ট্র্যাকিং: পথিমধ্যে ধানমন্ডি হাবের দিকে রওনা হয়েছে')}
              className="text-[#775a19] font-bold hover:underline cursor-pointer"
            >
              লাইভ ট্র্যাক
            </button>
          </div>
        </div>

        {/* Account Menu List */}
        <div className="bg-white rounded-xl shadow-sm border border-[#7a0c22]/10 divide-y divide-black/5 overflow-hidden">
          <button
            onClick={() => onShowToast('ঠিকানা: বাড়ি #১২, রোড #৪, ধানমন্ডি আ/এ, ঢাকা - ১২০৫')}
            className="w-full px-4 py-3.5 flex items-center justify-between text-left hover:bg-[#f6f3f2] transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#550012]">pin_drop</span>
              <span className="text-[13px] font-semibold text-[#1b1b1c]">
                সংরক্ষিত ঠিকানা ও ডেলিভারি লোকেশন
              </span>
            </div>
            <span className="material-symbols-outlined text-[#8b7171] text-[18px]">
              chevron_right
            </span>
          </button>

          <button
            onClick={() =>
              onShowToast('সিল্ক মার্ক যাচাইকরণ: আপনার প্রতিটি শাড়িতে থাকা QR কোড স্ক্যান করুন')
            }
            className="w-full px-4 py-3.5 flex items-center justify-between text-left hover:bg-[#f6f3f2] transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#550012]">verified</span>
              <span className="text-[13px] font-semibold text-[#1b1b1c]">
                সিল্ক মার্ক ও তাঁত সার্টিফিকেট যাচাই
              </span>
            </div>
            <span className="material-symbols-outlined text-[#8b7171] text-[18px]">
              chevron_right
            </span>
          </button>

          <button
            onClick={() =>
              onShowToast('আঁচল কনসিয়ার্জ হটলাইন: +৮৮০ ১৭১২-৩৪৫৬৭৮ (সকাল ১০টা - রাত ৮টা)')
            }
            className="w-full px-4 py-3.5 flex items-center justify-between text-left hover:bg-[#f6f3f2] transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#550012]">support_agent</span>
              <span className="text-[13px] font-semibold text-[#1b1b1c]">
                আঁচল প্রাইভেট কনসিয়ার্জ ও সহায়তা
              </span>
            </div>
            <span className="material-symbols-outlined text-[#8b7171] text-[18px]">
              chevron_right
            </span>
          </button>
        </div>

        {/* Heritage Trust Note */}
        <div className="p-4 rounded-xl bg-[#ffdada]/30 border border-[#7a0c22]/15 text-center flex flex-col items-center">
          <span className="material-symbols-outlined text-[#550012] text-[28px] mb-1">
            auto_awesome
          </span>
          <span className="font-serif text-[15px] font-bold text-[#550012]">
            আঁচল ঐতিহ্য সনদ
          </span>
          <span className="text-[11px] text-[#574142] max-w-sm mt-0.5">
            সোনারগাঁও, রূপগঞ্জ, মিরপুর ও টাঙ্গাইলের ঐতিহ্যবাহী কারুশিল্পীদের পরিবারের সাথে আঁচলের আজীবন মৈত্রী চুক্তি।
          </span>
        </div>
      </div>
    </div>
  );
};
