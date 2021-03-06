<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#212121">
    <meta name="description" content="Raumfinder für das Apian Wohnheim in München - Teile den Standort deines Zimmer mit Besuchern">
    <meta name="robots" content="index, nofollow">
    <meta name="googlebot" content="index, nofollow">
    <meta name="google" content="nositelinkssearchbox">
    <meta name="rating" content="General">
    <meta name="format-detection" content="telephone=no">
    <meta name="geo.region" content="DE">
    <meta name="geo.placename" content="Munich">
    <meta name="google-site-verification" content="uILfD5QPSeEHoqHgoWBq-loq53wbeItk-WPxJEyJoLc" />

    <title>Apian Raumfinder</title>

    <link rel="icon" type="image/png" href="res/icon.ico">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link href="css/style.css?<?php echo filemtime("css/style.css") ?>" rel="stylesheet">
    <link href="css/navbar.css?<?php echo filemtime("css/navbar.css") ?>" rel="stylesheet">
    <link href="css/map.css?<?php echo filemtime("css/map.css") ?>" rel="stylesheet">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse" id="navbar">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="optionsDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Optionen</a>
                    <div class="dropdown-menu bg-dark" id="otherOptions" aria-labelledby="optionsDropdown" style="padding-left: 0.5em;">
                        <div class="custom-control custom-checkbox" id="elevatorToggle">
                            <input type="checkbox" class="custom-control-input" id="elevatorCheckbox">
                            <label class="custom-control-label" for="elevatorCheckbox">Zeige Aufgänge</label>
                        </div>
                        <div class="custom-control custom-checkbox" id="doorToggle">
                            <input type="checkbox" class="custom-control-input" id="doorCheckbox">
                            <label class="custom-control-label" for="doorCheckbox">Zeige Eingänge</label>
                        </div>
                        <div class="custom-control custom-checkbox" id="pathToggle">
                            <input type="checkbox" class="custom-control-input" id="pathCheckbox">
                            <label class="custom-control-label" for="pathCheckbox">Zeige Wege</label>
                        </div>
                        <div class="custom-control custom-checkbox" id="northToggle">
                            <input type="checkbox" class="custom-control-input" id="northCheckbox">
                            <label class="custom-control-label" for="northCheckbox">Zeige Norden</label>
                        </div>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="otherRoomsDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sonstige Räume</a>
                    <div class="dropdown-menu bg-dark" id="otherRooms" aria-labelledby="otherRoomsDropdown">
                        <a class="dropdown-item" href="#buero">Büro</a>
                        <a class="dropdown-item" href="#grillplatz">Grillplatz</a>
                        <a class="dropdown-item" href="#parkplatz">Parkplatz</a>
                        <a class="dropdown-item" href="#briefkaesten">Briefkästen</a>
                        <a class="dropdown-item" href="#Kickerraum">Kickerraum</a>
                        <a class="dropdown-item" href="#muelltonnen">Mülltonnen</a>
                        <a class="dropdown-item" href="#waschraum">Waschraum</a>
                        <a class="dropdown-item" href="#musikzimmer">Musikzimmer</a>
                        <a class="dropdown-item" href="#fahrradschuppen">Fahrradschuppen</a>
                        <a class="dropdown-item" href="#gemeinschaftsraum1">Gemeinschaftsraum 1</a>
                        <a class="dropdown-item" href="#gemeinschaftsraum2">Gemeinschaftsraum 2</a>
                    </div>
                </li>
            </ul>
        </div>
        <input id="search-input" class="search" type="text" placeholder="Raumnummer">
        <div id="search-button" class="search-button">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="search-icon" fill="#ccc" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/><path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/></svg>
        </div>
        <a class="navbar-brand" href="#">Apian Raumfinder</a>
    </nav>

    <noscript>
        <h1 style="background-color: red;">Diese Webseite benötigt JaveScript</h1>
        <h1 style="background-color: red;">Erfahre <a href="https://www.enable-javascript.com/">HIER</a> wie du es aktiverst</h1>
    </noscript>

    <div id="mapContainer">
        <img id="elevator1" class="elevator hidden" src="res/elevator.png" alt=""></img>
        <img id="elevator2" class="elevator hidden" src="res/elevator.png" alt=""></img>
        <img id="elevator3" class="elevator hidden" src="res/elevator.png" alt=""></img>
        <img id="door1" class="door hidden" src="res/door.png" alt=""></img>
        <img id="door2" class="door hidden" src="res/door.png" alt=""></img>
        <img id="door3" class="door hidden" src="res/door.png" alt=""></img>
        <img id="north" class="hidden" src="res/north.png" alt=""></img>
        <img id="dot" src="res/dot.svg" alt=""></img>
        <div id="square"></div>
        <div id="path1" class="path hidden"></div>
        <div id="path2" class="path hidden"></div>
        <div id="path3" class="path hidden"></div>
        <div id="path4" class="path hidden"></div>
        <div id="path5" class="path hidden"></div>
        <div id="path6" class="path hidden"></div>
        <img id="map" src="res/apianSmall.jpg" alt="">
    </div> 

    <footer class="footer">
      <div class="container">
        <span class="text-muted">
            Erstellt von <a class="text-muted" href="/">Oliver Großkloß</a> | 
            <a class="text-muted" href="https://github.com/Progaros/roomfinder/">GitHub</a> | 
            <a class="text-muted" href="mailto:oliver.grosskloss+roomfinder@gmail.com">Kontakt</a> <br>
            <a class="text-muted" href="/privacyPolicy.html">Datenschutzerklärung</a> |
            <a class="text-muted" href="/imprint.html">Impressum</a> | 
            <a class="text-muted" href="lizenz.html" id="license">Lizenz</a> 
        </span>
      </div>
    </footer>
    <script src="js/rooms.js?<?php echo filemtime("js/rooms.js") ?>"></script>
    <script src="js/script.js?<?php echo filemtime("js/script.js") ?>"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
</body>
</html>