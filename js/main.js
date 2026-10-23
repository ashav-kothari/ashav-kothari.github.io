/* ==========================================================
   PROFILE LINKS — fill these in once and every GitHub,
   LinkedIn and Email link on the page updates.
   Leave a value as "" and that link is hidden everywhere.
   ========================================================== */
const PROFILE = {
  email: "ashav.kothari@gmail.com",
  linkedin: "", // e.g. "https://www.linkedin.com/in/your-handle/"
  github: ""    // e.g. "https://github.com/your-username"
};


/* ==========================================================
   Site behaviour — no need to edit below.
   ========================================================== */
(function () {
  "use strict";

  var root = document.documentElement;

  function isUrl(v) { return typeof v === "string" && /^https?:\/\/\S+$/i.test(v.trim()); }
  function isEmail(v) { return typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()); }

  /* ---------- Profile links ---------- */
  function applyProfileLinks() {
    var hrefs = {
      github: isUrl(PROFILE.github) ? PROFILE.github.trim() : "",
      linkedin: isUrl(PROFILE.linkedin) ? PROFILE.linkedin.trim() : "",
      email: isEmail(PROFILE.email) ? "mailto:" + PROFILE.email.trim() : ""
    };

    document.querySelectorAll("[data-profile]").forEach(function (node) {
      var key = node.getAttribute("data-profile");

      if (key === "email-text") {
        if (hrefs.email) {
          node.href = hrefs.email;
          node.textContent = PROFILE.email.trim();
        } else {
          node.remove();
        }
        return;
      }

      var href = hrefs[key];
      var link = node.tagName === "A" ? node : node.querySelector("a");
      if (!href || !link) { node.remove(); return; }
      link.href = href;
    });
  }

  /* ---------- Theme toggle ---------- */
  function currentTheme() {
    var set = root.getAttribute("data-theme");
    return set === "light" ? "light" : "dark"; // dark is the default look
  }

  function initTheme() {
    var btn = document.querySelector(".theme-toggle");
    if (!btn) return;

    function label() {
      var next = currentTheme() === "dark" ? "light" : "dark";
      btn.setAttribute("aria-label", "Switch to " + next + " theme");
    }
    label();

    btn.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      label();
    });

  }

  /* ---------- Mobile nav ---------- */
  function initNav() {
    var toggle = document.querySelector(".nav-toggle");
    var links = document.getElementById("nav-links");
    if (!toggle || !links) return;

    function close() {
      toggle.setAttribute("aria-expanded", "false");
      links.classList.remove("is-open");
    }

    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      links.classList.toggle("is-open", !open);
    });

    links.addEventListener("click", function (e) {
      if (e.target.closest("a")) close();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && links.classList.contains("is-open")) {
        close();
        toggle.focus();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 760) close();
    });
  }

  /* ---------- Header border + active section ---------- */
  function initScrollState() {
    var header = document.querySelector(".site-header");
    var onScroll = function () {
      if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    if (!("IntersectionObserver" in window)) return;
    var navLinks = {};
    document.querySelectorAll('.nav-links a[href^="#"]').forEach(function (a) {
      navLinks[a.getAttribute("href").slice(1)] = a;
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var link = navLinks[entry.target.id];
        if (!link) return;
        if (entry.isIntersecting) {
          Object.keys(navLinks).forEach(function (k) {
            navLinks[k].classList.remove("is-active");
            navLinks[k].removeAttribute("aria-current");
          });
          link.classList.add("is-active");
          link.setAttribute("aria-current", "true");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });

    document.querySelectorAll("main section[id]").forEach(function (s) { observer.observe(s); });
  }

  /* ---------- Gentle reveal on scroll ---------- */
  function initReveal() {
    var items = document.querySelectorAll(".section-head, .about-grid, .role, .skill-row, .contact, .reveal");
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach(function (n) { n.classList.add("is-visible"); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });

    items.forEach(function (n) {
      n.classList.add("reveal");
      io.observe(n);
    });
  }

  function init() {
    applyProfileLinks();
    initTheme();
    initNav();
    initScrollState();
    initReveal();
    var year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
