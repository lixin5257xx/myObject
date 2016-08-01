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
				$(".proPage a").eq(n-1).addClass("active").siblings().removeClass("active");
			}
		} else {
			if (!$('.div1').is(":animated")) {
				n=1;
				$('.div1').css({'margin-left':'0px'}).animate({'margin-left':'-400px'},500);
				$(".proPage a").eq(0).addClass("active").siblings().removeClass("active");
			}
		}
	}
	var time = setInterval(carouselFigure, 3000)
	$(".proPage a").hover(function () {
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
	$(".prev-icon").on("click", function () {
	
		var index = $(".proPage a.active").index();
		n = index-1;
		if (n != -1) {
			
			if (!$('.div1').is(":animated")) {
				$(".div1").animate({marginLeft: -(n+1) * liW + "px"}, 600);
				$(".proPage a").eq(n).addClass("active").siblings().removeClass("active");
			}
			
		} else {
			if (!$('.div1').is(":animated")) {
				$('.div1').css({'margin-left':-(liLength+1)*liW+'px'}).animate({'margin-left':-(liLength+0)*liW+'px'},500);
				
				$(".proPage a").eq(liLength-1).addClass("active").siblings().removeClass("active");
			}
		}
	
	})
	$(".next-icon").on("click", function () {
	
		var index = $(".proPage a.active").index();
	
		n = index+1;
		if (n < liLength) {
			if (!$('.div1').is(":animated")) {
				n++
				$(".div1").animate({marginLeft: -n * liW + "px"}, 600);
				$(".proPage a").eq(n-1).addClass("active").siblings().removeClass("active");
				
			}
		} else {
			if (!$('.div1').is(":animated")) {
				n=1;
				$('.div1').css({'margin-left':'0px'}).animate({'margin-left':'-400px'},500);
				$(".proPage a").eq(0).addClass("active").siblings().removeClass("active");
			}
		}
	})
	$(".prev-icon").hover(function () {
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

	$(".next-icon,.div1 li").hover(function () {
		clearInterval(time)
	}, function () {
		
		time = setInterval(carouselFigure, 3000)
	})
}
})()









