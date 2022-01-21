This is the **fifth Part** of our Developer Guide, you can find a full overview on our [main page](https://github.com/Slimefun/Slimefun4/wiki/Developer-Guide).<br>
If you haven't checked out the previous parts, then please do that now.

## 1. A little recap
The last three parts were all about creating our Slimefun items.<br>
We covered a lot of concept that can be quite overwhelming at first. So let's step down a bit again.<br>
Today we cover Researches.

For this we will head back to your main class, inside your `onEnable()` method.<br>
After adding all your items, it should look a little bit like this:
```java
NamespacedKey categoryId = new NamespacedKey(this, "cool_category");
CustomItemStack categoryItem = new CustomItemStack(Material.DIAMOND, "&4Our very cool Category");
ItemGroup itemGroup = new ItemGroup(categoryId, categoryItem);

// The custom item for our SlimefunItem
SlimefunItemStack itemStack = new SlimefunItemStack("FIRE_CAKE", Material.CAKE, "&4Fire Cake", "", LoreBuilder.radioactive(Radioactivity.HIGH), LoreBuilder.HAZMAT_SUIT_REQUIRED);

// A 3x3 shape representing our recipe
ItemStack[] recipe = {
    new ItemStack(Material.BLAZE_POWDER),    null,                               new ItemStack(Material.BLAZE_POWDER),
    null,                                    new ItemStack(Material.CAKE),       null,
    new ItemStack(Material.BLAZE_POWDER),    null,                               new ItemStack(Material.BLAZE_POWDER)
};

// We are now using our own custom class for this
FireCake cake = new FireCake(itemGroup, itemStack, RecipeType.ENHANCED_CRAFTING_TABLE, recipe);
cake.register(this);
```

Maybe you will even have multiple items like that.

## 2. Creating a Research
Creating the Research itself is easy as creating any object in Java.<br>
We will start by creating a new Research object.
```java
Research research = new Research(...);
```

The constructor for a Research takes in 4 arguments, a `NamespacedKey` as the id, an integer id, a name and a default cost value.<br>
The `NamespacedKey` should be quite familiar to you at this point, so we start by creating that. We will use a reference to our plugin using "this" and a lowercase id.
```java
NamespacedKey researchKey = new NamespacedKey(this, "our_custom_research");
Research research = new Research(researchKey, ?, ?, ?);
```

Next up is the integer id.<br>
This id is a bit of a... complicated matter. It was replaced by the NamespacedKey, however we still require it at the moment.<br>
Just keep in mind that this will be removed at some point, as it is a really bad way of identifying researches.

That being said, your integer id **must be unique**. And it must be unique across all addons.<br>
Try to come up with a random number that noone else has picked yet. This is really not a good way of doing this and stems from a time before Addons existed.<br>
We are working hard on removing this but for the time being... You will need that id. And it is important that you do not change it at anytime.<br>
For this example we will simply choose 123 as our id. (Note that 123 is already taken by Slimefun, so don't use that. Pick a very large number instead.)
```java
NamespacedKey researchKey = new NamespacedKey(this, "our_custom_research");
Research research = new Research(researchKey, 123, ?, ?);
```

Now onto the name. The name of your research is the text that is displayed to the Player when they unlock it.<br>
It should reflect the items it represents but it does not have to be a literal correlation.<br>
Feel free to come up with puns or funny splash texts that convey a message about your items.
```java
NamespacedKey researchKey = new NamespacedKey(this, "our_custom_research");
Research research = new Research(researchKey, 123, "This is an example message", ?);
```

Now lastly we need to define a default cost for this Research.<br>
Note that this is only the "default", Server Owners can always adjust this cost in their config files.<br>
We will simply specify a cost of 10 xp levels for this example.
```java
NamespacedKey researchKey = new NamespacedKey(this, "our_custom_research");
Research research = new Research(researchKey, 123, "This is an example message", 10);
```

Our Research is almost done now.<br>
All that is left to do is to add our items to that Research.

## 3. Adding items to our Research
Now we still need to add our items to this Research.<br>
We can do that by calling `Research#addItems(...)`.<br>
This method has a variable amount of parameters, you can add as many Slimefun items as you want.

```java
NamespacedKey researchKey = new NamespacedKey(this, "our_custom_research");
Research research = new Research(researchKey, 123, "This is an example message", 10);

// Slimefun items are seperated via a comma
research.addItems(item1, item2, item3, ...);
```

In our example above, we only got our fire cake.<br>
So let's add that to the Research.
```java
// ...
FireCake cake = new FireCake(itemGroup, itemStack, RecipeType.ENHANCED_CRAFTING_TABLE, recipe);
cake.register(this);

NamespacedKey researchKey = new NamespacedKey(this, "fire_cake");
Research research = new Research(researchKey, 123, "You don't wanna eat this", 10);
research.addItems(cake);
```

Now the only thing left: Registering the Research.<br>
For this we simply call .register() on our Research object.

```java
// ...
FireCake cake = new FireCake(itemGroup, itemStack, RecipeType.ENHANCED_CRAFTING_TABLE, recipe);
cake.register(this);

NamespacedKey researchKey = new NamespacedKey(this, "fire_cake");
Research research = new Research(researchKey, 123, "You don't wanna eat this", 10);
research.addItems(cake);

research.register();
```

And we are done!

## 4. We added a Research
Now that we are finished, here is our code so far:

```java
NamespacedKey categoryId = new NamespacedKey(this, "cool_category");
CustomItemStack categoryItem = new CustomItemStack(Material.DIAMOND, "&4Our very cool Category");
ItemGroup itemGroup = new ItemGroup(categoryId, categoryItem);

// The custom item for our SlimefunItem
SlimefunItemStack itemStack = new SlimefunItemStack("FIRE_CAKE", Material.CAKE, "&4Fire Cake", "", LoreBuilder.radioactive(Radioactivity.HIGH), LoreBuilder.HAZMAT_SUIT_REQUIRED);

// A 3x3 shape representing our recipe
ItemStack[] recipe = {
    new ItemStack(Material.BLAZE_POWDER),    null,                               new ItemStack(Material.BLAZE_POWDER),
    null,                                    new ItemStack(Material.CAKE),       null,
    new ItemStack(Material.BLAZE_POWDER),    null,                               new ItemStack(Material.BLAZE_POWDER)
};

// We are now using our own custom class for this
FireCake cake = new FireCake(itemGroup, itemStack, RecipeType.ENHANCED_CRAFTING_TABLE, recipe);
cake.register(this);

NamespacedKey researchKey = new NamespacedKey(this, "fire_cake");
Research research = new Research(researchKey, 123, "You don't wanna eat this", 10);
research.addItems(cake);

research.register();
```

We now have an awesome fire cake and a Research to go with it.<br>
Players will now be required to unlock this cake before they can access it.<br>
If you have any questions, feel free to hop on discord and ask them in `#programming-help`.

[**> Continue with Part 6**](https://github.com/Slimefun/Slimefun4/wiki/Developer-Guide-(6-Custom-Heads))
