# Description:
#   A meme generator for people of Offerpop
#
# Dependencies:
#   None
#
# Configuration:
#
# Commands:
#   hubot meme me <last name> <caption> - generates a meme with the last name of that employee and caption
#
# Notes:
#
# Author:
#   roblum

module.exports = (robot) ->

    robot.hear /meme me (.*)/i, (msg) ->
        query = msg.match[1]

        params =
            person: query.substr(0, query.indexOf(' '))
            caption: query.substr(query.indexOf(' ')+1)

        msg
            .http('http://memepop-env.elasticbeanstalk.com/build')
            .headers('Content-Type': 'application/json')
            .post(JSON.stringify(params)) (err, res, body) ->
                if err
                    msg.send "Sorry there was an error, try again."
                else
                    results = JSON.parse(body)

                    if (results.link)
                        msg.send results.link
                    else
                        msg.send results.msg
