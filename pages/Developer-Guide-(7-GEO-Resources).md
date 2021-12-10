This is the **seventh Part** of our Developer Guide, you can find a full overview on our [main page](https://github.com/Slimefun/Slimefun4/wiki/Developer-Guide).<br>
If you haven't checked out the [sixth Part of this Guide](https://github.com/Slimefun/Slimefun4/wiki/Developer-Guide-(6-Custom-Heads)), then please do that.

## 1. A recap
In the last part we discussed how to create custom heads and use these heads in items and categories.<br>
Today we will expand upon that knowledge and create a new ore that is obtainable through the [GEO - Miner](https://github.com/Slimefun/Slimefun4/wiki/GEO-Miner).<br>
But before we dive into that, here is our code from the last part:

```java
NamespacedKey categoryId = new NamespacedKey(this, "cool_category");
CustomItemStack categoryItem = new CustomItemStack(SkullItem.fromBase64("eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZTk1MmQyYjNmMzUxYTZiMDQ4N2NjNTlkYjMxYmY1ZjI2NDExMzNlNWJhMDAwNmIxODU3NmU5OTZhMDI5M2U1MiJ9fX0="), "&4Our very cool Category");
ItemGroup itemGroup = new ItemGroup(categoryId, categoryItem);

// The custom item for our SlimefunItem
SlimefunItemStack itemStack = new SlimefunItemStack("FIRE_CAKE", "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZTk1MmQyYjNmMzUxYTZiMDQ4N2NjNTlkYjMxYmY1ZjI2NDExMzNlNWJhMDAwNmIxODU3NmU5OTZhMDI5M2U1MiJ9fX0=", "&4Fire Cake", "", LoreBuilder.radioactive(Radioactivity.HIGH), LoreBuilder.HAZMAT_SUIT_REQUIRED);

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

## 2. Creating a new Item
GEO Resources obviously need an Item form too, so we will start with that.<br>
Right below our previous code we will start to create a new SlimefunItem. As usual we are gonna start with the ItemStack.

But wait... first we will need to come up with a resource.<br>
How about an ore that is exclusive to the End dimension? An Ender Ore? Yeah let's go with that.<br>
We are still inside our `onEnable()` method and right below the code from earlier:
```java
// ...

SlimefunItemStack enderOreItem = new SlimefunItemStack("ENDER_ORE", "eyJ0ZXh...", "&5Ender Ore", "", "&rThis is a cool Ore", "&rGEO-Mine me in the End");
```

We will also use a custom head texture for this but I am gonna shorten the long String for the texture to make it more readable.<br>
Now that we have our ItemStack we can also create the Item, we will use the ItemGroup we created earlier.

```java
// ...
SlimefunItemStack enderOreItem = new SlimefunItemStack("ENDER_ORE", "eyJ0ZXh...", "&5Ender Ore", "", "&rThis is a cool Ore", "&rGEO-Mine me in the End");
SlimefunItem enderOre = new SlimefunItem(itemGroup, enderOreItem, ..., ...);
enderOre.register();
```

Now you might notice that the last two parameters are still missing.<br>
We don't want our item to be crafted, we want it to be obtained using the GEO Miner and also show that in the guide.<br>
For this we can use the recipe type `RecipeType.GEO_MINER`.
However... having this RecipeType will **not** add our item to the GEO Miner automatically, we still have to do that in the next step.<br>
This Recipe Type only functions as a "display item", to inform users on how to obtain it. Therefore we don't really need a recipe either.<br>
But we will still need to pass a Recipe Array with the length 9, so we will just create an empty 9 slot array.

```java
// ...
SlimefunItemStack enderOreItem = new SlimefunItemStack("ENDER_ORE", "eyJ0ZXh...", "&5Ender Ore", "", "&rThis is a cool Ore", "&rGEO-Mine me in the End");
SlimefunItem enderOre = new SlimefunItem(itemGroup, enderOreItem, RecipeType.GEO_MINER, new ItemStack[9]);
enderOre.register();
```

Now our item is pretty much done and registered.<br>
We still need to create the resource for the GEO Miner though, so that's what we will do next.

## 3. Creating a GEOResource
For this we will need to create a new class again.<br>
So create a new class/file and name it something meaningful, we will just call it "EnderOreResource".

```java
public class EnderOreResource {

}
```

Now we need to implement the behaviour of a GEO Resource, the GEO Miner uses an interface for this called `GEOResource`.<br>
Simply implement that interface into your class and remember to import the interface.

```java
public class EnderOreResource implements GEOResource {

}
```

Your IDE will probably start warning you about missing methods at this point.<br>
Whenever you implement an interface you will also have to implement its methods. You can see all methods from GEOResource on our [Javadocs](https://slimefun.github.io/javadocs/Slimefun4/docs/io/github/thebusybiscuit/slimefun4/api/geo/GEOResource.html).
We are gonna start simple, the first method we need to implement is `getName()`, so we implement that method and return the name of our resource.

```java
public class EnderOreResource implements GEOResource {

  @Override
  public String getName() {
    return "Ender Ore";
  }

}
```

Next up is the method `isObtainableFromGEOMiner()` which determines whether this resource should be added to the GEO Miner.<br>
For us it is a definite yes, so we return true.

```java
public class EnderOreResource implements GEOResource {

  @Override
  public String getName() {
    return "Ender Ore";
  }
  
  @Override
  public boolean isObtainableFromGEOMiner() {
    return true;
  }

}
```

Now we come to the generator settings. We got two methods which handle that: `getDefaultSupply(...)` determines the default amount for a given Environment and Biome.<br>
And we also have the method `getMaxDeviation()` which determines the maximum amount this resource is allowed to deviate from the default amount.<br>
Note here that it will only deviate if the amount is greater than zero.

To give you an example of what exactly this means: If our default supply for "The End" is 20 Ender Ores per Chunk and our max-deviation is set to 2,<br>
then the actual amount in a chunk will vary between 20 and 22 Ender Ores, if the deviation is set to 4 it will be 20 - 24 Ender Ores instead. Think of it as the maximum of bonus items.

```java
public class EnderOreResource implements GEOResource {

  @Override
  public String getName() {
    return "Ender Ore";
  }
  
  @Override
  public boolean isObtainableFromGEOMiner() {
    return true;
  }
  
  @Override
  public int getDefaultSupply(Environment environment, Biome biome) {
    // Environment is actually the same as the World Type (NORMAL / NETHER / THE_END)
    
    if (environment == Environment.THE_END) {
      return 20;
    }
    else {
      return 0;
    }
  }
  
  @Override
  public int getMaxDeviation() {
    return 8;
  }

}
```

This will now spawn between 20 and 28 Ender Ores in "The End" and 0 Ender Ores in any other dimension.<br>
Now all that's left to do is to implement the methods `getKey()` and `getItem()`. For this we will need a `NamespacedKey` which requires our Plugin instance.<br>
But we will also need our ItemStack from earlier...

We will just make our life easier by creating a constructor.<br>
A constructor is a special form of method that is called when a new instance of that class is created. You can use it to control what parameters are needed when doing `new SomeClass(...);`.<br>
Let's create a new constructor for this class at the top of the file:

```java
public class EnderOreResource implements GEOResource {

  public EnderOreResource() {
    
  }

// ... All our other methods come after this
```

Now we can give the constructor some arguments, remember we need our Plugin instance and our ItemStack.<br>
So we just create two parameters, one being a Plugin, one an ItemStack.

```java
public class EnderOreResource implements GEOResource {

  public EnderOreResource(Plugin plugin, ItemStack item) {
    
  }

// ... All our other methods come after this
```

Now we just need to turn our Plugin into a NamespacedKey, we will simply store it as a "class member" which means that anything inside our class can access this variable.<br>
The keyword `final` means that is a constant, it cannot be changed afterwards. We can set this constant right at the top or initialize it in the constructor.<br>
You just need to remember that you cannot re-assign a final variable after it was intiialized.

```java
public class EnderOreResource implements GEOResource {

  private final NamespacedKey key;

  public EnderOreResource(Plugin plugin, ItemStack item) {
    this.key = new NamespacedKey(plugin, "ender_ore");
  }

// ... All our other methods come after this
```

While we are at it, we will also store the item as a constant variable.

```java
public class EnderOreResource implements GEOResource {

  private final NamespacedKey key;
  private final ItemStack item;

  public EnderOreResource(Plugin plugin, ItemStack item) {
    this.key = new NamespacedKey(plugin, "ender_ore");
    this.item = item;
  }

// ... All our other methods come after this
```

Now we can implement the remaining two methods.

```java
public class EnderOreResource implements GEOResource {

  private final NamespacedKey key;
  private final ItemStack item;

  public EnderOreResource(Plugin plugin, ItemStack item) {
    this.key = new NamespacedKey(plugin, "ender_ore");
    this.item = item;
  }
  
  @Override
  public NamespacedKey getKey() {
    return key;
  }
  
  @Override
  public ItemStack getItem() {
    // It is important to add a .clone() here since we do not want
    // to return the original item.
    return item.clone();
  }

// ... All our other methods come after this
```

## 4. Final registration
Now we created a new SlimefunItem and a new GEOResource. We only need to register the resource now, so we head back to our main class and into our `onEnable()` method.

```java
// ...
SlimefunItemStack enderOreItem = new SlimefunItemStack("ENDER_ORE", "eyJ0ZXh...", "&5Ender Ore", "", "&rThis is a cool Ore", "&rGEO-Mine me in the End");
SlimefunItem enderOre = new SlimefunItem(itemGroup, enderOreItem, RecipeType.GEO_MINER, new ItemStack[9]);
enderOre.register();
```

We will now create a new instance of our `EnderOreResource` class and register it.

```java
// ...
SlimefunItemStack enderOreItem = new SlimefunItemStack("ENDER_ORE", "eyJ0ZXh...", "&5Ender Ore", "", "&rThis is a cool Ore", "&rGEO-Mine me in the End");
SlimefunItem enderOre = new SlimefunItem(itemGroup, enderOreItem, RecipeType.GEO_MINER, new ItemStack[9]);
enderOre.register();

EnderOreResource enderOreResource = new EnderOreResource(this, enderOreItem);
enderOreResource.register();
```

As defined earlier, we pass two arguments to the constructor, `this` which refers to our Plugin in this context and the ItemStack / SlimefunItemStack.<br>
And we are done! Our resource is now generated and can be mined inside "The End" using a GEO-Miner.<br>
Here is the full `EnderOreResource` class:

```java
public class EnderOreResource implements GEOResource {

  private final NamespacedKey key;
  private final ItemStack item;

  public EnderOreResource(Plugin plugin, ItemStack item) {
    this.key = new NamespacedKey(plugin, "ender_ore");
    this.item = item;
  }
  
  @Override
  public NamespacedKey getKey() {
    return key;
  }
  
  @Override
  public ItemStack getItem() {
    // It is important to add a .clone() here since we do not want
    // to return the original item.
    return item.clone();
  }

  @Override
  public String getName() {
    return "Ender Ore";
  }
  
  @Override
  public boolean isObtainableFromGEOMiner() {
    return true;
  }
  
  @Override
  public int getDefaultSupply(Environment environment, Biome biome) {
    // Environment is actually the same as the World Type (NORMAL / NETHER / THE_END)
    
    if (environment == Environment.THE_END) {
      return 20;
    }
    else {
      return 0;
    }
  }
  
  @Override
  public int getMaxDeviation() {
    return 8;
  }

}
```

If you have any questions, feel free to hop on discord and ask them in `#programming-help`.
