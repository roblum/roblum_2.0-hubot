var gm              = require('gm');
var imageMagick     = gm.subClass({ imageMagick: true });
var appRoot         = require('app-root-path').path;
var sendToS3        = require('./sendToS3');


function filterRequest(req, res) {
    req             = req.body;
    var caption     = decodeURIComponent(req['caption']);
    var image       = req['person'];
    console.log(caption, image);
    createImage(caption, image, res);
}

function createImage(caption, image, res) {
    var originalImage   = '/images/offerpop/' + image + '.jpg';

    imageMagick(appRoot + originalImage)
        .fill("white")
        .stroke('black', [1])
        .fontSize(35)
        .drawText(0, 100, caption, 'South')
        .stream(function(err, stdout, stderr) {
            if (err) {
                res.send('Unexpected error: Stream err');
            } else if (stdout) {
                sendToS3(err, stdout, stderr, originalImage, res);
            }
        });
}

module.exports = filterRequest;