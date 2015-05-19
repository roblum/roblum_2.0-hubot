# Description:
#   Offerpop Word Scrambler
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   market me

module.exports = (robot) ->
    words = [
        'Experience',
        'Engangement',
        'Studio',
        'Builder',
        'Platform',
        'Service',
        'Synergy'
    ];

    robot.hear /market me/i, (msg) ->
        a =  Math.floor(Math.random()*words.length)
        w1 = words[a]
        words.splice(a,1)
        w2 =  words[Math.floor(Math.random()*words.length)]

        msg.send w1 + ' ' + w2