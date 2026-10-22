/**
 * PROFI-STYLE CLASSIFIEDS PROTOTYPE FOR DLE 19/20
 * THEME: VIBRANT BRIGHT GREEN & ULTRA-SPACIOUS MINIMALISM
 * MOSCOW & MOSCOW REGION
 */

// High-fidelity graphic banner generator for ads (100% reliable, zero external dependencies)
function getFallbackImage(category, title, adId) {
  if (category === "Ремонт" && (title.includes("потол") || adId === 5)) {
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23f7f2eb"/><stop offset="100%" stop-color="%23e5ddd2"/></linearGradient>
        <linearGradient id="glow" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="%23ffffff" stop-opacity="0.95"/><stop offset="100%" stop-color="%23ebd8be" stop-opacity="0.1"/></linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(%23g1)"/>
      <polygon points="80,50 720,50 800,120 0,120" fill="%23ffffff" opacity="0.85"/>
      <line x1="100" y1="50" x2="700" y2="50" stroke="%231bb76e" stroke-width="6"/>
      <rect x="160" y="48" width="480" height="70" fill="url(%23glow)"/>
      <polygon points="100,120 700,120 780,460 20,460" fill="%23dfd7cc"/>
      <!-- Modern Sofa -->
      <rect x="250" y="290" width="300" height="120" rx="18" fill="%23475569"/>
      <rect x="270" y="260" width="260" height="65" rx="14" fill="%2364748b"/>
      <rect x="220" y="310" width="40" height="90" rx="12" fill="%23334155"/>
      <rect x="540" y="310" width="40" height="90" rx="12" fill="%23334155"/>
      <!-- Label -->
      <rect x="36" y="36" width="160" height="34" rx="17" fill="%23ffffff" opacity="0.95"/>
      <text x="116" y="58" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="%231bb76e" text-anchor="middle">Натяжные потолки</text>
    </svg>`;
  }

  if (category === "Ремонт" && (title.includes("сантех") || adId === 6)) {
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
      <defs>
        <linearGradient id="bgS" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23ebf7f1"/><stop offset="100%" stop-color="%23d2ebe0"/></linearGradient>
        <linearGradient id="chrome" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="%23cbd5e1"/><stop offset="50%" stop-color="%23ffffff"/><stop offset="100%" stop-color="%2394a3b8"/></linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(%23bgS)"/>
      <!-- Ceramic Tiles Grid -->
      <line x1="0" y1="125" x2="800" y2="125" stroke="%23ffffff" stroke-width="3"/>
      <line x1="0" y1="250" x2="800" y2="250" stroke="%23ffffff" stroke-width="3"/>
      <line x1="0" y1="375" x2="800" y2="375" stroke="%23ffffff" stroke-width="3"/>
      <line x1="200" y1="0" x2="200" y2="500" stroke="%23ffffff" stroke-width="3"/>
      <line x1="400" y1="0" x2="400" y2="500" stroke="%23ffffff" stroke-width="3"/>
      <line x1="600" y1="0" x2="600" y2="500" stroke="%23ffffff" stroke-width="3"/>
      <!-- Modern Chrome Faucet -->
      <path d="M400,390 V210 C400,150 320,150 320,210 V250" fill="none" stroke="url(%23chrome)" stroke-width="32" stroke-linecap="round"/>
      <circle cx="320" cy="270" r="16" fill="%231bb76e"/>
      <!-- Water Drop -->
      <path d="M320,315 C320,315 300,345 300,360 C300,374 309,384 320,384 C331,384 340,374 340,360 C340,345 320,315 320,315 Z" fill="%2338bdf8"/>
      <!-- Wrench -->
      <rect x="470" y="270" width="190" height="26" rx="13" fill="%2364748b" transform="rotate(-30 470 270)"/>
      <!-- Badge -->
      <rect x="36" y="36" width="170" height="34" rx="17" fill="%23ffffff" opacity="0.95"/>
      <text x="121" y="58" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="%231bb76e" text-anchor="middle">Сантехника & Трубы</text>
    </svg>`;
  }

  if (category === "Ремонт") {
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
      <defs>
        <linearGradient id="bgR" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23f7f2eb"/><stop offset="100%" stop-color="%23e8ded1"/></linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(%23bgR)"/>
      <!-- Floor Base -->
      <line x1="60" y1="380" x2="740" y2="380" stroke="%23b8a48e" stroke-width="4"/>
      <!-- Minimalist Ladder -->
      <line x1="280" y1="110" x2="210" y2="430" stroke="%238c6d48" stroke-width="14" stroke-linecap="round"/>
      <line x1="430" y1="110" x2="500" y2="430" stroke="%238c6d48" stroke-width="14" stroke-linecap="round"/>
      <line x1="260" y1="190" x2="450" y2="190" stroke="%23a88c6e" stroke-width="9"/>
      <line x1="240" y1="270" x2="470" y2="270" stroke="%23a88c6e" stroke-width="9"/>
      <line x1="225" y1="350" x2="485" y2="350" stroke="%23a88c6e" stroke-width="9"/>
      <!-- Paint Can & Brush -->
      <rect x="540" y="280" width="120" height="140" rx="14" fill="%231bb76e"/>
      <rect x="530" y="255" width="140" height="26" rx="8" fill="%23159b5c"/>
      <path d="M600,255 C600,210 680,210 680,255" fill="none" stroke="%23cbd5e1" stroke-width="7"/>
      <rect x="36" y="36" width="160" height="34" rx="17" fill="%23ffffff" opacity="0.95"/>
      <text x="116" y="58" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="%231bb76e" text-anchor="middle">Отделка под ключ</text>
    </svg>`;
  }

  if (category === "Авто") {
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
      <defs>
        <linearGradient id="bgA" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23ecf3f9"/><stop offset="100%" stop-color="%23d6e5f1"/></linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(%23bgA)"/>
      <!-- Modern Car Silhouette & Diagnostic Pulse -->
      <path d="M110,350 C150,240 260,190 400,190 C540,190 650,240 690,350 Z" fill="%23334155"/>
      <circle cx="230" cy="360" r="54" fill="%231e293b"/>
      <circle cx="230" cy="360" r="30" fill="%2364748b"/>
      <circle cx="570" cy="360" r="54" fill="%231e293b"/>
      <circle cx="570" cy="360" r="30" fill="%2364748b"/>
      <path d="M670,320 L780,300 L780,370 Z" fill="%231bb76e" opacity="0.35"/>
      <path d="M90,150 L230,150 L270,90 L310,210 L350,150 L710,150" fill="none" stroke="%231bb76e" stroke-width="6" stroke-linecap="round"/>
      <rect x="36" y="36" width="170" height="34" rx="17" fill="%23ffffff" opacity="0.95"/>
      <text x="121" y="58" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="%231bb76e" text-anchor="middle">Автодиагностика 24/7</text>
    </svg>`;
  }

  if (category === "Грузоперевозки") {
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
      <defs>
        <linearGradient id="bgG" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23f8f3ec"/><stop offset="100%" stop-color="%23ecded0"/></linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(%23bgG)"/>
      <!-- Cargo Truck -->
      <rect x="170" y="150" width="360" height="200" rx="10" fill="%231bb76e"/>
      <path d="M530,220 L620,220 L660,290 L660,350 L530,350 Z" fill="%23159b5c"/>
      <circle cx="280" cy="365" r="46" fill="%231e293b"/>
      <circle cx="580" cy="365" r="46" fill="%231e293b"/>
      <!-- Craft Boxes Stack -->
      <rect x="60" y="270" width="95" height="85" rx="5" fill="%23c9a377"/>
      <path d="M60,310 H155" stroke="%23a0784d" stroke-width="3"/>
      <rect x="85" y="195" width="85" height="75" rx="5" fill="%23d9b68c"/>
      <path d="M85,232 H170" stroke="%23a0784d" stroke-width="3"/>
      <rect x="36" y="36" width="160" height="34" rx="17" fill="%23ffffff" opacity="0.95"/>
      <text x="116" y="58" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="%231bb76e" text-anchor="middle">Переезды и Газель</text>
    </svg>`;
  }

  if (category === "Обучение") {
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
      <defs>
        <linearGradient id="bgE" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23f4eef7"/><stop offset="100%" stop-color="%23dfd0e5"/></linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(%23bgE)"/>
      <rect x="100" y="370" width="600" height="20" rx="4" fill="%238c6d48"/>
      <!-- Books Stack -->
      <rect x="210" y="305" width="170" height="38" rx="6" fill="%231bb76e"/>
      <rect x="230" y="262" width="150" height="38" rx="6" fill="%238b5cf6"/>
      <rect x="220" y="220" width="160" height="38" rx="6" fill="%233b82f6"/>
      <!-- Cap -->
      <polygon points="460,200 560,170 660,200 560,230" fill="%232e1f3d"/>
      <rect x="520" y="215" width="80" height="42" fill="%232e1f3d" rx="6"/>
      <line x1="630" y1="205" x2="630" y2="265" stroke="%23d4a373" stroke-width="4"/>
      <circle cx="630" cy="268" r="6" fill="%23d4a373"/>
      <rect x="36" y="36" width="150" height="34" rx="17" fill="%23ffffff" opacity="0.95"/>
      <text x="111" y="58" font-family="-apple-system, sans-serif" font-size="13" font-weight="700" fill="%231bb76e" text-anchor="middle">Подготовка к ЕГЭ</text>
    </svg>`;
  }

  // Default clean graphic
  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500"><rect width="100%" height="100%" fill="%23f0f2f5"/><text x="50%" y="50%" font-family="sans-serif" font-size="28" font-weight="700" fill="%231bb76e" text-anchor="middle">${category}</text></svg>`;
}

