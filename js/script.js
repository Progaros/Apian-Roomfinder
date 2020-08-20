document.getElementById("search-button").addEventListener("click", search);

document.getElementById("search-input").addEventListener('keyup', ({key}) => {
    if (key === "Enter")
        search();
});

if (document.getElementById("map").complete) {
  loadBetterImage()
} else {
    document.getElementById("map").addEventListener('load', loadBetterImage);
}
function loadBetterImage(){
    var newImg = new Image;
    newImg.onload = function() {
        document.getElementById("map").src = this.src;
    }
    newImg.src = 'res/apian.jpg';
    document.getElementById("map").removeEventListener('load', loadBetterImage);
}

if (!isNaN(getSearchedRoom()) && getSearchedRoom() != null)
    updateMap(getSearchedRoom());

function search(){
    if (parseInt(window.getComputedStyle(document.getElementById("search-input")).width) < 50)
        document.getElementById("search-input").focus();
    else if (!isNaN(document.getElementById("search-input").value)          // not text
             && document.getElementById("search-input").value.length > 0    // not empty
             && document.getElementById("search-input").value > 0           //between 0
             && document.getElementById("search-input").value < 501){       //and 500
        window.history.pushState("", "", location.href = location.origin + location.pathname + "?room=" + document.getElementById("search-input").value);
    }
    else
        alert("Bitte eine Nummer zwischen 1 und 500 eingeben");
}

function updateMap(room){
    var dot = document.getElementById("dot");
    dot.style.display = "inherit";
    dot.style.top  = rooms[room][0] + "vw";
    dot.style.left = rooms[room][1] + "%";
}




function getSearchedRoom(){
    return new URL(location.href).searchParams.get("room");
}