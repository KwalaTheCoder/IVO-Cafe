const STORAGE_KEY = 'ivo_cafe_clay_state_v1';

const FALLBACK_DATA = {
  about: 'کافه ایوو (IVO CAFÉ) با الهام از بافت گرم سفال، رنگ قهوه‌ای دلنشین، آبی آرام، صورتی کمرنگ و سبز یشمی طراحی شده تا لحظاتی صمیمی و به‌یادماندنی برای مهمانان بسازد.',
  address: '[آدرس کافه ایوو را وارد کنید]',
  phone: '[شماره تماس کافه ایوو را وارد کنید]',
  instagram: '@ivocafe.ir',
  categories: [
    {
      id: 'breakfast', title: 'صبحانه', badge: 'jade',
      items: [
        { name: 'نیمرو', price: '۲۲۵' },
        { name: 'املت', price: '۲۷۵' },
        { name: 'سوسیس تخم مرغ', price: '۲۹۵' },
        { name: 'تست نیمرو و پنیر', price: '۳۳۵' },
        { name: 'تست بوقلمون', price: '۴۸۵' },
        { name: 'تست دودی', price: '۴۸۵' },
        { name: 'مخصوص ایوو', price: '۷۸۵' }
      ]
    },
    {
      id: 'shakes', title: 'شیک', badge: 'pink',
      items: [
        { name: 'شکلاتی', price: '۳۱۰' },
        { name: 'توت فرنگی', price: '۳۲۵' },
        { name: 'لوتوس', price: '۳۷۹' },
        { name: 'بادام زمینی', price: '۴۱۰' },
        { name: 'نوتلا', price: '۳۳۵' },
        { name: 'قهوه', price: '۳۱۰' },
        { name: 'کارامل', price: '۳۲۰' }
      ]
    },
    {
      id: 'snacks', title: 'اسنک', badge: 'blue',
      items: [
        { name: 'مخصوص', price: '۳۰۵' },
        { name: 'پپرونی', price: '۳۴۵' },
        { name: 'گوشت', price: '۳۷۵' }
      ]
    },
    {
      id: 'evening', title: 'عصرانه', badge: 'jade',
      items: [
        { name: 'سیب زمینی مخصوص ایوو', price: '۴۵۰' },
        { name: 'پیتزا پیراشکی', price: '۱۴۵' },
        { name: 'سالاد سزار', price: '۳۹۵' },
        { name: 'کلاب مخصوص ایوو', price: '۴۱۵' }
      ]
    },
    {
      id: 'autumn-packs', title: 'پک‌های ویژه پاییز کافه ایوو', badge: 'pink',
      items: [
        { name: 'اسپرسو سینگل + (کوکی) / (ترافل خرمایی)', price: '۲۱۰' },
        { name: '۲ عدد اسپرسو سینگل + ۲ عدد کوکی', price: '۴۴۰' },
        { name: '۲ عدد لته + ۲ اسلایس کیک', price: '۸۳۰' },
        { name: '۲ عدد لته + ۲ عدد کوکی', price: '۶۸۰' },
        { name: 'چای + ۱ اسلایس کیک', price: '۳۴۰' }
      ]
    },
    {
      id: 'coffee', title: 'قهوه', badge: 'jade',
      items: [
        { name: 'اسپرسو (۷۰/۳۰) / (۵۰/۵۰) / (۱۰۰٪ عربیکا)', price: '۱۸۰ - ۲۸۰' },
        { name: 'لته', price: '۲۵۵' },
        { name: 'آمریکانو', price: '۲۰۵' },
        { name: 'کاپوچینو', price: '۲۳۵' },
        { name: 'کورتادو', price: '۲۲۷' },
        { name: 'موکا', price: '۳۰۵' },
        { name: 'ماکیاتو', price: '۱۹۷' },
        { name: 'نسکافه', price: '۲۷۵' },
        { name: 'سیروپ', price: '۵۰' }
      ]
    },
    {
      id: 'hot-drinks', title: 'نوشیدنی‌های گرم', badge: 'pink',
      items: [
        { name: 'هات چاکلت', price: '۲۲۰' },
        { name: 'وایت چاکلت', price: '۲۵۵' },
        { name: 'پینک چاکلت', price: '۲۸۷' },
        { name: 'ماسالا', price: '۲۲۰' },
        { name: 'کرک', price: '۲۸۹' },
        { name: 'شیر پسته', price: '۲۸۵' },
        { name: 'هات فندق', price: '۲۶۵' },
        { name: 'شیر عسل', price: '۲۴۵' }
      ]
    },
    {
      id: 'tea-herbal', title: 'چای و دمنوش', badge: 'jade',
      items: [
        { name: 'چای سیاه ایرانی دمی', price: '۱۸۰ - ۲۸۰' },
        { name: 'چای سبز', price: '۲۵۹' },
        { name: 'چای زعفران', price: '۲۹۵' },
        { name: 'دمنوش آرامش', price: '۲۸۲' },
        { name: 'دمنوش پاییزی', price: '۲۸۷' },
        { name: 'دمنوش آویشن', price: '۲۱۰' },
        { name: 'سینامون', price: '۲۹۳' },
        { name: 'گزنه', price: '۲۱۰' }
      ]
    },
    {
      id: 'cake-cookie', title: 'کیک و کوکی', badge: 'blue',
      items: [
        { name: 'کیک شکلاتی', price: '۲۲۰' },
        { name: 'کیک پای سیب', price: '۲۱۰' },
        { name: 'کوکی شکلاتی', price: '۱۳۵' },
        { name: 'کوکی رژیمی', price: '۱۶۵' },
        { name: 'ترافل خرمایی', price: '۹۵' }
      ]
    },
    {
      id: 'cold-drinks', title: 'نوشیدنی‌های سرد', badge: 'blue',
      items: [
        { name: 'آیس آمریکانو', price: '۱۹۵' },
        { name: 'آیس لته', price: '۲۸۵' },
        { name: 'آیس موکا', price: '۳۲۰' },
        { name: 'آفوگاتو', price: '۳۲۵' },
        { name: 'موهیتو', price: '۲۷۵' },
        { name: 'لیموناد', price: '۲۴۵' },
        { name: 'والت استریت', price: '۳۱۵' },
        { name: 'بلو پارادایس', price: '۳۱۵' },
        { name: 'مخصوص ایوو', price: '۳۲۰' }
      ]
    },
    {
      id: 'natural-drinks', title: 'نوشیدنی‌های طبیعی', badge: 'jade',
      items: [
        { name: 'شیرموز', price: '۲۱۵' },
        { name: 'شیرموز خرما', price: '۲۳۵' },
        { name: 'آب پرتقال', price: '۲۲۰' },
        { name: 'میوه‌های پاییزی', price: '۲۶۰' },
        { name: 'شات زنجبیل', price: '۱۲۵' }
      ]
    }
  ]
};

