This is the **first Part** of our Developer Guide, you can find a full overview on our [main page](https://github.com/Slimefun/Slimefun4/wiki/Developer-Guide).

## 1. The necessary tools
In order to start developing, you will need to make sure that the following software is installed correctly on your system.
1. Java JDK 1.8+
2. Any Java IDE (Eclipse IDE or IntelliJ IDEA are recommended)
3. Apache Maven (IntelliJ has it pre-installed, for Eclipse you need to install the `m2e` addon)
4. Git (recommended, for version control)

We will not go over the details on how to download or install these, you will find plenty of resources online.<br>
Once you have installed everything successfully, continue with Step 2.

## 2. Create a new GitHub Repository
You will need a GitHub Account for this step.
We made a nifty Repository-template for Slimefun Addons for you.<br>
Go to the [Repository template](https://github.com/Slimefun/Addon-Template) and click the bright green button on the right side that says "Use this template".
You will then be prompted to come up with a name and description for your Addon.<br>
When you are finished just click "Create repository from template".

## 3. Setting up your Project
Now that you have a git repository for your project, you can import it into your workspace.<br>
Look up how to import projects from GitHub for the IDE you chose in Step 1.<br>
Make sure to set it up correctly, you will likely want to push things to your repository later.

### Maven
Now we need to talk a little bit about Maven.<br>
Maven is a dependency manager that many Java projects use. Our template already includes a fully configured Maven setup for you.<br>
But you need to make sure that your project is set up correctly, you can look up how to set up a project as a Maven project for your preferred IDE.
Your project will be compiled via Maven too, so if you want to test or share your addon, you need to use Maven either way.

### License
You should also choose a License for your project. We recommend you to choose an Open-Source license, so everyone can contribute to your project.<br>
You can consult [ChooseALicense.com](https://choosealicense.com/) to find a suitable open-source license for you.<br>
If you don't really want to bother with this choice, we recommend you the [MIT License](https://choosealicense.com/licenses/mit/).

To select a license, simply copy the license text and paste it into a new file called "LICENSE" (no file ending) in your project's root directory.

### README
Your Project also needs a descriptive README.<br>
Our default README simply contains short instructions on how to set up the template properly (We will also cover that in Step 4).<br>
But you should write a proper README instead.<br>
Give your project a proper description, maybe link your discord server, your BukkitDev page, your SpigotMC page, a download link or whatever you want to put there.<br>
This README will be the landing page of your GitHub project, so make it pretty ;)

## 4. Very important step
This step is the most important of all.<br>
At the moment your repository still contains a lot of placeholders that need to be changed.<br>
Navigate to the pom.xml file inside your project's root folder, at the top you will see a short block with 4 values.<br>

### Your groupId
Every Java project has a group/package id.<br>
This id is used to identify you as a developer or an organization.<br>
These ids need to be in all lower case, here are some examples:
* `me.thebusybiscuit` (`me.****` is often used for individuals)
* `com.example` (Use your website in reverse if you own one)
* `com.google.example` (If you are part of an organization, Google for example, then use this format. Do not impersonate any organizations and only use this id if your project is made in the name of that organization)

For most developers, we would recommend to just go with `me.yourname` (remember, all in lower case, use _ to express spaces).<br>
**Hold onto this id for now, we will need it later**

### Your projectId
Every Java project also has a projectId, in Maven terms we call this an artifactId.<br>
Together with your groupId this forms your package identifier, which should be unique.

Your projectID is just the name of your project, `MyAwesomeAddon` for example.<br>
It does not have to be in lower cases like your groupId.<br>
**Hold onto this id for now, we will need it later**

### Your pom.xml
Your pom.xml is the heart of any Maven project.<br>
Now you will need both ids from before.<br>
The beginning of your pom.xml should look like this:

```xml
  <modelVersion>4.0.0</modelVersion>
  <groupId>me.CHANGEME</groupId>
  <artifactId>SlimefunAddon</artifactId>
  <version>1.0.0</version>
```
Change out the groupId and artifactId for your groupId and projectId that we defined earlier.<br>
The beginning of your pom.xml should now look like this:

```xml
  <modelVersion>4.0.0</modelVersion>
  <groupId>me.thebusybiscuit</groupId>
  <artifactId>MyAwesomeAddon</artifactId>
  <version>1.0.0</version>
```

Don't forget your groupId and projectId, we still need these a few more times!

### Your plugin.yml
The plugin.yml is the heart of any Bukkit plugin.<br>
You can find it under `src/main/resources/plugin.yml`.<br>
It should look like this:

```yaml
name: SlimefunAddon
version: ${project.version}
author: CHANGEME
description: A generic Slimefun4-Addon
website: https://github.com/Slimefun/Addon-Template

main: me.CHANGEME.slimefunaddon.SlimefunAddon
depend: [Slimefun]

api-version: 1.14
```

1. Replace `name` with your projectId.
2. Replace `author` with your name.
3. Give your plugin a `description`
4. Set the `website` of your plugin, you can remove this line or set the GitHub / BukkitDev page of your project there.

Now most importantly...<br>
Change the `main` attribute to the following:<br>
main: `groupId` + . + `projectId` (all lower case this time) + . + `projectId`.

We know this may sound confusing at first, here is an example:<br>

groupId: me.thebusybiscuit
projectId: MyAwesomeAddon

main: me.thebusybiscuit.myawesomeaddon.MyAwesomeAddon

Your plugin.yml should now look like this:
```yaml
name: MyAwesomeAddon
version: ${project.version}
author: TheBusyBiscuit
description: This is a very awesome addon that I made
website: https://github.com/TheBusyBiscuit/MyAwesomeAddon

main: me.thebusybiscuit.myawesomeaddon.MyAwesomeAddon
depend: [Slimefun]

api-version: 1.14
```

One more step, then you are almost done with this part.

### Your package
Now we will start touching some code files.<br>
We won't write any actual code yet, but we will still have to configure it to follow what we did earlier.

Navigate to `src/main/java`.<br>
You should see a package there that looks like this: `me.CHANGEME.slimefunaddon`.<br>
Rename this package to your groupId, followed by your projectId (all in lower case again).<br>
Your package may look like this now: `me.thebusybiscuit.myawesomeaddon`.

Now open this package, you should see a file called `SlimefunAddon.java`, rename that file to your projectId but keep the file ending.<br>
The file name should look like this now: 'MyAwesomeAddon.java'.

If you set up Git correctly, you should now be able to **commit** your changes and **push** them to your repository.<br>
Look up online guides on how to do that, remember to always **commit** and **push** whenever you change a file, this will keep your workspace and your GitHub repository in-sync, so you can work on your project from anywhere you want. It also allows others to contribute to your project easily.

And you are done! You now successfully configured and set up your first Slimefun Addon.<br>
We know this was all very complicated, so feel free to ask any questions on discord.

## 5. Locking your dependency versions
Our default `pom.xml` file from the template uses self-updating versions.<br>
But we **highly recommend** using explicit versions for your dependencies, it simply is good practice as it prevents things from suddenly breaking whenever you open up your IDE.

Search for the section in your `pom.xml` file which defines the Slimefun version:
```xml
<dependency>
  <groupId>com.github.Slimefun</groupId>
  <artifactId>Slimefun4</artifactId>
  <version>master-SNAPSHOT</version>
  <scope>provided</scope>
  <!-- ... -->
</dependency>
```

To build your addon against a specific version of Slimefun, simply override the `<version>` tag.<br>
It is best to build against an `RC` - version of Slimefun, simply set the version to `RC-` followed by the version.<br>
To build against RC-15 for example, simply replace your version like this:

`<version>master-SNAPSHOT</version>` -> `<version>RC-15</version>`

You can find a full list of versions to build against in the "Releases" section on Slimefun's github repository:<br>
https://github.com/Slimefun/Slimefun4/releases

You can also find a "Maven dependency reference" for every released version. Simply copy & paste/replace the version tag into your `pom.xml` to update your dependency.

Full example:<br>
```xml
<dependency>
  <groupId>com.github.TheBusyBiscuit</groupId>
  <artifactId>Slimefun4</artifactId>
  <version>RC-15</version>
  <scope>provided</scope>
  <!-- ... -->
</dependency>
```

**Note that your addon should still work on any development version released after the RC version you are building against. API changes are usually only done ater a new RC build has been released, so you can safely build against the RC version while still using the development versions of Slimefun for your server.**

[**> Continue with Part 2**](https://github.com/Slimefun/Slimefun4/wiki/Developer-Guide-(2-Creating-the-Addon))
