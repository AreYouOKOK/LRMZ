require(["tip","imglazyload"],function(a,b){b($("#productlist"));var c=$("#search-options"),d=c.find(".items");d.each(function(){var a=$(this),b=a.height();b>45&&a.next("a.more-btn").show().on("click",function(){var c=$(this);c.hasClass("clicked")?(a.parent().height(24),c.html('更多&nbsp;<i class="iconfont">&#xe62e;</i>').removeClass("clicked")):(a.parent().height(b),c.html('收起&nbsp;<i class="iconfont">&#xe62b;</i>').addClass("clicked"))})});var e=$("#priceform"),f=e.find("form"),g=f.find("input[type=text]"),h=$("#hidden_price");g.on("focus",function(){e.addClass("focus")}),$(document).on("click",function(a){0==$(a.target).parents("#priceform").length&&e.removeClass("focus")}),f.submit(function(){var a=g.eq(0).val(),b=g.eq(1).val();return LIZI.check.isNumber(a)&&LIZI.check.isNumber(b)?void h.val(a+"~"+b):(alert("请输入正确的价格区间"),!1)})});