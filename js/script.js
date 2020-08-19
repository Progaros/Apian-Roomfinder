document.getElementById("search-button").addEventListener("click", search);

document.getElementById("search-input").addEventListener('keyup', ({key}) => {
    if (key === "Enter")
        search();
});

function search(){
    if (parseInt(window.getComputedStyle(document.getElementById("search-input")).width) < 50)
        document.getElementById("search-input").focus();
    else if (!isNaN(document.getElementById("search-input").value))
        location.href = location.origin + location.pathname + "?room=" + document.getElementById("search-input").value;
    else {
        alert("please enter a valid number");
        if (document.getElementById("search-input").removeEventListener)
        document.getElementById("search-input").removeEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
            search();
            }
        });  
}}