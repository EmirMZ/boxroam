$(function() {
    retrieveAccount().then((data) =>{
        $(document.querySelectorAll('#user_name')).text(data.name)
        $(document.querySelectorAll('#user_email')).text(data.email)
        $(document.querySelectorAll('#user_phone')).text(data.phone)
        $(document.querySelectorAll('#user_gender')).text(data.gender)
        $(document.querySelectorAll('#user_address')).text(data.address)
    })
    $(document).on("click",$(document.querySelectorAll('#user_logout')),(function(){
        logoutAccount()
    }))
});