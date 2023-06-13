let subBtn = document.getElementById('sub');
let span = document.getElementById('theText');
subBtn.addEventListener('click',function(){
    span.innerHTML = myInput.value
    span.style.color=myInput.value

})