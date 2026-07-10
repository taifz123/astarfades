/**
 * Accessibility (A11y) Enhancements
 * Ensures WCAG AA compliance and improved keyboard navigation
 */

import { useEffect } from 'react';

export function A11y() {
  useEffect(() => {
    // Add focus-visible styles for keyboard navigation
    const style = document.createElement('style');
    style.textContent = `
      /* Focus visible for keyboard navigation */
      button:focus-visible,
      a:focus-visible,
      input:focus-visible,
      select:focus-visible,
      textarea:focus-visible {
        outline: 3px solid #D4AF37;
        outline-offset: 2px;
      }

      /* Skip to main content link */
      .skip-to-main {
        position: absolute;
        top: -40px;
        left: 0;
        background: #D4AF37;
        color: #000;
        padding: 8px 16px;
        text-decoration: none;
        z-index: 100;
        font-weight: bold;
      }

      .skip-to-main:focus {
        top: 0;
      }

      /* Improve color contrast for text */
      body {
        color: #F5F5F5;
        background-color: #0A0A0A;
      }

      /* Ensure sufficient color contrast for links */
      a {
        color: #D4AF37;
        text-decoration: underline;
      }

      a:visited {
        color: #B8860B;
      }

      /* Ensure sufficient color contrast for buttons */
      button {
        min-height: 44px;
        min-width: 44px;
      }

      /* Reduce motion for users who prefer it */
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }

      /* High contrast mode support */
      @media (prefers-contrast: more) {
        body {
          color: #FFFFFF;
          background-color: #000000;
        }

        button {
          border: 2px solid #D4AF37;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
}
