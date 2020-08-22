//eventlisteners
document.getElementById("search-button").addEventListener("click", search);
document.getElementById("otherRooms").addEventListener("click", function() {
    $('.navbar-collapse').collapse('hide');
});
document.getElementById("elevatorToggle").addEventListener("click", function() {
    $('.navbar-collapse').collapse('hide');
    if (document.getElementById("elevatorCheckbox").checked)
        Array.from(document.getElementsByClassName("elevator")).forEach(x => {
            x.classList.remove("hidden");});
    else
        Array.from(document.getElementsByClassName("elevator")).forEach(x => {
            x.classList.add("hidden");});
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
if (rooms[getSearchedRoom()] != undefined && rooms[getSearchedRoom()].length > 0)
    updateMap(getSearchedRoom());
else if (getSearchedRoom().length > 0)
    alert("Zimmer nicht gefunden");


// search
function search(){
    searchInput = document.getElementById("search-input");
    if (parseInt(window.getComputedStyle(searchInput).width) < 50 // not open
     || searchInput.value.length <= 0)                            // no text
        searchInput.focus();
    else if (!isNaN(searchInput.value)          // not text
             && searchInput.value > 0           // between 0
             && searchInput.value < 501){       // and 500
        window.history.pushState("", "", location.href = location.origin + location.pathname + "#" + searchInput.value);
        searchInput.blur();
        searchInput.value = "";
    }
    else
        alert("Bitte eine valide Zimmernummer angeben");
}


// update map
function updateMap(room){
    var dot = document.getElementById("dot");
    dot.style.display = "none";
    var square = document.getElementById("square");
    square.style.display = "none";
    if (rooms[room] != undefined){
        dot.style.top  = rooms[room][0] + "%";
        dot.style.left = rooms[room][1] + "%";
        dot.style.display = "inherit";
        
        square.style.display = "none";
        if (rooms[room][2] != undefined){
            square.style.top  = floors[rooms[room][2]][0] + "%";
            square.style.left = floors[rooms[room][2]][1] + "%";
            square.style.display = "inherit";
        }
    }
}


// get searched room
function getSearchedRoom(){
    return window.location.hash.substr(1);
}


//toggle elevators
