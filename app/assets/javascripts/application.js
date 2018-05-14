// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require jquery_ujs
//= require activestorage
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .

(function($) {

  // "turbolinks:load" event is a workaround for a Turbolinks
  // bug where JS code only worked on page reload.
  document.addEventListener("turbolinks:load", function() {

    // Function that returns current URL root pathname
    function getRootPathname() {
      let pathname,
          pathRoot,
          indEnd

      pathname = window.location.pathname;

      if (pathname === '/') {
        pathRoot = pathname;
      } else {
        indEnd = pathname.indexOf('/', 1);
        pathRoot = pathname.slice(0, indEnd);
      }
      return pathRoot;
    }

    // Adds selected class to current page for nav styling.
    function selectedNav() {
      let pathRoot,
          current

      pathRoot = getRootPathname();
      current = document.querySelector(`.navMain a[href*="${pathRoot}"]`);
      current.classList.add('selected');
    }

    // Function to run on initialization
    function init() {
      selectedNav();
    }

    // Invoke init
    init();
  });
}(jQuery));