$(function() {
    const slideFadeOut = (elem) => {
        const fade = { opacity: 0, transition: 'opacity 400ms' };
        elem.css(fade).slideUp();
        };
    const slideFadeIn = (elem) => {
        const fade = { opacity: 1, transition: 'opacity 400ms' };
        elem.css(fade).slideDown();
        };    

    const closeSuccess= () => {
        slideFadeOut($(document.querySelectorAll('.register-modal-form')))
        slideFadeIn($(document.querySelector('.checkmark-register')))
        slideFadeOut($(document.querySelector('.authenticate-bar')))
        slideFadeIn($(document.querySelector('.logged-in-bar'))) 
        setTimeout(function() {$(document.querySelector('.register-modal')).modal('toggle')}, 3000);
    }
    
    
    if(window.location.pathname == '/'){
        $("#includedContent").append($('<div>').load("./modals/register.html #registerModal"));
    }
    if(window.location.pathname == '/staff'){
        $("#includedContent").append($('<div>').load("./modals/registerstaff.html #registerModal"));
    }

    
    $(document).on("click",'input[id="name"]',(function() {
        $('input[id="name"]').removeAttr('style'); 
    }));

    $(document).on("click",'input[type="email"]',(function() {
        $('input[type="email"]').removeAttr('style');
    }));

    $(document).on("click",'input[id="phoneNumber"]',(function() {
        $('input[id="phoneNumber"]').removeAttr('style'); 
    }));

    $(document).on("click",'input[type="password"]',(function() {
        $('input[type="password"]').removeAttr('style'); 
    }));

    $(document).on("click",'input[id="gender"]',(function() {
        $('input[id="gender"]').removeAttr('style'); 
    }));

    $(document).on("click",'input[id="address"]',(function() {
        $('input[id="address"]').removeAttr('style'); 
    }));

    $(document).on("click","button.register-submit",(function() {
        $(document.querySelector('.error-message')).hide()
        var user_name = $("#name").val()
        var email = $("#email").val();
        var phoneNumber = $("#phoneNumber").val()
        var password = $("#password").val();
        var gender = $("#gender").val()
        var address = $("#address").val()
        var role = $("#role").val();
        // Checking for blank fields.
        if (user_name == '' || email == '' || phoneNumber == '' || password == '' || gender == '' || address  == '' || role == '') {
            if (user_name == '' ) {
                $('input[type="text"],input[id="name"]').css("border", "2px solid red");
                $('input[type="text"],input[id="name"]').css("box-shadow", "0 0 3px red");
            }
            if (email == '' ) {
                $('input[type="email"],input[id="email"]').css("border", "2px solid red");
                $('input[type="email"],input[id="email"]').css("box-shadow", "0 0 3px red");
            }
            if (phoneNumber == '' ) {
                $('input[type="text"],input[id="phoneNumber"]').css("border", "2px solid red");
                $('input[type="text"],input[id="phoneNumber"]').css("box-shadow", "0 0 3px red");
            }
            if (password == '' ) {
                $('input[type="password"],input[id="password"]').css("border", "2px solid red");
                $('input[type="password"],input[id="password"]').css("box-shadow", "0 0 3px red");
            }
            if (gender == '' ) {
                $('input[type="text"],input[id="gender"]').css("border", "2px solid red");
                $('input[type="text"],input[id="gender"]').css("box-shadow", "0 0 3px red");
            }
            if (address == '' ) {
                $('input[type="text"],input[id="address"]').css("border", "2px solid red");
                $('input[type="text"],input[id="address"]').css("box-shadow", "0 0 3px red");
            }
        } else {
            console.log(JSON.stringify({                   
                "name": user_name,
                "email": email,
                "phonenumber": phoneNumber,
                "password": password,
                "gender": gender,
                "address": address,
                "role": role
            }))
            $.ajax({
                type: "POST",
                url: "/api/register",
                data: JSON.stringify({                   
                    "name": user_name,
                    "email": email,
                    "phonenumber": phoneNumber,
                    "password": password,
                    "gender": gender,
                    "address": address,
                    "role": role
                }),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function(data) {
                    if (data.message == 'register_success') {
                        $("form")[0].reset();
                        $('input[type="text"],input[type="password"]').css({
                            "border": "2px solid #00F5FF",
                            "box-shadow": "0 0 5px #00F5FF"
                        });
                        
                        closeSuccess();

                        console.log(data);
                    } else {
                        console.log(data);
                    }
                },
                error: function(data) {
                    slideFadeIn($(document.querySelector('.error-message')))
                    $('#error_message').text(data.responseJSON.errors[0].msg)

                }
            })
        }
    }));
});