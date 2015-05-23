var AWS             = require('aws-sdk');
var mime            = require('mime');
var shortId         = require('shortid');
var dotenv          = require('dotenv');

dotenv.load();
var S3_key          = process.env.AWS_SECRET_KEY;
var S3_secret       = process.env.AWS_SECRET_KEY_ID;
var S3_bucket       = process.env.S3_BUCKET_NAME;

AWS.config.update({
    accessKeyId: S3_key,
    secretAccessKey: S3_secret
});

var s3 = new AWS.S3();


function sendToS3(err, stdout, stderr, imagePath, client_response) {
    var imageName       = shortId.generate();
    var buff            = new Buffer('');

    var BASE_URL        = 'https://s3.amazonaws.com/assets.offerpop.com/';
    var linkPath        = 'roblum/meme_generator/' + imageName + '.jpg';

    stdout.on('data', function(data) {
        buff = Buffer.concat([buff, data]);
    });

    stdout.on('end', function(data) {
        var data = {
                Bucket      : S3_bucket,
                Key         : linkPath,
                Body        : buff,
                ContentType : mime.lookup(imagePath)
        };

        s3.putObject(data, function(err, res) { // Folder to store linkable images
            if (err) {
                client_response.send('There was an error: ' + err);
            } else {
                client_response.send({
                    link: BASE_URL + linkPath,
                });
            }
        });
    });
}

module.exports = sendToS3;