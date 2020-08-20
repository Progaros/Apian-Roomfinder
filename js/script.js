//eventlisteners
document.getElementById("search-button").addEventListener("click", search);
document.getElementById("otherRooms").addEventListener("click", function() {
    $('.navbar-collapse').collapse('hide');
});
document.getElementById("search-input").addEventListener('keyup', ({key}) => {
    if (key === "Enter")
        search();
});
if ("onhashchange" in window)
window.onhashchange = function () {
    updateMap(getSearchedRoom());
}

//load better picture
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


//set pointer on load
if (rooms[getSearchedRoom()] != undefined)
    updateMap(getSearchedRoom());

function search(){
    searchInput = document.getElementById("search-input");
    if (parseInt(window.getComputedStyle(searchInput).width) < 50)
        searchInput.focus();
    else if (!isNaN(searchInput.value)          // not text
             && searchInput.value.length > 0    // not empty
             && searchInput.value > 0           //between 0
             && searchInput.value < 501){       //and 500
        window.history.pushState("", "", location.href = location.origin + location.pathname + "#" + searchInput.value);
        searchInput.blur();
    }
    else
        alert("Bitte eine valide Zimmernummer angeben");
}

function updateMap(room){
    var dot = document.getElementById("dot");
    dot.style.display = "inherit";
    dot.style.top  = rooms[room][0] + "%";
    dot.style.left = rooms[room][1] + "%";
}




function getSearchedRoom(){
    return window.location.hash.substr(1);
}