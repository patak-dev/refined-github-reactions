// ==UserScript==
// @name         Refined GitHub Reactions
// @license      MIT
// @homepageURL  https://github.com/patak-dev/refined-github-reactions
// @supportURL   https://github.com/patak-dev/refined-github-reactions
// @namespace    https://greasyfork.org/en/scripts/463344-refined-reactions
// @version      0.1.6
// @description  Enhances the GitHub Reactions page, making them more compact.
// @author       patak-dev
// @match        https://github.com/**
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
  'use strict'
  const issueOrPRContainer = ':is(.js-issues-results, .pull-discussion-timeline)`'
  const style = document.createElement('style')
  style.innerHTML = `
${issueOrPRContainer} .js-reactions-container {
  flex-direction: row !important;
  position: absolute;
  right: 5px;
  transform: translate(0px, -13px);
  z-index: 10;
}
${issueOrPRContainer} .js-reactions-container .js-reaction-group-button {
  background-color: var(--color-canvas-subtle);
}
${issueOrPRContainer} .TimelineItem--condensed {
  padding-bottom: 14px;
}
${issueOrPRContainer} .review-thread-component .timeline-comment-group  {
  padding-bottom: 26px;
}
${issueOrPRContainer} .review-thread-component .js-reactions-container {
  transform: translate(0px, -10px);
}
${issueOrPRContainer} .js-reactions-container .details-overlay[open] > summary::before {
  top: -400px;
  right: -400px;
  bottom: -400px;
  left: -400px;
}
.discussion-timeline-actions {
  border-top: 0;
}
`
  document.head.appendChild(style)
})()
