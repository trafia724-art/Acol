export interface Saree {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  subCategory: string;
  origin: string;
  price: number;
  originalPrice?: number;
  discountBadge?: string;
  badge?: string;
  badgeType?: 'primary' | 'secondary' | 'neutral' | 'exclusive';
  rating: number;
  reviewCount: number;
  buyersRecommended?: number;
  image: string;
  galleryImages: {
    label: string;
    url: string;
    description: string;
  }[];
  purityMark: string;
  countInfo: string;
  fabric: string;
  craftsmanship: string;
  length: string;
  careInstructions: string;
  artisanName: string;
  artisanDays: number;
  artisanBio: string;
  artisanImage: string;
  colors: {
    name: string;
    hex: string;
  }[];
  hasBlousePiece: boolean;
  inStock: boolean;
  colorName: string;
  occasion: string;
}

export interface CartItem {
  id: string;
  saree: Saree;
  selectedColor: string;
  withBlousePiece: boolean;
  quantity: number;
  pricePerUnit: number;
}

const ARTISAN_IMG_1 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuqDDBUQ5d3M4PIbOLVLh9x1WdXn0C6Un5vALKyilAiy-_MhHV3PfWzljuDQpUEtVB6dZz0uR87tRUQjb2EdkjeAep1gw9cF2043PcRPyzmCGJOSsi0tTuGfarmrA_lSGYY2nSMMWHOpXboIQCOC6Dacut-MzRCpBxqPdvCMOSDCvQshbw9_PMrFuCIQaKi-OQzbmZSbm9e2Y5HC5ftOQmoNyDteVQ2S5msB0siWKOWqS4RnS106c';
const ARTISAN_IMG_2 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgIJowKIS89WzDK0zSu4ebhQRprvAcIJy7oftPaTs5PqRB6WWvgkFYyHSRSZWt1RNE0yfSG4RFEl75HfC7DAwyX1eaQN19cKTPVoucEYkFtKtIcjUkPt9oilLmOIDTzWCBTK_M33p-8WtwQ4ova4qFpLc9X_jFoyIXFuKCN1osdIs5AVxcsZN12gufgYqY-x-igJllMfRW2zpYeBoK9hy3XhtBTGPCrVxw_8JCDercEdRpewXI8WY';

