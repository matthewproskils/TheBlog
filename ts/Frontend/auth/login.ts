function onSignIn(googleUser: any) {
    console.log("hello")
    let id_token = googleUser.getAuthResponse().id_token;
    let xhr = new XMLHttpRequest();
    xhr.open('POST', window.location.origin + '/api/tokenauth');
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onload = function () {
        if (xhr.responseText == "ERROR") {
            alert("Error, please reload the page");
        } else {
            document.getElementById("OnauthContainer").style.display = "block";
            document.getElementById("GauthContainer").style.display = "none";
            window.localStorage.setItem("Token", xhr.responseText);
            window.localStorage.setItem("Id", id_token);    
        }
    };
    xhr.send(JSON.stringify({ data: id_token }));
}