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
            serveStaticFile(res, '/public/css/home_pg.css', 'text/css');
            break;
        case '/css/about_me.css':
            serveStaticFile(res, '/public/css/about_me.css', 'text/css');
            break;
        case '/css/contact_me.css':
            serveStaticFile(res, '/public/css/contact_me.css', 'text/css');
            break;
        case '/css/portfolio.css':
            serveStaticFile(res, '/public/css/portfolio.css', 'text/css');
            break;
        case '/images/alfred.jpg':
            serveStaticFile(res, '/public/images/alfred.jpg', 'img/jpg');
            break;
        case '/images/dg.jpg':
            serveStaticFile(res, '/public/images/dg.jpg', 'img/jpg');
            break;
        case '/images/bg_image_ii.jpg':
            serveStaticFile(res, '/public/images/bg_image_ii.jpg', 'img/jpg');
            break;
        case '/images/bg_image.jpg':
            serveStaticFile(res, '/public/images/bg_image.jpg', 'img/jpg');
            break;
        case '/images/champaign.jpg':
            serveStaticFile(res, '/public/images/champaign.jpg', 'img/jpg');
            break;
        case '/images/dg.JPG':
            serveStaticFile(res, '/public/images/dg.JPG', 'img/jpg');
            break;
        case '/images/dress.jpg':
            serveStaticFile(res, '/public/images/dress.jpg', 'img/jpg');
            break;
        case '/images/football_ii.jpg':
            serveStaticFile(res, '/public/images/football_ii.jpg', 'img/jpg');
            break;
        case '/images/football.jpg':
            serveStaticFile(res, '/public/images/football.jpg', 'img/jpg');
            break;
        case '/images/jp.jpg':
            serveStaticFile(res, '/public/images/jp.jpg', 'img/jpg');
            break;
        case '/images/kayla.jpg':
            serveStaticFile(res, '/public/images/kayla.jpg', 'img/jpg');
            break;
        case '/images/kiss.jpg':
            serveStaticFile(res, '/public/images/kiss.jpg', 'img/jpg');
            break;
        case '/images/liv.jpg':
            serveStaticFile(res, '/public/images/liv.jpg', 'img/jpg');
            break;
        case '/images/ram.jpg':
            serveStaticFile(res, '/public/images/ram.jpg', 'img/jpg');
            break;
        case '/images/ref.jpg':
            serveStaticFile(res, '/public/images/ref.jpg', 'img/jpg');
            break;
        case '/images/rhody_bball.jpg':
            serveStaticFile(res, '/public/images/rhody_bball.jpg', 'img/jpg');
            break;
        case '/images/ri_soccer_2.jpg':
            serveStaticFile(res, '/public/images/ri_soccer_2.jpg', 'img/jpg');
            break;
        case '/images/ri_soccer_3.jpg':
            serveStaticFile(res, '/public/images/ri_soccer_3.jpg', 'img/jpg');
            break;
        case '/images/ri_soccer_team.jpg':
            serveStaticFile(res, '/public/images/ri_soccer_team.jpg', 'img/jpg');
            break;
        case '/images/ri_soccer.jpg':
            serveStaticFile(res, '/public/images/ri_soccer.jpg', 'img/jpg');
            break;
        case '/images/sammy_ii.jpg':
            serveStaticFile(res, '/public/images/sammy_ii.jpg', 'img/jpg');
            break;
        case '/images/sammy.jpg':
            serveStaticFile(res, '/public/images/alfred.jpg', 'img/jpg');
            break;
        case '/images/soccer.jpg':
            serveStaticFile(res, '/public/images/sammy.jpg', 'img/jpg');
            break;
        case '/images/sunset.jpg':
            serveStaticFile(res, '/public/images/sunset.jpg', 'img/jpg');
            break;
        case '/images/sweetheart.jpg':
            serveStaticFile(res, '/public/images/sweetheart.jpg', 'img/jpg');
            break;
        case '/images/westerly_bball.jpg':
            serveStaticFile(res, '/public/images/westerly_bball.jpg', 'img/jpg');
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
            serveStaticFile(res, '/public/js/about_me_html.js', 'text/javascript');
            break;
        case '/js/contact_me_xml.js':
            serveStaticFile(res, '/public/js/contact_me_xml.js', 'text/javascript');
            break;
        case '/js/contact_me.js':
            serveStaticFile(res, '/public/js/contact_me.js', 'text/javascript');
            break;
        case '/js/filter.js':
            serveStaticFile(res, '/public/js/filter.js', 'text/javascript');
            break;
        case '/js/portfolio.js':
            serveStaticFile(res, '/public/js/portfolio.js', 'text/javascript');
            break;
        case '/js/slideshow.js':
            serveStaticFile(res, '/public/js/slideshow.js', 'text/javascript');
            break;
        case '/js/weather_api.js':
            serveStaticFile(res, '/public/js/weather_api.js', 'text/javascript');
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
