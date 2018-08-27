(function() {
  document.head.insertAdjacentHTML("beforeEnd", '<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Source+Code+Pro" ><link rel="stylesheet" href="//slymax.com/console/console.css">');
  document.body.insertAdjacentHTML("beforeEnd", '<div id="console-js" :class="{active:visible}" style="display:none"><div class="title" v-on:click="visible=!visible">CONSOLE.JS</div><ul id="console-logs"><li v-for="log in logs"><span :class="log.type">{{log.message}}</span></li></ul></div>');
  var app = new Vue({
    el: "#console-js",
    data: {
      logs: [],
      visible: true
    },
    methods: {
      update: function(message, type) {
        this.logs.push({
          "message": message,
          "type": type
        });
        setTimeout(function() {
          if (window.self === window.top) document.getElementById("console-logs").lastChild.scrollIntoView(false);
        }, 10);
      }
    }
  });
  window.console = {
    log: function(message) {
      app.update(message, "log");
    },
    info: function(message) {
      app.update(message, "info");
    },
    debug: function(message) {
      app.update(message, "debug");
    },
    error: function(message) {
      app.update(message, "error");
    },
    warn: function(message) {
      app.update(message, "warn");
    },
    clear: function() {
      app.logs = [];
    }
  };
  window.onerror = function(message) {
    app.update(message, "error");
  };
})();