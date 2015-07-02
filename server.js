var connect = require('connect'),
    http = require('http'),
    path = require('path'),
    app;

app = connect()
    .use(connect.static(path.resolve('.')))
    .use('/js/lib/', connect.static('node_modules/requirejs/'))
    .use('/node_modules', connect.static('node_modules'));


http.createServer(app).listen(8000, function() {
    console.log('Listening on port 8000...');
});
