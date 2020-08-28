//eventlisteners
document.getElementById("search-button").addEventListener("click", search);
document.getElementById("otherRooms").addEventListener("click", function() {
    $('.navbar-collapse').collapse('hide');
});
document.getElementById("elevatorToggle").addEventListener("click", function() {
    $('.navbar-collapse').collapse('hide');
    if (document.getElementById("elevatorCheckbox").checked) {
        document.getElementById("elevator1").classList.remove("hidden");
        document.getElementById("elevator2").classList.remove("hidden");
        document.getElementById("elevator3").classList.remove("hidden");
    } else {
        document.getElementById("elevator1").classList.add("hidden");
        document.getElementById("elevator2").classList.add("hidden");
        document.getElementById("elevator3").classList.add("hidden");
    }
});
document.getElementById("doorToggle").addEventListener("click", function() {
    $('.navbar-collapse').collapse('hide');
    if (document.getElementById("doorCheckbox").checked) {
        document.getElementById("door1").classList.remove("hidden");
        document.getElementById("door2").classList.remove("hidden");
        document.getElementById("door3").classList.remove("hidden");
    } else {
        document.getElementById("door1").classList.add("hidden");
        document.getElementById("door2").classList.add("hidden");
        document.getElementById("door3").classList.add("hidden");
    }
});
document.getElementById("pathToggle").addEventListener("click", function() {
    $('.navbar-collapse').collapse('hide');
    if (document.getElementById("pathCheckbox").checked) {
        document.getElementById("path1").classList.remove("hidden");
        document.getElementById("path2").classList.remove("hidden");
        document.getElementById("path3").classList.remove("hidden");
        document.getElementById("path4").classList.remove("hidden");
        document.getElementById("path5").classList.remove("hidden");
        document.getElementById("path6").classList.remove("hidden");
    } else {
        document.getElementById("path1").classList.add("hidden");
        document.getElementById("path2").classList.add("hidden");
        document.getElementById("path3").classList.add("hidden");
        document.getElementById("path4").classList.add("hidden");
        document.getElementById("path5").classList.add("hidden");
        document.getElementById("path6").classList.add("hidden");
    }
});
document.getElementById("northToggle").addEventListener("click", function() {
    $('.navbar-collapse').collapse('hide');
    if (document.getElementById("northCheckbox").checked)
        document.getElementById("north").classList.remove("hidden");
    else
        document.getElementById("north").classList.add("hidden");
});
document.getElementById("search-input").addEventListener('keypress', function (e) {
    if (e.key === 'Enter')
        search();
});
var i = new Image;
if (getSearchedRoom().length > 0)
    i.src = "searched-"+getSearchedRoom();
if ("onhashchange" in window)
window.onhashchange = function () {
    updateMap(getSearchedRoom());
}

//first visit cookie
if (document.cookie.split('; ').find(row => row.startsWith('visits')) == undefined)
    document.cookie = "visits=1; max-age=315360000";
else
    document.cookie = "visits=" 
    + (parseInt(document.cookie.split('; ').find(row => row.startsWith('visits')).split('=')[1])+1) //visits ++
    + "; max-age=315360000";

if (document.cookie != "") //prevent errors with local testing
    var visits = parseInt(document.cookie.split('; ').find(row => row.startsWith('visits')).split('=')[1]);
else
    var visits = 1;

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

        //set pointer on load
        if (rooms[getSearchedRoom()] != undefined && rooms[getSearchedRoom()].length > 0)
        updateMap(getSearchedRoom());
        else if (getSearchedRoom().length > 0)
        alert("Zimmer nicht gefunden");
    }
    newImg.src = 'res/apian.jpg';
    document.getElementById("map").removeEventListener('load', loadBetterImage);
}


// search
function search(){
    searchInput = document.getElementById("search-input");
    while (searchInput[0] == "0")
        searchInput = searchInput.substring(1) //remove leading zeros
    if (getSearchedRoom().length > 0) 
        i.src = "searched-"+getSearchedRoom();
    if (parseInt(window.getComputedStyle(searchInput).width) < 50  // not open
     || searchInput.value.length <= 0)                             // no text
        searchInput.focus();                                       // --> do nothing 
    else if (!isNaN(searchInput.value)                  // is number
          && rooms[searchInput.value] != undefined      // is defined
          && rooms[searchInput.value][0] != undefined){
        window.history.pushState("", "", location.href = location.origin + location.pathname + "#" + searchInput.value);
        searchInput.blur();
        searchInput.value = "";                         // --> search
    }
    else
        alert("Zimmer nicht gefunden");
}


// update map
function updateMap(room){
    var dot = document.getElementById("dot");
    dot.style.display = "none";
    var square = document.getElementById("square");
    square.style.display = "none";
    if (rooms[room] != undefined && rooms[room][0] != undefined){
        dot.style.top  = rooms[room][0] + "%";
        dot.style.left = rooms[room][1] + "%";
        dot.style.display = "inherit";
        
        square.style.display = "none";
        if (rooms[room][2] != undefined){
            square.style.top  = floors[rooms[room][2]][0] + "%";
            square.style.display = "inherit";
            if (visits <= 5)
                setTimeout(function(){ square.style.animationName = "blink"; }, 500);
            setTimeout(function(){ square.style.animationName = "none"; }, 2500);
        }
    }
}


// get searched room
function getSearchedRoom(){
    searchInput = window.location.hash.substr(1);
    while (searchInput[0] == "0")
        searchInput = searchInput.substring(1) //remove leading zeros
    return searchInput;
}