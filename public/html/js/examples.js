var load = function(pgID, lineID) {

    var root = document.querySelector("#parentIframe");

    // Mobile version - Don't display the iframe, don't open it on click, display a link instead
    // The condition in the if is a trick, comparing the "display" value always point to a blank field "" !
    if(root.clientHeight <= 0) {
        // After testing, you can't click on documentation link on mobile, so remove the highlight
        //document.getElementById("PGlink_" + pgID).click()
        return;
    }
    // Desktop version - Display the playground in an iframe on the right
    else {
        var iframe = document.createElement("iframe");
        if (root.childNodes.length > 0) {
            root.removeChild(root.childNodes[0]);
        }
        root.appendChild(iframe);
    
        iframe.src = "https://playground.babylonjs.com/frame.html" + pgID;
        iframe.style.outline = 'none !important';
        iframe.style.border = 'none !important';

        var lines = document.getElementsByClassName("itemLine");

        for (var lineIndex = 0; lineIndex < lines.length; lineIndex++) {
            var line = lines[lineIndex];
            line.classList.remove("itemLineActive");
        }

        document.getElementById(lineID).classList.add("itemLineActive");
    }
};
var loadMobile = function(pgID) {
    var root = document.querySelector("#parentIframe");
    if(root.clientHeight == 0) {
        document.getElementById("PGlink_" + pgID).click()
    }
};

var filterBar = document.querySelector("#filterBar");
var filterBarClear = document.querySelector("#filterBarClear");
var filter = function() {
    let value = filterBar.value.toLowerCase();
    var lines = document.querySelectorAll(".itemLine");

    // Clear button
    if(value.length > 0) filterBarClear.style.display = "inline-block";
    else  filterBarClear.style.display = "none";

    for (var lineIndex = 0; lineIndex < lines.length; lineIndex++) {
        var line = lines[lineIndex];
        if (line.innerText.toLowerCase().indexOf(value) > -1) {
            line.style.display = "";
        } else {
            line.style.display = "none";
        }
    }

    var categories = document.getElementsByClassName("categoryContainer");
    var displayCount = categories.length;

    for(var categoryIndex = 0; categoryIndex < categories.length; categoryIndex++) {
        var category = categories[categoryIndex];
        category.style.display = "block";
        if(category.clientHeight < 25) {
            category.style.display = "none";
            displayCount --;
        }
    }

    if(displayCount == 0) document.getElementById("noResultsContainer").style.display = "block";
    else  document.getElementById("noResultsContainer").style.display = "none";
}

filterBarClear.addEventListener('click', function() {
    filterBar.value = "";
    filter();
});


//filterBar.addEventListener('keyup', filter);
//filterBar.addEventListener('change', filter);
filterBar.addEventListener('input', filter); // Necessary for clearing with the "x" on Edge