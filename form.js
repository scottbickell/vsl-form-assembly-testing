document.getElementsByClassName("primaryAction").onclick = function () {
    console.log("inside the function");
    window.top.location.href = "https://store.voyagersopris.com/literacy-symposium/";
    console.log("after the redirect statement");
}

document.getElementById('tfa_0').onsubmit = function () {
    window.top.location.href = "https://store.voyagersopris.com/literacy-symposium/";
}