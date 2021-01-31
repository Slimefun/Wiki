Reporting bugs is crucial to this open-source project.<br>
So please consider reporting bugs on our [Issue Tracker](https://github.com/Slimefun/Slimefun4/issues)

But before reporting a bug, you should read through the following Troubleshooting Guide.<br>
Many issues you come across can be solved on your side and save us a lot of time and effort.

## Troubleshooting Guide

This guide aims to help you at identifying issues and informing you on what **you** can do to prevent these issues.<br>
If everything fails, we will also help you how to make detailed and efficient bug reports, so that we can give you the best help possible.

_Also see: [Common Issues](https://github.com/Slimefun/Slimefun4/wiki/Common-Issues)_

**But first off:**<br>
Always remember that Slimefun4 is open-source and community-developed.<br>
But most importantly: It is free...<br>
So do **not** expect us to magically fix everything for you and be available 24/7.<br>
If you really enjoy this plugin, then please follow this guide, it'd make our lives a lot easier and would help us focus on important issues.<br>
It's the least you can do to relieve our shoulders.

### 1. Checking your versions

It is absolutely **crucial** that you check your versions, 90% of issues can already be solved in this step alone.<br>

Gather the following information:
* **Your Server Software** *(Are you running Bukkit, Spigot, Paper or something else?)*
* **Your Minecraft Version** *(Is it 1.8, is it 1.14, 1.9001? You should know that.)*
* **Your CS-CoreLib Version** *(CS-CoreLib is a dependency of Slimefun, so gather that version too)*
* **Your Slimefun Version** *(What version have you installed? Is it a DEV build or a "stable" version?)*

You can quickly gather all this info at once by running the command `/sf versions`.<br>
If your Server Owner has not given you access to this command, then Shift and Right-Click your Slimefun Guide, there should be a Book and Quill there that will at least tell you your CS-CoreLib and Slimefun Version. That and a quick info on what version of Minecraft you are using is already very helpful!

If you are reporting a bug on us, then we will need this info, otherwise we have absolutely no chance to figure out what we're dealing with.<br>
It's like finding a nail in a pile of hay, but the pile is on fire and on an entirely different planet than the nail.<br>
**So please, please, PLEEEAASEE tell us the exact versions you are running, "latest" is NOT HELPING**.

### 2. Checking for updates

The next step is to compare the versions you acquired in step 1 to the most recent versions.

* **Is your Server Software up to date?** *(Check if there has been an update to Spigot, Paper, Bukkit or whatever you are using)*
* **Is CS-CoreLib up to date?** *(You can check whether there are newer versions than yours [on the download page](https://thebusybiscuit.github.io/builds/TheBusyBiscuit/CS-CoreLib/master/))*
* **Is Slimefun up to date?** *(You can check whether there are newer versions than yours [on the download page](https://thebusybiscuit.github.io/builds/TheBusyBiscuit/Slimefun4/master/))*
* **Are you using a DEV build?** *(Stable builds are, well "stable" but far from bug-free)*

To add on to the last point: We will not be accepting bug reports from "stable" versions, switch to a much later development version and see if your issue persists first.

If you don't have file access to the server, then contact one of your admins, explain them your issue and link them to this guide.

### 3. Try restarting your Server

This is not a joke. Try turning it off and on again, often times it can work and fix your problem.

### 4. See if it is a known issue

Take a look at our [Issue Tracker](https://github.com/Slimefun/Slimefun4/issues).<br>
Maybe your issue has already been reported, please don't post it again in that case.
But you are encouraged to comment on that issue and give some information on how you were able to reproduce the problem.

### 5. Search for error-reports and stacktraces

Before you venture off and hunt down those error-reports and stacktraces, keep in mind that those things should always be posted via [pastebin](https://pastebin.com/) when reporting via our Issue Tracker.

1. Navigate to the directory `/plugins/Slimefun/error-reports/` and check if any error-reports have been generated there.<br>
Please post them along with your issue if they correlate with the problem.

2. Open your server's console and check if you can see any stacktraces.<br>
(Stacktraces are those things that look really scary and you cannot wrap your mind around how to read them)
See if the phrase "slimefun" comes up in it. Attach it to your bug report then.

**It is very important to always post the FULL stacktrace, snip off one single word and it all becomes useless, so please make sure to include everything you see.**

Note that stacktraces that contain "slimefun" in them or even outright say they are caused by Slimefun, they maybe aren't.<br>
If the name of one of your installed addons comes up in that stacktrace, post it on that addon's bug tracker instead.

If you don't have file access to the server, then contact one of your admins, explain them your issue and link them to this guide.

### 6. Make sure it is Slimefun!

When you encounter problems with content in Slimefun, then please make sure that the Item/Block/Machine is actually from Slimefun and not from an addon.<br>
If your problem revolves around items from ExoticGarden or any other Slimefun addons, then report them on their bug tracker and not here.

### 7. Gather as much information as possible

When we say you should be detailed, we mean it.<br>
Try to experiment out some things before reporting.

* Is only that item affected or are other (similar) items broken as well?
* Does the bug only happen if you hold a certain item?
* Have you tried jumping, left- or right-clicking or dancing around?
* Does the issue require a creeper to be watching behind your back?
* Does it only happen on your server? **Have you tried talking to others on our discord server about it?**

These are just some more or less serious examples. Every bit of information helps.<br>
The narrower and detailed you can get, the better.

### 8. Posting the Issue via GitHub

If updating or restarting did not help, then please report your issue via our [Issue Tracker](https://github.com/Slimefun/Slimefun4/issues/).

* We will need all the version information you gathered in Step 1.
* Please give a detailed description of the issue
* Give us very specific information on what you did when that issue occurred
* Explain what you **expected** to happen, a misunderstanding of what is supposed to happen could also be the root cause of the problem

We hope this little guide helps you make helpful and precise bug reports.<br>
Thanks for making it this far!
