<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WVI</title>
    <link rel="stylesheet" href="./static/styles4.css">
</head>
<body>
    <nav class="navbar">
        <div class="navbar__container">
            <a href="/" id="navbar__logo" class="logo">EGB455 Group 4 Web Visualization GUI</a>
            <div class="navbar__toggle" id="mobile-menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            <ul class="navbar__menu">
                <li class="navbar__item">
                    <a href="/page1.php" class="navbar__links">Real-Time Flight Information</a>
                </li>
                <li class="navbar__item">
                    <a href="/page2.php" class="navbar__links">Imagery & Target Detection</a>
                </li>
                <li class="navbar__item">
                    <a href="/page3.php" class="navbar__links">Log Data</a>
                </li>
                <li class="navbar__item">
                    <a href="/page4.php" class="navbar__links">Control Centre</a>
                </li>
            </ul>
        </div>
    </nav>
    <div class="page-title">
        <h1>Control centre</h1>
    </div>
    <div>
        Pi Address
        <input type="text" id="pi_address" name="Pi Address" />
    </div>
    <br />
    <div>
        <button class="navbar__item" onclick="setLCDScreenIP()">Set LCD screen to IP</button>
    </div>
    <br />
    <div>
        <button class="navbar__item" onclick="setLCDScreenTemperature()">Set LCD screen to temperature</button>
    </div>
    <br />
    <div>
        <button class="navbar__item" onclick="setLCDScreenTarget()">Set LCD screen to target detection</button>
    </div>
    <br />
    <div>
        <button class="navbar__item" onclick="startSampling()">Start sampling process</button>
    </div>
    <br />
    <div>
        <button class="navbar__item" onclick="refreshLCDScreen()">Refresh LCD screen</button>
    </div>
    <br />
    <div>
        <button class="navbar__item" onclick="clearImagesFolder()">Clear Images folder</button>
    </div>
    <br />
    <div>
        <button class="navbar__item" onclick="clearData()">Clear application data</button>
    </div>
    <script src="./static/page4interaction.js"></script>
</body>
</html>