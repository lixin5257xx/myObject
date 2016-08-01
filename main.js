 /*轮播*/
(function(){
	var time;
	var num = 4;
	var firstLi = $('.ul1 li').eq(0).clone();
	
	var lastLi = $('.ul1 li').eq($('.ul1 li').length-1).clone();
	
	$('.ul1 li').eq(0).before(lastLi);
	
	$('.ul1').append(firstLi);
	
	var liLength = $('.div1 li').length -2;
	
	var liW = $('.div1 li').outerWidth();
	
	$(".div1").css({marginLeft: -liW + "px"})
	
	
if(liLength>=2){
	var n = 1;
	function carouselFigure() {
		if (n < liLength) {
			if (!$('.div1').is(":animated")) {
				n++;
				$('.div1').animate({'margin-left':-n*liW+'px'},500);
				$(".ul2 li").eq(n-1).addClass("active").siblings().removeClass("active");
			}
		} else {
			if (!$('.div1').is(":animated")) {
				n=1;
				$('.div1').css({'margin-left':'0px'}).animate({'margin-left':'-400px'},500);
				$(".ul2 li").eq(0).addClass("active").siblings().removeClass("active");
			}
		}
	}
	var time = setInterval(carouselFigure, 3000)
	$(".ul2 li").hover(function () {
		var index = $(this).index();
		n = index+1;
		$(this).addClass("active").siblings().removeClass("active");
		if (!$('.div1').is(":animated")) {
			$(".div1").animate({marginLeft: -n * liW + "px"});
		}
		clearInterval(time)
	}, function () {
		n--;
		time = setInterval(carouselFigure, 3000)
	})
	$(".prev").on("click", function () {
	
		var index = $(".ul2 li.active").index();
		n = index-1;
		if (n != -1) {
			
			if (!$('.div1').is(":animated")) {
				$(".div1").animate({marginLeft: -(n+1) * liW + "px"}, 600);
				$(".ul2 li").eq(n).addClass("active").siblings().removeClass("active");
			}
			
		} else {
			if (!$('.div1').is(":animated")) {
				$('.div1').css({'margin-left':-(liLength+1)*liW+'px'}).animate({'margin-left':-(liLength)*liW+'px'},500);
				
				$(".ul2 li").eq(liLength-1).addClass("active").siblings().removeClass("active");
			}
		}
	
	})
	$(".next").on("click", function () {
	
		var index = $(".ul2 li.active").index();
	
		n = index+1;
		if (n < liLength) {
			if (!$('.div1').is(":animated")) {
				n++
				$(".div1").animate({marginLeft: -n * liW + "px"}, 600);
				$(".ul2 li").eq(n-1).addClass("active").siblings().removeClass("active");
				
			}
		} else {
			if (!$('.div1').is(":animated")) {
				n=1;
				$('.div1').css({'margin-left':'0px'}).animate({'margin-left':'-400px'},500);
				$(".ul2 li").eq(0).addClass("active").siblings().removeClass("active");
			}
		}
	})
	$(".prev").hover(function () {
		clearInterval(time)
	}, function () {
		if(n!=-1){
			n++;
			time = setInterval(carouselFigure, 3000);	
		}else{
			n=liLength;
			time = setInterval(carouselFigure, 3000);
		}
		
	})

	$(".next,.div1 li").hover(function () {
		clearInterval(time)
	}, function () {
		
		time = setInterval(carouselFigure, 3000)
	})
}
})()









