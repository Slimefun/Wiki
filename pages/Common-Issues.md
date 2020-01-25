This page contains useful information about common in game issues and how to resolve them.<br>
Most of the following will require varying degrees of permission only staff members may have: make sure to link people higher up in your staff team here if you don't!

**WARNING: some issues have more than one viable solution, indicated by a division in stages from the least to the most intrusive; it is HIGHLY recommended you try all previous stages before you follow any further approach as lower stages are less risky and will solve most occurencies anyways. If you've tried everything in the list with no success, consider [filing a bug report!](https://github.com/TheBusyBiscuit/Slimefun4/wiki/How-to-report-bugs)**

# Table of Contents
1. [Floating tags](#floating-tags)
2. [Unplaceable blocks](#unplaceable-blocks)
3. [Circuit Boards not dropping](#circuit-boards-not-dropping)

## Floating tags
Some Slimefun items automatically create floating tags when placed, in particular the [Energy Regulator](https://github.com/TheBusyBiscuit/Slimefun4/wiki/Energy-Regulator) and the [Cargo Manager](https://github.com/TheBusyBiscuit/Slimefun4/wiki/Cargo-Manager).<br>
These tags are supposed to disappear when breaking the machine but sometimes things can go wrong and you're left with some text that just doesn't want to go away. How can you solve this?

### How to fix this (Stage 1)
Remove any regulators/managers below the floating tag, then stand close to it and run this as operator:
>/execute as <your_name> at @s run execute as @e[type=armor_stand,nbt={Invisible:1b},distance=..3] run data merge entity @s {Invisible:0}

You can now punch the armor stand to destroy it. You may need to punch out multiple stands as they may have been spawned and stacked onto each other depending on which plugins you use.

*Tip: it is recommended using MyCommands, CommandOverride or similar plugins and setting an alias, easier to remember and teach (an example could be /holokill).*

### How to fix this (Stage 2)
Switch to spectator mode via
>/gamemode spectator

You should see the invisible armor stand and better gauge where the feet are; using this information, place a new regulator just below the tag on the first block not occupied by the armor stand itself (get one via /sf cheat).<br>
The regulator will try to place its own armor stand which will replace the corrupt ones and behave normally: you should now be able to remove the regulator you've just placed, removing all tags.

### How to fix this (Stage 3)
Use WorldEdit to select the 3-4 blocks you need cleared (the 2 occupied by the armor stand, one above and one below; feel free to make the selection larger if needed) and then execute:
>//set 0

## Unplaceable blocks
If you encounter a location that seems empty but will cancel your action when you try to place any block there you're probably looking at a ghost Slimefun block.<br> This means a Slimefun item used to be placed there (usually an [android](https://github.com/TheBusyBiscuit/Slimefun4/wiki/Androids) or a [cargo component](https://github.com/TheBusyBiscuit/Slimefun4/wiki/Cargo-Management)) and its data was not correctly removed.

_Note: make sure this isn't due to an invisible armor stand (check "Floating Tags")!_

### How to fix this
Use WorldEdit to select the block's surroundings and execute:
>//set stone

It doesn't matter how big of an area you change as long as the incriminated location becomes a solid block.
Run the following as operator:
>/sf debug_fish

Shift left click the block. An animation of the block being broken and the event being canceled should be seen and you'll get a message in chat. This will remove whatever Slimefun data is still linked to the location.
Remove the stone by executing:
>//undo

## Circuit Boards not dropping
If you kill Iron Golems and they don't seem to drop any Iron Golems, it may be due to a conflicting plugin.<br>
Plugins like **MobStacker** or similar are known to have a lot of issues with custom item drops.

### How to fix this (Stage 1)
The best solution to this problem is to enable custom item drops in that plugins config, if such an option exist.<br>
Or ask the authors of that plugin whether there is a way to toggle this behaviour.

### How to fix this (Stage 2)
A more drastic approach would be to switch over to a Mob-Stacking plugin that supports custom drops.<br>
_At this point we do not have a list of mob-stacking plugins that are confirmed to work with Slimefun, if you use a plugin that works without any issues, feel free to name it right here. See [Expanding the Wiki](https://github.com/TheBusyBiscuit/Slimefun4/wiki/Expanding-the-Wiki)_
