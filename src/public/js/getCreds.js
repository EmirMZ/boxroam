function retrieveName() {
    $.ajax({
        type: "GET",
        url: "/api/protected",
        xhrFields: {
            withCredentials: true
        },
        success: function (data) {
            console.log(data);
        },
        error: function (data) {
            console.log(data);
        }
    });
}
