let btn_prev = document.querySelector('.prev');
let btn_next = document.querySelector('.next');
let carrosel_container = document.querySelector('.carrosel-container');
let slider = document.querySelector('.carrosel-slider');
let index = 0

let suasImagens = [
  {
    index:0,                  
    src:'https://i.pinimg.com/736x/a8/e1/f7/a8e1f730639ce7d06fe09ff3d2f7cb59.jpg'
  },
  {
    index:1,                  
    src:'https://i.pinimg.com/564x/c1/46/af/c146af48fb9bd786a93c748abad80eda.jpg'
  },
  
  {
    index:2,                  
    src:'https://i.pinimg.com/564x/56/a5/b2/56a5b2973063472c78a31089dc022b53.jpg'
  },
  {
    index:3,                  
    src:'https://i.pinimg.com/564x/de/3f/6d/de3f6d3d0278b569a0fecf6b246bdc68.jpg'
  },
  {
    index:4,                  
    src:'https://i.pinimg.com/564x/7a/bb/38/7abb382e57602f6a07dec92c850f213b.jpg'
  },
  {
    index:5,                  
    src:'https://i.pinimg.com/564x/0b/b6/e5/0bb6e5c3abf80f3b47ce2e782d52cb08.jpg'
  },
  {
    index:6,                  
    src:'https://i.pinimg.com/564x/d0/bc/b3/d0bcb34cccf9e29cbe90577f22ec96d9.jpg'
  }
  
]


function eventLoaders(){

  btn_next.addEventListener('click', function(){
  goNext()
  clickAnimation(btn_next)
})
btn_prev.addEventListener('click', function(){
  goBack()
   clickAnimation(btn_prev)
})
}

eventLoaders()


function insertImages(){
  suasImagens.forEach(function(img){
    let html = `<img class="img-item img-item${img.index}" src="${img.src}"/>`
    slider.insertAdjacentHTML('beforeend',html)
  })
}
insertImages()

function goNext(){ 
  let imgArr = document.querySelectorAll('.img-item')

  index++ 
  if(index <= imgArr.length -1){

     getWidth(index)
     }else{

       index = 0
       getWidth(0)
     }
}

function goBack(){
  let imgArr = document.querySelectorAll('.img-item')
  index--
  if(index <= imgArr.length -1){
    if(index < 0){
      index = imgArr.length -1
    getWidth(index)
    }
    getWidth(index)
     }

}

function clickAnimation(btnClicked){

    if(btnClicked.classList.contains('next')){
         btnClicked.classList.toggle('effect_next')
       }else{ 
           btnClicked.classList.toggle('effect_prev')
       }  
}

function getWidth(param){

   let image_index = document.querySelector('.img-item'+param)

   let tamanho_img = window.getComputedStyle(image_index, null).getPropertyValue("width")

  let tamanho_number = parseInt(tamanho_img.replace('px',''))

  let result = tamanho_number*param

  slider.style.transform = `translateX(-${result}px)`
  paintCircle(index)
   
}

function createCircles(){

  let imgArr = document.querySelectorAll('.img-item')
let circle_container =  document.querySelector('.circle-container')
imgArr.forEach(function(item, index){
  console.log(item)
 item.className.split(" ")[1]
 let html =`<div class="circle-item circle_${item.className.split(" ")[1]}"></div>`
 circle_container.insertAdjacentHTML('beforeend',html)
})
  

  document.querySelectorAll('.circle-item').forEach(function(circleBall,index){   
     circleBall.addEventListener('click',function(){
       clickCircle(index)
     })
  })

    paintCircle(0)
}

createCircles()

function clickCircle(param){ 

  let newIndex = param
  index = newIndex
  getWidth(param)
  paintCircle(param)
}

function paintCircle(param){
    document.querySelectorAll('.circle-item').forEach(function(circle){
    circle.style.background = "transparent"
  })

  document.querySelector('.circle_img-item'+param).style.background = 'lightgray'  
  
}
 