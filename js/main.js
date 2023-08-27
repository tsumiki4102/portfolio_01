'use strict';

{
  //スムーススクロール
  const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
  for (let i = 0; i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault();
      let href = smoothScrollTrigger[i].getAttribute('href');
      let targetElement = document.getElementById(href.replace('#', ''));
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const gap = 60;
      const target = rect + offset - gap;
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    });
  }

  //スクロール時のコンテンツ表示
  const scrollAnimationEle = document.querySelectorAll('.fade');
  const scrollAnimationFunc = function() {
    for(let i = 0; i < scrollAnimationEle.length; i++) {
      const triggerMargin = 200;
      if (window.innerHeight > scrollAnimationEle[i].getBoundingClientRect().top + triggerMargin) {
        scrollAnimationEle[i].classList.add('show');
      }
    }
  }
  window.addEventListener('load', scrollAnimationFunc);
  window.addEventListener('scroll', scrollAnimationFunc);

  //グローバルナビの表示、非表示
  const scrollNavi = function() {
    const mainNavi = document.getElementById('main_nav');
    const headerTop = document.getElementById('top');
    const y = window.scrollY;
    const headerTopClientRect = headerTop.getBoundingClientRect();
    const triggerY = y + headerTopClientRect.top;
    if(y > triggerY) {
      mainNavi.classList.add('active');
    } else {
      mainNavi.classList.remove('active');
    }
  };
  window.addEventListener('scroll', scrollNavi);

  //アローナビ表示、非表示
  const scrollArrow = function() {
    const y = window.scrollY;
    const arrow = document.getElementById('arrow');
    const arrowTrigger = document.getElementById('arrow_trigger');
    const arrowRect = arrowTrigger.getBoundingClientRect().top
    if(y > arrowRect) {
      arrow.classList.add('arrow_active');
    } else {
      arrow.classList.remove('arrow_active');
    }
  };
  window.addEventListener('scroll', scrollArrow);

  //ハンバーガーメニュー
  const open = document.getElementById('open');
  const mainNavSp = document.getElementById('main_nav_sp');
  const close = document.getElementById('close');

  open.addEventListener('click', () =>{
    mainNavSp.classList.add('open');
    open.classList.add('hide');
    close.classList.add('show');
  });
  
  close.addEventListener('click', () =>{
    mainNavSp.classList.remove('open');
    open.classList.remove('hide');
    close.classList.remove('show');
  });

  // ローディング画面
  window.addEventListener("load", () => {
    setTimeout(() => {
      const loadingEl = document.querySelector('.loading');
      loadingEl.classList.remove('loading_active');
    }, 2000);
  });
}