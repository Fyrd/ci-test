var fs = require('fs');
var path = './files';
var files = fs.readdirSync(path);

var processFile = function(error, data) {
    if (error) {
        throw Error('Error: ' + error);
    }
    data = JSON.parse(data);
    if( !("title" in data) ) {
        throw Error("No title");
    }   
};

for( var i = 0; i < files.length; i++ ) {
    var file = files[i];
    fs.readFile(path + '/' + file, 'utf8', processFile);
}