// Rating Badge Generator with color indicator:
// > 4.5: Green | 3.7 - 4.5: Yellow | < 3.7: Red
function getRatingBadgeHtml(rating, reviewsCount) {
  let colorClass = "green";
  if (rating < 3.7) {
    colorClass = "red";
  } else if (rating < 4.5) {
    colorClass = "yellow";
  }
  return `
    <span class="rating-badge rating-badge--${colorClass}" title="Рейтинг: ${rating.toFixed(1)}">
      ★ ${rating.toFixed(1)}${reviewsCount ? ` <span class="rating-badge__count">(${reviewsCount})</span>` : ''}
    </span>
  `;
}

// Initial Mock Database (Local 100% reliable files in images/ads/)
let adsDatabase = [
  {
    id: 1,
    title: "Комплексный ремонт квартир и апартаментов под ключ с гарантией 3 года",
    category: "Ремонт",
    price: "7 500 ₽",
    priceUnit: "за м²",
    desc: "Капитальный ремонт квартир в новостройках и вторичке по дизайн-проекту. Официальный договор, поэтапная оплата по факту выполнения, закупка материалов по оптовым ценам со скидкой до 25%. Опыт более 10 лет.",
    images: [
      "images/ads/renovation.jpg"
    ],
    hasVideo: true,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    sellerName: "СК «МосСтройГрупп»",
    sellerRole: "Рекламодатель",
    rating: 4.9,
    reviewsCount: 42,
    isAdvertiser: true,
    isVip: true,
    isPinned: true,
    city: "Москва, ЦАО и ЗАО",
    phoneMasked: "+7 (926) •••-••-42",
    phoneFull: "+7 (926) 340-88-42",
    date: "Сегодня, 14:20"
  },
  {
    id: 2,
    title: "Выездная диагностика и ремонт автоэлектрики любой сложности 24/7",
    category: "Авто",
    price: "2 500 ₽",
    priceUnit: "выезд",
    desc: "Поиск скрытых утечек тока, отключение и настройка сигнализаций, адаптация блоков, чтение ошибок дилерскими сканерами. Выезжаю в любой округ Москвы и ближайшее Подмосковье в течение 40 минут.",
    images: [
      "images/ads/auto.jpg"
    ],
    hasVideo: false,
    sellerName: "Андрей Николаевич",
    sellerRole: "Частный мастер",
    rating: 4.8,
    reviewsCount: 31,
    isAdvertiser: false,
    isVip: false,
    city: "Москва, САО и Химки",
    phoneMasked: "+7 (916) •••-••-19",
    phoneFull: "+7 (916) 671-12-19",
    date: "Сегодня, 12:05"
  },
  {
    id: 3,
    title: "Грузоперевозки на удлиненной Газели Next (4.2м) + вежливые грузчики",
    category: "Грузоперевозки",
    price: "1 200 ₽",
    priceUnit: "за час",
    desc: "Квартирные, дачные и офисные переезды под ключ. Бережная упаковка мебели, стрейч-пленка, такелажные ремни. Пропуск в центр Москвы (ТТК, СК). Работаем круглосуточно без выходных.",
    images: [
      "images/ads/cargo.jpg"
    ],
    hasVideo: false,
    sellerName: "ТК «Столичный Переезд»",
    sellerRole: "Рекламодатель",
    rating: 4.1, /* Yellow rating example (3.7 - 4.5) */
    reviewsCount: 19,
    isAdvertiser: true,
    isVip: true,
    city: "Москва и МО (Балашиха, Мытищи)",
    phoneMasked: "+7 (495) •••-••-90",
    phoneFull: "+7 (495) 980-33-90",
    date: "Вчера, 18:40"
  },
  {
    id: 4,
    title: "Подготовка к ЕГЭ и ОГЭ по профильной математике (МГУ, ВШЭ)",
    category: "Обучение",
    price: "2 000 ₽",
    priceUnit: "за 60 мин",
    desc: "Преподаватель высшей категории, эксперт ЕГЭ. Средний балл выпускников 2025 года — 86 баллов. Индивидуальный разбор параметров, стереометрии и планиметрии. Первое вводное занятие бесплатное.",
    images: [
      "images/ads/tutor.jpg"
    ],
    hasVideo: false,
    sellerName: "Елена Васильевна",
    sellerRole: "Частный репетитор",
    rating: 5.0,
    reviewsCount: 56,
    isAdvertiser: false,
    isVip: false,
    city: "Москва (ЮЗАО) и онлайн",
    phoneMasked: "+7 (903) •••-••-77",
    phoneFull: "+7 (903) 942-55-77",
    date: "20 октября"
  },
  {
    id: 5,
    title: "Монтаж теневых и бесщелевых натяжных потолков EuroKraab",
    category: "Ремонт",
    price: "890 ₽",
    priceUnit: "за м²",
    desc: "Премиальные экологичные полотна без швов и запаха. Чистый монтаж с профессиональным пылесосом. Световые линии, трековые светильники, карнизы скрытого монтажа. Замер по Москве бесплатный.",
    images: [
      "images/ads/ceiling.jpg"
    ],
    hasVideo: true,
    videoUrl: "https://rutube.ru/video/demo",
    sellerName: "Компания «ПотолокЭлит»",
    sellerRole: "Рекламодатель",
    rating: 3.4, /* Red rating example (< 3.7) */
    reviewsCount: 11,
    isAdvertiser: true,
    isVip: false,
    city: "Москва, Красногорск, Одинцово",
    phoneMasked: "+7 (925) •••-••-03",
    phoneFull: "+7 (925) 215-66-03",
    date: "19 октября"
  },
  {
    id: 6,
    title: "Срочный вызов мастера-сантехника: прочистка засоров, замена труб Rehau",
    category: "Ремонт",
    price: "1 500 ₽",
    priceUnit: "за выезд",
    desc: "Устранение аварийных протечек труб, монтаж инсталляций, смесителей, ванн, бойлеров. Немецкий пресс-инструмент. Опрятный мастер, бахилы, уборка за собой. Гарантия по акту 2 года.",
    images: [
      "images/ads/plumber.jpg"
    ],
    hasVideo: false,
    sellerName: "Мастер Сергей",
    sellerRole: "Частный мастер",
    rating: 4.7,
    reviewsCount: 23,
    isAdvertiser: false,
    isVip: false,
    city: "Москва, Подольск, Щербинка",
    phoneMasked: "+7 (915) •••-••-85",
    phoneFull: "+7 (915) 441-20-85",
    date: "18 октября"
  }
];

