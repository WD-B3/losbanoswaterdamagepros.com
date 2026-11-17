(function(){
  var toggle=document.querySelector('.nav-toggle'),menu=document.getElementById('main-menu');
  if(toggle&&menu){toggle.addEventListener('click',function(){var o=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',o?'true':'false');});}
  var btns=document.querySelectorAll('.drop-btn');
  for(var i=0;i<btns.length;i++){(function(b){b.addEventListener('click',function(){var li=b.parentNode;var o=li.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');});})(btns[i]);}
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){var o=document.querySelectorAll('.has-drop.open');for(var i=0;i<o.length;i++){o[i].classList.remove('open');}if(menu){menu.classList.remove('open');}if(toggle){toggle.setAttribute('aria-expanded','false');}}});
  document.addEventListener('click',function(e){if(!e.target.closest('.has-drop')){var o=document.querySelectorAll('.has-drop.open');for(var i=0;i<o.length;i++){o[i].classList.remove('open');}}});
  var fc=document.querySelector('.floatcall'),ft=document.querySelector('.site-footer');
  if(fc&&ft&&'IntersectionObserver' in window){new IntersectionObserver(function(en){fc.classList.toggle('hide',en[0].isIntersecting);}).observe(ft);}
})();
