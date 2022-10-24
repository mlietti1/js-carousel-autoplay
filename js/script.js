const imagesArray = ['01.jpg',
  '02.jpg',
  '03.jpg',
  '04.jpg',
  '05.jpg'
];

let imagesTags = '';
let selectionTags = '';
const container = document.querySelector('.container');
const slider = document.querySelector('.content-left');
const imgSelect = document.querySelector('.img-select')
let counterImages = 0;
let counterSelection = 0;

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let autoScroll = setInterval(nextImg, 1000);
let stopScroll;

for(let i = 0; i < imagesArray.length; i++){
  imagesTags += `
  <img class="item" src="img/${imagesArray[i]}" alt="${imagesArray[i]}">
  `;
}

for(let i = 0; i < imagesArray.length; i++){
  selectionTags += `
  <img class="selection" src="img/${imagesArray[i]}" alt="${imagesArray[i]}">
  `;
}


slider.innerHTML += imagesTags;
imgSelect.innerHTML += selectionTags;


const items = document.getElementsByClassName('item');
const selections = document.getElementsByClassName('selection');


items[counterImages].classList.add('active');
selections[counterSelection].classList.add('active');



container.addEventListener('mouseover', function(){
  stopScroll = clearInterval(autoScroll);
})

container.addEventListener('mouseout', function(){
  autoScroll = setInterval(nextImg, 1000);
})

next.addEventListener('click', function(){
  
  nextImg();
  
});


function nextImg (){
  if (counterImages === imagesArray.length - 1 && counterSelection === imagesArray.length - 1){
    items[counterImages].classList.remove('active');
    selections[counterSelection].classList.remove('active');
    counterImages = -1;
    items[++counterImages].classList.add('active');
    counterSelection = -1;
    selections[++counterSelection].classList.add('active');
    console.log(counterImages);
    console.log(counterSelection);
  }else{
    items[counterImages].classList.remove('active');
    items[++counterImages].classList.add('active');
    selections[counterSelection].classList.remove('active');
    selections[++counterSelection].classList.add('active');
    console.log(counterImages);
  }
}

prev.addEventListener('click', function(){

  clearInterval(autoScroll);
  
  if (counterImages === 0 && counterSelection === 0){
    items[counterImages].classList.remove('active');
    selections[counterSelection].classList.remove('active');
    counterImages = imagesArray.length;
    items[--counterImages].classList.add('active');
    counterSelection = imagesArray.length;
    selections[--counterSelection].classList.add('active');
    console.log(counterImages);
    console.log(counterSelection);
  }else{
    items[counterImages].classList.remove('active');
    items[--counterImages].classList.add('active');
    selections[counterSelection].classList.remove('active');
    selections[--counterSelection].classList.add('active');
    console.log(counterImages);
  }

  
});