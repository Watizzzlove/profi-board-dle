/**
 * PROFIUM CATALOG & ADVANCED SEARCH ENGINE (DLE 19/20)
 * Handles multi-criteria filtering, search queries, favorites, sorting and DLE modals
 */

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

// Shared Database with Real Local Photographs
let adsDatabase = [
  {
    id: 1,
    title: "Комплексный ремонт квартир и апартаментов под ключ с гарантией 3 года",
    category: "Ремонт",
    price: "7 500 ₽",
    priceNum: 7500,
    priceUnit: "за м²",
    desc: "Капитальный ремонт квартир в новостройках и вторичке по дизайн-проекту. Официальный договор, поэтапная оплата по факту выполнения, закупка материалов по оптовым ценам со скидкой до 25%. Опыт более 10 лет.",
    images: ["images/ads/renovation.jpg"],
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
    priceNum: 2500,
    priceUnit: "выезд",
    desc: "Поиск скрытых утечек тока, отключение и настройка сигнализаций, адаптация блоков, чтение ошибок дилерскими сканерами. Выезжаю в любой округ Москвы и ближайшее Подмосковье в течение 40 минут.",
    images: ["images/ads/auto.jpg"],
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
    priceNum: 1200,
    priceUnit: "за час",
    desc: "Квартирные, дачные и офисные переезды под ключ. Бережная упаковка мебели, стрейч-пленка, такелажные ремни. Пропуск в центр Москвы (ТТК, СК). Работаем круглосуточно без выходных.",
    images: ["images/ads/cargo.jpg"],
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
    priceNum: 2000,
    priceUnit: "за 60 мин",
    desc: "Преподаватель высшей категории, эксперт ЕГЭ. Средний балл выпускников 2025 года — 86 баллов. Индивидуальный разбор параметров, стереометрии и планиметрии. Первое вводное занятие бесплатное.",
    images: ["images/ads/tutor.jpg"],
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
    priceNum: 890,
    priceUnit: "за м²",
    desc: "Премиальные экологичные полотна без швов и запаха. Чистый монтаж с профессиональным пылесосом. Световые линии, трековые светильники, карнизы скрытого монтажа. Замер по Москве бесплатный.",
    images: ["images/ads/ceiling.jpg"],
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
    priceNum: 1500,
    priceUnit: "за выезд",
    desc: "Устранение аварийных протечек труб, монтаж инсталляций, смесителей, ванн, бойлеров. Немецкий пресс-инструмент. Опрятный мастер, бахилы, уборка за собой. Гарантия по акту 2 года.",
    images: ["images/ads/plumber.jpg"],
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

let currentSortMode = "default";

function toggleSortDropdown(e) {
  e.stopPropagation();
  const select = document.getElementById("catalogSortSelect");
  select.classList.toggle("open");
}

function selectSortOption(value, label, el) {
  currentSortMode = value;
  document.getElementById("sortCurrentLabel").textContent = label;
  document.querySelectorAll(".custom-select__option").forEach(opt => opt.classList.remove("active"));
  el.classList.add("active");
  document.getElementById("catalogSortSelect").classList.remove("open");
  applyCatalogFilters();
}

window.addEventListener("click", () => {
  document.getElementById("catalogSortSelect")?.classList.remove("open");
});
let catalogCategory = "all";
let catalogQuery = "";
let currentCity = "Москва";
let userBalance = 1450;
let userRole = "client";
let uploadedPhotos = [];
let favoritesSet = new Set(JSON.parse(localStorage.getItem("profium_favs") || "[]"));
let showOnlyFavorites = false;

// Helper: Load persistent custom ads from localStorage
function loadCustomAds() {
  try {
    const saved = localStorage.getItem("profium_custom_ads");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        const existingIds = new Set(adsDatabase.map(a => a.id));
        const newOnes = parsed.filter(a => !existingIds.has(a.id));
        adsDatabase = [...newOnes, ...adsDatabase];
      }
    }
  } catch (e) {
    console.error("Error loading custom ads:", e);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadCustomAds();
  initFromUrlParams();
  updateFavoritesHeader();
  initCatalogEventListeners();
});