// State
let userRole = "client";
let currentCategory = "all";
let currentTab = "all";
let currentCity = "Москва";
let userBalance = 1450;
let uploadedPhotos = [];

// DOM Loaded
document.addEventListener("DOMContentLoaded", () => {
  renderListings(adsDatabase);
  initEventListeners();
});

// ==========================================================================
// RENDER LISTINGS (BORDERLESS CARDS + DIRECT RICH GRAPHICS + PLAY BUTTON)
// ==========================================================================
function renderListings(ads) {
  const container = document.getElementById("listingsContainer");
  const countBadge = document.getElementById("listingsCountBadge");
  
  if (!container) return;
  countBadge.textContent = `${ads.length} предложений`;

  if (ads.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 70px 0; text-align: center; color: var(--text-muted);">
        <img src="images/branding/mascot_empty_state.png" alt="Объявлений не найдено" style="width: 170px; height: 170px; object-fit: contain; margin-bottom: 16px;">
        <div style="font-size: 19px; font-weight: 700; color: var(--text-main);">Объявлений не найдено</div>
        <div style="font-size: 14.5px; margin-top: 8px;">Попробуйте выбрать другой город или сбросить поисковый фильтр.</div>
        <button class="btn btn--outline" style="margin-top: 24px;" onclick="resetFilters()">Сбросить фильтры</button>
      </div>
    `;
    return;
  }

  container.innerHTML = ads.map(ad => `
    <div class="ad-card ${ad.isVip ? 'ad-card--vip' : ''}" onclick="openAdDetail(${ad.id})">
      <div class="ad-card__media">
        <img class="ad-card__img" src="${ad.images[0]}" alt="${ad.title}">
        
        ${ad.hasVideo ? `
          <div class="ad-card__play-btn" title="Смотреть видеообзор">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </div>
        ` : ''}

        <div class="ad-card__badges">
          ${ad.isVip ? `<span class="badge badge--vip">VIP</span>` : ''}
          ${ad.isAdvertiser ? `<span class="badge badge--verified">Компания</span>` : ''}
          ${ad.hasVideo ? `<span class="badge badge--video">▶ Видео</span>` : ''}
        </div>
      </div>

      <div class="ad-card__content">
        <div class="ad-card__price-row">
          <div class="ad-card__price">${ad.price} <span class="ad-card__unit">${ad.priceUnit || ''}</span></div>
        </div>

        <h3 class="ad-card__title" title="${ad.title}">${ad.title}</h3>
        <p class="ad-card__desc">${ad.desc}</p>

        <div class="ad-card__seller">
          <div class="ad-card__seller-avatar">
            ${ad.sellerName.charAt(0)}
          </div>
          <div class="ad-card__seller-info">
            <div class="ad-card__seller-name">${ad.sellerName}</div>
            <div class="ad-card__seller-role" style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
              <span>${ad.sellerRole}</span>
              ${getRatingBadgeHtml(ad.rating, ad.reviewsCount)}
            </div>
          </div>
        </div>

        <div class="ad-card__footer">
          <span class="ad-card__geo">${ad.city}</span>
          <button class="btn-phone" onclick="revealPhone(event, ${ad.id}, this)">
            ${ad.phoneMasked}
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

// Phone reveal interaction
function revealPhone(event, adId, btnElement) {
  event.stopPropagation();
  const ad = adsDatabase.find(item => item.id === adId);
  if (ad) {
    btnElement.textContent = ad.phoneFull;
    btnElement.style.backgroundColor = "var(--primary)";
    btnElement.style.color = "#fff";
    showToast(`Номер скопирован: ${ad.phoneFull}`);
  }
}

// ==========================================================================
// REGIONS / CITY SELECTION
// ==========================================================================
function selectRegion(cityName) {
  currentCity = cityName;
  document.getElementById("currentCity").textContent = cityName;
  document.getElementById("heroCitySpan").textContent = cityName === "Москва" ? "в Москве и области" : `в г. ${cityName}`;
  
  document.querySelectorAll(".region-chip").forEach(chip => {
    if (chip.textContent.trim() === cityName) chip.classList.add("active");
    else chip.classList.remove("active");
  });

  document.querySelectorAll(".region-item").forEach(item => {
    if (item.querySelector("span")?.textContent.includes(cityName)) item.classList.add("active");
    else item.classList.remove("active");
  });

  closeModal("modalRegion");
  showToast(`Регион изменен на: ${cityName}`);
  applyAllFilters();
}

function filterRegionsList(query) {
  const q = query.toLowerCase().trim();
  const items = document.querySelectorAll("#regionItemsList .region-item");
  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(q) ? "flex" : "none";
  });
}

