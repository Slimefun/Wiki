This is the **fourth Part** of our Developer Guide, you can find a full overview on our [main page](https://github.com/Slimefun/Slimefun4/wiki/Developer-Guide).<br>
If you haven't checked out the [third Part of this Guide](https://github.com/Slimefun/Slimefun4/wiki/Developer-Guide-(3-Your-first-Item)), then please do that.

*The fourth part is divided into two sections, this is Section b*.

## 1. A Recap of part 4a
Part 4a is not necessarily *required* to follow this part.<br>
However we introduced some very important principles that we will need here too, so instead of re-explaining everything, go check out [part 4a](https://github.com/Slimefun/Slimefun4/wiki/Developer-Guide-(4a-Right-Clicks)) if something is unclear.

Alright, last time we created a custom cake that sets you on fire when you try to eat it.<br>
But it also gives one XP level when you right-click with that cake in your hand.<br>
To achieve this we introduced classes, more specifically we taught you how to create your own class that extends SlimefunItem, here is our code of that class so far.

```java
public class FireCake extends SlimefunItem {
    
    public FireCake(ItemGroup itemGroup, SlimefunItemStack item, RecipeType recipeType, ItemStack[] recipe) {
        super(itemGroup, item, recipeType, recipe);
    }
    
    @Override
    public void preRegister() {
        BlockUseHandler blockUseHandler = this::onBlockRightClick;
        addItemHandler(blockUseHandler);
        
        ItemUseHandler itemUseHandler = this::onItemRightClick;
        addItemHandler(itemUseHandler);
    }
    
    private void onBlockRightClick(PlayerRightClickEvent event) {
        // This will prevent the Player from eating this cake.
        event.cancel();
        // Now set the Player on fire for 5 seconds
        event.getPlayer().setFireTicks(5 * 20);
    }
    
    private void onItemUseRightClick(PlayerRightClickEvent event) {
        // Calling event.cancel() in here would prevent the cake
        // from being placed down.
        event.getPlayer().giveExpLevels(1);
    }
    
}
```

We can ignore the preRegister() and right-click methods for now, those were covered in part 4a.

## 2. Item Attributes
Slimefun items can have functionality (called ItemHandlers) but they can also have some properties (called ItemAttributes).<br>
Note that these attributes are not related to Minecraft's attributes system.

An `ItemAttribute` adds a certain property to a SlimefunItem, such as being radioactive.<br>
Let's make our FireCake also radioactive, shall we?

To add an ItemAttribute, simply add it to your class declaration.<br>
However ItemAttributes are interfaces, not classes. So you need to use the keyword `implements` here.<br>
As we covered in the last part: Classes can only have one direct parent class. But they can implement as many interfaces as they want.<br>
Let's implement the `Radioactive` interface. Now your code may look like this:
```java
public class FireCake extends SlimefunItem implements Radioactive {
    
    public FireCake(ItemGroup itemGroup, SlimefunItemStack item, RecipeType recipeType, ItemStack[] recipe) {
        super(itemGroup, item, recipeType, recipe);
    }
    
    // ...
    
}
```

Import the inteface.<br>
We are not done yet though, each interface often defines a set of methods that we need to implement ourselves.<br>
Your IDE should already prompt you to do that.

In the case of `Radioactive`, there is only one method: `getRadioactivity()`. Implement that method like this:
```java
public class FireCake extends SlimefunItem implements Radioactive {
    
    public FireCake(ItemGroup itemGroup, SlimefunItemStack item, RecipeType recipeType, ItemStack[] recipe) {
        super(itemGroup, item, recipeType, recipe);
    }
    
    @Override
    public Radioactivity getRadiation() {
      // ?
    }
    
    // ...
    
}
```

Now we need to give the method something to do.<br>
This method expects us to return a value of the type `Radioactivity`.
`Radioactivity` is an enum. Enums (or "Enumerations") are a type of class that cannot be created that easily.<br>
An enum has a limited amount of possible states and each state is saved as a constant, accessible via `EnumName.CONSTANT_NAME`.

You can see all constants from that enum on our [Javadocs](https://slimefun.github.io/javadocs/Slimefun4/docs/io/github/thebusybiscuit/slimefun4/core/attributes/Radioactivity.html).

We are just gonna choose the level HIGH for now. We can simply return that constant.
```java
public class FireCake extends SlimefunItem implements Radioactive {
    
    public FireCake(ItemGroup itemGroup, SlimefunItemStack item, RecipeType recipeType, ItemStack[] recipe) {
        super(itemGroup, item, recipeType, recipe);
    }
    
    @Override
    public Radioactivity getRadiation() {
        return Radioactivity.HIGH;
    }
    
    // ...
    
}
```

Now your item is already radioactive, it will damage players and require them to wear a Hazmat Suit.<br>
However our unsuspecting player have no way to know that this item is radioactive...

## 3. Changing the item lore
The best way of letting players know what your item does is through the lore.<br>
Let's go back inside our `onEnable()` method from the main class.

```java
NamespacedKey categoryId = new NamespacedKey(this, "cool_category");
CustomItemStack categoryItem = new CustomItemStack(Material.DIAMOND, "&4Our very cool Category");
ItemGroup itemGroup = new ItemGroup(categoryId, categoryItem);

// The custom item for our SlimefunItem
SlimefunItemStack itemStack = new SlimefunItemStack("FIRE_CAKE", Material.CAKE, "&4Fire Cake", "", "&cBe careful");

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

Let's change the lore of our `itemStack`, it currently reads "&cBe careful".<br>
We wanna include a tooltip that warns about our radioactive properties.<br>
Luckily Slimefun has a built-in way for that.

There is a static method called `LoreBuilder.radioactive(...)` which takes a constant of `Radioactivity` as an argument.<br>
We can use that to create a string that warns about radioactivity. This will be the same string that Slimefun's standard items use.<br>
If you wanted to go one step further you could also use the static constant `LoreBuilder.HAZMAT_SUIT_REQUIRED` which will warn them to
wear a Hazmat Suit. Let's do that.

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

Now our item will have the appropriate tooltips.

## 4. Implementing any other ItemAttribute
The process for implementing any `ÌtemAttribute` is pretty much the same.<br>
It is always recommended to inform the user of these attributes via the `LoreBuilder` class or manually.

You can find a full list of all available Item Attributes on the [Javadocs](https://slimefun.github.io/javadocs/Slimefun4/docs/io/github/thebusybiscuit/slimefun4/core/attributes/ItemAttribute.html) under **"All Known Subinterfaces"**.

As a little bonus, let's implement the "WitherProof" attribute.<br>
This attribute will prevent Withers from destroying our block.<br>
Let's go back to our class and implement that interface too. You can seperate interfaces you wanna implement with a comma.
```java
public class FireCake extends SlimefunItem implements Radioactive, WitherProof {
    
    public FireCake(ItemGroup itemGroup, SlimefunItemStack item, RecipeType recipeType, ItemStack[] recipe) {
        super(itemGroup, item, recipeType, recipe);
    }
    
    // ...
    
}
```

Now your process will be the same, WitherProof also has a method it requires to be implemented.<br>
The method is called `onAttack()` and it will be run whenever a Wither tried to destroy this block. Solely implementing that interface will already prevent that though.
So with that method generated, the code will look like this.
```java
public class FireCake extends SlimefunItem implements Radioactive, WitherProof {
    
    public FireCake(ItemGroup itemGroup, SlimefunItemStack item, RecipeType recipeType, ItemStack[] recipe) {
        super(itemGroup, item, recipeType, recipe);
    }
    
    @Override
    public void onAttack(Block block, Wither wither) {
    
    }
    
    // ...
    
}
```

The parameters `block` and `wither` correspond to the Block the Wither tried to destroy and the Wither who tried to destroy that block.<br>
You can leave that method empty, the event will be cancelled by the interface anyway.

But you can also do something inside that method, such as spawning a particle for example.<br>
or even better... Let's instantly kill any Wither that tries to eat our precious cake.

```java
public class FireCake extends SlimefunItem implements Radioactive, WitherProof {
    
    public FireCake(ItemGroup itemGroup, SlimefunItemStack item, RecipeType recipeType, ItemStack[] recipe) {
        super(itemGroup, item, recipeType, recipe);
    }
    
    @Override
    public void onAttack(Block block, Wither wither) {
        wither.setHealth(0);
    }
    
    // ...
    
}
```

Setting the Wither's health to zero will instantly kill it.<br>
Now just to recapture everything, here is the full code of our `FireCake` class.

```java
public class FireCake extends SlimefunItem implements Radioactive, WitherProof {
    
    public FireCake(ItemGroup itemGroup, SlimefunItemStack item, RecipeType recipeType, ItemStack[] recipe) {
        super(itemGroup, item, recipeType, recipe);
    }
    
    @Override
    public Radioactivity getRadiation() {
        return Radioactivity.HIGH;
    }
    
    @Override
    public void onAttack(Block block, Wither wither) {
        wither.setHealth(0);
    }
    
    @Override
    public void preRegister() {
        BlockUseHandler blockUseHandler = this::onBlockRightClick;
        addItemHandler(blockUseHandler);
        
        ItemUseHandler itemUseHandler = this::onItemRightClick;
        addItemHandler(itemUseHandler);
    }
    
    private void onBlockRightClick(PlayerRightClickEvent event) {
        // This will prevent the Player from eating this cake.
        event.cancel();
        // Now set the Player on fire for 5 seconds
        event.getPlayer().setFireTicks(5 * 20);
    }
    
    private void onItemUseRightClick(PlayerRightClickEvent event) {
        // Calling event.cancel() in here would prevent the cake
        // from being placed down.
        event.getPlayer().giveExpLevels(1);
    }
    
}
```

So at the end of the day we have made a Cake that...
* sets you on fire when you try to eat it
* gives you radiation when you carry it
* gives you one XP level when you right-click it
* instantly kills any Wither that tries to attack it

I think that is a pretty cool item, given that it is a little... strange and unusual.<br>
If you have any questions, feel free to hop on discord and ask them in `#programming-help`.

[**> Continue with Part 5**](https://github.com/Slimefun/Slimefun4/wiki/Developer-Guide-(5-Researches))
