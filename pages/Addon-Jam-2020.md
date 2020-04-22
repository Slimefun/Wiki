This is the first ever Addon Jam we hosted but hopefully not the last.<br>
Here are some general stats about the contest.

| Theme | Duration | Participants | Reviewers |
| ----- | -------- | ------------ | --------- |
| _Tapping into the End_ | April 3rd - April 12th | 6 | 2 |

The Theme was intentionally vague and open for interpretation.<br>
Teams or multiple submissions per user were allowed.<br>
Everyone of the participants has agreed on having their full review published online.<br>
The submissions are ordered by their score, so the first submission listed here has also achieved first place.

Every submission was reviewed by a total of 2 reviewers based on the following 6 categories:
* **Accuracy** _How well was the theme incoporated?_
* **Creativity** _Were the ideas behind that submission interesting enough?_
* **Innovation** _Does the submission feature innovative and new mechanics or is just a copy/paste of the tutorial?_
* **Code Quality** _Is the code structured in a sensible way? Does it follow conventions or contain bad practices?_
* **Gameplay** _Generally: Is it fun to play or rather boring?_
* **Mechanics** _Are the mechanics designed in a user-friendly way? What about visuals, like particles, tooltips, etc...?_

The scores are calculated by taking the average of all scores by all reviewers for that category. The total score is the average of all categories.

