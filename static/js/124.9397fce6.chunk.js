(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[124],{757:function(e,n){e.exports={title:"1.6.15, 1.6.16, and 1.6.17 Releases",description:"Configurable login screen background, screen markers widget snapping, duplicate chat folding, configurable overlay background color, and more",author:"Jordan",body:'<p>The <a href="https://github.com/runelite/runelite/wiki/Login-Screen" native="">Login Screen plugin</a> now supports\nchanging the login screen background. Choose from any of Old School RuneScape\'s popular event or\nupdate backgrounds or create your own! (you can even use <a href="/img/blog/1.6.17-Release/configurable-login-screen-mirroring-is-gone.png" native="">custom backgrounds which are not\nmirrored</a>) Thanks to\n<a href="https://github.com/Hydrox6" native="">@Hydrox6</a> for adding this feature.</p>\n<p><img src="/img/blog/1.6.17-Release/configurable-login-screen.png" alt="Configurable login screen background"></p>\n<p>When placing screen markers, you can now click an on-screen widget to automatically select its\nboundaries! (you can still click and drag to create a custom size marker) Thanks to\n<a href="https://github.com/melkypie" native="">@melkypie</a> for this submission.</p>\n<p><img src="/img/blog/1.6.17-Release/screen-marker-widget-snapping.gif" alt="Screen marker widget wrapping"></p>\n<p>The <a href="https://github.com/runelite/runelite/wiki/Chat-Filter" native="">Chat Filter plugin</a> can now collapse\nduplicate chat messages. Thanks <a href="https://github.com/CoreyForsyth" native="">@CoreyForsyth</a> for adding this\nenhancement.</p>\n<p><img src="/img/blog/1.6.17-Release/duplicate-chat-collapse.png" alt="Duplicate chat collapsing"></p>\n<p><em><strong>Highlighted below are some features which we released in 1.6.15 and 1.6.16:</strong></em></p>\n<p>The <a href="https://github.com/runelite/runelite/wiki/Interface-Styles" native="">Interface Styles plugin</a> has gained\na <code>Menu Alpha</code> option which lets you make your right-click menu background partially (or if you\'re\nfeeling up to a challenge, fully) transparent. Thanks to <a href="https://github.com/dekvall" native="">@dekvall</a> for\nthis addition.</p>\n<p><img src="/img/blog/1.6.17-Release/transparent-menu.gif" alt="Transparent right-click menu background"></p>\n<p>We have changed the highlight and notify behavior of the <a href="https://github.com/runelite/runelite/wiki/Ground-Items" native="">Ground Items\nplugin</a>. The <code>Highlight &gt; value</code> option has\nbeen removed. Ground items now use the configured highlight color if they are highlighted, or use\nthe appropriate tier value color otherwise. Additionally, a <code>Notify &gt;= Tier</code> option has been added\nto help configure how valuable an item drop must be to trigger a notification. Thanks to\n<a href="https://github.com/Hydrox6" native="">@Hydrox6</a> for his care in building a flexible solution we hope all\nusers will enjoy.</p>\n<p><img src="/img/blog/1.6.17-Release/ground-items-notify-change.png" alt="Ground Items notify on or above tier option"></p>\n<p>You can now customize the background color of overlays and infoboxes. Thanks to\n<a href="https://github.com/TheStonedTurtle" native="">@TheStonedTurtle</a> for this feature addition.</p>\n<p><img src="/img/blog/1.6.17-Release/configurable-overlay-background-color.png" alt="Configurable overlay color"></p>\n<p>The <a href="https://github.com/runelite/runelite/wiki/Clue-Scroll" native="">Clue Scroll plugin</a> overlay now displays\nwhich enemy you will encounter. Thanks to <a href="https://github.com/TrevorMartz" native="">@TrevorMartz</a> for this\naddition.</p>\n<p><img src="/img/blog/1.6.17-Release/clue-enemies.png" alt="Clue overlay enemy display"></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>The <a href="https://github.com/runelite/runelite/wiki/NPC-Indicators" native="">NPC Indicators plugin</a> no longer\ntries to create respawn timers for NPCs in instances</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Screenshot" native="">Screenshot plugin</a> no longer captures\nscreenshots for the untradeable drops received in the Gauntlet. It also now captures screenshots\nwhen collecting loot from the rewards chest</li>\n<li>Fixed a bug which caused the <a href="https://github.com/runelite/runelite/wiki/Player-Indicators" native="">Player Indicators\nplugin</a> which highlighted non-player\nmenu options</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Chat-History" native="">Chat History plugin\'s</a> &quot;Copy to\nclipboard&quot; now works on friend messages</li>\n<li><a href="https://github.com/runelite/runelite/wiki/Key-Remapping" native="">Key Remapping</a> now works with the\n<a href="https://github.com/runelite/runelite/wiki/Bank" native="">Bank plugin\'s</a> &quot;Keyboard Bankpin&quot; option</li>\n<li>The client can now be configured to request or force focus on notification under <a href="https://github.com/runelite/runelite/wiki/RuneLite" native="">RuneLite\'s\nsettings</a></li>\n<li>A player\'s Bounty Hunter emblem no longer interferes with player menu options, such as the\n<a href="https://github.com/runelite/runelite/wiki/HiScore" native="">HiScore plugin\'s &quot;Lookup&quot; option</a></li>\n<li>A buy limit reset timer has been added to the <a href="https://github.com/runelite/runelite/wiki/Grand-Exchange" native="">Grand Exchange\nplugin</a></li>\n<li>You can now disable the <a href="https://github.com/runelite/runelite/wiki/Wintertodt" native="">Wintertodt\nplugin\'s</a> overlay</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Chat-History" native="">Chat History plugin</a> now adds &quot;Clear\nHistory&quot; options to each chatbox tab</li>\n<li>When enabled, the <a href="https://github.com/runelite/runelite/wiki/Item-Prices" native="">Item Prices plugin\'s</a>\n&quot;Show prices while alching&quot; option will always display the price tooltip when alching, even if\nthe &quot;Hide Tooltips on Inventory Items&quot; option is enabled</li>\n<li>Blighted food and potions have been added to the <a href="https://github.com/runelite/runelite/wiki/Item-Stats" native="">Item Stats\nplugin</a></li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Report-Button" native="">Report Button plugin</a> can now show a\n12- or 24-hour clock</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Metronome" native="">Metronome plugin</a> has gained its own\nvolume settings, which are independent of the ingame volume settings</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/NPC-Aggression-Timer" native="">NPC Aggression Timer plugin</a>\nnow allows configuring both the aggressive and non-aggressive area line colors</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Menu-Entry-Swapper" native="">Menu Entry Swapper plugin</a> now\nhas an option to swap &quot;Enter-corrupted&quot; for the gauntlet, and has gained buy and sell swaps for\ntrading with shops</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Screenshot" native="">Screenshot plugin</a> can now capture\nscreenshots automatically when kicking players from clan chat, recording the kicked user\'s name in\nthe screenshot filename</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Skill-Calculator" native="">Skill Calculator\'s plugin</a>\nshows the needed experience to reach the target in a tooltip</li>\n<li>Players who want <a href="https://github.com/runelite/runelite/wiki/Boosts-Information" native="">boosted skills</a>\nbelow their boost threshold to show in yellow but do not wish to be notified can now disable\nnotifications when skills drop below that threshold</li>\n<li>Receiving new loot now moves the <a href="https://github.com/runelite/runelite/wiki/Loot-Tracker" native="">loot tracker drop\ngroup</a> to the top of the list</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Loot-Tracker" native="">Loot Tracker plugin</a> now tracks\nFarming guild seed pack loot</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Tile-Indicators" native="">Tile Indicators plugin</a> now has\nan option to display tiles of players\' server locations</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/RuneLite" native="">RuneLite settings</a> sidebar toggle hotkey\nhas been made configurable, and a plugin panel toggle hotkey has been added</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Item-Charges" native="">Item Charges plugin</a> now displays\npotion doses</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Chat-Commands" native="">Chat Commands plugin</a> has learned\nto track Theatre of Blood personal best times</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Jordan</p>\n<h3>New commits</h3>\n<p>We had 42 contributors these past releases!</p>\n<pre><code>Adam (15):\n      loottracker: stack clue scrolls in the ui instead of at loot receive time\n      npc indicators: verify compoistion id of tagged npcs\n      client: add option to force client to front on notification\n      Revert &quot;npc indicators: verify compoistion id of tagged npcs&quot;\n      npc indicators: don\'t memorize npcs in instances\n      attackstyles: use script event for hiding attack styltes\n      minimap: use script event for hiding minimap\n      ge plugin: add buy limit reset timer\n      wintertodt plugin: add option to disable overlay\n      keyremapping: use modified key map for mapping key release\n      plugins: add Plugin::getName\n      infobox manager: make threadsafe\n      chathistory: small cleanups of clear history\n      cache: diable some long-running tests\n      api: finish some thoughts in callbacks javadoc\n\nAlexsuperfly (2):\n      loot tracker: use chest events for gauntlet loot\n      screenshot plugin: add gauntlet loot screenshots\n\nAnthony Alves (1):\n      chat-history: add option to clear history for all chatbox tabs (#11543)\n\nAustin Lee (1):\n      Add gnome bench to construction skill calculator\n\nBenjamin Stepp (1):\n      itemmappings: adds nightmare staves\n\nBroooklyn (3):\n      cluescrolls: Update Iron Man Tutor cipher clue (#11593)\n      loottracker: Improve ignored events config name and description (#11545)\n      cluescrolls: Fix &quot;jewellery&quot; clue hint spelling (#11673)\n\nCorey Forsyth (2):\n      chatfilter: add collapse duplicate chat option\n      chatfilter: add option to block repeated public messages\n\nDamen (1):\n      screenshot plugin: block untradeable drops within the Gauntlet\n\nDaniel (1):\n      item prices: always show tooltip when alching if option is enabled\n\nHydrox6 (7):\n      ground items: move repeated notify code into notifyHighlightedItem\n      ground items: remove Highlight &gt; Value\n      ground items: add Notify &gt;= Tier\n      clues: add brutal green dragon variant to cryptic clue\n      gpu: add warning message to compute shaders option\n      api: add support for setting login screen and fire rendering\n      login screen: add custom login screen support\n\nJan-Willem de Bruyn (1):\n      skillcalculator: Add clay crafting items (#11518)\n\nJesse Serrao (1):\n      itemstats: Add bounty hunter blighted food/pots (#11550)\n\nJordan Atwood (5):\n      HotColdLocation: Center some location spots\n      loot tracker: Use &quot;an&quot; prefix for monster names starting with vowels\n      examine: Move price lookups off executor\n      itemmanager: Canonicalize price lookup item IDs\n      client: Simplify ItemContainer usage\n\nKyle Shepherd (2):\n      worldhopper: Change `showSidebar` option name to \'Show world switcher sidebar\' (#11537)\n      itemidentification: Change Combat Potion short name from \'D\' to \'C\' (#11566)\n\nLotto (1):\n      player-indicators: don\'t decorate non-player custom menu options\n\nMalfuryent (1):\n      report button: add ability to switch between 24h and 12h clock\n\nMarbleTurtle (1):\n      chathistory: Fix copy to clipboard not appearing on friend messages (#11527)\n\nMatthew Kramer (1):\n      metronome: add independent volume configuration\n\nMax Weber (3):\n      npcunaggroarea: split color config depending on timer status\n      ItemManager: only canonicalize notes\n      HotkeyButton: allow binding the space key\n\nMelky (2):\n      agility plugin: add config for Prifddinas portal color\n      screenmarker: add ability to put screen markers around widgets (#11552)\n\nMitchell Kovacs (1):\n      menu swapper: add enter-corrupted gauntlet swap\n\nRachel M (1):\n      screenshot: Add option to take screenshot on clan chat kick\n\nRangvaldr (1):\n      discord: Update activity message while playing PVP or DMM (#11522)\n\nRobertCurll (2):\n      skillcalculator: Add comma separators to experience fields\n      skillcalculator: Add needed experience tooltip\n\nRon Young (1):\n      object indicators: fix NPE thrown on logging in on a marked object\n\nThePharros (2):\n      item stats: Add Dragonfruit Pie\n      itemcharges: Add Magic Essence and Super Strength potion doses (#11634)\n\nTheStonedTurtle (2):\n      loot tracker: Fix &quot;Show each kill separately&quot; view\n      Make background color of panel components configurable (#11619)\n\nTim van Rossum (1):\n      boosts: Add option to disable boost threshold notifications (#11668)\n\nTinus Flagstad (1):\n      keyremapping: add option to remap space in dialog\n\nTomas Slusny (1):\n      Use multiplicative color offsets for BackgroundComponent border (#11658)\n\nTrevor (1):\n      raid plugin: fix plugin not reseting when prescouting raids\n\nTrevor martz (2):\n      clue plugin: add enemy info to overlay\n      cluescrolls: remove sara wizard from duel arena step (#11648)\n\nTrey (2):\n      cluescrolls: Add jungle traversing info to dragon\'s eye clue\n      cluescrolls: Add Dragontooth Island travel info to clue\n\nVidyogamasta (1):\n      loot tracker: float group to top of list when obtaining drop\n\nbfmoatbio (2):\n      Allow non-degraded barrows equipment for clue step\n      menu manager: Remove bounty hunter emblem text from player name (#11541)\n\ncscullen (1):\n      loottracker: Add seed pack loot tracking\n\ndekvall (1):\n      interfacestyles: add support for menu alpha\n\ngeheur (1):\n      menu swapper: add swaps for buy and sell\n\njesse1412 (1):\n      tileindicators: Add server side current tile indicator\n\nloldudester (3):\n      client: Make toggle sidebar hotkey configurable\n      client: Add configurable hotkey to toggle plugin panel\n      keyremapping: Don\'t remap f-keys when the bank pin interface is open\n\nmelkypie (4):\n      itemcharges: show potion doses\n      report button: add clock tag\n      chatcommands: fix chambers of xeric pb tracking\n      chatcommands: add tob personal best tracking\n\ntrimbe (1):\n      bank tags: clear remembered search when the active tag tab is clicked\n</code></pre>\n'}}}]);
//# sourceMappingURL=124.9397fce6.chunk.js.map