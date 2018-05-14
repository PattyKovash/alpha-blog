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

  // Dom manipulation code
  document.addEventListener('DOMContentLoaded', (e) => {

    function selectedNav(e) {
      console.log('e: ', e);
      console.log('this: ', this)
      let previous = document.querySelector('.navMain a.selected');
      let current = e.target;
      console.log('current: ', current);
      console.log('previos: ', previous);
      current.classList.add('selected');
      if (previous) {
        previous.classList.remove('selected');
        console.log('previous classList: ', previous.classList);
      }
      console.log(document.querySelector('.navMain a.selected'));
    }

    let mainNav = document.querySelector('.navMain');
    mainNav.addEventListener('click', selectedNav);
  });



}(jQuery));