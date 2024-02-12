// ==UserScript==
// @name         MyGirl - New features
// @description  New features for MyGirl
// @namespace    https://github.com/breatfr/MyGirl
// @version      1.00
// @author       BreatFR
// @copyright    2023, BreatFR (https://breat.fr)
// @updateURL    https://raw.githubusercontent.com/breatfr/MyGirl/main/mygirl.tech_new_features_v1.xx.user.js
// @match        https://app.mygirl.tech/*
// @icon         https://app.mygirl.tech/images/logo.png
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
