// ==UserScript==
// @name         MyGirl - New features
// @namespace
// @version      1.00
// @author       BreatFR
// @description  @description New features for MyGirl
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