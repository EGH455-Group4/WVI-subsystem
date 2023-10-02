<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WVI</title>
    <link rel="stylesheet" href="./static/styles3.css">
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
        <h1>Log Data</h1>
    </div>
    
    <div class="rectangle rec2">
    <div class="rectangle__half">
        <button id="updateButton" class="updateButton">Update</button>            <div class="table-search-container">
            <div class="table-container">
                <div class="table-wrapper">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>ip</th>
                                <th>Timestamp</th>
                                <th>Data</th>
                            </tr>
                        </thead>
                        <tbody id="table-body">
                            <?php include("./connect.php"); ?>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="search-container">
        <input type="text" id="startTimestamp" placeholder="Start Timestamp">
        <input type="text" id="endTimestamp" placeholder="End Timestamp">
        <button id="displayButton">Display</button>
    </div>
    
    <div class="update-time">
        Last Updated: <span id="lastUpdated">Never</span>
    </div>
    <script src="./static/page3interaction.js"></script>
    
</body>
</html>