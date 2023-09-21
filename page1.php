<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WVI</title>
    <link rel="stylesheet" href="./static/styles.css">
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
        <h1>Real-Time Flight Information</h1>
    </div>
    
    <div class="update-time">
        Last Updated: <span id="lastUpdated">Never</span>
    </div>

    <div class="rectangle-container">
        <div class="left-rectangles">
            <div class="rectangle rectangle1">
                <div class="rectangle__label">Temperature Gauge</div>
                <div class="gauge-minmax1st">
                    <span class="min">-100 °C</span>
                    <span class="max">100 °C</span>
                </div>
                <div class="rectangle__box">Current Temperature=<span id="TemperatureValue"></span> °C</div>
                <div class="gauge-bar">
                    <div class="gauge-fill" id="TemperatureGauge"></div>
                </div>
            </div>

            <div class="rectangle rectangle2">
                <div class="rectangle__label">Atmospheric Pressure Gauge</div>
                <div class="gauge-minmax2st">
                    <span class="min">0 kPa</span>
                    <span class="max">1000 Kpa</span>
                </div>
                <div class="rectangle__box">Current Atmosphere Pressure=<span id="PressureValue"></span> KPa </div>
                <div class="gauge-bar">
                    <div class="gauge-fill" id="PressureGauge"></div>
                </div>
            </div>
        </div>
        
        <div class="right-rectangles">
            <div class="rectangle rectangle4">
                <div class="rectangle__label">Light Level Sensor</div>
                <div class="gauge-minmax1st">
                    <span class="min">0 Lux </span>
                    <span class="max">100 Lux</span>
                </div>
                <div class="rectangle__box">Current Light Level=<span id="LightValue"></span> Lux</div>
                <div class="gauge-bar">
                    <div class="gauge-fill" id="LightGauge"></div>
                </div>
            </div>

            <div class="rectangle rectangle5">
                <div class="rectangle__label">Gas Level Sensor</div>
                <div class="gauge-minmax2st">
                    <span class="min">0 kg</span>
                    <span class="max">1000 kg</span>
                </div>
                <div class="rectangle__box">Current Gas Level=<span id="GasValue"></span> Kg</div>
                <div class="gauge-bar">
                    <div class="gauge-fill" id="GasGauge"></div>
                </div>
            </div>

            <div class="rectangle rectangle6">
                <div class="rectangle__label">Humidity Gauge</div>
                <div class="gauge-minmax2st">
                    <span class="min">0 %</span>
                    <span class="max">100 %</span>
                </div>
                <div class="rectangle__box">Current Humidity = <span id="HumidityValue"></span> %</div>
                <div class="gauge-bar">
                    <div class="gauge-fill" id="HumidityGauge"></div>
                </div>
            </div>
        </div>
    </div>
                    
                        <label for="dataFilter">Select Data Type:</label>
                        <select id="dataFilter">
                            <option value="Temperature">Temperature</option>
                            <option value="Pressure">Pressure</option>
                            <option value="Light">Light</option>
                            <option value="Gas">Gas</option>
                            <option value="Humidity">Humidity</option>
                        </select>
                    

                    <div id="selectedData">
                            <span id="selectedDataType">Selected Data Type:</span>
                            <span id="selectedValue"></span>
                            <span id="units"></span>
                            <span id="lastUpdated"></span>
                    </div>

    <script src="./static/page1interaction.js"></script>
</body>
</html>
