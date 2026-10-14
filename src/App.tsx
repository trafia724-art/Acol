/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { BottomNav, TabType } from './components/BottomNav';
import { HomeScreen } from './components/HomeScreen';
import { CollectionScreen } from './components/CollectionScreen';
import { ProductDetailScreen } from './components/ProductDetailScreen';
import { BagScreen } from './components/BagScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { SAREES_DATA, INITIAL_CART_ITEMS, Saree, CartItem } from './data/sarees';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [selectedSareeId, setSelectedSareeId] = useState<string | null>(null);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('সকল শাড়ি');
  const [cartItems, setCartItems] = useState<CartItem[]>(INITIAL_CART_ITEMS);
  const [wishlistIds, setWishlistIds] = useState<Set<string>>(new Set(['saree-1']));
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [orderModalData, setOrderModalData] = useState<{
    orderId: string;
    total: number;
    address: string;
    paymentMethod: string;
  } | null>(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [wishlistModalOpen, setWishlistModalOpen] = useState(false);
  const [deviceMode, setDeviceMode] = useState<'mobile' | 'fluid'>('mobile');

  // Active Saree object for Detail view
  const currentSaree = selectedSareeId
    ? SAREES_DATA.find((s) => s.id === selectedSareeId) || SAREES_DATA[0]
    : null;

  // Show Toast
  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg((prev) => (prev === msg ? null : prev));
    }, 2400);
  };

  // Cart operations
  const handleAddToCart = (saree: Saree, selectedColor?: string, withBlousePiece: boolean = true) => {
    const color = selectedColor || saree.colors[0]?.name || 'ডিফল্ট';
    const effectivePrice = withBlousePiece ? saree.price : saree.price - 1000;

    setCartItems((prev) => {
      const existing = prev.find(
        (item) =>
          item.saree.id === saree.id &&
          item.selectedColor === color &&
          item.withBlousePiece === withBlousePiece
      );
      if (existing) {
        return prev.map((item) =>
          item.id === existing.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        const newItem: CartItem = {
          id: `cart-${Date.now()}`,
          saree,
          selectedColor: color,
          withBlousePiece,
          quantity: 1,
          pricePerUnit: effectivePrice
        };
        return [newItem, ...prev];
      }
    });

    showToast(`${saree.name} আপনার শপিং ব্যাগে যুক্ত করা হয়েছে`);
  };

  const handleBuyNow = (saree: Saree, selectedColor?: string, withBlousePiece: boolean = true) => {
    handleAddToCart(saree, selectedColor, withBlousePiece);
    setSelectedSareeId(null);
    setActiveTab('bag');
    showToast('চেকআউট পেজে আপনাকে নিয়ে যাওয়া হচ্ছে...');
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveCartItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    showToast('আইটেমটি ব্যাগ থেকে সরানো হয়েছে');
  };

  // Wishlist toggle
  const handleToggleWishlist = (saree: Saree) => {
    setWishlistIds((prev) => {
      const next = new Set(prev);
      if (next.has(saree.id)) {
        next.delete(saree.id);
        showToast('উইশলিস্ট থেকে সরানো হয়েছে');
      } else {
        next.add(saree.id);
        showToast('পছন্দের তালিকায় যুক্ত হয়েছে ❤️');
      }
      return next;
    });
  };

  // Navigation handlers
  const handleSelectSaree = (sareeId: string) => {
    setSelectedSareeId(sareeId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromDetail = () => {
    setSelectedSareeId(null);
  };

  const handleGoToCollection = (category?: string) => {
    if (category) {
      setSelectedCategoryFilter(category);
    }
    setSelectedSareeId(null);
    setActiveTab('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOrderSuccess = (orderTotal: number, address: string, paymentMethod: string) => {
    const generatedId = `ACH-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderModalData({
      orderId: generatedId,
      total: orderTotal,
      address,
      paymentMethod
    });
    setCartItems([]);
  };

  // Total items in cart
  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Search results for modal
  const [modalSearchInput, setModalSearchInput] = useState('');
  const searchResults = modalSearchInput.trim()
    ? SAREES_DATA.filter(
        (s) =>
          s.name.includes(modalSearchInput) ||
          s.subtitle.includes(modalSearchInput) ||
          s.category.includes(modalSearchInput) ||
          s.origin.includes(modalSearchInput)
      )
    : [];

  return (
    <div className="min-h-screen bg-[#ece8e5] text-[#1b1b1c] font-sans antialiased selection:bg-[#ffdea5] selection:text-[#261900] flex flex-col items-center justify-start">
      {/* Top Device Bar for Viewport Toggle */}
      <div className="w-full bg-[#3e1d1c] text-[#ffdea5] text-[12px] py-1.5 px-4 flex items-center justify-between border-b border-[#775a19]/30 z-50">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[16px]">verified</span>
          <span className="font-bold tracking-wide">আঁচল হেরিটেজ শাড়ি বুটিক</span>
          <span className="hidden sm:inline opacity-75">| খাঁটি ঢাকাই জামদানি ও তাঁত সম্ভার</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center bg-[#583231] rounded-lg p-0.5 border border-[#ffdea5]/20 text-[11px]">
            <button
              onClick={() => setDeviceMode('mobile')}
              className={`px-2.5 py-1 rounded cursor-pointer transition-all ${
                deviceMode === 'mobile'
                  ? 'bg-[#7a0c22] text-white font-bold shadow-sm'
                  : 'text-[#ffdea5]/80 hover:text-white'
              }`}
            >
              মোবাইল স্ক্রিন ভিউ
            </button>
            <button
              onClick={() => setDeviceMode('fluid')}
              className={`px-2.5 py-1 rounded cursor-pointer transition-all ${
                deviceMode === 'fluid'
                  ? 'bg-[#7a0c22] text-white font-bold shadow-sm'
                  : 'text-[#ffdea5]/80 hover:text-white'
              }`}
            >
              রেসপন্সিভ ভিউ
            </button>
          </div>
        </div>
      </div>

      {/* Main Container / Mobile Frame Wrapper */}
      <div
        className={`w-full transition-all duration-300 relative bg-[#fcf9f8] min-h-[100dvh] ${
          deviceMode === 'mobile'
            ? 'max-w-[440px] my-0 sm:my-4 sm:rounded-3xl shadow-2xl overflow-hidden border border-black/10'
            : 'max-w-2xl shadow-xl'
        }`}
      >
        {/* App Header */}
        <Header
          isDetailView={!!selectedSareeId}
          onBack={handleBackFromDetail}
          onOpenSearch={() => setSearchModalOpen(true)}
          onOpenWishlist={() => setWishlistModalOpen(true)}
          onOpenProfile={() => {
            setSelectedSareeId(null);
            setActiveTab('profile');
          }}
          wishlistCount={wishlistIds.size}
        />

        {/* Screen Content Router */}
        <main className="min-h-screen">
          {selectedSareeId && currentSaree ? (
            <ProductDetailScreen
              saree={currentSaree}
              onBack={handleBackFromDetail}
              onAddToCart={(saree, color, blouse) =>
                handleAddToCart(saree, color, blouse)
              }
              onBuyNow={(saree, color, blouse) =>
                handleBuyNow(saree, color, blouse)
              }
              isWishlisted={wishlistIds.has(currentSaree.id)}
              onToggleWishlist={handleToggleWishlist}
              onShowToast={showToast}
            />
          ) : activeTab === 'home' ? (
            <HomeScreen
              bestsellers={SAREES_DATA.slice(0, 5)}
              onSelectSaree={handleSelectSaree}
              onAddToCart={handleAddToCart}
              wishlistIds={wishlistIds}
              onToggleWishlist={handleToggleWishlist}
              onGoToCollection={handleGoToCollection}
              onShowToast={showToast}
            />
          ) : activeTab === 'catalog' ? (
            <CollectionScreen
              sarees={SAREES_DATA}
              onSelectSaree={handleSelectSaree}
              onAddToCart={handleAddToCart}
              wishlistIds={wishlistIds}
              onToggleWishlist={handleToggleWishlist}
              onShowToast={showToast}
              initialCategory={selectedCategoryFilter}
            />
          ) : activeTab === 'bag' ? (
            <BagScreen
              cartItems={cartItems}
              onUpdateQuantity={handleUpdateQuantity}
              onRemoveItem={handleRemoveCartItem}
              onSelectSaree={handleSelectSaree}
              onShowToast={showToast}
              onOrderSuccess={handleOrderSuccess}
            />
          ) : (
            <ProfileScreen
              onGoToWishlist={() => setWishlistModalOpen(true)}
              onGoToBag={() => setActiveTab('bag')}
              onShowToast={showToast}
              wishlistCount={wishlistIds.size}
            />
          )}
        </main>

        {/* Bottom Navigation (Visible in main tab views) */}
        {!selectedSareeId && (
          <BottomNav
            activeTab={activeTab}
            onTabChange={(tab) => {
              setSelectedSareeId(null);
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            cartCount={totalCartCount}
          />
        )}
      </div>

      {/* Global Interactive Toast Notification */}
      {toastMsg && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1b1b1c] text-[#fcf9f8] shadow-2xl border border-white/10 animate-fade-in text-[13px] font-medium">
          <span className="material-symbols-outlined text-[#ffdea5] text-[18px]">
            check_circle
          </span>
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Search Modal */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center p-4 pt-16">
          <div className="bg-white rounded-2xl w-full max-w-md p-4 shadow-2xl border border-[#7a0c22]/20 max-h-[80vh] flex flex-col">
            <div className="flex items-center gap-2 pb-3 border-b border-black/10">
              <span className="material-symbols-outlined text-[#775a19]">search</span>
              <input
                autoFocus
                type="text"
                value={modalSearchInput}
                onChange={(e) => setModalSearchInput(e.target.value)}
                placeholder="শাড়ির নাম, ফেব্রিক বা জেলা লিখুন..."
                className="w-full text-[14px] text-[#1b1b1c] outline-none"
              />
              <button
                onClick={() => setSearchModalOpen(false)}
                className="text-[#8b7171] hover:text-black cursor-pointer"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="overflow-y-auto py-2 flex-1 space-y-2">
              {modalSearchInput.trim() === '' ? (
                <div className="p-4 text-center text-[#574142] text-[12px]">
                  <p className="font-bold text-[#550012] mb-1">জনপ্রিয় অনুসন্ধান:</p>
                  <div className="flex flex-wrap justify-center gap-1.5 mt-2">
                    {['শিফন ও জর্জেট', 'চিকনকারি শিফন', 'রুবী ওয়াইন জর্জেট', 'নীলাম্বরী জামদানি', 'ব্রাইডাল কাতান', 'তসর সিল্ক'].map(
                      (tag) => (
                        <button
                          key={tag}
                          onClick={() => setModalSearchInput(tag)}
                          className="px-2.5 py-1 rounded-full bg-[#f6f3f2] text-[11px] hover:bg-[#fed488] transition-colors cursor-pointer"
                        >
                          {tag}
                        </button>
                      )
                    )}
                  </div>
                </div>
              ) : searchResults.length === 0 ? (
                <p className="p-6 text-center text-[13px] text-[#574142]">
                  "{modalSearchInput}" এর সাথে মিলে এমন কোনো শাড়ি পাওয়া যায়নি।
                </p>
              ) : (
                searchResults.map((saree) => (
                  <div
                    key={saree.id}
                    onClick={() => {
                      setSearchModalOpen(false);
                      handleSelectSaree(saree.id);
                    }}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#f6f3f2] cursor-pointer transition-colors"
                  >
                    <img
                      src={saree.image}
                      alt={saree.name}
                      className="w-12 h-14 object-cover rounded-md"
                    />
                    <div className="flex flex-col min-w-0 flex-1">
                      <span className="font-serif text-[14px] font-bold text-[#550012] truncate">
                        {saree.name}
                      </span>
                      <span className="text-[11px] text-[#574142] truncate">
                        {saree.fabric} • {saree.origin}
                      </span>
                      <span className="text-[12px] font-bold text-[#1b1b1c] mt-0.5">
                        ৳{saree.price.toLocaleString('bn-BD')}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* Wishlist Modal */}
      {wishlistModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-5 shadow-2xl border border-[#7a0c22]/20 max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between pb-3 border-b border-[#7a0c22]/10">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#7a0c22]">favorite</span>
                <h3 className="font-serif text-[18px] font-bold text-[#550012]">
                  পছন্দের তালিকা ({wishlistIds.size}টি শাড়ি)
                </h3>
              </div>
              <button
                onClick={() => setWishlistModalOpen(false)}
                className="text-[#8b7171] hover:text-black cursor-pointer"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="overflow-y-auto py-3 flex-1 space-y-3">
              {wishlistIds.size === 0 ? (
                <div className="text-center py-8 text-[#574142]">
                  <span className="material-symbols-outlined text-[40px] text-[#8b7171]">
                    favorite_border
                  </span>
                  <p className="mt-2 text-[14px] font-serif text-[#550012] font-semibold">
                    উইশলিস্ট খালি
                  </p>
                  <p className="text-[12px] mt-1">পণ্য ব্রাউজ করে হৃদস্পর্শী শাড়ি যুক্ত করুন।</p>
                </div>
              ) : (
                SAREES_DATA.filter((s) => wishlistIds.has(s.id)).map((saree) => (
                  <div
                    key={saree.id}
                    className="flex items-center justify-between p-2.5 bg-[#f6f3f2] rounded-xl border border-black/5"
                  >
                    <div
                      className="flex items-center gap-3 cursor-pointer min-w-0 flex-1"
                      onClick={() => {
                        setWishlistModalOpen(false);
                        handleSelectSaree(saree.id);
                      }}
                    >
                      <img
                        src={saree.image}
                        alt={saree.name}
                        className="w-14 h-16 object-cover rounded-lg shrink-0"
                      />
                      <div className="flex flex-col min-w-0">
                        <span className="font-serif text-[14px] font-bold text-[#550012] truncate">
                          {saree.name}
                        </span>
                        <span className="text-[11px] text-[#574142] truncate">
                          {saree.subCategory}
                        </span>
                        <span className="text-[13px] font-bold text-[#1b1b1c] mt-0.5">
                          ৳{saree.price.toLocaleString('bn-BD')}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0 pl-2">
                      <button
                        onClick={() => {
                          handleAddToCart(saree);
                          setWishlistModalOpen(false);
                        }}
                        className="p-2 bg-[#7a0c22] text-white rounded-lg text-[11px] font-bold hover:bg-[#550012] cursor-pointer"
                        title="ব্যাগে যোগ করুন"
                      >
                        <span className="material-symbols-outlined text-[16px]">shopping_bag</span>
                      </button>
                      <button
                        onClick={() => handleToggleWishlist(saree)}
                        className="p-2 text-[#8b7171] hover:text-[#ba1a1a] cursor-pointer"
                        title="রিমুভ করুন"
                      >
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* Celebratory Order Success Modal */}
      {orderModalData && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-md p-6 shadow-2xl border border-[#775a19]/30 text-center animate-fade-in relative overflow-hidden">
            {/* Decorative corner accent */}
            <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#fed488]/40 blur-2xl pointer-events-none" />

            <div className="w-16 h-16 rounded-full bg-[#ffdada] text-[#550012] flex items-center justify-center mx-auto mb-3 shadow-inner">
              <span className="material-symbols-outlined text-[36px]">verified</span>
            </div>

            <h3 className="font-serif text-[24px] font-bold text-[#550012]">
              অর্ডার সফলভাবে গৃহীত হয়েছে!
            </h3>
            <p className="text-[13px] text-[#574142] mt-1">
              ধন্যবাদ ফারহানা হক। আঁচল হেরিটেজ শাড়ি আপনার ঠিকানায় পৌঁছানোর প্রক্রিয়া শুরু হয়েছে।
            </p>

            <div className="my-4 p-4 rounded-xl bg-[#f6f3f2] text-left border border-[#7a0c22]/10 space-y-2 text-[12px]">
              <div className="flex justify-between">
                <span className="text-[#574142]">অর্ডার আইডি:</span>
                <span className="font-mono font-bold text-[#1b1b1c]">{orderModalData.orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#574142]">পরিশোধিত মূল্য:</span>
                <span className="font-bold text-[#550012]">
                  ৳{orderModalData.total.toLocaleString('bn-BD')}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#574142]">পেমেন্ট মাধ্যম:</span>
                <span className="font-semibold text-[#1b1b1c]">{orderModalData.paymentMethod}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#574142]">ডেলিভারি ঠিকানা:</span>
                <span className="font-semibold text-[#1b1b1c] text-right truncate max-w-[200px]">
                  {orderModalData.address}
                </span>
              </div>
              <div className="flex justify-between pt-1 border-t border-black/5 text-[#775a19] font-medium">
                <span>প্রাক্কলিত ডেলিভারি:</span>
                <span>২-৩ কর্মদিবসের মধ্যে</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#ffdada]/40 text-[#550012] text-[11px] font-medium mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">featured_seasonal_and_gifts</span>
              <span>আপনার অর্ডারের সাথে সুগন্ধি ভেলভেট গিফট বক্স যুক্ত করা হয়েছে।</span>
            </div>

            <div className="flex gap-2.5">
              <button
                onClick={() => {
                  setOrderModalData(null);
                  setActiveTab('home');
                }}
                className="flex-1 py-3 bg-[#7a0c22] text-white rounded-xl text-[13px] font-bold hover:bg-[#550012] transition-colors cursor-pointer shadow-md"
              >
                আরও কেনাকাটা করুন
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
