document.querySelector("#iword").oninput = function (e) {
    var value = e.target.value;
    window.preword = value;
    document.querySelector('#preword').innerHTML = value;
}

document.querySelector("#isize").oninput = function (e) {
    var value = e.target.value;
    document.querySelector('#preword').style.fontSize=parseInt(value)+'px';
}

document.querySelector("#icolor").oninput = function (e) {
    var value = e.target.value;
    document.querySelector('#preword').style.color=value;
}