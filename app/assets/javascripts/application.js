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

    // Function elem of input selector
    // target: string, selector to query document
    function get_elem(target) {
      return document.querySelector(target);
    }

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

    function removeClass(elem, classname) {
      elem.classList.remove(classname);
    }

    function addClass(elem, classname) {
      elem.classList.add(classname);
    }

    // Adds selected class to current page for nav styling.
    function selectedNav() {
      let pathRoot,
          current

      pathRoot = getRootPathname();
      current = get_elem(`.navMain a[href*="${pathRoot}"]`);
      addClass(current, 'selected');
    }


    function toggleClass(elem, classname) {
      if (elem.classList.contains(classname)) {
        removeClass(elem, classname);
      } else {
        addClass(elem, classname);
      }
    }

    function setToggleDisplay(targets) {
      targets.forEach((target) => {
        let elem = get_elem(target);
        if (elem) {
          elem.addEventListener('click', () => {
            toggleClass(elem, 'display_none');
          });
        }
      });
    }

    function display_search() {
      const search = get_elem('.search form');
      const search_btn = get_elem('.js_search_submit');
      const search_box = get_elem('.js_search_input');
      search_btn.addEventListener('click', () => {
          if (search_box) {
            addClass(search_box, 'remove-item');
            search_box.addEventListener('animationend', () => {
              search_box.remove();
            });
          } else {
            search.append("<div>HELLO</div>");
          }
      });
    }

    // Function to run on initialization
    function init() {
      selectedNav();
      display_search();
    }

    // Invoke init
    init();
  });
}(jQuery));