const slideFadeOut = (elem) => {
    const fade = { opacity: 0, transition: 'opacity 400ms' };
    elem.css(fade).slideUp();
};
const slideFadeIn = (elem) => {
    const fade = { opacity: 1, transition: 'opacity 400ms' };
    elem.css(fade).slideDown();
}; 

function dashboardButtonSwitch(){
    retrieveAccount().then(result => {
        if(result.role == 'driver' || result.role == 'operator'){
            $(document.querySelector('#dashboard_button')).removeClass('disp-hide');
            $(document.querySelector('#account_button')).addClass('disp-hide');
        }
    }).catch(err => {
        // got error
    }); 
}

function headerSwitch(){
    var result = doesHttpOnlyCookieExist('token')
    dashboardButtonSwitch()
    if (result == true){
        slideFadeOut($(document.querySelector('.authenticate-bar')));
        slideFadeIn($(document.querySelector('.logged-in-bar')));
        $(document.querySelectorAll("#staff_login_button")).addClass('disp-hide')
        dashboardButtonSwitch() 
        console.log (result)
    }else{
        slideFadeOut($(document.querySelector('.logged-in-bar')));
        slideFadeIn($(document.querySelector('.authenticate-bar')));
        $(document.querySelectorAll("#staff_login_button")).removeClass('disp-hide')
        console.log (result)       
    }
}
$(function(){


    
    $("#header").load("./modals/headers.html",function(){
        dashboardButtonSwitch() 
        var result = doesHttpOnlyCookieExist('token')
        if (result == true){
            $(document.querySelectorAll("#staff_login_button")).addClass('disp-hide')
            $(document.querySelector('.authenticate-bar')).css("display","none");
            $(document.querySelector('.logged-in-bar')).css("display","block");
            console.log (result)
        }else{
            $(document.querySelector('.logged-in-bar')).css("display","none");
            $(document.querySelector('.authenticate-bar')).css("display","block");
            console.log (result)       
        }

        if ($(location).attr("pathname") == '/'){
            $(document.querySelector('#home_button')).removeClass('text-white')
            $(document.querySelector('#home_button')).addClass('text-secondary')
            console.log('heree')
        }else if($(location).attr("pathname") == '/account'){
            $(document.querySelector('#account_button')).removeClass('text-white')
            $(document.querySelector('#account_button')).addClass('text-secondary')
            console.log('overherer')
        }
    });


    
});