document.getElementById("search-button").addEventListener("click", search);

document.getElementById("search-input").addEventListener('keyup', ({key}) => {
    if (key === "Enter")
        search();
});

if (!isNaN(getSearchedRoom()))
    getMap(getSearchedRoom());

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

function getMap(room){
    document.getElementById("map").innerText = room;
}

function getSearchedRoom(){
    return new URL(location.href).searchParams.get("room");
}