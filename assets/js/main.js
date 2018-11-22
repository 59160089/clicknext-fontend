/*var btnToggle = document.querySelector(".toggle");

var sidebar = document.querySelector(".sidebar");

var btnClose = document.getElementById('0089');

console.log(btnClose);

function toggle() {
  
    if(sidebar.className.indexOf('hide') === -1){
        console.log('add hide')
        sidebar.classList.add('hide');
    }else{
        sidebar.classList.remove('hide');
        console.log('remove hide')
    }

    if(sidebar.className.indexOf('show') === -1){
        sidebar.classList.add('show');
    }else{
        sidebar.classList.remove('show');
    }
}

btnToggle.onclick = toggle;
btnClose.onclick = toggle;
*/

$('.toggle').on('click',  function(){
    $('.sidebar').toggleClass('hide');
    $('.sidebar').toggleClass('show');
});


$('#0089').on('click',function(){
    $('.sidebar').toggleClass('hide');
    $('.sidebar').toggleClass('show');
});