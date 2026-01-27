/* HØLY Nav: hover-open mega menu (desktop only)
   - Keeps Dawn behavior on mobile (click)
   - Opens on hover + focus, closes on mouseleave + Escape
*/

(function () {
  const MQ_DESKTOP = window.matchMedia('(min-width: 990px)');
  const OPEN_DELAY = 40;
  const CLOSE_DELAY = 160;

  function isDesktop() {
    return MQ_DESKTOP.matches;
  }

  function setup() {
    const header = document.querySelector('.section-header');
    if (!header) return;

    const detailsList = header.querySelectorAll('details');
    if (!detailsList.length) return;

    // Only touch mega-menu details (Dawn adds class on the mega variant)
    const megaDetails = header.querySelectorAll('details.mega-menu');
    if (!megaDetails.length) return;

    megaDetails.forEach((d) => {
      d.dataset.holyHover = '1';

      let openT = null;
      let closeT = null;

      const clearTimers = () => {
        if (openT) window.clearTimeout(openT);
        if (closeT) window.clearTimeout(closeT);
        openT = null;
        closeT = null;
      };

      const open = () => {
        if (!isDesktop()) return;
        clearTimers();

        // Close other open mega menus
        megaDetails.forEach((other) => {
          if (other !== d) other.removeAttribute('open');
        });

        openT = window.setTimeout(() => {
          d.setAttribute('open', '');
          d.dataset.holyHoverOpen = 'true';
        }, OPEN_DELAY);
      };

      const close = () => {
        if (!isDesktop()) return;
        clearTimers();
        closeT = window.setTimeout(() => {
          d.removeAttribute('open');
          d.dataset.holyHoverOpen = 'false';
        }, CLOSE_DELAY);
      };

      // Hover behavior
      d.addEventListener('mouseenter', open);
      d.addEventListener('mouseleave', close);

      // Keyboard/accessibility: open when focused, close when focus leaves
      d.addEventListener('focusin', open);
      d.addEventListener('focusout', (e) => {
        // If focus moved outside this <details>, close
        if (!d.contains(e.relatedTarget)) close();
      });

      // ESC closes
      d.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          d.removeAttribute('open');
          d.dataset.holyHoverOpen = 'false';
          const summary = d.querySelector('summary');
          summary && summary.focus();
        }
      });
    });

    // If we resize down to mobile, close everything
    MQ_DESKTOP.addEventListener('change', () => {
      if (!isDesktop()) {
        megaDetails.forEach((d) => {
          d.removeAttribute('open');
          d.dataset.holyHoverOpen = 'false';
        });
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setup);
  } else {
    setup();
  }
})();
