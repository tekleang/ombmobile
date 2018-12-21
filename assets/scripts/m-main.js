$(document).ready(function(){
	var heightNav = $('#header nav').outerHeight();
	$('.main-wrapper').css({
		'padding-top': heightNav
	});
	

	function addToolMenu(){
		var signMenu = '+';
		$('ul.ul-menu').each(function(){
			var liMenu = $(this).find('li.li-menu');
			var ulSubmenu = liMenu.find('ul.ul-submenu');
			if (ulSubmenu) {
				ulSubmenu.parent().find('>a').append('<input class="txt-num-sign" type="hidden" value="1"><span class="sign-menu" style="width: 15px;display:block;float:right;text-align:right;">'+signMenu+'</span>');
				$('.sign-menu').parent('a').on('click',function(e){
					var valTxtNumSign = $(this).find('.txt-num-sign').val();
					$('.sign-menu').text('+');
					if (valTxtNumSign == 1) {
						$('.txt-num-sign').val(1);
						$(this).find('.sign-menu').text('-');
						$(this).find('.txt-num-sign').val(2);
					}else {
						$(this).find('.txt-num-sign').val(1);
					}

					$('ul.ul-submenu').stop().slideUp();
					$(this).parent().find('ul.ul-submenu').stop().slideToggle();
					e.preventDefault();
				});
			}
		});
	}


	function clickShow(){
		$('[data-parent]').each(function(){
			var styleBox = $(this).data('parent');
			var dataSign = $(this).find('[data-sign]');
			var arrSign,arrSign2;
			$(this).prepend('<input class="txt-num-sign2" type="hidden" value="1">');
			$(this).find('[data-clickshow]').wrap('<div style="cursor:pointer;position:relative;"></div>');
			if (dataSign.data('sign')) {
				arrSign = dataSign.data('sign');
				arrSign2 = arrSign.split(',');
				var paddingLeft = $(this).find('[data-clickshow]').css('paddingLeft');
				var paddingTop = $(this).find('[data-clickshow]').css('paddingTop');
				$(this).find('[data-clickshow]').append('<span class="sSign-show font-main-color" style="font-size:25px;position:absolute;right:'+paddingLeft+';top:'+paddingTop+';">'+arrSign2[0]+'</span>');
			}
			if ($("[data-boxcontent]")) {
				$("[data-boxcontent]").hide();
			}
			$(this).find("[data-clickshow]").on('click',function(){
				var dataParent = $(this).parents('[data-parent]');
				var dataClick = $(this).data('clickshow');
				var elementShow = dataParent.find('[data-boxcontent]');
				var dataShow = elementShow.data('boxcontent');
				var numSign = dataParent.find('.txt-num-sign2').val();
				if (arrSign2) {
					$('.sSign-show').html(arrSign2[0]);
					if (numSign == 1) {
						$('.txt-num-sign2').val(1);
						dataParent.find('.sSign-show').html(arrSign2[1]);
						dataParent.find('.txt-num-sign2').val(2);
					}else {
						dataParent.find('.sSign-show').html(arrSign2[0]);
						dataParent.find('.txt-num-sign2').val(1);
					}
				}
				if (dataParent) {//if dataParent was input in element
					if (dataShow == 'slideToggle') {//if you want to show as slide Toggle
						$('[data-boxcontent]').stop().slideUp();
						dataParent.find('[data-boxcontent]').stop().slideToggle();
					}
				}
			});
		});
	}

	function fullHeightScreen(){
		var amountHeaderH = '';
		var windowHight = $(window).height();
		var dataHeaderH = $("[data-headerh]").outerHeight();
		if (typeof dataHeaderH !== 'undefined') {
			amountHeaderH = dataHeaderH;
		}else {
			amountHeaderH = '';
		}
		$("[data-fullscreen]").each(function(){
			var fH = '';
			$("[data-fullscreen]").css({'height':windowHight-amountHeaderH +'px','width':'100%','overflow':'hidden'});
			$("[data-fullscreen]").find('img').css({
				'width':'100% !important'
			});
		});
	}




	$('#content .banner').slick({
        dots: true,
        dotsClass: 'dots-ecam',
        autoplay: true,
        autoplaySpeed: 6000,
        nextArrow: '<div class="arrow-right"><i class="fa fa-angle-right"></i></div>',
        prevArrow: '<div class="arrow-left"><i class="fa fa-angle-left"></i></div>',
    });
	$('#content .slick-testimonial').slick({
		dots: true,
        dotsClass: 'dots-ecam',
        autoplay: true,
        autoplaySpeed: 6000,
        
        centerMode: true,
		centerPadding: '60px',
		slidesToShow: 3,
		responsive: [
		{
		  breakpoint: 768,
		  settings: {
		    arrows: false,
		    centerMode: true,
		    centerPadding: '40px',
		    slidesToShow: 3
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
		    arrows: false,
		    centerMode: true,
		    centerPadding: '40px',
		    slidesToShow: 1
		  }
		}
		]
    });
    $('#footer .slick-partner').slick({
        dots: true,
        dotsClass: 'dots-ecam',
        autoplay: true,
        autoplaySpeed: 6000,
        arrows:false
    });

    $('.dots-ecam li button,.dots-ecam2 li button').text('');
	addToolMenu();
	// clickHumburger();
	fullHeightScreen();
	clickShow();
	
});