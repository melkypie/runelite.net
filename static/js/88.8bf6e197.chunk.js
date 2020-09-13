(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[88],{721:function(e,n){e.exports={title:"1.5.17 Release",description:"NPC unaggro timer and chat filter",author:"Adam",body:'<p>A NPC Aggression Timer plugin was added, which shows how long until NPCs near\nyou will become unaggressive, and how far away you have to walk before they will\nbecome aggressive once again.</p>\n<p><img src="/img/blog/1.5.17-Release/aggro.png" alt="aggro"></p>\n<p>The combat level plugin can now show the level range of attackable players near\nthe wilderness skull icon, similar to how it is on PVP worlds.</p>\n<p><img src="/img/blog/1.5.17-Release/wildylvl.png" alt="wildylvl"></p>\n<p>Most coordinate clues now show a description of where they are in addition to\nshowing on the world map.</p>\n<p><img src="/img/blog/1.5.17-Release/cluedesc.png" alt="cluedesc"></p>\n<p>A chat filter plugin was added, which lets you define words and\n<a href="https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html" native="">patterns</a>\nto filter or block from chat messages. With a handful of patterns it is\neasy to filter out a majority of the bot spam at the GE.</p>\n<p>For example the patterns:</p>\n<pre><code>5[0-9]x[0-9]\n^Player\n[0-9.]\\s*usd\n[0-9][0-9]:[0-9][0-9]:[0-9][0-9]\ndoubling\ntripling\nI don\'t scam\nFire cape &amp; accounts\n</code></pre>\n<p>is highly effective against the current spam.</p>\n<p><img src="/img/blog/1.5.17-Release/chatfilter.png" alt="chatfilter"></p>\n<p>We may open up a channel on Discord for users to share patterns similar to bank\ntabs.</p>\n<p>Even though this is a rather crude solution to the spam epidemic in RS, and\nspamfilters are in general a solved problem, any solution which is much more\ntechnically involved would require us to:</p>\n<ol>\n<li>continuously update training data for the spam categorization\nmodels (the bad guys can see this, too)</li>\n<li>centrally process game chat in real time, which is not only hard, and\nexpensive, but also would have some privacy issues</li>\n</ol>\n<p>Additionally, it would allow the project to unilaterally decide what is and is not spam,\nwhich I would rather it not be capable of doing.</p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>Fix Twitch plugin sometimes showing duplicate chat</li>\n<li>Bank tag tabs no longer reset when clicking withdraw-x</li>\n<li>Add a menu swap for Contract on guildmaster Jane</li>\n<li>Fix the GE item stats interface not closing correctly if the GE is closed with\nescape key</li>\n<li>Fix the slayer plugin not recognizing Crazy Archaeologist tasks</li>\n<li>Fix many missing or wrong diary requirements in the achievement diary plugin</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3>New commits</h3>\n<p>We had 14 contributors this release!</p>\n<pre><code>Adam (4):\n      travis: add openjdk11\n      client: load jagex config and client over https\n      news service: load news over https\n      twitch: fix race in connect establishing multiple connections\n\nJason Xie (1):\n      Change produce image of maple and yew trees to their respective logs (#8222)\n\nJordan Atwood (4):\n      widgetinfo: Fix wilderness level definition\n      Add pvp widget builder script\n      combat level plugin: Add attack level range option\n      boosts plugin: Fix overlay below-threshold color\n\nJuan Ortiz (1):\n      npc highlight: remove tags from npc names\n\nMagic fTail (3):\n      api: rename getOverhead to getOverheadText\n      api: add overhead text changed event and setOverheadText\n      Add chat filter plugin\n\nNathaniel Ngo (1):\n      Log whole HTTP response instead of just message (#8126)\n\nRon Young (1):\n      TabInterface: remember search when clicking withdraw-x\n\nRyBo (1):\n      achievement diary: add or correct various requirements\n\nTomas Slusny (2):\n      Add Swagger static document generation\n      Fix RequestMapping annotations in http-service\n\nWoneTooPhree (1):\n      Add location description to coordinate clues (#8148)\n\nWooxSolo (3):\n      config manager: add support for WorldPoint\n      config manager: add support for Duration\n      Add NPC unaggression timer\n\ngregg1494 (1):\n      menu swapper: add contract for farming guildmaster Jane\n\ntrimbe (1):\n      item stats: check if GE container is hidden when detecting GE close\n\nwhartd (1):\n      slayer plugin: fix task name for Crazy Archaeologists\n</code></pre>\n'}}}]);
//# sourceMappingURL=88.8bf6e197.chunk.js.map