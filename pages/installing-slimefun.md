# Installing Slimefun

## Prerequisites
* A 1.14.4 Spigot Minecraft server.
* The latest version of Slimefun 4, which can be found [here](https://thebusybiscuit.github.io/builds/TheBusyBiscuit/Slimefun4/master/).
* Slimefun 4 will utilize [CS-CoreLib](https://thebusybiscuit.github.io/builds/TheBusyBiscuit/CS-CoreLib/master/) as a mandatory dependency.


## How to install

Using Spigot, drag and drop the necessary jar files into your plugins directory. Then, restart your server. 
***Do not use /reload, as it can cause intense memory leaks.***

After the restart, you should notice a new folder called */data-storage* in your servers root directory. This folder contains all necessary Slimefun data.
If you plan to upgrade or move servers, or create a backup, it is ***very*** important that you also back this folder up, as
deleting it results in loss of ALL Slimefun related data, such as Levels, Unlocked Items, etc.

## Configuring Slimefun

This guide assumes you only have Slimefun 4 and CS-Corelib installed on your server.

When viewing the Slimefun plugin folder, you will notice 5 different .YML files. Start by viewing *config.yml* in your favorite text editor.
Personally, I recommend [Notepad++](https://notepad-plus-plus.org).

Most of the things in this file are very self explanatory, from enabling certain items to choose how Slimefun Research behaves in creative mode.
Slimefun uses an Autoupdater to check for updates periodically, if you wish to disable this, or your host has somehow disabled things like that, set it to *false*

Another important file is **whitelist.yml**, if you want to enable or disable certain items. If you install multiple addons for Slimefun, this file can get very big,
so, a recommendation is to take your time and install addons slowly, if again, you plan on enabling or disabling certain items.

**messages.yml** contains all data for messages when using Slimefun. You can edit what the plugin sends a player when a certain event occurs.

**Researches.yml** allows you to edit the XP Values of items in Slimefun, as well as their names, you can also disable researching all together if you wish to allow players
the ability to use all of Slimefun right off the bat.

Any changes you make should be saved, then restart the server. Again, ***do not use /reload.*** If you are experiencing issues, and you issued a server reload,
just stop and restart the server, since this fixes most issues.

# Additional Addons

If you wish to install additional addons, refer to [this](https://thebusybiscuit.github.io/builds/) page to see all the addons that are up to date on 1.14.4.

These additional addons require Slimefun 4 and CS-CoreLib, and will create their own independent folders within your /plugins folder.

Configuration should be very straight forward for these plugins as well.
