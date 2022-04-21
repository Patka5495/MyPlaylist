window.onload=function() {
    var E = document.getElementsByClassName("album_intro");
    var m = E.length;
    var n = parseInt(Math.random()*m);
    for (var i=m-1;i>=0;i--) {
    var e = E[i];
    e.style.display='none';
    }
    E[n].style.display='';
}
function reload(){
    var E = document.getElementsByClassName("album_intro");
    var m = E.length;
    var n = parseInt(Math.random()*m);
    for (var i=m-1;i>=0;i--) {
    var e = E[i];
    e.style.display='none';
    }
    E[n].style.display='';
}
function filter(){  
    var value, name, item, i;

    value = document.getElementById("value").value.toUpperCase();
    item = document.getElementsByClassName("item");

    for(i=0;i<item.length;i++){
    name = item[i].getElementsByClassName("name");
    if(name[0].innerHTML.toUpperCase().indexOf(value) > -1){
        item[i].style.display = "flex";
    }else{
        item[i].style.display = "none";
    }
    }
}
$(document).ready(function(){
    $(".menu>a").click(function(){
        var submenu = $(this).next("ul");
        if( submenu.is(":visible") ){
            submenu.slideUp();
        }else{
            submenu.slideDown();
        }
    });
});