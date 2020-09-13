(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[47],{680:function(e,n){e.exports={title:"1.4.4 Release",description:"Mage training arena plugin, prayer potion indicator, and preserve prayer tracking",author:"Adam",body:'<p>A Mage Training Arena was added from\n<a href="https://github.com/Jasper-ketelaar" native="">@Jasper Ketelaar</a> which can solve\ntelekinetic mazes, and deduce alchemy room rotations from discovery of items in\nit.</p>\n<p><img src="/img/blog/1.4.4-Release/mta.png" alt="mta"></p>\n<p>The prayer plugin now indicates when you can drink a prayer potion to get the\nfull effect by flashing the prayer orb. It also has a new tooltip which shows\nyour current prayer bonus and approximation on how much longer your prayer\npoints will last.</p>\n<p><img src="/img/blog/1.4.4-Release/prayer.gif" alt="prayer"></p>\n<p>The boosts plugin now takes into account the preserve prayer when showing when\nthe next stat drain takes place.</p>\n<p>The grand exchange plugin can now show the &quot;actively traded&quot; OSBuddy price on\nthe grand exchange interface now, if enabled.</p>\n<p><img src="/img/blog/1.4.4-Release/osbprice.png" alt="osbprice"></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>Fix infobox overlay resetting its position after each client restart.</li>\n<li>Add dodgy necklace charge counter and notification to item charges plugin</li>\n<li>Fix attack styles plugin not correctly hiding staff of the dead defence style</li>\n<li>Made tagging NPCs no longer interrupt actions</li>\n<li>Hide Kourend Library navigation button when not in the library</li>\n<li>Fix Shilo Village stepping stones agilty marker</li>\n<li>Add option to highlight tiles under ground items</li>\n<li>Re-add ability to show hidden items on right click menu, with a toggle this\ntime</li>\n<li>Added a link to the wiki to the info panel</li>\n<li>More clue fixes</li>\n<li>Fix icons of onyx items in skill calculator</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3>New commits</h3>\n<pre><code>4th8 (1):\n      skill calculator: fix item id for some zenyte and onyx items\n\nAdam (20):\n      Revert &quot; Fix NMZ points overlay appearing in the KBD instance lair&quot;\n      ground items: default highlight over value to 0\n      ground items: rename highlight &gt; value key to reset the defaults\n      ground items: don\'t recolor menu if hidden\n      ground items: remove unnecessary copy of collected ground items\n      examine plugin: update object examine id unpacking\n      runelite-client: close properties input stream\n      world map plugin: add missing break after agility shortcuts/tooltips case\n      overlay util: mark explicit fallthrough in transformPosition\n      demonic gorillas plugin: remove unused variable\n      config invocation handler: replace args with literal null\n      screenshot plugin: fix unsafe multithreaded usage of DateFormat\n      runelite-client: remove various redundant null checks\n      timers plugin: fix sotd timer removal logic\n      prayer plugin: add dose indicator\n      runelite-client: use new bulk item price api\n      http-service: crawl tradable item prices instead of queueing on demand\n      item charges plugin: add dodgy necklace\n      attack styles: add defensive casting to weapon types for staffs\n      http-service: switch json serializer to jackson\n\nAeonLucid (1):\n      ge plugin: add OSB actively traded price\n\nAlexsuperfly (1):\n      Preserve prayer tracking in boost timer (#3530)\n\nHarry (1):\n      Improve and cleanup code in runelite-client (#3859)\n\nJasper Ketelaar (1):\n      runelite-client: add mage training arena plugin\n\nJonathan Beaudoin (1):\n      Add tooltip to absorption panel\n\nJordan Atwood (8):\n      Add Staff of the Dead timer\n      Prevent NPC tagging from interrupting actions\n      Fix ancient cavern emote clue location\n      Fix south-of-mausoleum hot-cold clue location\n      Fix Slayer Tower emote clue\n      Fix Al Kharid mine hot-cold clue location\n      Fix South of Jiggig hot-cold clue location\n      Fix stepping stone object IDs east of Shilo Village\n\nLars (1):\n      CONTRIBUTING.md - Provide link to coding conventions\n\nMatthew Smith (1):\n      Toggle confirmation on exit (#3834)\n\nMax Weber (6):\n      runelite-client: Test Overlay equality\n      runelite-client: Prevent recursion when chat notifier notifies to chat\n      cache: consolidate ID class printing and split ObjectID\n      Update autogenerated ID files\n      runelite-client: remove unused import in DemonicGorillaOverlay\n      kourendlibrary: Hide navbutton when not in the library\n\nSeth (2):\n      agilityShortcutLocation: Fix shilo village agility marker\n      configPanel: remove tooltips for JTextArea\n\nTememexas (1):\n      Add option to highlight tiles under ground items (#3895)\n\nTomas Slusny (16):\n      Disable camera zoom by default\n      Use Object.equals for Overlays\n      Fix overlay collection modification checks\n      Consider anything with GE &gt; 0 as tradeable too\n      Ignore highlights when value is set to 0 (disable)\n      Make hidden items color configurable\n      Reduce code duplicity in resetOverlay method\n      Fix loading of core overlay properties\n      Mark InfoboxOverlay as singleton\n      Fix UnsupportedOperationException in ground items\n      Change ground items box size from 6 px to 8 px\n      Reload overlay settings on plugin change\n      Disable OSB prices by default\n      Fix ground item swapped price values\n      Optional support for recoloring right-click menu\n      Fix ground marker plugin layer\n\npsikoi (2):\n      Added boolean onSelectedEvent to Material Tabs\n      Refactor Hiscore EndPoints to Material Tab\n\nraqes (1):\n      Add wiki link to info panel\n</code></pre>\n'}}}]);
//# sourceMappingURL=47.94365217.chunk.js.map