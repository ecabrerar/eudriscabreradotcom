/*
	Twenty by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

  activeMenu();

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');

	// Breakpoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '981px',   '1280px' ],
			narrow:    [ '841px',   '980px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000,
			offset: function() { return $header.height() + 10; }
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			expandMode: (browser.mobile ? 'click' : 'hover')
		});

	// Nav Panel.

		// Button.
			$(
				'<div id="navButton">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

		// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
			if (browser.os == 'wp' && browser.osVersion < 10)
				$('#navButton, #navPanel, #page-wrapper')
					.css('transition', 'none');

	// Header.
		if (!browser.mobile
		&&	$header.hasClass('alt')
		&&	$banner.length > 0) {

			$window.on('load', function() {

				$banner.scrollex({
					bottom:		$header.outerHeight(),
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt reveal'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			});

		}

    $(".collapsible .collapsible-header").click(function() {

         var x = $(this).closest('div').next('.collapsible-body')[0];

        var height = $(x).css( "height" );


        if(height=="0px"){
           $(x).css({"height":"auto"});
           $(this).addClass('toggle-down');
        }else {
          $(x).css({"height":"0px"});
          $(this).removeClass('toggle-down');
        }


    });

 function activeMenu() {
  var path = window.location.pathname;
  path = path.replace(/\/$/, "");
  path = decodeURIComponent(path);

  $("#nav > ul.nav-menu a").each(function () {
      var href = $(this).attr('href');

      if (path.substring(0, href.length) === href) {
          $(this).closest('li').addClass('current');
      }

  });
}

var $window = $(window);
var $videoWrap = $('.video-wrap');
var $video = $('.video');
var videoHeight = $video.outerHeight();

$window.on('scroll',  function() {
	
  var windowScrollTop = $window.scrollTop();
  var videoBottom = videoHeight + $videoWrap.offset().top;

  if (windowScrollTop > videoBottom) {
	$videoWrap.height(videoHeight);
	$video.addClass('stuck');
  } else {
	$videoWrap.height('auto');
	$video.removeClass('stuck');
  }
});

})(jQuery);
