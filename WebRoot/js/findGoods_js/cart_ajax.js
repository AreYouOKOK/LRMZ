define(function(){var a=function(a){function b(){"yes"!=a.data("cartIsNull")&&require(["tpl/public/cart_ajax"],function(b){$.ajax({url:"/cart/ajax",cache:!1,dataType:"jsonp",jsonpCallback:"pushCartData",success:function(c){var d="";"SUCCESS"==c.status?(e=c.total,a.find(".cartnum").html(e),1>e?(a.data("cartIsNull","yes"),d='<div class="error_msg">您的购物车里没有商品</div>'):d=b(c),a.data("loaded","yes").find(".more_bd").html(d)):a.find(".more_bd").html('<div class="error_msg">'+c.msg+"</div>")}})})}function c(b){var c=$(b),d=c.data("cid");$.ajax({url:"/cart/delete",type:"post",dataType:"json",data:{cartDetailIds:d},success:function(b){if("SUCCESS"==b.status){var d=e-1;f.html(d),LIZI.userInfo.cartNum=d,c.parents("dl").remove(),a.data("loaded","no"),1>d&&a.find(".more_bd").html('<div class="error_msg">您的购物车里没有商品</div>')}else alert(b.msg)},error:function(a){alert("删除失败，请稍后再试 ("+a.status+")")}})}var d=null,e=LIZI.userInfo.cartNum,f=a.find(".cartnum");e>0&&f.html(e).css("visibility","visible"),a.on("mouseenter",function(){null!==d&&clearTimeout(d),d=setTimeout(function(){a.addClass("head_cart_hover"),"yes"!==a.data("loaded")&&b()},200)}).on("mouseleave",function(){null!==d&&clearTimeout(d),d=setTimeout(function(){a.removeClass("head_cart_hover")},200)}),a.on("click","a.del",function(){c(this)})};return a});