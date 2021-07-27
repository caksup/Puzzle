/**
 * grrd's Puzzle
 * Copyright (c) 2012 Gerard Tyedmers, grrd@gmx.net
 * @license MPL-2.0
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
!function(){"use strict";var e,t,n,o,a,s,i,r,l,g,c,d,m,u,A,h,f,b,v,y,w,I,p,_,E,P,k,L=!!window.HTMLCanvasElement,T=new Kinetic.Layer({name:"g_layer"}),B=new Kinetic.Layer({name:"g_back_g_layer"}),S=new Kinetic.Stage({container:"container",width:document.getElementById("container").width,height:document.getElementById("container").height}),D=!!navigator.userAgent.match(/(iPad|iPhone|iPod)/g),R=!1,x=0,Q=0,M=!1,C=2,F=new Image,Y="",N=4,X=6,z=15,G=0,H=!1,K=!1,O=!1,U=!0,q=!0,j=!0,W=!0,Z=!1,V=!0,J=!0,$=!1,ee=function(e){return document.getElementById(e)},te=ee("select_theme_img"),ne=ee("b_back_g_grid"),oe=ee("b_back_g_image"),ae=ee("b_rotate"),se=ee("b_sound"),ie=ee("container"),re=ee("b_gold"),le=ee("b_gold_enabled"),ge=ee("b_gold_disabled"),ce=ee("b_prev"),de=ee("b_next"),me=ee("bt_easy"),ue=ee("bt_med"),Ae=ee("bt_hard"),he=ee("bt_close"),fe=ee("b_image_input"),be=ee("iPopupInfo"),ve=ee("iPopupSettings"),ye=ee("iFullscreen"),we=ee("iPopupHelp"),Ie=ee("img_help"),pe=ee("lb_help"),_e=ee("game"),Ee=ee("title"),Pe=function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}}();function ke(e){document.getElementsByTagName("FIELDSET")[0].disabled=!0,e.classList.remove("popup-init"),e.classList.remove("popup-hide"),e.classList.add("popup-show")}function Le(e){document.getElementsByTagName("FIELDSET")[0].disabled=!1,e.classList.remove("popup-show"),e.classList.add("popup-hide"),setTimeout((function(){e.scrollTop=0}),1050)}function Te(){document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement?ee("img_fullscreen").src="Images/escfullscreen.svg":ee("img_fullscreen").src="Images/fullscreen.svg"}"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("sw.js").then((function(e){}),(function(e){}))}));const Be=new Promise((e,t)=>{const n=new Image;n.onload=()=>{e(1===n.naturalWidth)},n.onerror=t,n.src="data:image/jpeg;base64,/9j/4QBiRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAYAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAAAAABIAAAAAQAAAEgAAAAB/9sAQwAEAwMEAwMEBAMEBQQEBQYKBwYGBgYNCQoICg8NEBAPDQ8OERMYFBESFxIODxUcFRcZGRsbGxAUHR8dGh8YGhsa/9sAQwEEBQUGBQYMBwcMGhEPERoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoa/8IAEQgAAQACAwERAAIRAQMRAf/EABQAAQAAAAAAAAAAAAAAAAAAAAf/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAF/P//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAQUCf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEABj8Cf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8hf//aAAwDAQACAAMAAAAQH//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Qf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Qf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8Qf//Z"});function Se(){K=!0,H=!1}function De(){var e;Le(we),setTimeout((function(){ee("iCloseHelp").classList.remove("dn"),Ie.style.height=null,Ie.style.padding=null}),500),document.getElementsByTagName("FIELDSET")[0].disabled=!0,Ee.classList.remove("swipe-out-right"),_e.classList.remove("swipe-in-left"),Ee.classList.add("swipe-out"),_e.classList.add("swipe-in"),setTimeout((function(){var t=T.getChildren();for(e=0;e<t.length;e+=1)t[e].setZIndex(Math.floor(Math.random()*X*N));for(e=0;e<t.length;e+=1)O?new Kinetic.Tween({node:t[e],x:Math.floor(Math.random()*E*(X-1))+E/2,y:Math.floor(Math.random()*P*(N-1))+P/2,rotation:.5*Math.PI*Math.floor(4*Math.random()),duration:1,onFinish:Se()}).play():new Kinetic.Tween({node:t[e],x:Math.floor(Math.random()*E*(X-1))+E/2,y:Math.floor(Math.random()*P*(N-1))+P/2,duration:1,onFinish:Se()}).play()}),2e3)}function Re(e,t,n,o){!function(){var a;if(U){var s=new Kinetic.Shape({drawFunc:function(o){o.beginPath(),o.moveTo(p,_),0===t?o.lineTo(p+E,_):(o.bezierCurveTo(p+.8*E,_+.1*P*n,p,_-.25*P*n,p+E/2,_-.25*P*n),o.bezierCurveTo(p+E,_-.25*P*n,p+.2*E,_+.1*P*n,p+E,_)),e===X-1?o.lineTo(p+E,_+P):(o.bezierCurveTo(p+E+.1*E*n,_+.8*P,p+E-.25*E*n,_,p+E-.25*E*n,_+P/2),o.bezierCurveTo(p+E-.25*E*n,_+P,p+E+.1*E*n,_+.2*P,p+E,_+P)),t===N-1?o.lineTo(p,_+P):(o.bezierCurveTo(p+.2*E,_+P-.1*P*n,p+E,_+P+.25*P*n,p+E/2,_+P+.25*P*n),o.bezierCurveTo(p,_+P+.25*P*n,p+.8*E,_+P-.1*P*n,p,_+P)),0===e?o.lineTo(p,_):(o.bezierCurveTo(p-.1*E*n,_+.2*P,p+.25*E*n,_+P,p+.25*E*n,_+P/2),o.bezierCurveTo(p+.25*E*n,_,p-.1*E*n,_+.8*P,p,_)),o.closePath(),o.fillStrokeShape(this)},fillPatternImage:o,fillPatternOffset:[e*E,t*P],stroke:"black",strokeWidth:4});s.toImage({width:E+.6*E,height:P+.6*P,x:.3*-E,y:.3*-P,callback:function(n){Ge(a=new Kinetic.Image({image:n,x:e*E+E/2,origX:e*E+E/2,y:t*P+P/2,origY:t*P+P/2,row:t,col:e,offset:[E/2+.3*E,P/2+.3*P],draggable:!0,dragBoundFunc:function(e){var t=e.y,n=e.x;return n<0&&(n=0),n>c&&(n=c),t<0&&(t=0),t>d&&(t=d),{x:n,y:t}},name:"part_z"+t+"_s"+e})),a.createImageHitRegion((function(){T.drawHit()}))}}),s.setStrokeWidth(null),s.setStroke(null),s.toImage({width:E+.6*E,height:P+.6*P,x:.3*-E,y:.3*-P,callback:function(n){v[t][e]=n}})}else Ge(a=new Kinetic.Image({x:e*E+E/2,origX:e*E+E/2,y:t*P+P/2,origY:t*P+P/2,row:t,col:e,width:E,height:P,offset:[E/2,P/2],crop:{x:o.width/X*e,y:o.height/N*t,width:o.width/X,height:o.height/N},stroke:"black",strokeWidth:4,fill:"black",Image:o,draggable:!0,dragBoundFunc:function(e){var t=e.y,n=e.x;return n<0&&(n=0),n>c&&(n=c),t<0&&(t=0),t>d&&(t=d),{x:n,y:t}},name:"part_z"+t+"_s"+e}))}()}function xe(){var e,t;for(v=[],e=0;e<N;e+=1)v[e]=[];G=0,T.removeChildren(),B.removeChildren(),S.removeChildren(),S.setWidth(c),S.setHeight(d),p=0,_=0,E=c/X,P=d/N,1,S.add(T);var n=c,o=d;D&&(o/=function(e,t){var n=document.createElement("canvas");n.width=1,n.height=t;var o=n.getContext("2d");o.drawImage(e,0,0);for(var a=o.getImageData(0,0,1,t).data,s=0,i=t,r=t;r>s;)0===a[4*(r-1)+3]?i=r:s=r,r=i+s>>1;var l=r/t;return 0===l?1:l}(F,F.naturalHeight));0!==k.getPos()||5!==r&&6!==r&&7!==r&&8!==r||(n=d,o=c);var a=new Kinetic.Image({width:n,height:o,crop:{x:0,y:0,width:F.width,height:F.height},Image:F});0!==k.getPos()||5!==r&&6!==r||(a.setRotationDeg(90),a.setX(c)),0!==k.getPos()||3!==r&&4!==r||(a.setRotationDeg(180),a.setX(c),a.setY(d)),0!==k.getPos()||7!==r&&8!==r||(a.setRotationDeg(270),a.setY(d)),a.toImage({width:c,height:d,callback:function(n){if((q||j)&&function(e){var t,n,o,a;if(j&&(t=new Kinetic.Image({x:0,y:0,width:c,height:d,Image:e,opacity:.1}),B.add(t),B.draw()),q)for(n=0;n<N;n+=1)for(o=0;o<X;o+=1)a=new Kinetic.Rect({x:o*E,y:n*P,width:E,height:P,stroke:"#333333",strokeWidth:2}),B.add(a);S.add(B),B.moveToBottom()}(n),U)a.toImage({width:c,height:d,callback:function(n){for(t=0;t<N;t+=1)for(e=0;e<X;e+=1)Re(e,t,t%2!=0&&e%2!=0||t%2==0&&e%2==0?1:-1,n);T.draw(),De()}});else{for(t=0;t<N;t+=1)for(e=0;e<X;e+=1)Re(e,t,t%2!=0&&e%2!=0||t%2==0&&e%2==0?1:-1,n);T.draw(),De()}}})}function Qe(){if(w=k.getPos(),y=parseInt(ee("nav"+w).getElementsByClassName("selected")[0].getAttribute("data-num"),10),!H)return void 0===y||void 0===a&&0===w?(Ie.src="Images/photo.svg",pe.innerHTML=document.webL10n.get("lb_choose"),void ke(we)):void(w>0&&V&&ee("image"+w+"-"+y).classList.contains("locked")||(H=!0,Ie.src="Images/loading.svg",Ie.style.height="70px",Ie.style.padding="5px",pe.innerHTML=document.webL10n.get("lb_load"),ee("iCloseHelp").classList.add("dn"),ke(we),q=ne.checked,j=oe.checked,O=ae.checked,W=se.checked,Pe&&(localStorage.setItem("s_back_g_grid",ne.checked?"on":"off"),localStorage.setItem("s_backg_image",oe.checked?"on":"off"),localStorage.setItem("s_rotate",ae.checked?"on":"off"),localStorage.setItem("s_sound",se.checked?"on":"off")),document.getElementById("container").width=l,document.getElementById("container").height=g,d=g,c=l,u=Y,0!==w?(i=void 0!==window.devicePixelRatio?window.devicePixelRatio:1,s=Math.min(g,l)*i<=270?"s":Math.min(g,l)*i>1080?"l":"",o="Images/"+t+"/image-set-"+w+"/sujet"+Y+y+s+".jpg"):o=a,F.addEventListener("load",xe),F.src=o))}function Me(e,t,n,o){var a,s,i,r,l,g,m;if("g_layer"===e.getParent().attrs.name)if("g_layer"===t.getParent().attrs.name){t.setX(n),t.setY(o);var u=new Kinetic.Group({draggable:!0,dragBoundFunc:function(e){var t=e.y,n=e.x;return n<0&&(n=0),n>c&&(n=c),t<0&&(t=0),t>d&&(t=d),{x:n,y:t}}});e.moveTo(u),t.moveTo(u),e.setDraggable(!1),t.setDraggable(!1),T.add(u)}else r=e.getX(),l=e.getY(),t.getParent().setX(t.getParent().getX()+n-t.getAbsolutePosition().x),t.getParent().setY(t.getParent().getY()+o-t.getAbsolutePosition().y),e.moveTo(t.getParent()),e.setRotationDeg(t.getRotationDeg()),g=r-e.getAbsolutePosition().x,m=l-e.getAbsolutePosition().y,0===e.getParent().getRotationDeg()&&(e.setX(e.getX()+g),e.setY(e.getY()+m)),90===e.getParent().getRotationDeg()&&(e.setY(e.getY()-g),e.setX(e.getX()+m)),180===e.getParent().getRotationDeg()&&(e.setX(e.getX()-g),e.setY(e.getY()-m)),270===e.getParent().getRotationDeg()&&(e.setY(e.getY()+g),e.setX(e.getX()-m)),e.setDraggable(!1);else if("g_layer"===t.getParent().attrs.name)t.moveTo(e.getParent()),t.setAbsolutePosition(n,o),t.setRotationDeg(e.getRotationDeg()),t.setDraggable(!1);else{s=t.getParent().getChildren();for(var A=n-t.getAbsolutePosition().x,h=o-t.getAbsolutePosition().y;s.length>0;)void 0!==s[0]&&(r=(i=s[0]).getAbsolutePosition().x,l=i.getAbsolutePosition().y,i.moveTo(e.getParent()),i.setRotationDeg(e.getRotationDeg()),g=r-i.getAbsolutePosition().x+A,m=l-i.getAbsolutePosition().y+h,0===e.getParent().getRotationDeg()&&(i.setX(i.getX()+g),i.setY(i.getY()+m)),90===e.getParent().getRotationDeg()&&(i.setY(i.getY()-g),i.setX(i.getX()+m)),180===e.getParent().getRotationDeg()&&(i.setX(i.getX()-g),i.setY(i.getY()-m)),270===e.getParent().getRotationDeg()&&(i.setY(i.getY()+g),i.setX(i.getX()-m)))}var f=(s=e.getParent().getChildren())[0].getAbsolutePosition().x,b=s[0].getAbsolutePosition().x,v=s[0].getAbsolutePosition().y,y=s[0].getAbsolutePosition().y;for(a=0;a<s.length;a+=1)s[a].getAbsolutePosition().x<f&&(f=s[a].getAbsolutePosition().x),s[a].getAbsolutePosition().x>b&&(b=s[a].getAbsolutePosition().x),s[a].getAbsolutePosition().y<v&&(v=s[a].getAbsolutePosition().y),s[a].getAbsolutePosition().y>y&&(y=s[a].getAbsolutePosition().y);r=e.getAbsolutePosition().x,l=e.getAbsolutePosition().y,e.getParent().setOffset(0,0),e.getParent().setX((f+b)/2),e.getParent().setY((v+y)/2),g=r-e.getAbsolutePosition().x,m=l-e.getAbsolutePosition().y,0===e.getParent().getRotationDeg()&&e.getParent().setOffset(-1*g,-1*m),90===e.getParent().getRotationDeg()&&e.getParent().setOffset(-1*m,g),180===e.getParent().getRotationDeg()&&e.getParent().setOffset(g,m),270===e.getParent().getRotationDeg()&&e.getParent().setOffset(m,-1*g),"g_layer"===t.getParent().attrs.name?t.moveToTop():t.getParent().moveToTop(),T.draw(),W&&document.getElementById("click_sound").play()}function Ce(e){var t,n,o,a,s=[-1,1,0,0],i=[0,0,-1,1];for(h="g_layer"===e.getParent().attrs.name?e.getRotationDeg():(e.getRotationDeg()+e.getParent().getRotationDeg())%360,t=0;t<s.length;t+=1)(a=S.get(".part_z"+(e.attrs.row+i[t])+"_s"+(e.attrs.col+s[t]))).length>0&&(f="g_layer"===a[0].getParent().attrs.name?a[0].getRotationDeg():(a[0].getRotationDeg()+a[0].getParent().getRotationDeg())%360,0===h&&(n=e.getAbsolutePosition().x+E*s[t],o=e.getAbsolutePosition().y+P*i[t]),90===h&&(n=e.getAbsolutePosition().x-P*i[t],o=e.getAbsolutePosition().y+E*s[t]),180===h&&(n=e.getAbsolutePosition().x-E*s[t],o=e.getAbsolutePosition().y-P*i[t]),270===h&&(n=e.getAbsolutePosition().x+P*i[t],o=e.getAbsolutePosition().y-E*s[t]),Math.abs(n-a[0].getAbsolutePosition().x)<z&&Math.abs(o-a[0].getAbsolutePosition().y)<z&&h===f&&("g_layer"===e.getParent().attrs.name||"g_layer"===a[0].getParent().attrs.name||e.getParent()!==a[0].getParent())&&Me(e,a[0],n,o))}function Fe(e){void 0!==e&&(e.setX(e.attrs.origX),e.setY(e.attrs.origY),e.setRotationDeg(0),e.moveToBottom(),e.setStrokeWidth(null),e.setStroke(null),e.setDraggable(!1),U&&e.setImage(v[e.attrs.row][e.attrs.col]),T.draw(),U&&e.disableShadow(),W&&document.getElementById("click_sound").play(),document.body.style.cursor="default",setTimeout((function(){(G+=1)===X*N&&(he.classList.add("dn"),W&&document.getElementById("ding_sound").play())}),500))}function Ye(){Pe&&localStorage.setItem("s_gold",re.checked?"on":"off"),!0===re.checked?(Z=!0,ee("img_easy").src="Images/easy_gold.svg",ee("img_med").src="Images/medium_gold.svg",ee("img_hard").src="Images/hard_gold.svg"):(Z=!1,ee("img_easy").src="Images/easy.svg",ee("img_med").src="Images/medium.svg",ee("img_hard").src="Images/hard.svg")}function Ne(){var e,n,o,a,s=0;for(e=1;e<5;e+=1)for(n=1;n<4;n+=1)o=Pe&&localStorage.getItem(t+e+Y+n)||0,s+=parseInt(o),V?o>0?((a=ee("medal"+e+"-"+n)).classList.remove("dn"),a.src="Images/medal"+o+".svg",n<3&&(ee("image"+e+"-"+(n+1)).classList.remove("locked"),ee("lock"+e+"-"+(n+1)).classList.add("dn"))):(ee("medal"+e+"-"+n).classList.add("dn"),n<3&&(ee("image"+e+"-"+(n+1)).classList.add("locked"),ee("lock"+e+"-"+(n+1)).classList.remove("dn"))):(ee("medal"+e+"-"+n).classList.add("dn"),ee("image"+e+"-"+(n+1)).classList.remove("locked"),ee("lock"+e+"-"+(n+1)).classList.add("dn"));36===s?(le.style.display="block",re.checked=!0,Ye(),ge.style.display="none"):(ge.style.display="block",re.checked=!1,Ye(),le.style.display="none")}function Xe(){var e,o;if(g=document.documentElement.clientHeight,l=document.documentElement.clientWidth,Y="",g>l&&(Y="p"),navigator.onLine){for(e=1;e<C+1;e+=1)for(o=1;o<4;o+=1)ee("image"+e+"-"+o).src="Images/"+t+"/image-set-"+e+"/sujet"+Y+o+"s.jpg";for(let e of document.querySelectorAll(".offline"))e.style.display="none";for(let e of document.querySelectorAll(".online"))e.style.display="block"}else{for(let e of document.querySelectorAll(".offline"))e.style.display="block";for(let e of document.querySelectorAll(".online"))e.style.display="none";k.slide(0,0)}t===n&&Y===m||(n=t,m=Y,Ne())}function ze(e){var n;he.classList.remove("dn"),e&&(n=Pe&&localStorage.getItem(t+w+u+y)||0,parseInt(I)>parseInt(n)&&(Pe&&localStorage.setItem(t+w+u+y,I),Ne(),W&&document.getElementById("ding_sound").play())),document.getElementsByTagName("FIELDSET")[0].disabled=!1,Ee.classList.remove("swipe-out"),_e.classList.remove("swipe-in"),Ee.classList.add("swipe-out-right"),_e.classList.add("swipe-in-left"),Xe(),setTimeout((function(){Xe()}),500)}function Ge(e){var t;e.on("mouseover",(function(){(e.getDraggable()||e.getParent().getDraggable())&&K&&(document.body.style.cursor="pointer")})),e.on("click tap",(function(){!1!==$&&((e.getDraggable()||e.getParent().getDraggable())&&K&&O&&A===T.getChildren().length-1?"g_layer"===e.getParent().attrs.name?(t=e.getRotation(),K=!1,new Kinetic.Tween({node:e,duration:.5,rotation:t+Math.PI/2,onFinish:function(){K=!0,360===e.getRotationDeg()&&e.setRotationDeg(0),e.fire("dragend")}}).play()):(t=e.getParent().getRotation(),K=!1,new Kinetic.Tween({node:e.getParent(),duration:.5,rotation:t+Math.PI/2,onFinish:function(){K=!0,360===e.getParent().getRotationDeg()&&e.getParent().setRotationDeg(0),e.fire("dragend")}}).play()):G===X*N?(K=!1,ze(!0)):e.fire("dragend"))})),e.on("mousedown touchstart",(function(){$=!0,setTimeout((function(){$=!1}),500),b=e,(e.getDraggable()||e.getParent().getDraggable())&&K&&("g_layer"===e.getParent().attrs.name?(A=e.getZIndex(),e.moveToTop()):(A=e.getParent().getZIndex(),e.getParent().moveToTop()))})),e.on("dragend",(function(){(e.getDraggable()||e.getParent().getDraggable())&&K?function(e){var t,n,o;if(h="g_layer"===e.getParent().attrs.name?e.getRotationDeg():(e.getRotationDeg()+e.getParent().getRotationDeg())%360,Math.abs(e.getAbsolutePosition().x-e.attrs.origX)<z&&Math.abs(e.getAbsolutePosition().y-e.attrs.origY)<z&&0===h)if("g_layer"===e.getParent().attrs.name)Fe(e);else for(n=e.getParent().getChildren();n.length>0;)(o=n[0]).moveTo(T),Fe(o);else if("g_layer"===e.getParent().attrs.name)Ce(e);else for(n=e.getParent().getChildren(),t=0;t<n.length;t+=1)Ce(n[t])}(e):G===X*N&&(K=!1,ze(!0))})),e.on("mouseout",(function(){document.body.style.cursor="default"})),T.add(e),T.draw(),S.draw()}function He(e){var t;if("Safari,5.1.7"===navigator.sayswho||"MSIE,9.0"===navigator.sayswho)return Ie.src="Images/photo.svg",pe.innerHTML=document.webL10n.get("lb_own_img"),void ke(we);if((t=e.target.files[0]).type.match("image.*")){var n=new FileReader;n.onload=function(t){r=0,a=t.target.result,EXIF.getData(e.target.files[0],(function(){Be||(r=EXIF.getTag(this,"Orientation"))})),ee("image0-1").src=a,ee("imageOff").src=a,Xe(),setTimeout((function(){Xe()}),500)},n.readAsDataURL(t)}}function Ke(e){t=e,te.src="Images/"+t+"/theme.png",R&&(ee("select_theme").innerHTML=document.webL10n.get("lb_"+t)),Pe&&localStorage.setItem("s_theme",e),Xe()}function Oe(){0===k.getPos()?ee("bullets0").src="Images/bullets1o.svg":ee("bullets0").src="Images/bullets0o.svg",1===k.getPos()?ee("bullets1").src="Images/bullets1.svg":ee("bullets1").src="Images/bullets0.svg",2===k.getPos()?ee("bullets2").src="Images/bullets1.svg":ee("bullets2").src="Images/bullets0.svg",3===k.getPos()?ee("bullets3").src="Images/bullets1.svg":ee("bullets3").src="Images/bullets0.svg",4===k.getPos()?ee("bullets4").src="Images/bullets1.svg":ee("bullets4").src="Images/bullets0.svg",Array.from(ee("slider_container").getElementsByTagName("BUTTON")).forEach((function(e){e.disabled=!0})),Array.from(ee("nav"+k.getPos()).getElementsByTagName("BUTTON")).forEach((function(e){e.disabled=!1}))}function Ue(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(window.location.href);return null!==t&&t[1]}var qe,je,We,Ze;ie.addEventListener("mouseup",(function(){void 0!==b&&"g_layer"!==b.getParent().attrs.name&&setTimeout((function(){b.fire("dragend")}),350)}),!1),ie.addEventListener("touchend",(function(){void 0!==b&&"g_layer"!==b.getParent().attrs.name&&setTimeout((function(){b.fire("dragend")}),350)}),!1),Array.from(document.getElementsByClassName("own-nav")).forEach((function(e){e.addEventListener("click",(function(){if("Safari,5.1.7"===navigator.sayswho||"MSIE,9.0"===navigator.sayswho)return Ie.src="Images/photo.svg",pe.innerHTML=document.webL10n.get("lb_own_img"),void ke(we);"file"!==fe.type?window.MozActivity&&(new MozActivity({name:"pick",data:{type:"image/jpeg"}}).onsuccess=function(){a=window.URL.createObjectURL(this.result.blob),ee("image0-1").src=a,ee("imageOff").src=a,Xe(),setTimeout((function(){Xe()}),500)}):fe.click()}))})),window.onload=function(){J&&(J=!1,ee("iInfo").addEventListener("click",(function(){ke(be)})),ee("iInfoClose").addEventListener("click",(function(){Le(be)})),ee("iSettings").addEventListener("click",(function(){M||(M=!0,ee("t_europe").src="Images/europe/theme.png",ee("t_africa").src="Images/africa/theme.png",ee("t_asia").src="Images/asia/theme.png",ee("t_america").src="Images/america/theme.png",ee("t_animals").src="Images/animals/theme.png",ee("t_flowers").src="Images/flowers/theme.png",ee("t_tricky").src="Images/tricky/theme.png",ee("t_mascha").src="Images/mascha/theme.png",ee("t_mascha2").src="Images/mascha2/theme.png",ee("t_mascha3").src="Images/mascha3/theme.png",ee("t_shrek").src="Images/shrek/theme.png"),ke(ve)})),ee("iSettingsClose").addEventListener("click",(function(){Le(ve)})),ye.addEventListener("click",(function(){var e,t,n,o;e=window.document,t=e.documentElement,n=t.requestFullscreen||t.mozRequestFullScreen||t.webkitRequestFullScreen||t.msRequestFullscreen,o=e.exitFullscreen||e.mozCancelFullScreen||e.webkitExitFullscreen||e.msExitFullscreen,e.fullscreenElement||e.mozFullScreenElement||e.webkitFullscreenElement||e.msFullscreenElement?o.call(e):n.call(t)})),(!(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled)||!0===navigator.standalone||document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement)&&ye.parentNode.removeChild(ye),ee("iCloseHelp").addEventListener("click",(function(){Le(we)})),we.addEventListener("click",(function(){ee("iCloseHelp").classList.contains("dn")||Le(we)})),ee("bt_theme").addEventListener("click",(function(){document.getElementsByClassName("dropdown")[0].classList.toggle("show"),document.getElementsByClassName("icon")[0].classList.toggle("rotate")})),re.addEventListener("change",e=>{Ye()}),k=new Swipe(document.getElementById("image_slider"),{startSlide:1,callback:function(e,t){ee("bullets0").src=0===t?"Images/bullets1o.svg":"Images/bullets0o.svg",1===t?ee("bullets1").src="Images/bullets1.svg":(ee("bullets1").src="Images/bullets0.svg",C=4,Xe()),ee("bullets2").src=2===t?"Images/bullets1.svg":"Images/bullets0.svg",ee("bullets3").src=3===t?"Images/bullets1.svg":"Images/bullets0.svg",ee("bullets4").src=4===t?"Images/bullets1.svg":"Images/bullets0.svg"}}),document.getElementById("b_image_input").addEventListener("change",He,!1),Array.from(document.getElementsByClassName("list-button-33-sel")).forEach((function(e){e.addEventListener("click",(function(){event,Array.from(event.target.parentNode.getElementsByClassName("list-button-33-sel")).forEach((function(e){e.classList.remove("selected")})),event.target.classList.add("selected")}))})),ce.addEventListener("click",(function(e){k.prev(),Oe(),e.preventDefault()})),de.addEventListener("click",(function(e){k.next(),Oe(),e.preventDefault()})),me.addEventListener("click",(function(){I="1",g>l?Z?(N=9,X=6):(N=3,X=2):Z?(N=6,X=9):(N=2,X=3),Qe()})),ue.addEventListener("click",(function(){I="2",g>l?Z?(N=12,X=8):(N=6,X=4):Z?(N=8,X=12):(N=4,X=6),Qe()})),Ae.addEventListener("click",(function(){I="3",g>l?Z?(N=18,X=12):(N=8,X=5):Z?(N=12,X=18):(N=5,X=8),Qe()})),he.addEventListener("click",(function(){K=!1,ze(!1)})),ee("s_mascha").addEventListener("click",(function(){(x+=1)>2&&(Array.from(document.getElementsByClassName("t_mascha")).forEach((function(e){e.classList.remove("dn")})),Pe&&localStorage.setItem("s_mascha","true"))})),ee("s_grrd").addEventListener("click",(function(){(Q+=1)>5&&(ee("t_shrek").parentNode.classList.remove("dn"),ee("favicon").href="Images/favicon_dark.ico",Pe&&localStorage.setItem("s_shrek","true"))})),Array.from(document.getElementsByClassName("dropdown"))[0].childNodes.forEach((function(e){e.addEventListener("click",(function(){Ke(e.getElementsByTagName("img")[0].getAttribute("alt")),document.getElementsByClassName("dropdown")[0].classList.remove("show"),document.getElementsByClassName("icon")[0].classList.remove("rotate")}))})),Pe?(null===localStorage.getItem("s_back_g_grid")?ne.checked=!0:ne.checked="on"===localStorage.getItem("s_back_g_grid"),null===localStorage.getItem("s_backg_image")?oe.checked=!0:oe.checked="on"===localStorage.getItem("s_backg_image"),null===localStorage.getItem("s_rotate")?ae.checked=!1:ae.checked="on"===localStorage.getItem("s_rotate"),null===localStorage.getItem("s_sound")?se.checked=!0:se.checked="on"===localStorage.getItem("s_sound"),null===localStorage.getItem("s_gold")?(re.checked=!1,Ye()):(re.checked="on"===localStorage.getItem("s_gold"),Ye()),null===localStorage.getItem("s_theme")?Ke("animals"):Ke(localStorage.getItem("s_theme"))):(ne.checked=!0,oe.checked=!0,ae.checked=!1,se.checked=!0,re.checked=!1,Ye(),Ke("animals")),("true"===(e=Ue("mascha"))||Pe&&"true"===localStorage.getItem("s_mascha"))&&(Array.from(document.getElementsByClassName("t_mascha")).forEach((function(e){e.classList.remove("dn")})),Pe&&localStorage.setItem("s_mascha","true")),("true"===(e=Ue("shrek"))||Pe&&"true"===localStorage.getItem("s_shrek"))&&(ee("t_shrek").parentNode.classList.remove("dn"),ee("favicon").href="Images/favicon_dark.ico",Pe&&localStorage.setItem("s_shrek","true")),(e=Ue("theme"))&&Ke(e),/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)&&(ce.style.display="none",de.style.display="none"),Oe(),Xe(),setTimeout((function(){Xe()}),500))},window.addEventListener("resize",(function(){Xe()})),document.addEventListener("fullscreenchange",(function(){Te()})),document.addEventListener("mozfullscreenchange",(function(){Te()})),document.addEventListener("webkitfullscreenchange",(function(){Te()})),document.addEventListener("msfullscreenchange",(function(){Te()})),document.onkeydown=function(e){switch(e.key){case"ArrowLeft":0===document.getElementsByClassName("popup-show").length&&(k.prev(),Oe());break;case"ArrowRight":0===document.getElementsByClassName("popup-show").length&&(k.next(),Oe());break;case"Escape":document.getElementsByClassName("popup-show").length>0?(Le(be),Le(ve),Le(we)):!0===_e.classList.contains("swipe-in")&&(K=!1,ze(!1))}},navigator.sayswho=(qe=navigator.appName,je=navigator.userAgent,We=je.match(/version\/([.\d]+)/i),(Ze=je.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i))&&null!==We&&(Ze[2]=We[1]),Ze=Ze?[Ze[1],Ze[2]]:[qe,navigator.appVersion,"-?"]),document.webL10n.ready((function(){R=!0,(e=Ue("lang"))&&e!==document.webL10n.getLanguage()&&(document.webL10n.setLanguage(e),R=!1)})),document.addEventListener("localized",(function(){R&&(document.documentElement.lang=document.webL10n.getLanguage().substr(0,2),document.querySelector("meta[name='description']").setAttribute("content",document.webL10n.get("lb_desc")),document.querySelector("link[rel='manifest']").href="Manifest/appmanifest_"+document.webL10n.getLanguage().substr(0,2)+".json",document.querySelector("link[rel='canonical']")&&(document.querySelector("link[rel='canonical']").href="https://grrd01.github.io/Puzzle/?lang="+document.webL10n.getLanguage().substr(0,2)),ee("select_theme").innerHTML=document.webL10n.get("lb_"+t),ee("imageOff").setAttribute("alt",document.webL10n.get("lb_image")),ee("image0-1").setAttribute("alt",document.webL10n.get("lb_image")),L||(Ie.src="Images/piece_gold.svg",pe.innerHTML=document.webL10n.get("lb_html5"),ke(we)),setTimeout((function(){new Date("05/01/2020")>new Date&&"africa"!==t&&Pe&&"africa"!==localStorage.getItem("s_new_theme")&&(Ie.src="Images/africa/theme.png",pe.innerHTML=document.webL10n.get("lb_new_theme")+" "+document.webL10n.get("lb_africa"),ke(we),localStorage.setItem("s_new_theme","africa"))}),500)),R=!0}))}();