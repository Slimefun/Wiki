This is a part of our Developer Guide, you can find a full overview on our [main page](https://github.com/Slimefun/Slimefun4/wiki/Developer-Guide).

This guide assumes you are using Maven for your project. 

## Compiling

In order to test your addon, you need to compile the addon into a `.jar` file (the files that servers recognize as plugins).<br>
If you've chosen to use Maven for your project (as we suggested in [Part 1](https://github.com/Slimefun/Wiki/blob/master/pages/Developer-Guide-(1-Project-Setup).md)), you can simply run the following command in the root directory of your addon:

```
$ mvn clean package
```
Your compiled `.jar` can be found in the `target/` directory in the project folder. 

IntelliJ also provides a way to compile your plugin.<br>
On the right side of the editor window, click the button that says Maven. (If there is no such button, go to the top bar and navigate to `View > Tool Windows > Maven`)<br>
Now in the project folder, open the folder called `Lifecycle` and double click `clean`. Once that is complete, double click `package`.

Once again, your compiled `.jar` can be found in the `target/` directory in the project folder. 

## Creating a testing environment
The next step is to run a server with your freshly compiled addon.<br>
We recommend [Paper](https://papermc.io/downloads) as your server software. <br>
Do note that only Spigot and its forks (Paper, Purpur, etc.) are supported by Slimefun and its addons.

The server should be in the form of a `.jar` file.<br>
Create a new folder somewhere dedicated for your server, and place the downloaded server `.jar` file there.

Now, open the command line and run this command (in the server folder) to start the server:
```
java -jar [name of jar file].jar
```
This will create `eula.txt` in your server directory, which you must open and change `false` to `true` on the last line to run your server.<br>
Once you do that, rerun your server by reentering the command.

You will now see a folder called `plugins/` in the same place. This is where you will put Slimefun, your addon, and other plugins for your server.<br>
Place your compiled `.jar` as well as the Slimefun jar into this folder.

Stop the server by typing `stop` into the console, and rerun the server with the plugins installed. Now, if you did everything right, the server should now be running with your addon. 

## Trying out your addon

Now, you can launch Minecraft and join the server that is running.<br>
In the multiplayer tab, create a new server with the address `localhost`.<br>
Hopefully, once you join it, you will be in a server with Slimefun and your addon installed. To verify this, run `/sf versions` to display Slimefun and the installed addons.<br>
If your addon appears, it was a success!

## Recompiling

Let's say that you want to make changes to your addon now, whether you're adding a new item or fixing a bug.

After you make your changes, compile your addon again.<br>
The compiled jar will be in the `target/` folder of the project.<br>
Now, stop the server, remove the old addon `.jar`, and put in the new `.jar`. Then rerun the server.

As always, if you have any questions, you can ask them in `#programming-help` in the [Slimefun Discord](https://discord.gg/slimefun). 

## Publishing

If you wish, you can now [publish](https://github.com/Slimefun/Slimefun4/wiki/Developer-Guide-(Publishing)) your addon.
