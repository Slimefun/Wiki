***
# Table of Contents
1. [Basics - Setting up your Build Path](https://github.com/TheBusyBiscuit/Slimefun4/wiki/API#basics---setting-up-your-build-path)
2. [Level 1 - Creating your own Category](https://github.com/TheBusyBiscuit/Slimefun4/wiki/API#level-1-creating-your-own-category)
3. [Level 2 - Creating your own Item](https://github.com/TheBusyBiscuit/Slimefun4/wiki/API#level-2-creating-your-own-item)
4. [Level 3 - Creating your own Block](https://github.com/TheBusyBiscuit/Slimefun4/wiki/API#level-3-creating-your-own-block)
5. [Level 4 - Registering your Item/Block and adding a Research](https://github.com/TheBusyBiscuit/Slimefun4/wiki/API#level-4-registering-your-slimefun-itemblock-and-adding-a-research)

***

## Basics - Setting up your Build Path.

In order to access Slimefun's API in your Plugin, you will have to add the following dependencies to your Project:
* Bukkit/CraftBukkit/Spigot/etc... 1.9+ ([Latest](https://hub.spigotmc.org/jenkins/job/BuildTools/))
* CS-CoreLib ([Latest](http://dev.bukkit.org/bukkit-plugins/cs-corelib/files/))
* Slimefun ([Latest](http://dev.bukkit.org/bukkit-plugins/slimefun/files/))

To add a .jar File to your Build Path on Eclipse, go to your Project in the Package Explorer, right click it and select "Properties" then go to the Build Path Tab and click "Add external JARs" and select the above mentioned Files.

In addition to that, go to your _plugin.yml_ and add the following line:
>depend: [CS-CoreLib, Slimefun]

***

## Level 1: Creating your own Category

Slimefun allows you to register Items in the Slimefun Guide with very few lines of code.
But before you start creating your Item, you will have to create a Category (unless you want to use one of the built-in Categories).
To do that use one of the following Constructors:

`new Category(ItemStack item)`
>This will create a Category with that ItemStack as it's Item.

`new Category(ItemStack item, int level)`
>This will create a Category with that ItemStack as it's Item and a certain Level (aka "priority" in the Slimefun Guide).

`new LockedCategory(ItemStack item, Category... categories)`
>This will create a Category with that ItemStack as it's Item that requires the User
>to complete all Categories specified before being able to access this Category

`new LockedCategory(ItemStack item, int level, Category... categories)`
>This will create a Category with that ItemStack as it's Item and a certain Level (aka "priority" in the Slimefun Guide)
>that requires the User
>to complete all Categories specified before being able to access this Category

**Example Code:**
***
`Category category = new Category(new CustomItem(new MaterialData(Material.DIAMOND), "&4Awesome Diamond Category", "", "&a> Click to open"));`
***

## Level 2: Creating your own Item

Now that you have your Category set up (if you didn't skip this Step) we can start creating our
very first Item which will appear in the Slimefun Guide.
This Item will automatically be added to Slimefun's Items.yml, whitelist.yml and so on.

_In case you did skip the previous step, use Categories.RESOURCES or any other Category from the Categories class instead of "category"_

First off, we need to start with the Constructor of the class "SlimefunItem".

`new SlimefunItem(Category category, ItemStack item, String id, RecipeType recipeType, ItemStack[] recipe)`
>This may seem a bit complicated but it really is not.
>"category" stands for the Category we created earlier.
>"item" refers to the ItemStack which will be treated like the Slimefun Item we want to register.
>"recipeType" determines the Machine in which this Item is crafted in.
>"recipe" is an ItemStack Array which needs to have a length of 9, each ItemStack standing for its own Slot in the Recipe.

>Other values that can be appended to the constructor are:
>"boolean ghost" = Items that won't appear in the Guide
>"ItemStack recipeOutput" = A custom ItemStack that will be the result of the Recipe (default: The Slimefun Item's ItemStack)

**Example Code:**
***
`Category category = new Category(new CustomItem(new MaterialData(Material.DIAMOND), "&4Awesome Diamond Category", "", "&a> Click to open"));`

`SlimefunItem item = new SlimefunItem(category, new CustomItem(new MaterialData(Material.DIAMOND), "&aGreen Diamond"), "GREEN_DIAMOND", RecipeType.ENHANCED_CRAFTING_TABLE, new ItemStack[] {null, new ItemStack(Material.DIAMOND), null, null, new ItemStack(Material.DIRT), null, null, new ItemStack(Material.DIAMOND), null});`
***

## Level 3: Creating your own Block

As you probably know, you can place Slimefun Blocks and they will appear in your Minecraft World.
You can interact with them and some even consume Power.
To create a Slimefun Block, all you have to do is follow the steps in [Level 2 - Creating your own Item](https://github.com/TheBusyBiscuit/Slimefun4/wiki/API#level-2-creating-your-own-item).
Just make sure to use a Block as the ItemStack such as Material.DIAMOND_BLOCK for example.

**Example Code:**
***
`Category category = new Category(new CustomItem(new MaterialData(Material.DIAMOND), "&4Awesome Diamond Category", "", "&a> Click to open"));`

`SlimefunItem item = new SlimefunItem(category, new CustomItem(new MaterialData(Material.DIAMOND_BLOCK), "&aGreen Diamond Block"), "GREEN_DIAMOND_BLOCK", RecipeType.ENHANCED_CRAFTING_TABLE, new ItemStack[] {null, new ItemStack(Material.DIAMOND), null, null, new ItemStack(Material.DIRT), null, null, new ItemStack(Material.DIAMOND_BLOCK), null});`
***

## Level 4: Registering your Slimefun Item/Block and adding a Research

Now your Slimefun Item/Block will not yet appear in the Slimefun Guide, nor will your Category as there are no Items inside. You first have to register your Slimefun Item by calling SlimefunItem#register()

`item.register();`

And you're done! Your new Slimefun Item/Block will now appear in your Slimefun Guide.

To add a new Research to your Item, call the Research Constructor first:

`Research research = new Research(int id, String name, int level)`

To tell Slimefun that this Research and your Slimefun item belong together, simply call

`research.addItems(SlimefunItem... items)`

and call

`research.register();`

afterwards to register your Research.

**Example Code:**
***
`Category category = new Category(new CustomItem(new MaterialData(Material.DIAMOND), "&4Awesome Diamond Category", "", "&a> Click to open"));`

`SlimefunItem item = new SlimefunItem(category, new CustomItem(new MaterialData(Material.DIAMOND_BLOCK), "&aGreen Diamond Block"), "GREEN_DIAMOND_BLOCK", RecipeType.ENHANCED_CRAFTING_TABLE, new ItemStack[] {null, new ItemStack(Material.DIAMOND), null, null, new ItemStack(Material.DIRT), null, null, new ItemStack(Material.DIAMOND_BLOCK), null});`

`item.register();`

`Research research = new Research(4444, "Green Diamonds!", 20);`
`research.addItems(item);`
`research.register();`
***