// ==========================================================================
// FILTERS & SEARCH
// ==========================================================================
function filterByCategory(category) {
  currentCategory = category;
  document.getElementById("feedTitle").textContent = category === 'all' 
    ? "Актуальные объявления" 
    : `Категория: ${category}`;
  applyAllFilters();
}

function applySearchTag(tag) {
  const input = document.getElementById("searchInput");
  input.value = tag;
  applyAllFilters();
}

function switchFeedTab(tabType, element) {
  currentTab = tabType;
  document.querySelectorAll(".feed-bento-tab, .feed-tab").forEach(tab => tab.classList.remove("active"));
  element.classList.add("active");
  applyAllFilters();
}

function applyAllFilters() {
  const searchVal = document.getElementById("searchInput").value.trim().toLowerCase();

  let filtered = adsDatabase.filter(ad => {
    const matchCity = currentCity === "Москва" || ad.city.toLowerCase().includes(currentCity.toLowerCase());
    const matchCategory = currentCategory === 'all' || 
      ad.category.toLowerCase().includes(currentCategory.toLowerCase()) || 
      ad.title.toLowerCase().includes(currentCategory.toLowerCase());
    
    const matchSearch = !searchVal || 
      ad.title.toLowerCase().includes(searchVal) || 
      ad.desc.toLowerCase().includes(searchVal) ||
      ad.sellerName.toLowerCase().includes(searchVal);

    let matchTab = true;
    if (currentTab === 'vip') matchTab = ad.isVip;
    if (currentTab === 'video') matchTab = ad.hasVideo;
    if (currentTab === 'advertiser') matchTab = ad.isAdvertiser;
    if (currentTab === 'private') matchTab = !ad.isAdvertiser;

    return matchCity && matchCategory && matchSearch && matchTab;
  });

  renderListings(filtered);
}

