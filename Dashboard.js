parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"To2v":[function(require,module,exports) {
function e(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function a(e,a){for(var n=0;n<a.length;n++){var t=a[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function n(e,n,t){return n&&a(e.prototype,n),t&&a(e,t),e}var t=function(){function a(){e(this,a),this.selectors={panel:"[data-dashboard-panel]"}}return n(a,[{key:"init",value:function(){var e=this;this.url=document.location.pathname,this.$panels=$(this.selectors.panel),this.$panels.each(function(a,n){e.triggerPanelReadyEvent($(n))}),this.triggerDashboardReadyEvent(),this.setupAutoRefresh()}},{key:"getPanelByKey",value:function(e){return this.$panels.filter("[data-key='".concat(e,"']")).first()}},{key:"triggerDashboardReadyEvent",value:function(){$(document).trigger("dashboard:ready")}},{key:"triggerPanelReadyEvent",value:function(e){var a=e.data("panel");$(document).trigger("dashboard:panelReady",{$element:e,panel:a})}},{key:"setupAutoRefresh",value:function(){var e=this;this.$panels.each(function(a,n){var t=$(n),r=parseInt(t.data("key"),10),i=parseInt(t.data("interval"),10);r>=0&&i>0&&(i=Math.max(2e3,i),setInterval(function(){e.refreshPanel(r)},i))})}},{key:"refreshPanel",value:function(e){var a=this,n=this.getPanelByKey(e);if(n){var t={key:e,panel:n.data("panel")};$.post(this.url,t).done(function(e){var t=$(e);n.html(t.html()),n.prop("className",t.prop("className")),a.triggerPanelReadyEvent(n)}).fail(function(){console.error("Error fetching panel contents")})}}}]),a}();$(function(){(new t).init()});
},{}]},{},["To2v"], null)