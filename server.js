git // loads the http module
var http = require('http'),
    fs = require('fs');

// store the port number that our server will be on
var port = 1337;

function serveStaticFile(res, path, contentType, responseCode) {
    if (!responseCode) responseCode = 200;
    fs.readFile(__dirname + path, function (err, data) {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('500 - Internal Server Error');
        } else {
            res.writeHead(responseCode, { 'Content-Type': contentType });
            res.end(data);
        }
    });
}

http.createServer(function (req, res) {
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();

    switch (path) {
        case '':
        case '/index.html':
            serveStaticFile(res, '/public/index.html', 'text/html');
            break;
        case '/css/home_pg.css':
        case '/css/about_me.css':
        case '/css/contact_me.css':
        case '/css/portfolio.css':
            serveStaticFile(res, '/public' + path, 'text/css');
            break;
        case '/images/alfred.jpg':
        case '/images/dg.jpg':
        case '/images/bg_image_ii.jpg':
        case '/images/bg_image.jpg':
        case '/images/champaign.jpg':
        case '/images/dg.JPG':
        case '/images/dress.jpg':
        case '/images/football_ii.jpg':
        case '/images/football.jpg':
        case '/images/jp.jpg':
        case '/images/kayla.jpg':
        case '/images/kiss.jpg':
        case '/images/liv.jpg':
        case '/images/ram.jpg':
        case '/images/ref.jpg':
        case '/images/rhody_bball.jpg':
        case '/images/ri_soccer_2.jpg':
        case '/images/ri_soccer_3.jpg':
        case '/images/ri_soccer_team.jpg':
        case '/images/ri_soccer.jpg':
        case '/images/sammy_ii.jpg':
        case '/images/sammy.jpg':
        case '/images/soccer.jpg':
        case '/images/sunset.jpg':
        case '/images/sweetheart.jpg':
        case '/images/westerly_bball.jpg':
            serveStaticFile(res, '/public' + path, 'image/jpg');
            break;
        case '/images/bg_image.jpeg':
            serveStaticFile(res, '/public/images/bg_image.jpeg', 'image/jpeg');
            break;
        case '/photography.html':
            serveStaticFile(res, '/public/photography.html', 'text/html');
            break;
        case '/contact_me.html':
            serveStaticFile(res, '/public/contact_me.html', 'text/html');
            break;
        case '/about_me.html':
            serveStaticFile(res, '/public/about_me.html', 'text/html');
            break;
        case '/js/about_me_html.js':
        case '/js/contact_me_xml.js':
        case '/js/contact_me.js':
        case '/js/filter.js':
        case '/js/portfolio.js':
        case '/js/slideshow.js':
        case '/js/weather_api.js':
            serveStaticFile(res, '/public' + path, 'text/javascript');
            break;
        case '/data/about_me_data.html':
            serveStaticFile(res, '/public/data/about_me_data.html', 'text/html');
            break;
        case '/data/submit_message.xml':
            serveStaticFile(res, '/public/data/submit_message.xml', 'text/xml');
            break;

        default:
            serveStaticFile(res, '/public/404.html', 'text/html', 404);
            break;
    }

}).listen(port);

console.log('listening...go to http://localhost:' + port);
