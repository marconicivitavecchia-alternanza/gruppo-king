var init=function(){
    console.log("ciao sono io con jquery");
    $("#e-mail>input").attr("placeholder","@gmail.com");
    $("#password>input").attr("placeholder","***********");

}

$(document).ready(init);