document.addEventListener('DOMContentLoaded', async () => {
  document.getElementById('year').textContent = new Date().getFullYear();

  const burgerBtn = document.getElementById('burgerBtn');
  const mobileNav = document.getElementById('mobileNav');
  burgerBtn.addEventListener('click', () => {
    const isOpen = !mobileNav.classList.contains('open');
    mobileNav.classList.toggle('open', isOpen);
    burgerBtn.setAttribute('aria-expanded', String(isOpen));
  });

  const toTop = document.getElementById('toTop');
  window.addEventListener('scroll', () => {
    toTop.classList.toggle('show', window.scrollY > 320);
  }, { passive: true });
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  document.querySelectorAll('.zoom-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      lightboxImg.src = btn.dataset.src;
      lightboxCaption.textContent = btn.dataset.caption;
      lightbox.hidden = false;
    });
  });
  document.getElementById('lightboxClose').addEventListener('click', () => { lightbox.hidden = true; });
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.hidden = true; });

  let state = JSON.parse(JSON.stringify(FALLBACK_DATA));
  const localSaved = localStorage.getItem(STORAGE_KEY);
  if (localSaved) {
    try { state = { ...state, ...JSON.parse(localSaved) }; } catch (_) {}
  }

  const apiPill = document.getElementById('apiStatus');
  try {
    const res = await fetch('/api/menu');
    if (res.ok) {
      const serverData = await res.json();
      state = {
        ...state,
        about: serverData.about || state.about,
        address: serverData.contact?.address || state.address,
        phone: serverData.contact?.phone || state.phone,
        instagram: serverData.contact?.instagram || state.instagram,
        categories: serverData.categories?.length ? serverData.categories.map((c, idx) => ({
          ...c,
          badge: ['jade', 'pink', 'blue'][idx % 3]
        })) : state.categories
      };
      apiPill.textContent = 'متصل به بک‌اند Node.js';
    }
  } catch (_) {
    apiPill.textContent = 'حالت استاتیک / محلی';
  }

  const aboutEl = document.getElementById('aboutText');
  const addrEl = document.getElementById('footerAddress');
  const phoneEl = document.getElementById('footerPhone');
  const instaEl = document.getElementById('footerInsta');

  function syncTextFields() {
    aboutEl.textContent = state.about;
    addrEl.textContent = state.address;
    phoneEl.textContent = state.phone;
    instaEl.textContent = state.instagram;
  }
  syncTextFields();

  const tabsContainer = document.getElementById('categoryTabs');
  const menuContainer = document.getElementById('menuContainer');
  const searchInput = document.getElementById('searchInput');

  let activeCategory = 'all';
  let searchQuery = '';

  function renderTabs() {
    tabsContainer.innerHTML = '';
    const allBtn = document.createElement('button');
    allBtn.type = 'button';
    allBtn.className = 'tab-btn' + (activeCategory === 'all' ? ' active' : '');
    allBtn.textContent = 'همه دسته‌ها';
    allBtn.addEventListener('click', () => { activeCategory = 'all'; renderTabs(); renderMenu(); });
    tabsContainer.appendChild(allBtn);

    state.categories.forEach((cat) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'tab-btn' + (activeCategory === cat.id ? ' active' : '');
      btn.textContent = cat.title;
      btn.addEventListener('click', () => { activeCategory = cat.id; renderTabs(); renderMenu(); });
      tabsContainer.appendChild(btn);
    });
  }

  function renderMenu() {
    menuContainer.innerHTML = '';
    const q = searchQuery.trim().toLowerCase();

    const filteredCats = state.categories
      .filter((c) => activeCategory === 'all' || c.id === activeCategory)
      .map((c) => ({
        ...c,
        items: c.items.filter((item) => !q || item.name.toLowerCase().includes(q) || item.price.toLowerCase().includes(q))
      }))
      .filter((c) => c.items.length > 0);

    if (!filteredCats.length) {
      menuContainer.innerHTML = '<div class="cat-card"><p>موردی با این جستجو پیدا نشد.</p></div>';
      return;
    }

    filteredCats.forEach((cat) => {
      const card = document.createElement('article');
      card.className = 'cat-card';

      const header = document.createElement('div');
      header.className = 'cat-header';
      header.innerHTML = `
        <div class="cat-title-wrap">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
          </svg>
          <h3>${cat.title}</h3>
        </div>
        <span class="cat-pill ${cat.badge || 'jade'}">${cat.items.length} آیتم</span>
      `;

      const list = document.createElement('div');
      list.className = 'items-list';

      cat.items.forEach((item, i) => {
        const row = document.createElement('div');
        row.className = 'menu-item';

        const nameSpan = document.createElement('span');
        nameSpan.className = 'item-name editable';
        nameSpan.textContent = item.name;
        nameSpan.addEventListener('input', () => {
          cat.items[i].name = nameSpan.textContent.trim();
          localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        });

        const priceSpan = document.createElement('span');
        priceSpan.className = 'item-price editable';
        priceSpan.textContent = item.price;
        priceSpan.addEventListener('input', () => {
          cat.items[i].price = priceSpan.textContent.trim();
          localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        });

        row.appendChild(nameSpan);
        row.appendChild(priceSpan);
        list.appendChild(row);
      });

      card.appendChild(header);
      card.appendChild(list);
      menuContainer.appendChild(card);
    });

    applyEditableAttr();
  }

  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderMenu();
  });

  const editToggle = document.getElementById('editToggle');
  const editBar = document.getElementById('editBar');
  const saveBackendBtn = document.getElementById('saveBackendBtn');
  const resetBtn = document.getElementById('resetBtn');
  let editing = false;

  function applyEditableAttr() {
    document.querySelectorAll('.editable').forEach((el) => {
      el.setAttribute('contenteditable', editing ? 'true' : 'false');
    });
  }

  editToggle.addEventListener('click', () => {
    editing = !editing;
    document.body.classList.toggle('editing', editing);
    editToggle.setAttribute('aria-pressed', String(editing));
    editToggle.querySelector('span').textContent = editing ? 'پایان ویرایش' : 'ویرایش';
    editBar.hidden = !editing;
    applyEditableAttr();
  });

  [aboutEl, addrEl, phoneEl, instaEl].forEach((el) => {
    el.addEventListener('input', () => {
      state[el.dataset.key] = el.textContent.trim();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    });
  });

  saveBackendBtn.addEventListener('click', async () => {
    try {
      const res = await fetch('/api/menu', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          brand: 'IVO CAFÉ',
          about: state.about,
          contact: { address: state.address, phone: state.phone, instagram: state.instagram },
          categories: state.categories
        })
      });
      alert(res.ok ? 'تغییرات با موفقیت در بک‌اند ذخیره شد.' : 'ذخیره در بک‌اند انجام نشد.');
    } catch (_) {
      alert('بک‌اند در دسترس نیست؛ تغییرات در مرورگر ذخیره شده‌اند.');
    }
  });

  resetBtn.addEventListener('click', () => {
    localStorage.removeItem(STORAGE_KEY);
    state = JSON.parse(JSON.stringify(FALLBACK_DATA));
    syncTextFields();
    renderMenu();
  });

  renderTabs();
  renderMenu();
});
