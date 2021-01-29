function onSignIn(googleUser) {
    console.log("hello");
    let id_token = googleUser.getAuthResponse().id_token;
    let xhr = new XMLHttpRequest();
    xhr.open('POST', window.location.origin + '/api/tokenauth');
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onload = function () {
        console.log('Signed in as: ' + xhr.responseText);
    };
    xhr.send(JSON.stringify({ data: id_token }));
}
//# sourceMappingURL=login.js.map