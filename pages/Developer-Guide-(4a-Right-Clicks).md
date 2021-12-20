This is the **fourth Part** of our Developer Guide, you can find a full overview on our [main page](https://github.com/Slimefun/Slimefun4/wiki/Developer-Guide).<br>
If you haven't checked out the [third Part of this Guide](https://github.com/Slimefun/Slimefun4/wiki/Developer-Guide-(3-Your-first-Item)), then please do that.

*The fourth part is divided into two sections, this is Section a*.

## 1. What we did last time
On the last part we covered how to create our own Slimefun items, item groups, and recipes.<br>
If you missed it, then please head back now. You will need this info to progress any further.

Still/Back here? Good. Now this is the code from last time (it should be inside your 'onEnable' method).
```java
NamespacedKey categoryId = new NamespacedKey(this, "cool_category");
CustomItemStack categoryItem = new CustomItemStack(Material.DIAMOND, "&4Our very cool Category");

// Our custom Category
ItemGroup itemGroup = new ItemGroup(categoryId, categoryItem);

// The custom item for our SlimefunItem
SlimefunItemStack itemStack = new SlimefunItemStack("MY_ADDON_ITEM", Material.EMERALD, "&aPretty cool Emerald", "", "&7This is awesome");

// A 3x3 shape representing our recipe
ItemStack[] recipe = {
    new ItemStack(Material.DIAMOND),    null,                               new ItemStack(Material.DIAMOND),
    null,                               SlimefunItems.CARBONADO,            null,
    new ItemStack(Material.DIAMOND),    null,                               new ItemStack(Material.DIAMOND)
};

SlimefunItem sfItem = new SlimefunItem(itemGroup, itemStack, RecipeType.ENHANCED_CRAFTING_TABLE, recipe);
sfItem.register(this);
```

<!--TODO: a more detailed guide on compiling and testing-->
Now, you can compile your addon and test it ingame. See [Publishing](https://github.com/Slimefun/Slimefun4/wiki/Developer-Guide-(Publishing)) for details.<br> 
As you can see our Slimefunitem can already be seen and crafted ingame.<br>
But there is not much value to this item yet, it doesn't do anything.<br>
Let's change that.

## 2. Extending SlimefunItem
For our previous item we simply used the class `SlimefunItem`, this is fine and good. But it doesn't do anything by default.<br>
So we will need to create our own class instead.<br>
This should be very straightforward and you will need to create classes all the time.

Anyway, for this tutorial we will make a Cake that sets you on fire when you try to eat it.<br>
Let's call it `FireCake`, now create the class `FireCake`.<br>
Your class will be a blank canvas at first, it will probably look empty like this:

```java
public class FireCake {

}
```

In Java or any other object-oriented programming language, classes can inherit from each other.<br>
You can think of a class as a template for objects. The `SlimefunItem` class is basically a template for any item we will create.<br>
Now we created our own class which makes this a completely new template for objects. However we can extend the `SlimefunItem` template which will
make sure items that use our class have all the same functionality as an item created from the `SlimefunItem` class.

Likewise, your plugin's main class is just an *extension* of Bukkit's JavaPlugin class, the template for all plugins.<br>
Your main class extends that plugin and your Server then creates a Plugin object based on the template you defined.

I hope this didn't confuse you too much, what we need to do now is the following:<br>
We want our `FireCake` class to extend the `SlimefunItem` class, to make it inherit from that.<br>
For this we use the `extends` keyword followed by the parent class (`SlimefunItem`). Note that any class can only have one parent and one parent only.

```java
public class FireCake extends SlimefunItem {

}
```

Now your IDE will probably start nagging you with errors at this point.<br>
We will need a constructor. A constructor defines **how** objects are created from this "template".<br>
And the `SlimefunItem` constructor requires a few parameters which all child classes need to provide too.

If we think back of our previous code, the constructor looked like this:
```java
new SlimefunItem(itemGroup, itemStack, recipeType, recipe);
```

With our new class we can simply copy this constructor and pass all arguments onto the constructor of our parent class.<br>
*Tip: Parent classes are usually referred to as "super classes" and their constructors as "super constructors"*

We simply use the `super` keyword for this and pass on the arguments, the constructor will look like this now:

```java
public class FireCake extends SlimefunItem {
    
    public FireCake(ItemGroup itemGroup, SlimefunItemStack item, RecipeType recipeType, ItemStack[] recipe) {
        super(itemGroup, item, recipeType, recipe);
    }
    
}
```

Now our class is basically fully set up.<br>
We can even go back to our main class and use our class instead, try it out.

```java
NamespacedKey categoryId = new NamespacedKey(this, "cool_category");
CustomItemStack categoryItem = new CustomItemStack(Material.DIAMOND, "&4Our very cool Category");
ItemGroup itemGroup = new ItemGroup(categoryId, categoryItem);

// The custom item for our SlimefunItem
SlimefunItemStack itemStack = new SlimefunItemStack("MY_ADDON_ITEM", Material.CAKE, "&aA Fire Cake", "", "&7This is awesome");

// A 3x3 shape representing our recipe
ItemStack[] recipe = {
    new ItemStack(Material.DIAMOND),    null,                               new ItemStack(Material.DIAMOND),
    null,                               SlimefunItems.CARBONADO,            null,
    new ItemStack(Material.DIAMOND),    null,                               new ItemStack(Material.DIAMOND)
};

// We are now using our own custom class for this
FireCake cake = new FireCake(itemGroup, itemStack, RecipeType.ENHANCED_CRAFTING_TABLE, recipe);
cake.register(this);
```

**IMPORTANT: Remember to change the SlimefunItemStack to be a cake, otherwise you won't be able to eat it.**

## 3. Adding an Item Handler (BlockUseHandler)
Now that we swapped our the class, the addon should still work as expected. However nothing has changed.<br>
All we have done so far is basically add a new class which acts exactly like a SlimefunItem.<br>
We need to add actual features to the class now.

In Slimefun one way we can add functionality is through an `ItemHandler` ([Javadocs](https://slimefun.github.io/javadocs/Slimefun4/docs/me/mrCookieSlime/Slimefun/Objects/handlers/ItemHandler.html)).<br>
There are several Item Handler types available to choose from.<br>
You can find a full list on our JavaDocs - that are linked above - under the point "All Known Subinterfaces".

To add our ItemHandler, we go back to our custom item class.
```java
public class FireCake extends SlimefunItem {
    
    public FireCake(ItemGroup itemGroup, SlimefunItemStack item, RecipeType recipeType, ItemStack[] recipe) {
        super(itemGroup, item, recipeType, recipe);
    }
    
}
```

Here we will **override** a method from SlimefunItem called `preRegister()`.<br>
This method is called right before the item is registered, this ensures that our handlers get added properly.<br>
Note that overridden methods should have an `@Override` annotation as seen here:

```java
public class FireCake extends SlimefunItem {
    
    public FireCake(ItemGroup itemGroup, SlimefunItemStack item, RecipeType recipeType, ItemStack[] recipe) {
        super(itemGroup, item, recipeType, recipe);
    }
    
    @Override
    public void preRegister() {
        // We will add our Item Handlers right here.
    }
    
}
```

You can add as many Item Handlers as you want but be careful, some handlers have very strict requirements.<br>
You can for example only add a BowShootingHandler to a bow, not to any other item.

The ItemHandler we are going to choose is the following: `BlockUseHandler`, the BlockUseHandler is called when a Player right-clicks our block.
Similarly the `ItemUseHandler` is called when a Player right-clicks with this item in his hand.

Now we will jump into the `preRegister()` method.<br>
We start by declaring a new `BlockUseHandler`.<br>
But don't write anything on the right side yet.

We can then add our handler by calling `addItemHandler(...)`

```java
@Override
public void preRegister() {
    BlockUseHandler blockUseHandler = ???;
    addItemHandler(blockUseHandler);
}
```

Great, we have now successfully added a `BlockUseHandler` to our item.<br>
Except... that we haven't created our BlockUseHandler yet.

The BlockUseHandler is an interface with one method only. Interfaces are basically templates for our templates.<br>
They are templates for classes, kinda. They only define methods but do not implement them. Think of them as a kind of skeleton.<br>
Interfaces with only a single method are called "Functional Interfaces", since they only have one method they can be treated similar to a method.<br>
"similar" but not "equal". Since Java 8 we can reference a method however and simply use that as our interface implementation.

If you need a proper explanation on all of this, try searching on the internet for "Java 8 Lambdas" and "Java 8 method references" and "Java 8 functional interfaces".<br>
For the purpose of this guide you only need to know that your Item handlers can be implemented by one single method and we can reference this method.

The BlockUseHandler's method takes a `PlayerRightClickEvent` as an argument.<br>
So we can simply create a new method with this argument.

```java
@Override
public void preRegister() {
    BlockUseHandler blockUseHandler = ???;
    addItemHandler(blockUseHandler);
}

// Note that the method name does not matter here
private void onBlockRightClick(PlayerRightClickEvent event) {
    // This method will now be called whenever this Block is right-clicked.
}
```
Now back to this part:
```java
BlockUseHandler blockUseHandler = ???;
```

We will now need to reference our method here, telling our Plugin to call this method when the block is used.<br>
To reference a method within the same class, we can do `this::methodname`. Note that this will **not** execute the method.<br>
The method will only be referenced and passed as a BlockUseHandler in our case.<br>
So we can simply reference our `onBlockRightClick` method here.

```java
BlockUseHandler blockUseHandler = this::onBlockRightClick;
```

The full code now looks like this.

```java
public class FireCake extends SlimefunItem {
    
    public FireCake(ItemGroup itemGroup, SlimefunItemStack item, RecipeType recipeType, ItemStack[] recipe) {
        super(itemGroup, item, recipeType, recipe);
    }
    
    @Override
    public void preRegister() {
        BlockUseHandler blockUseHandler = this::onBlockRightClick;
        addItemHandler(blockUseHandler);
    }
    
    private void onBlockRightClick(PlayerRightClickEvent event) {
    
    }
    
}
```

Now we can start to do stuff in our `onBlockRightClick` method.<br>
Let's prevent the Player from eating this cake. We can use `event.cancel()` for this.

```java
private void onBlockRightClick(PlayerRightClickEvent event) {
    // This will prevent the Player from eating this cake.
    event.cancel();
}
```

And now we can set the Player on fire.<br>
Bukkit uses ticks to determine how long the player should burn. One tick is equal to 1/20th of a second.<br>
So 20 ticks will mean 1 second. If we just multiply x by 20 we can set them on fire for x seconds.

```java
private void onBlockRightClick(PlayerRightClickEvent event) {
    // This will prevent the Player from eating this cake.
    event.cancel();
    // Now set the Player on fire for 5 seconds
    event.getPlayer().setFireTicks(5 * 20);
}
```

Now our Fire Cake is done.<br>
Test it out ingame, craft the cake and see if you are set on fire.<br>
**Make sure that you didn't forget to change your item type to `Material.CAKE`**

## 4. Adding multiple Item handlers (ItemUseHandler)
You can add as many Item handlers as you want, the ItemUseHandler for example is triggered when a Player right-clicks with the cake in their hand.<br>
Now when they right-click the placed cake.

We can simply add a new method (also with a PlayerRightClickEvent parameter) and add it as an `ItemUseHandler`.<br>
Let's be nice and give the Player 1 XP level when he right clicks with the cake in his hand.

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

Phew, now we have shown you how to make your custom slimefun item perform actions on right-click.<br>
If you have any questions, feel free to hop on discord and ask them in `#programming-help`.<br>
I hope this was helpful to you and I expect to see lots of awesome addons very soon!

[**> Continue with Part 4b**](https://github.com/Slimefun/Slimefun4/wiki/Developer-Guide-(4b-Radioactive-and-WitherProof))
