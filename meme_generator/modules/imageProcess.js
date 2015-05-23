var fs              = require('fs');
var gm              = require('gm');
var imageMagick     = gm.subClass({ imageMagick: true });
var appRoot         = require('app-root-path').path;
var sendToS3        = require('./sendToS3');


function filterRequest(req, res) {
    req             = req.body;
    var caption     = decodeURIComponent(req['caption']);
    var image       = req['person'];

    createImage(caption, image, res);
}

function createImage(caption, image, res) {
    var originalImage   = '/images/offerpop/' + image + '.jpg';
    var imagePath       = appRoot + originalImage;

    if (fs.existsSync(imagePath)) {
        generateImage(caption, image, imagePath, res);
    } else {
        res.send('Sorry no image found for ' + image);
    }

}

function generateImage(caption, image, imagePath, res) {
    imageMagick(imagePath)
        .fill("white")
        .stroke('black', [1])
        .fontSize(40)
        .drawText(0, 100, caption, 'South')
        .stream(function(err, stdout, stderr) {
            if (err) {
                res.send('Unexpected error: Stream err');
            } else if (stdout) {
                sendToS3(err, stdout, stderr, imagePath, res);
            }
        });
}

module.exports = filterRequest;