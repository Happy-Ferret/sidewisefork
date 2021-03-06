/* Copyright (c) 2012 Joel Thornton <sidewise@joelpt.net> See LICENSE.txt for license details. */

if ("false" != localStorage.reportUsageStatistics) {
  var _gaq = _gaq || [];
  initGA();
  reportPageView()
}

function initGA() {
  _gaq.push(["_setAccount", "UA-33231974-1"]);
  _gaq.push(["_gat._anonymizeIp"]);
  var a = document.createElement("script");
  a.type = "text/javascript";
  a.async = !0;
  a.src = "https://ssl.google-analytics.com/ga.js";
  var b = document.getElementsByTagName("script")[0];
  b.parentNode.insertBefore(a, b)
}

function reportEvent(a, b, c, d, e) {
  "true" == localStorage.reportUsageStatistics && ("true" == localStorage.loggingEnabled && console.log("reporting event", a, b, c, d, e), _gaq.push(["_trackEvent", a, b, c, d, e || !1]))
}

function reportPageView(a) {
  "true" == localStorage.reportUsageStatistics && (a = a || location.pathname, "true" == localStorage.loggingEnabled && console.log("reporting page view", a), _gaq.push(["_trackPageview", a]))
};