function resetFilters() {
  document.getElementById("searchInput").value = "";
  currentCategory = "all";
  currentTab = "all";
  currentCity = "Москва";
  document.getElementById("currentCity").textContent = "Москва";
  document.getElementById("heroCitySpan").textContent = "в Москве и области";
  document.querySelectorAll(".feed-tab").forEach((tab, index) => {
    if (index === 0) tab.classList.add("active");
    else tab.classList.remove("active");
  });
  document.getElementById("feedTitle").textContent = "Актуальные объявления";
  renderListings(adsDatabase);
}

// ==========================================================================
// MODALS LOGIC
// ==========================================================================
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add("active");
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove("active");
}

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-overlay")) {
    e.target.classList.remove("active");
  }
});

// ==========================================================================
// DETAIL VIEW (fullstory.tpl mock)
// ==========================================================================
let currentDetailAd = null;

function openAdDetail(adId) {
  const ad = adsDatabase.find(item => item.id === adId);
  if (!ad) return;
  currentDetailAd = ad;

  const titleEl = document.getElementById("detailModalTitle");
  const bodyEl = document.getElementById("detailModalBody");
  const authorBlock = document.getElementById("detailAuthorBlock");
  const callBtn = document.getElementById("detailCallBtn");

  titleEl.textContent = ad.title;
  callBtn.textContent = "Показать телефон";

  bodyEl.innerHTML = `
    <div style="margin-bottom: 20px;">
      <div class="detail-media-wrap">
        <img src="${ad.images[0]}" style="width: 100%; height: 100%; object-fit: cover;" alt="">
        ${ad.isVip ? '<span class="badge badge--vip" style="position: absolute; top: 12px; left: 12px;">VIP ОБЪЯВЛЕНИЕ</span>' : ''}
      </div>
    </div>

    ${ad.hasVideo ? `
      <div style="background: var(--primary-soft); border-radius: var(--radius-md); padding: 16px; margin-bottom: 20px; display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <div style="width: 40px; height: 40px; border-radius: 50%; background: var(--primary); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 16px; flex-shrink: 0;">▶</div>
          <div>
            <div style="font-size: 14.5px; font-weight: 700; color: var(--primary-dark);">К объявлению прикреплен видеоролик (DLE xfields)</div>
            <div style="font-size: 12.5px; color: var(--text-secondary);">${ad.videoUrl || 'Видео загружено автором'}</div>
          </div>
        </div>
        <button class="btn btn--primary" style="font-size: 13px; padding: 7px 16px;" onclick="window.open('https://youtube.com', '_blank')">Смотреть видео</button>
      </div>
    ` : ''}

    <div style="font-size: 26px; font-weight: 700; color: var(--text-main); margin-bottom: 8px;">
      ${ad.price} <span style="font-size: 15px; font-weight: normal; color: var(--text-muted);">${ad.priceUnit || ''}</span>
    </div>

    <div style="font-size: 13.5px; color: var(--text-muted); margin-bottom: 16px;">
      Категория: <strong>${ad.category}</strong> • ${ad.city} • Опубликовано: ${ad.date}
    </div>

    <div style="font-size: 14.5px; line-height: 1.6; color: var(--text-secondary); border-top: 1px solid var(--border-light); padding-top: 16px;">
      ${ad.desc}
    </div>
  `;

  authorBlock.innerHTML = `
    <div class="detail-author">
      <div class="detail-author__avatar">
        ${ad.sellerName.charAt(0)}
      </div>
      <div class="detail-author__info">
        <div class="detail-author__name">
          ${ad.sellerName} <span class="detail-author__role">(${ad.sellerRole})</span>
        </div>
        <div class="detail-author__meta">
          ${getRatingBadgeHtml(ad.rating, ad.reviewsCount)}
          <span class="detail-author__tenure">• На платформе с 2024 года</span>
        </div>
      </div>
    </div>
  `;

  openModal("modalAdDetail");
}

