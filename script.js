const copy = {
  ro: {
    skip: "Sari la conținut",
    menu: "Meniu",
    catalog: "Catalog",
    about: "Despre brand",
    contacts: "Contacte",
    catLifts: "Elevatoare",
    catLiftsLong: "Elevatoare auto",
    catTyre: "Mașini de dejantat",
    catBalancers: "Echilibratoare",
    catAir: "Compresoare",
    catAirLong: "Compresoare și pneumatică",
    catWorkshop: "Echipare atelier",
    catWorkshopLong: "Echipare atelier",
    heroTitle: "Utilaje pe care se sprijină service-ul.",
    heroText:
      "Echipamente profesionale pentru anvelope, echilibrare și organizarea atelierului - prezentate clar, fără elemente inutile.",
    seeCatalog: "Vezi catalogul",
    tyreChanger: "Mașină de dejantat",
    catalogHeading: "Alegeți direcția de lucru.",
    catalogText:
      "Cinci categorii și 25 de modele orientative. Datele tehnice vor fi completate după aprobarea gamei finale.",
    aboutTitle: "Echipament pentru munca de zi cu zi.",
    aboutText:
      "HARTMANN prezintă echipamentele direct: categorii clare, produse vizibile și contact cu furnizorul înainte de alegere.",
    value1Title: "Gamă clară",
    value1Text: "Produsele sunt grupate după rolul lor în atelier.",
    value2Title: "Alegere practică",
    value2Text: "Comparați modelele fără zgomot comercial.",
    value3Title: "Contact direct",
    value3Text: "Primiți informația necesară înainte de achiziție.",
    contactTitle: "Aveți nevoie de un utilaj pentru atelier?",
    contactText:
      "Spuneți-ne ce lucrări efectuați și vă ajutăm să alegeți categoria potrivită.",
    write: "Scrie-ne",
    footer: "Echipamente profesionale pentru service auto.",
    up: "Sus",
    pending: "Imagine în pregătire",
    temporary: "Model orientativ",
  },
  ru: {
    skip: "Перейти к содержанию",
    menu: "Меню",
    catalog: "Каталог",
    about: "О бренде",
    contacts: "Контакты",
    catLifts: "Подъёмники",
    catLiftsLong: "Автоподъёмники",
    catTyre: "Шиномонтажные станки",
    catBalancers: "Балансировочные станки",
    catAir: "Компрессоры",
    catAirLong: "Компрессоры и пневматика",
    catWorkshop: "Оснащение мастерской",
    catWorkshopLong: "Оснащение мастерской",
    heroTitle: "Станки, на которые опирается сервис.",
    heroText:
      "Профессиональное оборудование для шиномонтажа, балансировки и оснащения мастерской - понятно и без лишних элементов.",
    seeCatalog: "Смотреть каталог",
    tyreChanger: "Шиномонтажный станок",
    catalogHeading: "Выберите направление работы.",
    catalogText:
      "Пять категорий и 25 ориентировочных моделей. Технические данные будут добавлены после утверждения итоговой линейки.",
    aboutTitle: "Оборудование для ежедневной работы.",
    aboutText:
      "HARTMANN представляет оборудование прямо: понятные категории, видимые товары и контакт с поставщиком перед выбором.",
    value1Title: "Понятная линейка",
    value1Text: "Товары сгруппированы по назначению в мастерской.",
    value2Title: "Практичный выбор",
    value2Text: "Сравнивайте модели без коммерческого шума.",
    value3Title: "Прямой контакт",
    value3Text: "Получите нужную информацию перед покупкой.",
    contactTitle: "Нужно оборудование для мастерской?",
    contactText:
      "Расскажите, какие работы вы выполняете, и мы поможем выбрать подходящую категорию.",
    write: "Написать",
    footer: "Профессиональное оборудование для автосервиса.",
    up: "Наверх",
    pending: "Изображение готовится",
    temporary: "Ориентировочная модель",
  },
};


