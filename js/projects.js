/* ==========================================================
   PROJECTS — edit this list to add, change or remove projects.
   You never need to touch index.html to update projects.
   Every entry becomes a card in the grid (4 per row on laptops).

   Fields (only "title" is required):
     title         Project name
     description   One or two short sentences on what it is
     category      Short domain label, e.g. "FinTech"
     organization  "TruKKer Technologies", "Client project", "Personal project"…
     role          Your role, e.g. "Full development lifecycle"
     technologies  List of tech used
     link          Full https:// link. The whole card becomes clickable.
                   Leave "" (or leave it out) for no link.
     linkLabel     Text for the link, e.g. "Google Play" (default)
     image         Optional screenshot path, e.g. "assets/images/app.png"

   Order on the page follows the order below — strongest first.
   Empty fields are skipped automatically.
   ========================================================== */

const projects = [
  {
    title: "TruKKer Partner",
    description: "App for fleet owners and drivers on TruKKer, the MENA region's largest digital freight platform: load discovery, booking and live trip tracking.",
    category: "Logistics",
    organization: "TruKKer",
    role: "Leading Android development",
    technologies: ["Kotlin", "Java", "MVVM", "Google Maps", "Firebase", "Retrofit"],
    link: "https://play.google.com/store/apps/developer?id=TruKKer+Technologies",
    linkLabel: "TruKKer on Google Play"
  },
  {
    title: "Spare8",
    description: "Micro-investing app that automatically invests the spare change from digital transactions into gold.",
    category: "FinTech",
    organization: "Client project",
    role: "Full development lifecycle",
    technologies: ["Kotlin", "Paytm", "Augmont", "Firebase"],
    link: "https://play.google.com/store/apps/details?id=com.spare8",
    linkLabel: "Google Play"
  },
  {
    title: "Patches: Grid Logic Puzzle",
    description: "Logic puzzle with 500 handcrafted levels, a Daily Challenge and an untimed Zen Mode. Fully offline.",
    category: "Indie game",
    organization: "Personal project",
    role: "Design, development and publishing",
    technologies: [], // TODO: add your stack, e.g. "Kotlin", "Jetpack Compose"
    link: "https://play.google.com/store/apps/details?id=com.game.patches.puzzle",
    linkLabel: "Google Play"
  },
  {
    title: "Focus & Catch: Reflex Game",
    description: "Arcade reflex game: catch the blocks that match your color and build combos as the pace speeds up.",
    category: "Indie game",
    organization: "Personal project",
    role: "Design, development and publishing",
    technologies: [], // TODO: add your stack
    link: "https://play.google.com/store/apps/details?id=com.game.focuscatch",
    linkLabel: "Google Play"
  },
  {
    title: "TheCypha", category: "Social music", organization: "Client project", role: "Full development lifecycle",
    description: "Social music app for creating and sharing music, with real-time collaborative singing.",
    technologies: ["Kotlin", "FFmpeg", "Firebase", "PayPal"]
  },
  {
    title: "Novique", category: "HealthTech", organization: "Client project", role: "Full development lifecycle",
    description: "India's first online, physician-supervised Type 2 diabetes reversal clinic.",
    technologies: ["Java", "Firebase"]
  },
  {
    title: "Car7araj", category: "Marketplace", organization: "Client project", role: "Full development lifecycle",
    description: "Buy and sell new or used cars across the UAE and Gulf countries.",
    technologies: ["Kotlin", "Firebase", "AWS", "PayPal", "Payfort"]
  },
  {
    title: "Intersign", category: "Accessibility", organization: "Client project", role: "Full lifecycle, supporting",
    description: "Live sign-language interpretation between deaf users and service providers.",
    technologies: ["Kotlin", "Firebase", "QuickBlox"]
  },
  {
    title: "Faldax", category: "Crypto", organization: "Client project", role: "Full development lifecycle",
    description: "Cryptocurrency exchange to trade, send, receive and track a portfolio with live charts.",
    technologies: ["Kotlin", "Socket.IO", "AWS", "Firebase"]
  },
  {
    title: "LiveTube", category: "Media", organization: "Client project", role: "Full lifecycle, supporting",
    description: "Lets anyone go live from their phone and report breaking news.",
    technologies: ["Java", "OpenTok", "Firebase"]
  },
  {
    title: "Didoi", category: "Services", organization: "Client project", role: "Full development lifecycle",
    description: "Book massage therapists at home, hotel or office, with in-app chat and payments.",
    technologies: ["Java", "Stripe", "Firebase"]
  },
  {
    title: "OrangePipes", category: "Events", organization: "Client project", role: "Full development lifecycle",
    description: "Build a personal calendar of events and share upcoming plans with followers.",
    technologies: ["Kotlin", "Java", "Firebase"]
  },
  {
    title: "Last Wishes", category: "Lifestyle", organization: "Client project", role: "Full development lifecycle",
    description: "Record your last wishes and save them for the people closest to you.",
    technologies: ["Kotlin", "Firebase"]
  },
  {
    title: "Fruitpunch", category: "Kids music", organization: "Client project", role: "Supporting developer",
    description: "Family-focused music streaming with songs curated by experts for young families.",
    technologies: ["Kotlin", "ExoPlayer", "Firebase"]
  },
  {
    title: "B-HIT", category: "Social video", organization: "Client project", role: "Supporting developer",
    description: "Short-video platform with solo and duet posts, plus video ads for businesses.",
    technologies: ["Kotlin", "FFmpeg", "AWS", "Firebase"]
  },
  {
    title: "IQChain", category: "Commerce", organization: "Client project", role: "Supporting developer",
    description: "Buy coupons in the app and redeem them in stores.",
    technologies: ["Kotlin", "Payme", "Firebase"]
  }
];


