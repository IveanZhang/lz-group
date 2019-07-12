"use strict";function dsnGridRelationImage(o,i,a){var r=jQuery(window);o.on("mousemove",function(e){var n=e.clientX/r.width()-.5,t=e.clientY/r.height()-.5;TweenLite.to(o,a,{rotationY:i*n,rotationX:i*t,ease:Power1.easeOut,transformPerspective:900,transformOrigin:"center"})}).on("mouseleave",function(e){TweenMax.to(o,.3,{rotationY:0,rotationX:0,ease:Back.easeOut.config(4)})})}jQuery,jQuery(window);var dsnGrid={backgroundPosition:function(o,i,a){var e,n,r,t,s;return o instanceof jQuery==!1&&(o=jQuery(o)),a=this.getUndefinedVal(a,{}),e=this.getUndefinedVal(a.sizeX,"105%"),n=this.getUndefinedVal(a.sizeY,"105%"),t=this.getUndefinedVal(a.left,"-5%"),s=this.getUndefinedVal(a.top,"-5%"),r=this.getUndefinedVal(a.move,100),o.css({width:e,height:n,left:t,top:s,backgroundPositionX:"calc(50% - "+-2*r+"px)",backgroundPositionY:"calc(50% - "+-2*r+"px)"}),i=this.getUndefinedVal(i,1),o.parent().on("mousemove",function(e){if(void 0!==a.dataActive&&jQuery(this).find(o).hasClass(a.dataActive))return!1;var n=e.clientX/jQuery(this).width()-.5,t=e.clientY/jQuery(this).height()-.5;TweenLite.to(jQuery(this).find(o),i,{transformPerspective:100,x:r*n+r+" ",y:r*t+r+""}),void 0!==a.onEnter&&a.onEnter(jQuery(this),e)}).on("mouseleave",function(e){TweenMax.to(jQuery(this).find(o),i,{x:r,y:r,ease:Back.easeOut.config(4)}),void 0!==a.onLeave&&a.onLeave(jQuery(this),e)}),dsnGrid},parallaxIt:function(e,n,t,o){var i=n[0].getBoundingClientRect(),a=e.pageX-i.left,r=e.pageY-i.top,s=window.pageYOffset||document.documentElement.scrollTop;o=this.getUndefinedVal(o,.3),t=this.getUndefinedVal(t,-1),TweenMax.to(n,o,{x:(a-i.width/2)/i.width*t,y:(r-i.height/2-s)/i.width*t,ease:Power0.easeOut})},scaleIt:function(e,n,t){if(void 0===n)return!1;var o,i,a,r=e.scrollTop();a=this.getUndefinedVal(t.plus,0),o=this.getUndefinedVal(t.position,!1);var s=n.offset();return i=void 0!==s?s.top:0,o&&(i-=r),r/(n.height()+i+a)},scrollerIt:function(e,n,t){if(void 0===n)return!1;var o,i,a,r=e.scrollTop();a=this.getUndefinedVal(t.duration,0),i=this.getUndefinedVal(t.plus,0);var s=n.offset();o=void 0!==s?s.top:0,o+=a;var d=n.height()+o+i;if(o<=r&&void 0!==t.action){var l=o-r,u=l/d;t.action({scroll:l,position:u,targetEnd:d,ScrollTop:r})}return r/(n.height()+o+i)},setPositionMoveSection:function(e,n,t){if(void 0!==e){var o=e.offset(),i=void 0===o?0:o.top;n=dsnGrid.getUndefinedVal(n,2),t=dsnGrid.getUndefinedVal(t,0);var a=(e.innerHeight()+i+t)/2;e.css({marginBottom:a/n*-1})}},scrollTop:function(e,n,t,o){n=dsnGrid.getUndefinedVal(n,500),t=dsnGrid.getUndefinedVal(t,0);var i=0;"number"==typeof e?i=e:(e instanceof jQuery==!1&&(e=jQuery(e)),void 0!==(i=e.offset())&&(i=i.top)),jQuery("html, body").animate({scrollTop:i+t},n,o)},getUndefinedVal:function(e,n){return void 0===e?n:e},mouseMove:function(e,n,t){jQuery(window);var o=jQuery("body");if(dsnGrid.getUndefinedVal(o.data("dsn-mousemove"),!1)&&void 0!==e&&!(e.length<=0)&&null!==e){o.addClass("dsn-mousemove"),e instanceof jQuery==!1&&(e=jQuery(e));var i=e,a=!1;o.on("mousemove",function(e){i.css({left:e.pageX,top:e.pageY}),void 0!==n&&void 0!==n.onUpdate&&n.onUpdate(e,e.pageX,e.pageY,i),void 0!==n&&void 0!==n.onComplete&&(a=!0,dsnGrid.endAnimate(i,function(e){a&&n.onComplete(e,i),a=!1}))})}},endAnimate:function(e,n){null!=n&&e.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(e){n(e)})},mouseWheel:function(e,n,t){e.bind("mousewheel DOMMouseScroll",function(e){0<e.originalEvent.wheelDelta||e.originalEvent.detail<0?void 0!==t&&t(e):void 0!==n&&n(e)})},numberText:function(e){return e<10&&0<e?"0"+e:e},convertTextLine:function(e,n){var t=e.html().trim(),o="";e.html("");for(var i=0;i<t.length;i++)0===i&&(o+='<div class="dsn-word-wrapper">')," "!==t.charAt(i)?o+='<span class="dsn-chars-wrapper">'+t.charAt(i)+"</span>":o+="</div>"+t.charAt(i)+'<div class="dsn-word-wrapper">';o+="</div>",n.append(o)},getRndInteger:function(e,n){return Math.floor(Math.random()*(n-e))+e},pageLoad:function(e,n,t,o){var i=window.performance.timing,a=-1*(i.loadEventEnd-i.navigationStart)/1e3%50*10,r=e,s=e<n?1:-1,d=Math.abs(Math.floor((a+t)/100)),l=setInterval(function(){o(r+=s),n<=r&&clearInterval(l)},d);return l},embedVideo:function(e){jQuery("[data-dsn-video]").each(function(e){var n=jQuery(this),t=dsnGrid.removeAttr(n,"data-dsn-video");n.on("click",function(){n.addClass("dsn-video"),n.html('<div class="dsn-iframe-player">'+t+"</div>"),dsnGrid.scrollTop(n,1600,-100)})})},removeAttr:function(e,n){var t=e.attr(n);return void 0!==t&&e.removeAttr(n),t},moveIcon:function(i,a){i.on("mousemove",function(e){var n="top .15s ease-out,left .15s ease-out";a.css({"-webkit-transition":n,"-moz-transition":n,"-ms-transition":n,"-o-transition":n,transition:n,"pointer-events":"none"});var t=e.pageX,o=e.pageY-jQuery(this).offset().top;0<o&&o<jQuery(this).height()&&jQuery(this).offset().left<t&&t<i.width()?a.css({left:t,top:o}):TweenMax.to(a,.5,{left:"50%",top:"50%"})}).on("mouseleave",function(){TweenMax.to(a,.5,{left:"50%",top:"50%"})})},parallaxMoveElemnt:function(e,n,t,o,i){var a=e;t=void 0===t?.5:parseFloat(t),n=void 0===n?20:parseFloat(n),i=void 0!==i&&i;var r=$('<div class="icon-circle"></div>');a.append(r),a.off("mouseleave"),a.off("mouseenter"),a.off("mousemove"),a.on("mouseleave",function(e){var n={x:0,y:0,ease:Back.easeOut.config(4)};i&&(n.scale=1);var t=[a,r];void 0!==o&&t.push(o),TweenMax.to(t,2,n)}).on("mouseenter",function(e){var n={transformOrigin:"0 0"};i&&(n.scale="1.03"),TweenMax.to([a,r],.3,n)}).on("mousemove",function(e){dsnGrid.parallaxIt(e,a,n),dsnGrid.parallaxIt(e,r,2*n),void 0!==o&&dsnGrid.parallaxIt(e,o,-5,.5)})},parallaxMoveElemntCir:function(e,n,t,o,i){var a=e,r=this;t=void 0===t?.5:parseFloat(t),n=void 0===n?20:parseFloat(n),i=void 0!==i&&i;var s=a.html(),d=$('<div class="icon-circle"></div>'),l=$('<div class="dsn-grid-parallax">'+s+"</div>");a.html(""),a.append(d),a.append(l),a.on("mouseleave",function(e){TweenMax.to(a,t,{scale:1}),TweenMax.to(l,.3,{scale:1,x:0,y:0}),TweenMax.to(d,t,{scale:1,x:0,y:0})}).on("mouseenter",function(e){TweenMax.to(a,t,{transformOrigin:"0 0",scale:1}),TweenMax.to(d,t,{scale:1.2})}).on("mousemove",function(e){r.parallaxIt(e,l,n),dsnGrid.parallaxIt(e,d,n)})},elementHover:function(e,n,t){e instanceof jQuery==!1&&(e=jQuery(e)),n instanceof jQuery==!1&&(n=jQuery(n)),n.on("mouseenter",function(){e.addClass(t)}).on("mouseleave",function(){e.removeClass(t)})},changeSizeText:function(e,t){e instanceof jQuery==!1&&(e=jQuery(e)),e.each(function(){var e=jQuery(this);for(var n in t)e.text().length>=parseInt(n)&&(console.log(t[n]),e.css(t[n]))})}};