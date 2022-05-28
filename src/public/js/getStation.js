
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

var stationList = retrieveStation()