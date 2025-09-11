import { useEffect } from "react";

const FlashEffect = () => {
  useEffect(() => {
    const handleClick = (e) => {
      // clicked element কি data-flash element এর ভিতরে?
      const isInsideFlash = e.target.closest("[data-flash]");
      if (isInsideFlash) return; // যদি button/NavLink click হয়, skip করবে

      // সব data-flash elements
      const flashables = Array.from(document.querySelectorAll("[data-flash]"));

      flashables.forEach((el) => {
        // যদি NavLink active থাকে (aria-current="page") বা active class থাকে, skip করবে
        if (
          el.classList.contains("active") ||
          el.getAttribute("aria-current") === "page"
        )
          return;

        const overlay = document.createElement("div");
        overlay.style.position = "absolute";
        overlay.style.top = "-2px";
        overlay.style.left = "-2px";
        overlay.style.right = "-2px";
        overlay.style.bottom = "-2px";
        overlay.style.backgroundColor = "rgba(165, 203, 247, 0.7)";
        overlay.style.border = "1px solid rgba(31, 76, 168, 0.5)";
        overlay.style.pointerEvents = "none";
        overlay.style.transition = "opacity 0.5s ease-in-out";
        overlay.style.opacity = "1";
        overlay.style.borderRadius = "2px";

        if (getComputedStyle(el).position === "static") {
          el.style.position = "relative";
        }

        el.appendChild(overlay);

        setTimeout(() => {
          overlay.style.opacity = "0";
          setTimeout(() => {
            if (overlay.parentElement) el.removeChild(overlay);
          }, 300);
        }, 300);
      });
    };

    document.body.addEventListener("click", handleClick);
    return () => document.body.removeEventListener("click", handleClick);
  }, []);

  return null;
};

export default FlashEffect;
