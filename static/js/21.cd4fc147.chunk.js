(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[21],{654:function(e,n){e.exports={title:"1.2.12 Release",description:"RuneLite 1.2.12 is released!",author:"Adam",body:'<p>This release includes several notable features, including:</p>\n<p><a href="https://github.com/UniquePassive" native="">@UniquePassive</a> added overlay layers, which\nallows RuneLite to optionally render beneath both the game menu and in-game\ninterfaces (such as the bank).</p>\n<p><img src="/img/blog/1.2.12-Release/overlayorder.png" alt="interface-layers"></p>\n<p><a href="https://github.com/Noremac201" native="">@Noremac201</a> added a barbarian assult plugin\nwhich introduces a timer until next change, and allows left-click calls.</p>\n<p><img src="/img/blog/1.2.12-Release/ba-click.png" alt="ba-click"></p>\n<p><img src="/img/blog/1.2.12-Release/ba-timer.png" alt="ba-timer"></p>\n<p>A new cannon plugin was introduced to count the number of cannonballs left in\nyour cannon, thanks to <a href="https://github.com/Sethtroll" native="">@Sethtroll</a>.</p>\n<p><img src="/img/blog/1.2.12-Release/cannon.png" alt="cannon"></p>\n<p>The new player indicators plugin will draw your friend and clanmates names:</p>\n<p><img src="/img/blog/1.2.12-Release/playernames.png" alt="clannames"></p>\n<p>Some improvements have been made to the attack indicator plugin to hide unwanted\nattack styles instantly. Thanks to <a href="https://github.com/Dreyri" native="">@Dreyri</a> for his\nwork on this.</p>\n<p><img src="/img/blog/1.2.12-Release/attackstyles.gif" alt="attackstyles"></p>\n<p>Additionally, various new AoE attacks have been added to the AoE plugin,\nincluding Vorkath, Galvek, Vet\'ion, Chaos Fanatic, and the Corporeal Beast.</p>\n<p><img src="/img/blog/1.2.12-Release/acid.gif" alt="acid"></p>\n<p><img src="/img/blog/1.2.12-Release/fireball.gif" alt="fireball"></p>\n<p><img src="/img/blog/1.2.12-Release/spawn.gif" alt="spawn"></p>\n<p>Finally, the configuration panel is now more searchable with a new search bar thanks to <a href="https://github.com/deathbeam" native="">@deathbeam</a>:</p>\n<p><img src="/img/blog/1.2.12-Release/configsearch.png" alt="configsearch"></p>\n<p>Enjoy.</p>\n<p>- Adam</p>\n<h3>New commits</h3>\n<p>We had 10 contributors this release!</p>\n<pre><code>Adam (11):\n      runelite-client: fix plugin manager test\n      Move RS-related events to runelite-api\n      injector: fix copying method code to update code-&gt;method, instructions-&gt;code, and instruction-&gt;instructions pointers\n      Move field hooks to mixins\n      runelite-plugin-archetype: update for events which moved to api\n      readme: update logo url\n      player indicators: update isFriend -&gt; isFriended\n      aoeprojectileinfo: store projectiles in a map\n      runelite-api: expose widget group ids\n      runelite-api: fix combat fornula\n      xpglobes: don\'t break at virt level 126\n\nBart van Helvert (1):\n      Deobfuscation and renaming of object definitions\n\nCameron Moberg (1):\n      Add barbarian assault plugin\n\nDreyri (31):\n      update hz.h to Widget.dynamicX\n      update hz.d to Widget.dynamicY\n      update hz.v to Widget.dynamicWidth\n      update hz.ak to Widget.originalHeight\n      update Client.hw to myPlayerIndex\n      update ar.ce to KeyFocusListener.keyPressed\n      update x.nw to BoundingBox3D.minimapSprite\n      update eq.n to getItemStackAmountText\n      rename field921 to overheadTextCount\n      rename field997 to overheadTexts\n      rename field929 to overheadTextsCyclesRemaining\n      rename method4886 to getTextWidth\n      rename field926 to overheadTextsOffsetX\n      rename field925 to overheadTextsOffsetY\n      rename field1100 to maxOverheadTexts\n      rename method4884 to drawTextCentered\n      rename method4903 to drawText\n      swap screenX and screenY\n      rename field923 to overheadTextsX\n      rename field924 to overheadTextsY\n      rename method168 to draw2DExtras\n      update field1003 to lastLeftClickX\n      update field936 to lastLeftClickY\n      rename field940 to pressedItemIndex\n      renamed method5211 to drawAtOpacity\n      rename field 1082 to itemPressedDuration\n      rename method3079 to processMouseInput\n      rename field679 to mouseLastX\n      rename field682 to mouseLastY\n      rename class34.field455 to middleMouseMovesCamera\n      rename field945 to itemBeingDragged\n\nFrederik Engels (6):\n      runescape-client: update Projectile mappings\n      Track projectile target and spawn cycle. Add to api with rest of mapings.\n      runelite-client: add projectiles to devtools\n      runelite-client: add new aoes to aoewarningplugin\n      runelite-client: change combat level plugin to use game tick event\n      Add widget hidden change event, use in attack indicator plugin\n\nMax Weber (2):\n      Update ItemIDs\n      Prevent the client from taking focus when it doesn\'t have it.\n\nSeth (3):\n      Add Wintertodt Aoe\n      overlay renderer: add check for chatbox being minimized\n      Add Cannon plugin\n\nTomas Slusny (7):\n      Add support for making tar idle notification\n      Let overlapping tooltips stack vertically\n      Add search bar to ConfigPanel\n      Fix runelite-plugin-archetype\n      Add tile indicators plugin\n      Add plugin for displaying player names\n      Fix new player-is-x mixins\n\nTyler Hardy (1):\n      Generalize and add MenuActions\n\nUniquePassive (10):\n      Don\'t produce erroneous code when @Copy mixin method missing dummy param\n      Don\'t let @Copy/@Replace methods have more params than ob method\n      Implement optimized isFriend, isIgnore and isClanMember\n      SpecOrbOverlay: Use fields for position constants + adjust specorb pos\n      Remove extra pixels on the right side of minimap_orb_background\n      Add API for getting the client BufferProvider\n      injector: add injector for drawAfterWidgets call\n      runescape-client: add hook for draw under widgets\n      runelite-client: add OverlayLayer and rendering logic for multiple overlay layers\n      runelite-client: update plugins for new overlay layer\n</code></pre>\n'}}}]);
//# sourceMappingURL=21.cd4fc147.chunk.js.map