## Prerequisites
To install Slimefun, you will need a Spigot or Paper Server (most preferabbly the latest version).<br>
Forks of either of these should work too, though we only test against Paper and Spigot.

### Slimefun 4 Downloads
You can choose between two branches of slimefun, the ["stable" branch](https://thebusybiscuit.github.io/builds/TheBusyBiscuit/Slimefun4/stable/) or the [main "development" branch](https://thebusybiscuit.github.io/builds/TheBusyBiscuit/Slimefun4/master/).
Stable builds have been around for quite a while and were thoroughly tested, development builds are the latest builds of Slimefun you can get.
If your Server is very reliant on a working build of Slimefun, choose a stable build.
But if you want to help contribute to Slimefun4 by reporting issues and helping us identify those more quickly, please consider using a development build (Bug Reports from "stable" builds may be ignored since they are outdated).
You can click on any Slimefun build to see all compatible Minecraft Versions for that build.

**We generally recommend development builds over stable builds, as they are the most recent versions of Slimefun. The stable branch is only updated once a month or even less frequent, so fixes may take quite a while to make it into these builds.**

## How to install
Drag and drop the Slimefun4 jar file into your server's */plugins/* directory.
Then, restart your server.<br>
***Do not use /reload, as it can cause intense memory leaks.***

After the restart, you should notice a new folder called */data-storage/* in your servers root directory. This folder contains all necessary Slimefun data.
If you plan to upgrade or move servers, or create a backup, it is ***very*** important that you also back this folder up, as
deleting it results in loss of ALL Slimefun related data, such as levels, unlocked items, etc.

## Configuring Slimefun
This part assumes you now have Slimefun 4 installed on your server.

When viewing the Slimefun plugin folder, you will notice a few different .YML files. Start by viewing *config.yml* in your favorite text editor.
Personally, I recommend [Notepad++](https://notepad-plus-plus.org).

Most of the things in this file are very self explanatory, from enabling certain items to choose how Slimefun Research behaves in creative mode.
Slimefun uses an auto-updater to check for updates periodically, if you wish to disable this, or your host has somehow disabled things like that, set it to *false*

**Items.yml*** allows you to enable or disable certain items *globally*. If you install multiple addons for Slimefun, this file can get very big,
so, a recommendation is to take your time and install addons slowly, if again, you plan on enabling or disabling certain items.

**messages.yml** contains all data for messages when using Slimefun. You can edit what the plugin sends a player when a certain event occurs.

**Researches.yml** allows you to edit the XP Values of items in Slimefun, as well as their names, you can also disable researching all together if you wish to allow players
the ability to use all of Slimefun right off the bat.

**permissions.yml** allows you to define permission nodes for Slimefun items to restrict the usage of items based on user's permission levels.

Any changes you make should be saved, then restart the server. Again, ***do not use /reload.*** If you are experiencing issues, and you issued a server reload,
just stop and restart the server, since this fixes most issues.

### Server Optimizations
Here is a full article on how to [Optimize your Slimefun Server](https://github.com/Slimefun/Slimefun4/wiki/Server-Optimizations)

# Additional Addons
If you wish to install additional addons, refer to [this page](https://github.com/Slimefun/Slimefun4/wiki/Addons) to see all the addons that are compatible with your version of Slimefun4.

These additional addons require Slimefun4 and will create their own independent folders within your /plugins folder.
Configuration should be very straight forward for these plugins as well.
Remember that you can also disable any Items from Addons in Slimefun's Items.yml file.
