var result_page = function () {
    var url = document.getElementById("url").value
    console.log(url)
    if (url == ""){
        var alert = document.getElementById("alert")
        alert.removeAttribute("hidden");
    }
    else {
        chrome.tabs.create({url: chrome.extension.getURL('result.html')});
    }
};

var analyze = function () {
    var url = document.getElementById("url").value

    let urlexp = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    let urlreg = new RegExp(urlexp)

    if (url == ""){
        var alert = document.getElementById("alert")
        alert.style.display = "block";
        alert.innerText = "URL cannot be empty!"
        return
    }
    else if (!url.match(urlreg)){
        var alert = document.getElementById("alert")
        alert.style.display = "block";
        alert.innerText = "Invalid URL!"
        return
    }
    document.getElementById("resultbutton").style.display = "none";
    document.getElementById("alert").style.display = "none";
    document.getElementsByClassName("loader")[0].style.display = "block";

    load_text = document.getElementById("loadtext");
    load_text.style.display = "block" 
}

window.onload = function () {
    document.getElementById("resultbutton").onclick = analyze;
}