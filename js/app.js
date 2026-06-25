/* InDe membership showcase. Vanilla, no build. English only. */
(function () {
  "use strict";

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- inline icon set (Lucide-style stroke paths) ---- */
  var ICONS = {
    "map-pin": '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    "hand-heart": '<path d="M11 14h2a2 2 0 0 0 2-2 2 2 0 0 0-2-2H9.5l-2.6 2.6"/><path d="M3.34 11a4 4 0 0 1 5.7-5.6l1.96 1.9 1.95-1.9a4 4 0 0 1 5.7 5.6L12 18.5Z"/><path d="m2 15 6 6"/>',
    "file-text": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M16 13H8M16 17H8M10 9H8"/>',
    "compass": '<circle cx="12" cy="12" r="10"/><polygon points="16.2 7.8 14.1 14.1 7.8 16.2 9.9 9.9"/>',
    "scale": '<path d="M12 3v18M7 21h10"/><path d="m5 7 14-2"/><path d="m6 7-3 7a3 3 0 0 0 6 0Z"/><path d="m18 5-3 7a3 3 0 0 0 6 0Z"/>',
    "calculator": '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 10h2M12 10h2M16 10h0M8 14h2M12 14h2M16 14h0M8 18h2M12 18h2"/>',
    "users-group": '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11"/>',
    "presentation": '<path d="M2 3h20M3 3v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V3M8 21l4-4 4 4M12 15v2"/>',
    "route": '<circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/>',
    "rocket": '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
    "calendar-heart": '<path d="M8 2v4M16 2v4M3 10h18"/><path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7"/><path d="M21.29 16.7a2 2 0 0 0-2.83 0l-.46.45-.46-.45a2 2 0 0 0-2.83 2.83l3.29 3.27 3.29-3.27a2 2 0 0 0 0-2.83Z"/>',
    "heart-handshake": '<path d="M19 14c1.49-1.46 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66M18 15l-2-2M15 18l-2-2"/>',
    "speakerphone": '<path d="m3 11 18-5v12L3 14v-3Z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
    "trending-up": '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
    "briefcase": '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    "users": '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11"/>',
    "check": '<polyline points="20 6 9 17 4 12"/>',
    "heart": '<path d="M19 14c1.49-1.46 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
    "star": '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    "user-check": '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/>',
    "building": '<path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M19 21v-8a2 2 0 0 0-2-2h-2M9 7h2M9 11h2M9 15h2"/>',
    "monitor": '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>'
  };

  function svg(name, cls) {
    var body = ICONS[name] || ICONS["check"];
    return '<svg class="ico ' + (cls || "") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + body + "</svg>";
  }

  function paintStaticIcons(scope) {
    (scope || document).querySelectorAll("[data-i]").forEach(function (el) {
      el.outerHTML = svg(el.getAttribute("data-i"));
    });
  }

  /* ---- build pillar sections from data ---- */
  function buildPillars() {
    var host = document.getElementById("pillarSections");
    if (!host || typeof PILLARS === "undefined") return;

    PILLARS.forEach(function (p) {
      var sec = document.createElement("section");
      sec.className = "pillar";
      sec.id = "pillar-" + p.id;
      sec.setAttribute("aria-label", p.title + " services");

      var cards = p.services.map(function (s) {
        var statusCls = s.status === "live" ? "live" : "building";
        return (
          '<article class="svc-card reveal">' +
            '<div class="svc-top">' +
              '<div class="svc-ico">' + svg(s.icon) + "</div>" +
              '<div class="svc-badges">' +
                '<span class="lvl-chip lvl-' + s.level + '">' + TIER_LABELS[s.level] + "</span>" +
                '<span class="badge badge-status ' + statusCls + '"><span class="sdot"></span>' + STATUS_LABELS[s.status] + "</span>" +
              "</div>" +
            "</div>" +
            "<h3>" + s.name + "</h3>" +
            '<p class="svc-promise">' + s.promise + "</p>" +
            '<p class="svc-get">' + s.get + "</p>" +
            '<div class="svc-meta">' +
              metaRow("user-check", "Who it is for", s.who) +
              metaRow("hand-heart", "Delivered by", s.delivery) +
            "</div>" +
          "</article>"
        );
      }).join("");

      sec.innerHTML =
        '<div class="wrap">' +
          '<div class="pillar-head">' +
            '<div class="pillar-head-text reveal">' +
              '<span class="p-index">' + p.index + " / Pillar</span>" +
              "<h2>" + p.title + "</h2>" +
              '<p class="p-tag">' + p.tagline + "</p>" +
              '<p class="p-blurb">' + p.blurb + "</p>" +
            "</div>" +
            '<figure class="pillar-head-art reveal">' +
              '<img src="' + p.img + '" alt="' + p.title + ' at InDe." width="1024" height="704" loading="lazy" decoding="async" />' +
            "</figure>" +
          "</div>" +
          '<div class="svc-grid">' + cards + "</div>" +
        "</div>";

      host.appendChild(sec);
    });

    function metaRow(icon, label, val) {
      return (
        '<div class="svc-meta-row">' + svg(icon) +
        "<div><b>" + label + ":</b> <span>" + val + "</span></div></div>"
      );
    }
  }

  /* ---- reveal on scroll ---- */
  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var el = e.target;
          var sibs = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
          el.style.transitionDelay = Math.min(sibs * 70, 350) + "ms";
          el.classList.add("in");
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    items.forEach(function (el) { io.observe(el); });
  }

  /* ---- word rotator ---- */
  function initRotator() {
    var el = document.getElementById("rotator");
    if (!el) return;
    var words = ["settle", "work", "grow", "belong"];
    var i = 0;
    if (reduce) { el.textContent = words[0]; return; }
    setInterval(function () {
      el.style.opacity = "0";
      el.style.transform = "translateY(6px)";
      el.style.transition = "opacity .3s, transform .3s";
      setTimeout(function () {
        i = (i + 1) % words.length;
        el.textContent = words[i];
        el.style.opacity = "1";
        el.style.transform = "none";
      }, 320);
    }, 2400);
  }

  /* ---- nav scroll state + mobile menu (with Escape + focus) ---- */
  function initNav() {
    var nav = document.getElementById("siteNav");
    var toggle = document.getElementById("navToggle");
    var onScroll = function () { nav.classList.toggle("scrolled", window.scrollY > 12); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    if (!toggle) return;

    function closeMenu(focusToggle) {
      nav.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
      if (focusToggle) toggle.focus();
    }
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      if (open) { var first = nav.querySelector(".nav-links a"); if (first) first.focus(); }
    });
    nav.querySelectorAll(".nav-links a").forEach(function (a) {
      a.addEventListener("click", function () { closeMenu(false); });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("menu-open")) closeMenu(true);
    });
  }

  /* ---- pillar jump-nav (aria-current, scroll-spy) ---- */
  function initPillarTabs() {
    var tabs = document.querySelectorAll(".pill[data-pillar]");
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (t) { t.setAttribute("aria-current", "false"); });
        tab.setAttribute("aria-current", "true");
        var target = document.getElementById("pillar-" + tab.dataset.pillar);
        if (target) target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      });
    });
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            var id = e.target.id.replace("pillar-", "");
            tabs.forEach(function (t) {
              t.setAttribute("aria-current", t.dataset.pillar === id ? "true" : "false");
            });
          }
        });
      }, { threshold: 0.4 });
      document.querySelectorAll(".pillar").forEach(function (s) { io.observe(s); });
    }
  }

  /* ---- reading progress bar ---- */
  function initProgress() {
    var bar = document.getElementById("readProgress");
    if (!bar) return;
    var ticking = false;
    function paint() {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      var top = h.scrollTop || window.scrollY || 0;
      bar.style.inlineSize = (max > 0 ? Math.min(top / max, 1) * 100 : 0) + "%";
      ticking = false;
    }
    function onScroll() {
      if (!ticking) { ticking = true; window.requestAnimationFrame(paint); }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    paint();
  }

  /* ---- back to top ---- */
  function initToTop() {
    var btn = document.getElementById("toTop");
    if (!btn) return;
    var onScroll = function () { btn.classList.toggle("show", (window.scrollY || 0) > 700); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
      var brand = document.querySelector(".site-nav .brand");
      if (brand) brand.focus({ preventScroll: true });
    });
  }

  /* ---- honest live-vs-building tally, built from the data ---- */
  function initTally() {
    if (typeof PILLARS === "undefined") return;
    var nav = document.querySelector(".pillar-nav");
    if (!nav) return;
    var total = 0, live = 0;
    PILLARS.forEach(function (p) {
      p.services.forEach(function (s) { total++; if (s.status === "live") live++; });
    });
    var building = total - live;
    var el = document.createElement("p");
    el.className = "svc-tally";
    el.innerHTML =
      '<span class="t-strong">' + total + " services in all</span>" +
      '<span class="sr-only">. </span>' +
      '<span class="t-live"><span class="t-dot" aria-hidden="true"></span>' + live + " live today</span>" +
      '<span class="sr-only">, </span>' +
      '<span class="t-building"><span class="t-dot" aria-hidden="true"></span>' + building + " building now</span>" +
      '<span class="sr-only">. </span>' +
      "<span>Each card tells you which.</span>";
    nav.insertAdjacentElement("afterend", el);
  }

  /* ---- boot ---- */
  buildPillars();
  paintStaticIcons();
  initReveal();
  initRotator();
  initNav();
  initPillarTabs();
  initProgress();
  initToTop();
  initTally();
})();