/* ==========================================================
   RENDERING — you shouldn't need to edit below this line.
   ========================================================== */

(function () {
  "use strict";

  var ARROW = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>';

  function isUrl(v) { return typeof v === "string" && /^https?:\/\/\S+$/i.test(v.trim()); }
  function hasText(v) { return typeof v === "string" && v.trim() !== ""; }
  function cleanList(v) { return Array.isArray(v) ? v.filter(hasText) : []; }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function renderCard(p) {
    var li = el("li", "project-card reveal");
    var hasLink = isUrl(p.link);
    if (hasLink) li.classList.add("is-linked");

    if (hasText(p.image)) {
      var media = el("div", "project-media");
      var img = el("img");
      img.src = p.image.trim();
      img.alt = "Screenshot of " + p.title;
      img.loading = "lazy";
      img.width = 640; img.height = 360;
      img.addEventListener("error", function () { media.remove(); });
      media.appendChild(img);
      li.appendChild(media);
    }

    var body = el("div", "project-body");

    var top = el("div", "project-top");
    top.appendChild(el("span", "project-category", p.category || ""));
    if (hasText(p.organization)) top.appendChild(el("span", "project-org", p.organization));
    body.appendChild(top);

    var h3 = el("h3", "project-title");
    if (hasLink) {
      // The title link stretches over the whole card (see .card-link in CSS)
      var a = el("a", "card-link", p.title);
      a.href = p.link.trim();
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.setAttribute("aria-label", p.title + ": " + (p.linkLabel || "Google Play") + " (opens in a new tab)");
      h3.appendChild(a);
    } else {
      h3.textContent = p.title;
    }
    body.appendChild(h3);

    if (hasText(p.role)) body.appendChild(el("p", "project-role", p.role));
    if (hasText(p.description)) body.appendChild(el("p", "project-desc", p.description));

    var tech = cleanList(p.technologies);
    if (tech.length) {
      var tl = el("ul", "project-tech");
      tl.setAttribute("aria-label", "Technologies");
      tech.forEach(function (t) { tl.appendChild(el("li", "", t)); });
      body.appendChild(tl);
    }

    if (hasLink) {
      var foot = el("div", "project-links");
      var label = el("span", "project-link-label", p.linkLabel || "Google Play");
      label.insertAdjacentHTML("beforeend", ARROW); // static, trusted SVG
      label.setAttribute("aria-hidden", "true");
      foot.appendChild(label);
      body.appendChild(foot);
    }

    li.appendChild(body);
    return li;
  }

  function renderProjects() {
    var grid = document.getElementById("project-grid");
    if (!grid) return;
    var all = (typeof projects !== "undefined" && Array.isArray(projects) ? projects : [])
      .filter(function (p) { return p && hasText(p.title); });

    if (!all.length) { grid.appendChild(el("li", "empty-state", "Projects coming soon.")); return; }
    all.forEach(function (p) { grid.appendChild(renderCard(p)); });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderProjects);
  } else {
    renderProjects();
  }
})();
