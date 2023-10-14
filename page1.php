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
                <li class="navbar__item">
                    <a href="/page4.php" class="navbar__links">Control Centre</a>
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
                <div class="rectangle__box"><span id="TemperatureValue"></span> </div>
                <div class="gauge-bar">
                    <div class="gauge-fill" id="TemperatureGauge"></div>
                </div>
            </div>

            <div class="rectangle rectangle2">
                <div class="rectangle__label">Atmospheric Pressure Gauge</div>
                <div class="gauge-minmax2st">
                    <span class="min">0 hPa</span>
                    <span class="max" style="margin-right: -10px;">1500 hPa</span>
                </div>
                <div class="rectangle__box"><span id="PressureValue"></span> </div>
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
                    <span class="max">500 Lux</span>
                </div>
                <div class="rectangle__box"><span id="LightValue"></span> </div>
                <div class="gauge-bar">
                    <div class="gauge-fill" id="LightGauge"></div>
                </div>
            </div>

            <div class="rectangle rectangle5">
                <div class="rectangle__label">Gas Level Sensor</div>
                <div class="gauge-minmax2st">
                    <span class="min">0 ppm</span>
                    <span class="max">50 ppm</span>
                </div>
                <div class="rectangle__box"><span id="nh3Value"></span> </div>
                <div class="rectangle__box"><span id="oxidising_gasesValue"></span> </div>
                <div class="rectangle__box"><span id="reducing_gasesValue"></span> </div>
                <div class="gauge-bar" id="GasGaugeBar">
                    <div class="gauge-fill" id="GasGauge"></div>
                </div>
                <div class="gauge-minmax3rd">
                    <span class="min">0 ppm</span>
                    <span class="max">5 ppm</span>
                </div>
                <div class="rectangle__box">
                    <span id="oxidising_gasesValue"></span>
                </div>
                <div class="gauge-bar">
                    <div class="gauge-fill" id="OxidisingGauge"></div>
                </div>
               <div class="gauge-minmax4th">
                    <span class="min">0 ppm</span>
                    <span class="max">5 ppm</span>
                </div>
                <div class="rectangle__box">
                    <span id="reducing_gasesValue"></span>
                </div>
                <div class="gauge-bar" id="RGasGauge"> 
                    <div class="gauge-fill" id="ReducingGauge"></div>
                </div>
            </div>

            <div class="rectangle rectangle6">
                <div class="rectangle__label">Humidity Gauge</div>
                <div class="gauge-minmax2st">
                    <span class="min">0 %</span>
                    <span class="max">100 %</span>
                </div>
                <div class="rectangle__box"><span id="HumidityValue"></span></div>
                <div class="gauge-bar">
                    <div class="gauge-fill" id="HumidityGauge"></div>
                </div>
            </div>
        </div>
    </div>

        <label for="dataFilter" style="display: none;">Select Data Type:</label>
        <select id="dataFilter" style="display: none;">
            <option value="Temperature">Temperature</option>
            <option value="Pressure">Pressure</option>
            <option value="Light">Light</option>
            <option value="Gas">Gas</option>
            <option value="Humidity">Humidity</option>
        </select>

        <div id="selectedData" style="display: none;">
            <span id="selectedDataType">Selected Data Type:</span>
            <span id="selectedValue"></span>
            <span id="units"></span>
            <span id="lastUpdated"></span>
        </div>


                <div class="graph-container">
            <div class="graph">
                <h2>Temperature</h2>
                <canvas id="temperatureChart" width="400" height="400"></canvas>
            </div>
            <div class="graph">
                <h2>Pressure</h2>
                <canvas id="pressureChart" width="400" height="400"></canvas>
            </div>
            <div class="graph">
                <h2>Light</h2>
                <canvas id="lightChart" width="400" height="400"></canvas>
            </div>
            <div class="graph">
                <h2>Gas Level</h2>
                <canvas id="gasChart" width="400" height="400"></canvas>
            </div>
            <div class="graph">
                <h2>Humidity</h2>
                <canvas id="humidityChart" width="400" height="400"></canvas>
            </div>
        </div>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.0/chart.min.js"></script>
    <script src="./static/page1interaction.js"></script>
</body>
</html>
