# Description:
#   A random string generator
#
# Dependencies:
#   None
#
# Configuration:
#
# Commands:
#   hubot aws credentials - spits out a random string of letters, numbers, symbols
#
# Notes:
#
# Author:
#   roblum

module.exports = (robot) ->
    robot.respond /aws credentials/i, (msg) ->
        msg.reply generateHash()

generateHash = () ->
    possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$()_{}>?/[]-}"
    length = 20
    count = 0
    message = ""

    while count <= length
        message += possible.charAt(Math.floor(Math.random() * possible.length))
        count++

    return message