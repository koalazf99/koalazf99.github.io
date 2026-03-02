(function () {
  "use strict";

  function normalizePath(pathname) {
    if (!pathname) {
      return "/";
    }

    var clean = pathname.replace(/\/+$/, "");
    return clean === "" ? "/" : clean;
  }

  function setActiveLink(links, activeLink) {
    links.forEach(function (link) {
      var isActive = link === activeLink;
      if (link.parentElement) {
        link.parentElement.classList.toggle("is-current", isActive);
      }
      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function initNavActiveState() {
    var navRoot = document.querySelector("#site-nav .visible-links");
    if (!navRoot) {
      return;
    }

    var links = Array.prototype.slice.call(
      navRoot.querySelectorAll("a[data-nav-path]")
    );
    if (!links.length) {
      return;
    }

    var currentPath = normalizePath(window.location.pathname);
    var sectionLinks = links.filter(function (link) {
      return (
        link.dataset.navSection &&
        normalizePath(link.dataset.navPath) === currentPath
      );
    });
    var pageLinks = links.filter(function (link) {
      return (
        !link.dataset.navSection &&
        normalizePath(link.dataset.navPath) === currentPath
      );
    });

    if (pageLinks.length) {
      setActiveLink(links, pageLinks[0]);
    }

    if (!sectionLinks.length) {
      return;
    }

    function activateBySectionId(sectionId) {
      if (!sectionId) {
        return false;
      }

      var targetLink = sectionLinks.find(function (link) {
        return link.dataset.navSection === sectionId;
      });
      if (!targetLink) {
        return false;
      }

      setActiveLink(links, targetLink);
      return true;
    }

    var sections = sectionLinks
      .map(function (link) {
        return document.getElementById(link.dataset.navSection);
      })
      .filter(Boolean);

    if (!sections.length) {
      return;
    }

    var hashId = window.location.hash.replace("#", "");
    if (!activateBySectionId(hashId)) {
      activateBySectionId(sections[0].id);
    }

    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          var visibleEntries = entries
            .filter(function (entry) {
              return entry.isIntersecting;
            })
            .sort(function (a, b) {
              return b.intersectionRatio - a.intersectionRatio;
            });

          if (visibleEntries.length) {
            activateBySectionId(visibleEntries[0].target.id);
          }
        },
        {
          rootMargin: "-30% 0px -55% 0px",
          threshold: [0.15, 0.4, 0.7]
        }
      );

      sections.forEach(function (section) {
        observer.observe(section);
      });
    }

    window.addEventListener("hashchange", function () {
      activateBySectionId(window.location.hash.replace("#", ""));
    });
  }

  function initMastheadScrollState() {
    var masthead = document.querySelector(".masthead");
    if (!masthead) {
      return;
    }

    function update() {
      masthead.classList.toggle("is-scrolled", window.scrollY > 8);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initNavActiveState();
    initMastheadScrollState();
  });
})();
