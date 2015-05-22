function fixIEPost(req, res, next) {
    if(req.param('ie')) {
        req.text = '';
        req.setEncoding('utf8');
        req.on('data', function(chunk) {
            req.body = textToJson(chunk);

            next();
        });
    } else {
        next();
    }
};

function textToJson(text) {
    var parsedText = JSON.parse(text);

    return parsedText;
};

module.exports = fixIEPost;