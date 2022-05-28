$(function() {

    
 
    const slideFadeOut = (elem) => {
        const fade = { opacity: 0, transition: 'opacity 400ms' };
        elem.css(fade).slideUp();
    };
    const slideFadeIn = (elem) => {
        const fade = { opacity: 1, transition: 'opacity 400ms' };
        elem.css(fade).slideDown();
    }; 
    
    if(window.location.pathname == '/'){
        $("#includedContent").append($('<div>').load("./modals/login.html #loginModal"));
        $("#includedContent").append($('<div>').load("./modals/loginstaff.html #loginModalStaff"));
    }

    $(document).on("click",'input[type="email"]',(function() {
        $('input[type="email"]').removeAttr('style');
    }));

    $(document).on("click",'input[type="password"]',(function() {
        $('input[type="password"]').removeAttr('style'); 
    }));

    $(document).on("click","#login-submit",(function() {
        var email = $("#email").val();
        var password = $("#password").val();
        var role = $("#role").val();
        // Checking for blank fields.
        if (email == '' || password == '') {
            if (email == '' ) {
                $('input[type="text"],input[type="email"]').css("border", "2px solid red");
                $('input[type="text"],input[type="email"]').css("box-shadow", "0 0 3px red");
            }
            if (password == '' ) {
                $('input[type="text"],input[type="password"]').css("border", "2px solid red");
                $('input[type="text"],input[type="password"]').css("box-shadow", "0 0 3px red");
            }
        } else {
            $('button[id="login-submit"]').addClass('disabled')
            $.ajax({
                type: "POST",
                url: "/api/login",
                data: JSON.stringify({                   
                    "email": email,
                    "password": password,
                    "role": role
                }),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function(data) {
                    if (data.message == 'login_success') {
                        $("form")[0].reset();
                        $('input[type="text"],input[type="password"]').css({
                            "border": "2px solid #00F5FF",
                            "box-shadow": "0 0 5px #00F5FF"
                        });

                        slideFadeOut($(document.querySelectorAll('.login-modal-form')))
                        slideFadeIn($(document.querySelector('.checkmark-login')))
                        setTimeout(function() {$(document.querySelector('#loginModal')).modal('toggle')}, 3000);
                        headerSwitch()
                        console.log(data);
                    } else {
                        console.log(data);
                    }
                },
                error: function(data) {
                    $('button[id="login-submit"]').removeClass('disabled') 
                    if (data.responseJSON.errors[0].msg == 'login_fail_email') {
                        $('input[type="email"]').css({
                            "border": "2px solid red",
                            "box-shadow": "0 0 3px red"
                        });
                    } else if (data.responseJSON.errors[0].msg == 'login_fail_pass') {
                        $('input[type="password"]').css({
                            "border": "2px solid red",
                            "box-shadow": "0 0 3px red"
                        }); 
                    } 
                }
            })
        }
    }));

    $(document).on("click","#staff_login_submit",(function() {
        var email = $("#staff_email").val();
        var password = $("#staff_password").val();
        var role = $("#staff_role").val();
        // Checking for blank fields.
        if (email == '' || password == '' || role == '') {
            if (email == '' ) {
                $("#staff_email").css("border", "2px solid red");
                $("#staff_email").css("box-shadow", "0 0 3px red");
            }
            if (password == '' ) {
                $("#staff_password").css("border", "2px solid red");
                $("#staff_password").css("box-shadow", "0 0 3px red");
            }
            if (role == '' ) {
                $("#staff_role").css("border", "2px solid red");
                $("#staff_role").css("box-shadow", "0 0 3px red");
            }
        } else {
            $("#staff_login_submit").addClass('disabled')
            $.ajax({
                type: "POST",
                url: "/api/login",
                data: JSON.stringify({                   
                    "email": email,
                    "password": password,
                    "role": role
                }),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function(data) {
                    if (data.message == 'login_success') {
                        $("form")[0].reset();
                        $("#staff_password").css({
                            "border": "2px solid #00F5FF",
                            "box-shadow": "0 0 5px #00F5FF"
                        });

                        slideFadeOut($(document.querySelectorAll('.login-modal-form')))
                        slideFadeIn($(document.querySelector('.checkmark-login-staff')))
                        setTimeout(function() {$(document.querySelector('.login-modal-staff')).modal('toggle')}, 3000);
                        headerSwitch()
                        console.log(data);
                    } else {
                        console.log(data);
                    }
                },
                error: function(data) {
                    $("#staff_login_submit").removeClass('disabled') 
                    if (data.responseJSON.errors[0].msg == 'login_fail_email') {
                        $("#staff_email").css({
                            "border": "2px solid red",
                            "box-shadow": "0 0 3px red"
                        });
                    } else if (data.responseJSON.errors[0].msg == 'login_fail_pass') {
                        $("#staff_password").css({
                            "border": "2px solid red",
                            "box-shadow": "0 0 3px red"
                        }); 
                    } 
                }
            })
        }
    }));
});