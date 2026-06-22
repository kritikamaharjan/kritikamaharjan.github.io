document.documentElement.classList.remove("no-js");
document.documentElement.classList.add("js-enabled");

document.addEventListener("DOMContentLoaded", () => {
  const emailAddress = "kritika9775@gmail.com";

  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const copyEmail = document.getElementById("copyEmail");
  const copyMessage = document.getElementById("copyMessage");
  const currentYear = document.getElementById("currentYear");
  const backToTop = document.getElementById("backToTop");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        event.preventDefault();
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  if (copyEmail && copyMessage) {
    copyEmail.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(emailAddress);
        copyMessage.textContent = "Email copied to clipboard.";
      } catch (error) {
        copyMessage.textContent = emailAddress;
      }

      setTimeout(() => {
        copyMessage.textContent = "";
      }, 2500);
    });
  }

  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observerInstance.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12
      }
    );

    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }

  window.addEventListener("scroll", () => {
    if (!backToTop) {
      return;
    }

    if (window.scrollY > 500) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});
