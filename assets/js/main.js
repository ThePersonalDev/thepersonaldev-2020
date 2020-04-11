(($, wp) => {
  $('.mobile-main-menu-hamburger').click(function () {
    $('body').toggleClass('mobile-main-menu-is-open')
  })
})(window.jQuery, window.wp)