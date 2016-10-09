$(function(){
	//banner轮播图制作效果
	$('#banner ul li').each(function(index, element) {
		$(element).css('background','url(images/banner'+(index+1)+'.jpg) no-repeat center 0');
	});
	//轮播自动播放
	function autoPlay(){	
		var num=0;
		var timer=null;
		var shijian=3000;
		
		timer=setInterval(sport,shijian)	
		function sport(){	
			num++;
			if( num>3 ){ num=0 }
			$('#banner ol li').eq(num).addClass('current').siblings().removeClass('current');
			$('#banner ul').animate({left:(-num*100)+'%'},800)
			
		}
		$('#banner').hover(function(e) {
			clearInterval(timer)
			
		},function(){	
			clearInterval(timer)
			timer=setInterval(sport,shijian)
		});
		$('#banner ol li').click(function(){
		var index=$(this).index();	
		$(this).addClass('current').siblings().removeClass('current');
		$('#banner ul').animate({left:(-index*100)+'%'},800);
		num=index;
	})
	}
	autoPlay();	
	
	//文本框效果	
		$('.sear_c .txt').focus(function(e) {
		var textnum=$('.sear_c .txt').val();
		if(textnum=='输入相关信息进行搜索'){	
			$('.sear_c .txt').val('');
		} 
		});
		$('.sear_c .txt').blur(function(e) {
			var textnum=$('.sear_c .txt').val();
			if(textnum==''){	
				$('.sear_c .txt').val('输入相关信息进行搜索');
			} 
		});
	//nav切换菜单
	$(".firstli").mouseenter(function(){
        $(".fly_hide").show();
    }).mouseleave(function(event) {
        $(".fly_hide,.fly_p").hide();
       
    });
    $(".fly_hide01 dl").mouseenter(function(event) {
        event.stopPropagation();
        $(this).find(".fly_p").show().parent().parent().siblings().children("dd").children(".fly_p").hide();
    });
	$(".title1 li").eq(3).mouseenter(function(){
        $(".fly_hide02").show();
    }).mouseleave(function(event) {
        $(".fly_hide02").hide();
    });
	$(".title1 li").eq(4).mouseenter(function(){
        $(".fly_hide03").show();
    }).mouseleave(function(event) {
        $(".fly_hide03").hide();
       
    });
	$(".title1 li").eq(5).mouseenter(function(){
        $(".fly_hide04").show();
    }).mouseleave(function(event) {
        $(".fly_hide04").hide();
       
    });
	$(".title1 li").eq(6).mouseenter(function(){
        $(".fly_hide05").show();
    }).mouseleave(function(event) {
        $(".fly_hide05").hide();
       
    });
	$(".title1 li").eq(7).mouseenter(function(){
        $(".fly_hide06").show();
    }).mouseleave(function(event) {
        $(".fly_hide06").hide();
       
    });


})

	