const groups = [
  {
    id: "lifts",
    title: "catLiftsLong",
    desc: {
      ro: "Elevatoare pentru diferite configurații de lucru.",
      ru: "Подъёмники для разных рабочих конфигураций.",
    },
    models: ["HTL 100", "HTL 200", "HTL 300", "HTL 400", "HTL 500"],
  },
  {
    id: "tyre",
    title: "catTyre",
    desc: {
      ro: "Mașini pentru operațiunile zilnice de montare a anvelopelor.",
      ru: "Станки для ежедневных шиномонтажных работ.",
    },
    models: ["RMM 100", "RMM 200", "RMM 300", "RMM 400", "RMM 500"],
    real: "RMM 300",
    image: "assets/rmm-300-clean.png",
  },
  {
    id: "balancers",
    title: "catBalancers",
    desc: {
      ro: "Modele pentru echilibrarea roților în atelier.",
      ru: "Модели для балансировки колёс в мастерской.",
    },
    models: ["RWM 100", "RWM 200", "RWM 300", "RWM 400", "RWM 500"],
    real: "RWM 500",
    image: "assets/rwm-500-clean.png",
  },
  {
    id: "air",
    title: "catAirLong",
    desc: {
      ro: "Soluții de aer comprimat pentru infrastructura service-ului.",
      ru: "Пневматические решения для инфраструктуры автосервиса.",
    },
    models: ["HAC 100", "HAC 200", "HAC 300", "HAC 400", "HAC 500"],
  },
  {
    id: "workshop",
    title: "catWorkshopLong",
    desc: {
      ro: "Echipamente auxiliare pentru un post de lucru organizat.",
      ru: "Вспомогательное оборудование для рабочего места.",
    },
    models: ["HWS 100", "HWS 200", "HWS 300", "HWS 400", "HWS 500"],
  },
];


let lang = localStorage.getItem("hartmann-language") || "ro";

const root = document.querySelector("#catalog-sections");

let scrollObserver;


function setupScrollMotion() {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const reveals = document.querySelectorAll(
    ".section-head,.category-head,.product-card,.about-title,.about-copy,.contacts-grid>div,.footer-row",
  );
  document.documentElement.classList.add("motion-ready");

  reveals.forEach((element) => {
    element.classList.add("reveal-item");
  });

  document.querySelectorAll(".products").forEach((list) => {
    const cards = list.querySelectorAll(".product-card");
    const isMobile = window.matchMedia("(max-width: 720px)").matches;
    const delayStep = isMobile ? 55 : 70;
    const maxDelayIndex = isMobile ? 3 : 4;

    cards.forEach((card, index) => {
      const delay = Math.min(index, maxDelayIndex) * delayStep;

      card.style.setProperty("--reveal-delay", `${delay}ms`);
    });
  });

  if (scrollObserver) {
    scrollObserver.disconnect();
  }

  if (reduceMotion) {
    reveals.forEach((element) => {
      element.classList.add("is-visible");
    });

    return;
  }

  scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        scrollObserver.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -8%",
      threshold: 0.08,
    },
  );

  reveals.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const isInsideViewport =
      rect.top < window.innerHeight * 0.92 && rect.bottom > 0;

    if (isInsideViewport) {
      element.classList.add("is-visible");
      return;
    }

    if (!element.classList.contains("is-visible")) {
      scrollObserver.observe(element);
    }
  });
}


function renderCatalog() {
  root.innerHTML = groups
    .map((group) => {
      const cards = group.models
        .map((model, modelIndex) => {
          const fallbackImage =
            modelIndex % 2 === 0
              ? "assets/rmm-300-clean.png"
              : "assets/rwm-500-clean.png";

          const image = group.image || fallbackImage;

          return `
            <article class="product-card">
              <div class="product-image">
                <img src="${image}" alt="HARTMANN ${model}">
              </div>

              <div class="product-card-body">
                <h4>HARTMANN ${model}</h4>
                <p>${copy[lang][group.title]}</p>
              </div>
            </article>
          `;
        })
        .join("");

      return `
        <section class="category-block" id="${group.id}">
          <header class="category-head">
            <h3>${copy[lang][group.title]}</h3>
            <p>${group.desc[lang]}</p>
          </header>

          <div class="products">
            ${cards}
          </div>
        </section>
      `;
    })
    .join("");

  requestAnimationFrame(setupScrollMotion);
}


function setLang(next) {
  lang = next;
  localStorage.setItem("hartmann-language", lang);
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-t]").forEach((element) => {
    const translation = copy[lang][element.dataset.t];

    if (translation !== undefined) {
      element.textContent = translation;
    }
  });

  document.querySelectorAll("[data-lang]").forEach((btn) => {
    const active = btn.dataset.lang === lang;

    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
  });

  document.title =
    lang === "ro"
      ? "HARTMANN - Echipamente pentru service auto"
      : "HARTMANN - Оборудование для автосервиса";

  renderCatalog();
}


document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    setLang(button.dataset.lang);
  });
});

const menu = document.querySelector(".menu");
const nav = document.querySelector(".main-nav");

menu.addEventListener("click", () => {
  const open = menu.getAttribute("aria-expanded") === "true";

  menu.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("open", !open);
  document.body.classList.toggle("menu-open", !open);
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    document.body.classList.remove("menu-open");
    menu.setAttribute("aria-expanded", "false");
  });
});


document.querySelector("#year").textContent = new Date().getFullYear();

setLang(lang);
