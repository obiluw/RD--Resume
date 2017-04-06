window.onload=function(){
/*顶部导航区域*/
   $(".top_nav a").click(function(){
       $(".top_nav a").removeClass("curr_a");
	   $(this).attr("class","curr_a");
   })

/*******二级导航区域********/
	$(".nav_box>li").hover(function(){
	    $(this).children("ul").slideDown("fast");
		$(this).children("ul").css({
		    "z-index":1,
             "backgroundColor":"#fff"

		})
	},function(){
	    $(this).children("ul").slideUp("fast");
	});
    
/********轮播区域********/
    $(".photo_box").width(1440*($(".photo_box img").length));
	function run(){
	   $(".photo_box").animate({
	      marginLeft:-1440
	   },1000,function(){
		     $(".photo_box").css({
			    marginLeft:0
			 });
             $(".photo_box img:first").insertAfter($(".photo_box img:last"));
		  });
	}
	var timer=setInterval(run,3000);

    $(".photo_box").mouseover(function(){
	    clearInterval(timer);
	})
		
	$(".photo_box").mouseout(function(){
	    timer=setInterval(run,3000);
	})
	

/************新闻滚动区域***************/
$(".news_box>dl").height(60*($(".news_box>dl>dd").length));
function up(){
   $(".news_box>dl").animate({
       marginTop:-60
   },1000,function(){
	      $(".news_box>dl").css({
		     marginTop:0
		  });
          $(".news_box>dl>dd:first").insertAfter($(".news_box>dl>dd:last"));
	   })
}
   
var newsup=setInterval(up,3000);
    $(".news_box>dl>dd").mouseover(function(){
	    clearInterval(newsup);
	}).mouseout(function(){
	    newsup=setInterval(up,3000);
	})


/*********图片上映现的效果************/
  $(".img_showbg").hover(function(){
      $(".img_childbg").animate({
	      bottom:0,
          opacity:0.6
	  },500);
  },function(){
      $(".img_childbg").animate({
	       bottom:-190
	  },500);
  })
 $(".img_showbg01").hover(function(){
      $(".img_childbg01").animate({
	      bottom:0,
          opacity:0.6
	  },500);
  },function(){
      $(".img_childbg01").animate({
	       bottom:-190
	  },500);
  })
  $(".img_showbg02").hover(function(){
      $(".img_childbg02").animate({
	      bottom:0,
          opacity:0.6
	  },500);
  },function(){
      $(".img_childbg02").animate({
	       bottom:-190
	  },500);
  })
/************侧边栏**************/
  
  $("#aside_box>.btn01").hover(function(){
      $("#aside_box>img").show();
  });
  $("#aside_box>.btn01").mouseout(function(){
     $("#aside_box>img").hide();
  })
/***********底部弹出窗口*************/

	$(btn).click(function(){
		$('#pic').addClass('hide');
	})

	$('.rightAd').mouseover(function(){
		$('#pic').removeClass('hide');
		//style.display='block';
	})	



/*************顶部弹簧广告*****************/
var Toppic=document.getElementById("top_pic");
    
var h=0;
var maxH=parseInt(getComputedStyle(Toppic).height);//高度不是一个数值
    //console.log(maxH);

function adDown(){
	if(h<maxH){
		h+=1;
        Toppic.style.height=h+"px";
        Toppic.style.display="block";
		 setTimeout(adDown,1);
	}else{
		Toppic.style.height=h+"px";
        Toppic.style.display="block";
		setTimeout(adUp,3000);
	}
}
function adUp(){
    if(h>0){
	    h-=1;
        Toppic.style.height=h+"px";
        setTimeout(adUp,1);
	}
}
setTimeout(adDown,3000);


}