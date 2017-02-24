// JavaScript Document

jQuery(document).ready(function($){
	
	function checkDevice(){if(jQuery(".nav-header-right").hasClass("mobile")){return 1;}else{return 0;}}
	
	/***********************************************************
	Initialize Custom Scroll Bar
	************************************************************/
	var screenWidth = jQuery( window ).width();
	if(screenWidth<1024){jQuery(".nav-header-right").niceScroll();}
	
	
	/***********************************************************
	Dropdown Menu
	************************************************************/
	if (jQuery(".main-nav ul li")[0]) {
		jQuery('.main-nav ul li').hover(function (){
			jQuery('ul', this).stop(true,false).slideDown(100);
			jQuery('ul li ul', this).css("display","none");
		},function () {
			if(checkDevice()==0){jQuery('ul', this).stop(true,false).slideUp(100);}
		});
	}
	
	
	/***********************************************************
	Responsive Menu
	************************************************************/
	jQuery("#navbar-toggle").click(function(){
		if(jQuery(this).hasClass("collapsed"))
		{
			jQuery(this).removeClass("collapsed");
			jQuery(".nav-header-right").addClass("mobile");	
			jQuery("#navbar-toggle i").removeClass("fa-bars");	
			jQuery("#navbar-toggle i").addClass("fa-minus");
		}
		else
		{
			jQuery(this).addClass("collapsed");
			jQuery(".nav-header-right").removeClass("mobile");	
			jQuery("#navbar-toggle i").removeClass("fa-minus");
			jQuery("#navbar-toggle i").addClass("fa-bars");
		}
		jQuery(".nav-header-right").toggle("slow");
	});
	
	
	/***********************************************************
	Responsive Menu
	************************************************************/
	jQuery(".login-panel a").click(function(){
		if(jQuery(this).hasClass("open"))
		{
			jQuery(this).removeClass("open");
			jQuery(".dropdown-login").fadeOut("fast");
		}
		else
		{
			jQuery(this).addClass("open");
			jQuery(".dropdown-login").fadeIn("fast");
			
			/* Hide search box when login panel open */
			jQuery('.search-box input[type="text"]').stop().fadeOut(100);
			jQuery('.search-box .icon').removeClass("open");
			jQuery(".search-box").css("border-right","solid 1px #ebebeb");
		}
		return false;
	});
	jQuery("body").click(function() {
		if(checkDevice()==0){
			jQuery(".login-panel a").removeClass("open");
			jQuery(".dropdown-login").fadeOut("fast");
		}
	});
	jQuery('.dropdown-login').click(function(e) {
		e.stopPropagation();
	});
	
	jQuery(".dropdown-login form input[type='text']" || ".dropdown-login form input[type='password']").focus(function(){
		if(jQuery(this).val()=="Your email"){jQuery(this).val('');}
		if(jQuery(this).val()=="Your password"){jQuery(this).val(''); jQuery(this).attr("type","password");}
	});
	
	jQuery(".dropdown-login form input#password").blur(function(){
		if(jQuery(this).val()==""){jQuery(this).attr("type","text"); jQuery(this).val('Your password');}
	});
	
	jQuery(".dropdown-login form input[type='text']").blur(function(){
		if(jQuery(this).val()==""){jQuery(this).val('Your email');}
	});
	
	/* Search box */
	jQuery(".search-box .icon").click(function(){
		if(jQuery(this).hasClass("open"))
		{
			jQuery(this).removeClass("open");
			jQuery(this).parent('form').submit();
		}
		else
		{
			jQuery(this).addClass("open");
			jQuery(".search-box").css("border-right","solid 1px transparent");
			jQuery('.search-box input[type="text"]').stop().fadeIn(100, function(){jQuery(this).css("display","block");});
			
			/* Hide login panel when search box open */
			jQuery(".login-panel a").removeClass("open");
			jQuery(".dropdown-login").fadeOut("fast");
		}
	});
	jQuery("body").click(function() {
		if(checkDevice()==0){
			jQuery('.search-box input[type="text"]').stop().fadeOut(100);
			jQuery('.search-box .icon').removeClass("open");
			jQuery(".search-box").css("border-right","solid 1px #ebebeb");
		}
	});
	jQuery('.search-box').click(function(e) {
		e.stopPropagation();
	});
	jQuery(".search-box input[type='text']").focus(function(){
		if(jQuery(this).val()=="Search Here"){jQuery(this).val('');}
	});
	jQuery(".search-box input[type='text']").blur(function(){
		if(jQuery(this).val()==""){jQuery(this).val('Search Here');}
	});
	
	
	/***********************************************************
	Revolution Slider Initialization
	************************************************************/
	if (jQuery(".tp-banner")[0]) {
		var revSlider = jQuery('.tp-banner').show().revolution(
		{
			dottedOverlay:"none",
			delay:16000,
			startwidth:1170,
			startheight:632,
			hideThumbs:200,
			
			thumbWidth:100,
			thumbHeight:50,
			thumbAmount:5,
			
			navigationType:"bullet",
			navigationArrows:"solo",
			navigationStyle:"round",
			
			touchenabled:"on",
			onHoverStop:"on",
			
			swipe_velocity: 0.7,
			swipe_min_touches: 1,
			swipe_max_touches: 1,
			drag_block_vertical: false,
									
			parallax:"mouse",
			parallaxBgFreeze:"on",
			parallaxLevels:[7,4,3,2,5,4,3,2,1,0],
									
			keyboardNavigation:"off",
			
			navigationHAlign:"center",
			navigationVAlign:"bottom",
			navigationHOffset:0,
			navigationVOffset:20,
	
			soloArrowLeftHalign:"left",
			soloArrowLeftValign:"center",
			soloArrowLeftHOffset:20,
			soloArrowLeftVOffset:0,
	
			soloArrowRightHalign:"right",
			soloArrowRightValign:"center",
			soloArrowRightHOffset:20,
			soloArrowRightVOffset:0,
					
			shadow:0,
			fullWidth:"on",
			fullScreen:"off",
	
			spinner:"spinner4",
			
			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:-1,
	
			shuffle:"off",
			
			autoHeight:"off",						
			forceFullWidth:"off",						
									
									
									
			hideThumbsOnMobile:"off",
			hideNavDelayOnMobile:1500,						
			hideBulletsOnMobile:"off",
			hideArrowsOnMobile:"off",
			hideThumbsUnderResolution:0,
			
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			startWithSlide:0,
			videoJsPath:"rs-plugin/videojs/",
			fullScreenOffsetContainer: ""	
		});
		revSlider.bind('revolution.slide.onloaded', function() {
			jQuery(".main-slider .btn").css("display","block");
			jQuery(".main-slider .tp-banner .progress-section").css("display","block");
		});
	}
	
	
	/***********************************************************
	Google Map
	************************************************************/
	// if (jQuery("#projects-map")[0]) {
	// 	jQuery("#projects-map").gMap({
	// 		 maptype: google.maps.MapTypeId.ROADMAP, 
	// 		 zoom: 14, 
	// 		 markers: [{
	// 			 latitude: 51.52056138207458, 
	// 			 longitude: -0.6469490528106, 
	// 			 html: "<div class='map-info'><img src='assets/images/map_img_4.jpg' width='135' height='70' /><div><strong>New Animal Lab Campaign</strong> <br /> by Erin Bagwell <a href='#'>More about the project</a> </div><div class='clear'></div></div>", 
	// 			 popup: false,
	// 			 flat: true,
	// 			 icon: { 
	// 				 image: "assets/js/maps/icons/animals.png", 
	// 				 iconsize: [58, 67], 
	// 				 iconanchor: [15, 30], 
	// 				 shadow: "assets/js/maps/icons/icon-shadow.png", 
	// 				 shadowsize: [32, 37], 
	// 				 shadowanchor: null}
	// 				},
	// 				{
	// 			 latitude: 51.52577072273623, 
	// 			 longitude: -0.6651669788360596, 
	// 			 html: "<div class='map-info'><img src='assets/images/map_img_3.jpg' width='135' height='70' /><div><strong>Charity hospital</strong> <br /> by Erin Bagwell <a href='#'>More about the project</a> </div><div class='clear'></div></div>",
	// 			 popup: false, 
	// 			 flat: true, 
	// 			 icon: { 
	// 				 image: "assets/js/maps/icons/health.png", 
	// 				 iconsize: [58, 67], 
	// 				 iconanchor: [15, 30], 
	// 				 shadow: "assets/js/maps/icons/icon-shadow.png", 
	// 				 shadowsize: [32, 37], 
	// 				 shadowanchor: null}
	// 				},
	// 				{
	// 			 latitude: 51.5157072273623, 
	// 			 longitude: -0.6901669788360596, 
	// 			 html: "<div class='map-info'><img src='assets/images/map_img_2.jpg' width='135' height='70' /><div><strong>Help us to save the nature</strong> <br /> by Erin Bagwell <a href='#'>More about the project</a> </div><div class='clear'></div></div>",
	// 			 popup: false, 
	// 			 flat: true, 
	// 			 icon: { 
	// 				 image: "assets/js/maps/icons/home.png", 
	// 				 iconsize: [58, 67], 
	// 				 iconanchor: [15, 30], 
	// 				 shadow: "assets/js/maps/icons/icon-shadow.png", 
	// 				 shadowsize: [32, 37], 
	// 				 shadowanchor: null}
	// 				},
	// 				{
	// 			 latitude: 51.51650228812931, 
	// 			 longitude: -0.6114151477813721, 
	// 			 html: "<div class='map-info'><img src='assets/images/map_img_1.jpg' width='135' height='70' /><div><strong>We Can Build Our Church</strong> <br /> by Erin Bagwell <a href='#'>More about the project</a> </div><div class='clear'></div></div>",
	// 			 popup: true, 
	// 			 flat: true, 
	// 			 icon: { 
	// 				 image: "assets/js/maps/icons/community.png", 
	// 				 iconsize: [58, 67], 
	// 				 iconanchor: [15, 30], 
	// 				 shadow: "assets/js/maps/icons/icon-shadow.png", 
	// 				 shadowsize: [32, 37], 
	// 				 shadowanchor: null}
	// 				} 
	// 			], 
	// 		 panControl: false,
	// 		 'infoWindow': null,
	// 		 zoomControl: true, 
	// 		 mapTypeControl: false,
	// 		 scaleControl: false, 
	// 		 streetViewControl: false, 
	// 		 scrollwheel: false, 
	// 		 styles: [{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"stylers":[{"hue":"#b8b8b8"},{"saturation":-100},{"gamma":1.50},{"lightness":12}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"lightness":24}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":57}]}], 
	// 		 onComplete: function() {
	// 			 // Resize and re-center the map on window resize event
	// 			 var gmap = jQuery("#projects-map").data('gmap').gmap;
	// 			 window.onresize = function(){
	// 				 google.maps.event.trigger(gmap, 'resize');
	// 				 jQuery("#projects-map").gMap('fixAfterResize');
	// 			 };
	// 		}
	// 	});
	// }
	
	// if (jQuery("#contact-map")[0]) {
	// 	jQuery("#contact-map").gMap({
	// 		 maptype: google.maps.MapTypeId.ROADMAP, 
	// 		 zoom: 14, 
	// 		 markers: [{
	// 			 latitude: 51.52056138207458, 
	// 			 longitude: -0.6469490528106, 
	// 			 html: "<div class='map-info'><div><strong>2 Abc Road City, London UK AB12CD</strong> <br /> +44 1234 567890 <a href='#'>demo@stackthemes.net</a> </div><div class='clear'></div></div>", 
	// 			 popup: false,
	// 			 flat: true,
	// 			 icon: { 
	// 				 image: "assets/js/maps/icons/location.png", 
	// 				 iconsize: [58, 67], 
	// 				 iconanchor: [15, 30], 
	// 				 shadow: "assets/js/maps/icons/icon-shadow.png", 
	// 				 shadowsize: [32, 37], 
	// 				 shadowanchor: null}
	// 				}
	// 			], 
	// 		 panControl: false,
	// 		 'infoWindow': null,
	// 		 zoomControl: true, 
	// 		 mapTypeControl: false,
	// 		 scaleControl: false, 
	// 		 streetViewControl: false, 
	// 		 scrollwheel: false, 
	// 		 styles: [{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"stylers":[{"hue":"#b8b8b8"},{"saturation":-100},{"gamma":1.50},{"lightness":12}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"lightness":24}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":57}]}], 
	// 		 onComplete: function() {
	// 			 // Resize and re-center the map on window resize event
	// 			 var gmap = jQuery("#contact-map").data('gmap').gmap;
	// 			 window.onresize = function(){
	// 				 google.maps.event.trigger(gmap, 'resize');
	// 				 jQuery("#contact-map").gMap('fixAfterResize');
	// 			 };
	// 		}
	// 	});
	// }
	
	
	/***********************************************************
	Pie Progress Initialization
	************************************************************/
	if (jQuery(".pie_progress")[0]) {
		jQuery('.pie_progress').asPieProgress({
			'namespace': 'pie_progress'
		});
		jQuery(window).on("load scroll", function(d,h) {
			jQuery(".pie_progress").each(function(i) {
				a = jQuery(this).offset().top + jQuery(this).height();
				b = jQuery(window).scrollTop() + (jQuery(window).height()+250);
				if (a < b) {
					jQuery(this).asPieProgress('start');
				}
			});
		});
		/*if(jQuery(window).scrollTop()>300)
		{
			jQuery('.pie_progress').asPieProgress('start');
		}
		else
		{
			jQuery('.tp-banner .pie_progress').asPieProgress('start');
			jQuery(window).scroll(function() {jQuery('.pie_progress').asPieProgress('start');});
		}*/
	}
	
	
	/***********************************************************
	Parallax Section
	************************************************************/
	if (jQuery(".parallax")[0]) {
		var parallax = document.querySelectorAll(".parallax"),speed = 0.5;
		window.onscroll = function() {
			[].slice.call(parallax).forEach(function(el,i) {
				var windowYOffset = window.pageYOffset,elBackgrounPos = "50% " + (windowYOffset * speed) + "px";
				el.style.backgroundPosition = elBackgrounPos;
			});
		};
	}
	
	
	/***********************************************************
	Logo Carousels
	************************************************************/
	if (jQuery(".logo-carousels")[0]) {
		jQuery('.logo-carousels').bxSlider({
			slideWidth: 175,
			minSlides: 5,
			maxSlides: 5,
			moveSlides: 1,
			slideMargin: 15,
			infiniteLoop: true,
			pager: false,
			auto: true
		});
	}
	
	
	/***********************************************************
	Newsletter
	************************************************************/
	if (jQuery(".newsletter")[0]) {
		jQuery(".newsletter form input[type='text']").focus(function(){
			if(jQuery(this).val()=="Enter your e-mail"){jQuery(this).val('');}
		});
		jQuery(".newsletter form input[type='text']").blur(function(){
			if(jQuery(this).val()==""){jQuery(this).val('Enter your e-mail');}
		});
	}
	
	
	/***********************************************************
	Convert images to grayscale for IE only
	************************************************************/
	jQuery(window).load(function() {
		var ua = window.navigator.userAgent;
		var msie = ua.indexOf("MSIE");
		if (msie > 0) 
		{
			if (jQuery(".backers-avatar")[0]) {jQuery('.backers-avatar ul li img').hoverizr({effect:"grayscale",speedIn:"slow"});}
		}
	});
	
	
	/***********************************************************
	ToolTip
	************************************************************/
	if (jQuery(".backers-avatar")[0]) {
		jQuery('.backers-avatar ul li').tooltip({placement:'auto', viewport:{ "selector": ".backers-avatar ul", "padding": 5 }});
	}
	
	
	/***********************************************************
	Event Count Down
	************************************************************/
	if (jQuery(".time-countdown")[0]) {
		jQuery(".time-countdown").each(function() {
			var year = parseFloat(jQuery(this).attr("data-year"));
	  		var month = parseFloat(jQuery(this).attr("data-month"));
	  		var day = parseFloat(jQuery(this).attr("data-day"));
	  		var final_date = new Date();
			final_date = new Date(year, month-1, day);		  
			jQuery(this).countdown({until: final_date, format: 'DHMS', padZeroes:true});
		});
	}
	
	
	/***********************************************************
	Carousels
	************************************************************/
	if (jQuery(".project-slider-cnt")[0]) {
		jQuery('.project-slider-cnt').bxSlider({
			minSlides: 1,
			maxSlides: 1,
			moveSlides: 1,
			slideMargin: 15,
			infiniteLoop: true,
			pager: false,
			auto: false,
			nextSelector: '#slider-next',
			prevSelector: '#slider-prev',
			nextText: '<i class="fa fa-angle-right"></i>',
			prevText: '<i class="fa fa-angle-left"></i>'
		});
	}
	
	if (jQuery(".project-images")[0]) {
		jQuery('.project-images').bxSlider({
			minSlides: 1,
			maxSlides: 1,
			moveSlides: 1,
			slideMargin: 15,
			mode: 'fade',
			autoHover: true,
			infiniteLoop: true,
			pager: false,
			auto: true
		});
	}
	  
	if (jQuery(".blog-posts-slider")[0]) {
		var screenWidth = window.innerWidth;
		var slidewidth, maxslides;
		var cntWidth = jQuery(".blog-posts").css("width");
		cntWidth = parseFloat(cntWidth.replace("px", ""));
		if(screenWidth<=450){maxslides=1; slidewidth=(cntWidth-30);}
		else if(screenWidth<=1199){maxslides=2; slidewidth=((cntWidth-60)/2);}
		else{maxslides=3; slidewidth=((cntWidth-90)/3);}
		
		var blogSlider = jQuery('.blog-posts-slider').bxSlider({
			minSlides: 1,
			maxSlides: maxslides,
			moveSlides: 1,
			slideMargin: 0,
			slideWidth: slidewidth,
			infiniteLoop: true,
			pager: false,
			auto: false,
			nextSelector: '#blog-next',
			prevSelector: '#blog-prev',
			nextText: '<i class="fa fa-angle-right"></i>',
			prevText: '<i class="fa fa-angle-left"></i>'
		});
		
		jQuery(window).resize(function() {
			var screenWidth = window.innerWidth;
			var slidewidth, maxslides;
			var cntWidth = jQuery(".blog-posts").css("width");
			cntWidth = parseFloat(cntWidth.replace("px", ""));
			if(screenWidth<=450){maxslides=1; slidewidth=(cntWidth-30);}
			else if(screenWidth<=1199){maxslides=2; slidewidth=((cntWidth-60)/2);}
			else{maxslides=3; slidewidth=((cntWidth-90)/3);}
			
			blogSlider.reloadSlider({
				minSlides: 1,
				maxSlides: maxslides,
				moveSlides: 1,
				slideMargin: 0,
				slideWidth: slidewidth,
				infiniteLoop: true,
				pager: false,
				auto: false,
				nextSelector: '#blog-next',
				prevSelector: '#blog-prev',
				nextText: '<i class="fa fa-angle-right"></i>',
				prevText: '<i class="fa fa-angle-left"></i>'
			});
		});
	}
	
	if (jQuery(".tweets-slider")[0]) {
		var tweetSlider = jQuery('.tweets-slider').bxSlider({
			minSlides: 3,
			maxSlides: 3,
			moveSlides: 1,
			slideMargin: 0,
			mode: 'vertical',
			infiniteLoop: true,
			pager: false,
			auto: true
		});
		jQuery(window).resize(function() {
			tweetSlider.reloadSlider({
				minSlides: 3,
				maxSlides: 3,
				moveSlides: 1,
				slideMargin: 0,
				mode: 'vertical',
				infiniteLoop: true,
				pager: false,
				auto: true
			});
		});
	}
	
	if (jQuery(".stories-slider")[0]) {
		jQuery('.stories-slider').bxSlider({
			minSlides: 1,
			maxSlides: 1,
			moveSlides: 1,
			slideMargin: 15,
			mode: 'fade',
			autoHover: true,
			infiniteLoop: true,
			pager: false,
			auto: true
		});
	}
	
	if (jQuery(".pslider")[0]) {
		jQuery('.pslider').bxSlider({
			minSlides: 1,
			maxSlides: 1,
			moveSlides: 1,
			slideMargin: 15,
			mode: 'fade',
			autoHover: true,
			infiniteLoop: true,
			pager: false,
			auto: true
		});
	}
	
	
	/***********************************************************
	Scroll to an element
	************************************************************/
	if (jQuery(".sub-menu ul li a")[0]) {
		jQuery(".sub-menu ul li a").click(function (e){
			var element = jQuery(this).attr("href");
			if (element.indexOf("#") >= 0)
			{
				e.preventDefault();
				jQuery('html, body').animate({scrollTop: jQuery(element).offset().top}, 500);
			}
		});
	}
	
	
	/***********************************************************
	Animated Numbers
	************************************************************/
	var statsDone = true;
	jQuery(window).on("load scroll", function() {
		jQuery(".facts-figures ul li span").each(function(i) {
			a = jQuery(this).offset().top + jQuery(this).height();
			b = jQuery(window).scrollTop() + jQuery(window).height();
			statSep = jQuery.animateNumber.numberStepFactories.separator(',');
			attrStat = jQuery(this).attr('data-count');
			if (a < b) {
				jQuery(this).animateNumber({ 
						number: attrStat,
						numberStep: statSep
					}, 2000
				);
			}
		});
	});
	
	
	/***********************************************************
	Select Box, Radio inputs and checkbox
	************************************************************/
	jQuery("select").each(function() {
		jQuery(this).selectbox();
	});
	jQuery('input').iCheck({
		checkboxClass: 'icheckbox_minimal-blue',
		radioClass: 'iradio_minimal-blue'
	});
	 
	 
	/***********************************************************
	Toggle Search Projects
	************************************************************/
	if (jQuery("#filter-toggle")[0]) {
		jQuery("#filter-toggle").click(function(e){
			if($('section.filter').css('display') == 'none')
		 	{
			 	jQuery('section.filter').stop(true,false).slideDown(300);
		 	}
			 else
		 	{
			 	jQuery('section.filter').stop(true,false).slideUp(300);
		 	}
	 	});
	}
	
	
	/***********************************************************
	Content Tabs
	************************************************************/
	jQuery('.pstabs li a').click(function (e) {
	  e.preventDefault();
	  jQuery(this).tab('show');
	});
	
	
	/***********************************************************
	Costs Bar Chart
	************************************************************/
	if (jQuery(".costs-detail")[0]) {
		var totalCost = 0;
		var costsArray = [];
		var colorArray = [];
		var barChart = "";
		jQuery(".costs-detail ul li").each(function() {
			var iColor = jQuery(this).attr("data-color");
			var cost = jQuery(this).attr("data-cost");
			var iTag = document.createElement('i');
			jQuery(iTag).css("background","#"+iColor);
			jQuery(iTag).prependTo(this);
			
			colorArray.push(iColor);
			costsArray.push(parseFloat(cost));
			totalCost = totalCost+parseFloat(cost);
		});
		for(var i=0; i<=(costsArray.length-1); i++)
		{
			var width = (costsArray[i]/totalCost)*100;
			barChart = barChart+'<div style="background-color:#'+colorArray[i]+'; float:left; width:'+width+'%; height:40px;"></div>';
		}
		barChart = barChart+'<div style="clear:both;"></div>';
		jQuery("#total-barChart").css({"border-radius":"5px", "overflow":"hidden"});
		jQuery("#total-barChart").html(barChart);
	}
	
	/***********************************************************
	Bootstrap Collapse
	************************************************************/
	$('.collapse').collapse({ toggle: false });
	
	$(document).on('click', '.accordion-toggle', function(e) {
		event.preventDefault();
		
		var parent_1 = $(this).parent('div');
		var parent_2 = $(parent_1).parent('div');
		var parent_3 = $(parent_2).parent('div');
		var parent_id = $(parent_3).attr('id');
		
		$('#'+parent_id+'.accordion').find('.accordion-body').collapse('hide');
		$(this).parent().next().collapse('show');
	});
	
	
	/***********************************************************
	On Click Return False
	************************************************************/
	$(document).on('click', '.perk-wrapper ul li.perk-disabled a, .start-project .title ul li a', function(e) {
		return false;
	});
	
	/***********************************************************
	Start Project PlaceHolder & Values on focus and blur
	************************************************************/
	// $('.start-content form input[type="text"], .start-content form textarea, .form-ui input[type="text"], .form-ui textarea').each(function() {
	// 	var inputValue = $(this).attr('placeholder');
	// 	var input = $(this);
	// 	$(this).val(inputValue);
	// });
	
	// $(document).on('focus', '.start-content form input[type="text"], .start-content form textarea, .form-ui input[type="text"], .form-ui textarea', function(e) {
	// 	var inputValue = $(this).attr('placeholder');
	// 	if($(this).val()==inputValue)
	// 	{
	// 		$(this).val('');
	// 	}
	// });
	
	// $(document).on('blur', '.start-content form input[type="text"], .start-content form textarea, .form-ui input[type="text"], .form-ui textarea', function(e) {
	// 	var inputValue = $(this).attr('placeholder');
	// 	if($(this).val()=='')
	// 	{
	// 		$(this).val(inputValue);
	// 	}
	// });
	
	
	/***********************************************************
	Project Gallery Type
	************************************************************/
	$(document).on('click', '.select-gallery-type ul li', function(e) {
		var galtype = $(this).attr('data-galerytype');
		$(".select-gallery-type ul li").removeClass('active');
		$(this).addClass('active');
		if(galtype=='vid')
		{
			$("#images-inputs").css("display","none");
			$("#video-inputs").css("display","block");
		}
		else if(galtype=='img')
		{
			$("#images-inputs").css("display","block");
			$("#video-inputs").css("display","none");
		}
	});
	/***********************************************************
	Project Gallery File Selection
	************************************************************/
	$(document).on('click', '.selectimage input[type="text"], .selectimage button', function(e) {
		var parentcnt = $(this).parent('div').attr('id');
		$('#'+parentcnt+' input[type="file"]').click();
		$(this).blur();
	});
	$(document).on('change', 'input[type="file"]', function(e) {
		var filename = $(this).val().replace(/C:\\fakepath\\/i, '');
		var parentcnt = $(this).parent('div').attr('id');
		$('#'+parentcnt+' input[type="text"]').val(filename);
	});
	
});

