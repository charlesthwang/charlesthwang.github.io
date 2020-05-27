(function ($) {
  $(document).ready(function () {

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    $(window).scroll(function() {
      if ($(this).scrollTop() > 800 ) {
        $('.scroll-top:hidden').stop(true, true).fadeIn();
      } else {
        $('.scroll-top').stop(true, true).fadeOut();
      }
    });

    $(function () { 
      $('.scroll-top').click(function() { 
        $('html,body').animate({ 
          scrollTop: $('.top').offset().top 
        }, '1000'); 
        return false;
      });
    });

  });
})(jQuery);