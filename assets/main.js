// Mobile nav toggle
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { links.classList.remove("open"); });
    });
  }

  // FAQ accordion
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var q = item.querySelector(".faq-q");
    if (!q) return;
    q.addEventListener("click", function () {
      var isOpen = item.getAttribute("data-open") === "true";
      // close siblings within the same group for a tidier accordion
      var group = item.closest(".faq-list");
      if (group) {
        group.querySelectorAll(".faq-item").forEach(function (sib) {
          sib.setAttribute("data-open", "false");
          sib.querySelector(".faq-q").setAttribute("aria-expanded", "false");
        });
      }
      item.setAttribute("data-open", isOpen ? "false" : "true");
      q.setAttribute("aria-expanded", isOpen ? "false" : "true");
    });
  });

  // Contact form: no backend yet, so just show a friendly confirmation
  var form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var success = document.querySelector(".form-success");
      if (success) {
        success.classList.add("show");
        success.setAttribute("role", "status");
        success.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      form.reset();
    });
  }
});