export const SAREES_DATA: Saree[] = [
  // ==========================================
  // 1. ঢাকাই জামদানি (DHAKAI JAMDANI - 10 SAREES)
  // ==========================================
  {
    id: 'saree-jd-1',
    name: 'নীলাম্বরী খাঁটি ঢাকাই জামদানি শাড়ি',
    subtitle: '৮৪ কাউন্ট সুতি ও রেশম মিক্সড মসলিন জামদানি • মাস্টার উইভার কালেকশন',
    category: 'ঢাকাই জামদানি',
    subCategory: 'ঢাকাই জামদানি',
    origin: 'জামদানি পল্লী, তারাব, নারায়ণগঞ্জ',
    price: 18500,
    originalPrice: 22000,
    discountBadge: '১৬% ছাড়',
    badge: 'হাতে বোনা',
    badgeType: 'neutral',
    rating: 4.9,
    reviewCount: 124,
    buyersRecommended: 98,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-YoKEUSqxqadysI09z7yIdspFhzDMxIL6P-TAzcByjYQ_evhGKV_Lsz_swjGyz9ygCqtQZ8g5H2jR7urbfbeEIUcRzSE_gRAKtH_eUxRQTPQRU-aqJiZIz9UR0F-eggMHLIzk4gUBh1jqhPqydI9-Oyf3pk9AZCOdijWd7zmQqVqQw9m26QFRltXDTsG1qz9uw-ZfrHulcFLmsLSV8aeMB9bScFVU1SwO5g-1QYuvlFFwauVAgTk',
    galleryImages: [
      {
        label: 'আঁচল',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7IkhcFsjIoCHTagHCh76uW6q74nYW1qnpdDwkCb9gPex11E72cg3iv5H4e9dGepxvmh265ApeLLuQT5g1yF133p7h4CvKr45a_T8dZsAlw3F6VuGB6xSZrCP5x4RgMzQgfcPU9GEdg42Qm2eO-CuZS7SGjMrnPBr3DPAiQNiAvegfhdwDo9DwWOPxz2bIMIu2EkfBKW_HsPzGuoRxqV-iG_AbWupkYcfAy6jKkogVDK3yQECclwE',
        description: 'আঁচলে নিখুঁত স্বর্ণ জরির ঐতিহ্যবাহী কল্কা ও লতাপাতার কাজ'
      },
      {
        label: 'জমিন',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7x6tjDTzJE-njAYAa03QGjzELTD6GtcTQIIIozIEvkDFudV_QiW0zn-8hCAD2oGPGIXamx_ewpwFLJsG-3AaxGg5qKITlMqbosppyyo_Hz5LbgCWDSpeiSiHT1lzM5fazskoHY5OTwPJR-ngBnYpHaIIG_ellTmZ92yv1YDivB4nQO44s8t7hvCucqPA0Qxjt05TX9qSV1h-OTApertP97s9TWwXPUV6zrPHRJA891cTZUpIMYCM',
        description: '৮৪ কাউন্ট মসলিন জমিনে সূক্ষ্ম জ্যামিতিক বুটি অলংকরণ'
      },
      {
        label: 'পাড়',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeSaxY_y525cnLorm4nf47sJQeYz_gZF-TywVwiH7BNfsTPXQSOowWMjudT4UD2G4KdtkNvMMaWdtTMCj7UjeIxIDcHxF3wzKbNydkCtQWrLX0naxNNsvvc9FVigdWVccQtbdzWkUc49qyYOrXcHpGIZ11NcuTn3WtnmCyXmsFGW1DMLzFB_T6b3gIV9XmTj55_pAAzuIBJxdqunaPTnBKXdbOhNMm5MsEHb5s0YOmFgf1nB8MLbU',
        description: 'চিরায়ত ময়ূরকণ্ঠী ও ঢেউ পাড়ের রাজকীয় সমাপ্তি'
      },
      {
        label: 'মডেল লুক',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBo6Aro3Pmlo8qUWHsGRx4AF0AFRZxXrbae4s8hGax2Ube0szVz_1km7PF44gy_ZnBCXk4QAOrBCwQ7zUHhZ8P7mIEfglQrd9tAjEKzi9n_KRgu5IINQ05cN7Fu2tpNiZLhuTeo5bkc8GX7LV7-WEY8Y_xIbH2VaDZKR4SZ1BNjYkh9kgPoYHoza6oXy0I6DQkiYqwHnyLC9huQVC7XsM6H0WKDTCh4XI1S9JLxP_D680LLU63t0AI',
        description: 'আভিজাত্যপূর্ণ ড্র্যাপিং ও সান্ধ্য আলোর মোহনীয় রূপ'
      }
    ],
    purityMark: 'সিল্ক মার্ক',
    countInfo: '১০০ কাউন্ট সুতা',
    fabric: '৮৪ কাউন্ট সুতি ও রেশম মিক্সড',
    craftsmanship: 'নিখুঁত হাতে বোনা জরি ও রেশমি কাজ',
    length: '৫.৫ মিটার (১২ হাত)',
    careInstructions: 'কেবলমাত্র ড্রাই ওয়াশ কাম্য',
    artisanName: 'তাঁতি রফিকুল ইসলাম',
    artisanDays: 24,
    artisanBio: 'তাঁতি রফিকুল ইসলামের হাতে ২৪ দিনের নিরলস পরিশ্রমে বোনা এই শাড়ি। প্রতিটি নকশা স্মৃতি থেকে জীবন্ত হয়ে উঠেছে কাটের নালিতে।',
    artisanImage: ARTISAN_IMG_1,
    colors: [
      { name: 'নীলাম্বরী নীল', hex: '#0a1a36' },
      { name: 'পান্না সবুজ', hex: '#0e3b28' },
      { name: 'রয়্যাল মেরুন', hex: '#550012' },
      { name: 'স্বর্ণাভ ক্রিম', hex: '#e8dab5' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'নীলাম্বরী নীল',
    occasion: 'বিয়ে ও উৎসব'
  },
  {
    id: 'saree-jd-2',
    name: 'ময়ূরকণ্ঠী নীল খাঁটি জামদানি',
    subtitle: 'জরি আঁচল ও সূক্ষ্ম বুটি কাজ • হ্যান্ডলুম মাস্টারপিস',
    category: 'ঢাকাই জামদানি',
    subCategory: 'ঢাকাই জামদানি',
    origin: 'রূপগঞ্জ, নারায়ণগঞ্জ',
    price: 16800,
    originalPrice: 20000,
    discountBadge: '১৬% ছাড়',
    badge: 'হাতে বোনা',
    badgeType: 'neutral',
    rating: 4.9,
    reviewCount: 28,
    buyersRecommended: 96,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8N--p3tyzJRAuLegWSxQEtEUwABouw2PtdFAm-pXQPgRMplfepHo1gPG6qvpOEJLZjWMnyoJOMw4cZx2_6cikIxKhQuG0J8WD2VuC8EsVuzrtY_irK3Nnqfcpuxz6c0IUahlILBjgOmFtlt_jKvedvBA-SrHKhLZ3SM3IIBQGqyb3ks4vBlojzMTEC9MABel3L6QHa86h6os8ouVR5md4NHPQ3YkkeOWsASh1Ncqa6VBatXWrwok',
    galleryImages: [
      {
        label: 'আঁচল',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtIpPvUNgA55nzy9vGaCpdboFMyXVDiLQN3D6-_eCsXv8VLsuLg6kRcXS2BZeHe6CmayXDWUFTLIof0160bnZd-btfSLA9NHfdMYb_R_oxv884yqXUT-1BHWRB99Q0SjPvAhZai4kdIxmFG6WXI6oB0M20BH83OjSsDQyNhmjYDe6UzY_RELI7piULjBtx3nn0VGFJ3774GeUs2WqpaFSuxK6NQQm1aTvgs_2l-19e73hcgAwlEYM',
        description: 'ময়ূরকণ্ঠী নীল শেডের সূক্ষ্ম জারি বুনন'
      }
    ],
    purityMark: 'সিল্ক মার্ক',
    countInfo: '১০০ কাউন্ট সুতা',
    fabric: '১০০ কাউন্ট ফাইন সুতি ও জারি',
    craftsmanship: 'ময়ূরকণ্ঠী নীল বর্ণিল জরি ও সুতি বোনা',
    length: '৫.৫ মিটার',
    careInstructions: 'ড্রাই ওয়াশ কাম্য',
    artisanName: 'ওস্তাদ মোস্তফা কামাল',
    artisanDays: 22,
    artisanBio: 'রূপগঞ্জের ঐতিহ্যবাহী খাঁটি তাঁতে বোনা বংশপরম্পরায় তৈরি এক অসাধারণ সৃষ্টি।',
    artisanImage: ARTISAN_IMG_2,
    colors: [
      { name: 'ময়ূরকণ্ঠী নীল', hex: '#004d40' },
      { name: 'রয়াল ব্লু', hex: '#0a1a36' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'ময়ূরকণ্ঠী নীল',
    occasion: 'বিয়ে ও উৎসব'
  },
  {
    id: 'saree-jd-3',
    name: 'শ্বেতাম্বরী দুধসাদা ঢাকাই জামদানি',
    subtitle: '১২০ কাউন্ট খাঁটি সুতি ও স্বর্ণালী জরির জ্যামিতিক নকশা • হেরিটেজ ক্লাসিক',
    category: 'ঢাকাই জামদানি',
    subCategory: 'ঢাকাই জামদানি',
    origin: 'সোনারগাঁও, নারায়ণগঞ্জ',
    price: 21500,
    originalPrice: 25000,
    discountBadge: '১৪% ছাড়',
    badge: 'এক্সক্লুসিভ',
    badgeType: 'exclusive',
    rating: 5.0,
    reviewCount: 45,
    buyersRecommended: 99,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8nJ-KsJYzK2sdnDsS3J5CCTDgnaRs-f7JXHuTXMASqupCxKSVY4U1-eGhN8Xsphkp-NERoeZt2bpkmGsarZdlTFws5zkaF47Y4bgnkeHDc5JhhuMEnDKn89SVEr4EZNB5U2OWR6LBxLZSw7-TEUilNM3ApnkpvfmZQvBsPDEUiJ1F4FISQXQ_7pufyQfWrAUrlq-GwgQPpIwpB--2B0gJaOP0OGa7ImivCTTSd5jjZU5Xx1CWPkU',
    galleryImages: [
      {
        label: 'আঁচল',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWyLyfnRFVHidVnQ_P0Hc94N75VkZZiN-zlNhR2IdO2mMbMEhb2bIXw4eVBfPMHKfss9t-eUxSOLWmQ8hJj7Y8D-_wbAfP_JQzAW8iPPjyn1CuW4V2dL6zrMlJGg8i9mXdurIF9bHbGxtBtfJX1QEPwJBYmIORQn8GVRYDeDS9rK9N0UGY75QGJKoE7cyj37GVEbC2bJdcRZmw76G7OSSfMVcgyCZJL79s8NPe_nwJOv1nDZlp2ys',
        description: 'সাদা জমিনে খাঁটি রূপালী ও সোনালী জরির জুঁইফুল বুটি'
      }
    ],
    purityMark: 'জিআই সার্টিফাইড',
    countInfo: '১২০ কাউন্ট মসলিন',
    fabric: 'খাঁটি দেশি কার্পাস সুতি ও রেশম',
    craftsmanship: 'কাঠের নালিতে বোনা সূক্ষ্ম ফুল ও লতাপাতা',
    length: '৫.৫ মিটার',
    careInstructions: 'ড্রাই ওয়াশ কাম্য',
    artisanName: 'মাস্টার কারিগর মোজাম্মেল হক',
    artisanDays: 32,
    artisanBio: 'সোনারগাঁওয়ের প্রবীণ কারিগরের নিপুণ দক্ষতায় তৈরি দুধসাদা শ্বেতাম্বরী জামদানি।',
    artisanImage: ARTISAN_IMG_1,
    colors: [
      { name: 'দুধসাদা', hex: '#fdfbf7' },
      { name: 'স্বর্ণাভ ক্রিম', hex: '#e8dab5' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'দুধসাদা',
    occasion: 'সান্ধ্য অনুষ্ঠান'
  },
  {
    id: 'saree-jd-4',
    name: 'পোড়ামাটি টেরাকোটা ঢাকাই জামদানি',
    subtitle: 'টেরাকোটা অরেঞ্জ ও বেইজ মসলিনে ঐতিহ্যবাহী অ্যান্টিক সোনালী জাল কাজ',
    category: 'ঢাকাই জামদানি',
    subCategory: 'ঢাকাই জামদানি',
    origin: 'রূপগঞ্জ, নারায়ণগঞ্জ',
    price: 19800,
    originalPrice: 23000,
    discountBadge: '১৪% ছাড়',
    badge: 'বেস্টসেলার',
    badgeType: 'secondary',
    rating: 4.9,
    reviewCount: 39,
    buyersRecommended: 98,
    image: '/src/assets/images/dhakai_jamdani_terracotta_1791960142789.jpg',
    galleryImages: [
      {
        label: 'আঁচল',
        url: '/src/assets/images/dhakai_jamdani_terracotta_1791960142789.jpg',
        description: 'টেরাকোটা পাড়ে ঘন স্বর্ণালঙ্কার খচিত ঐতিহ্যবাহী কল্কা'
      }
    ],
    purityMark: 'জিআই সার্টিফাইড',
    countInfo: '১০০ কাউন্ট সুতা',
    fabric: 'প্রাকৃতিক সুতি ও নরম মসলিন',
    craftsmanship: 'ঘন জাল বুনন ও অ্যান্টিক স্বর্ণ জরির নিখুঁত নকশা',
    length: '৫.৫ মিটার + ১ মিটার ব্লাউজ পিস',
    careInstructions: 'ড্রাই ওয়াশ কাম্য',
    artisanName: 'তাঁতি রফিকুল ইসলাম',
    artisanDays: 28,
    artisanBio: 'বাংলার পোড়ামাটির স্মৃতি ও লালচে বেইজের প্রাকৃতিক মেলবন্ধনে বোনা এক অনুপম সৃষ্টি।',
    artisanImage: ARTISAN_IMG_1,
    colors: [
      { name: 'টেরাকোটা', hex: '#bf360c' },
      { name: 'স্বর্ণাভ বেইজ', hex: '#d7ccc8' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'টেরাকোটা',
    occasion: 'বিয়ে ও উৎসব'
  },
  {
    id: 'saree-jd-5',
    name: 'বাসন্তী পদ্মফুল ঢাকাই জামদানি',
    subtitle: 'উজ্জ্বল বাসন্তী হলুদ জমিনে রুপালী ও সোনালী পদ্ম বুটি • বসন্ত উৎসব স্পেশাল',
    category: 'ঢাকাই জামদানি',
    subCategory: 'ঢাকাই জামদানি',
    origin: 'সোনারগাঁও, নারায়ণগঞ্জ',
    price: 15400,
    originalPrice: 18000,
    discountBadge: '১৪% ছাড়',
    badge: 'নতুন আগমন',
    badgeType: 'primary',
    rating: 4.8,
    reviewCount: 31,
    buyersRecommended: 97,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJDqG55vvCh2bIlVfbDqsm-Ezh9S_KoLlHod-mMl2lEbxzHSN_MIlaDxUe27XgkHRlHx9Fww9fKgHEdkQztEgjm1nvV0Xwch13fCpisKLAmjbIKbKigIUJy21LLRW9TfjyTNQXE8NdxF4G_p_cxLQHK_oXOYxEI-Ijaku4H5nxSJdNKlbg8UXyOL4dwcpe-23MIvwI-53FtNWn3WSZsgikQTm9L9cPUs4yFXkVLfwdTGK1t_EB5WU',
    galleryImages: [
      {
        label: 'আঁচল',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJDqG55vvCh2bIlVfbDqsm-Ezh9S_KoLlHod-mMl2lEbxzHSN_MIlaDxUe27XgkHRlHx9Fww9fKgHEdkQztEgjm1nvV0Xwch13fCpisKLAmjbIKbKigIUJy21LLRW9TfjyTNQXE8NdxF4G_p_cxLQHK_oXOYxEI-Ijaku4H5nxSJdNKlbg8UXyOL4dwcpe-23MIvwI-53FtNWn3WSZsgikQTm9L9cPUs4yFXkVLfwdTGK1t_EB5WU',
        description: 'বাসন্তী জমিনে পদ্ম ও লতাপাতার কারুকাজ'
      }
    ],
    purityMark: 'সিল্ক মার্ক',
    countInfo: '৮৪ কাউন্ট সুতা',
    fabric: '৮৪ কাউন্ট সুতি ও রেশম মিশ্রিত',
    craftsmanship: 'হাতে বোনা পদ্ম বুটি ও তেরছা নকশা',
    length: '৫.৫ মিটার',
    careInstructions: 'ড্রাই ওয়াশ কাম্য',
    artisanName: 'ওস্তাদ মোস্তফা কামাল',
    artisanDays: 20,
    artisanBio: 'বসন্তের আবহে তৈরি বাসন্তী পদ্মফুল জামদানি প্রতিটি নারীকে করে তোলে অনন্যা।',
    artisanImage: ARTISAN_IMG_2,
    colors: [
      { name: 'বাসন্তী হলুদ', hex: '#fbc02d' },
      { name: 'সরিষা গোল্ড', hex: '#d4af37' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'বাসন্তী হলুদ',
    occasion: 'বিয়ে ও উৎসব'
  },
  {
    id: 'saree-jd-6',
    name: 'কুহকী কালো ও স্বর্ণালী বুটি জামদানি',
    subtitle: 'অপূর্ব কালো মসলিন জমিনে তারা খচিত গোল্ডেন জারি বুটি ও চওড়া আঁচল',
    category: 'ঢাকাই জামদানি',
    subCategory: 'ঢাকাই জামদানি',
    origin: 'রূপগঞ্জ, নারায়ণগঞ্জ',
    price: 17900,
    originalPrice: 21000,
    discountBadge: '১৫% ছাড়',
    badge: 'সীমিত স্টক',
    badgeType: 'neutral',
    rating: 4.9,
    reviewCount: 62,
    buyersRecommended: 99,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtIpPvUNgA55nzy9vGaCpdboFMyXVDiLQN3D6-_eCsXv8VLsuLg6kRcXS2BZeHe6CmayXDWUFTLIof0160bnZd-btfSLA9NHfdMYb_R_oxv884yqXUT-1BHWRB99Q0SjPvAhZai4kdIxmFG6WXI6oB0M20BH83OjSsDQyNhmjYDe6UzY_RELI7piULjBtx3nn0VGFJ3774GeUs2WqpaFSuxK6NQQm1aTvgs_2l-19e73hcgAwlEYM',
    galleryImages: [
      {
        label: 'আঁচল',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtIpPvUNgA55nzy9vGaCpdboFMyXVDiLQN3D6-_eCsXv8VLsuLg6kRcXS2BZeHe6CmayXDWUFTLIof0160bnZd-btfSLA9NHfdMYb_R_oxv884yqXUT-1BHWRB99Q0SjPvAhZai4kdIxmFG6WXI6oB0M20BH83OjSsDQyNhmjYDe6UzY_RELI7piULjBtx3nn0VGFJ3774GeUs2WqpaFSuxK6NQQm1aTvgs_2l-19e73hcgAwlEYM',
        description: 'কালো জমিনে খাঁটি জরির তারারাজির মতো সূক্ষ্ম বুনন'
      }
    ],
    purityMark: 'জিআই সার্টিফাইড',
    countInfo: '১০০ কাউন্ট সুতা',
    fabric: '১০০ কাউন্ট খাঁটি কার্পাস তুলা',
    craftsmanship: 'জরি কল্কা ও সূক্ষ্ম বুটি কাজ',
    length: '৫.৫ মিটার',
    careInstructions: 'ড্রাই ওয়াশ কাম্য',
    artisanName: 'তাঁতি রফিকুল ইসলাম',
    artisanDays: 23,
    artisanBio: 'কালো জমিনে আলোর বিচ্ছুরণ ঘটিয়ে তৈরি এক অপরূপ জামদানি সংস্করণ।',
    artisanImage: ARTISAN_IMG_1,
    colors: [
      { name: 'কুহকী কালো', hex: '#1b1b1c' },
      { name: 'ডিপ নেভি', hex: '#0a1a36' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'কুহকী কালো',
    occasion: 'সান্ধ্য অনুষ্ঠান'
  },
  {
    id: 'saree-jd-7',
    name: 'ফিরোজা নীল রেশমি জামদানি',
    subtitle: 'স্বচ্ছ ফিরোজা জমিনে রৌপ্য জরির ঢেউ ও কারুকাজ • প্রিমিয়াম সামার কালেকশন',
    category: 'ঢাকাই জামদানি',
    subCategory: 'ঢাকাই জামদানি',
    origin: 'সোনারগাঁও, নারায়ণগঞ্জ',
    price: 16200,
    originalPrice: 19000,
    discountBadge: '১৫% ছাড়',
    badge: 'হাতে বোনা',
    badgeType: 'neutral',
    rating: 4.8,
    reviewCount: 22,
    buyersRecommended: 96,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8N--p3tyzJRAuLegWSxQEtEUwABouw2PtdFAm-pXQPgRMplfepHo1gPG6qvpOEJLZjWMnyoJOMw4cZx2_6cikIxKhQuG0J8WD2VuC8EsVuzrtY_irK3Nnqfcpuxz6c0IUahlILBjgOmFtlt_jKvedvBA-SrHKhLZ3SM3IIBQGqyb3ks4vBlojzMTEC9MABel3L6QHa86h6os8ouVR5md4NHPQ3YkkeOWsASh1Ncqa6VBatXWrwok',
    galleryImages: [
      {
        label: 'আঁচল',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8N--p3tyzJRAuLegWSxQEtEUwABouw2PtdFAm-pXQPgRMplfepHo1gPG6qvpOEJLZjWMnyoJOMw4cZx2_6cikIxKhQuG0J8WD2VuC8EsVuzrtY_irK3Nnqfcpuxz6c0IUahlILBjgOmFtlt_jKvedvBA-SrHKhLZ3SM3IIBQGqyb3ks4vBlojzMTEC9MABel3L6QHa86h6os8ouVR5md4NHPQ3YkkeOWsASh1Ncqa6VBatXWrwok',
        description: 'ফিরোজা নীলের স্নিগ্ধতায় রুপোলি জরির ঢেউ'
      }
    ],
    purityMark: 'সিল্ক মার্ক',
    countInfo: '৮৪ কাউন্ট সুতা',
    fabric: '৮৪ কাউন্ট মসলিন ও রেশম সুতো',
    craftsmanship: 'রুপালি জরির সূক্ষ্ম কল্কা ও পাড়ের অলংকরণ',
    length: '৫.৫ মিটার',
    careInstructions: 'ড্রাই ওয়াশ',
    artisanName: 'ওস্তাদ মোস্তফা কামাল',
    artisanDays: 19,
    artisanBio: 'নরম বাতাসে স্নিগ্ধ অনুভূতি এনে দেওয়া ফিরোজা রঙের অতুলনীয় জামদানি।',
    artisanImage: ARTISAN_IMG_2,
    colors: [
      { name: 'ফিরোজা নীল', hex: '#00acc1' },
      { name: 'আকাশি নীল', hex: '#81d4fa' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'ফিরোজা নীল',
    occasion: 'দৈনন্দিন পরিধান'
  },
  {
    id: 'saree-jd-8',
    name: 'মেটে সবুজ রূপগঞ্জি কার্পাস জামদানি',
    subtitle: 'প্রাকৃতিক মেটে সবুজ ও শ্যাওলা জমিনে ট্র্যাডিশনাল করলা বুটি ও মাছের পাড়',
    category: 'ঢাকাই জামদানি',
    subCategory: 'ঢাকাই জামদানি',
    origin: 'রূপগঞ্জ, নারায়ণগঞ্জ',
    price: 14800,
    originalPrice: 17500,
    discountBadge: '১৫% ছাড়',
    badge: 'হাতে বোনা',
    badgeType: 'neutral',
    rating: 4.7,
    reviewCount: 18,
    buyersRecommended: 95,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfj3latVXH2yMVunXlltRuWZyuGiNcbAIbTmV_7EQcerO-D8YU90hUhIMoYuhjD8A6T4biA1Qj2ZnJJIdN8uYKGsmI1pwsne2kzhnF-y99U7ag_qOybz-yWamjMO9dmx6V4ktZ8lFrHYWVRq7STAj5jeAETlYXDKmuY-BMEiNG8Q-wlCrIjegssuG9QnUzh5VFLt0Epgm7l7kqfn3alq-JVdEIQDqhmY8cUzX8hIYCr2yGDEdvShw',
    galleryImages: [
      {
        label: 'আঁচল',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfj3latVXH2yMVunXlltRuWZyuGiNcbAIbTmV_7EQcerO-D8YU90hUhIMoYuhjD8A6T4biA1Qj2ZnJJIdN8uYKGsmI1pwsne2kzhnF-y99U7ag_qOybz-yWamjMO9dmx6V4ktZ8lFrHYWVRq7STAj5jeAETlYXDKmuY-BMEiNG8Q-wlCrIjegssuG9QnUzh5VFLt0Epgm7l7kqfn3alq-JVdEIQDqhmY8cUzX8hIYCr2yGDEdvShw',
        description: 'মেটে সবুজে প্রাচীন মাছের আঁইশ ও পাতার পাড়'
      }
    ],
    purityMark: 'জিআই সার্টিফাইড',
    countInfo: '১০০ কাউন্ট সুতা',
    fabric: '১০০% পিওর হ্যান্ডস্পান কটন',
    craftsmanship: 'মাছের আঁইশ ও জুঁইফুল খাঁটি কার্পাস কাজ',
    length: '৫.৫ মিটার',
    careInstructions: 'ড্রাই ওয়াশ কাম্য',
    artisanName: 'তাঁতি রফিকুল ইসলাম',
    artisanDays: 21,
    artisanBio: 'রূপগঞ্জের মাটিতে বংশপরম্পরায় লালিত লোকজ নকশাশৈলীর সার্থক প্রকাশ।',
    artisanImage: ARTISAN_IMG_1,
    colors: [
      { name: 'মেটে সবুজ', hex: '#558b2f' },
      { name: 'পান্না সবুজ', hex: '#1b5e20' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'মেটে সবুজ',
    occasion: 'দৈনন্দিন পরিধান'
  },
  {
    id: 'saree-jd-9',
    name: 'রক্তজবা লাল ঢাকাই জামদানি',
    subtitle: 'বিয়ের কনে ও শুভ অনুষ্ঠানের জন্য রক্তিম লাল জমিনে ঘন স্বর্ণালী কল্কা',
    category: 'ঢাকাই জামদানি',
    subCategory: 'ঢাকাই জামদানি',
    origin: 'সোনারগাঁও, নারায়ণগঞ্জ',
    price: 22800,
    originalPrice: 26500,
    discountBadge: '১৪% ছাড়',
    badge: 'এক্সক্লুসিভ',
    badgeType: 'exclusive',
    rating: 5.0,
    reviewCount: 58,
    buyersRecommended: 99,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWKPs3jM3rD2-iRYruiX6CCKTMw8DY8qxTyd-NKhOHRFn85I2tarAgEJDbjdAU5TxLLJTqOPdxWDSU-c9GVB8VKeaSlU89iER-86ba7pE-bbXlsWd6eKvwaOQg9UCGAPkvSmGAP6jD1JId5nZEJBAoI-ohMxNHtKUujjYi5k664cK6Op40aBEaBzRbFc2t1uedJxYmbOZ_7f_JxHFaajICqJVnalTv3I3V9hFGNb6j7yrWf-dXqsU',
    galleryImages: [
      {
        label: 'আঁচল',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWKPs3jM3rD2-iRYruiX6CCKTMw8DY8qxTyd-NKhOHRFn85I2tarAgEJDbjdAU5TxLLJTqOPdxWDSU-c9GVB8VKeaSlU89iER-86ba7pE-bbXlsWd6eKvwaOQg9UCGAPkvSmGAP6jD1JId5nZEJBAoI-ohMxNHtKUujjYi5k664cK6Op40aBEaBzRbFc2t1uedJxYmbOZ_7f_JxHFaajICqJVnalTv3I3V9hFGNb6j7yrWf-dXqsU',
        description: 'গাঢ় রক্তলাল জমিনে ঘন রাজকীয় স্বর্ণালী কারুকাজ'
      }
    ],
    purityMark: 'জিআই সার্টিফাইড',
    countInfo: '১০০ কাউন্ট সুতা',
    fabric: '১০০ কাউন্ট সুতি ও খাঁটি রেশম',
    craftsmanship: 'ঘন ব্রাইডাল জরি কল্কা ও রাজকীয় মন্দির বর্ডার',
    length: '৫.৫ মিটার + ব্লাউজ পিস',
    careInstructions: 'ড্রাই ওয়াশ কাম্য',
    artisanName: 'ওস্তাদ মোস্তফা কামাল',
    artisanDays: 34,
    artisanBio: 'বাঙালি কনের লাল শাড়ির চিরন্তন ঐতিহ্যকে রাজকীয় মহিমায় ফুটিয়ে তোলা হয়েছে।',
    artisanImage: ARTISAN_IMG_2,
    colors: [
      { name: 'রক্তজবা লাল', hex: '#b71c1c' },
      { name: 'সিঁদুর লাল', hex: '#7a0c22' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'রক্তজবা লাল',
    occasion: 'বিয়ে ও উৎসব'
  },
  {
    id: 'saree-jd-10',
    name: 'মল্লিকা আইভরি খাঁটি ঢাকাই মসলিন',
    subtitle: 'অতি সূক্ষ্ম ২০০ কাউন্ট হাতে বোনা মসলিন জামদানি • রাজকীয় সংগ্রহশালা সংস্করণ',
    category: 'ঢাকাই জামদানি',
    subCategory: 'ঢাকাই জামদানি',
    origin: 'সোনারগাঁও, নারায়ণগঞ্জ',
    price: 32000,
    originalPrice: 38000,
    discountBadge: '১৬% ছাড়',
    badge: 'মাস্টারপিস',
    badgeType: 'exclusive',
    rating: 5.0,
    reviewCount: 26,
    buyersRecommended: 100,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDK78X7yg9triwYZSOt0Xhioe_lwIqM9hIN911wyPgDNBkmMDIC7vEdXHqSbUBVcLHafYl-pz5ZYs4wVDjq7pnVo_b55noYTe5m9O3NM8BAd_HMpiV2HQ723q0lNS0tnZvO-ZovZqPll5u8tsHX8pOPK8D6jAzpmF9WN3dSfJDZA0mqWP709sAPx_4pPILDidmXo71fcjTKcwboGcHC7UlusRPDzxd0_y87UTdxjVzh-sac3UKu8CY',
    galleryImages: [
      {
        label: 'আঁচল',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDK78X7yg9triwYZSOt0Xhioe_lwIqM9hIN911wyPgDNBkmMDIC7vEdXHqSbUBVcLHafYl-pz5ZYs4wVDjq7pnVo_b55noYTe5m9O3NM8BAd_HMpiV2HQ723q0lNS0tnZvO-ZovZqPll5u8tsHX8pOPK8D6jAzpmF9WN3dSfJDZA0mqWP709sAPx_4pPILDidmXo71fcjTKcwboGcHC7UlusRPDzxd0_y87UTdxjVzh-sac3UKu8CY',
        description: 'উড়ন্ত পালকের মতো স্বচ্ছ মসলিনে অদৃশ্য প্রায় সূক্ষ্ম ফুল'
      }
    ],
    purityMark: 'ইউনেস্কো স্বীকৃত মসলিন',
    countInfo: '২০০ কাউন্ট মসলিন',
    fabric: 'ফুটি কার্পাস তুলায় হাতে কাটা সুতো',
    craftsmanship: '৪ মাস ব্যাপী নিরবচ্ছিন্ন সাধনায় নির্মিত মসলিন জামদানি',
    length: '৫.৫ মিটার',
    careInstructions: 'স্পেশাল প্রিজারভেশন ড্রাই ওয়াশ',
    artisanName: 'তাঁতি রফিকুল ইসলাম ও পরিবার',
    artisanDays: 60,
    artisanBio: 'মুঘল আমলের ঐতিহ্য পুনরুদ্ধার করে তৈরি এক ঐতিহাসিক মসলিন জামদানি সৃষ্টি।',
    artisanImage: ARTISAN_IMG_1,
    colors: [
      { name: 'আইভরি মসলিন', hex: '#fdfbf7' },
      { name: 'স্বর্ণাভ ক্রিম', hex: '#e8dab5' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'আইভরি মসলিন',
    occasion: 'বিয়ে ও উৎসব'
  },

  // ==========================================
  // 2. কাতান ও বেনারসি (KATAN & BANARASI - 10 SAREES)
  // ==========================================
  {
    id: 'saree-kb-1',
    name: 'সিঁদুর রাঙা ব্রাইডাল কাতান',
    subtitle: 'ভারী সোনালী খাদি জরি কাজ • ঐতিহ্যবাহী বেনারসি কাতান',
    category: 'কাতান ও বেনারসি',
    subCategory: 'ব্রাইডাল কাতান',
    origin: 'মিরপুর বেনারসি পল্লী, ঢাকা',
    price: 29500,
    originalPrice: 34000,
    discountBadge: '১৩% ছাড়',
    badge: 'এক্সক্লুসিভ',
    badgeType: 'exclusive',
    rating: 5.0,
    reviewCount: 42,
    buyersRecommended: 99,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWKPs3jM3rD2-iRYruiX6CCKTMw8DY8qxTyd-NKhOHRFn85I2tarAgEJDbjdAU5TxLLJTqOPdxWDSU-c9GVB8VKeaSlU89iER-86ba7pE-bbXlsWd6eKvwaOQg9UCGAPkvSmGAP6jD1JId5nZEJBAoI-ohMxNHtKUujjYi5k664cK6Op40aBEaBzRbFc2t1uedJxYmbOZ_7f_JxHFaajICqJVnalTv3I3V9hFGNb6j7yrWf-dXqsU',
    galleryImages: [
      {
        label: 'আঁচল',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8ZPZEjIp08RiimwDPsipr7OiRYp6WePGCq5sO09r53H-z9LwIc6Tsq8LTwK5pTGfuMfNlJkK3m15PU2d_FZc_YRAYEC6QS_uToODIAQZepyUM7QZFnXSxdyzs4-6HVPnL5pPcXABQ9vjaqiWNO5QyponXKUTnBIkxPN7OKfzWIg4GWaAIDKeKKjG9rhpvOuST1xm563XN4UKga5aeAKv-ZBTv0E4F1D71xiI1-qR91V1a5j6kw4E',
        description: 'ঘন সোনার জরির নকশাখচিত ব্রাইডাল আঁচল'
      }
    ],
    purityMark: '১০০% পিওর সিল্ক',
    countInfo: 'খাঁটি কাতান সিল্ক',
    fabric: '১০০% খাঁটি মালবেরি রেশম সিল্ক',
    craftsmanship: 'ভারী খাঁটি খাদি জারি মীনাকারি ব্রোকেড',
    length: '৬.৫ মিটার (ব্লাউজ সহ)',
    careInstructions: 'স্পেশাল ড্রাই ওয়াশ',
    artisanName: 'মাস্টার কারিগর হাসেম আলী',
    artisanDays: 35,
    artisanBio: 'বাঙালি কনের চিরায়ত স্বপ্ন সিঁদুর রাঙা কাতান। ৩৫ দিনের একান্ত সাধনায় নির্মিত এই অমর ব্রাইডাল মাস্টারপিস।',
    artisanImage: ARTISAN_IMG_1,
    colors: [
      { name: 'সিঁদুর লাল', hex: '#7a0c22' },
      { name: 'রয়াল মেরুন', hex: '#550012' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'সিঁদুর লাল',
    occasion: 'বিয়ে ও উৎসব'
  },
  {
    id: 'saree-kb-2',
    name: 'রানী গোলাপি বেনারসি কাতান',
    subtitle: 'বেনারসি পিওর কাতান • হেভি অ্যান্টিক জরি ও নিখুঁত মীনাকারি',
    category: 'কাতান ও বেনারসি',
    subCategory: 'বেনারসি কাতান',
    origin: 'মিরপুর বেনারসি পল্লী',
    price: 24900,
    originalPrice: 28000,
    discountBadge: '১১% ছাড়',
    badge: 'সেরা পছন্দ',
    badgeType: 'secondary',
    rating: 5.0,
    reviewCount: 85,
    buyersRecommended: 99,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSlogwoIcnBY3za5MeA2zrlg2Evse3GaBEgb1p5dmMQ9jhg2Ik3CQrNQ_Dxt9FJ1Ia41xMSz0Iga5x1XgAL1esZ7UYDvrz_QB8Euo9Ujk94BeViCN8OULfdBuhPQZ1macgy8bSiykP0KGeHQEsMEri8AhvZTOwEWRdRf5Mt9iLBVm1tMHunT18JW0j5FFJyE8KGhOCF35x-8xvjQJg7suMxCSjdGvMD3mapq1ScRG402F_IvH52Y0',
    galleryImages: [
      {
        label: 'আঁচল',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSlogwoIcnBY3za5MeA2zrlg2Evse3GaBEgb1p5dmMQ9jhg2Ik3CQrNQ_Dxt9FJ1Ia41xMSz0Iga5x1XgAL1esZ7UYDvrz_QB8Euo9Ujk94BeViCN8OULfdBuhPQZ1macgy8bSiykP0KGeHQEsMEri8AhvZTOwEWRdRf5Mt9iLBVm1tMHunT18JW0j5FFJyE8KGhOCF35x-8xvjQJg7suMxCSjdGvMD3mapq1ScRG402F_IvH52Y0',
        description: 'গাঢ় রানী গোলাপি জমিনে ঘন মীনাকারি কল্কার কাজ'
      }
    ],
    purityMark: '১০০% পিওর সিল্ক',
    countInfo: '১০০% কাতান সিল্ক',
    fabric: 'মালবেরি রেশম সিল্ক ও জারি',
    craftsmanship: 'ঘন খাঁটি জরি কাজ ও রাজকীয় মন্দির পাড়',
    length: '৬.৩ মিটার',
    careInstructions: 'ড্রাই ওয়াশ কাম্য',
    artisanName: 'তাঁতি রফিকুল ইসলাম',
    artisanDays: 26,
    artisanBio: 'বাংলার ঐতিহ্যবাহী বিয়ের রানী সাজের জন্য শ্রেষ্ঠ নিবেদন।',
    artisanImage: ARTISAN_IMG_1,
    colors: [
      { name: 'রানী গোলাপি', hex: '#d81b60' },
      { name: 'সিঁদুর লাল', hex: '#7a0c22' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'রানী গোলাপি',
    occasion: 'বিয়ে ও উৎসব'
  },
  {
    id: 'saree-kb-3',
    name: 'পান্না সবুজ ব্রাইডাল বেনারসি কাতান',
    subtitle: 'ঘন সোনালী কড়ওয়া বুটি ও চওড়া ফ্লোরাল বর্ডার সংবলিত রাজকীয় রেশমি কাতান',
    category: 'কাতান ও বেনারসি',
    subCategory: 'বেনারসি কাতান',
    origin: 'মিরপুর বেনারসি পল্লী',
    price: 27800,
    originalPrice: 32000,
    discountBadge: '১৩% ছাড়',
    badge: 'এক্সক্লুসিভ',
    badgeType: 'exclusive',
    rating: 5.0,
    reviewCount: 47,
    buyersRecommended: 99,
    image: '/src/assets/images/katan_emerald_banarasi_1791960142039.jpg',
    galleryImages: [
      {
        label: 'আঁচল',
        url: '/src/assets/images/katan_emerald_banarasi_1791960142039.jpg',
        description: 'পান্না সবুজ জমিনে ঘন কড়ওয়া বুটি ও অ্যান্টিক স্বর্ণ জরির কাজ'
      }
    ],
    purityMark: '১০০% পিওর সিল্ক',
    countInfo: 'মালবেরি সিল্ক কাতান',
    fabric: '১০০% পিওর সিল্ক ও খাঁটি জারি',
    craftsmanship: 'হাতে বোনা কড়ওয়া সোনালী বুটি ও ট্যাসেল যুক্ত আঁচল',
    length: '৬.৩ মিটার (ব্লাউজ সহ)',
    careInstructions: 'স্পেশাল ড্রাই ওয়াশ',
    artisanName: 'মাস্টার কারিগর হাসেম আলী',
    artisanDays: 30,
    artisanBio: 'পান্না সবুজের স্নিগ্ধতা ও স্বর্ণ জরির আভিজাত্যে তৈরি এক অমর ব্রাইডাল সৃষ্টি।',
    artisanImage: ARTISAN_IMG_2,
    colors: [
      { name: 'পান্না সবুজ', hex: '#1b5e20' },
      { name: 'বোতল গ্রিন', hex: '#004d40' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'পান্না সবুজ',
    occasion: 'বিয়ে ও উৎসব'
  },
  {
    id: 'saree-kb-4',
    name: 'রাজকীয় মেহগনি বেনারসি কাতান',
    subtitle: 'ডিপ মেহগনি মেরুন জমিনে অ্যান্টিক সোনালী জরি ব্রোকেড ও মীনাকারি কল্কা',
    category: 'কাতান ও বেনারসি',
    subCategory: 'বেনারসি কাতান',
    origin: 'মিরপুর বেনারসি পল্লী',
    price: 26500,
    originalPrice: 30500,
    discountBadge: '১৩% ছাড়',
    badge: 'সেরা পছন্দ',
    badgeType: 'secondary',
    rating: 4.9,
    reviewCount: 38,
    buyersRecommended: 98,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVSlKK2X3KuPsQk2Bm0ZcPuAmauZvEzqhH9AYelQmdYq6XBFXQVo37S9_pVlqSGfKzKlgR5LwCjZpKb_oPbYJxjZG4OX0YT5OIJ-uHt1DkbsjdU7jCtkdh7znRWC5G5eDo4ZxpHwUNdxLs_tbqPMslraak_K6AcxLFNvcOwyRYGXz2E7yMLiB3u5PsrT_CdzM3EMUhCdtZDPfXgUbJeu7RxLgvXLy79_jUmPOrYVQywUol_aW0VsA',
    galleryImages: [
      {
        label: 'আঁচল',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVSlKK2X3KuPsQk2Bm0ZcPuAmauZvEzqhH9AYelQmdYq6XBFXQVo37S9_pVlqSGfKzKlgR5LwCjZpKb_oPbYJxjZG4OX0YT5OIJ-uHt1DkbsjdU7jCtkdh7znRWC5G5eDo4ZxpHwUNdxLs_tbqPMslraak_K6AcxLFNvcOwyRYGXz2E7yMLiB3u5PsrT_CdzM3EMUhCdtZDPfXgUbJeu7RxLgvXLy79_jUmPOrYVQywUol_aW0VsA',
        description: 'ঘন ব্রোকেড মেহগনি আঁচল ও জমকালো পাড়'
      }
    ],
    purityMark: 'সিল্ক মার্ক',
    countInfo: '১০০% পিওর সিল্ক',
    fabric: 'মালবেরি রেশম সিল্ক',
    craftsmanship: 'ঘন জারদৌসি ও ব্রোকেড বুনন',
    length: '৬.৩ মিটার',
    careInstructions: 'ড্রাই ওয়াশ কাম্য',
    artisanName: 'তাঁতি রফিকুল ইসলাম',
    artisanDays: 27,
    artisanBio: 'আভিজাত্য ও ঐতিহ্যের অপরূপ প্রতিফলন এই মেহগনি বেনারসি কাতান।',
    artisanImage: ARTISAN_IMG_1,
    colors: [
      { name: 'মেহগনি মেরুন', hex: '#3e1d1c' },
      { name: 'রয়াল মেরুন', hex: '#550012' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'মেহগনি মেরুন',
    occasion: 'বিয়ে ও উৎসব'
  },
  {
    id: 'saree-kb-5',
    name: 'ময়ূরকণ্ঠী কাতান সিল্ক শাড়ি',
    subtitle: 'নীল ও সবুজের রোদছায়া ডাবল শেড • সোনালী জরি প্যাটার্ন',
    category: 'কাতান ও বেনারসি',
    subCategory: 'কাতান সিল্ক',
    origin: 'মিরপুর, ঢাকা',
    price: 21800,
    originalPrice: 25000,
    discountBadge: '১২% ছাড়',
    badge: 'হাতে বোনা',
    badgeType: 'neutral',
    rating: 4.8,
    reviewCount: 35,
    buyersRecommended: 97,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8ZPZEjIp08RiimwDPsipr7OiRYp6WePGCq5sO09r53H-z9LwIc6Tsq8LTwK5pTGfuMfNlJkK3m15PU2d_FZc_YRAYEC6QS_uToODIAQZepyUM7QZFnXSxdyzs4-6HVPnL5pPcXABQ9vjaqiWNO5QyponXKUTnBIkxPN7OKfzWIg4GWaAIDKeKKjG9rhpvOuST1xm563XN4UKga5aeAKv-ZBTv0E4F1D71xiI1-qR91V1a5j6kw4E',
    galleryImages: [
      {
        label: 'আঁচল',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8ZPZEjIp08RiimwDPsipr7OiRYp6WePGCq5sO09r53H-z9LwIc6Tsq8LTwK5pTGfuMfNlJkK3m15PU2d_FZc_YRAYEC6QS_uToODIAQZepyUM7QZFnXSxdyzs4-6HVPnL5pPcXABQ9vjaqiWNO5QyponXKUTnBIkxPN7OKfzWIg4GWaAIDKeKKjG9rhpvOuST1xm563XN4UKga5aeAKv-ZBTv0E4F1D71xiI1-qR91V1a5j6kw4E',
        description: 'ময়ূরকণ্ঠী দো-রঙা আভায় খাঁটি সোনালী জরি অলংকরণ'
      }
    ],
    purityMark: 'সিল্ক মার্ক',
    countInfo: '১০০% পিওর সিল্ক',
    fabric: '১০০% কাতান সিল্ক',
    craftsmanship: 'ডাবল শেড বুনন ও জরির পাড়',
    length: '৬.৩ মিটার',
    careInstructions: 'ড্রাই ওয়াশ কাম্য',
    artisanName: 'মাস্টার কারিগর হাসেম আলী',
    artisanDays: 22,
    artisanBio: 'রোদ ও ছায়ায় দুই রঙের অনবদ্য প্রতিফলন ঘটায় ময়ূরকণ্ঠী কাতান।',
    artisanImage: ARTISAN_IMG_1,
    colors: [
      { name: 'ময়ূরকণ্ঠী', hex: '#004d40' },
      { name: 'রয়াল ব্লু', hex: '#0a1a36' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'ময়ূরকণ্ঠী',
    occasion: 'সান্ধ্য অনুষ্ঠান'
  },
  {
    id: 'saree-kb-6',
    name: 'রত্নখচিত জাম্বুনি বেগুনি কাতান',
    subtitle: 'ডিপ রয়েল অবারজিন বেগুনি জমিনে রেশমি মীনাকারি বুটা ও মন্দির পাড়',
    category: 'কাতান ও বেনারসি',
    subCategory: 'কাতান সিল্ক',
    origin: 'মিরপুর বেনারসি পল্লী',
    price: 23500,
    originalPrice: 27000,
    discountBadge: '১৩% ছাড়',
    badge: 'নতুন আগমন',
    badgeType: 'primary',
    rating: 4.9,
    reviewCount: 29,
    buyersRecommended: 98,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8qKheyscleDZVVidCIQB7h2zJod4W0kC4M8eldNNULzl_61KxDOb5pj9JrRQhppLSrG5YVrrp_FHdrq26VnYe_HpgjoF7hvo-QVHIXpk1pNgElKmS0l7oROxwURGcdJ2halTCfa9EC_jz7PXF029ZcSnfEbW-D9WqXXGbkFsig_VykPjHtL6izwBWGYkL-e0naQms6XNFL56Lb-w8nuR37q8Y_NAv7miEhEqTp49qXabPXCVGGvY',
    galleryImages: [
      {
        label: 'আঁচল',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8qKheyscleDZVVidCIQB7h2zJod4W0kC4M8eldNNULzl_61KxDOb5pj9JrRQhppLSrG5YVrrp_FHdrq26VnYe_HpgjoF7hvo-QVHIXpk1pNgElKmS0l7oROxwURGcdJ2halTCfa9EC_jz7PXF029ZcSnfEbW-D9WqXXGbkFsig_VykPjHtL6izwBWGYkL-e0naQms6XNFL56Lb-w8nuR37q8Y_NAv7miEhEqTp49qXabPXCVGGvY',
        description: 'বেগুনি ও সোনালী জরির সুচারু বুনন'
      }
    ],
    purityMark: 'সিল্ক মার্ক',
    countInfo: '১০০% পিওর সিল্ক',
    fabric: 'মালবেরি সিল্ক কাতান',
    craftsmanship: 'রঙিন রেশমি সুতো ও জরির মীনাকারি',
    length: '৬.৩ মিটার',
    careInstructions: 'ড্রাই ওয়াশ কাম্য',
    artisanName: 'তাঁতি রফিকুল ইসলাম',
    artisanDays: 24,
    artisanBio: 'গাঢ় বেগুনির আভিজাত্যে রাতের যে কোনো জমকালো উৎসবে অনন্য রূপ দেয়।',
    artisanImage: ARTISAN_IMG_1,
    colors: [
      { name: 'জাম্বুনি বেগুনি', hex: '#4a148c' },
      { name: 'রয়াল মেরুন', hex: '#550012' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'জাম্বুনি বেগুনি',
    occasion: 'বিয়ে ও উৎসব'
  },
  {
    id: 'saree-kb-7',
    name: 'স্বর্ণাভ কাঁচা হলুদ বিয়ের কাতান',
    subtitle: 'গায়ে হলুদের রাজকীয় সাজে উজ্জ্বল সোনালী জাংগলা কাতান বেনারসি',
    category: 'কাতান ও বেনারসি',
    subCategory: 'বেনারসি কাতান',
    origin: 'মিরপুর বেনারসি পল্লী',
    price: 22400,
    originalPrice: 26000,
    discountBadge: '১৪% ছাড়',
    badge: 'বেস্টসেলার',
    badgeType: 'secondary',
    rating: 4.9,
    reviewCount: 44,
    buyersRecommended: 98,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_ZTSh5H-arIqulBXavRAkqnq9kILjme_dfV8n8MT6MK-snoCR0clRfnEkHxj7xkGB_xkNlJzJzgEkEXAGOl07cdrXj_7KFsDB4HdKLSs5cVsaAKL1Go-Mr0zJNxiM0DNdShKY1ltRzxHZcWtnzjIUpcKeTj0WjsttF1t7uwy9TJvuzLB8ylFGmJggnDDf8BdHGivqelAoIfGJ-euk4WmjmJWO0T9FGElPZQuOZY6E5E1zYEHXQZA',
    galleryImages: [
      {
        label: 'আঁচল',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_ZTSh5H-arIqulBXavRAkqnq9kILjme_dfV8n8MT6MK-snoCR0clRfnEkHxj7xkGB_xkNlJzJzgEkEXAGOl07cdrXj_7KFsDB4HdKLSs5cVsaAKL1Go-Mr0zJNxiM0DNdShKY1ltRzxHZcWtnzjIUpcKeTj0WjsttF1t7uwy9TJvuzLB8ylFGmJggnDDf8BdHGivqelAoIfGJ-euk4WmjmJWO0T9FGElPZQuOZY6E5E1zYEHXQZA',
        description: 'হলুদ জমিনে ভারী গোল্ডেন জাংগলা ব্রোকেড'
      }
    ],
    purityMark: 'সিল্ক মার্ক',
    countInfo: '১০০% পিওর সিল্ক',
    fabric: 'মালবেরি রেশম সিল্ক কাতান',
    craftsmanship: 'ঘন সোনালী জাংগলা জরি বুনন',
    length: '৬.৩ মিটার',
    careInstructions: 'ড্রাই ওয়াশ কাম্য',
    artisanName: 'মাস্টার কারিগর হাসেম আলী',
    artisanDays: 25,
    artisanBio: 'গায়ে হলুদের মঞ্চে কনের স্বর্গীয় সৌন্দর্য ফুটিয়ে তুলতে এই কাতানের তুলনা নেই।',
    artisanImage: ARTISAN_IMG_2,
    colors: [
      { name: 'কাঁচা হলুদ', hex: '#ffeb3b' },
      { name: 'সরিষা গোল্ড', hex: '#d4af37' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'কাঁচা হলুদ',
    occasion: 'বিয়ে ও উৎসব'
  },
  {
    id: 'saree-kb-8',
    name: 'আকাশী নীল রুপালি জরি বেনারসি',
    subtitle: 'কোমল আকাশী নীল সিল্কে ঝকমকে রুপালী জরি ফ্লোরাল জাল কাজ',
    category: 'কাতান ও বেনারসি',
    subCategory: 'বেনারসি কাতান',
    origin: 'মিরপুর বেনারসি পল্লী',
    price: 24200,
    originalPrice: 28000,
    discountBadge: '১৩% ছাড়',
    badge: 'সীমিত স্টক',
    badgeType: 'neutral',
    rating: 4.8,
    reviewCount: 27,
    buyersRecommended: 96,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBo6Aro3Pmlo8qUWHsGRx4AF0AFRZxXrbae4s8hGax2Ube0szVz_1km7PF44gy_ZnBCXk4QAOrBCwQ7zUHhZ8P7mIEfglQrd9tAjEKzi9n_KRgu5IINQ05cN7Fu2tpNiZLhuTeo5bkc8GX7LV7-WEY8Y_xIbH2VaDZKR4SZ1BNjYkh9kgPoYHoza6oXy0I6DQkiYqwHnyLC9huQVC7XsM6H0WKDTCh4XI1S9JLxP_D680LLU63t0AI',
    galleryImages: [
      {
        label: 'আঁচল',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBo6Aro3Pmlo8qUWHsGRx4AF0AFRZxXrbae4s8hGax2Ube0szVz_1km7PF44gy_ZnBCXk4QAOrBCwQ7zUHhZ8P7mIEfglQrd9tAjEKzi9n_KRgu5IINQ05cN7Fu2tpNiZLhuTeo5bkc8GX7LV7-WEY8Y_xIbH2VaDZKR4SZ1BNjYkh9kgPoYHoza6oXy0I6DQkiYqwHnyLC9huQVC7XsM6H0WKDTCh4XI1S9JLxP_D680LLU63t0AI',
        description: 'আকাশী নীল জমিনে বরফের মতো শুভ্র রূপালী জরির জাল'
      }
    ],
    purityMark: 'সিল্ক মার্ক',
    countInfo: '১০০% পিওর সিল্ক',
    fabric: 'খাঁটি কাতান রেশম',
    craftsmanship: 'রুপালী জরির সূক্ষ্ম বুনন ও আধুনিক প্যাটার্ন',
    length: '৬.৩ মিটার',
    careInstructions: 'ড্রাই ওয়াশ কাম্য',
    artisanName: 'তাঁতি রফিকুল ইসলাম',
    artisanDays: 26,
    artisanBio: 'রিসিপশন বা রাতের পার্টিতে স্নিগ্ধ ও মোহনীয় উপস্থিতি নিশ্চিত করে।',
    artisanImage: ARTISAN_IMG_1,
    colors: [
      { name: 'আকাশি নীল', hex: '#81d4fa' },
      { name: 'রুপালি বেইজ', hex: '#cfd8dc' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'আকাশি নীল',
    occasion: 'সান্ধ্য অনুষ্ঠান'
  },
  {
    id: 'saree-kb-9',
    name: 'রাজপ্রাসাদ মডার্ন কালো কাতান',
    subtitle: 'জেট ব্ল্যাক কাতান জমিনে খাঁটি অ্যান্টিক গোল্ডেন টেম্পল বর্ডার ও আঁচল',
    category: 'কাতান ও বেনারসি',
    subCategory: 'কাতান সিল্ক',
    origin: 'মিরপুর বেনারসি পল্লী',
    price: 25600,
    originalPrice: 29500,
    discountBadge: '১৩% ছাড়',
    badge: 'এক্সক্লুসিভ',
    badgeType: 'exclusive',
    rating: 5.0,
    reviewCount: 39,
    buyersRecommended: 99,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtIpPvUNgA55nzy9vGaCpdboFMyXVDiLQN3D6-_eCsXv8VLsuLg6kRcXS2BZeHe6CmayXDWUFTLIof0160bnZd-btfSLA9NHfdMYb_R_oxv884yqXUT-1BHWRB99Q0SjPvAhZai4kdIxmFG6WXI6oB0M20BH83OjSsDQyNhmjYDe6UzY_RELI7piULjBtx3nn0VGFJ3774GeUs2WqpaFSuxK6NQQm1aTvgs_2l-19e73hcgAwlEYM',
    galleryImages: [
      {
        label: 'আঁচল',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtIpPvUNgA55nzy9vGaCpdboFMyXVDiLQN3D6-_eCsXv8VLsuLg6kRcXS2BZeHe6CmayXDWUFTLIof0160bnZd-btfSLA9NHfdMYb_R_oxv884yqXUT-1BHWRB99Q0SjPvAhZai4kdIxmFG6WXI6oB0M20BH83OjSsDQyNhmjYDe6UzY_RELI7piULjBtx3nn0VGFJ3774GeUs2WqpaFSuxK6NQQm1aTvgs_2l-19e73hcgAwlEYM',
        description: 'কালো কাতানে রাজপ্রাসাদের দরবারি অ্যান্টিক স্বর্ণ অলংকরণ'
      }
    ],
    purityMark: 'সিল্ক মার্ক',
    countInfo: '১০০% পিওর সিল্ক',
    fabric: 'মালবেরি রেশম সিল্ক',
    craftsmanship: 'ঘন অ্যান্টিক কড়ওয়া বুটি ও মন্দির পাড়',
    length: '৬.৩ মিটার',
    careInstructions: 'ড্রাই ওয়াশ কাম্য',
    artisanName: 'মাস্টার কারিগর হাসেম আলী',
    artisanDays: 28,
    artisanBio: 'কালো শাড়ির চিরন্তন মোহ ও রাজকীয় অ্যান্টিক জরির সংমিশ্রণ।',
    artisanImage: ARTISAN_IMG_1,
    colors: [
      { name: 'জেট ব্ল্যাক', hex: '#1b1b1c' },
      { name: 'অ্যান্টিক গোল্ড', hex: '#d4af37' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'জেট ব্ল্যাক',
    occasion: 'সান্ধ্য অনুষ্ঠান'
  },
  {
    id: 'saree-kb-10',
    name: 'কোরাল পিচ নরম বেনারসি জর্জেট কাতান',
    subtitle: 'কোরাল পিচ শেডে হালকা নরম বেনারসি জর্জেট জমিনে মীনাকারি ফ্লোরাল বুটা',
    category: 'কাতান ও বেনারসি',
    subCategory: 'বেনারসি কাতান',
    origin: 'মিরপুর বেনারসি পল্লী',
    price: 21000,
    originalPrice: 24500,
    discountBadge: '১৪% ছাড়',
    badge: 'নতুন আগমন',
    badgeType: 'primary',
    rating: 4.8,
    reviewCount: 31,
    buyersRecommended: 97,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBehOVAaxn62FP2w30EuVEE8D9T8nL3u5Rtvy-qsXbQbMlApFuM0sOmvb-TD02Y6s8cKOsFTYT2NajcVZkam47EtFpMt3L8pU94paaYXiKuPV4oHVjE0DghXXPiD-4dIF91DCBijWJWFsZAwHx_RLSBEhhdtMzff0acddt2PWiflyeAoxKTv3_9roitA3paX6C0tdN5kFmXFnYm1IZAaNs3EjV8_ZDAblS7qqUZGQgRu3aQ-DtzLNo',
    galleryImages: [
      {
        label: 'আঁচল',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBehOVAaxn62FP2w30EuVEE8D9T8nL3u5Rtvy-qsXbQbMlApFuM0sOmvb-TD02Y6s8cKOsFTYT2NajcVZkam47EtFpMt3L8pU94paaYXiKuPV4oHVjE0DghXXPiD-4dIF91DCBijWJWFsZAwHx_RLSBEhhdtMzff0acddt2PWiflyeAoxKTv3_9roitA3paX6C0tdN5kFmXFnYm1IZAaNs3EjV8_ZDAblS7qqUZGQgRu3aQ-DtzLNo',
        description: 'কোরাল পিচে রেশমি মীনাকারি ব্রাইডাল আভা'
      }
    ],
    purityMark: 'সিল্ক মার্ক',
    countInfo: '১০০% পিওর সিল্ক',
    fabric: 'বেনারসি জর্জেট-কাতান ব্লেন্ড',
    craftsmanship: 'নরম জর্জেট ফল ও রেশম মীনাকারি কারুকাজ',
    length: '৬.৩ মিটার',
    careInstructions: 'ড্রাই ওয়াশ কাম্য',
    artisanName: 'তাঁতি রফিকুল ইসলাম',
    artisanDays: 23,
    artisanBio: 'ভারী কাতানের চেয়ে হালকা অথচ ব্রাইডাল জৌলুসে পরিপূর্ণ এক অনন্য শাড়ি।',
    artisanImage: ARTISAN_IMG_2,
    colors: [
      { name: 'কোরাল পিচ', hex: '#ffab91' },
      { name: 'প্যাস্টেল পিঙ্ক', hex: '#f8bbd0' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'কোরাল পিচ',
    occasion: 'বিয়ে ও উৎসব'
  },

  // ==========================================
  // 3. তসর ও মটকা (TUSSAR & MATKA - 10 SAREES)
  // ==========================================
  {
    id: 'saree-tm-1',
    name: 'পান্না সবুজ তসর সিল্ক শাড়ি',
    subtitle: 'ডিপ এমারেল্ড গ্রিন • জরি আঁচল ও প্রাকৃতিক সিল্ক টেক্সচার',
    category: 'তসর ও মটকা',
    subCategory: 'তসর সিল্ক',
    origin: 'চাঁপাইনবাবগঞ্জ রেশম পল্লী',
    price: 12400,
    originalPrice: 14500,
    discountBadge: '১৫% ছাড়',
    badge: 'সীমিত স্টক',
    badgeType: 'neutral',
    rating: 4.8,
    reviewCount: 19,
    buyersRecommended: 95,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfj3latVXH2yMVunXlltRuWZyuGiNcbAIbTmV_7EQcerO-D8YU90hUhIMoYuhjD8A6T4biA1Qj2ZnJJIdN8uYKGsmI1pwsne2kzhnF-y99U7ag_qOybz-yWamjMO9dmx6V4ktZ8lFrHYWVRq7STAj5jeAETlYXDKmuY-BMEiNG8Q-wlCrIjegssuG9QnUzh5VFLt0Epgm7l7kqfn3alq-JVdEIQDqhmY8cUzX8hIYCr2yGDEdvShw',
    galleryImages: [
      {
        label: 'আঁচল',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8PV42dyRMoJSIwlzDFRYTOYloHEKKXkQQ7Q-zgaKGUyypwamUC9RVpTZRhSeHNDXJrpmdODu2rV68vJTOA8yXuKkoeknVyh0IiCWwalFRZcknB0DrXEjDk-Bz3m7UIasnKlaAyzpgkKp4Wty7AvvESOM4zKbUn_EW6A_knpkR8lZrO-eRJEYXnQYlhmnUXBmexF5OgJI-zLi5MWoSx-qEvqdnB1QjTpC077RXAZIcfF4jvR959Og',
        description: 'অ্যান্টিক স্বর্ণ জরির বর্ডার ও খাঁটি তসর বুনন'
      }
    ],
    purityMark: 'সিল্ক মার্ক',
    countInfo: 'ন্যাচারাল সিল্ক',
    fabric: '১০০% পিওর তসর সিল্ক',
    craftsmanship: 'ট্র্যাডিশনাল পদ্ম বুটি নকশা ও জরি পাড়',
    length: '৫.৫ মিটার + ১ মিটার ব্লাউজ পিস',
    careInstructions: 'কেবলমাত্র ড্রাই ওয়াশ কাম্য',
    artisanName: 'কারুশিল্পী মনসুর আলী',
    artisanDays: 18,
    artisanBio: 'প্রাকৃতিক তসরের উজ্জ্বলতা বজায় রেখে হস্তচালিত তাঁতে নিখুঁত বোনা এই ঐতিহ্যবাহী শাড়ি।',
    artisanImage: ARTISAN_IMG_1,
    colors: [
      { name: 'পান্না সবুজ', hex: '#1b5e20' },
      { name: 'সোনালী তসর', hex: '#d4af37' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'পান্না সবুজ',
    occasion: 'বিয়ে ও উৎসব'
  },
  {
    id: 'saree-tm-2',
    name: 'খাঁটি বুনো মধু তসর সিল্ক শাড়ি',
    subtitle: 'হানি গোল্ডেন বেইজ তসর জমিনে বৈসাদৃশ্য মেরুন প্রিন্টেড আঁচল ও প্রাকৃতিক লাস্টার',
    category: 'তসর ও মটকা',
    subCategory: 'তসর সিল্ক',
    origin: 'চাঁপাইনবাবগঞ্জ রেশম শিল্প',
    price: 13800,
    originalPrice: 16000,
    discountBadge: '১৪% ছাড়',
    badge: 'হাতে বোনা',
    badgeType: 'neutral',
    rating: 4.9,
    reviewCount: 36,
    buyersRecommended: 98,
    image: '/src/assets/images/tussar_silk_honey_gold_1791960144448.jpg',
    galleryImages: [
      {
        label: 'আঁচল',
        url: '/src/assets/images/tussar_silk_honey_gold_1791960144448.jpg',
        description: 'মধু তসরের সোনালী ঔজ্জ্বল্য ও গাঢ় খয়েরি আঁচল'
      }
    ],
    purityMark: '১০০% খাঁটি তসর',
    countInfo: 'বুনো রেশম তসর',
    fabric: 'প্রাকৃতিক ওয়াইল্ড তসর সিল্ক',
    craftsmanship: 'হাতে বোনা রেশমি সুতো ও টেম্পল জরি বর্ডার',
    length: '৬.৩ মিটার (ব্লাউজ সহ)',
    careInstructions: 'ড্রাই ওয়াশ কাম্য',
    artisanName: 'কারুশিল্পী মনসুর আলী',
    artisanDays: 20,
    artisanBio: 'প্রকৃতির বুকে গড়া কোকুন থেকে সংগৃহীত খাঁটি বুনো তসরের রাজকীয় সৃষ্টি।',
    artisanImage: ARTISAN_IMG_1,
    colors: [
      { name: 'মধু সোনালী', hex: '#d4af37' },
      { name: 'রয়াল মেরুন', hex: '#550012' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'মধু সোনালী',
    occasion: 'বিয়ে ও উৎসব'
  },
  {
    id: 'saree-tm-3',
    name: 'খয়েরি চকলেট ঘিচা তসর শাড়ি',
    subtitle: 'টেক্সচারযুক্ত প্রাকৃতিক ঘিচা তসর জমিনে অ্যান্টিক ব্রাস সুতোর বর্ডার',
    category: 'তসর ও মটকা',
    subCategory: 'ঘিচা তসর',
    origin: 'চাঁপাইনবাবগঞ্জ',
    price: 11200,
    originalPrice: 13500,
    discountBadge: '১৭% ছাড়',
    badge: 'সেরা পছন্দ',
    badgeType: 'secondary',
    rating: 4.7,
    reviewCount: 24,
    buyersRecommended: 94,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSyh3r43kNYzURqD5t4nb3RBJoXIt_48_vssZjGKugY7gH4JY8Z2SuTXLYcYY27Pl2Bo51H69J-9LKDlR24XIiX9UdLHlPVabpQhm6Sqkby4No3f7vfeQSHmP7dxB5JrVrNPOZtlggM6Uhf4WnQ5_4vSn3kSW7VZ5fUhOGidDkngZdzAtym4YfsyvIMM3kO92Nq1Rv5goO3WS_YP60Rp0Gphfi7u1OMgYV9HbTdIgAlxp5rTCfais',
    galleryImages: [
      {
        label: 'আঁচল',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSyh3r43kNYzURqD5t4nb3RBJoXIt_48_vssZjGKugY7gH4JY8Z2SuTXLYcYY27Pl2Bo51H69J-9LKDlR24XIiX9UdLHlPVabpQhm6Sqkby4No3f7vfeQSHmP7dxB5JrVrNPOZtlggM6Uhf4WnQ5_4vSn3kSW7VZ5fUhOGidDkngZdzAtym4YfsyvIMM3kO92Nq1Rv5goO3WS_YP60Rp0Gphfi7u1OMgYV9HbTdIgAlxp5rTCfais',
        description: 'চকলেট খয়েরি ও সোনালী কাঁচাতসরের বুনন'
      }
    ],
    purityMark: 'সিল্ক মার্ক',
    countInfo: 'ঘিচা তসর সিল্ক',
    fabric: '১০০% ন্যাচারাল ঘিচা সিল্ক',
    craftsmanship: 'মোটা টেক্সচারযুক্ত আরামদায়ক বুনন ও জরি পাড়',
    length: '৬.৩ মিটার',
    careInstructions: 'ড্রাই ওয়াশ কাম্য',
    artisanName: 'তাঁতি সুধীর কর্মকার',
    artisanDays: 16,
    artisanBio: 'ঘিচা তসরের অনবদ্য অমসৃণ টেক্সচার যা পরলে ফুটে ওঠে আভিজাত্যের অন্য মাত্রা।',
    artisanImage: ARTISAN_IMG_2,
    colors: [
      { name: 'চকলেট খয়েরি', hex: '#4e342e' },
      { name: 'বেইজ তসর', hex: '#d7ccc8' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'চকলেট খয়েরি',
    occasion: 'সান্ধ্য অনুষ্ঠান'
  },
  {
    id: 'saree-tm-4',
    name: 'সরিষা হলুদ হ্যান্ডব্লক মটকা সিল্ক',
    subtitle: 'নরম মটকা রেশমে প্রাকৃতিক কাঠের ব্লকে আঁকা প্রাচীন মোটিফ ও সোনালী বর্ডার',
    category: 'তসর ও মটকা',
    subCategory: 'মটকা সিল্ক',
    origin: 'রাজশাহী সিল্ক জোন',
    price: 10500,
    originalPrice: 12500,
    discountBadge: '১৬% ছাড়',
    badge: 'হাতে বোনা',
    badgeType: 'neutral',
    rating: 4.8,
    reviewCount: 30,
    buyersRecommended: 96,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_ZTSh5H-arIqulBXavRAkqnq9kILjme_dfV8n8MT6MK-snoCR0clRfnEkHxj7xkGB_xkNlJzJzgEkEXAGOl07cdrXj_7KFsDB4HdKLSs5cVsaAKL1Go-Mr0zJNxiM0DNdShKY1ltRzxHZcWtnzjIUpcKeTj0WjsttF1t7uwy9TJvuzLB8ylFGmJggnDDf8BdHGivqelAoIfGJ-euk4WmjmJWO0T9FGElPZQuOZY6E5E1zYEHXQZA',
    galleryImages: [
      {
        label: 'আঁচল',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_ZTSh5H-arIqulBXavRAkqnq9kILjme_dfV8n8MT6MK-snoCR0clRfnEkHxj7xkGB_xkNlJzJzgEkEXAGOl07cdrXj_7KFsDB4HdKLSs5cVsaAKL1Go-Mr0zJNxiM0DNdShKY1ltRzxHZcWtnzjIUpcKeTj0WjsttF1t7uwy9TJvuzLB8ylFGmJggnDDf8BdHGivqelAoIfGJ-euk4WmjmJWO0T9FGElPZQuOZY6E5E1zYEHXQZA',
        description: 'সরিষা হলুদ মটকা জমিনে হাতব্লকের শিল্পকর্ম'
      }
    ],
    purityMark: 'সিল্ক মার্ক',
    countInfo: '১০০% পিওর মটকা',
    fabric: 'প্রাকৃতিক হ্যান্ডস্পান মটকা সিল্ক',
    craftsmanship: 'ঐতিহ্যবাহী কাঠের ব্লক প্রিন্ট ও জারি পাড়',
    length: '৬.৩ মিটার',
    careInstructions: 'হালকা শ্যাম্পু ওয়াশ বা ড্রাই ওয়াশ',
    artisanName: 'কারুশিল্পী মনসুর আলী',
    artisanDays: 14,
    artisanBio: 'মটকা সিল্কের স্বস্তিদায়ক নরম অনুভূতি দিনভর পরিধানে অতুলনীয় প্রশান্তি দেয়।',
    artisanImage: ARTISAN_IMG_1,
    colors: [
      { name: 'সরিষা হলুদ', hex: '#fbc02d' },
      { name: 'মেরুন লাল', hex: '#7a0c22' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'সরিষা হলুদ',
    occasion: 'দৈনন্দিন পরিধান'
  },
  {
    id: 'saree-tm-5',
    name: 'জলপাই সবুজ কাঁথাস্ট্রিচ তসর শাড়ি',
    subtitle: 'খাঁটি তসর সিল্কে বাংলার হস্তশিল্প কাঁথাস্ট্রিচ নকশায় চিত্রিত গ্রামীণ আখ্যান',
    category: 'তসর ও মটকা',
    subCategory: 'তসর সিল্ক',
    origin: 'শান্তিনিকেতন ও চাঁপাইনবাবগঞ্জ',
    price: 15600,
    originalPrice: 18500,
    discountBadge: '১৫% ছাড়',
    badge: 'মাস্টারপিস',
    badgeType: 'exclusive',
    rating: 5.0,
    reviewCount: 41,
    buyersRecommended: 99,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfj3latVXH2yMVunXlltRuWZyuGiNcbAIbTmV_7EQcerO-D8YU90hUhIMoYuhjD8A6T4biA1Qj2ZnJJIdN8uYKGsmI1pwsne2kzhnF-y99U7ag_qOybz-yWamjMO9dmx6V4ktZ8lFrHYWVRq7STAj5jeAETlYXDKmuY-BMEiNG8Q-wlCrIjegssuG9QnUzh5VFLt0Epgm7l7kqfn3alq-JVdEIQDqhmY8cUzX8hIYCr2yGDEdvShw',
    galleryImages: [
      {
        label: 'আঁচল',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfj3latVXH2yMVunXlltRuWZyuGiNcbAIbTmV_7EQcerO-D8YU90hUhIMoYuhjD8A6T4biA1Qj2ZnJJIdN8uYKGsmI1pwsne2kzhnF-y99U7ag_qOybz-yWamjMO9dmx6V4ktZ8lFrHYWVRq7STAj5jeAETlYXDKmuY-BMEiNG8Q-wlCrIjegssuG9QnUzh5VFLt0Epgm7l7kqfn3alq-JVdEIQDqhmY8cUzX8hIYCr2yGDEdvShw',
        description: 'হাতে সেলাই করা সূক্ষ্ম রেশমি সুতোর কাঁথাস্ট্রিচ নকশা'
      }
    ],
    purityMark: 'হ্যান্ড ক্রাফটেড তসর',
    countInfo: '১০০% খাঁটি তসর',
    fabric: 'প্রাকৃতিক তসর রেশম',
    craftsmanship: 'সুই সুতোয় নিখুঁত কাঁথাস্টিচ নকশার আঁচল ও পার',
    length: '৬.৩ মিটার',
    careInstructions: 'ড্রাই ওয়াশ কাম্য',
    artisanName: 'কারুশিল্পী নাসরিন আখতার',
    artisanDays: 40,
    artisanBio: '৪০ দিনের একনিষ্ঠ সুঁই-সুতোর বুননে ফুটিয়ে তোলা বাংলার ঐতিহ্যবাহী কাঁথা নকশা।',
    artisanImage: ARTISAN_IMG_1,
    colors: [
      { name: 'জলপাই সবুজ', hex: '#33691e' },
      { name: 'মধু বেইজ', hex: '#d7ccc8' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'জলপাই সবুজ',
    occasion: 'বিয়ে ও উৎসব'
  },
  {
    id: 'saree-tm-6',
    name: 'বেইজ ও টেরাকোটা রেশম মটকা শাড়ি',
    subtitle: 'অফ-হোয়াইট বেইজ জমিনে টেরাকোটা পাড় ও সুতো দিয়ে বোনা মন্দির নকশা',
    category: 'তসর ও মটকা',
    subCategory: 'মটকা সিল্ক',
    origin: 'চাঁপাইনবাবগঞ্জ রেশম ক্লাস্টার',
    price: 9900,
    originalPrice: 11800,
    discountBadge: '১৬% ছাড়',
    badge: 'নতুন আগমন',
    badgeType: 'primary',
    rating: 4.8,
    reviewCount: 22,
    buyersRecommended: 96,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSyh3r43kNYzURqD5t4nb3RBJoXIt_48_vssZjGKugY7gH4JY8Z2SuTXLYcYY27Pl2Bo51H69J-9LKDlR24XIiX9UdLHlPVabpQhm6Sqkby4No3f7vfeQSHmP7dxB5JrVrNPOZtlggM6Uhf4WnQ5_4vSn3kSW7VZ5fUhOGidDkngZdzAtym4YfsyvIMM3kO92Nq1Rv5goO3WS_YP60Rp0Gphfi7u1OMgYV9HbTdIgAlxp5rTCfais',
    galleryImages: [
      {
        label: 'আঁচল',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSyh3r43kNYzURqD5t4nb3RBJoXIt_48_vssZjGKugY7gH4JY8Z2SuTXLYcYY27Pl2Bo51H69J-9LKDlR24XIiX9UdLHlPVabpQhm6Sqkby4No3f7vfeQSHmP7dxB5JrVrNPOZtlggM6Uhf4WnQ5_4vSn3kSW7VZ5fUhOGidDkngZdzAtym4YfsyvIMM3kO92Nq1Rv5goO3WS_YP60Rp0Gphfi7u1OMgYV9HbTdIgAlxp5rTCfais',
        description: 'মাটির রঙের ছোঁয়ায় প্রাকৃতিক মটকা রেশমের আঁচল'
      }
    ],
    purityMark: 'সিল্ক মার্ক',
    countInfo: '১০০% পিওর মটকা',
    fabric: 'হ্যান্ডস্পান মটকা সিল্ক',
    craftsmanship: 'হাতে বোনা ট্র্যাডিশনাল টেম্পল পাড়',
    length: '৫.৫ মিটার + ব্লাউজ পিস',
    careInstructions: 'ড্রাই ওয়াশ কাম্য',
    artisanName: 'তাঁতি সুধীর কর্মকার',
    artisanDays: 15,
    artisanBio: 'প্রাকৃতিক রঙের স্নিগ্ধতা ও মটকার নিঃশব্দ আভিজাত্য এনে দেয় শান্ত ব্যক্তিত্ব।',
    artisanImage: ARTISAN_IMG_2,
    colors: [
      { name: 'আইভরি বেইজ', hex: '#d7ccc8' },
      { name: 'টেরাকোটা লাল', hex: '#bf360c' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'আইভরি বেইজ',
    occasion: 'দৈনন্দিন পরিধান'
  },
  {
    id: 'saree-tm-7',
    name: 'গাঢ় নীল জামদানি মোটিফ তসর সিল্ক',
    subtitle: 'রয়েল নেভি ব্লু তসর জমিনে জামদানি জ্যামিতিক নকশার রেশমি অলংকরণ',
    category: 'তসর ও মটকা',
    subCategory: 'তসর সিল্ক',
    origin: 'চাঁপাইনবাবগঞ্জ ও রূপগঞ্জ ফিউশন',
    price: 14200,
    originalPrice: 16800,
    discountBadge: '১৫% ছাড়',
    badge: 'এক্সক্লুসিভ',
    badgeType: 'exclusive',
    rating: 4.9,
    reviewCount: 33,
    buyersRecommended: 98,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8N--p3tyzJRAuLegWSxQEtEUwABouw2PtdFAm-pXQPgRMplfepHo1gPG6qvpOEJLZjWMnyoJOMw4cZx2_6cikIxKhQuG0J8WD2VuC8EsVuzrtY_irK3Nnqfcpuxz6c0IUahlILBjgOmFtlt_jKvedvBA-SrHKhLZ3SM3IIBQGqyb3ks4vBlojzMTEC9MABel3L6QHa86h6os8ouVR5md4NHPQ3YkkeOWsASh1Ncqa6VBatXWrwok',
    galleryImages: [
      {
        label: 'আঁচল',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8N--p3tyzJRAuLegWSxQEtEUwABouw2PtdFAm-pXQPgRMplfepHo1gPG6qvpOEJLZjWMnyoJOMw4cZx2_6cikIxKhQuG0J8WD2VuC8EsVuzrtY_irK3Nnqfcpuxz6c0IUahlILBjgOmFtlt_jKvedvBA-SrHKhLZ3SM3IIBQGqyb3ks4vBlojzMTEC9MABel3L6QHa86h6os8ouVR5md4NHPQ3YkkeOWsASh1Ncqa6VBatXWrwok',
        description: 'নীল তসরের ওপর ঐতিহ্যবাহী জামদানি মোটিফের সুচারু রূপ'
      }
    ],
    purityMark: 'সিল্ক মার্ক',
    countInfo: '১০০% পিওর তসর',
    fabric: 'প্রাকৃতিক তসর রেশম',
    craftsmanship: 'তসর জমিনে জামদানি টেকনিকে বোনা বুটি ও আঁচল',
    length: '৬.৩ মিটার',
    careInstructions: 'ড্রাই ওয়াশ কাম্য',
    artisanName: 'কারুশিল্পী মনসুর আলী',
    artisanDays: 24,
    artisanBio: 'তসরের রাজকীয়তা ও জামদানি বুননের ঐতিহাসিক মেলবন্ধনে তৈরি বিশেষ শাড়ি।',
    artisanImage: ARTISAN_IMG_1,
    colors: [
      { name: 'গাঢ় নীল', hex: '#0a1a36' },
      { name: 'স্বর্ণাভ জারি', hex: '#d4af37' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'গাঢ় নীল',
    occasion: 'সান্ধ্য অনুষ্ঠান'
  },
  {
    id: 'saree-tm-8',
    name: 'ধনেশ সোনালী রেশমি তসর শাড়ি',
    subtitle: 'বুনো রেশম তসরের খাঁটি সোনালী লাস্টার ও অ্যান্টিক তামার জরি পাড়',
    category: 'তসর ও মটকা',
    subCategory: 'তসর সিল্ক',
    origin: 'চাঁপাইনবাবগঞ্জ রেশম শিল্প',
    price: 13500,
    originalPrice: 15900,
    discountBadge: '১৫% ছাড়',
    badge: 'বেস্টসেলার',
    badgeType: 'secondary',
    rating: 4.8,
    reviewCount: 28,
    buyersRecommended: 97,
    image: '/src/assets/images/tussar_silk_honey_gold_1791960144448.jpg',
    galleryImages: [
      {
        label: 'আঁচল',
        url: '/src/assets/images/tussar_silk_honey_gold_1791960144448.jpg',
        description: 'ধনেশ পাখির পালকের মতো সোনালী তসরের প্রাকৃতিক দ্যুতি'
      }
    ],
    purityMark: '১০০% খাঁটি তসর',
    countInfo: 'ওয়াইল্ড তসর সিল্ক',
    fabric: 'প্রাকৃতিক তসর রেশম',
    craftsmanship: 'হস্তচালিত তাঁতে বোনা জরি কল্কা ও পাড়',
    length: '৬.৩ মিটার',
    careInstructions: 'ড্রাই ওয়াশ কাম্য',
    artisanName: 'কারুশিল্পী মনসুর আলী',
    artisanDays: 19,
    artisanBio: 'কোনো কৃত্রিম রং ছাড়া শতভাগ প্রাকৃতিক কোকুনের নিজস্ব সোনালী আভা।',
    artisanImage: ARTISAN_IMG_1,
    colors: [
      { name: 'ধনেশ সোনালী', hex: '#d4af37' },
      { name: 'তাম্র বাদামী', hex: '#5d4037' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'ধনেশ সোনালী',
    occasion: 'বিয়ে ও উৎসব'
  },
  {
    id: 'saree-tm-9',
    name: 'রাস্টি অরেঞ্জ প্রাকৃতিক মটকা শাড়ি',
    subtitle: 'রাস্টি পোড়ামাটি কমলা জমিনে কাঠের ব্লক প্রিন্টেড বর্ডার ও সূক্ষ্ম ট্যাসেল',
    category: 'তসর ও মটকা',
    subCategory: 'মটকা সিল্ক',
    origin: 'রাজশাহী সিল্ক ক্লাস্টার',
    price: 10800,
    originalPrice: 12800,
    discountBadge: '১৫% ছাড়',
    badge: 'হাতে বোনা',
    badgeType: 'neutral',
    rating: 4.7,
    reviewCount: 20,
    buyersRecommended: 95,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVSlKK2X3KuPsQk2Bm0ZcPuAmauZvEzqhH9AYelQmdYq6XBFXQVo37S9_pVlqSGfKzKlgR5LwCjZpKb_oPbYJxjZG4OX0YT5OIJ-uHt1DkbsjdU7jCtkdh7znRWC5G5eDo4ZxpHwUNdxLs_tbqPMslraak_K6AcxLFNvcOwyRYGXz2E7yMLiB3u5PsrT_CdzM3EMUhCdtZDPfXgUbJeu7RxLgvXLy79_jUmPOrYVQywUol_aW0VsA',
    galleryImages: [
      {
        label: 'আঁচল',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVSlKK2X3KuPsQk2Bm0ZcPuAmauZvEzqhH9AYelQmdYq6XBFXQVo37S9_pVlqSGfKzKlgR5LwCjZpKb_oPbYJxjZG4OX0YT5OIJ-uHt1DkbsjdU7jCtkdh7znRWC5G5eDo4ZxpHwUNdxLs_tbqPMslraak_K6AcxLFNvcOwyRYGXz2E7yMLiB3u5PsrT_CdzM3EMUhCdtZDPfXgUbJeu7RxLgvXLy79_jUmPOrYVQywUol_aW0VsA',
        description: 'রাস্টি অরেঞ্জ ও অ্যান্টিক পাড়ের অপূর্ব বিন্যাস'
      }
    ],
    purityMark: 'সিল্ক মার্ক',
    countInfo: '১০০% পিওর মটকা',
    fabric: 'প্রাকৃতিক মটকা সিল্ক',
    craftsmanship: 'প্রাকৃতিক রঞ্জকে কাঠের ব্লক ও হাতে বোনা পাড়',
    length: '৬.৩ মিটার',
    careInstructions: 'ড্রাই ওয়াশ কাম্য',
    artisanName: 'তাঁতি সুধীর কর্মকার',
    artisanDays: 16,
    artisanBio: 'উৎসবের আমেজ ও মাটির কাছাকাছি রঙের স্নিগ্ধতায় অনন্য পরিধান।',
    artisanImage: ARTISAN_IMG_2,
    colors: [
      { name: 'রাস্টি অরেঞ্জ', hex: '#d84315' },
      { name: 'মেটে বাদামী', hex: '#4e342e' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'রাস্টি অরেঞ্জ',
    occasion: 'দৈনন্দিন পরিধান'
  },
  {
    id: 'saree-tm-10',
    name: 'ছাই ধূসর রৌপ্য পাড় খাঁটি তসর',
    subtitle: 'চারকোল গ্রে তসর জমিনে অ্যান্টিক রুপালী জরি ও জ্যামিতিক নকশার আঁচল',
    category: 'তসর ও মটকা',
    subCategory: 'তসর সিল্ক',
    origin: 'চাঁপাইনবাবগঞ্জ রেশম শিল্প',
    price: 13900,
    originalPrice: 16500,
    discountBadge: '১৫% ছাড়',
    badge: 'নতুন আগমন',
    badgeType: 'primary',
    rating: 4.9,
    reviewCount: 25,
    buyersRecommended: 98,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8PV42dyRMoJSIwlzDFRYTOYloHEKKXkQQ7Q-zgaKGUyypwamUC9RVpTZRhSeHNDXJrpmdODu2rV68vJTOA8yXuKkoeknVyh0IiCWwalFRZcknB0DrXEjDk-Bz3m7UIasnKlaAyzpgkKp4Wty7AvvESOM4zKbUn_EW6A_knpkR8lZrO-eRJEYXnQYlhmnUXBmexF5OgJI-zLi5MWoSx-qEvqdnB1QjTpC077RXAZIcfF4jvR959Og',
    galleryImages: [
      {
        label: 'আঁচল',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8PV42dyRMoJSIwlzDFRYTOYloHEKKXkQQ7Q-zgaKGUyypwamUC9RVpTZRhSeHNDXJrpmdODu2rV68vJTOA8yXuKkoeknVyh0IiCWwalFRZcknB0DrXEjDk-Bz3m7UIasnKlaAyzpgkKp4Wty7AvvESOM4zKbUn_EW6A_knpkR8lZrO-eRJEYXnQYlhmnUXBmexF5OgJI-zLi5MWoSx-qEvqdnB1QjTpC077RXAZIcfF4jvR959Og',
        description: 'ধূসর তসরে রুপোলি জরির আধুনিক আভিজাত্য'
      }
    ],
    purityMark: 'সিল্ক মার্ক',
    countInfo: '১০০% খাঁটি তসর',
    fabric: 'প্রাকৃতিক তসর রেশম',
    craftsmanship: 'রুপালী জরির সূক্ষ্ম জ্যামিতিক নকশার কাজ',
    length: '৬.৩ মিটার',
    careInstructions: 'ড্রাই ওয়াশ কাম্য',
    artisanName: 'কারুশিল্পী মনসুর আলী',
    artisanDays: 20,
    artisanBio: 'আধুনিক রুচিশীল নারীর জন্য ধূসর ও রুপোলি রঙের রাজকীয় মেলবন্ধন।',
    artisanImage: ARTISAN_IMG_1,
    colors: [
      { name: 'ছাই ধূসর', hex: '#546e7a' },
      { name: 'রুপালি বেইজ', hex: '#cfd8dc' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'ছাই ধূসর',
    occasion: 'সান্ধ্য অনুষ্ঠান'
  },

  // ==========================================
  // 4. পিওর সিল্ক (PURE SILK - 10 SAREES)
  // ==========================================
  {
    id: 'saree-ps-1',
    name: 'মেহগনি বালুচরি সিল্ক',
    subtitle: 'পৌরাণিক মোটিফ সমৃদ্ধ পাল্লা • রাজপ্রাসাদের আভিজাত্য',
    category: 'পিওর সিল্ক',
    subCategory: 'বালুচরি সিল্ক',
    origin: 'মুর্শিদাবাদ ও বিষ্ণুপুর ঐতিহ্য',
    price: 21000,
    originalPrice: 24500,
    discountBadge: '১৪% ছাড়',
    badge: 'সিল্ক মার্ক',
    badgeType: 'neutral',
    rating: 4.9,
    reviewCount: 31,
    buyersRecommended: 97,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBblJhSao7WmilWd3ZiLbJ0ZktUZl-b8gZ2QLgXnmihUE12phfsGSn1ziEOqF8pFLzu-VO0SP3yLAYJ1OJoka7UZB3Dn44MaQhghezm4drCA9yl7gT2rBUGB7bRycOYDSSbUJeI7i51WvXzMioRSGPrj5f46mvMk54fAyvFIbstT7zFi0Fy8Rku0fsD5bCkTIThutYKJe-SOePujCkBxUlP7ZvebVT4UOhj0rvlo_-HFbOXRE5F4ww',
    galleryImages: [
      {
        label: 'আঁচল',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBblJhSao7WmilWd3ZiLbJ0ZktUZl-b8gZ2QLgXnmihUE12phfsGSn1ziEOqF8pFLzu-VO0SP3yLAYJ1OJoka7UZB3Dn44MaQhghezm4drCA9yl7gT2rBUGB7bRycOYDSSbUJeI7i51WvXzMioRSGPrj5f46mvMk54fAyvFIbstT7zFi0Fy8Rku0fsD5bCkTIThutYKJe-SOePujCkBxUlP7ZvebVT4UOhj0rvlo_-HFbOXRE5F4ww',
        description: 'পৌরাণিক পালকির দৃশ্য ও দরবারি মোটিফ খচিত আঁচল'
      }
    ],
    purityMark: 'সিল্ক মার্ক',
    countInfo: '১০০% পিওর সিল্ক',
    fabric: 'মালবেরি রেশম বালুচরি সিল্ক',
    craftsmanship: 'রেশম সুতোয় চিত্রিত দরবারি আখ্যান ও লতাচিত্র',
    length: '৬.৩ মিটার (ব্লাউজ সহ)',
    careInstructions: 'কেবলমাত্র ড্রাই ওয়াশ',
    artisanName: 'তাঁতি সুধীর কর্মকার',
    artisanDays: 28,
    artisanBio: 'বালুচরি শাড়ির প্রতিটি পাড় ও পাল্লায় ফুটে ওঠে বাংলার প্রাচীন ঐতিহাসিক কাহিনী ও নকশা শৈলী।',
    artisanImage: ARTISAN_IMG_2,
    colors: [
      { name: 'মেহগনি মেরুন', hex: '#3e1d1c' },
      { name: 'রয়াল মেরুন', hex: '#550012' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'মেহগনি মেরুন',
    occasion: 'সান্ধ্য অনুষ্ঠান'
  },
  {
    id: 'saree-ps-2',
    name: 'গোলাপি স্বর্ণচুরি সিল্ক শাড়ি',
    subtitle: 'সূক্ষ্ম মিনাকারি জরির কাজ • রাজকীয় ভোজ ও বিবাহোত্তর সংবর্ধনা',
    category: 'পিওর সিল্ক',
    subCategory: 'স্বর্ণচুরি সিল্ক',
    origin: 'বিষ্ণুপুর সিল্ক ক্লাস্টার',
    price: 27200,
    originalPrice: 31000,
    discountBadge: '১২% ছাড়',
    badge: 'সিল্ক মার্ক',
    badgeType: 'neutral',
    rating: 4.9,
    reviewCount: 16,
    buyersRecommended: 98,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqAPIEGSH5XEL-1f6Bp1yyfp1VSIqvfFMic2WKWPBdGfJiLDJzOo5_nNF1f63077Auzmu5uarAtDMYVhBpNlXi1SjwXxKA1Pzcewd3Xfj2b_24i6Hd696uUh4pNdAVGDzdr754o5ElryRCc0TB62MCt7kQt0sWYKLOaeLqTCU_rOEpRNG-mCW_jU-HDvsAw6FwnDXn9xDSwh2wal3fuWuIJlyvjUMXQau7ciFvXH6mph4fYYbi4W0',
    galleryImages: [
      {
        label: 'আঁচল',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqAPIEGSH5XEL-1f6Bp1yyfp1VSIqvfFMic2WKWPBdGfJiLDJzOo5_nNF1f63077Auzmu5uarAtDMYVhBpNlXi1SjwXxKA1Pzcewd3Xfj2b_24i6Hd696uUh4pNdAVGDzdr754o5ElryRCc0TB62MCt7kQt0sWYKLOaeLqTCU_rOEpRNG-mCW_jU-HDvsAw6FwnDXn9xDSwh2wal3fuWuIJlyvjUMXQau7ciFvXH6mph4fYYbi4W0',
        description: 'স্বর্ণ ও রৌপ্য জরির অপূর্ব মিনাকারি যুগলবন্দী'
      }
    ],
    purityMark: 'সিল্ক মার্ক',
    countInfo: '১০০% পিওর সিল্ক',
    fabric: 'ন্যাচারাল সিল্ক ও মীনাকারি জারি',
    craftsmanship: 'সোনালী ও রূপালী দ্বৈত জরির কাজ',
    length: '৬.৩ মিটার (ব্লাউজ সহ)',
    careInstructions: 'ড্রাই ওয়াশ কাম্য',
    artisanName: 'মাস্টার তাঁতি গৌরাঙ্গ দেব',
    artisanDays: 30,
    artisanBio: 'স্বর্ণচুরির অপূর্ব দীপ্তি ও আলোর প্রতিফলনে তৈরি এই শাড়ি প্রতিটি নারীর বিশেষ মুহূর্তকে করে স্মরণীয়।',
    artisanImage: ARTISAN_IMG_1,
    colors: [
      { name: 'রোজ পিঙ্ক', hex: '#f48fb1' },
      { name: 'স্বর্ণাভ ক্রিম', hex: '#e8dab5' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'রোজ পিঙ্ক',
    occasion: 'বিয়ে ও উৎসব'
  },
  {
    id: 'saree-ps-3',
    name: 'স্বর্ণাভ বালুচরি সিল্ক',
    subtitle: 'পিওর বালুচরি সিল্ক • সিল্কমার্ক সহ মাস্টারপিস',
    category: 'পিওর সিল্ক',
    subCategory: 'বালুচরি সিল্ক',
    origin: 'বিষ্ণুপুর তাঁতপল্লী',
    price: 15200,
    originalPrice: 17500,
    discountBadge: '১৩% ছাড়',
    badge: 'নতুন আগমন',
    badgeType: 'neutral',
    rating: 4.8,
    reviewCount: 94,
    buyersRecommended: 96,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_ZTSh5H-arIqulBXavRAkqnq9kILjme_dfV8n8MT6MK-snoCR0clRfnEkHxj7xkGB_xkNlJzJzgEkEXAGOl07cdrXj_7KFsDB4HdKLSs5cVsaAKL1Go-Mr0zJNxiM0DNdShKY1ltRzxHZcWtnzjIUpcKeTj0WjsttF1t7uwy9TJvuzLB8ylFGmJggnDDf8BdHGivqelAoIfGJ-euk4WmjmJWO0T9FGElPZQuOZY6E5E1zYEHXQZA',
    galleryImages: [
      {
        label: 'আঁচল',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_ZTSh5H-arIqulBXavRAkqnq9kILjme_dfV8n8MT6MK-snoCR0clRfnEkHxj7xkGB_xkNlJzJzgEkEXAGOl07cdrXj_7KFsDB4HdKLSs5cVsaAKL1Go-Mr0zJNxiM0DNdShKY1ltRzxHZcWtnzjIUpcKeTj0WjsttF1t7uwy9TJvuzLB8ylFGmJggnDDf8BdHGivqelAoIfGJ-euk4WmjmJWO0T9FGElPZQuOZY6E5E1zYEHXQZA',
        description: 'সোনালী সরিষা হলুদ জমিন ও পৌরাণিক অলংকরণ'
      }
    ],
    purityMark: 'সিল্ক মার্ক',
    countInfo: 'সিল্কমার্ক সহ',
    fabric: 'মালবেরি সিল্ক ও রেশমি সুতো',
    craftsmanship: 'পৌরাণিক মোটিফসমৃদ্ধ আঁচল ও পাড়',
    length: '৬.৩ মিটার',
    careInstructions: 'ড্রাই ওয়াশ কাম্য',
    artisanName: 'তাঁতি সুধীর কর্মকার',
    artisanDays: 20,
    artisanBio: 'সূক্ষ্ম রেশম সুতোর কাজ সমৃদ্ধ এই শাড়ি উজ্জ্বল আলোকসজ্জায় এক স্বর্গীয় আভা ছড়ায়।',
    artisanImage: ARTISAN_IMG_2,
    colors: [
      { name: 'সরিষা হলুদ', hex: '#fbc02d' },
      { name: 'স্বর্ণাভ ক্রিম', hex: '#e8dab5' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'সরিষা হলুদ',
    occasion: 'সান্ধ্য অনুষ্ঠান'
  },
  {
    id: 'saree-ps-4',
    name: 'রাজকীয় বেগুনি তাম্রজরি কাঞ্জিভরম শাড়ি',
    subtitle: 'রয়্যাল পার্পল পিওর সিল্ক জমিনে সমৃদ্ধ কপার জরির মন্দির বর্ডার ও হেভি ব্রোকেড পাল্লা',
    category: 'পিওর সিল্ক',
    subCategory: 'কাঞ্জিভরম সিল্ক',
    origin: 'কাঞ্চিপুরম হেরিটেজ হ্যান্ডলুম',
    price: 31000,
    originalPrice: 36000,
    discountBadge: '১৪% ছাড়',
    badge: 'মাস্টারপিস',
    badgeType: 'exclusive',
    rating: 5.0,
    reviewCount: 49,
    buyersRecommended: 100,
    image: '/src/assets/images/kanjivaram_copper_zari_1791960144258.jpg',
    galleryImages: [
      {
        label: 'আঁচল',
        url: '/src/assets/images/kanjivaram_copper_zari_1791960144258.jpg',
        description: 'তামাটে জরির সমৃদ্ধ মন্দির নকশা ও ময়ূর মোটিফ আঁচল'
      }
    ],
    purityMark: '১০০% পিওর সিল্কমার্ক',
    countInfo: '৩-প্লাই খাঁটি সিল্ক',
    fabric: 'ভারী মালবেরি পিওর সিল্ক',
    craftsmanship: 'কোরভাই টেকনিকে খাঁটি তাম্র জারি মন্দির বর্ডার',
    length: '৬.৩ মিটার (ব্লাউজ সহ)',
    careInstructions: 'স্পেশাল ড্রাই ওয়াশ',
    artisanName: 'মাস্টার উইভার সুব্রামনিয়ান',
    artisanDays: 35,
    artisanBio: 'দক্ষিণ ভারতীয় রাজকীয় মন্দির ঐতিহ্যের অমর নিবেদন এই কাঞ্জিভরম সিল্ক।',
    artisanImage: ARTISAN_IMG_1,
    colors: [
      { name: 'রয়্যাল পার্পল', hex: '#4a148c' },
      { name: 'কপার ব্রাউন', hex: '#6d4c41' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'রয়্যাল পার্পল',
    occasion: 'বিয়ে ও উৎসব'
  },
  {
    id: 'saree-ps-5',
    name: 'ময়ূরকণ্ঠী সবুজ কাঞ্জিভরম পিওর সিল্ক',
    subtitle: 'রোদছায়া পান্না সবুজ জমিনে খাঁটি সোনালী কয়েন বুটা ও ঐতিহ্যবাহী অন্নপাক্সি নকশা',
    category: 'পিওর সিল্ক',
    subCategory: 'কাঞ্জিভরম সিল্ক',
    origin: 'কাঞ্চিপুরম',
    price: 28500,
    originalPrice: 33000,
    discountBadge: '১৪% ছাড়',
    badge: 'এক্সক্লুসিভ',
    badgeType: 'exclusive',
    rating: 4.9,
    reviewCount: 38,
    buyersRecommended: 99,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANTOvzrKYw4LJoO4i4d5ejy_Em0E9ZpG1TwGBgQEarfJ6zBY5lLVy-0EIoSh12hP9LCWjobzGJqmDQ0ybicOi9ilz9-duUWGCTPR5f_Hu641bmGV5HT3cainBxxGIo4BdY0mCJBW3Ed395XMO5__p7HoXID-YkHIuo-XeZt4esMgqEvPmREuC12kAJL7SYekwIo9J1fllVQL9U4R1TutLuprjeS92YH3piVDzFRDZAKacOiR964DI',
    galleryImages: [
      {
        label: 'আঁচল',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANTOvzrKYw4LJoO4i4d5ejy_Em0E9ZpG1TwGBgQEarfJ6zBY5lLVy-0EIoSh12hP9LCWjobzGJqmDQ0ybicOi9ilz9-duUWGCTPR5f_Hu641bmGV5HT3cainBxxGIo4BdY0mCJBW3Ed395XMO5__p7HoXID-YkHIuo-XeZt4esMgqEvPmREuC12kAJL7SYekwIo9J1fllVQL9U4R1TutLuprjeS92YH3piVDzFRDZAKacOiR964DI',
        description: 'ময়ূরকণ্ঠী সবুজ ও উজ্জ্বল স্বর্ণ জরির অপূর্ব মিলন'
      }
    ],
    purityMark: '১০০% পিওর সিল্ক',
    countInfo: 'সিল্কমার্ক সহ',
    fabric: 'খাঁটি কাঞ্চিপুরম রেশম',
    craftsmanship: 'ঘন সোনার জরি ও রাজকীয় মন্দির পাড়',
    length: '৬.৩ মিটার',
    careInstructions: 'ড্রাই ওয়াশ কাম্য',
    artisanName: 'মাস্টার তাঁতি গৌরাঙ্গ দেব',
    artisanDays: 32,
    artisanBio: 'উজ্জ্বল আলোর নিচে অপরূপ দীপ্তি ছড়ায় এই কাঞ্জিভরম পিওর সিল্ক।',
    artisanImage: ARTISAN_IMG_2,
    colors: [
      { name: 'ময়ূরকণ্ঠী সবুজ', hex: '#004d40' },
      { name: 'পান্না সবুজ', hex: '#1b5e20' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'ময়ূরকণ্ঠী সবুজ',
    occasion: 'বিয়ে ও উৎসব'
  },
  {
    id: 'saree-ps-6',
    name: 'রক্তিম মেরুন বিষ্ণুপুরি স্বর্ণচুরি সিল্ক',
    subtitle: 'গাঢ় মেরুন রেশমে ডাবল জরির রামায়ণ ও মহাভারত মোটিফ সমৃদ্ধ পাল্লা',
    category: 'পিওর সিল্ক',
    subCategory: 'স্বর্ণচুরি সিল্ক',
    origin: 'বিষ্ণুপুর, বাঁকুড়া',
    price: 25800,
    originalPrice: 29500,
    discountBadge: '১৩% ছাড়',
    badge: 'সেরা পছন্দ',
    badgeType: 'secondary',
    rating: 4.9,
    reviewCount: 33,
    buyersRecommended: 98,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBblJhSao7WmilWd3ZiLbJ0ZktUZl-b8gZ2QLgXnmihUE12phfsGSn1ziEOqF8pFLzu-VO0SP3yLAYJ1OJoka7UZB3Dn44MaQhghezm4drCA9yl7gT2rBUGB7bRycOYDSSbUJeI7i51WvXzMioRSGPrj5f46mvMk54fAyvFIbstT7zFi0Fy8Rku0fsD5bCkTIThutYKJe-SOePujCkBxUlP7ZvebVT4UOhj0rvlo_-HFbOXRE5F4ww',
    galleryImages: [
      {
        label: 'আঁচল',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBblJhSao7WmilWd3ZiLbJ0ZktUZl-b8gZ2QLgXnmihUE12phfsGSn1ziEOqF8pFLzu-VO0SP3yLAYJ1OJoka7UZB3Dn44MaQhghezm4drCA9yl7gT2rBUGB7bRycOYDSSbUJeI7i51WvXzMioRSGPrj5f46mvMk54fAyvFIbstT7zFi0Fy8Rku0fsD5bCkTIThutYKJe-SOePujCkBxUlP7ZvebVT4UOhj0rvlo_-HFbOXRE5F4ww',
        description: 'ঐতিহাসিক রথ ও শঙ্খ মোটিফ খচিত ডাবল জরি'
      }
    ],
    purityMark: 'সিল্ক মার্ক',
    countInfo: '১০০% পিওর সিল্ক',
    fabric: 'মালবেরি রেশম সিল্ক',
    craftsmanship: 'রুপালী ও সোনালী দুই জরির নিখুঁত মিনাকারি',
    length: '৬.৩ মিটার',
    careInstructions: 'ড্রাই ওয়াশ কাম্য',
    artisanName: 'তাঁতি সুধীর কর্মকার',
    artisanDays: 29,
    artisanBio: 'বাংলার পোড়ামাটি মন্দিরের ভাস্কর্যকে কাপড়ের আঁচলে জীবন্ত করে তোলা হয়েছে।',
    artisanImage: ARTISAN_IMG_2,
    colors: [
      { name: 'রক্তিম মেরুন', hex: '#550012' },
      { name: 'সিঁদুর লাল', hex: '#7a0c22' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'রক্তিম মেরুন',
    occasion: 'বিয়ে ও উৎসব'
  },
  {
    id: 'saree-ps-7',
    name: 'তুঁত নীল মুর্শিদাবাদী পিওর সিল্ক',
    subtitle: 'হালকা ওজনের খাঁটি মালবেরি রেশমে হাতে আঁকা প্রাকৃতিক পুষ্পবৃষ্টি নকশা',
    category: 'পিওর সিল্ক',
    subCategory: 'মুর্শিদাবাদী সিল্ক',
    origin: 'মুর্শিদাবাদ সিল্ক ক্লাস্টার',
    price: 13500,
    originalPrice: 15800,
    discountBadge: '১৫% ছাড়',
    badge: 'হাতে বোনা',
    badgeType: 'neutral',
    rating: 4.8,
    reviewCount: 26,
    buyersRecommended: 96,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8N--p3tyzJRAuLegWSxQEtEUwABouw2PtdFAm-pXQPgRMplfepHo1gPG6qvpOEJLZjWMnyoJOMw4cZx2_6cikIxKhQuG0J8WD2VuC8EsVuzrtY_irK3Nnqfcpuxz6c0IUahlILBjgOmFtlt_jKvedvBA-SrHKhLZ3SM3IIBQGqyb3ks4vBlojzMTEC9MABel3L6QHa86h6os8ouVR5md4NHPQ3YkkeOWsASh1Ncqa6VBatXWrwok',
    galleryImages: [
      {
        label: 'আঁচল',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8N--p3tyzJRAuLegWSxQEtEUwABouw2PtdFAm-pXQPgRMplfepHo1gPG6qvpOEJLZjWMnyoJOMw4cZx2_6cikIxKhQuG0J8WD2VuC8EsVuzrtY_irK3Nnqfcpuxz6c0IUahlILBjgOmFtlt_jKvedvBA-SrHKhLZ3SM3IIBQGqyb3ks4vBlojzMTEC9MABel3L6QHa86h6os8ouVR5md4NHPQ3YkkeOWsASh1Ncqa6VBatXWrwok',
        description: 'তুঁত নীলের নরম রেশমে পুষ্পিত আঁচল'
      }
    ],
    purityMark: 'সিল্ক মার্ক',
    countInfo: '১০০% পিওর সিল্ক',
    fabric: 'মালবেরি ন্যাচারাল সিল্ক',
    craftsmanship: 'হস্তশিল্পিত বাটিক ও জরি পাড়',
    length: '৬.৩ মিটার',
    careInstructions: 'ড্রাই ওয়াশ কাম্য',
    artisanName: 'কারুশিল্পী মনসুর আলী',
    artisanDays: 17,
    artisanBio: 'মুর্শিদাবাদের প্রাচীন রেশম ঐতিহ্য যা গায়ে জড়ালে তৈরি হয় স্বর্গীয় অনুভূতি।',
    artisanImage: ARTISAN_IMG_1,
    colors: [
      { name: 'তুঁত নীল', hex: '#1565c0' },
      { name: 'নেভি ব্লু', hex: '#0a1a36' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'তুঁত নীল',
    occasion: 'সান্ধ্য অনুষ্ঠান'
  },
  {
    id: 'saree-ps-8',
    name: 'কোহল ব্ল্যাক গোল্ডেন জরদোসি সিল্ক',
    subtitle: 'অপূর্ব কৃষ্ণবর্ণ রেশম জমিনে সোনালী জরির সমৃদ্ধ ডাইনিং ও ব্রোকেড বর্ডার',
    category: 'পিওর সিল্ক',
    subCategory: 'মালবেরি সিল্ক',
    origin: 'রাজশাহী সিল্ক সিটি',
    price: 18900,
    originalPrice: 22000,
    discountBadge: '১৪% ছাড়',
    badge: 'সীমিত স্টক',
    badgeType: 'neutral',
    rating: 4.9,
    reviewCount: 37,
    buyersRecommended: 98,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtIpPvUNgA55nzy9vGaCpdboFMyXVDiLQN3D6-_eCsXv8VLsuLg6kRcXS2BZeHe6CmayXDWUFTLIof0160bnZd-btfSLA9NHfdMYb_R_oxv884yqXUT-1BHWRB99Q0SjPvAhZai4kdIxmFG6WXI6oB0M20BH83OjSsDQyNhmjYDe6UzY_RELI7piULjBtx3nn0VGFJ3774GeUs2WqpaFSuxK6NQQm1aTvgs_2l-19e73hcgAwlEYM',
    galleryImages: [
      {
        label: 'আঁচল',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtIpPvUNgA55nzy9vGaCpdboFMyXVDiLQN3D6-_eCsXv8VLsuLg6kRcXS2BZeHe6CmayXDWUFTLIof0160bnZd-btfSLA9NHfdMYb_R_oxv884yqXUT-1BHWRB99Q0SjPvAhZai4kdIxmFG6WXI6oB0M20BH83OjSsDQyNhmjYDe6UzY_RELI7piULjBtx3nn0VGFJ3774GeUs2WqpaFSuxK6NQQm1aTvgs_2l-19e73hcgAwlEYM',
        description: 'কালো রেশমের জমিনে সোনালী ধাতব দীপ্তি'
      }
    ],
    purityMark: 'সিল্ক মার্ক',
    countInfo: '১০০% পিওর সিল্ক',
    fabric: '১০০% মালবেরি রেশম',
    craftsmanship: 'ঘন গোল্ডেন জারি বর্ডার ও বুটি',
    length: '৬.৩ মিটার',
    careInstructions: 'ড্রাই ওয়াশ কাম্য',
    artisanName: 'তাঁতি সুধীর কর্মকার',
    artisanDays: 21,
    artisanBio: 'কালো পিওর সিল্কের গভীরতা ও সোনার জরির স্পষ্ট বৈপরীত্যে নজরকাড়া রূপ।',
    artisanImage: ARTISAN_IMG_2,
    colors: [
      { name: 'কোহল ব্ল্যাক', hex: '#1b1b1c' },
      { name: 'স্বর্ণাভ জারি', hex: '#d4af37' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'কোহল ব্ল্যাক',
    occasion: 'সান্ধ্য অনুষ্ঠান'
  },
  {
    id: 'saree-ps-9',
    name: 'সিঁদুরে লাল বালুচরি রামায়ণ মোটিফ',
    subtitle: 'ঐতিহাসিক লাল রেশম জমিনে রামায়ণী সভার আখ্যান ও সোনালী সূচিকর্ম',
    category: 'পিওর সিল্ক',
    subCategory: 'বালুচরি সিল্ক',
    origin: 'বিষ্ণুপুর সিল্ক ক্লাস্টার',
    price: 24500,
    originalPrice: 28500,
    discountBadge: '১৪% ছাড়',
    badge: 'এক্সক্লুসিভ',
    badgeType: 'exclusive',
    rating: 5.0,
    reviewCount: 42,
    buyersRecommended: 99,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWKPs3jM3rD2-iRYruiX6CCKTMw8DY8qxTyd-NKhOHRFn85I2tarAgEJDbjdAU5TxLLJTqOPdxWDSU-c9GVB8VKeaSlU89iER-86ba7pE-bbXlsWd6eKvwaOQg9UCGAPkvSmGAP6jD1JId5nZEJBAoI-ohMxNHtKUujjYi5k664cK6Op40aBEaBzRbFc2t1uedJxYmbOZ_7f_JxHFaajICqJVnalTv3I3V9hFGNb6j7yrWf-dXqsU',
    galleryImages: [
      {
        label: 'আঁচল',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWKPs3jM3rD2-iRYruiX6CCKTMw8DY8qxTyd-NKhOHRFn85I2tarAgEJDbjdAU5TxLLJTqOPdxWDSU-c9GVB8VKeaSlU89iER-86ba7pE-bbXlsWd6eKvwaOQg9UCGAPkvSmGAP6jD1JId5nZEJBAoI-ohMxNHtKUujjYi5k664cK6Op40aBEaBzRbFc2t1uedJxYmbOZ_7f_JxHFaajICqJVnalTv3I3V9hFGNb6j7yrWf-dXqsU',
        description: 'পালকি ও রাজসভার অপূর্ব দৃশ্যপট সংবলিত আঁচল'
      }
    ],
    purityMark: 'সিল্ক মার্ক',
    countInfo: '১০০% পিওর সিল্ক',
    fabric: 'মালবেরি বালুচরি রেশম',
    craftsmanship: 'রেশম সুতোয় চিত্রিত ঐতিহাসিক বালুচরি শৈলী',
    length: '৬.৩ মিটার',
    careInstructions: 'ড্রাই ওয়াশ কাম্য',
    artisanName: 'মাস্টার তাঁতি গৌরাঙ্গ দেব',
    artisanDays: 31,
    artisanBio: 'বাংলার হস্তচালিত তাঁতের এক ঐতিহাসিক স্মারক যা বংশপরম্পরায় সংরক্ষণযোগ্য।',
    artisanImage: ARTISAN_IMG_1,
    colors: [
      { name: 'সিঁদুরে লাল', hex: '#7a0c22' },
      { name: 'স্বর্ণাভ বেইজ', hex: '#d7ccc8' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'সিঁদুরে লাল',
    occasion: 'বিয়ে ও উৎসব'
  },
  {
    id: 'saree-ps-10',
    name: 'লেমন ক্রিম সিল্কমার্ক কাঞ্জিভরম',
    subtitle: 'হালকা লেমন আইভরি রেশমে রৌপ্য ও স্বর্ণালী মন্দির পার • রিসেপশন লুক',
    category: 'পিওর সিল্ক',
    subCategory: 'কাঞ্জিভরম সিল্ক',
    origin: 'কাঞ্চিপুরম',
    price: 26800,
    originalPrice: 31000,
    discountBadge: '১৪% ছাড়',
    badge: 'নতুন আগমন',
    badgeType: 'primary',
    rating: 4.9,
    reviewCount: 30,
    buyersRecommended: 98,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzodyahguiqQu7bRC7gNFYO1LK7qAgZ7tomW3-5jB5hdZlPMR6ATpRjbZ6BliCW2xciL0sULTjniJsq5pKzMsb41L4PwEiGeEq_RSvEXtOhQQN6aoTf9M3xRmmGTWSRSmLSbUZ-mfEChjQiKbsJPMU-3fm3oMMZEXQaAcCuOMRk0N6ZYxMDeJIVXI5RcaeqCeZZ2XwGUeWISXnFWjS_J_QelAbLG9pAnEh75vLlZSkS-ekC6-GVOY',
    galleryImages: [
      {
        label: 'আঁচল',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzodyahguiqQu7bRC7gNFYO1LK7qAgZ7tomW3-5jB5hdZlPMR6ATpRjbZ6BliCW2xciL0sULTjniJsq5pKzMsb41L4PwEiGeEq_RSvEXtOhQQN6aoTf9M3xRmmGTWSRSmLSbUZ-mfEChjQiKbsJPMU-3fm3oMMZEXQaAcCuOMRk0N6ZYxMDeJIVXI5RcaeqCeZZ2XwGUeWISXnFWjS_J_QelAbLG9pAnEh75vLlZSkS-ekC6-GVOY',
        description: 'লেমন আইভরি জমিনে সূক্ষ্ম রৌপ্য ও স্বর্ণ জরির আভা'
      }
    ],
    purityMark: '১০০% পিওর সিল্কমার্ক',
    countInfo: '১০০% পিওর সিল্ক',
    fabric: 'মালবেরি রেশম কাঞ্জিভরম',
    craftsmanship: 'কোরভাই ডাবল জারি মন্দির পাড়',
    length: '৬.৩ মিটার',
    careInstructions: 'ড্রাই ওয়াশ কাম্য',
    artisanName: 'মাস্টার উইভার সুব্রামনিয়ান',
    artisanDays: 27,
    artisanBio: 'প্যাস্টেল রঙের আধুনিক পছন্দ ও কাঞ্জিভরমের আভিজাত্যের অনন্য সমন্বয়।',
    artisanImage: ARTISAN_IMG_1,
    colors: [
      { name: 'লেমন ক্রিম', hex: '#fff9c4' },
      { name: 'স্বর্ণাভ জারি', hex: '#d4af37' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'লেমন ক্রিম',
    occasion: 'সান্ধ্য অনুষ্ঠান'
  },

  // ==========================================
  // 5. খাদি ও সুতি (KHADI & COTTON - 10 SAREES)
  // ==========================================
  {
    id: 'saree-kc-1',
    name: 'সোনালী পাড় কোটা কটন',
    subtitle: 'আরামদায়ক সামার ফ্যাব্রিক • দৈনন্দিন ও হালকা উৎসব',
    category: 'খাদি ও সুতি',
    subCategory: 'কোটা কটন',
    origin: 'টাঙ্গাইল তাঁতপল্লী',
    price: 4800,
    originalPrice: 5500,
    discountBadge: '১২% ছাড়',
    badge: 'বেস্টসেলার',
    badgeType: 'secondary',
    rating: 4.7,
    reviewCount: 63,
    buyersRecommended: 94,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzodyahguiqQu7bRC7gNFYO1LK7qAgZ7tomW3-5jB5hdZlPMR6ATpRjbZ6BliCW2xciL0sULTjniJsq5pKzMsb41L4PwEiGeEq_RSvEXtOhQQN6aoTf9M3xRmmGTWSRSmLSbUZ-mfEChjQiKbsJPMU-3fm3oMMZEXQaAcCuOMRk0N6ZYxMDeJIVXI5RcaeqCeZZ2XwGUeWISXnFWjS_J_QelAbLG9pAnEh75vLlZSkS-ekC6-GVOY',
    galleryImages: [
      {
        label: 'আঁচল',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzodyahguiqQu7bRC7gNFYO1LK7qAgZ7tomW3-5jB5hdZlPMR6ATpRjbZ6BliCW2xciL0sULTjniJsq5pKzMsb41L4PwEiGeEq_RSvEXtOhQQN6aoTf9M3xRmmGTWSRSmLSbUZ-mfEChjQiKbsJPMU-3fm3oMMZEXQaAcCuOMRk0N6ZYxMDeJIVXI5RcaeqCeZZ2XwGUeWISXnFWjS_J_QelAbLG9pAnEh75vLlZSkS-ekC6-GVOY',
        description: 'অফ-হোয়াইট সুতি জমিন ও মসৃণ সোনালী বর্ডার'
      }
    ],
    purityMark: 'খাঁটি সুতি',
    countInfo: '১০০% পিওর সুতি',
    fabric: '১০০ কাউন্ট পিওর সুতি কোটা ডোরিয়া',
    craftsmanship: 'সূক্ষ্ম চেকার্ড বুনন ও প্রাচীন সোনালী জরি পাড়',
    length: '৫.৫ মিটার',
    careInstructions: 'হালকা শ্যাম্পু ওয়াশ বা ড্রাই ওয়াশ',
    artisanName: 'তাঁতি অমল ভৌমিক',
    artisanDays: 10,
    artisanBio: 'টাঙ্গাইলের ঐতিহ্যবাহী কোটা সুতোর নরম আরামদায়ক অনুভব গ্রীষ্মের যে কোনো উৎসবে অতুলনীয়।',
    artisanImage: ARTISAN_IMG_1,
    colors: [
      { name: 'স্বর্ণাভ ক্রিম', hex: '#e8dab5' },
      { name: 'আইভরি সাদা', hex: '#fdfbf7' }
    ],
    hasBlousePiece: false,
    inStock: true,
    colorName: 'স্বর্ণাভ ক্রিম',
    occasion: 'দৈনন্দিন পরিধান'
  },
  {
    id: 'saree-kc-2',
    name: 'নীল অপরাজিতা ঐতিহ্যবাহী টাঙ্গাইল তাঁত',
    subtitle: 'ডিপ ইন্ডিগো সুতি জমিনে ম্যাডার রেড মন্দির পাড় ও হ্যান্ডস্পান খাদি টেক্সচার',
    category: 'খাদি ও সুতি',
    subCategory: 'টাঙ্গাইল তাঁত',
    origin: 'টাঙ্গাইল তাঁতশিল্প ক্লাস্টার',
    price: 3600,
    originalPrice: 4200,
    discountBadge: '১৪% ছাড়',
    badge: 'হাতে বোনা',
    badgeType: 'neutral',
    rating: 4.8,
    reviewCount: 52,
    buyersRecommended: 97,
    image: '/src/assets/images/tangail_cotton_indigo_1791960141057.jpg',
    galleryImages: [
      {
        label: 'আঁচল',
        url: '/src/assets/images/tangail_cotton_indigo_1791960141057.jpg',
        description: 'গাঢ় নীল জমিনে লাল সুতোর সুচারু মন্দির পাড় ও ট্যাসেল'
      }
    ],
    purityMark: '১০০% খাঁটি তাঁত',
    countInfo: '১০০ কাউন্ট সুতি',
    fabric: 'প্রাকৃতিক হ্যান্ডলুম সুতি',
    craftsmanship: 'হস্তচালিত পিট লুমে বোনা চিরায়ত টাঙ্গাইল পাড়',
    length: '৫.৫ মিটার',
    careInstructions: 'সাধারণ ধোয়া অথবা হালকা ড্রাই ওয়াশ',
    artisanName: 'তাঁতি অমল ভৌমিক',
    artisanDays: 8,
    artisanBio: 'টাঙ্গাইলের ঘরে ঘরে শত বছর ধরে চলে আসা তাঁত সংস্কৃতির জীবন্ত রূপ।',
    artisanImage: ARTISAN_IMG_1,
    colors: [
      { name: 'ইন্ডিগো নীল', hex: '#1a237e' },
      { name: 'ম্যাডার লাল', hex: '#b71c1c' }
    ],
    hasBlousePiece: false,
    inStock: true,
    colorName: 'ইন্ডিগো নীল',
    occasion: 'দৈনন্দিন পরিধান'
  },
  {
    id: 'saree-kc-3',
    name: 'জামদানি পাড় ধনেখালি খাঁটি সুতি শাড়ি',
    subtitle: 'অফ-হোয়াইট মলমল সুতি জমিনে সরু জামদানি পাড় ও নরম নিঃশ্বাসযোগ্য ফল',
    category: 'খাদি ও সুতি',
    subCategory: 'ধনেখালি সুতি',
    origin: 'ধনেখালি ঐতিহ্যবাহী তাঁত',
    price: 3800,
    originalPrice: 4500,
    discountBadge: '১৫% ছাড়',
    badge: 'সেরা পছন্দ',
    badgeType: 'secondary',
    rating: 4.7,
    reviewCount: 38,
    buyersRecommended: 95,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQU1An16EU5ecG_EOpCV2gpzcx7C68fLYIwT13R8IeBDhQ50xM1pQt2eAQun32tzer8O1IaULL0V76FsVfGNLAdHGTccRoePUI7ycog7W21dLr32RhwZXcU5BgOn--hzIjAIpcKBPAYNEOpL03hzG9silbS0XzEwc_ZnWwZAkw8T3Ef9bnzsnCSj1ZxiKBFjXLtvkmme44dCoK75x-b8bGYYYz6VE9gD-sAcU4yxMbowVLoYTinFc',
    galleryImages: [
      {
        label: 'আঁচল',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQU1An16EU5ecG_EOpCV2gpzcx7C68fLYIwT13R8IeBDhQ50xM1pQt2eAQun32tzer8O1IaULL0V76FsVfGNLAdHGTccRoePUI7ycog7W21dLr32RhwZXcU5BgOn--hzIjAIpcKBPAYNEOpL03hzG9silbS0XzEwc_ZnWwZAkw8T3Ef9bnzsnCSj1ZxiKBFjXLtvkmme44dCoK75x-b8bGYYYz6VE9gD-sAcU4yxMbowVLoYTinFc',
        description: 'ধনেখালির ঐতিহ্যবাহী নীল ও লাল পাড়ের কারুকাজ'
      }
    ],
    purityMark: '১০০% পিওর সুতি',
    countInfo: '১০০ কাউন্ট সুতি',
    fabric: 'প্রাকৃতিক সুতি সুতো',
    craftsmanship: 'খাঁটি ধনেখালি পাড় ও মলমল জমিন',
    length: '৫.৫ মিটার',
    careInstructions: 'সাধারণ ওয়াশ',
    artisanName: 'তাঁতি সুধীর কর্মকার',
    artisanDays: 9,
    artisanBio: 'গরমের দিনে শীতল আরাম ও ক্লাসিক বাঙালি বুদ্ধিজীবী লুক এনে দেয়।',
    artisanImage: ARTISAN_IMG_2,
    colors: [
      { name: 'আইভরি সাদা', hex: '#fdfbf7' },
      { name: 'ইন্ডিগো নীল', hex: '#0d47a1' }
    ],
    hasBlousePiece: false,
    inStock: true,
    colorName: 'আইভরি সাদা',
    occasion: 'দৈনন্দিন পরিধান'
  },
  {
    id: 'saree-kc-4',
    name: 'বাসন্তী হলুদ হ্যান্ডলুম খাদি কটন',
    subtitle: 'হাতে কাটা খাদি সুতোয় তৈরি উজ্জ্বল হলুদ জমিনে রূপালী জরির স্ট্রাইপ পাড়',
    category: 'খাদি ও সুতি',
    subCategory: 'খাদি কটন',
    origin: 'কুমিল্লা খাদি পল্লী',
    price: 3200,
    originalPrice: 3800,
    discountBadge: '১৬% ছাড়',
    badge: 'হাতে বোনা',
    badgeType: 'neutral',
    rating: 4.8,
    reviewCount: 41,
    buyersRecommended: 96,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzodyahguiqQu7bRC7gNFYO1LK7qAgZ7tomW3-5jB5hdZlPMR6ATpRjbZ6BliCW2xciL0sULTjniJsq5pKzMsb41L4PwEiGeEq_RSvEXtOhQQN6aoTf9M3xRmmGTWSRSmLSbUZ-mfEChjQiKbsJPMU-3fm3oMMZEXQaAcCuOMRk0N6ZYxMDeJIVXI5RcaeqCeZZ2XwGUeWISXnFWjS_J_QelAbLG9pAnEh75vLlZSkS-ekC6-GVOY',
    galleryImages: [
      {
        label: 'আঁচল',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzodyahguiqQu7bRC7gNFYO1LK7qAgZ7tomW3-5jB5hdZlPMR6ATpRjbZ6BliCW2xciL0sULTjniJsq5pKzMsb41L4PwEiGeEq_RSvEXtOhQQN6aoTf9M3xRmmGTWSRSmLSbUZ-mfEChjQiKbsJPMU-3fm3oMMZEXQaAcCuOMRk0N6ZYxMDeJIVXI5RcaeqCeZZ2XwGUeWISXnFWjS_J_QelAbLG9pAnEh75vLlZSkS-ekC6-GVOY',
        description: 'বাসন্তী হলুদ খাদি জমিনের প্রাকৃতিক সৌন্দর্য'
      }
    ],
    purityMark: 'খাদি সার্টিফাইড',
    countInfo: '১০০% হ্যান্ডস্পান খাদি',
    fabric: 'প্রাকৃতিক খাদি কটন',
    craftsmanship: 'চরকায় কাটা সুতোয় হস্তচালিত তাঁতে বোনা',
    length: '৫.৫ মিটার',
    careInstructions: 'সাধারণ ধোয়া',
    artisanName: 'তাঁতি অমল ভৌমিক',
    artisanDays: 11,
    artisanBio: 'স্বদেশী আন্দোলনের ঐতিহ্যবাহী কুমিল্লার খাঁটি খাদি সুতোর স্পর্শ।',
    artisanImage: ARTISAN_IMG_1,
    colors: [
      { name: 'বাসন্তী হলুদ', hex: '#fbc02d' },
      { name: 'সাদা খাদি', hex: '#ffffff' }
    ],
    hasBlousePiece: false,
    inStock: true,
    colorName: 'বাসন্তী হলুদ',
    occasion: 'দৈনন্দিন পরিধান'
  },
  {
    id: 'saree-kc-5',
    name: 'কাঠগোলাপ সাদা ও লাল পাড় টাঙ্গাইল শাড়ি',
    subtitle: 'চিরায়ত পূজা ও পহেলা বৈশাখের ঐতিহ্যবাহী লাল পাড় সাদা খাঁটি সুতি তাঁত',
    category: 'খাদি ও সুতি',
    subCategory: 'টাঙ্গাইল তাঁত',
    origin: 'টাঙ্গাইল তাঁতপল্লী',
    price: 4200,
    originalPrice: 4900,
    discountBadge: '১৪% ছাড়',
    badge: 'বেস্টসেলার',
    badgeType: 'secondary',
    rating: 4.9,
    reviewCount: 78,
    buyersRecommended: 99,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQU1An16EU5ecG_EOpCV2gpzcx7C68fLYIwT13R8IeBDhQ50xM1pQt2eAQun32tzer8O1IaULL0V76FsVfGNLAdHGTccRoePUI7ycog7W21dLr32RhwZXcU5BgOn--hzIjAIpcKBPAYNEOpL03hzG9silbS0XzEwc_ZnWwZAkw8T3Ef9bnzsnCSj1ZxiKBFjXLtvkmme44dCoK75x-b8bGYYYz6VE9gD-sAcU4yxMbowVLoYTinFc',
    galleryImages: [
      {
        label: 'আঁচল',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQU1An16EU5ecG_EOpCV2gpzcx7C68fLYIwT13R8IeBDhQ50xM1pQt2eAQun32tzer8O1IaULL0V76FsVfGNLAdHGTccRoePUI7ycog7W21dLr32RhwZXcU5BgOn--hzIjAIpcKBPAYNEOpL03hzG9silbS0XzEwc_ZnWwZAkw8T3Ef9bnzsnCSj1ZxiKBFjXLtvkmme44dCoK75x-b8bGYYYz6VE9gD-sAcU4yxMbowVLoYTinFc',
        description: 'সাদা জমিনে চওড়া লাল মন্দির পাড় ও সুতার কাজ'
      }
    ],
    purityMark: '১০০% খাঁটি তাঁত',
    countInfo: '১০০ কাউন্ট সুতি',
    fabric: 'প্রাকৃতিক সুতি টাঙ্গাইল হ্যান্ডলুম',
    craftsmanship: 'চওড়া লাল পাড়ে সোনালী ও রূপালী সুতোর ঐতিহ্যবাহী অলংকরণ',
    length: '৫.৫ মিটার',
    careInstructions: 'সাধারণ ধোয়া',
    artisanName: 'তাঁতি অমল ভৌমিক',
    artisanDays: 12,
    artisanBio: 'বাঙালিয়ানার প্রতীক ঐতিহ্যবাহী লাল-পাড় সাদা শাড়ি প্রতিটি শুভ অনুষ্ঠানে অনিবার্য।',
    artisanImage: ARTISAN_IMG_1,
    colors: [
      { name: 'সাদা ও লাল', hex: '#b71c1c' },
      { name: 'আইভরি সাদা', hex: '#fdfbf7' }
    ],
    hasBlousePiece: false,
    inStock: true,
    colorName: 'সাদা ও লাল',
    occasion: 'বিয়ে ও উৎসব'
  },
  {
    id: 'saree-kc-6',
    name: 'পিস্তা গ্রিন অরগানিক সুতি কোটা ডোরিয়া',
    subtitle: 'হালকা পেস্টেল পিস্তা সবুজ জমিনে সোনার টিস্যু বর্ডার ও নরম ড্র্যাপিং',
    category: 'খাদি ও সুতি',
    subCategory: 'কোটা কটন',
    origin: 'টাঙ্গাইল',
    price: 4500,
    originalPrice: 5200,
    discountBadge: '১৩% ছাড়',
    badge: 'নতুন আগমন',
    badgeType: 'primary',
    rating: 4.8,
    reviewCount: 32,
    buyersRecommended: 96,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzodyahguiqQu7bRC7gNFYO1LK7qAgZ7tomW3-5jB5hdZlPMR6ATpRjbZ6BliCW2xciL0sULTjniJsq5pKzMsb41L4PwEiGeEq_RSvEXtOhQQN6aoTf9M3xRmmGTWSRSmLSbUZ-mfEChjQiKbsJPMU-3fm3oMMZEXQaAcCuOMRk0N6ZYxMDeJIVXI5RcaeqCeZZ2XwGUeWISXnFWjS_J_QelAbLG9pAnEh75vLlZSkS-ekC6-GVOY',
    galleryImages: [
      {
        label: 'আঁচল',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzodyahguiqQu7bRC7gNFYO1LK7qAgZ7tomW3-5jB5hdZlPMR6ATpRjbZ6BliCW2xciL0sULTjniJsq5pKzMsb41L4PwEiGeEq_RSvEXtOhQQN6aoTf9M3xRmmGTWSRSmLSbUZ-mfEChjQiKbsJPMU-3fm3oMMZEXQaAcCuOMRk0N6ZYxMDeJIVXI5RcaeqCeZZ2XwGUeWISXnFWjS_J_QelAbLG9pAnEh75vLlZSkS-ekC6-GVOY',
        description: 'পিস্তা সবুজের প্রশান্তিতে সোনালী টিস্যু বর্ডার'
      }
    ],
    purityMark: '১০০% খাঁটি সুতি',
    countInfo: '১০০ কাউন্ট সুতি',
    fabric: '১০০% অরগানিক সুতি কোটা ডোরিয়া',
    craftsmanship: 'সূক্ষ্ম খোপ খোপ বুনন ও জারি পাড়',
    length: '৫.৫ মিটার',
    careInstructions: 'হালকা ধোয়া',
    artisanName: 'তাঁতি অমল ভৌমিক',
    artisanDays: 10,
    artisanBio: 'গরমের তীব্রতায় স্নিগ্ধ শীতল অনুভূতি ও মার্জিত আউটলুক।',
    artisanImage: ARTISAN_IMG_1,
    colors: [
      { name: 'পিস্তা সবুজ', hex: '#a5d6a7' },
      { name: 'স্বর্ণাভ ক্রিম', hex: '#e8dab5' }
    ],
    hasBlousePiece: false,
    inStock: true,
    colorName: 'পিস্তা সবুজ',
    occasion: 'দৈনন্দিন পরিধান'
  },
  {
    id: 'saree-kc-7',
    name: 'পদ্মপাতার ছাই খাদি সুতি শাড়ি',
    subtitle: 'স্মোকি স্লেট গ্রে খাদি জমিনে মেরুন জামদানি বুটা ও চওড়া ট্র্যাডিশনাল পাড়',
    category: 'খাদি ও সুতি',
    subCategory: 'খাদি কটন',
    origin: 'কুমিল্লা ও টাঙ্গাইল',
    price: 3900,
    originalPrice: 4600,
    discountBadge: '১৫% ছাড়',
    badge: 'হাতে বোনা',
    badgeType: 'neutral',
    rating: 4.7,
    reviewCount: 23,
    buyersRecommended: 94,
    image: '/src/assets/images/tangail_cotton_indigo_1791960141057.jpg',
    galleryImages: [
      {
        label: 'আঁচল',
        url: '/src/assets/images/tangail_cotton_indigo_1791960141057.jpg',
        description: 'ধূসর জমিনে খয়েরি রঙের ক্লাসিক হস্তশিল্প'
      }
    ],
    purityMark: 'খাদি সার্টিফাইড',
    countInfo: 'হ্যান্ডস্পান খাদি',
    fabric: '১০০% প্রাকৃতিক খাদি সুতি',
    craftsmanship: 'চরকায় কাটা সুতোয় হস্তচালিত তাঁতের কাজ',
    length: '৫.৫ মিটার',
    careInstructions: 'সাধারণ ধোয়া',
    artisanName: 'তাঁতি সুধীর কর্মকার',
    artisanDays: 11,
    artisanBio: 'ধূসর ও মেরুনের পরিমিত সমন্বয়ে তৈরি এক আভিজাত্যপূর্ণ পোশাক।',
    artisanImage: ARTISAN_IMG_2,
    colors: [
      { name: 'স্লেট ধূসর', hex: '#607d8b' },
      { name: 'রয়াল মেরুন', hex: '#550012' }
    ],
    hasBlousePiece: false,
    inStock: true,
    colorName: 'স্লেট ধূসর',
    occasion: 'দৈনন্দিন পরিধান'
  },
  {
    id: 'saree-kc-8',
    name: 'গোলাপী ডালিয়া মলমল খাঁটি সুতি',
    subtitle: 'নরম তুলোর মতো হালকা ব্লাশ পিঙ্ক মলমল জমিনে সূক্ষ্ম ফ্লোরাল বুটা',
    category: 'খাদি ও সুতি',
    subCategory: 'মলমল সুতি',
    origin: 'টাঙ্গাইল',
    price: 3400,
    originalPrice: 4000,
    discountBadge: '১৫% ছাড়',
    badge: 'সেরা পছন্দ',
    badgeType: 'secondary',
    rating: 4.8,
    reviewCount: 46,
    buyersRecommended: 97,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQU1An16EU5ecG_EOpCV2gpzcx7C68fLYIwT13R8IeBDhQ50xM1pQt2eAQun32tzer8O1IaULL0V76FsVfGNLAdHGTccRoePUI7ycog7W21dLr32RhwZXcU5BgOn--hzIjAIpcKBPAYNEOpL03hzG9silbS0XzEwc_ZnWwZAkw8T3Ef9bnzsnCSj1ZxiKBFjXLtvkmme44dCoK75x-b8bGYYYz6VE9gD-sAcU4yxMbowVLoYTinFc',
    galleryImages: [
      {
        label: 'আঁচল',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQU1An16EU5ecG_EOpCV2gpzcx7C68fLYIwT13R8IeBDhQ50xM1pQt2eAQun32tzer8O1IaULL0V76FsVfGNLAdHGTccRoePUI7ycog7W21dLr32RhwZXcU5BgOn--hzIjAIpcKBPAYNEOpL03hzG9silbS0XzEwc_ZnWwZAkw8T3Ef9bnzsnCSj1ZxiKBFjXLtvkmme44dCoK75x-b8bGYYYz6VE9gD-sAcU4yxMbowVLoYTinFc',
        description: 'কোমল গোলাপি জমিনে সূক্ষ্ম তুলোট সুতোর বুনন'
      }
    ],
    purityMark: '১০০% পিওর সুতি',
    countInfo: '১০০ কাউন্ট ফাইন সুতি',
    fabric: '১০০% মলমল খাঁটি তুলা',
    craftsmanship: 'নরম হ্যান্ডস্পান সুতো ও জারি বর্ডার',
    length: '৫.৫ মিটার',
    careInstructions: 'সাধারণ ধোয়া',
    artisanName: 'তাঁতি অমল ভৌমিক',
    artisanDays: 9,
    artisanBio: 'মলমলের কোমল স্পর্শ যা পরলে মনে হবে বাতাসের মতো হালকা।',
    artisanImage: ARTISAN_IMG_1,
    colors: [
      { name: 'ব্লাশ পিঙ্ক', hex: '#f48fb1' },
      { name: 'আইভরি সাদা', hex: '#fdfbf7' }
    ],
    hasBlousePiece: false,
    inStock: true,
    colorName: 'ব্লাশ পিঙ্ক',
    occasion: 'দৈনন্দিন পরিধান'
  },
  {
    id: 'saree-kc-9',
    name: 'কৃষ্ণকলি কালো সুতি তাঁতের শাড়ি',
    subtitle: 'জেট ব্ল্যাক সুতি জমিনে রুপালী জরির জ্যামিতিক পাড় ও ক্লাসিক বুনন',
    category: 'খাদি ও সুতি',
    subCategory: 'টাঙ্গাইল তাঁত',
    origin: 'টাঙ্গাইল তাঁতপল্লী',
    price: 3700,
    originalPrice: 4300,
    discountBadge: '১৪% ছাড়',
    badge: 'সীমিত স্টক',
    badgeType: 'neutral',
    rating: 4.8,
    reviewCount: 39,
    buyersRecommended: 96,
    image: '/src/assets/images/tangail_cotton_indigo_1791960141057.jpg',
    galleryImages: [
      {
        label: 'আঁচল',
        url: '/src/assets/images/tangail_cotton_indigo_1791960141057.jpg',
        description: 'কালো তাঁতের শাড়িতে রুপালী জরির নজরকাড়া পাড়'
      }
    ],
    purityMark: '১০০% খাঁটি তাঁত',
    countInfo: '১০০ কাউন্ট সুতি',
    fabric: 'প্রাকৃতিক টাঙ্গাইল হ্যান্ডলুম সুতি',
    craftsmanship: 'রুপালী জরি ও সুতোর চওড়া মন্দির পাড়',
    length: '৫.৫ মিটার',
    careInstructions: 'সাধারণ ধোয়া',
    artisanName: 'তাঁতি অমল ভৌমিক',
    artisanDays: 10,
    artisanBio: 'কৃষ্ণকলি রূপের চিরন্তন মাধুর্য যা যে কোনো বয়সের নারীকে মানিয়ে যায়।',
    artisanImage: ARTISAN_IMG_1,
    colors: [
      { name: 'কৃষ্ণকলি কালো', hex: '#1b1b1c' },
      { name: 'রুপালী জরি', hex: '#cfd8dc' }
    ],
    hasBlousePiece: false,
    inStock: true,
    colorName: 'কৃষ্ণকলি কালো',
    occasion: 'সান্ধ্য অনুষ্ঠান'
  },
  {
    id: 'saree-kc-10',
    name: 'মাটি রঙা জামদানি সুতি হ্যান্ডলুম',
    subtitle: 'আর্থি ট্যান বেইজ সুতি জমিনে কটন সুতার হাতে বোনা বুটি ও জামদানি পাড়',
    category: 'খাদি ও সুতি',
    subCategory: 'হ্যান্ডলুম সুতি',
    origin: 'টাঙ্গাইল ও রূপগঞ্জ',
    price: 4900,
    originalPrice: 5800,
    discountBadge: '১৬% ছাড়',
    badge: 'নতুন আগমন',
    badgeType: 'primary',
    rating: 4.9,
    reviewCount: 35,
    buyersRecommended: 98,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzodyahguiqQu7bRC7gNFYO1LK7qAgZ7tomW3-5jB5hdZlPMR6ATpRjbZ6BliCW2xciL0sULTjniJsq5pKzMsb41L4PwEiGeEq_RSvEXtOhQQN6aoTf9M3xRmmGTWSRSmLSbUZ-mfEChjQiKbsJPMU-3fm3oMMZEXQaAcCuOMRk0N6ZYxMDeJIVXI5RcaeqCeZZ2XwGUeWISXnFWjS_J_QelAbLG9pAnEh75vLlZSkS-ekC6-GVOY',
    galleryImages: [
      {
        label: 'আঁচল',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzodyahguiqQu7bRC7gNFYO1LK7qAgZ7tomW3-5jB5hdZlPMR6ATpRjbZ6BliCW2xciL0sULTjniJsq5pKzMsb41L4PwEiGeEq_RSvEXtOhQQN6aoTf9M3xRmmGTWSRSmLSbUZ-mfEChjQiKbsJPMU-3fm3oMMZEXQaAcCuOMRk0N6ZYxMDeJIVXI5RcaeqCeZZ2XwGUeWISXnFWjS_J_QelAbLG9pAnEh75vLlZSkS-ekC6-GVOY',
        description: 'মাটির মিষ্টি রঙে সুতির জামদানি কাজের পাড়'
      }
    ],
    purityMark: '১০০% পিওর সুতি',
    countInfo: '১০০ কাউন্ট সুতি',
    fabric: 'প্রাকৃতিক কার্পাস তুলা',
    craftsmanship: 'সুতি সুতোয় হাতে বোনা জামদানি মোটিফ',
    length: '৫.৫ মিটার',
    careInstructions: 'সাধারণ ধোয়া বা হালকা ড্রাই ওয়াশ',
    artisanName: 'তাঁতি সুধীর কর্মকার',
    artisanDays: 14,
    artisanBio: 'বাংলার মাটির সোঁদা গন্ধ আর তাঁতের ভালোবাসায় বোনা এক অকৃত্রিম শাড়ি।',
    artisanImage: ARTISAN_IMG_2,
    colors: [
      { name: 'মাটি রঙা বেইজ', hex: '#d7ccc8' },
      { name: 'টেরাকোটা লাল', hex: '#bf360c' }
    ],
    hasBlousePiece: false,
    inStock: true,
    colorName: 'মাটি রঙা বেইজ',
    occasion: 'দৈনন্দিন পরিধান'
  },

  // ==========================================
  // 6. শিফন ও জর্জেট (CHIFFON & GEORGETTE - 10 SAREES)
  // ==========================================
  {
    id: 'saree-cg-1',
    name: 'ল্যাভেন্ডার চিকনকারি শিফন শাড়ি',
    subtitle: 'সূক্ষ্ম রূপালী চিকনকারি রেশমি সুতো ও স্ক্যালপ বর্ডার • লাইটওয়েট প্রিমিয়াম ফ্যাব্রিক',
    category: 'শিফন ও জর্জেট',
    subCategory: 'পিওর শিফন',
    origin: 'লখনৌ ও বাংলা সমন্বিত কারুকাজ',
    price: 9800,
    originalPrice: 11500,
    discountBadge: '১৫% ছাড়',
    badge: 'নতুন আগমন',
    badgeType: 'primary',
    rating: 4.9,
    reviewCount: 38,
    buyersRecommended: 98,
    image: '/src/assets/images/chiffon_lavender_chikankari_1791956244001.jpg',
    galleryImages: [
      {
        label: 'আঁচল',
        url: '/src/assets/images/chiffon_lavender_chikankari_1791956244001.jpg',
        description: 'মনোরম ল্যাভেন্ডার শিফনে সূক্ষ্ম চিকনকারি রেশম সুতোর স্ক্যালপ পাড়'
      }
    ],
    purityMark: '১০০% পিওর শিফন',
    countInfo: 'সিল্ক-শিফন ব্লেণ্ড',
    fabric: '১০০% পিওর ভিসকস শিফন',
    craftsmanship: 'হাতে সূক্ষ্ম চিকনকারি রেশম সুতোর বুনন ও রুপালী সিকোয়েন্স',
    length: '৫.৫ মিটার + ১ মিটার ব্লাউজ পিস',
    careInstructions: 'কেবলমাত্র ড্রাই ওয়াশ',
    artisanName: 'কারুশিল্পী নাসরিন আখতার',
    artisanDays: 14,
    artisanBio: 'অতি সূক্ষ্ম শিফনের ওপর রেশমি সুতোর সুচারু অলংকরণে এই শাড়িতে রয়েছে আধুনিক আভিজাত্য ও প্রশান্তির আবহ।',
    artisanImage: ARTISAN_IMG_1,
    colors: [
      { name: 'ল্যাভেন্ডার বেগুনি', hex: '#b39ddb' },
      { name: 'প্যাস্টেল পিঙ্ক', hex: '#f8bbd0' },
      { name: 'আইভরি সাদা', hex: '#fdfbf7' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'ল্যাভেন্ডার বেগুনি',
    occasion: 'সান্ধ্য অনুষ্ঠান'
  },
  {
    id: 'saree-cg-2',
    name: 'রুবী ওয়াইন রাজকীয় জর্জেট শাড়ি',
    subtitle: 'অ্যান্টিক গোটা পট্টি ও সিকোয়েন্স এমব্রয়ডারি কাজ • এক্সক্লুসিভ পার্টিওয়্যার',
    category: 'শিফন ও জর্জেট',
    subCategory: 'পিওর জর্জেট',
    origin: 'হেরিটেজ বুটিক স্পেশাল',
    price: 14500,
    originalPrice: 17000,
    discountBadge: '১৪% ছাড়',
    badge: 'এক্সক্লুসিভ',
    badgeType: 'exclusive',
    rating: 5.0,
    reviewCount: 46,
    buyersRecommended: 99,
    image: '/src/assets/images/georgette_ruby_wine_1791956244751.jpg',
    galleryImages: [
      {
        label: 'আঁচল',
        url: '/src/assets/images/georgette_ruby_wine_1791956244751.jpg',
        description: 'ঘন সোনালী গোটা পট্টি ও অ্যান্টিক জরি পাড়ের সমৃদ্ধ মেলবন্ধন'
      }
    ],
    purityMark: 'হেভি পিওর জর্জেট',
    countInfo: '৬০ গ্রাম জর্জেট',
    fabric: 'প্রিমিয়াম পিওর সিল্ক জর্জেট',
    craftsmanship: 'ঘন জারদৌসি, গোটা পট্টি ও কাটওয়ার্ক পাড়',
    length: '৬.৩ মিটার (ব্লাউজ সহ)',
    careInstructions: 'স্পেশাল ড্রাই ওয়াশ',
    artisanName: 'মাস্টার কারিগর হাসেম আলী',
    artisanDays: 19,
    artisanBio: 'গভীর রুবী ওয়াইনের ওপর স্বর্ণালঙ্কার খচিত রাজকীয় রূপ যা সান্ধ্য উৎসব ও রিসেপশনে অতুলনীয়।',
    artisanImage: ARTISAN_IMG_2,
    colors: [
      { name: 'রুবী ওয়াইন', hex: '#5b1328' },
      { name: 'রয়াল মেরুন', hex: '#550012' },
      { name: 'ডিপ ভায়োলেট', hex: '#311212' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'রুবী ওয়াইন',
    occasion: 'বিয়ে ও উৎসব'
  },
  {
    id: 'saree-cg-3',
    name: 'পুদিনা সবুজ ফ্লোরাল হ্যান্ডপেইন্ট শিফন',
    subtitle: 'সফট মসলিন শিফন • রোস গোল্ড টিস্যু পাড় ও বোটানিক্যাল মোটিফ',
    category: 'শিফন ও জর্জেট',
    subCategory: 'ফ্লোরাল শিফন',
    origin: 'শান্তিনিকেতন আর্ট ক্লাস্টার',
    price: 8600,
    originalPrice: 10200,
    discountBadge: '১৬% ছাড়',
    badge: 'বেস্টসেলার',
    badgeType: 'secondary',
    rating: 4.8,
    reviewCount: 52,
    buyersRecommended: 97,
    image: '/src/assets/images/chiffon_mint_floral_1791956244898.jpg',
    galleryImages: [
      {
        label: 'আঁচল',
        url: '/src/assets/images/chiffon_mint_floral_1791956244898.jpg',
        description: 'হাতে আঁকা প্যাস্টেল পুষ্পবৃষ্টি ও গোলাপী সোনালী টিস্যু বর্ডার'
      }
    ],
    purityMark: 'হ্যান্ডপেইন্টেড খাঁটি শিফন',
    countInfo: 'ফ্রেঞ্চ শিফন ফিনিশ',
    fabric: 'পিওর ফাইন ফ্লোয়িং শিফন',
    craftsmanship: 'হস্তচিত্রিত প্রাকৃতিক রঞ্জক ফ্লোরাল মোটিফ ও টিস্যু জারি বর্ডার',
    length: '৫.৫ মিটার + আনস্টিচড ব্লাউজ',
    careInstructions: 'হালকা ড্রাই ক্লিনিং',
    artisanName: 'চিত্রশিল্পী শুভ্রা রায়',
    artisanDays: 12,
    artisanBio: 'প্রকৃতির সজীবতাকে ক্যানভাস বানিয়ে শিফনের গায়ে প্রতিটি পাপড়ি হাতে রঙ তুলিতে ফুটিয়ে তোলা হয়েছে।',
    artisanImage: ARTISAN_IMG_1,
    colors: [
      { name: 'পুদিনা সবুজ', hex: '#81c784' },
      { name: 'প্যাস্টেল পিচ', hex: '#ffccbc' },
      { name: 'আইভরি ক্রিম', hex: '#e8dab5' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'পুদিনা সবুজ',
    occasion: 'দৈনন্দিন পরিধান'
  },
  {
    id: 'saree-cg-4',
    name: 'মিডনাইট নেভি কাশ্মীরি কারুকাজ জর্জেট',
    subtitle: 'বহুবর্ণিল কাশ্মীরি আরি সূচিশিল্প ও রাজকীয় ঐতিহ্যবাহী পাড়',
    category: 'শিফন ও জর্জেট',
    subCategory: 'কাশ্মীরি জর্জেট',
    origin: 'কাশ্মীর ও ঢাকা সমন্বিত হ্যান্ডলুম',
    price: 13200,
    originalPrice: 15500,
    discountBadge: '১৫% ছাড়',
    badge: 'হাতে বোনা',
    badgeType: 'neutral',
    rating: 4.9,
    reviewCount: 34,
    buyersRecommended: 98,
    image: '/src/assets/images/georgette_midnight_kashmiri_1791956245081.jpg',
    galleryImages: [
      {
        label: 'আঁচল',
        url: '/src/assets/images/georgette_midnight_kashmiri_1791956245081.jpg',
        description: 'গভীর নেভি জমিনে শতাব্দি প্রাচীন কাশ্মীরি কল্কা ও পেসলি আরি কাজ'
      }
    ],
    purityMark: 'পিওর ফক্স জর্জেট',
    countInfo: '১০০% সূক্ষ্ম এমব্রয়ডারি',
    fabric: 'হাই ডেনসিটি পিওর জর্জেট',
    craftsmanship: 'বহুবর্ণিল সুতি ও রেশম আরি সূচিকর্মের জমকালো কারুকাজ',
    length: '৬.৩ মিটার (ব্লাউজ পিস সহ)',
    careInstructions: 'ড্রাই ওয়াশ কাম্য',
    artisanName: 'ওস্তাদ বশির আহমেদ',
    artisanDays: 25,
    artisanBio: 'গভীর রাতের আকাশের মতো নেভি জমিনে ফুটে উঠেছে কাশ্মীরি ঐতিহ্যের রঙিন ফুলের সমারোহ।',
    artisanImage: ARTISAN_IMG_2,
    colors: [
      { name: 'মিডনাইট নেভি', hex: '#0a1a36' },
      { name: 'রয়াল ব্লু', hex: '#1a237e' },
      { name: 'গভীর কালো', hex: '#1b1b1c' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'মিডনাইট নেভি',
    occasion: 'সান্ধ্য অনুষ্ঠান'
  },
  {
    id: 'saree-cg-5',
    name: 'স্বর্ণাভ বাসন্তী অরগাঞ্জা-শিফন শাড়ি',
    subtitle: 'সূক্ষ্ম মিরর ওয়ার্ক ও স্বর্ণালী জরির স্ট্রাইপ • গায়ে হলুদ ও বসন্ত উৎসব',
    category: 'শিফন ও জর্জেট',
    subCategory: 'অরগাঞ্জা শিফন',
    origin: 'রাজশাহী রেশম শিল্প',
    price: 11800,
    originalPrice: 13800,
    discountBadge: '১৪% ছাড়',
    badge: 'বেস্টসেলার',
    badgeType: 'secondary',
    rating: 4.9,
    reviewCount: 41,
    buyersRecommended: 97,
    image: '/src/assets/images/chiffon_sunlight_yellow_1791956244958.jpg',
    galleryImages: [
      {
        label: 'আঁচল',
        url: '/src/assets/images/chiffon_sunlight_yellow_1791956244958.jpg',
        description: 'উজ্জ্বল বাসন্তী হলুদ জমিনে সুক্ষ্ম স্বর্ণালী স্ট্রাইপ ও মিরর বর্ডার'
      }
    ],
    purityMark: 'সিল্ক-অরগাঞ্জা ব্লেন্ড',
    countInfo: '১০০% খাঁটি লাস্টার',
    fabric: 'প্রিমিয়াম শিফন-অরগাঞ্জা ফিউশন',
    craftsmanship: 'সোনালী জারি স্ট্রাইপ, নিখুঁত মিরর ও কারুকাজ পাড়',
    length: '৬.৩ মিটার (ব্লাউজ সহ)',
    careInstructions: 'ড্রাই ওয়াশ কাম্য',
    artisanName: 'তাঁতি অমল ভৌমিক',
    artisanDays: 16,
    artisanBio: 'বসন্তের রোদমাখা উজ্জ্বলতায় তৈরি এই শাড়ি হলুদ ও পারিবারিক আনন্দ মুহূর্তকে রাঙিয়ে তোলে।',
    artisanImage: ARTISAN_IMG_1,
    colors: [
      { name: 'বাসন্তী হলুদ', hex: '#fbc02d' },
      { name: 'সরিষা গোল্ড', hex: '#d4af37' },
      { name: 'স্বর্ণাভ ক্রিম', hex: '#e8dab5' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'বাসন্তী হলুদ',
    occasion: 'বিয়ে ও উৎসব'
  },
  {
    id: 'saree-cg-6',
    name: 'গোলাপী প্যাস্টেল শিফন শাড়ি',
    subtitle: 'হালকা সুতোয় অলংকৃত ট্র্যাডিশনাল বর্ডার ও নরম ড্রেপ • আধুনিক ট্রেন্ড',
    category: 'শিফন ও জর্জেট',
    subCategory: 'লাইটওয়েট শিফন',
    origin: 'আধুনিক তাঁত ক্লাস্টার',
    price: 7500,
    originalPrice: 8900,
    discountBadge: '১৬% ছাড়',
    badge: 'সীমিত স্টক',
    badgeType: 'neutral',
    rating: 4.7,
    reviewCount: 29,
    buyersRecommended: 95,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDU2ySn5813XReGkcGz8MrT_gdsvGbJhabnzVkXpdDw0cvhdJEs4vkPDv9v_Iko2y6RDaqHdSBpQ5-itBtPG4TuAfusOti9JraEyROlZhWfx57z0bQx7PKug5CZkQaP2VDKTeiv4g5B1BonU5-LknzrA8NmGlWE8SXKX6vqGYer-HUy3E43z1nWEGtFwqIEb5nCWYyVl93atgCNwkz_Mwb2yDnKRXVy10kqZCc1-NcR9BYuHlNz8HY',
    galleryImages: [
      {
        label: 'আঁচল',
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDU2ySn5813XReGkcGz8MrT_gdsvGbJhabnzVkXpdDw0cvhdJEs4vkPDv9v_Iko2y6RDaqHdSBpQ5-itBtPG4TuAfusOti9JraEyROlZhWfx57z0bQx7PKug5CZkQaP2VDKTeiv4g5B1BonU5-LknzrA8NmGlWE8SXKX6vqGYer-HUy3E43z1nWEGtFwqIEb5nCWYyVl93atgCNwkz_Mwb2yDnKRXVy10kqZCc1-NcR9BYuHlNz8HY',
        description: 'কোমল গোলাপী শিফনে পরিমিত এমব্রয়ডারি বর্ডার'
      }
    ],
    purityMark: 'প্রিমিয়াম শিফন',
    countInfo: '১০০% পিওর শিফন',
    fabric: 'লাইটওয়েট পিওর শিফন',
    craftsmanship: 'সূক্ষ্ম রেশম সুতোয় অলংকৃত বর্ডার ও আরামদায়ক নরম ফল',
    length: '৫.৫ মিটার',
    careInstructions: 'হালকা শ্যাম্পু ওয়াশ অথবা ড্রাই ওয়াশ',
    artisanName: 'তাঁতি সুধীর কর্মকার',
    artisanDays: 8,
    artisanBio: 'যে কোনো দিনের সান্ধ্য আড্ডায় বা ফর্মাল অনুষ্ঠানে মার্জিত ও সাবলীল লুক নিশ্চিত করে।',
    artisanImage: ARTISAN_IMG_1,
    colors: [
      { name: 'রোজ পিঙ্ক', hex: '#f48fb1' },
      { name: 'বেবি পিঙ্ক', hex: '#ffcdd2' },
      { name: 'পাউডার ব্লু', hex: '#b3e5fc' }
    ],
    hasBlousePiece: false,
    inStock: true,
    colorName: 'রোজ পিঙ্ক',
    occasion: 'দৈনন্দিন পরিধান'
  },
  {
    id: 'saree-cg-7',
    name: 'আসমানি নীল মুক্তা কারুকাজ শিফন',
    subtitle: 'আকাশি নীল ফাইন শিফনে সূক্ষ্ম সাদা মুক্তা ও রৌপ্য ক্রিস্টাল পার্ল কাজ',
    category: 'শিফন ও জর্জেট',
    subCategory: 'পিওর শিফন',
    origin: 'হেরিটেজ বুটিক স্পেশাল',
    price: 10400,
    originalPrice: 12500,
    discountBadge: '১৭% ছাড়',
    badge: 'এক্সক্লুসিভ',
    badgeType: 'exclusive',
    rating: 4.9,
    reviewCount: 36,
    buyersRecommended: 98,
    image: '/src/assets/images/chiffon_lavender_chikankari_1791956244001.jpg',
    galleryImages: [
      {
        label: 'আঁচল',
        url: '/src/assets/images/chiffon_lavender_chikankari_1791956244001.jpg',
        description: 'আসমানি নীলের স্বচ্ছতায় মুক্তো ও ক্রিস্টালের ঝিলিক'
      }
    ],
    purityMark: '১০০% পিওর শিফন',
    countInfo: 'ফ্রেঞ্চ শিফন',
    fabric: 'প্রিমিয়াম সফট শিফন',
    craftsmanship: 'হাতে বসানো সূক্ষ্ম মুক্তো ও রৌপ্য কাটদানা বর্ডার',
    length: '৫.৫ মিটার + ১ মিটার ব্লাউজ পিস',
    careInstructions: 'ড্রাই ওয়াশ কাম্য',
    artisanName: 'কারুশিল্পী নাসরিন আখতার',
    artisanDays: 15,
    artisanBio: 'জলরঙের মতো আসমানি নীলে মুক্তোর স্নিগ্ধতা যা যে কাউকে মুগ্ধ করে।',
    artisanImage: ARTISAN_IMG_1,
    colors: [
      { name: 'আসমানি নীল', hex: '#81d4fa' },
      { name: 'আইভরি সাদা', hex: '#fdfbf7' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'আসমানি নীল',
    occasion: 'সান্ধ্য অনুষ্ঠান'
  },
  {
    id: 'saree-cg-8',
    name: 'পান্না সবুজ কাটদানা জরি জর্জেট শাড়ি',
    subtitle: 'গাঢ় এমারেল্ড গ্রিন পিওর জর্জেটে সোনালী কাটদানা ও জারদৌসি কাজ',
    category: 'শিফন ও জর্জেট',
    subCategory: 'পিওর জর্জেট',
    origin: 'হেরিটেজ বুটিক স্পেশাল',
    price: 13900,
    originalPrice: 16500,
    discountBadge: '১৬% ছাড়',
    badge: 'সেরা পছন্দ',
    badgeType: 'secondary',
    rating: 5.0,
    reviewCount: 43,
    buyersRecommended: 99,
    image: '/src/assets/images/georgette_ruby_wine_1791956244751.jpg',
    galleryImages: [
      {
        label: 'আঁচল',
        url: '/src/assets/images/georgette_ruby_wine_1791956244751.jpg',
        description: 'গাঢ় সবুজে সোনালী কাটদানা ও সিকোয়েন্স এমব্রয়ডারি'
      }
    ],
    purityMark: '৬০ গ্রাম পিওর জর্জেট',
    countInfo: '১০০% পিওর জর্জেট',
    fabric: 'ভারী সিল্ক জর্জেট',
    craftsmanship: 'কাটদানা, জারদৌসি ও গোল্ডেন সিকোয়েন্সের জমকালো পাড়',
    length: '৬.৩ মিটার (ব্লাউজ সহ)',
    careInstructions: 'ড্রাই ওয়াশ কাম্য',
    artisanName: 'মাস্টার কারিগর হাসেম আলী',
    artisanDays: 22,
    artisanBio: 'বিবাহোত্তর রিসেপশন ও রাতের আভিজাত্যপূর্ণ জমায়েতে অসাধারণ ঔজ্জ্বল্য ছড়ায়।',
    artisanImage: ARTISAN_IMG_2,
    colors: [
      { name: 'পান্না সবুজ', hex: '#1b5e20' },
      { name: 'বোতল গ্রিন', hex: '#004d40' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'পান্না সবুজ',
    occasion: 'বিয়ে ও উৎসব'
  },
  {
    id: 'saree-cg-9',
    name: 'প্যাস্টেল পিচ সিকোয়েন্স ও চিকনকারি জর্জেট',
    subtitle: 'কোমল পিচ রঙের ফক্স জর্জেটে সূক্ষ্ম টোন-অন-টোন চিকনকারি ও ডালিয়া বুটা',
    category: 'শিফন ও জর্জেট',
    subCategory: 'পিওর জর্জেট',
    origin: 'লখনৌ ও ঢাকা ক্লাস্টার',
    price: 11500,
    originalPrice: 13500,
    discountBadge: '১৫% ছাড়',
    badge: 'নতুন আগমন',
    badgeType: 'primary',
    rating: 4.8,
    reviewCount: 37,
    buyersRecommended: 97,
    image: '/src/assets/images/chiffon_mint_floral_1791956244898.jpg',
    galleryImages: [
      {
        label: 'আঁচল',
        url: '/src/assets/images/chiffon_mint_floral_1791956244898.jpg',
        description: 'পিচ রঙের ওপর হালকা রেশম চিকনকারির মনোমুগ্ধকর নকশা'
      }
    ],
    purityMark: 'প্রিমিয়াম জর্জেট',
    countInfo: 'সিল্ক জর্জেট',
    fabric: '১০০% পিওর সফ্‌ট জর্জেট',
    craftsmanship: 'টোন-অন-টোন রেশমি সুতো ও মাইক্রো সিকোয়েন্স',
    length: '৬.৩ মিটার',
    careInstructions: 'ড্রাই ওয়াশ কাম্য',
    artisanName: 'কারুশিল্পী নাসরিন আখতার',
    artisanDays: 18,
    artisanBio: 'প্যাস্টেল শেডের কোমলতা ও মার্জিত চিকনকারির অপূর্ব মেলবন্ধন।',
    artisanImage: ARTISAN_IMG_1,
    colors: [
      { name: 'প্যাস্টেল পিচ', hex: '#ffccbc' },
      { name: 'আইভরি ক্রিম', hex: '#e8dab5' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'প্যাস্টেল পিচ',
    occasion: 'সান্ধ্য অনুষ্ঠান'
  },
  {
    id: 'saree-cg-10',
    name: 'ধূসর চারকোল গ্লিটার শিফন শাড়ি',
    subtitle: 'স্মোকি চারকোল কালো শিফনে মেটালিক গ্লিটার বর্ডার ও স্টাইলিশ আধুনিক ড্র্যাপ',
    category: 'শিফন ও জর্জেট',
    subCategory: 'লাইটওয়েট শিফন',
    origin: 'আধুনিক ফ্যাশন স্টুডিও',
    price: 8900,
    originalPrice: 10500,
    discountBadge: '১৫% ছাড়',
    badge: 'সীমিত স্টক',
    badgeType: 'neutral',
    rating: 4.9,
    reviewCount: 28,
    buyersRecommended: 98,
    image: '/src/assets/images/georgette_midnight_kashmiri_1791956245081.jpg',
    galleryImages: [
      {
        label: 'আঁচল',
        url: '/src/assets/images/georgette_midnight_kashmiri_1791956245081.jpg',
        description: 'চারকোল ধূসর শিফনে চকচকে মেটালিক গ্লিটার পাড়'
      }
    ],
    purityMark: '১০০% পিওর শিফন',
    countInfo: '১০০% খাঁটি শিফন',
    fabric: 'প্রিমিয়াম লাইটওয়েট ফ্লোইং শিফন',
    craftsmanship: 'রৌপ্য গ্লিটার লাইন ও মসৃণ স্ক্যালপ বর্ডার',
    length: '৫.৫ মিটার + আনস্টিচড ব্লাউজ',
    careInstructions: 'ড্রাই ওয়াশ কাম্য',
    artisanName: 'তাঁতি সুধীর কর্মকার',
    artisanDays: 13,
    artisanBio: 'সান্ধ্য ককটেল পার্টি ও সংবর্ধনায় আধুনিক নারীদের জন্য অত্যন্ত ফ্যাশনেবল নির্বাচন।',
    artisanImage: ARTISAN_IMG_2,
    colors: [
      { name: 'চারকোল ধূসর', hex: '#37474f' },
      { name: 'জেট ব্ল্যাক', hex: '#1b1b1c' }
    ],
    hasBlousePiece: true,
    inStock: true,
    colorName: 'চারকোল ধূসর',
    occasion: 'সান্ধ্য অনুষ্ঠান'
  }
];

export const INITIAL_CART_ITEMS: CartItem[] = [
  {
    id: 'cart-1',
    saree: SAREES_DATA[0], // Neelambari Dhakai Jamdani
    selectedColor: 'নীলাম্বরী নীল',
    withBlousePiece: true,
    quantity: 1,
    pricePerUnit: 18500
  },
  {
    id: 'cart-2',
    saree: SAREES_DATA[10], // Shidur Ranga Bridal Katan
    selectedColor: 'সিঁদুর লাল',
    withBlousePiece: true,
    quantity: 1,
    pricePerUnit: 29500
  }
];

export const STORY_WEAVES = [
  {
    id: 'jamdani',
    title: 'জামদানি',
    filterTag: 'ঢাকাই জামদানি',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWyLyfnRFVHidVnQ_P0Hc94N75VkZZiN-zlNhR2IdO2mMbMEhb2bIXw4eVBfPMHKfss9t-eUxSOLWmQ8hJj7Y8D-_wbAfP_JQzAW8iPPjyn1CuW4V2dL6zrMlJGg8i9mXdurIF9bHbGxtBtfJX1QEPwJBYmIORQn8GVRYDeDS9rK9N0UGY75QGJKoE7cyj37GVEbC2bJdcRZmw76G7OSSfMVcgyCZJL79s8NPe_nwJOv1nDZlp2ys'
  },
  {
    id: 'katan',
    title: 'কাতান',
    filterTag: 'কাতান ও বেনারসি',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8ZPZEjIp08RiimwDPsipr7OiRYp6WePGCq5sO09r53H-z9LwIc6Tsq8LTwK5pTGfuMfNlJkK3m15PU2d_FZc_YRAYEC6QS_uToODIAQZepyUM7QZFnXSxdyzs4-6HVPnL5pPcXABQ9vjaqiWNO5QyponXKUTnBIkxPN7OKfzWIg4GWaAIDKeKKjG9rhpvOuST1xm563XN4UKga5aeAKv-ZBTv0E4F1D71xiI1-qR91V1a5j6kw4E'
  },
  {
    id: 'chiffon',
    title: 'শিফন ও জর্জেট',
    filterTag: 'শিফন ও জর্জেট',
    image: '/src/assets/images/chiffon_lavender_chikankari_1791956244001.jpg'
  },
  {
    id: 'tussar',
    title: 'তসর সিল্ক',
    filterTag: 'তসর ও মটকা',
    image: '/src/assets/images/tussar_silk_honey_gold_1791960144448.jpg'
  },
  {
    id: 'silk',
    title: 'পিওর সিল্ক',
    filterTag: 'পিওর সিল্ক',
    image: '/src/assets/images/kanjivaram_copper_zari_1791960144258.jpg'
  },
  {
    id: 'tant',
    title: 'তাঁত ও কটন',
    filterTag: 'খাদি ও সুতি',
    image: '/src/assets/images/tangail_cotton_indigo_1791960141057.jpg'
  },
  {
    id: 'muslin',
    title: 'ঢাকাই মসলিন',
    filterTag: 'ঢাকাই জামদানি',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDK78X7yg9triwYZSOt0Xhioe_lwIqM9hIN911wyPgDNBkmMDIC7vEdXHqSbUBVcLHafYl-pz5ZYs4wVDjq7pnVo_b55noYTe5m9O3NM8BAd_HMpiV2HQ723q0lNS0tnZvO-ZovZqPll5u8tsHX8pOPK8D6jAzpmF9WN3dSfJDZA0mqWP709sAPx_4pPILDidmXo71fcjTKcwboGcHC7UlusRPDzxd0_y87UTdxjVzh-sac3UKu8CY'
  },
  {
    id: 'bridal',
    title: 'ব্রাইডাল',
    filterTag: 'কাতান ও বেনারসি',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBehOVAaxn62FP2w30EuVEE8D9T8nL3u5Rtvy-qsXbQbMlApFuM0sOmvb-TD02Y6s8cKOsFTYT2NajcVZkam47EtFpMt3L8pU94paaYXiKuPV4oHVjE0DghXXPiD-4dIF91DCBijWJWFsZAwHx_RLSBEhhdtMzff0acddt2PWiflyeAoxKTv3_9roitA3paX6C0tdN5kFmXFnYm1IZAaNs3EjV8_ZDAblS7qqUZGQgRu3aQ-DtzLNo'
  }
];

export const CATEGORY_TYPES = [
  {
    title: 'জামদানি শাড়ি',
    badge: 'জিআই ট্যাগ প্রাপ্ত',
    count: '১০টি এক্সক্লুসিভ ডিজাইন',
    image: '/src/assets/images/dhakai_jamdani_terracotta_1791960142789.jpg',
    categoryKey: 'ঢাকাই জামদানি'
  },
  {
    title: 'রাজকীয় কাতান',
    badge: 'রাজকীয় জরি',
    count: '১০টি ব্রাইডাল পিস',
    image: '/src/assets/images/katan_emerald_banarasi_1791960142039.jpg',
    categoryKey: 'কাতান ও বেনারসি'
  },
  {
    title: 'শিফন ও জর্জেট',
    badge: 'আধুনিক ট্রেন্ড',
    count: '১০টি ট্রেন্ডি ডিজাইন',
    image: '/src/assets/images/georgette_ruby_wine_1791956244751.jpg',
    categoryKey: 'শিফন ও জর্জেট'
  },
  {
    title: 'পিওর সিল্ক',
    badge: '১০০% সিল্কমার্ক',
    count: '১০টি বালুচরি ও কাঞ্জিভরম',
    image: '/src/assets/images/kanjivaram_copper_zari_1791960144258.jpg',
    categoryKey: 'পিওর সিল্ক'
  },
  {
    title: 'তসর ও মটকা',
    badge: 'ন্যাচারাল ফাইবার',
    count: '১০টি বুনো তসর শাড়ি',
    image: '/src/assets/images/tussar_silk_honey_gold_1791960144448.jpg',
    categoryKey: 'তসর ও মটকা'
  },
  {
    title: 'খাদি ও সুতি',
    badge: 'খাঁটি দেশীয় ঐতিহ্য',
    count: '১০টি টাঙ্গাইল ও তাঁত',
    image: '/src/assets/images/tangail_cotton_indigo_1791960141057.jpg',
    categoryKey: 'খাদি ও সুতি'
  }
];

export const LOGO_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6GZ4cF84d-JyWsEzYj10pDFtdPO4Eq2-owxGw3_6j9r0rRGd69Elks3io5ywXxgVnWPXAWtE-7F8CeIVgFYAKWBpXcQeBpweHZOasxTfCMKLvuurqFNjw_YUKJr6_hib7l8BvVKk1mkDt5_DMOW6BlkfLUAZPvkwxLZKk4U_SttSf47TVxBY6A5I0Hw5jlbg3SCZ5X8ZgAusY8TBLBE1HYY9jY0NiHmM6DGGWsoCFytCtju3hUho';

export const PROFILE_AVATAR = 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1IyBGsLJ9ILDUg2ZdwI0h61SOK42B05CsLfYPVDAtg_xfhD1ML19ZU4C6cAHNK9gLodgeUy5-oqKyuBoftFcGK08DvlDqnpIGD7y8QekQal6Cc2C94mELeCiE8C0QyxlolvWkMKYsk-BdJ0POXyiwfH9V60nJHdn6ElbmlK0iNv_JrzCS66k3vorGxqswRx8PVDvaWZI4QBLTZ4or6lWfZ-zb-X4y3EX157rtiVdv7yPOH-JJuO0';

export const ZOOM_MODAL_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuB90IbBxuWkz0RUMeL8HG0QlGJQFt-3bERp78CpXBoxQJ5yTOBqaufRBMYsz-iDb_7koQRTz0v-51OUwRK7OdA3YcjBXCvnh_vAEvVn6I9l7qj3OD8-G56uy-W7hOiIqil1K6vy2wYLORWD0gmD3HGYUVfjlMTwKP0vggBMRIlTI5TH7U0udkOJx1PzrD_6TT2_4MhxLyjkBtN41ZLVK9b-HzIGtT0_YqFLOLbgWDSFs_l7qaMlR-Q';