function revealDetailPhone() {
  if (!currentDetailAd) return;
  const callBtn = document.getElementById("detailCallBtn");
  callBtn.textContent = currentDetailAd.phoneFull;
  showToast(`Номер телефона: ${currentDetailAd.phoneFull}`);
}

function openPromoFromDetail() {
  closeModal("modalAdDetail");
  openCabinetModal();
  showToast("Выберите услугу продвижения в личном кабинете");
}

// ==========================================================================
// ADD NEWS & DLE BILLING (addnews.tpl mock)
// ==========================================================================
function simulatePhotoUpload() {
  const dummyPhotos = [
    "images/ads/renovation.jpg",
    "images/ads/ceiling.jpg",
    "images/ads/plumber.jpg"
  ];

  if (uploadedPhotos.length < 3) {
    uploadedPhotos.push(dummyPhotos[uploadedPhotos.length]);
    updatePhotoPreviews();
    showToast(`Загружено фото ${uploadedPhotos.length}/10 (DLE xfields)`);
  } else {
    showToast("В прототипе лимит 3 фото");
  }
}

function updatePhotoPreviews() {
  const container = document.getElementById("photoPreviews");
  container.innerHTML = uploadedPhotos.map((src, i) => `
    <div style="position: relative; display: inline-block;">
      <img src="${src}" class="upload-thumb" alt="">
      <span onclick="removeUploadedPhoto(${i})" style="position: absolute; top: -6px; right: -6px; background: #fff; border-radius: 50%; width: 20px; height: 20px; display: flex; align-items: center; justify-content: center; font-size: 11px; cursor: pointer; box-shadow: 0 1px 4px rgba(0,0,0,0.2);">✕</span>
    </div>
  `).join("");
}