// Read URL parameters on load
function initFromUrlParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const qParam = urlParams.get("q");
  const catParam = urlParams.get("category");

  if (qParam) {
    catalogQuery = qParam.trim();
    document.getElementById("catalogSearchInput").value = catalogQuery;
  }

  if (catParam) {
    catalogCategory = catParam.trim();
    highlightSidebarCategory(catalogCategory);
  }

  applyCatalogFilters();
}

function highlightSidebarCategory(catName) {
  document.querySelectorAll(".cat-item").forEach(item => {
    const text = item.querySelector("span")?.textContent.trim();
    if (text.toLowerCase().includes(catName.toLowerCase()) || (catName === 'all' && text.includes("Все"))) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

function setCatalogCategory(catName, element) {
  catalogCategory = catName;
  document.querySelectorAll(".cat-item").forEach(el => el.classList.remove("active"));
  element.classList.add("active");
  applyCatalogFilters();
}

function executeCatalogSearch() {
  catalogQuery = document.getElementById("catalogSearchInput").value.trim();
  applyCatalogFilters();
}

// Main Filtering & Sorting Logic
function applyCatalogFilters() {
  const minP = parseFloat(document.getElementById("priceMin")?.value) || 0;
  const maxP = parseFloat(document.getElementById("priceMax")?.value) || Infinity;
  const onlyVip = document.getElementById("filterVip")?.checked || false;
  const onlyVideo = document.getElementById("filterVideo")?.checked || false;
  const onlyCompany = document.getElementById("filterCompany")?.checked || false;
  const onlyPrivate = document.getElementById("filterPrivate")?.checked || false;
  const sortMode = document.getElementById("sortSelect")?.value || "default";

  const qLower = catalogQuery.toLowerCase();

  let filtered = adsDatabase.filter(ad => {
    // Favorites only filter
    if (showOnlyFavorites && !favoritesSet.has(ad.id)) return false;

    // Category filter
    const matchCat = catalogCategory === "all" || 
      ad.category.toLowerCase().includes(catalogCategory.toLowerCase()) || 
      ad.title.toLowerCase().includes(catalogCategory.toLowerCase());

    // Search query filter (matches title, description, category, seller)
    const matchSearch = !qLower || 
      ad.title.toLowerCase().includes(qLower) || 
      ad.desc.toLowerCase().includes(qLower) || 
      ad.category.toLowerCase().includes(qLower) ||
      ad.sellerName.toLowerCase().includes(qLower);

    // Price filter
    const matchPrice = ad.priceNum >= minP && ad.priceNum <= maxP;

    // Checkboxes
    if (onlyVip && !ad.isVip) return false;
    if (onlyVideo && !ad.hasVideo) return false;
    if (onlyCompany && !ad.isAdvertiser) return false;
    if (onlyPrivate && ad.isAdvertiser) return false;

    return matchCat && matchSearch && matchPrice;
  });

  // Sorting
  if (currentSortMode === "cheap") {
    filtered.sort((a, b) => a.priceNum - b.priceNum);
  } else if (currentSortMode === "expensive") {
    filtered.sort((a, b) => b.priceNum - a.priceNum);
  } else if (currentSortMode === "vip") {
    filtered.sort((a, b) => (b.isVip ? 1 : 0) - (a.isVip ? 1 : 0));
  }

  // Update Breadcrumbs & Titles
  updateCatalogTitles(filtered.length);
  syncMobileFiltersUI();

  // Render cards
  renderCatalogListings(filtered);
}

function updateCatalogTitles(count) {
  const heading = document.getElementById("catalogResultHeading");
  const subtitle = document.getElementById("catalogMetaSubtitle");
  const breadcrumb = document.getElementById("breadcrumbCurrent");

  if (showOnlyFavorites) {
    heading.textContent = "Избранные объявления";
    subtitle.textContent = `В списке ${count} сохраненных объявлений`;
    breadcrumb.textContent = "Избранное";
    return;
  }

  if (catalogQuery) {
    heading.textContent = `Результаты по запросу «${catalogQuery}»`;
    subtitle.textContent = `Найдено ${count} предложений в регионе ${currentCity}`;
    breadcrumb.textContent = `Поиск: ${catalogQuery}`;
  } else if (catalogCategory !== "all") {
    heading.textContent = `Категория: ${catalogCategory}`;
    subtitle.textContent = `Показано ${count} предложений специалистов`;
    breadcrumb.textContent = catalogCategory;
  } else {
    heading.textContent = "Все предложения каталога";
    subtitle.textContent = `Показано ${count} объявлений в регионе ${currentCity} и область`;
    breadcrumb.textContent = "Все категории";
  }
}

// Render Listings with Horizontal Clean Cards (One beneath another, 4px gap)
function renderCatalogListings(ads) {
  const container = document.getElementById("catalogListingsContainer");
  if (!container) return;

  if (ads.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 56px 24px; text-align: center; background: #fff; border-radius: var(--radius-md); border: 1px solid var(--border-light);">
        <img src="images/branding/mascot_empty_state.png" alt="Ничего не найдено" style="width: 170px; height: 170px; object-fit: contain; margin-bottom: 16px;">
        <div style="font-size: 21px; font-weight: 700; color: var(--text-main); margin-bottom: 8px;">Ничего не нашлось</div>
        <div style="font-size: 14.5px; color: var(--text-secondary); max-width: 420px; margin: 0 auto 22px; line-height: 1.5;">
          Мы проверили весь каталог, но по запросу «${catalogQuery || 'выбранным параметрам'}» пока нет предложений. Попробуйте изменить запрос или сбросить фильтры.
        </div>
        <button class="btn btn--primary" onclick="resetCatalogFilters()">Сбросить фильтры и показать все</button>
      </div>
    `;
    return;
  }

  container.innerHTML = ads.map(ad => {
    const isFav = favoritesSet.has(ad.id);
    return `
      <div class="ad-card-horizontal ${ad.isVip ? 'ad-card--vip' : ''}" onclick="openAdDetail(${ad.id})">
        <!-- Media / Image on Left -->
        <div class="ad-card-horizontal__media">
          <img class="ad-card-horizontal__img" src="${ad.images[0]}" alt="${ad.title}">
          
          <button class="btn-favorite ${isFav ? 'active' : ''}" onclick="toggleFavorite(event, ${ad.id})" title="${isFav ? 'Удалить из избранного' : 'Добавить в избранное'}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>

          ${ad.hasVideo ? `
            <div class="ad-card-horizontal__play-btn" title="Смотреть видеообзор">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            </div>
          ` : ''}

          <div class="ad-card-horizontal__badges">
            ${ad.isVip ? `<span class="badge badge--vip">VIP</span>` : ''}
            ${ad.isAdvertiser ? `<span class="badge badge--verified">Компания</span>` : ''}
            ${ad.hasVideo ? `<span class="badge badge--video">▶ Видео</span>` : ''}
          </div>
        </div>

        <!-- Body / Content on Right -->
        <div class="ad-card-horizontal__body">
          <div class="ad-card-horizontal__main">
            <div class="ad-card-horizontal__header">
              <h3 class="ad-card-horizontal__title" title="${ad.title}">${ad.title}</h3>
            </div>

            <div class="ad-card-horizontal__price-wrap">
              <span class="ad-card-horizontal__price">${ad.price}</span>
              <span class="ad-card-horizontal__unit">${ad.priceUnit || ''}</span>
            </div>

            <p class="ad-card-horizontal__desc">${ad.desc}</p>
          </div>

          <div class="ad-card-horizontal__footer">
            <div class="ad-card-horizontal__seller">
              <div class="ad-card__seller-avatar">
                ${ad.sellerName.charAt(0)}
              </div>
              <div class="ad-card__seller-info">
                <div class="ad-card__seller-name">${ad.sellerName}</div>
                <div class="ad-card__seller-role" style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
                  <span>${ad.sellerRole} • ${ad.city}</span>
                  ${getRatingBadgeHtml(ad.rating, ad.reviewsCount)}
                </div>
              </div>
            </div>

            <div class="ad-card-horizontal__actions">
              <button class="btn-phone" onclick="revealPhone(event, ${ad.id}, this)">
                ${ad.phoneMasked}
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// Favorites system (DLE favorites.tpl feature)
function toggleFavorite(event, adId) {
  event.stopPropagation();
  if (favoritesSet.has(adId)) {
    favoritesSet.delete(adId);
    showToast("Объявление удалено из избранного");
  } else {
    favoritesSet.add(adId);
    showToast("❤️ Объявление добавлено в избранное!");
  }
  localStorage.setItem("profium_favs", JSON.stringify([...favoritesSet]));
  updateFavoritesHeader();
  applyCatalogFilters();
}

function updateFavoritesHeader() {
  const el = document.getElementById("favCountText");
  if (el) el.textContent = `Избранное (${favoritesSet.size})`;
}

function filterByFavorites() {
  showOnlyFavorites = !showOnlyFavorites;
  const btn = document.getElementById("favoritesHeaderBtn");
  if (showOnlyFavorites) {
    btn.style.backgroundColor = "#fee2e2";
    btn.style.color = "#dc2626";
    showToast("Показаны только избранные объявления");
  } else {
    btn.style.backgroundColor = "";
    btn.style.color = "";
  }
  applyCatalogFilters();
}

function resetCatalogFilters() {
  document.getElementById("catalogSearchInput").value = "";
  document.getElementById("priceMin").value = "";
  document.getElementById("priceMax").value = "";
  document.getElementById("filterVip").checked = false;
  document.getElementById("filterVideo").checked = false;
  document.getElementById("filterCompany").checked = false;
  document.getElementById("filterPrivate").checked = false;
  currentSortMode = "default";
  const labelEl = document.getElementById("sortCurrentLabel");
  if (labelEl) labelEl.textContent = "По популярности";
  document.querySelectorAll(".custom-select__option").forEach((opt, idx) => {
    if (idx === 0) opt.classList.add("active");
    else opt.classList.remove("active");
  });
  catalogQuery = "";
  catalogCategory = "all";
  showOnlyFavorites = false;
  highlightSidebarCategory("all");
  applyCatalogFilters();
  showToast("Фильтры сброшены");
}

// Phone unmask
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

// Region Switch
function selectRegion(cityName) {
  currentCity = cityName;
  document.getElementById("currentCity").textContent = cityName;
  closeModal("modalRegion");
  showToast(`Регион изменен на: ${cityName}`);
  applyCatalogFilters();
}

function filterRegionsList(query) {
  const q = query.toLowerCase().trim();
  const items = document.querySelectorAll("#regionItemsList .region-item");
  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(q) ? "flex" : "none";
  });
}

// Modal open/close
function openModal(id) {
  document.getElementById(id)?.classList.add("active");
}
function closeModal(id) {
  document.getElementById(id)?.classList.remove("active");
}
window.addEventListener("click", e => {
  if (e.target.classList.contains("modal-overlay")) e.target.classList.remove("active");
});

// Detail view
let currentDetailAd = null;
function openAdDetail(adId) {
  const ad = adsDatabase.find(a => a.id === adId);
  if (!ad) return;
  currentDetailAd = ad;

  document.getElementById("detailModalTitle").textContent = ad.title;
  document.getElementById("detailCallBtn").textContent = "Показать телефон";

  document.getElementById("detailModalBody").innerHTML = `
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
            <div style="font-size: 14.5px; font-weight: 700; color: var(--primary-dark);">Видеообзор объявления (DLE xfield)</div>
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

  document.getElementById("detailAuthorBlock").innerHTML = `
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
  document.getElementById("detailCallBtn").textContent = currentDetailAd.phoneFull;
  showToast(`Номер телефона: ${currentDetailAd.phoneFull}`);
}

function openPromoFromDetail() {
  closeModal("modalAdDetail");
  openCabinetModal();
  showToast("Выберите услугу продвижения в личном кабинете");
}

// Split registration
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
  const login = document.getElementById("regLogin")?.value.trim() || "alex_moscow";
  const roleName = userRole === 'seller' ? "Рекламодатель" : "Клиент";
  showToast(`Регистрация в Профиум успешна! Роль: ${roleName}`);
  closeModal("modalReg");
  document.getElementById("userStatusText").textContent = `${login} (${roleName})`;
}

// Cabinet & Billing
function openCabinetModal() {
  document.getElementById("cabBalanceValue").textContent = `${userBalance.toLocaleString("ru-RU")} ₽`;
  const list = document.getElementById("userAdsList");
  list.innerHTML = adsDatabase.slice(0, 2).map(ad => `
    <div style="display: flex; align-items: center; justify-content: space-between; padding: 16px; background: #fff; border-radius: var(--radius-md); box-shadow: var(--shadow-sm);">
      <div>
        <div style="font-size: 14px; font-weight: 600; color: var(--text-main);">${ad.title.slice(0, 48)}...</div>
        <div style="font-size: 12.5px; color: var(--text-muted); margin-top: 4px;">
          Статус: ${ad.isVip ? '<span style="color: #d97706; font-weight: 600;">VIP</span>' : 'Обычное'} • ${ad.date}
        </div>
      </div>
      <button class="btn btn--outline" style="font-size: 12.5px; padding: 7px 14px;" onclick="bumpAdInCabinet(${ad.id})">
        ⬆ Поднять (99 ₽)
      </button>
    </div>
  `).join("");
  openModal("modalCabinet");
}

function bumpAdInCabinet(adId) {
  if (userBalance < 99) {
    showToast("Недостаточно средств для поднятия!");
    return;
  }
  userBalance -= 99;
  document.getElementById("cabBalanceValue").textContent = `${userBalance.toLocaleString("ru-RU")} ₽`;
  const ad = adsDatabase.find(a => a.id === adId);
  if (ad) {
    ad.date = "Только что (поднято)";
    adsDatabase = [ad, ...adsDatabase.filter(a => a.id !== adId)];
    applyCatalogFilters();
    openCabinetModal();
    showToast("✓ Объявление поднято на 1-е место ленты DLE!");
  }
}

function simulateTopUp() {
  userBalance += 1000;
  document.getElementById("cabBalanceValue").textContent = `${userBalance.toLocaleString("ru-RU")} ₽`;
  showToast("✓ Баланс dle-billing пополнен на 1 000 ₽ через СБП!");
}

// Toast
function showToast(message) {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1bb76e" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => toast.classList.add("show"), 10);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Collapsible Filter Accordions
function toggleFilterGroup(groupId) {
  const group = document.getElementById(groupId);
  if (group) group.classList.toggle("collapsed");
}

let allFiltersCollapsed = false;
function toggleAllFilters() {
  allFiltersCollapsed = !allFiltersCollapsed;
  const groups = document.querySelectorAll(".filter-group");
  groups.forEach(g => {
    if (allFiltersCollapsed) {
      g.classList.add("collapsed");
    } else {
      g.classList.remove("collapsed");
    }
  });
  const btn = document.getElementById("toggleAllFiltersBtn");
  if (btn) {
    btn.textContent = allFiltersCollapsed ? "Развернуть все" : "Свернуть все";
  }
}

// Catalog View Mode Switcher (List vs Grid)
function setCatalogViewMode(mode) {
  const container = document.getElementById("catalogListingsContainer");
  const listBtn = document.getElementById("viewListBtn");
  const gridBtn = document.getElementById("viewGridBtn");
  if (!container) return;

  if (mode === "grid") {
    container.classList.remove("view--list");
    container.classList.add("view--grid");
    listBtn?.classList.remove("active");
    gridBtn?.classList.add("active");
  } else {
    container.classList.remove("view--grid");
    container.classList.add("view--list");
    gridBtn?.classList.remove("active");
    listBtn?.classList.add("active");
  }
}

// Mobile Sticky Filters Drawer
function openMobileFiltersModal() {
  const modal = document.getElementById("mobileFiltersModal");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";

    // Sync values from desktop inputs to mobile drawer
    const pMin = document.getElementById("priceMin")?.value || "";
    const pMax = document.getElementById("priceMax")?.value || "";
    const fVip = document.getElementById("filterVip")?.checked || false;
    const fVideo = document.getElementById("filterVideo")?.checked || false;
    const fComp = document.getElementById("filterCompany")?.checked || false;
    const fPriv = document.getElementById("filterPrivate")?.checked || false;

    if (document.getElementById("mobilePriceMin")) document.getElementById("mobilePriceMin").value = pMin;
    if (document.getElementById("mobilePriceMax")) document.getElementById("mobilePriceMax").value = pMax;
    if (document.getElementById("mobileFilterVip")) document.getElementById("mobileFilterVip").checked = fVip;
    if (document.getElementById("mobileFilterVideo")) document.getElementById("mobileFilterVideo").checked = fVideo;
    if (document.getElementById("mobileFilterCompany")) document.getElementById("mobileFilterCompany").checked = fComp;
    if (document.getElementById("mobileFilterPrivate")) document.getElementById("mobileFilterPrivate").checked = fPriv;

    syncMobileFiltersUI();
  }
}

function closeMobileFiltersModal() {
  const modal = document.getElementById("mobileFiltersModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function syncMobilePriceToDesktop() {
  const pMin = document.getElementById("mobilePriceMin")?.value || "";
  const pMax = document.getElementById("mobilePriceMax")?.value || "";
  if (document.getElementById("priceMin")) document.getElementById("priceMin").value = pMin;
  if (document.getElementById("priceMax")) document.getElementById("priceMax").value = pMax;
  applyCatalogFilters();
}

function syncMobileCheckboxToDesktop() {
  const fVip = document.getElementById("mobileFilterVip")?.checked || false;
  const fVideo = document.getElementById("mobileFilterVideo")?.checked || false;
  const fComp = document.getElementById("mobileFilterCompany")?.checked || false;
  const fPriv = document.getElementById("mobileFilterPrivate")?.checked || false;

  if (document.getElementById("filterVip")) document.getElementById("filterVip").checked = fVip;
  if (document.getElementById("filterVideo")) document.getElementById("filterVideo").checked = fVideo;
  if (document.getElementById("filterCompany")) document.getElementById("filterCompany").checked = fComp;
  if (document.getElementById("filterPrivate")) document.getElementById("filterPrivate").checked = fPriv;

  applyCatalogFilters();
}

function syncMobileFiltersUI() {
  // Update active tag in mobile sticky filter widget
  const tag = document.getElementById("mobileFilterActiveTag");
  if (tag) {
    tag.textContent = catalogCategory === "all" ? "Все категории" : catalogCategory;
  }
  // Highlight category items in mobile drawer
  document.querySelectorAll("#mobileCatList .cat-item").forEach(item => {
    const text = item.querySelector("span")?.textContent.trim() || "";
    if ((catalogCategory === "all" && text.includes("Все")) || 
        (catalogCategory !== "all" && text.toLowerCase().includes(catalogCategory.toLowerCase()))) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
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

function initCatalogEventListeners() {
  document.getElementById("catalogSearchInput")?.addEventListener("keyup", e => {
    if (e.key === "Enter") executeCatalogSearch();
  });
  document.getElementById("openCabinetBtn")?.addEventListener("click", openCabinetModal);
  document.getElementById("openRegBtn")?.addEventListener("click", () => openModal("modalReg"));
  document.getElementById("openAddNewsBtn")?.addEventListener("click", () => openModal("modalAddNews"));
  document.getElementById("addCategory")?.addEventListener("change", calcBillingTotal);
}

// ==========================================================================
// ADD NEWS & BILLING IN CATALOG
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
    showToast("В демо-режиме можно загрузить до 3 фото");
  }
}

function updatePhotoPreviews() {
  const container = document.getElementById("photoPreviews");
  if (!container) return;
  container.innerHTML = uploadedPhotos.map((src, i) => `
    <div class="upload-preview-item">
      <img src="${src}" alt="Фото">
      <button class="upload-preview-remove" onclick="removeUploadedPhoto(${i})">&times;</button>
    </div>
  `).join("");
}

function removeUploadedPhoto(index) {
  uploadedPhotos.splice(index, 1);
  updatePhotoPreviews();
}

function calcBillingTotal() {
  let total = 0;
  const cat = document.getElementById("addCategory")?.value;
  if (cat === "Ремонт") total += 150;
  if (cat === "Недвижимость") total += 200;

  if (document.getElementById("billVip")?.checked) total += 290;
  if (document.getElementById("billPin")?.checked) total += 490;
  if (document.getElementById("billUp")?.checked) total += 99;

  const totalSumEl = document.getElementById("billTotalSum");
  if (totalSumEl) totalSumEl.textContent = `${total} ₽`;
  return total;
}

function submitNewAd() {
  const title = document.getElementById("addTitle")?.value.trim() || "";
  const price = document.getElementById("addPrice")?.value.trim() || "";
  const desc = document.getElementById("addDesc")?.value.trim() || "";
  const category = document.getElementById("addCategory")?.value || "Ремонт";
  const city = document.getElementById("addCity")?.value.trim() || "Москва, ЦАО";
  const phone = document.getElementById("addPhone")?.value.trim() || "+7 (926) 450-22-18";
  const video = document.getElementById("addVideo")?.value.trim() || "";
  const isVip = document.getElementById("billVip")?.checked || false;
  const totalCost = calcBillingTotal();

  if (!title || !price || !desc) {
    showToast("Пожалуйста, заполните заголовок, цену и описание.");
    return;
  }

  // Auto-top-up if balance is insufficient
  if (totalCost > userBalance) {
    userBalance += (totalCost + 1000);
    showToast(`Баланс автоматически пополнен бонусом dle-billing (+${totalCost + 1000} ₽)`);
  }

  userBalance -= totalCost;
  updateUserBalanceDisplay();

  const priceNum = parseFloat(price.replace(/[^\d]/g, "")) || 1500;

  const newAd = {
    id: Date.now(),
    title: title,
    category: category,
    price: price.includes("₽") ? price : `${price} ₽`,
    priceNum: priceNum,
    priceUnit: "за услугу",
    desc: desc,
    images: uploadedPhotos.length > 0 ? [...uploadedPhotos] : [
      "images/ads/renovation.jpg"
    ],
    hasVideo: !!video,
    videoUrl: video,
    sellerName: "Мой профиль",
    sellerRole: userRole === 'seller' ? "Рекламодатель" : "Частный мастер",
    rating: 5.0,
    reviewsCount: 1,
    isAdvertiser: userRole === 'seller',
    isVip: isVip,
    city: city || "Москва",
    phoneMasked: "+7 (926) •••-••-18",
    phoneFull: phone,
    date: "Только что"
  };

  adsDatabase.unshift(newAd);

  // Persist to localStorage
  try {
    const customAds = JSON.parse(localStorage.getItem("profium_custom_ads") || "[]");
    customAds.unshift(newAd);
    localStorage.setItem("profium_custom_ads", JSON.stringify(customAds));
  } catch (e) {
    console.error("Failed to save ad to localStorage:", e);
  }

  applyCatalogFilters();

  closeModal("modalAddNews");
  showToast(`✓ Объявление опубликовано! ${isVip ? '(VIP статус активирован)' : ''}`);

  if (document.getElementById("addTitle")) document.getElementById("addTitle").value = "";
  if (document.getElementById("addPrice")) document.getElementById("addPrice").value = "";
  if (document.getElementById("addDesc")) document.getElementById("addDesc").value = "";
  if (document.getElementById("billVip")) document.getElementById("billVip").checked = false;
  if (document.getElementById("billPin")) document.getElementById("billPin").checked = false;
  if (document.getElementById("billUp")) document.getElementById("billUp").checked = false;
  uploadedPhotos = [];
  updatePhotoPreviews();
  calcBillingTotal();

  // Scroll to catalog top
  document.getElementById("catalogContainer")?.scrollIntoView({ behavior: "smooth", block: "start" });
}
