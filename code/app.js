var accedi =function(){
    console.log("hai cliccato su accedi");
    var username=$("#e-mail>input").val();
    console.log("e-mail: "+ username);
    var password=$("#password>input").val();
    console.log("password: "+ password);
    var auth=btoa(username+password);
    console.log("auth: "+ auth);

    $.get("http://10.3.0.205:3000/login?auth= "+auth,accediRisposta);
}

var accediRisposta= function(data){
    console.log(data);
    alert(data);
}

var init=function(){
    console.log("ciao sono io con jquery");
    $("#e-mail>input").attr("placeholder","@gmail.com");
    $("#password>input").attr("placeholder","***********");

    $("#accedi>button").on("click",accedi);


}

$(document).ready(init);