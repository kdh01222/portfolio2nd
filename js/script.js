
$(function(){
	$("#gnb > ul > li").hover(
		function(){
			$(this).addClass("active");
			$(".menu_bg").addClass("active");
		},
		function(){
			$(this).removeClass("active");
			$(".menu_bg").removeClass("active");
		}
	);
	$("#gnb > ul > li > a").focusin(function(){
		if($("#header").hasClass("scrolled") == false) $("#header").addClass("scrolled");
		$(this).parent().addClass("active");
		$(".menu_bg").addClass("active");
	});
	$("#gnb li li:last-child a").focusout(function(){
		if($("#header").hasClass("scrolled") == true) $("#header").removeClass("scrolled");
		$(this).parent().parent().parent().removeClass("active");
		$(".menu_bg").removeClass("active");
	});

	var winT;
	var firstTop=true;

	$("#header").hover(
		function(){
			if($(this).hasClass("scrolled") == false) 
			$(this).addClass("scrolled");

		},
		function(){
			if($(this).hasClass("scrolled") == true && firstTop == true) 
			$(this).removeClass("scrolled");

		}


	);
	$(window).scroll(function(){
		winT=$(window).scrollTop();

		if(winT > 100){
			if($("#header").hasClass("scrolled") == false) $("#header").addClass("scrolled");
			firstTop=false;
		}
		else{
			if($("#header").hasClass("scrolled") == true) $("#header").removeClass("scrolled");
			firstTop=true;
		}
	});



	//메뉴 리사이징

	var winW;

	$("#header .tab").click(function(e){
		e.preventDefault();
		$("#total_menu").addClass("active")
						.css({opacity:0})
						.animate({opacity:1}, 100);
		$(".dim").addClass("active");
		$("body").addClass("fixed");
	});

	$("#total_menu a.close_btn").click(function(e){
		e.preventDefault();
		$("#total_menu").animate({opacity:0}, 300, function(){
			$(this).removeClass("active");
		});
		$(".dim").removeClass("active");
		$("body").removeClass("fixed");
	});

/* 	$(".dim").click(function(e){
		e.preventDefault();
		$("#total_menu").removeClass("active");
		$(".dim").removeClass("active")
		$("body").removeClass("fixed");
	}); */





	//메인 슬라이더

	var mainStatus="play";
	var mainTotal, mainCurrent;
	var mainSwiper=new Swiper(".mainSwiper", { // modified
		speed: 1200, // added
		effect: "fade", // added
		fadeEffect: { // added
			crossFade: true
		},
		loop: true, // added
		autoplay: { // added
			delay: 5000,
		},
		pagination: { // added
			el: ".swiper-pagination",
			type: "progressbar",

		},
		on: { // added
			init: function(){ //초기 생성되는 이벤트
				mainTotal=this.slides.length-2;
				mainCurrent=this.activeIndex;
				$(".main_slider .cunt .num").text(mainCurrent);
				$(".main_slider .cunt .tot").text(mainTotal);
			},
			touchEnd: function(){     //사용자가 스와이프를 마쳤을 경우 이벤트

				setTimeout(() => {
					if(mainStatus == "play"){
						mainSwiper.autoplay.start();
					}
				}, 10);
			},

			slideChange: function(){
				// console.log(this.slides.length, this.activeIndex);
				if(this.activeIndex <= mainTotal){
					mainCurrent=this.activeIndex;

					if(this.activeIndex == 0){
						mainCurrent=mainTotal;
					}
				}
				else{
					mainCurrent=1;
				}
				$(".main_slider .cunt .num").text(mainCurrent);
			},
		},
	});
	$(".main_slider .prev").click(function(e){ // added
		e.preventDefault();
		mainSwiper.slidePrev();
		setTimeout(() => {
			if(mainStatus == "play"){
				mainSwiper.autoplay.start();
			}
		}, 10);
	});
	$(".main_slider .next").click(function(e){ // added
		e.preventDefault();
		mainSwiper.slideNext();
		setTimeout(() => {
			if(mainStatus == "play"){
				mainSwiper.autoplay.start();
			}
		}, 10);
	});
	$("#pause_play").click(function(e){ /* added */
		e.preventDefault();
		if($(this).hasClass("play")){
			$(this).removeAttr("class");
			$(this).addClass("pause");
			$(this).text("pause");
			mainSwiper.autoplay.start();
			mainStatus="play";
		}
		else{
			$(this).removeAttr("class");
			$(this).addClass("play");
			$(this).text("play");
			mainSwiper.autoplay.stop();
			mainStatus="play";
		}
	});

	//디자인연구소 슬라이더

	var sub1Status="play";
	var sub1_swiper=new Swiper(".sub1_slider .swiper-container", {
		slidesPerView: 3, //
		spaceBetween: 10,
		pagination: {
			el: ".sub1_slider .swiper-pagination",
			// clickable: true, // deleted
			type: "progressbar"
		},
		/* navigation: { // added
			nextEl: ".sub1_slider .controller .next",
			prevEl: ".sub1_slider .controller .prev"
		}, */
		loop: true,
		autoplay: {
         disableOnInteraction: false,
         delay: 5000,
      },
		
 		breakpoints: {

			940: {
				slidesPerView: 4,
				spaceBetween: 10
			}
		},
		on: { // added
			touchEnd: function(){     //사용자가 스와이프를 마쳤을 경우 이벤트

				setTimeout(() => {
					if(sub1Status == "play"){
						sub1_Swiper.autoplay.start();
					}
				}, 10);
			},
		}
	});
	$(".sub1_slider .next").click(function(e){ // added
		e.preventDefault();
		sub1_swiper.slideNext();

	});
	$(".sub1_slider .prev").click(function(e){ // added
		e.preventDefault();
		sub1_swiper.slidePrev();

	});

	$("#pause2_play").click(function(e){ /* added */
		e.preventDefault();
		if($(this).hasClass("play")){
			$(this).removeAttr("class");
			$(this).addClass("pause");
			$(this).text("pause");
			sub1_swiper.autoplay.start();
			sub1Status="play";
		}
		else{
			$(this).removeAttr("class");
			$(this).addClass("play");
			$(this).text("play");
			sub1_swiper.autoplay.stop();
			sub1Status="play";
		}
	});



	//신규 매장 슬라이더

	var sub2Status="play";
	var sub2_swiper=new Swiper(".sub2_slider .swiper-container", {
		slidesPerView: 1,
		spaceBetween: 300,
		centeredSlides: true,
		initialSlide: 0,
		loopedSlides:4,
        loop: true,

		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},

		navigation: {
          nextEl: ".sub3_slider .swiper-container .swiper-button-next",
          prevEl: ".sub3_slider .swiper-container .swiper-button-prev",
        },

		
	});
	$(".sub2_slider .next").click(function(e){ // added
		e.preventDefault();
		sub2_swiper.slideNext();
		setTimeout(() => {
			if(sub2Status == "play"){
				sub2_swiper.autoplay.start();
			}
		}, 10);
	});
	$(".sub2_slider .prev").click(function(e){ // added
		e.preventDefault();
		sub2_swiper.slidePrev();
		setTimeout(() => {
			if(sub2Status == "play"){
				sub2_swiper.autoplay.start();
			}
		}, 10);
	});

	//카탈로그 슬라이더
	var sub3_swiper = new Swiper(".sub3_slider .swiper-container", {
        slidesPerView: 3,
        spaceBetween: 50,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
		navigation: {
          nextEl: ".sub3_slider .swiper-container .swiper-button-next",
          prevEl: ".sub3_slider .swiper-container .swiper-button-prev",
        },
		breakpoints: {
			940: {
				slidesPerView: 4,
				spaceBetween: 50
			}
		},
      });
});