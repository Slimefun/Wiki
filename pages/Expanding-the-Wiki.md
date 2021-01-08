You want to help us expand the Wiki?<br>
Awesome! Here is a step-by-step tutorial on how to create/edit pages on the wiki.

## Step 1: Forking the Repository
You will need to be logged into your GitHub Account for this and for all of the following steps.<br>
You can create a new Account [here](https://github.com/join) if you don't have an account already.

Alright, first you need to head over to [this Wiki's GitHub repository](https://github.com/Slimefun/Slimefun-Wiki/).<br>
After that you just have to hit the "Fork" button in top right corner and you are done for Step number one.

![GitHub Fork Button](https://raw.githubusercontent.com/Slimefun/Slimefun-Wiki/master/images/github-tutorial-fork.png)

## Step 2: Making your changes
Now that you have a fork of our wiki, you can start making your changes to it. <br>
_All changes you make to your fork will NOT affect the official wiki until you submit those changes, so please follow this guide till the end._

Now you can choose whether you want to create a new File or edit an existing File, for both we highly encourage you to follow our guidelines, otherwise we may have to dismiss your changes as invalid.

### 2.1 Creating a new page
Go visit your Fork (You can always find your fork on GitHub's dashboard or your profile page) and navigate to the folder called "pages".

![Pages directory](https://raw.githubusercontent.com/Slimefun/Slimefun-Wiki/master/images/github-tutorial-pages.png)

Now click on the button "Create new File".

![New File Button](https://raw.githubusercontent.com/Slimefun/Slimefun-Wiki/master/images/github-tutorial-new-file.png)

File names have to follow the following conditions:
* File names need to end with ".md"
* File names are not allowed to contain spaces, special characters or any other weird symbols
* Instead of spaces use hyphens "-" to seperate words

Examples: "Walking-Sticks.md", "Expanding-the-Wiki.md", "Gold-Pan.md" or "Home.md".

Now you can create your page's content.<br>
The pages are written in GitHub's markdown language, the syntax is pretty easy, you can always consult [Mastering Markdown](https://guides.github.com/features/mastering-markdown/) if you need help.<br>
If you need to embed images, please jump to [Step 2.3: Uploading images](#23-uploading-images).

**Make sure to save your changes by clicking the green "Commit new file" button at the bottom!**

### 2.2 Editing existing pages
Go visit your Fork (You can always find your fork on GitHub's dashboard or your profile page) and navigate to the folder called "pages".

![Pages directory](https://raw.githubusercontent.com/Slimefun/Slimefun-Wiki/master/images/github-tutorial-pages.png)

Now open up any of the ".md" files you see in that folder.<br>
To edit this page, simply click on the "edit"-icon.

![Edit File Button](https://raw.githubusercontent.com/Slimefun/Slimefun-Wiki/master/images/github-tutorial-edit.png)

Now you can edit that page's content.<br>
The pages are written in GitHub's markdown language, the syntax is pretty easy, you can always consult [Mastering Markdown](https://guides.github.com/features/mastering-markdown/) if you need help.<br>
If you need to embed images, please jump to [Step 2.3: Uploading images](#23-uploading-images).

**Make sure to save your changes by clicking the green "Commit changes" button at the bottom!**

### 2.3 Uploading images
Go visit your Fork (You can always find your fork on GitHub's dashboard or your profile page) and navigate to the folder called "images".

![Images directory](https://raw.githubusercontent.com/Slimefun/Slimefun-Wiki/master/images/github-tutorial-images.png)

Now click on the button "Upload files".

![Upload files button](https://raw.githubusercontent.com/Slimefun/Slimefun-Wiki/master/images/github-tutorial-upload-image.png)

Make sure that all your images use the PNG image format and have proper names.
The names should be in lower case, contain no spaces and use hyphens to seperate words.
Examples: "enhanced-crafting-table.png", "gold-pan-usage.png", "exoticgarden-apple-tree.png".

Drag and drop the images you want to upload onto the grey area and hit "Commit changes".<br>
Now you can use your image in any page using the following code snippet:<br>
```![image label](https://raw.githubusercontent.com/Slimefun/Slimefun-Wiki/master/images/FILE_NAME)```<br>
Replace FILE_NAME with the name of your file (e.g. "enhanced-crafting-table.png") and give the name a short description in the "image label" field.

## Step 3: General Guidelines (Dos and Don'ts)
Whenever you edit/create pages on the wiki, follow the following guidelines.

### **Dos**
* Write interesting and detailed content
* Try to provide pictures to illustrate the topic
* Always provide an image label for your images (See [Step 2.3: Uploading images](#23-uploading-images))
* Upload images using the PNG image format
* Crop your images, users only need to see the part that is important, not your super-cool diamond block base in the background
* Still show what is important, include the whole crafting window for example, with the title and the output for example
* Use headers to structure your article
* It is fine to make one page for multiple items if they are very similar and don't need too much explanation
* Try to remain objective and use a neutral way of speaking

### **Don'ts**
* Never start your article with a header, the wiki automatically adds a header for you
* Never link to any external images, always upload your images to the images directory instead
* Don't use any resource packs when making images for the wiki, you should use Minecraft's default texture to make all images stay consistent
* Never promote your server and try to remove any server-linked information from your images, no watermarks, no IPs
* Don't upload any content you do not own or not have the rights to use
* Don't go too much into detail on pages about addons, this wiki is still supposed to be about Slimefun, so keep those short
* Don't delete any pages/images from the wiki unless you have a very good reason for it, please explain it then
* These wiki pages are obviously no place for NSFW-content, nudity, sexism, racism or discrimination
* These pages are also no place for spreading your political views

## Step 4: Making a Pull Request
Go visit your Fork (You can always find your fork on GitHub's dashboard or your profile page) and navigate to the "Pull Requests" tab.

![Pull Requests Tab](https://raw.githubusercontent.com/Slimefun/Slimefun-Wiki/master/images/github-tutorial-pr-tab.png)

Now all you have to do is click on the bright green button that says "New pull request".

![New Pull Request Button](https://raw.githubusercontent.com/Slimefun/Slimefun-Wiki/master/images/github-tutorial-pr-button.png)

Then click on the next "New pull request" button and fill out the description for your pull request.<br>
Please use and follow our template.

After that you click "Create pull request" and you are done!<br>
Thanks for contributing to the Slimefun4 wiki!

## Step 5: Making changes to your Pull Request
If you have already submitted a pull request but want to make a change to your files, you can do that.
Just repeat [Step 2](#step-2-making-your-changes).<br>
The pull request will automatically update to include new changes until it has been merged/closed.

This step is especially important if we request changes to be made.
