
function retrieveStation() {
    return new Promise((resolve,reject) =>{
        $.ajax({
            type: "GET",
            url: "/api/getStation",
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
function retrieveBus(from,to) {
    return new Promise((resolve,reject) =>{
        $.ajax({
            type: "POST",
            url: "/bus/getBusByRoute",
            data: JSON.stringify({                   
                "route_from": from,
                "route_to": to
            }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            xhrFields: {
                withCredentials: true
            },
            success: function (data) {
                resolve(data);
            },
            error: function (data) {
                reject(data);
            }
        });
    })
}