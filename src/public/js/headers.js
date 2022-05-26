const slideFadeOut = (elem) => {
    const fade = { opacity: 0, transition: 'opacity 400ms' };
    elem.css(fade).slideUp();
};
const slideFadeIn = (elem) => {
    const fade = { opacity: 1, transition: 'opacity 400ms' };
    elem.css(fade).slideDown();
}; 

function headerSwitch(){
    var result = doesHttpOnlyCookieExist('token')
    if (result == true){
        slideFadeOut($(document.querySelector('.authenticate-bar')));
        slideFadeIn($(document.querySelector('.logged-in-bar')));
        console.log (result)
    }else{
        slideFadeOut($(document.querySelector('.logged-in-bar')));
        slideFadeIn($(document.querySelector('.authenticate-bar')));
        console.log (result)       
    }
}
$(function(){

        
    $("#header").load("./modals/headers.html",function(){
        var result = doesHttpOnlyCookieExist('token')
        if (result == true){
            $(document.querySelector('.authenticate-bar')).css("display","none");
            $(document.querySelector('.logged-in-bar')).css("display","block");
            console.log (result)
        }else{
            $(document.querySelector('.logged-in-bar')).css("display","none");
            $(document.querySelector('.authenticate-bar')).css("display","block");
            console.log (result)       
        }
    });


    
});