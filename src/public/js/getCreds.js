function doesHttpOnlyCookieExist(cookiename) {
    var d = new Date();
    d.setTime(d.getTime() + (1000));
    var expires = "expires=" + d.toUTCString();
  
    document.cookie = cookiename + "=new_value;path=/;" + expires;
    return document.cookie.indexOf(cookiename + '=') == -1;
}



function retrieveAccount() {
    return new Promise((resolve,reject) =>{
        $.ajax({
            type: "GET",
            url: "/api/protected",
            xhrFields: {
                withCredentials: true
            },
            success: function (data) {
                resolve(data);
            },
            error: function (error) {
                reject(error);
            }
        });
    })
}

function logoutAccount() {
    return new Promise((resolve,reject) =>{
        $.ajax({
            type: "GET",
            url: "/api/logout",
            xhrFields: {
                withCredentials: true
            },
            success: function (data) {
                resolve(data);
            },
            error: function (error) {
                reject(error);
            }
        });
    })
}

function addBooking(route_from,route_to,bus_id) {
    return new Promise((resolve,reject) =>{
        $.ajax({
            type: "POST",
            url: "/api/addBooking",
            data:{
                "route_from" : route_from,
                "route_to" : route_to,
                "bus_id" : bus_id
            },
            xhrFields: {
                withCredentials: true
            },
            success: function (data) {
                resolve(data);
            },
            error: function (error) {
                reject(error);
            }
        });
    })
}