function removeUploadedPhoto(index) {
  uploadedPhotos.splice(index, 1);
  updatePhotoPreviews();
}

function calcBillingTotal() {
  let total = 0;
  const cat = document.getElementById("addCategory").value;
  if (cat === "Ремонт") total += 150;
  if (cat === "Недвижимость") total += 200;

  if (document.getElementById("billVip").checked) total += 290;
  if (document.getElementById("billPin").checked) total += 490;
  if (document.getElementById("billUp").checked) total += 99;

  document.getElementById("billTotalSum").textContent = `${total} ₽`;
  return total;
}

function submitNewAd() {
  const title = document.getElementById("addTitle").value.trim();
  const price = document.getElementById("addPrice").value.trim();
  const desc = document.getElementById("addDesc").value.trim();
  const category = document.getElementById("addCategory").value;
  const city = document.getElementById("addCity").value.trim();
  const phone = document.getElementById("addPhone").value.trim();
  const video = document.getElementById("addVideo").value.trim();
  const isVip = document.getElementById("billVip").checked;
  const totalCost = calcBillingTotal();

  if (!title || !price || !desc) {
    alert("Пожалуйста, заполните заголовок, цену и описание.");
    return;
  }

  if (totalCost > userBalance) {
    showToast(`Недостаточно средств (${userBalance} ₽). Пополните счет через dle-billing!`);
    return;
  }

  userBalance -= totalCost;
  updateUserBalanceDisplay();

  const newAd = {
    id: Date.now(),
    title: title,
    category: category,
    price: price.includes("₽") ? price : `${price} ₽`,
    priceUnit: "за услугу",
    desc: desc,
    images: uploadedPhotos.length > 0 ? [...uploadedPhotos] : [
      "images/ads/renovation.jpg"
    ],
    hasVideo: !!video,
    videoUrl: video,
    sellerName: "Мой профиль",
    sellerRole: userRole === 'seller' ? "Рекламодатель" : "Частный мастер",
    isAdvertiser: userRole === 'seller',
    isVip: isVip,
    city: city || "Москва",
    phoneMasked: "+7 (926) •••-••-18",
    phoneFull: phone || "+7 (926) 450-22-18",
    date: "Только что"
  };

  adsDatabase.unshift(newAd);
  renderListings(adsDatabase);

  closeModal("modalAddNews");
  showToast(`✓ Объявление опубликовано! Списано: ${totalCost} ₽`);

  document.getElementById("addTitle").value = "";
  document.getElementById("addPrice").value = "";
  document.getElementById("addDesc").value = "";
  document.getElementById("billVip").checked = false;
  document.getElementById("billPin").checked = false;
  document.getElementById("billUp").checked = false;
  uploadedPhotos = [];
  updatePhotoPreviews();
  calcBillingTotal();
}

// ==========================================================================
// SPLIT REGISTRATION
// ==========================================================================
function selectRole(role) {
  userRole = role;
  const clientCard = document.getElementById("roleClientCard");
  const sellerCard = document.getElementById("roleSellerCard");
  const companyGroup = document.getElementById("companyFieldGroup");
  const targetGroup = document.getElementById("targetGroupName");

  if (role === 'client') {
    clientCard.classList.add("active");
    sellerCard.classList.remove("active");
    companyGroup.style.display = "none";
    targetGroup.textContent = "«Клиенты» (ID 4 — без права подачи объявлений)";
  } else {
    sellerCard.classList.add("active");
    clientCard.classList.remove("active");
    companyGroup.style.display = "block";
    targetGroup.textContent = "«Рекламодатели» (ID 6 — с доступом к публикации и биллингу)";
  }
}

function submitRegistration() {
  const login = document.getElementById("regLogin").value.trim() || "alex_moscow";
  const roleName = userRole === 'seller' ? "Рекламодатель" : "Клиент";

  showToast(`Регистрация в DLE успешна! Роль: ${roleName}`);
  closeModal("modalReg");

  document.getElementById("userStatusText").textContent = `${login} (${roleName})`;
}

