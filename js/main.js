/* ============================================================
   主脚本：项目渲染 + 移动端菜单 + 导航滚动高亮
   ============================================================ */
(function () {
  "use strict";

  /* ---------- 1. 项目渲染（数据驱动，方便扩展） ---------- */
  const container = document.getElementById("projects");

  // 简易 HTML 转义，防止数据中的特殊字符破坏结构
  function esc(str) {
    return String(str).replace(/[&<>"']/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
    });
  }

  function renderProjects(items) {
    if (!container) return;
    container.innerHTML = items
      .map(function (project, i) {
        const tags = project.stack
          .map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; })
          .join("");

        // 偶数项反向排版形成交替层次
        const reverseClass = i % 2 === 1 ? " project--reverse" : "";
        const num = String(i + 1).padStart(2, "0");

        return (
          '<article class="project' +
          reverseClass +
          '">' +
          '<div class="project-media">' +
          '<img loading="lazy" src="' +
          esc(project.image) +
          '" alt="' +
          esc(project.name) +
          '" />' +
          "</div>" +
          '<div class="project-info">' +
          '<p class="project-num">PROJECT ' +
          num +
          "</p>" +
          '<h3 class="project-title">' +
          esc(project.name) +
          "</h3>" +
          '<p class="project-desc">' +
          esc(project.desc) +
          "</p>" +
          '<div class="project-tags">' +
          '<span class="tag tag--cat">' +
          esc(project.category) +
          "</span>" +
          tags +
          "</div>" +
          '<p class="project-date">完成于 <strong>' +
          esc(project.date) +
          "</strong></p>" +
          "</div>" +
          "</article>"
        );
      })
      .join("");
  }

  if (typeof projects !== "undefined") {
    renderProjects(projects);
  }

  /* ---------- 2. 移动端抽屉菜单 ---------- */
  const navToggle = document.getElementById("navToggle");
  const sidebar = document.getElementById("sidebar");

  function toggleMenu(force) {
    const open = typeof force === "boolean" ? force : !sidebar.classList.contains("open");
    sidebar.classList.toggle("open", open);
    document.body.classList.toggle("menu-open", open);
    navToggle.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  if (navToggle && sidebar) {
    navToggle.addEventListener("click", function () { toggleMenu(); });

    // 点击遮罩 / 侧栏链接后关闭菜单
    const navLinks = sidebar.querySelectorAll(".nav-link");
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () { toggleMenu(false); });
    });
    // 点击遮罩关闭（body::after 覆盖整个视口）
    document.body.addEventListener("click", function (e) {
      if (document.body.classList.contains("menu-open") && e.target === document.body) {
        toggleMenu(false);
      }
    });
    // 按 Esc 关闭
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") toggleMenu(false);
    });
  }

  /* ---------- 3. 滚动时高亮当前导航 ---------- */
  const sections = document.querySelectorAll(".section[id]");
  const navItems = document.querySelectorAll(".nav-link");

  function updateActiveLink() {
    const scrollPos = window.scrollY + 120;
    let currentId = "home";

    sections.forEach(function (section) {
      if (section.offsetTop <= scrollPos) {
        currentId = section.getAttribute("id");
      }
    });

    navItems.forEach(function (link) {
      link.classList.toggle("active", link.getAttribute("href") === "#" + currentId);
    });
  }

  let ticking = false;
  window.addEventListener("scroll", function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        updateActiveLink();
        ticking = false;
      });
      ticking = true;
    }
  });

  updateActiveLink();
})();