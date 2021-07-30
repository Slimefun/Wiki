We have hosted another Addon Jam in 2021, this is already the second Addon Jam ever.
Here are the results!

| Theme | Duration | Participants | Reviewers |
| ----- | -------- | ------------ | --------- |
| _Alchemy and Herbalism_ | May 22nd - May 31st | 6 | 2 |

The Theme was intentionally vague and open for interpretation.<br>
Teams or multiple submissions per user were allowed.<br>
Everyone of the participants (except for one) has agreed on having their full review published online.<br>
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
1. [FlowerPower by NCBPFluffyBear](#1-FlowerPower-by-NCBPFluffyBear)
2. [BloodAlchemy by Mooy1](#2-BloodAlchemy-by-Mooy1)
3. [Alchmia Vitae by Apeiros-46B](#3-Alchmia-Vitae-by-Apeiros-46B)
4. [EMC2 by Seggan](#4-EMC2-by-Seggan)
5. [Hohenheim by Tweep](#5-Hohenheim-by-Tweep)
6. [BetterFarming by HAL989](#6-BetterFarming-by-HAL989)

## 1. FlowerPower by NCBPFluffyBear
https://github.com/NCBPFluffyBear/FlowerPower
| Accuracy | Creativity | Innovation | Code Quality | Gameplay | Mechanics | TOTAL |
| -------- | ---------- | ---------- | ------------ | -------- | --------- | ----- |
| 9.7      | 8.55       | 9.0        | 7.35         | 7.4      | 6.55      | **8.09** |

> FlowerPower is a magic addon centered around experience and flowers.
> The base of each recipe requires various flowers, and different items are crafted along the way to make mid to endgame items.
> A majority of these items function by consuming experience in exchange for a certain effect or buff.
> <br>_by NCBPFluffyBear_

<details>
<summary>Click for a detailed review</summary>

#### Pros
* Subtle but very satisfying effects
* Very accurate theme interpretation
* Very unique concepts and ideas
* Very user-friendly and easy to use once you know how
* The charms are very cool
* Classes have documentation
* There are researches
* The code is mostly clean
* Annotatons to indicate nullability (not always used though)
* Persistent Data for storing data
* Item Settings to allow server owners to configure things
* Experience trading is a cool idea
* Imbuing and plants fit the theme nicely

#### Cons
* The `README` contains more information than the ingame guide
* Lack of ingame descriptions
* Withdrawing experience from a cauldron does not work
* The Recall Charm teleports you to whole coordinates, if the coordinates were block-centered, this would feel a bit more natural
* The code has a high cognitive complexity, large and very nested code blocks
* Listeners and utility packages do not follow the naming convention
* The Recall Charm is bugged, it does not use actual experience but rather relative xp-bar values

#### Conclusion
The code is somewhat messy at parts but overall very clean.
The gameplay is very satisfying, it is fun and it fits the theme wonderfully.

</details>

## 2. BloodAlchemy by Mooy1
https://github.com/Mooy1/BloodAlchemy
| Accuracy | Creativity | Innovation | Code Quality | Gameplay | Mechanics | TOTAL |
| -------- | ---------- | ---------- | ------------ | -------- | --------- | ----- |
| 8.7      | 7.65       | 8.8        | 8.85         | 7.05     | 6.25      | **7.88** |

> BloodAlchemy adds blood, tools, potions, and a few other magical items.
> The main focus is to gather blood which is used to do alchemy in the blood altar.
> It also adds a new crop and 2 new mushrooms for creating potions and foods.
> <br>_by Mooy1_

<details>
<summary>Click for a detailed review</summary>

#### Pros
* Very clean code
* Extensive usage of annotations and documentation
* Very nice mushroom implementations and use of the `BlockSpreadEvent` which is a very unique concept for addons
* User-friendly and easy to understand
* Custom crops (just a bit buggy and unpolished)
* Optimizations via PaperLib and Lombok
* Decent but not overwhelming effects

#### Cons
* The Blood Altar causes a ton of exceptions when using it
* Incompatible with FoyMachines due to an id conflict
* No researches
* Blood can be placed and easily duped by breaking the block underneath
* Golden Seeds can also be duplicated easily
* You can use the sacrificial dagger to kill yourself in creative mode

#### Conclusion
The addon's code is very clean. The ideas are pretty much borrowed from the BloodMagic mod but it does still have some unique elements to it.
Nice particle effects and pretty good user experience but still a bit of polishing left.
The theme was interpreted pretty well, it even has some herbalism elements. It's just a bit gruesome in the end and has quite a few bugs.

</details>

## 3. Alchmia Vitae by Apeiros-46B
https://github.com/Apeiros-46B/AlchimiaVitae
| Accuracy | Creativity | Innovation | Code Quality | Gameplay | Mechanics | TOTAL |
| -------- | ---------- | ---------- | ------------ | -------- | --------- | ----- |
| 9.05     | 8.6        | 8.4        | 5.8          | 6.0      | 7.25      | **7.52** |

> My addon adds two types of magical plants, which can be used to brew potions and make magical items.
> These magical items can be used to change materials into other materials, and can apply magical effects called "Infusions" to certain items.
> <br>_by Apeiros-46B_

<details>
<summary>Click for a detailed review</summary>

#### Pros
* Usage of multi-categories
* There are researches
* Lots of content
* Nice lore texts
* Very accurate theme interpretation
* Interesting Brews
* Complex recipes which seem like there has been a lot of thought put into it
* Usage of persistent data
* Overall code structure is very good, split into multiple packages

#### Cons
* The file size is unnecessarily large
* Shading the entire adventure library just for gradients in item names
* Overuse of gradients in names, it looks nice at first but gets old very quickly
* While the lore looks and sounds nice, it offers little description in regards to item usages
* Unclear end goal or items to work towards
* The code heavily overuses static members
* The `EntityDeathListener` is a complete mess
* Annotations are present but rarely used
* `AltarOfInfusion` is a mess
* Code is very nested
* Infusing is a bit annoying, everytime you close the UI everything drops
* Opening the infuser still triggers the item in your hand
* True Aim arrows misbehave if shot at minimum strength, they slow down ever so slightly while flying and grind to a halt, just levitating and wiggling about. Also weird to see them fly in slow-mo at the beginning but the stopping is even weirder.
* A little strange for the enchants to be level 3 when there is no lvl 1 or 2 to be had (the light and dark magic ones)

#### Conclusion
The theme is spot on and very satisfying to use and fun to play with.
The code is a mess at times though and gradients in item names are easily tiring.
Between the brews and the infusions you get lots of applicability but it seems like there is a lot of content that 
would get burned through pretty quickly - nothing is overly expensive so the many "endgame" goals feel more early/mid game 
than endgame. Can be a plus or a minus depending on the POV, just seems  like going for variety of goals made progression 
shallow/non existent for each, it's wide but not deep.

</details>

## 4. EMC2 by Seggan
https://github.com/Seggan/EMC2
| Accuracy | Creativity | Innovation | Code Quality | Gameplay | Mechanics | TOTAL |
| -------- | ---------- | ---------- | ------------ | -------- | --------- | ----- |
| 5.45     | 4.3        | 6.35       | 6.9          | 3.5      | 4.8       | **5.22** |

> EMC2 allows transmutation and mass storage of items by converting them into "Quark-Gluon Plasma"
> <br>_by Seggan_

<details>
<summary>Click for a detailed review</summary>

#### Pros
* Unit Tests
* Lombok and a bit of documentation
* Nice concept with the Router
* There are researches

#### Cons
* Horrible user experience, lack of explanation
* The Atomizer opens the Beacon UI
* "QGC" does not take Slimefun items into account, only vanilla materials which results in a servere disbalance and exploits
* Very limited features
* Concept essentially copied from EE2 and not really any "new" or "unique" elements to it
* No visual effects, using the machines is not very rewarding or satisfying, you just see a number go up
* The recipes are very complicated
* All values are hardcoded and not configurable, they also seem very arbitrary
* There is no config in general
* The code uses `Stream`s very excessively which will hurt performance
* 99% of the code in the `ItemValues` class is within the constructor
* Total overuse of singletons and static members
* Most chat messages are uncolored and just plain white

#### Conclusion
The code is alright but with a lot of room for improvement.
The gameplay feels very dull, it isn't very satisfying nor easy to use. It is full of bugs, seems completely unfinished and does not
really have any unique experience to it. It just feels like a dull "clicker game" where you collect arbitrary points in order to duplicate your items.
And the duplication itself is not even satisfying, it does not feel like an achievement.

</details>

## 5. Hohenheim by Tweep
https://github.com/TweepCoding/hohenheim
| Accuracy | Creativity | Innovation | Code Quality | Gameplay | Mechanics | TOTAL |
| -------- | ---------- | ---------- | ------------ | -------- | --------- | ----- |
| 7.05     | 7.15       | 5.8        | 6.05         | 2.1      | 1.75      | **4.98** |

> Supposed to add items related to alchemy and herbology, wand is supposed to be the main crafting tool for the mod, and also the weapon for it.
> It uses a sort of mana system called Entropy to do this, and there would have been many items with magical properties that you could use the wand with.
> <br>_by Tweep_

***The author has requested that their detailed review would not be shown publicly.***

## 6. BetterFarming by HAL989
https://github.com/Gavin296/betterfarming
| Accuracy | Creativity | Innovation | Code Quality | Gameplay | Mechanics | TOTAL |
| -------- | ---------- | ---------- | ------------ | -------- | --------- | ----- |
| 2.25     | 4.4        | 4.95       | 4.35         | 3.3      | 4.65      | **3.98** |

> Adds a set of new hoes, and swords that get rupees via chopping down grass
> <br>_by HAL989_

<details>
<summary>Click for a detailed review</summary>

#### Pros
* There are some researches
* Legend of Zelda?

#### Cons
* No `.gitignore`
* Unorganized project structure, even the `/target/` folder is inside the projects
* Ideas mostly all from Zelda, not much originality here
* The addon has little to do with Alchemy or Herbalism
* Static members are overused
* Wildcard imports are used quite often
* The main class is a mess
* The code style is very inconsistent from file to file
* Inconsistent modifier order in `Utils.java`
* Unused libraries (CS-CoreLib and NoteBlockAPI)
* Outdated dependencies
* Lack of content
* Completely unused methods and classes in the project
* No caching of variables, expensive methods are called in subsequent lines repeatedly
* Wrong recipes, the pot is shown as a shaped Smeltery recipes (Smelteries do not support shaped recipes)
* Rupees show as taking 4 to upgrade but they only consume one.
* You get coins to get swords to get coins which have no usage and some extra apple drops from leaves
* There are still debug messages in the code

#### Conclusion
We aren't entirely sure how this fits into the theme, the addon seems very much incomplete and the project structure is all over the place.
The code is very inconsistent and the dependency management is a bit of a chaos.
  
</details>
