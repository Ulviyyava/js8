let mySlider =[
'images/image1-png',
'images/image2-jpg',
'images/image3-png',

]
let img =document.querySelector('.slider img');
img. scr=mySlider[slide]
let slide=0
img.scr = mySlider[slide]


let next =document.querySelector('.next');
let previous = document.querySelector('.previous');
next.addEventListener('click', function(){
    slide++;
    if(slide > mySlider.length - 1)
    slide = 0;
    img .scr=mySlider[slide]

})
previous.addEventListener('click',function(){
    slide--;
    if(slide===-1){
     slide=mySlider.length - 1   
    }
    img. scr=mySlider[slide];
})
function AutoPlay(){
    slide++;
    if(slide > mySlider.length - 1)
    slide = 0;
    img .scr=mySlider[slide]

}




