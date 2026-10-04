(() => {
  const D = window.PORTFOLIO;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const root = document.documentElement;

  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const anim = !!window.gsap && !reduce;
  if (anim && window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  const FPS = 25;
  const pad = (n, l = 2) => String(n).padStart(l, '0');
  const tc = (sec) => {
    const s = Math.max(0, sec);
    return `${pad(Math.floor(s / 3600))}:${pad(Math.floor(s / 60) % 60)}:${pad(Math.floor(s) % 60)}:${pad(Math.floor((s % 1) * FPS))}`;
  };

  /* ---------- smooth scroll ---------- */
  let lenis = null;
  if (anim && fine && window.Lenis) {
    lenis = new Lenis({ duration: 1.1 });
    root.classList.add('lenis');
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  }
  const scrollToEl = (el) => (lenis ? lenis.scrollTo(el, { offset: -76 }) : el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' }));
  $$('a[href^="#"]').forEach((a) => a.addEventListener('click', (e) => {
    const t = $(a.getAttribute('href'));
    if (!t) return;
    e.preventDefault();
    scrollToEl(t);
  }));

  /* ---------- contenu statique issu de data.js ---------- */
  $$('[data-wa]').forEach((a) => (a.href = D.whatsapp));
  $$('[data-avatar]').forEach((img) => (img.src = D.avatar));
  const initials = (n) => n.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase();
  const tcards = (dup) => D.trusted.map((t) => `
    <a class="tcard" ${t.client ? `href="?c=${t.client}" data-client="${t.client}" data-cursor="Vidéos"` : `href="${t.url}" target="_blank" rel="noopener" data-cursor="Profil ↗"`}${dup ? ' aria-hidden="true" tabindex="-1"' : ''}>
      <span class="tcard__pp">${initials(t.name)}<img src="${t.pp}" alt="" onerror="this.remove()"></span>
      <span class="tcard__n">${t.name}</span>
    </a>`).join('');
  $('[data-trust]').innerHTML = tcards(false) + tcards(true);

  // haut de page : 3 vidéos + visages des clients
  const heroV = $('[data-hero-visual]');
  heroV.innerHTML = D.hero.map((h, k) => {
    const c = D.clients.find((x) => x.id === h.client);
    const t = D.trusted.find((x) => x.client === h.client) || {};
    return `
    <a class="hcard hcard--${k}" href="?c=${c.id}" data-client="${c.id}" data-cursor="Vidéos" aria-label="Voir les vidéos de ${c.name}">
      <video muted loop playsinline preload="metadata" src="${c.media[h.i].src}#t=0.1"></video>
      <span class="hcard__chip"><img src="${c.logo}" alt=""><span><b>${c.name}</b>${t.subs ? `<small>${t.subs} abonnés</small>` : ''}</span></span>
    </a>`;
  }).join('') + '<span class="sticker" aria-hidden="true"><b>+50M</b> de vues</span>';
  $('[data-hero-faces]').innerHTML = D.trusted.slice(0, 5).map((t) => `<img src="${t.pp}" alt="" onerror="this.remove()">`).join('');

  const timeFmt = new Intl.DateTimeFormat('fr-FR', { timeZone: 'Europe/Paris', hour: '2-digit', minute: '2-digit' });
  const t0 = performance.now();
  const clockEl = $('[data-clock-tc]'), localEl = $('[data-localtime]');
  const tick = () => { clockEl.textContent = tc((performance.now() - t0) / 1000); localEl.textContent = timeFmt.format(new Date()); };
  tick(); setInterval(tick, 80);

  /* ---------- lecture des vidéos de fond ---------- */
  let lbOpen = false, stageVisible = false, reelVisible = false, heroVisible = true;
  const stage = $('#stage'), list = $('#clients');
  const reelVideo = $('.reel__video');
  reelVideo.src = D.showreel.src;

  const play = (v) => { const p = v.play(); if (p) p.catch(() => {}); };
  const sync = () => {
    $$('video', stage).forEach((v) => (stageVisible && !lbOpen ? play(v) : v.pause()));
    reelVisible && !lbOpen ? play(reelVideo) : reelVideo.pause();
    $$('video', heroV).forEach((v) => (heroVisible && !lbOpen ? play(v) : v.pause()));
  };
  new IntersectionObserver(([e]) => { heroVisible = e.isIntersecting; sync(); }, { threshold: 0.05 }).observe(heroV);
  new IntersectionObserver(([e]) => { stageVisible = e.isIntersecting; sync(); }, { threshold: 0.05 }).observe(stage);
  new IntersectionObserver(([e]) => { reelVisible = e.isIntersecting; sync(); }, { threshold: 0.05 }).observe($('.reel'));
  const reelTc = $('[data-reel-tc]');
  reelVideo.addEventListener('timeupdate', () => (reelTc.textContent = tc(reelVideo.currentTime)));

  /* ---------- clients ---------- */
  list.innerHTML = D.clients.map((c, i) => `
    <button class="client" type="button" role="tab" data-id="${c.id}" aria-selected="false">
      <span class="client__i mono">${pad(i + 1)}</span>
      <span class="client__n">${c.name}</span>
      <span class="client__m mono">${c.media.length} vidéo${c.media.length > 1 ? 's' : ''}</span>
    </button>`).join('');

  const stageHTML = (c) => {
    const allH = c.media.every((m) => m.o === 'h');
    const grid = allH && c.media.length >= 3;
    const sum = c.media.reduce((s, m) => s + (m.o === 'v' ? 0.5625 : 1.7778), 0);
    const fan = D.trusted.find((t) => t.client === c.id && t.subs);
    const mw = `max-width:calc(var(--mh) * ${sum.toFixed(4)} + ${(c.media.length - 1) * 12}px)`;
    return `
      <div class="stage__head">
        <span class="stage__logo">${initials(c.name)}<img src="${c.logo}" alt="" onerror="this.remove()"></span>
        <div class="stage__id">
          <h3 class="stage__name">${c.name}</h3>
          <p class="stage__blurb">${c.blurb}</p>
        </div>
        ${fan ? `<div class="stage__subs"><b>${fan.subs}</b><span class="mono">abonnés<br>${fan.net}</span></div>` : ''}
        <div class="stage__tags">${c.tags.map((t) => `<span class="tag">${t}</span>`).join('')}</div>
        <div class="stage__links">
          <a class="pill pill--accent" href="${c.url}" target="_blank" rel="noopener">${c.handle} ↗</a>
          <button class="pill" type="button" data-copy>Copier le lien</button>
        </div>
      </div>
      <div class="media${grid ? ' media--grid' : ''}" style="${mw}">
        ${c.media.map((m, i) => `
          <div class="m m--${m.o}" data-i="${i}" data-cursor="Play" tabindex="0" role="button" aria-label="Lire la vidéo ${i + 1} — ${c.name}">
            <video muted loop playsinline preload="metadata" src="${m.preview || m.src}#t=0.1"></video>
            ${m.tag ? `<span class="tag m__tag">${m.tag}</span>` : ''}
            <span class="mono m__n">${pad(i + 1)}/${pad(c.media.length)}</span>
            <span class="mono m__err">Aperçu indisponible</span>
          </div>`).join('')}
      </div>`;
  };

  let current = null;
  const setClient = (id) => {
    const c = D.clients.find((x) => x.id === id);
    if (!c || id === current) return;
    current = id;
    root.style.setProperty('--accent', c.accent);
    $$('.client', list).forEach((b) => {
      const on = b.dataset.id === id;
      b.classList.toggle('is-on', on);
      b.setAttribute('aria-selected', on);
      if (on && list.scrollWidth > list.clientWidth) list.scrollTo({ left: b.offsetLeft - 16, behavior: 'smooth' });
    });
    $$('video', stage).forEach((v) => { v.pause(); v.removeAttribute('src'); v.load(); });
    stage.innerHTML = stageHTML(c);

    $$('.m', stage).forEach((card) => {
      const v = $('video', card);
      v.addEventListener('loadeddata', () => card.classList.add('is-ready'), { once: true });
      v.addEventListener('error', () => card.classList.add('is-error'), { once: true });
      const open = () => openLB(c.media, +card.dataset.i, c.name);
      card.addEventListener('click', open);
      card.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
    });
    $('[data-copy]', stage).addEventListener('click', async (e) => {
      const url = `${location.origin}${location.pathname}?c=${c.id}`;
      try { await navigator.clipboard.writeText(url); e.target.textContent = 'Lien copié ✓'; }
      catch { e.target.textContent = url; }
    });
    sync();

    if (anim) {
      gsap.from($$('.stage__head > *', stage), { y: 18, opacity: 0, duration: 0.6, stagger: 0.05, ease: 'power3.out' });
      gsap.fromTo($$('.m', stage),
        { clipPath: 'inset(100% 0% 0% 0% round 18px)', y: 40 },
        { clipPath: 'inset(0% 0% 0% 0% round 18px)', y: 0, duration: 1, stagger: 0.08, ease: 'expo.out', clearProps: 'clipPath,transform' });
    }
  };

  let intent;
  list.addEventListener('click', (e) => { const b = e.target.closest('.client'); if (b) setClient(b.dataset.id); });
  if (fine) {
    list.addEventListener('mouseover', (e) => {
      const b = e.target.closest('.client');
      clearTimeout(intent);
      if (b) intent = setTimeout(() => setClient(b.dataset.id), 160);
    });
    list.addEventListener('mouseleave', () => clearTimeout(intent));
  }
  list.addEventListener('keydown', (e) => {
    if (!['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft'].includes(e.key)) return;
    e.preventDefault();
    const btns = $$('.client', list);
    const i = btns.indexOf(document.activeElement);
    const n = btns[(i + (e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1 : -1) + btns.length) % btns.length];
    n.focus(); setClient(n.dataset.id);
  });

  // bandeau « Ils m'ont fait confiance » et vidéos du haut de page → ouvrent la fiche du client dans les projets
  document.addEventListener('click', (e) => {
    const card = e.target.closest('a[data-client]');
    if (!card || e.metaKey || e.ctrlKey) return;
    e.preventDefault();
    setClient(card.dataset.client);
    scrollToEl($('.work__grid'));
  });

  const wanted = new URLSearchParams(location.search).get('c');
  const deepLink = D.clients.some((c) => c.id === wanted);
  setClient(deepLink ? wanted : D.clients[0].id);
  // à l'arrivée, le site garde sa couleur de marque ; il ne prend celle d'un client qu'une fois choisi
  if (!deepLink) root.style.removeProperty('--accent');

  /* ---------- lightbox ---------- */
  const lb = $('#lb'), lbStage = $('[data-lb-stage]');
  let lbItems = [], lbI = 0, lbTitle = '', lbReturn = null;
  const renderLB = () => {
    lbStage.innerHTML = '';
    const v = document.createElement('video');
    Object.assign(v, { src: lbItems[lbI].src, controls: true, autoplay: true, playsInline: true });
    lbStage.append(v);
    $('[data-lb-title]').textContent = lbTitle;
    $('[data-lb-count]').textContent = `${pad(lbI + 1)} / ${pad(lbItems.length)}`;
    $('[data-lb-prev]').disabled = lbI === 0;
    $('[data-lb-next]').disabled = lbI === lbItems.length - 1;
  };
  function openLB(items, i, title) {
    lbItems = items; lbI = i; lbTitle = title; lbOpen = true; lbReturn = document.activeElement;
    lb.hidden = false; document.body.classList.add('is-locked'); lenis && lenis.stop();
    sync(); renderLB(); $('[data-lb-close]').focus();
    if (anim) gsap.fromTo(lb, { opacity: 0 }, { opacity: 1, duration: 0.3 });
  }
  const closeLB = () => {
    if (!lbOpen) return;
    lbOpen = false; lbStage.innerHTML = ''; lb.hidden = true;
    document.body.classList.remove('is-locked'); lenis && lenis.start();
    sync(); lbReturn && lbReturn.focus && lbReturn.focus();
  };
  const stepLB = (d) => { const n = lbI + d; if (n >= 0 && n < lbItems.length) { lbI = n; renderLB(); } };
  $('[data-lb-close]').addEventListener('click', closeLB);
  $('[data-lb-prev]').addEventListener('click', () => stepLB(-1));
  $('[data-lb-next]').addEventListener('click', () => stepLB(1));
  lbStage.addEventListener('click', (e) => { if (e.target === lbStage) closeLB(); });
  addEventListener('keydown', (e) => {
    if (!lbOpen) return;
    if (e.key === 'Escape') closeLB();
    if (e.key === 'ArrowLeft') stepLB(-1);
    if (e.key === 'ArrowRight') stepLB(1);
  });
  $$('[data-open-reel]').forEach((b) => b.addEventListener('click', () => openLB([D.showreel], 0, D.showreel.tag)));

  /* ---------- HUD timeline + nav active ---------- */
  const sections = $$('[data-section]');
  const navLinks = $$('.nav__links a');
  const hudFill = $('[data-hud-fill]'), hudHead = $('[data-hud-head]'), hudTc = $('[data-hud-tc]'), hudS = $('[data-hud-section]');
  const hudBar = $('.hud__bar');
  let ticking = false;
  const onScroll = () => {
    ticking = false;
    const max = root.scrollHeight - innerHeight;
    const p = max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0;
    hudFill.style.transform = `scaleX(${p})`;
    hudHead.style.transform = `translateX(${p * hudBar.clientWidth}px)`;
    hudTc.textContent = tc(p * 150);
    let cur = sections[0];
    for (const s of sections) if (s.getBoundingClientRect().top <= innerHeight * 0.5) cur = s;
    hudS.textContent = cur.dataset.section;
    navLinks.forEach((a) => a.classList.toggle('is-on', a.getAttribute('href') === '#' + cur.id));
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  addEventListener('resize', onScroll);
  onScroll();

  /* ---------- sans animation : on s'arrête là ---------- */
  const loader = $('.loader');
  if (!anim) {
    loader.remove();
    if (deepLink) $('#work').scrollIntoView();
    return;
  }

  /* ---------- curseur, glow, magnétisme ---------- */
  if (fine) {
    root.classList.add('has-cursor');
    const cur = $('.cursor'), label = $('.cursor__label'), glow = $('.glow');
    const cx = gsap.quickTo(cur, 'x', { duration: 0.18, ease: 'power3' }), cy = gsap.quickTo(cur, 'y', { duration: 0.18, ease: 'power3' });
    gsap.set(glow, { x: innerWidth * 0.7, y: innerHeight * 0.2 });
    const gx = gsap.quickTo(glow, 'x', { duration: 1.4, ease: 'power3' }), gy = gsap.quickTo(glow, 'y', { duration: 1.4, ease: 'power3' });
    addEventListener('mousemove', (e) => { cur.classList.add('is-live'); cx(e.clientX); cy(e.clientY); gx(e.clientX); gy(e.clientY); });
    document.addEventListener('mouseover', (e) => {
      const l = e.target.closest('[data-cursor]');
      const k = e.target.closest('a, button, [role="button"]');
      cur.classList.toggle('is-label', !!l);
      cur.classList.toggle('is-link', !l && !!k);
      if (l) label.textContent = l.dataset.cursor;
    });
    const depth = [14, 26, 14];
    const hx = $$('.hcard').map((el) => gsap.quickTo(el, 'x', { duration: 0.9, ease: 'power3' }));
    $('.hero').addEventListener('mousemove', (e) => {
      const n = e.clientX / innerWidth - 0.5;
      hx.forEach((f, k) => f(-n * depth[k]));
    });
    $$('[data-magnetic]').forEach((el) => {
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        gsap.to(el, { x: (e.clientX - r.left - r.width / 2) * 0.25, y: (e.clientY - r.top - r.height / 2) * 0.35, duration: 0.4, ease: 'power3.out' });
      });
      el.addEventListener('mouseleave', () => gsap.to(el, { x: 0, y: 0, duration: 0.8, ease: 'elastic.out(1, 0.4)' }));
    });
  }

  /* ---------- animations au scroll ---------- */
  $$('[data-reveal]').forEach((el) => gsap.from(el, { y: 50, opacity: 0, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 90%' } }));
  gsap.from('.client', { x: -24, opacity: 0, duration: 0.7, stagger: 0.04, ease: 'power3.out', clearProps: 'all', scrollTrigger: { trigger: '.work__grid', start: 'top 80%' } });
  gsap.from('.stage', { y: 60, opacity: 0, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: '.work__grid', start: 'top 80%' } });

  $$('[data-count]').forEach((el) => {
    const end = +el.dataset.count, o = { v: 0 };
    gsap.to(o, { v: end, duration: 1.6, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 92%' }, onUpdate: () => (el.textContent = Math.round(o.v)) });
  });

  /* ---------- loader + intro ---------- */
  gsap.set('.hero__title .line > span', { yPercent: 110 });
  gsap.set('[data-hero-fade], .hero__meta, .nav, .hud', { opacity: 0 });
  gsap.set('.hcard', { opacity: 0, y: 80 });
  const num = $('[data-loader-num]'), bar = $('[data-loader-bar]'), ltc = $('[data-loader-tc]');
  const o = { v: 0 };
  gsap.timeline()
    .to(o, { v: 100, duration: 1.5, ease: 'power2.inOut', onUpdate: () => {
      num.textContent = pad(Math.round(o.v), 3);
      bar.style.transform = `scaleX(${o.v / 100})`;
      ltc.textContent = tc((o.v / 100) * 1.5);
    } })
    .to(loader, { yPercent: -100, duration: 0.9, ease: 'expo.inOut', onComplete: () => { loader.remove(); if (deepLink) scrollToEl($('#work')); } })
    .to('.hero__title .line > span', { yPercent: 0, duration: 1.2, stagger: 0.12, ease: 'expo.out' }, '-=0.45')
    .to('.hero__meta, .nav, .hud', { opacity: 1, duration: 0.8 }, '-=0.9')
    .fromTo('[data-hero-fade]', { y: 24 }, { y: 0, opacity: 1, duration: 0.9, stagger: 0.08, ease: 'power3.out' }, '-=0.9')
    .to(['.hcard--1', '.hcard--0', '.hcard--2'], { y: 0, opacity: 1, duration: 1.2, stagger: 0.12, ease: 'expo.out' }, '-=1.1');
})();
