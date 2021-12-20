This is the **sixth Part** of our Developer Guide, you can find a full overview on our [main page](https://github.com/Slimefun/Slimefun4/wiki/Developer-Guide).<br>
If you haven't checked out the [fifth Part of this Guide](https://github.com/Slimefun/Slimefun4/wiki/Developer-Guide-(5-Researches)), then please do that.

## 1. Our usual recap
In the last part we covered how to create Researches.<br>
This is the full code we created last time:

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

Today we want to use custom heads for our item group and items.

## 2. Introduction
As all of you know: Minecraft supports using any Player's head as an item or block.<br>
This even includes Heads from Skins that are no longer in use.<br>
There are a lot of databases out there which collect or curate lists of cool heads to use.

In this guide we will be using https://minecraft-heads.com/ as it is pretty handy and large.<br>
Any tool or website that curates or generates heads will work though.

Note that we are not affiliated with this website, this is just an example and our personal recommendation.<br>
If you know a better tool or website, feel free to use that instead.

## 3. Getting the texture
To use a head ingame you will need to point to the skin it should be using.<br>
Minecraft uses an URL to the https://textures.minecraft.net/texture/ server to accomplish this. This URL is not stored as plain text though, it is part of a JSON-String which is then encoded in Base64.

Don't worry you don't need to understand any of that really, all you need to know is that each skin can be represented by a [Base64](https://en.wikipedia.org/wiki/Base64) String.<br>
Now we just need the Base64 String of our skin...

### 3.1. Creating a head yourself
If you want to create your own texture it will be as simple as creating a skin for your character.<br>
We will just link you to the [Minecraft Wiki](https://minecraft.gamepedia.com/Skin#Creating_a_skin) for that but I am sure you are already familiar with this.

Since we will only be using the head, the body, arms and legs are unimportant to us.<br>
It is only important that you texturize the head part to your liking.<br>
Have you made your texture? Good, alright!

You can then use [Minecraft-Heads' Custom heads generator](https://minecraft-heads.com/custom-heads/heads-generator) (as an example) to generate a give-command for your head.<br>
It should look a little like this:<br>
`/give @p skull 1 3 {display:{Name:"Test"},SkullOwner:{Id:"6e094b8b-8c7c-4ee4-b039-bd99a95a7666",Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZTk1MmQyYjNmMzUxYTZiMDQ4N2NjNTlkYjMxYmY1ZjI2NDExMzNlNWJhMDAwNmIxODU3NmU5OTZhMDI5M2U1MiJ9fX0="}]}}}`

Now pay attention to the data in this command. There is a field called "Properties" followed by a "textures" object.<br>
This is what we are looking for. More precisely: It is actually the "Value" that we are looking for.<br>
So with everything else removed we are left with this:<br>
`eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZTk1MmQyYjNmMzUxYTZiMDQ4N2NjNTlkYjMxYmY1ZjI2NDExMzNlNWJhMDAwNmIxODU3NmU5OTZhMDI5M2U1MiJ9fX0=`

This is the Base64 String we were looking for.<br>
We will cover how to use it in the next section.

### 3.2 Using a head from minecraft-heads.com
You can of course extract any texture from a give-command as seen above.<br>
But minecraft-heads.com already gives us the Base64 String we need for every head in their collection.

Just browse through the [Custom heads](https://minecraft-heads.com/custom-heads) section and find a head you want to use.<br>
When you click on it and scroll down you should see a "Value" field at the bottom which contains a String that may look like this:<br>
`eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZTk1MmQyYjNmMzUxYTZiMDQ4N2NjNTlkYjMxYmY1ZjI2NDExMzNlNWJhMDAwNmIxODU3NmU5OTZhMDI5M2U1MiJ9fX0=`

This is the Base64 String we needed.<br>
We can now use this String for our needs in the next step.

_Disclaimer: Grabbing a skin from the website is very easy but remember: Credit where credit's due. It is always best advice to credit the sources or even creators who's content you used. This is not any legal advice but a little credit note on your project page for where you got those skins from is always a good idea._

## 4. Using your texture for an Item Group
From our code we created earlier:<br>
```java
NamespacedKey categoryId = new NamespacedKey(this, "cool_category");
CustomItemStack categoryItem = new CustomItemStack(Material.DIAMOND, "&4Our very cool Category");
ItemGroup itemGroup = new ItemGroup(categoryId, categoryItem);

// ...
```

We want to modify this to use our texture now instead of a diamond.<br>
Slimefun provides a quick and easy method for this: `SkullItem.fromBase64(...)`.<br>
Note that you will need to **import** SkullItem from `me.mrCookieSlime.slimefun.cscorelib2.skull.SkullItem` first.

This method takes in a Base64 String and gives us an `ItemStack` version of that head.<br>
The constructor for `CustomItem` also allows us to specify an ItemStack which we want to rename instead of a Material.<br>
So let's do that.

```java
NamespacedKey categoryId = new NamespacedKey(this, "cool_category");
CustomItemStack categoryItem = new CustomItemStack(SkullItem.fromBase64(...), "&4Our very cool Category");
ItemGroup itemGroup = new ItemGroup(categoryId, categoryItem);

// ...
```

Now we still need to give that method our Base64 String from earlier.

```java
NamespacedKey categoryId = new NamespacedKey(this, "cool_category");
CustomItemStack categoryItem = new CustomItemStack(SkullItem.fromBase64("eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZTk1MmQyYjNmMzUxYTZiMDQ4N2NjNTlkYjMxYmY1ZjI2NDExMzNlNWJhMDAwNmIxODU3NmU5OTZhMDI5M2U1MiJ9fX0="), "&4Our very cool Category");
ItemGroup itemGroup = new ItemGroup(categoryId, categoryItem);

// ...
```

Our ItemGroup is now displayed as our head.

## 5. Using your texture for items
The next part is to modify our `SlimefunItemStack` to have our custom head texture.<br>
This is our code from earlier:
```java
// ...
SlimefunItemStack itemStack = new SlimefunItemStack("FIRE_CAKE", Material.CAKE, "&4Fire Cake", "", LoreBuilder.radioactive(Radioactivity.HIGH), LoreBuilder.HAZMAT_SUIT_REQUIRED);
// ...
```

Wouldn't it be awesome for our Fire Cake to actually look like a dangerous piece of cake?<br>
With SlimefunItemStack this is even easier. We can simply replace our Material (`Material.CAKE`) with the Base64 String of our texture.
```java
// ...
SlimefunItemStack itemStack = new SlimefunItemStack("FIRE_CAKE", "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZTk1MmQyYjNmMzUxYTZiMDQ4N2NjNTlkYjMxYmY1ZjI2NDExMzNlNWJhMDAwNmIxODU3NmU5OTZhMDI5M2U1MiJ9fX0=", "&4Fire Cake", "", LoreBuilder.radioactive(Radioactivity.HIGH), LoreBuilder.HAZMAT_SUIT_REQUIRED);
// ...
```

And we are done!<br>
Now here is the full code:
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

If you have any questions, feel free to hop on discord and ask them in `#programming-help`.

[**> Continue with Part 7**](https://github.com/Slimefun/Slimefun4/wiki/Developer-Guide-(7-GEO-Resources))
