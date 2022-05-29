$(function() {
    retrieveAccount().then((data) =>{
        $(document.querySelectorAll('#user_name')).text(data.name)
        $(document.querySelectorAll('#user_email')).text(data.email)
        $(document.querySelectorAll('#user_phone')).text(data.phone)


        if(data.gender == 1){
            $(document.querySelectorAll('#user_gender')).text('Male')
        }else if(data.gender == 2){
            $(document.querySelectorAll('#user_gender')).text('Female')
        }else if(data.gender == 2){
            $(document.querySelectorAll('#user_gender')).text('Other')
        }else{
            $(document.querySelectorAll('#user_gender')).text('Unknown')
        }
        $(document.querySelectorAll('#user_address')).text(data.address)
        $(document.querySelectorAll('#edit_user_name')).val(data.name)
        $(document.querySelectorAll('#edit_user_email')).val(data.email)
        $(document.querySelectorAll('#edit_user_phone')).val(data.phone)
        $(document.querySelectorAll('#edit_user_gender')).val(data.gender)
        $(document.querySelectorAll('#edit_user_address')).val(data.address)
    })
    $(document).on("click",'#user_logout',(function(){
        logoutAccount()
    }))
    $(document).on("click",'#user_edit',(function(){
        $(document.querySelectorAll('#info_user')).slideToggle()
        $(document.querySelectorAll('#info_tripgraph')).slideToggle()
        $(document.querySelectorAll('#edit_user')).slideToggle()
    }))

    const slideFadeIn = (elem) => {
        const fade = { opacity: 1, transition: 'opacity 400ms' ,display : 'block'};
        elem.css(fade).slideDown();
    };    
    

    
    $(document).on("click",'input[id="edit_user_name"]',(function() {
        $('input[id="edit_user_name"]').removeAttr('style'); 
    }));

    $(document).on("click",'input[id="edit_user_email"]',(function() {
        $('input[id="edit_user_email"]').removeAttr('style');
    }));

    $(document).on("click",'input[id="edit_user_phone"]',(function() {
        $('input[id="edit_user_phone"]').removeAttr('style'); 
    }));

    $(document).on("click",'input[id="edit_user_password"]',(function() {
        $('input[id="edit_user_password"]').removeAttr('style'); 
    }));

    $(document).on("click",'input[id="edit_user_gender"]',(function() {
        $('input[id="edit_user_gender"]').removeAttr('style'); 
    }));

    $(document).on("click",'input[id="edit_user_address"]',(function() {
        $('input[id="edit_user_address"]').removeAttr('style'); 
    }));

    $(document).on("click","button.edit_user_submit",(function() {
        $(document.querySelector('.error-message')).hide()
        var user_name = $("#edit_user_name").val()
        var email = $("#edit_user_email").val();
        var phone = $("#edit_user_phone").val()
        var password = $("#edit_user_password").val();
        var gender = $("#edit_user_gender").val()
        var address = $("#edit_user_address").val()
        var role = $("#edit_user_role").val();
        // Checking for blank fields.
        if (user_name == '' || email == '' || phone == '' || password == '' || gender == '' || address  == '' || role == '') {
            if (user_name == '' ) {
                $('input[type="text"],input[id="edit_user_name"]').css("border", "2px solid red");
                $('input[type="text"],input[id="edit_user_name"]').css("box-shadow", "0 0 3px red");
            }
            if (email == '' ) {
                $('input[type="email"],input[id="edit_user_email"]').css("border", "2px solid red");
                $('input[type="email"],input[id="edit_user_email"]').css("box-shadow", "0 0 3px red");
            }
            if (phone == '' ) {
                $('input[type="text"],input[id="edit_user_phone"]').css("border", "2px solid red");
                $('input[type="text"],input[id="edit_user_phone"]').css("box-shadow", "0 0 3px red");
            }
            if (password == '' ) {
                $('input[type="password"],input[id="edit_user_password"]').css("border", "2px solid red");
                $('input[type="password"],input[id="edit_user_password"]').css("box-shadow", "0 0 3px red");
            }
            if (gender == '' ) {
                $('input[type="text"],input[id="edit_user_gender"]').css("border", "2px solid red");
                $('input[type="text"],input[id="edit_user_gender"]').css("box-shadow", "0 0 3px red");
            }
            if (address == '' ) {
                $('input[type="text"],input[id="edit_user_address"]').css("border", "2px solid red");
                $('input[type="text"],input[id="edit_user_address"]').css("box-shadow", "0 0 3px red");
            }
        } else {
            $('button[id="edit_user_submit"]').addClass('disabled')
            console.log(JSON.stringify({                   
                "name": user_name,
                "email": email,
                "phonenumber": phone,
                "gender": gender,
                "address": address,
                "role": role
            }))
            $.ajax({
                type: "POST",
                url: "/api/editProfile",
                data: JSON.stringify({                   
                    "name": user_name,
                    "email": email,
                    "phonenumber": phone,
                    "gender": gender,
                    "address": address,
                    "password":password,
                    "role": role
                }),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function(data) {
                    if (data.message == 'edit_success') {
                        window.location.reload(true)
                        console.log(data);
                    } else {
                        console.log(data);
                    }
                },
                error: function(data) {
                    slideFadeIn($(document.querySelector('.error-message')))
                    $('#error_message_edit').text(data.responseJSON.errors[0].msg)
                    $('button[id="edit_user_submit"]').removeClass('disabled')

                }
            })
        }
    }));
});