// ==========================================================================
// CABINET & DLE-BILLING
// ==========================================================================
function openCabinetModal() {
  updateUserBalanceDisplay();
  renderUserAdsInCabinet();
  openModal("modalCabinet");
}

function updateUserBalanceDisplay() {
  const cabVal = document.getElementById("cabBalanceValue");
  if (cabVal) cabVal.textContent = `${userBalance.toLocaleString("ru-RU")} ₽`;
}

function renderUserAdsInCabinet() {
  const list = document.getElementById("userAdsList");
  const myAds = adsDatabase.slice(0, 2);

  list.innerHTML = myAds.map(ad => `
    <div style="display: flex; align-items: center; justify-content: space-between; padding: 16px; background: #fff; border-radius: var(--radius-md); box-shadow: var(--shadow-sm);">
      <div>
        <div style="font-size: 14px; font-weight: 600; color: var(--text-main);">${ad.title.slice(0, 48)}...</div>
        <div style="font-size: 12.5px; color: var(--text-muted); margin-top: 4px;">
          Статус: ${ad.isVip ? '<span style="color: var(--vip-text); font-weight: 600;">VIP</span>' : 'Обычное'} • ${ad.date}
        </div>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn btn--outline" style="font-size: 12.5px; padding: 7px 14px;" onclick="bumpAdInCabinet(${ad.id})">
          ⬆ Поднять (99 ₽)
        </button>
      </div>
    </div>
  `).join("");
}

function bumpAdInCabinet(adId) {
  if (userBalance < 99) {
    showToast("Недостаточно средств для поднятия!");
    return;
  }
  userBalance -= 99;
  updateUserBalanceDisplay();

  const ad = adsDatabase.find(a => a.id === adId);
  if (ad) {
    ad.date = "Только что (поднято)";
    adsDatabase = [ad, ...adsDatabase.filter(a => a.id !== adId)];
    renderListings(adsDatabase);
    renderUserAdsInCabinet();
    showToast("✓ Объявление поднято на 1-е место ленты DLE!");
  }
}

function simulateTopUp() {
  userBalance += 1000;
  updateUserBalanceDisplay();
  showToast("✓ Баланс dle-billing пополнен на 1 000 ₽ через СБП!");
}

// ==========================================================================
// TOAST NOTIFICATIONS
// ==========================================================================
function showToast(message) {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1bb76e" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 10);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ==========================================================================
// EVENT LISTENERS
// ==========================================================================
// Navigation to Catalog page
function navigateToCatalogQuery(q) {
  window.location.href = `catalog.html?q=${encodeURIComponent(q)}`;
}

function navigateToCatalogCategory(cat) {
  window.location.href = `catalog.html?category=${encodeURIComponent(cat)}`;
}

// Mobile drawer toggle
function toggleMobileMenu(isOpen) {
  const drawer = document.getElementById("mobileDrawer");
  if (!drawer) return;
  if (typeof isOpen === "boolean") {
    drawer.classList.toggle("active", isOpen);
  } else {
    drawer.classList.toggle("active");
  }
}

// Dynamic Header Border on Scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (header) {
    header.classList.toggle("header--scrolled", window.scrollY > 8);
  }
});

function initEventListeners() {
  document.getElementById("searchSubmitBtn")?.addEventListener("click", () => {
    const val = document.getElementById("searchInput").value.trim();
    if (val) navigateToCatalogQuery(val);
    else window.location.href = "catalog.html";
  });

  const searchInput = document.getElementById("searchInput");
  const searchTags = document.getElementById("searchTagsContainer");

  if (searchInput) {
    searchInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        const val = searchInput.value.trim();
        if (val) navigateToCatalogQuery(val);
        else window.location.href = "catalog.html";
      }
    });

    // Mobile: Show popular queries on input focus or click
    const showMobileTags = () => {
      if (searchTags) {
        searchTags.classList.add("search-tags--visible-mobile");
      }
    };
    searchInput.addEventListener("focus", showMobileTags);
    searchInput.addEventListener("click", showMobileTags);
  }

  // Close mobile search tags when tapping outside
  document.addEventListener("click", (e) => {
    if (searchInput && searchTags) {
      if (!searchInput.contains(e.target) && !searchTags.contains(e.target)) {
        searchTags.classList.remove("search-tags--visible-mobile");
      }
    }
  });

  document.getElementById("openAddNewsBtn")?.addEventListener("click", () => openModal("modalAddNews"));
  document.getElementById("openRegBtn")?.addEventListener("click", () => openModal("modalReg"));
  document.getElementById("openCabinetBtn")?.addEventListener("click", openCabinetModal);
  document.getElementById("addCategory")?.addEventListener("change", calcBillingTotal);
}
