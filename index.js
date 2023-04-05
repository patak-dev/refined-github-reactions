// ==UserScript==
// @name         Refined GitHub Reactions
// @license      MIT
// @homepageURL  https://github.com/patak-dev/refined-github-reactions
// @supportURL   https://github.com/patak-dev/refined-github-reactions
// @namespace    https://greasyfork.org/en/scripts/463344-refined-reactions
// @version      0.1.1
// @description  Enhances the GitHub Reactions page, making them more compact.
// @author       patak-dev
// @match        https://github.com/**
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
  'use strict';

  const style = document.createElement('style')
  style.innerHTML = `
.js-reactions-container {
flex-direction: row !important;
position: absolute;
right: 5px;
transform: translate(0px, -13px);
}
.js-reactions-container .js-reaction-group-button {
background-color: var(--color-canvas-subtle);
}
.discussion-timeline-actions {
border-top: 0;
}
`
  document.head.appendChild(style)
})();