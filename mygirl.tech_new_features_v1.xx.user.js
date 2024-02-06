// ==UserScript==
// @name         MyGirl - New features
// @description  New features for MyGirl
// @namespace    https://app.mygirl.tech/*
// @version      1.00
// @author       BreatFR
// @match        https://app.mygirl.tech/*
// @icon         https://app.mygirl.tech/images/logo.png
// @license      GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
// ==/UserScript==

(function() {
    'use strict';

    // Add favicon
    var link = document.createElement('link');
    link.rel = 'shortcut icon';
    link.href = 'https://app.mygirl.tech/images/logo.png';
    link.type = 'image/x-icon';

    document.head.appendChild(link);
})();
