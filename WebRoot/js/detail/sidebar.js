define(["css!./sidebar"],function(){var a=function(){var a="",b=null,c=$(window).height();LIZI.check.isIE6||(a='<div id="g_sidebar" class="g_sidebar" style="height:'+c+'px;"><ul class="sb_top"><li class="sb_cart"><a href="/cart/"><i class="iconfont">&#x16d;</i><span>购物车</span><em id="sidebar_cartnum">0</em></a></li></ul><ul class="sb_btm"><li><a href="/user/home"><i class="iconfont">&#xe652;</i></a><div class="tip"><cite class="iconfont">&#xe62c;</cite><a href="/user/home">我的丽子</a></div></li><li class="sb_app"><a href="/active/lizi-app.html"><i class="iconfont">&#xe644;</i></a><div class="tip"><cite class="iconfont">&#xe62c;</cite><p>扫一扫，下载丽子APP</p><a href="/active/lizi-app.html"><img src="http://cdn.lizi.com/images/lizi-2code.png" /></a></div></li><li><a href="/"><i class="iconfont">&#xe653;</i></a><div class="tip"><cite class="iconfont">&#xe62c;</cite><a href="/">返回首页</a></div></li><li class="back2top"><a href="javascript:;"><i class="iconfont">&#xe646;</i></a><div class="tip"><cite class="iconfont">&#xe62c;</cite><a href="javascript:;">返回顶部</a></div></li></ul></div>',$("body").append(a),b=$("#g_sidebar"),b.on("mouseenter","li",function(){var a=$(this);a.addClass("hover")}).on("mouseleave","li",function(){var a=$(this);a.removeClass("hover")}).on("click","li.back2top",function(){return $("body,html").animate({scrollTop:0},500),!1}),$(window).on("resize",function(){var a=$(this).height();b.css("height",a)}),setTimeout(function(){$("#sidebar_cartnum").html(LIZI.userInfo.cartNum)},1500))};return a});