## Submissions 
1. [Endrex by nahkd](#1-Endrex-by-nahkd)
2. [TranscEndence by Sfiguz7](#2-TranscEndence-by-Sfiguz7)
3. [New-Beginnings by Tweep](#3-New-Beginnings-by-Tweep)
4. [End Combat by HAL989](#4-End-Combat-by-HAL989)
5. [EnderPanda by Panda](#5-EnderPanda-by-Panda)
6. [SlimeVoid by BigBadE](#6-SlimeVoid-by-BigBadE)

## 1. Endrex by nahkd
https://github.com/nahkd123/Endrex
| Accuracy | Creativity | Innovation | Code Quality | Gameplay | Mechanics | TOTAL |
| -------- | ---------- | ---------- | ------------ | -------- | --------- | ----- |
| 9.6      | 9.05       | 8.0        | 4.75         | 7.65     | 7.6       | **7.78** |

> This addon add some structures that can be generated in The End. It also add some resources that can be obtained via GEO Miner.
> <br>_by nahkd_

<details>
<summary>Click for a detailed review</summary>

#### Pros
* Very cool world-generation with awesome structures and loot chests
* Very strong theme integration with Enderium, Dragon Scales and adding world-gen to the End
* A lot of content with quite unique items

#### Cons
* Loot chests seem very overpowered
* The Dust Fabricator throws a lot of stacktraces into the console
* Your code violated a lot of naming conventions (e.g. nahkdSchematic2.java), lots of one-liner functions
* Your pom includes a local file:// repository which will break on anyone trying to work on this
* Don't use Random#nextInt() in a for loop if you are not gonna use it, let that entropy come from the algorithm itself
* Lots of missing access modifiers which could lead to unexpected results
* Redundant classes with some unneeded utilities, part of which are already in Slimefun
* Seemingly unnecessary static fields, some unused class
* Lack of visual cues on machines, the guide could display their recipes for example

#### Conclusion
Feature-wise this is really awesome but the Code Quality leaves a lot of room for improvement.<br>
The idea of adding structures to the end was really good and on point with the theme.<br>
This Addon adds a ton of items and content and introduces some really nice concepts.<br>
But internally it lacks quite a bit of work and isn't the most user-friendly too.
</details>

## 2. TranscEndence by Sfiguz7
https://github.com/Sfiguz7/TranscEndence
| Accuracy | Creativity | Innovation | Code Quality | Gameplay | Mechanics | TOTAL |
| -------- | ---------- | ---------- | ------------ | -------- | --------- | ----- |
| 2.75     | 8.85       | 8.2        | 7.95         | 8.2      | 8.7       | **7.44** |

> TranscEndence adds some items and machines which have the end objective of crafting Daxis AKA items which will give permanent potion effects until next death. 
> It includes some machines, both "regular" and a couple with some changes, aimed at collecting and crafting all the items that will help reach said objective, step by step.
> <br>_by Sfiguz7_

<details>
<summary>Click for a detailed review</summary>

#### Pros
* Very interesting mechanics with lots of stuff to keep you occupied, even endgame items to work towards
* Very cool machines that see their inspiration in Quantum Mechanics
* Awesome visual effects
* Lots of content
* Very user-friendly items, even comes with a written book explaining you everything

#### Cons
* Code-wise a few naming conventions were violated, such as the package name "Lists".
* You should never store a Player Object in a collection, it will lead to severe memory leaks
* Your custom RecipeType extends RecipeType but you never use instances of that class, you only ever use the static fields which defeats the points of inheriting from that class
* Way too many unneeded static imports, some rather redundant API classes, the architecture seems kinda copied from Slimefun
* The guide should probably be craftable, as players can be rather stuck without it and a Server could add the plugin mid-way through
* Very few items actually revolve around "The End", it seems like the theme was mostly ignored here except for some end-related machines or machines that "only work in the End"

#### Conclusion
A very user-friendly plugin with many awesome mechanics.
Really a very unique addon for sure with lots of stuff to keep you occupied.
The code does contain some rather bad practices though and the theme was mostly ignored.

</details>

## 3. New-Beginnings by Tweep
https://github.com/TweepCoding/New-Begginings
| Accuracy | Creativity | Innovation | Code Quality | Gameplay | Mechanics | TOTAL |
| -------- | ---------- | ---------- | ------------ | -------- | --------- | ----- |
| 7.75     | 7.65       | 7.05       | 7.1          | 8.3      | 6.4       | **7.38** |

> It basically adds new stuff to the End ( Duh! ), but it mostly tries to use the end as a stepping stone, to get materials from in, and go beyond, adding new armor, a new boss, new recipes, items, a panda cannon, and yeah.
> <br>_by Tweep_

<details>
<summary>Click for a detailed review</summary>

#### Pros
* Lots of fun to play around with the items, especially the Panda Bazooka.
* Quite a few items but none of them are boring or a waste of time
* Some nice Theme incorporation with Mythril and other items

#### Cons
* Mythril is almost impossible to find and the code behind it is really not good at all.
* Some items are way too overpowered
* The code is quite inefficient, especially because you perform up to 4 map operations that could have all been reduced to one
* Lack of a README file, _just pointing it out there, the README was not subject to the review_
* Some formatting errors
* Lots of hardcoded values, such as world names
* You should always declare constants as "final", especially your collections in MainListener which shouldn't be static btw
* Never compare Enums using .equals(), always use the == operator
* Single-line functions

#### Conclusion
There is not too much to say about this addon, it's fun. 
But the code has a lot of room for improvement but is despite all those comments rather clean in general.
The Theme was incorporated somewhat good.

</details>

## 4. End Combat by HAL989
https://github.com/Gavin296/end-combat
| Accuracy | Creativity | Innovation | Code Quality | Gameplay | Mechanics | TOTAL |
| -------- | ---------- | ---------- | ------------ | -------- | --------- | ----- |
| 9.2      | 8.2        | 5.45       | 5.6          | 7.25     | 6.35      | **7.01** |

> Adds a variety of tools/weapons to Slimefun. Also includes a new boss.
> <br>_by HAL989_

<details>
<summary>Click for a detailed review</summary>

#### Pros
* Very cool concept of repairing tools
* Nice ideas and items are fun to use
* Very accurate implementation of the theme
* The Trapped Shulker is just ingenius

#### Cons
* The Category has a very generic name
* Several naming conventions have been violated (e.g. "deepFreezer")
* Empty classes ("RandomInt")
* Uses static and star imports where it may cause some harm
* EnderStaff and EnderStaff2 class should probably be merged into one super class
* Sometimes == was used where .equals() would have been correct, huge potential for bugs there
* Version 12 really breaks some conventions there, should better use semantic versioning
* Your git setup hasn't been configured correctly, it's not linked to your GitHub Account
* You have all classes in one single package, you should group them in subpackages
* You seem to call a FoodLevelChangeEvent manually which does not really seem to make any sense?
* The ideas were good but content-wise we think it lacked a little "Innovation" there.

#### Conclusion
The plugin is fun and interesting. It is a good interpretation of the theme too.
However the items all seem rather basic, which isn't inherently bad but costs a little on the "Innovation" score.
The code is mostly clean but contains a couple of bad practices and goes against a few conventions. 

</details>

## 5. EnderPanda by Panda
https://github.com/J3fftw1/EnderPanda
| Accuracy | Creativity | Innovation | Code Quality | Gameplay | Mechanics | TOTAL |
| -------- | ---------- | ---------- | ------------ | -------- | --------- | ----- |
| 6.75     | 7.5        | 5.6        | 8.85         | 8.05     | 5.25      | **7.00** |

> My addons gives you the ability to generate power in the end.
> It also makes you be able to get Pandas in the end.
> Why pandas is a question you can answer your self
> <br>_by Panda_

<details>
<summary>Click for a detailed review</summary>

#### Pros
* Very clean code
* Ideas are fun and quite a cool gimmick
* Nice particle effects

#### Cons
* Lack of visual cues
* Missing lore, not even a line stating that a machine needs power
* A bit buggy, all armor recipes are broken since they use illegal shapes for the Ancient Altar, missing catalysts
* A few redundancies in the code
* Misconfigured pom.xml, a system-dependent output file
* The version inside the plugin.yml is not automatically inferred by the pom.xml which leads to inaccurate or redundant versioning
* Missing researches
* Quite few content

#### Conclusion
The code is very clean and this addon is fun.
However it isn't as user-friendly as it could have been and the mechanics do not really challenge the player a lot.
It's good but small.

</details>

## 6. SlimeVoid by BigBadE
https://github.com/BigBadE/SlimefunVoid
| Accuracy | Creativity | Innovation | Code Quality | Gameplay | Mechanics | TOTAL |
| -------- | ---------- | ---------- | ------------ | -------- | --------- | ----- |
| 2.65     | 6.1        | 7.4        | 3.5          | 6.0      | 2.9       | **4.76** |

> It adds an alternative research system for certain items, another crafting system. 
> It also adds wands, which can be upgraded with the alternate crafting system. 
> Wands can cast spells but also have a chance to backfire (worse wands backfire more)
> <br>_by BigBadE_

<details>
<summary>Click for a detailed review</summary>

#### Pros
* Very innovative ideas, quite a unique system
* A new Research System that is definitely something new
* Nice addition of random research notes, especially that it incorporates the "Luck" effect
* A nice Quarry
* Utilisation of Lombok to reduce complexity
* Cool concept of spells and wands

#### Cons
* This Plugin does not even compile in the first place, you used "Spigot" as a dependency when it should have been "Spigot-api" at least
* This is also a Spigot-exclusive title, meaning it **only** works on Spigot, this will impose a very unnecessary limitation to the user
* No checks were made whether this "Spigot-exclusivity" condition is met, on CraftBukkit most stuff will simply refuse to work and throw errors, errors which could have been handled by the code
* The Void Attractor does not work, as it wants to act like a block but is an Entity, this was fixed in post but sadly only after the Jam had already ended, so we cannot take that into account for our review
* You can take items out of the Void Research Bench if timed correctly
* The Research Bench throws a NullPointerException on every tick if you manage to remove an item from it
* The lore is very colorful and hard to read, also conveys little information on how to use these items
* The Theme seems mostly ignored, the End was simply replaced with "Void", however we couldn't really find any links back to the End dimension or other End-related things at all
* The Research Table is very slow and not too user-friendly
* The code is very hard to read as it is all very cramped and unconventionally formatted
* The code is quite often very inefficient, frequent calls to ItemStack#getItemMeta() which create a new instance on every call
* Way too many and completely unnecessary Objects.requireNonNull(...) checks which just add unnecessarily complexity
* Objects.requireNonNull(ItemMeta) is a tautology, it will always be true and it will create a new ItemMeta object which will just waste computational resources, such as RAM or CPU usage
* Usage of YAML for machine serialization which is slow and inefficient, this should also have been implemented on a higher level rather than in the addon itself
* Redundant setInstance() method
* The api-version in the plugin.yml is specified as "1.13" but the project itself is built against 1.15
* The version inside the plugin.yml is not automatically inferred by the pom.xml which leads to inaccurate or redundant versioning
* Cramped one-line functions
* RegEx patterns are compiled at runtime which is very slow but done repeatedly throughout the code, these should be compiled once and then be re-used instead. Most common patterns are also already included in Slimefun itself, see PatternUtils
* When comparing user input Strings, you should use .equalsIgnoreCase()
* random.nextInt(2) == 0 should really be changed to Random#nextBoolean()
* Potential memory leak: Not removing Player UUIDs from Maps on every possible occasion, such as server-leaving or kicking, small but can stack up on large servers
* Void Bag's Namespaced Key violates the format of namespaced keys, use "bag_location" instead of "bagLocation"
* Needless creations of instances of Random for every instance of a custom VoidMenu
* Overuse of return; statements, a proper if/else structure is usually considered more readable
* static instances are never nullified on plugin disable, not that server reloads are encouraged but this will make them a lot more severe, especially not nullifying the plugin's instance
* On many occasions you add @Getter or @Setter annotations to almost every field, Lombok also allows you to add that to a class to add it for all fields at once
* Your persistent data calls could have been handled by CS-CoreLib2's PersistentDataAPI which automatically returns an Optional too
* Over use of ChatColor.SOMETHING when you could just use '&x' instead to make it more readable
* You shouldn't loop through values and then perform a .get() operation, Map#entrySet() exists for this very reason and saves a ton of performance

#### Conclusion
Generally good ideas, very innovative for sure.
But the Theme seemed a bit neglected, the code is very slow and inefficient, lots of redundancies and bad practices but mostly just inefficient.
The plugin is a Spigot-exclusive title which is rather discouraged, especially if not using Spigot just causes tons of errors rather than a proper handling of that circumstance.
It generally contains quite a few bugs and the code looks more like a "proof of concept" rather than a thoughtfully crafted system.
It definitely scores in Innovation, Gameplay and Creativity but the code quality and accuracy sadly make this land on the last place.
We also had to deduct some points on Gameplay and Mechanics due to all the bugs we encountered and the fact that this only works on Spigot.

</details>