/***********************************************************
Form Wizard Next Back Function
************************************************************/

function moveform(btn, id)
{
	$('.form-wizard').each(function() {
		thisid = $(this).attr('id');
		if(thisid==id){$(this).css("display","block");}else{$(this).css("display","none");}
	});
	
	thisDataLink = $(btn).attr('data-link');
	
	var formstep = 0;
	
	$('.start-project .title ul li').each(function() {
		if(formstep==0)
		{
			if(thisDataLink==$(this).attr('data-link'))
			{
				formstep = 1;
				$(this).addClass("current");
			}
			else
			{
				$(this).removeClass("current");
				$(this).addClass("done");
			}
		}
		else
		{
			$(this).removeClass("done");
			$(this).removeClass("current");
		}
	});
}

/***********************************************************
Add More Perks
************************************************************/

function addperk()
{
	var countPerks = $('.moreperks').length
	if(countPerks >= 3) {
		swal({
		  	title: "Info!",
		  	text: "No more 5 perks per project",
		  	type: "info",
		  	confirmButtonText: "Okay"
		});
		return false;
	}	
	var perkelEments = $("#perk-elements").html();
	$("#add-more-perks").append("<div class='moreperks'>"+perkelEments+"</div>");
}

function addimage()
{
	var imageNumber = parseFloat($('#imgNumber').val());
	$('#imgNumber').val(imageNumber+1);
	var imageEments = '<div class="form-left selectimage image-fld-add" id="imgupload-'+(imageNumber+1)+'"> <input type="text" value="" class="form-control" placeholder="Upload Image"> <button type="button" class="imageUploadBtn">Choose File</button> <input type="file" name="galleryimg[]" /> </div>';
	$("#add-image-field-cnt").append(imageEments);
}


