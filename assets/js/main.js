/* ===========================
   Mwanga Mental Health Assessment Hub
   main.js - Vanilla JS
   =========================== */

(function () {
  'use strict';

  /* ---------- Emergency Banner Dismiss ---------- */
  function initEmergencyBanner() {
    var banner = document.querySelector('.emergency-banner');
    if (!banner) return;
    var btn = banner.querySelector('.emergency-banner__dismiss');
    if (btn) {
      btn.addEventListener('click', function () {
        banner.style.display = 'none';
      });
    }
  }

  /* ---------- Cookie Banner ---------- */
  function initCookieBanner() {
    var banner = document.getElementById('cookie-banner');
    if (!banner) return;
    if (localStorage.getItem('mwanga_cookies_accepted') === 'true') {
      banner.classList.add('hidden');
      return;
    }
    banner.classList.remove('hidden');
    var acceptBtn = banner.querySelector('.cookie-banner__accept');
    if (acceptBtn) {
      acceptBtn.addEventListener('click', function () {
        localStorage.setItem('mwanga_cookies_accepted', 'true');
        banner.classList.add('hidden');
      });
    }
  }

  /* ---------- Sticky Header Scroll ---------- */
  function initStickyHeader() {
    var header = document.querySelector('.site-header');
    if (!header) return;
    function onScroll() {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Active Nav Link ---------- */
  function initActiveNav() {
    var currentPath = window.location.pathname.replace(/\/$/, '') || '/index.html';
    // Normalise: /index.html -> /index.html, /about.html -> /about.html
    var links = document.querySelectorAll('.desktop-nav a, .mobile-menu__nav a');
    links.forEach(function (link) {
      var href = link.getAttribute('href').replace(/\/$/, '') || '/index.html';
      // Handle both root and index.html
      var isCurrent = false;
      if (currentPath === '' || currentPath === '/' || currentPath.endsWith('/index.html')) {
        isCurrent = href === 'index.html' || href === './index.html' || href === '/';
      } else {
        isCurrent = currentPath.endsWith(href);
      }
      if (isCurrent) {
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  /* ---------- Mobile Menu ---------- */
  function initMobileMenu() {
    var toggle = document.querySelector('.mobile-menu-toggle');
    var menu = document.getElementById('mobile-menu');
    var closeBtn = document.querySelector('.mobile-menu__close');
    var backdrop = menu ? menu.querySelector('.mobile-menu__backdrop') : null;

    if (!toggle || !menu) return;

    function openMenu() {
      menu.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      // Focus the close button
      if (closeBtn) closeBtn.focus();
    }

    function closeMenu() {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      toggle.focus();
    }

    toggle.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    if (backdrop) backdrop.addEventListener('click', closeMenu);

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('open')) {
        closeMenu();
      }
    });

    // Close when nav link clicked
    var menuLinks = menu.querySelectorAll('.mobile-menu__nav a');
    menuLinks.forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }

  /* ---------- Mobile Sticky CTA Show/Hide ---------- */
  function initMobileCta() {
    var cta = document.querySelector('.mobile-cta');
    if (!cta) return;
    var lastScrollY = 0;
    function onScroll() {
      var currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        cta.classList.add('hidden');
      } else {
        cta.classList.remove('hidden');
      }
      lastScrollY = currentScrollY;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Accordion ---------- */
  function initAccordion() {
    var items = document.querySelectorAll('.accordion__item');
    items.forEach(function (item) {
      var trigger = item.querySelector('.accordion__trigger');
      if (!trigger) return;
      trigger.addEventListener('click', function () {
        var isOpen = item.classList.contains('open');
        // Close all siblings
        var parent = item.parentElement;
        if (parent) {
          parent.querySelectorAll('.accordion__item').forEach(function (sibling) {
            sibling.classList.remove('open');
            var btn = sibling.querySelector('.accordion__trigger');
            if (btn) btn.setAttribute('aria-expanded', 'false');
            var content = sibling.querySelector('.accordion__content');
            if (content) content.setAttribute('aria-hidden', 'true');
          });
        }
        if (!isOpen) {
          item.classList.add('open');
          trigger.setAttribute('aria-expanded', 'true');
          var content = item.querySelector('.accordion__content');
          if (content) content.setAttribute('aria-hidden', 'false');
        }
      });
    });
  }

  /* ---------- Tabs ---------- */
  function initTabs() {
    var tabLists = document.querySelectorAll('.tabs__list');
    tabLists.forEach(function (tabList) {
      var triggers = tabList.querySelectorAll('.tabs__trigger');
      var container = tabList.parentElement;
      var panels = container ? container.querySelectorAll('.tabs__panel') : [];

      triggers.forEach(function (trigger) {
        trigger.addEventListener('click', function () {
          var target = trigger.getAttribute('data-tab');
          // Deactivate all
          triggers.forEach(function (t) {
            t.classList.remove('active');
            t.setAttribute('aria-selected', 'false');
          });
          panels.forEach(function (p) {
            p.classList.remove('active');
            p.setAttribute('aria-hidden', 'true');
          });
          // Activate clicked
          trigger.classList.add('active');
          trigger.setAttribute('aria-selected', 'true');
          var panel = container.querySelector('#' + target);
          if (panel) {
            panel.classList.add('active');
            panel.setAttribute('aria-hidden', 'false');
          }
        });
      });
    });
  }

  /* ---------- Simple Form Validation ---------- */
  function initForms() {
    var forms = document.querySelectorAll('.form');
    forms.forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var successEl = form.querySelector('.form-success');
        if (successEl) {
          form.style.display = 'none';
          successEl.style.display = 'flex';
        }
      });
    });
  }

  /* ---------- Init All ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    initEmergencyBanner();
    initCookieBanner();
    initStickyHeader();
    initActiveNav();
    initMobileMenu();
    initMobileCta();
    initAccordion();
    initTabs();
    initForms();
  });
})();
