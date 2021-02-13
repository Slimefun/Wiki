This is the first half of the **eighth Part** of our Developer Guide, you can find a full overview on our [main page](https://github.com/Slimefun/Slimefun4/wiki/Developer-Guide).<br>
If you haven't checked out the [seventh Part of this Guide](https://github.com/Slimefun/Slimefun4/wiki/Developer-Guide-(7-GEO-Resources)), then please do that.

## 1. A recap
In the last part, part we discussed how to create new ores obtainable through the [GEO - Miner](https://github.com/Slimefun/Slimefun4/wiki/GEO-Miner).<br>
This time, we will be discussing how to use machines and recipes to turn our new EnderOre into Ender Pearls. Before we get to that, here is a recap of our plugin so far:

```java
NamespacedKey categoryId = new NamespacedKey(this, "cool_category");
CustomItem categoryItem = new CustomItem(SkullItem.fromBase64("eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZTk1MmQyYjNmMzUxYTZiMDQ4N2NjNTlkYjMxYmY1ZjI2NDExMzNlNWJhMDAwNmIxODU3NmU5OTZhMDI5M2U1MiJ9fX0="), "&4Our very cool Category");
Category category = new Category(categoryId, categoryItem);

// The custom item for our SlimefunItem
SlimefunItemStack itemStack = new SlimefunItemStack("FIRE_CAKE", "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZTk1MmQyYjNmMzUxYTZiMDQ4N2NjNTlkYjMxYmY1ZjI2NDExMzNlNWJhMDAwNmIxODU3NmU5OTZhMDI5M2U1MiJ9fX0=", "&4Fire Cake", "", LoreBuilder.radioactive(Radioactivity.HIGH), LoreBuilder.HAZMAT_SUIT_REQUIRED);

// A 3x3 shape representing our recipe
ItemStack[] recipe = {
    new ItemStack(Material.BLAZE_POWDER),    null,                               new ItemStack(Material.BLAZE_POWDER),
    null,                                    new ItemStack(Material.CAKE),       null,
    new ItemStack(Material.BLAZE_POWDER),    null,                               new ItemStack(Material.BLAZE_POWDER)
};

// We are now using our own custom class for this
FireCake cake = new FireCake(category, itemStack, RecipeType.ENHANCED_CRAFTING_TABLE, recipe);
cake.register(this);

NamespacedKey researchKey = new NamespacedKey(this, "fire_cake");
Research research = new Research(researchKey, 123, "You don't wanna eat this", 10);
research.addItems(cake);

research.register();

SlimefunItemStack enderOreItem = new SlimefunItemStack("ENDER_ORE", "eyJ0ZXh...", "&5Ender Ore", "", "&rThis is a cool Ore", "&rGEO-Mine me in the End");
SlimefunItem enderOre = new SlimefunItem(category, enderOreItem, RecipeType.GEO_MINER, new ItemStack[9]);
enderOre.register();

EnderOreResource enderOreResource = new EnderOreResource(this, enderOreItem);
enderOreResource.register();

```

## 2. Creating a new Machine Item

The first thing to do is to create a new item to represent our machine.<br>
You should be somewhat familiar with the basics of item creation by now, so we won't go over this in great detail:

```java
import io.github.thebusybiscuit.slimefun4.core.attributes.MachineTier;
import io.github.thebusybiscuit.slimefun4.core.attributes.MachineType;
[...]
SlimefunItemStack enderExcavatorItem = new SlimefunItemStack("ENDER_EXCAVATOR", "eyR5boT...", "&5Ender Excavator", "", "&rExtracts Ender Pearls", "&rfrom Ender Ore", LoreBuilder.machine(MachineTier.MEDIUM, MachineType.MACHINE), LoreBuilder.powerPerSecond(10));
```

Just like in [part 4b](https://github.com/Slimefun/Slimefun4/wiki/Developer-Guide-(4b-Radioactive-and-WitherProof)), we will be utilizing [LoreBuilder](https://github.com/Slimefun/Slimefun4/blob/master/src/main/java/io/github/thebusybiscuit/slimefun4/utils/LoreBuilder.java) to help our items have in-game information that is consistent across all of Slimefun. 

Great! Now we have our Ender Excavator, which will be a custom head item.<br>
The item by itself is rather useless though, so now we'll need to give it a brain.

## 3. Creating a Container with AContainer

[AContainer](https://github.com/Slimefun/Slimefun4/blob/master/src/main/java/me/mrCookieSlime/Slimefun/Objects/SlimefunItem/abstractItems/AContainer.java) is Slimefun's abstract machine class, which is a fancy way to say it's the easiest way to make a new machine.<br>
To get started making the "brain" of the machine, let's make a new file and class named appropriately:

```java
import org.bukkit.inventory.ItemStack;
import me.mrCookieSlime.Slimefun.Lists.RecipeType;
import me.mrCookieSlime.Slimefun.Objects.Category;
import me.mrCookieSlime.Slimefun.Objects.SlimefunItem.abstractItems.AContainer;
import me.mrCookieSlime.Slimefun.api.SlimefunItemStack;

public class EnderExcavator extends AContainer {
    private final SlimefunItemStack enderOreItem;
    public EnderExcavator( Category category, SlimefunItemStack item, RecipeType recipeType, ItemStack[] recipe, SlimefunItemStack enderOreItem ) {
        super(category, item, recipeType, recipe);
        this.enderOreItem = enderOreItem;
    }
}
```

Whew, that's a lot! Let's break it down a bit.<br>
First we have our imports. These will be after the `package` declaration for this class.<br>
Next, we extend the AContainer to make our EnderExcavator class, meaning we get all the functionality of the AContainer even if we don't specifically code it.<br>
We then declare a variable that's private to our EnderExcavator: enderOreItem. We will be using this to create the Ender Ore to Ender Pearl recipe later.
Lastly, we make the initialization method for our EnderExcavator. This will tell the machine what category it should go in inside the guide, the item that it is represented by, how this machine in crafted, the exact recipe needed, and finally our Ender Ore item.<br>
Inside this initialization, we first need to pass variables backwards to AContainer (this class's "super" type) to set up the backend for us, and then we will set the machine's `enderOreItem` variable to the SlimefunItemStack passed in.

Moving onward, there are a few mandatory methods we will need to override, namely the methods for getting the machine identifier and progress bar:

```java
[...]

public class EnderExcavator extends AContainer {
    [...]
    @Override
    public String getMachineIdentifier() {
        return "ENDER_EXCAVATOR";
    }

    @Override
    public ItemStack getProgressBar() {
        return new ItemStack(Material.IRON_PICKAXE);
    }

}
```

As you can see, by setting the return values for these `get` functions, we ultimately set the machine ID to `ENDER_EXCAVATOR` and the progress bar to an iron pickaxe.<br>
The ID should be a unique phrase to identify your new machine by, made up of all capital letters with underscores instead of spaces.<br>
The progress bar can be any ItemStack or SlimefunItemStack, however tools tend to work the best since their durability meters can be used like a typical progress bar.<br>
If the progress bar ItemStack has no durability, the progress will still be visible in the item's lore when moused over.

For basic machines like the one we are making, the last step is to override the `registerDefaultRecipes` method.<br>
This will tell Slimefun what items the machine can process, and which items they create.<br>
It will also allow the recipe to be seen in the Slimefun guide. How convenient!

```java
[...]
import org.bukkit.Material;

public class EnderExcavator extends AContainer {
    [...]

    @Override
    protected void registerDefaultRecipes() {
        registerRecipe( 15, this.enderOreItem, new ItemStack(Material.ENDER_PEARL) );
        registerRecipe( 25, new ItemStack[] {new ItemStack(Material.BLAZE_POWDER), this.enderOreItem}, new ItemStack[] { new ItemStack(Material.ENDER_EYE) });
    }

}
```

This function, called when the machine is registered to the plugin, will create two new recipes for our Ender Excavator.<br>
The first will turn one Ender Ore into one Ender Pearl after 15 seconds.<br>
The second will turn one Blaze Powder and one Ender Ore into an Ender Eye after 25 seconds.

This is the simplest way to add a new recipe to your machine.<br>
The `registerRecipe` method takes 3 arguments: the number of seconds the recipe will take to process, the ItemStack to consume, and the ItemStack to produce.<br>
Optionally, it can take two ItemStack arrays to designate recipes with more than one input or output.<br>
Note that AContainers only have 2 input slots and 2 output slots by default, so array recipes with more than 2 ItemStacks will likely not work.

We now have a fully functional machine! All that's left to do is instantiate it and register it to the plugin.

To summarize, here is the complete EnderExcavator class declaration:

```java
import org.bukkit.Material;
import org.bukkit.inventory.ItemStack;
import me.mrCookieSlime.Slimefun.Lists.RecipeType;
import me.mrCookieSlime.Slimefun.Objects.Category;
import me.mrCookieSlime.Slimefun.Objects.SlimefunItem.abstractItems.AContainer;
import me.mrCookieSlime.Slimefun.api.SlimefunItemStack;

public class EnderExcavator extends AContainer {
    private final SlimefunItemStack enderOreItem;
    public EnderExcavator( Category category, SlimefunItemStack item, RecipeType recipeType, ItemStack[] recipe, SlimefunItemStack enderOreItem ) {
        super(category, item, recipeType, recipe);
        this.enderOreItem = enderOreItem;
    }

    @Override
    public String getMachineIdentifier() {
        return "ENDER_EXCAVATOR";
    }

    @Override
    public ItemStack getProgressBar() {
        return new ItemStack(Material.IRON_PICKAXE);
    }

    @Override
    protected void registerDefaultRecipes() {
        registerRecipe( 15, this.enderOreItem, new ItemStack(Material.ENDER_PEARL) );
        registerRecipe( 25, new ItemStack[] {new ItemStack(Material.BLAZE_POWDER), this.enderOreItem}, new ItemStack[] { new ItemStack(Material.ENDER_EYE) });
    }
}
```

## 4. Registration
Back in our main plugin file, we will want to `import` the EnderExcavator.<br>
Next, we will need to create a new instance of the class to prepare for registration.

```java
import io.github.thebusybiscuit.slimefun4.implementation.SlimefunItems;
[...]
SlimefunItemStack enderExcavatorItem = new SlimefunItemStack("ENDER_EXCAVATOR", "eyR5boT...", "&5Ender Excavator", "", "&rExtracts Ender Pearls", "&rfrom Ender Ore", LoreBuilder.machine(MachineTier.MEDIUM, MachineType.MACHINE), LoreBuilder.powerPerSecond(10));
EnderExcavator enderExcavatorMachine = new EnderExcavator(category, enderExcavatorItem, RecipeType.ENHANCED_CRAFTING_TABLE, new ItemStack[] {
    new ItemStack(Material.STONE),        SlimefunItems.SMALL_ENERGY_CAPACITOR, new ItemStack(Material.STONE),
    new ItemStack(Material.IRON_PICKAXE), null,                                 new ItemStack(Material.IRON_PICKAXE),
    new ItemStack(Material.STONE),        SlimefunItems.ELECTRIC_MOTOR,         new ItemStack(Material.STONE)
}, enderOreItem);
```

Note that here we import the SlimefunItems class, which is basically a catalog of all the items in core Slimefun.<br>
These are SlimefunItemStacks, so they can be used like any other ItemStack, as seen in our recipe declaration.

We now have an instance of our machine, but it is not yet ready to register.<br>
If we tried to register it now, it would fail to register saying that the capacity, consumption, and speed have not been set.<br>
Fortunately, these are all easy problems to take care of, and can be fixed in a single line:

```java
[...]
enderExcavatorMachine.setCapacity(60).setEnergyConsumption(5).setProcessingSpeed(1);
```

Very clean! We can clearly see that the machine will hold 60J charge, consume 5J per **tick**, and have a speed multiplier of 1.<br>
There is one caveat to this though, and that is the energy consumption.<br>
Slimefun will "tick" each machine once every 10 ticks (0.5 seconds).<br>
Because of that, the amount of power drawn per second will be double what you set the consumption to be.<br>
Since we said in our Lore that the machine would operate at 10J/s, we had to set the energy consumption to 5 in order to actually get that.

At last, we can register the machine!

```java
[...]
enderExcavatorMachine.register(this);
```

## 5. (Optional) Adding machine variants

You may have noticed that the attributes and the logic for AContainers is separate.<br>
This is done to greatly simplify adding machine variants to your addon.<br>
For example, if we wanted to add a level 2 or level 3 variant of the Ender Excavator, we could do that in four easy steps:

1. Make a new SlimefunItemStack to represent the machine variant, changing the lore as needed
2. Make a new instance of EnderExcavator with a different recipe
3. Set the new instance's attributes, making sure to match values with the lore
4. Register the new instance

This is extremely powerful and allows you to easily add progression in your plugin.<br>
We will not explicitly cover this in this guide, and it is left as an exercise for the reader. 😄

## 6. The wrap up

To recap, we learned how to create a new machine using AContainer as a base, how to define machine recipes, and how to set the various attributes needed for a machine.

At the end of this part of the Developer Guide, our plugin's `onEnable` method would be as follows:

```java
NamespacedKey categoryId = new NamespacedKey(this, "cool_category");
CustomItem categoryItem = new CustomItem(SkullItem.fromBase64("eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZTk1MmQyYjNmMzUxYTZiMDQ4N2NjNTlkYjMxYmY1ZjI2NDExMzNlNWJhMDAwNmIxODU3NmU5OTZhMDI5M2U1MiJ9fX0="), "&4Our very cool Category");
Category category = new Category(categoryId, categoryItem);

// The custom item for our SlimefunItem
SlimefunItemStack itemStack = new SlimefunItemStack("FIRE_CAKE", "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZTk1MmQyYjNmMzUxYTZiMDQ4N2NjNTlkYjMxYmY1ZjI2NDExMzNlNWJhMDAwNmIxODU3NmU5OTZhMDI5M2U1MiJ9fX0=", "&4Fire Cake", "", LoreBuilder.radioactive(Radioactivity.HIGH), LoreBuilder.HAZMAT_SUIT_REQUIRED);

// A 3x3 shape representing our recipe
ItemStack[] recipe = {
    new ItemStack(Material.BLAZE_POWDER),    null,                               new ItemStack(Material.BLAZE_POWDER),
    null,                                    new ItemStack(Material.CAKE),       null,
    new ItemStack(Material.BLAZE_POWDER),    null,                               new ItemStack(Material.BLAZE_POWDER)
};

// We are now using our own custom class for this
FireCake cake = new FireCake(category, itemStack, RecipeType.ENHANCED_CRAFTING_TABLE, recipe);
cake.register(this);

NamespacedKey researchKey = new NamespacedKey(this, "fire_cake");
Research research = new Research(researchKey, 123, "You don't wanna eat this", 10);
research.addItems(cake);

research.register();

SlimefunItemStack enderOreItem = new SlimefunItemStack("ENDER_ORE", "eyJ0ZXh...", "&5Ender Ore", "", "&rThis is a cool Ore", "&rGEO-Mine me in the End");
SlimefunItem enderOre = new SlimefunItem(category, enderOreItem, RecipeType.GEO_MINER, new ItemStack[9]);
enderOre.register();

EnderOreResource enderOreResource = new EnderOreResource(this, enderOreItem);
enderOreResource.register();

SlimefunItemStack enderExcavatorItem = new SlimefunItemStack("ENDER_EXCAVATOR", "eyR5boT...", "&5Ender Excavator", "", "&rExtracts Ender Pearls", "&rfrom Ender Ore", LoreBuilder.machine(MachineTier.MEDIUM, MachineType.MACHINE), LoreBuilder.powerPerSecond(10));
EnderExcavator enderExcavatorMachine = new EnderExcavator(category, enderExcavatorItem, RecipeType.ENHANCED_CRAFTING_TABLE, new ItemStack[] {
    new ItemStack(Material.STONE),        SlimefunItems.SMALL_ENERGY_CAPACITOR, new ItemStack(Material.STONE),
    new ItemStack(Material.IRON_PICKAXE), null,                                 new ItemStack(Material.IRON_PICKAXE),
    new ItemStack(Material.STONE),        SlimefunItems.ELECTRIC_MOTOR,         new ItemStack(Material.STONE)
}, enderOreItem);
enderExcavatorMachine.setCapacity(60).setEnergyConsumption(5).setProcessingSpeed(1);
enderExcavatorMachine.register(this);
```

If you have any questions, feel free to hop on discord and ask them in `#programming-help`.