/***********************************************************
Animated Numbers Plugin
************************************************************/
(function(d){var p=function(b){return b.split("").reverse().join("")},l={numberStep:function(b,a){var e=Math.floor(b);d(a.elem).text(e)}},h=function(b){var a=b.elem;a.nodeType&&a.parentNode&&(a=a._animateNumberSetter,a||(a=l.numberStep),a(b.now,b))};d.Tween&&d.Tween.propHooks?d.Tween.propHooks.number={set:h}:d.fx.step.number=h;d.animateNumber={numberStepFactories:{append:function(b){return function(a,e){var k=Math.floor(a);d(e.elem).prop("number",a).text(k+b)}},separator:function(b,a){b=b||" ";a=
a||3;return function(e,k){var c=Math.floor(e).toString(),s=d(k.elem);if(c.length>a){for(var f=c,g=a,l=f.split("").reverse(),c=[],m,q,n,r=0,h=Math.ceil(f.length/g);r<h;r++){m="";for(n=0;n<g;n++){q=r*g+n;if(q===f.length)break;m+=l[q]}c.push(m)}f=c.length-1;g=p(c[f]);c[f]=p(parseInt(g,10).toString());c=c.join(b);c=p(c)}s.prop("number",e).text(c)}}}};d.fn.animateNumber=function(){for(var b=arguments[0],a=d.extend({},l,b),e=d(this),k=[a],c=1,h=arguments.length;c<h;c++)k.push(arguments[c]);if(b.numberStep){var f=
this.each(function(){this._animateNumberSetter=b.numberStep}),g=a.complete;a.complete=function(){f.each(function(){delete this._animateNumberSetter});g&&g.apply(this,arguments)}}return e.animate.apply(e,k)}})(jQuery);