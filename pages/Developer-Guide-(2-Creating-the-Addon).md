This is the **second Part** of our Developer Guide, you can find a full overview on our [main page](https://github.com/Slimefun/Slimefun4/wiki/Developer-Guide).<br>
If you haven't checked out the [first Part of this Guide](https://github.com/Slimefun/Slimefun4/wiki/Developer-Guide-(1-Project-Setup)), then please do that.

## 1. Your main class
Alright, now that your workspace and project is set up properly, we can start to dive into some code.<br>
Open up the class file of your project that you can find under your renamed package in `src/main/java/`.

It should look a little bit like this:

```java
package ...;

import ...;

public class SlimefunAddon extends JavaPlugin implements SlimefunAddon {
	
	@Override
	public void onEnable() {
		// ...
	}
	
	@Override
	public void onDisable() {
		// Logic for disabling the plugin...
	}
	
	@Override
	public JavaPlugin getJavaPlugin() {
		// This is a method that links your SlimefunAddon to your Plugin.
		// Just return "this" in this case, so they are linked
		return this;
	}
	
	@Override
	public String getBugTrackerURL() {
		// Here you can return a link to your Bug Tracker.
		// This link will be displayed to Server Owners if there is an issue
		// with this Addon. Return null if you have no bug tracker.
		// Normally you can just use GitHub's Issues tab:
		// https://github.com/YOURNAME/YOURPROJECT/issues
		return null;
	}

}
```

The `package` token at the top simply describes the package this file is in.<br>
The `import` token tells Java to import classes from other projects, you will probably see a lot of those importing from `io.github.thebusybiscuit.slimefun4...` or `org.bukkit...`.<br>
This is because you are referencing those classes, as you will work with them.

After that your own class will start it should have the same name as its file (without the file ending) and is followed by `extends JavaPlugin`.<br>
This basically tells Java to treat it like a Bukkit Plugin (in Java).<br>
`implements SlimefunAddon` tells Slimefun to treat your Plugin like an Addon.

This class also contains two `methods`.<br>
`onEnable()` is called whenever the plugin is enabled. This is where you would do any initializations.<br>
`onDisable()` is called when the plugin is disabled, due to a server shutdown for example. You can ignore this one for now.

## 2. The `onEnable` method - Config
The `onEnable` method is already filled with a bunch of stuff in our template.<br>
We will go over each thing individually, but let's start with something basic.

```java
@Override
public void onEnable() {
    // Read something from your config.yml
    Config cfg = new Config(this);
}
```

You can use a `Config` class and `new Config(this)` to reference your plugin's config.<br>
You can find your default config under `src/main/resources/config.yml`.

This `Config` class comes from Slimefun / dough. So you won't see this in any non-Slimefun Projects.<br>
You can read values directly from this class using the appropriate getters:
```java
cfg.getBoolean("path.to.your.boolean");
cfg.getString("path.to.your.string");
```

You can use your Config to set up values that Server Owners should be able to configure.

**Important hint: If your IDE nags about not being able to find `Config`, then make sure to import the Config class from the `io.github.thebusybiscuit.slimefun4.libraries.dough.config` package.**<br>
You will need to import each external class you will use.

[**> Continue with Part 3**](https://github.com/Slimefun/Slimefun4/wiki/Developer-Guide-(3-Your-first-Item))
