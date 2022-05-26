function doesHttpOnlyCookieExist(cookiename) {
    var d = new Date();
    d.setTime(d.getTime() + (1000));
    var expires = "expires=" + d.toUTCString();
  
    document.cookie = cookiename + "=new_value;path=/;" + expires;
    return document.cookie.indexOf(cookiename + '=') == -1;
}



function retrieveAccount() {
    $.ajax({
        type: "GET",
        url: "/api/protected",
        xhrFields: {
            withCredentials: true
        },
        success: function (data) {
            console.log(data)
            return data;
        },
        error: function (data) {
            console.log(data)
            return data;
        }
    });
}

