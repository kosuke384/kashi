const btn=document.querySelector('.mobile');
const ham=document.querySelector('.ham');

ham.addEventListener('click',function(){
  btn.classList.toggle('menu-open');
  ham.classList.toggle('menu-open');
});
const child = document.querySelector('.about__content');
const child2 = document.querySelector('.thought__content');
const boxes = document.querySelectorAll('.product__title');
const boxesary=Array.from(boxes);
const child4=document.querySelectorAll('.best__item');
const news=document.querySelectorAll('.news__item');

const cb = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('inview');
    } else {
      entry.target.observe;
    }
  });
};


const io=new IntersectionObserver(cb);

io.observe(child);
io.observe(child2);
boxesary.forEach(box=>{
  io.observe(box);
})
child4.forEach(el=>{
  io.observe(el);
})
news.forEach(el=>{
  io.observe(el);
})



