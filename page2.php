<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WVI</title>
    <link rel="stylesheet" href="./static/styles2.css">
</head>
<body>
    <nav class="navbar">
        <div class="navbar__container">
            <a href="/" id="navbar__logo" class="logo">EGB455 Group 4 Web Visualization GUI</a>
            <div class="navbar__toggle" id="mobile-menu">
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
            </ul>
        </div>
    </nav>
    <div class="page-title">
        <h1>Imagery & Target Detection</h1>
    </div>
    <div class="rectangle rec1">
        <div class="rectangle__half">
            <div class="rectangle__label">UAV Position</div>
        </div>
        <div class="rectangle__half">
            <div class="rectangle__box" id="xValue">x = </div>
            <div class="rectangle__box" id="yValue">y = </div>
            <div class="rectangle__box" id="zValue">z = </div>
        </div>
    </div>
    
    <div class="rectangle rec1">
        <div class="rectangle__half">
            <div class="rectangle__label">Pressure Guage Reading</div>
        </div>
        <div class="rectangle__half">
            <div class="rectangle__box" id="pressureReading">Pressure Reading = </div>
        </div>
    </div>
    
    <div class="rectangle rec2">
        <div class="rectangle__half">
            <div class="rectangle__label">Detected Image</div>
            <div class="rectangle__label" id="targetCaptureLabel">Live Video</div>
            <div class="rectangle__label" id="dataplot">
                <span class="dataplot-item">Temp</span>
                <span class="dataplot-item">Humidity</span>
                <span class="dataplot-item">Light</span>
                <span class="dataplot-item">Pressure</span>
                <span class="dataplot-item">Gas</span>
            </div>
        </div>
    </div>

    <div class="update-time">
        <span id="lastUpdated">Never</span>
    </div>
    <script src="./static/page2interaction.js"></script>
</body>
</html>
