let container = document.getElementById('container');
let count = 100 ;
for (var i = 0 ; i < count ; i++){
    var div = document.createElement('div');
    let leftSnow = Math.floor(Math.random() * container.clientWidth); 
    let topSnow = Math.floor(Math.random() * container.clientHeight);
    let widthSnow = Math.floor(Math.random() * 50) ;
    let blurSnow = Math.floor(Math.random() * 5); 
    let timeSnow = Math.floor((Math.random()*7)) + 4 ;
    div.classList.add('snow');
    div.style.left = leftSnow + 'px';
    div.style.top = topSnow + 'px' ;
    div.style.width = widthSnow +'px' ;
    div.style.height = widthSnow + 'px';
    div.style.animationDuration = timeSnow + 's' ;
    div.style.filter = 'blur(' + blurSnow + 'px)' ;

    container.appendChild(div);
}