Package Control Messages
========================

Minify:
------

  Version 1.1.6
  -------------

  * New feature: Minify settings can be overridden from Project settings
      This allows the use of per project based Minify settings!
  * Bug fix: When `auto_minify_on_save` was set to true, the minification
      process was running in the foreground instead in a separate thread in ST3

      # No Fucks Given
#
# no fuck - display a not a fuck was given meme
#

no_fucks = [
  "http://hubot-assets.s3.amazonaws.com/fail/1.gif",
"http://hubot-assets.s3.amazonaws.com/fail/2.gif",
"http://hubot-assets.s3.amazonaws.com/fail/3.gif",
"http://hubot-assets.s3.amazonaws.com/fail/4.gif",
"http://hubot-assets.s3.amazonaws.com/fail/5.gif",
"http://hubot-assets.s3.amazonaws.com/fail/6.gif",
"http://hubot-assets.s3.amazonaws.com/fail/7.gif",
"http://hubot-assets.s3.amazonaws.com/fail/8.gif",
"http://hubot-assets.s3.amazonaws.com/fail/9.gif",
"http://hubot-assets.s3.amazonaws.com/fail/10.gif",
"http://hubot-assets.s3.amazonaws.com/fail/11.gif",
"http://hubot-assets.s3.amazonaws.com/fail/12.gif",
"http://hubot-assets.s3.amazonaws.com/fail/13.gif"
]

module.exports = (robot) ->
  robot.respond /.*(fail).*/i, (msg) ->
    msg.send msg.random no_fucks