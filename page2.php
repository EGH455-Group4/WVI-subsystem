<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WVI</title>
    <link rel="stylesheet" href="./static/styles2.css">
</head>
<body>

        <audio id="noDataAudio" src="./afx/sound1.mp3"></audio>
        <audio id="arucoAudio" src="./afx/sound2.mp3"></audio>
        <audio id="pressureAudio" src="./afx/sound3.mp3"></audio>
        <audio id="valveClosedAudio" src="./afx/sound4.mp3"></audio>
        <audio id="valveOpenAudio" src="./afx/sound5.mp3"></audio>
        

        <audio id="arucoPressureAudio" src="./afx/sound6.mp3"></audio>
        <audio id="arucoValveClosedAudio" src="./afx/sound7.mp3"></audio>
        <audio id="arucoValveOpenAudio" src="./afx/sound8.mp3"></audio>
        <audio id="pressureValveClosedAudio" src="./afx/sound9.mp3"></audio>
        <audio id="pressureValveOpenAudio" src="./afx/sound10.mp3"></audio>
        <audio id="allClosedAudio" src="./afx/sound11.mp3"></audio>
        <audio id="allOpenAudio" src="./afx/sound12.mp3"></audio>

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
        <h1>Imagery & Target Detection</h1>
    </div>

    <div class="update-time">
        Last Updated: <span id="lastUpdated"></span>
    </div>

    <div class="rectangle rec1">
        <div>
            <div class="rectangle__half">
                <div class="rectangle__label">Live Image</div>
            </div>
            <div class="rectangle__half">
                 <img src="" id="live-image" width="416" height="416"></img>
            </div>
        </div>
        <div class="rectangle__info">
            <div class="rectangle__half">
                <div class="rectangle__label">Image information</div>
            </div>
            <div class="rectangle__half">
                <div class="rectangle__label">ArUco IDs</div>
            </div>
            <div class="rectangle__half">
                <div class="rectangle__box" id="live_arucoIDS">Found IDs: </div>
            </div>

            <div class="rectangle__half">
                <div class="rectangle__label">UAV Position</div>
            </div>
            <div class="rectangle__half">
                <div class="rectangle__box" id="live_xValue">x = </div>
                <div class="rectangle__box" id="live_yValue">y = </div>
                <div class="rectangle__box" id="live_zValue">z = </div>
            </div>

            <div class="rectangle__half">
                <div class="rectangle__label">Pressure Gauge Reading</div>
            </div>
            <div class="rectangle__half">
                <div class="rectangle__box" id="live_pressureGauge">Detected Gauge: No</div>
                <div class="rectangle__box" id="live_pressureReading">Pressure Reading = None</div>
            </div>

            <div class="rectangle__half">
                <div class="rectangle__label">Valves</div>
            </div>
            <div class="rectangle__half">
                <div class="rectangle__box" id="live_valvePositions">Valve Positions: None</div>
            </div>
        </div>

        <div>
            <div class="rectangle__half">
                <div class="rectangle__label">Target Image</div>
            </div>
            <div class="rectangle__half">
                 <img src="" id="target-image" width="416" height="416"></img>
            </div>
        </div>
        <div class="rectangle__info">
            <div class="rectangle__half">
                <div class="rectangle__label">Image information</div>
            </div>
            <div class="rectangle__half">
                <div class="rectangle__label">ArUco IDs</div>
            </div>
            <div class="rectangle__half">
                <div class="rectangle__box" id="target_arucoIDS">Found IDs: </div>
            </div>

            <div class="rectangle__half">
                <div class="rectangle__label">UAV Position</div>
            </div>
            <div class="rectangle__half">
                <div class="rectangle__box" id="target_xValue">x = </div>
                <div class="rectangle__box" id="target_yValue">y = </div>
                <div class="rectangle__box" id="target_zValue">z = </div>
            </div>

            <div class="rectangle__half">
                <div class="rectangle__label">Pressure Gauge Reading</div>
            </div>
            <div class="rectangle__half">
                <div class="rectangle__box" id="target_pressureGauge">Detected Gauge: No</div>
                <div class="rectangle__box" id="target_pressureReading">Pressure Reading = None</div>
            </div>

            <div class="rectangle__half">
                <div class="rectangle__label">Valves</div>
            </div>
            <div class="rectangle__half">
                <div class="rectangle__box" id="target_valvePositions">Valve Positions: None</div>
            </div>
        </div>

    </div>
    
    <script src="./static/page2interaction.js"></script>
</body>
</html>
