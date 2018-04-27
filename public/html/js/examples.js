var load = function(pgID,lineID) {
    var iframe = document.createElement("iframe");
    var root = document.querySelector("#parentIframe");
    if (root.childNodes.length > 0) {
        root.removeChild(root.childNodes[0]);
    }
    root.appendChild(iframe);
 
    iframe.src = "https://playground.babylonjs.com/frame.html" + pgID + "?";

    var lines = document.getElementsByClassName("itemLine");

    for (var lineIndex = 0; lineIndex < lines.length; lineIndex++) {
        var line = lines[lineIndex];
        line.classList.remove("itemLineActive");
    }

    document.getElementById(lineID).classList.add("itemLineActive");

};

var filter = function(filter) {

}

var filterBar = document.querySelector("#filterBar");
filterBar.addEventListener('keydown', function () {
    let value = this.value;
    var lines = document.querySelectorAll(".itemLine");

    for (var lineIndex = 0; lineIndex < lines.length; lineIndex++) {
        var line = lines[lineIndex];
        if (line.innerText.indexOf(value) > -1) {
            line.style.display = "";
        } else {
            line.style.display = "none";
        }
    }
});