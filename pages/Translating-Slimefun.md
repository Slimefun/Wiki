Translating Slimefun has always been a tough point because of some wrong design choices in the code made years ago.<br>
But as of February 2020 all builds feature translations.

**Important note: At the moment you can only translate chat messages and certain inventories but not items. 
Item translations are very difficult to do and will likely still take over a year or even more until this will become a thing. 
Please do not ask us for translations for items and be patient! Thank you.**

## Changing your server language
You can change your server's default language by modifying your config.yml:
```yaml
options:
  language: en
```
Swap `en` out for the language code of your desired language. You can find a list of all supported languages further down on this page.<br>
Note that this will override your `messages.yml` file.
If you wish to customize your messages despite the selected language, simply edit your `messages.yml` **after** changing your language and restarting the Server.
Your `messages.yml` will only ever be touched if you decide to change the default language of your server again.
New additions to the messages.yml will be appended to that file without issues.

## Changing your personal language
Every player can choose their preferred language. By default everyone will simply use the server's default language.<br>
But if you have a lot of international players, they can simply override it and use their personally preferred language instead.

To do this, just go to the "Settings" section of your Slimefun Guide (Shift - Right Click the Slimefun Guide while holding it in your hand).
There you should see a globe or a flag which allows you to select a language.

## Available languages
| Language | language code | Progress |
| ---------- | --- | ----------- |
| English | `en` | 100% (Default) |
| [German](https://gitlocalize.com/repo/3841/de/src/main/resources/languages) | `de` | ![gitlocalized](https://gitlocalize.com/repo/3841/de/badge.svg) |
| [French](https://gitlocalize.com/repo/3841/fr/src/main/resources/languages) | `fr` | ![gitlocalized](https://gitlocalize.com/repo/3841/fr/badge.svg) |
| [Italian](https://gitlocalize.com/repo/3841/it/src/main/resources/languages) | `it` | ![gitlocalized](https://gitlocalize.com/repo/3841/it/badge.svg) |

### You want to help us translate?
Just click on the language you want to help translate.
It will bring you to [gitlocalize.com](https://gitlocalize.com/repo/3841/) where the different translations of this repository are hosted.
You will need a GitHub account for this.

Once you are there, just swap out all the messages for your translations and hit "Create review request" once you are done.<br>
We will then start reviewing your changes and add them to this plugin.

### You don't see your language?
If we currently do not support your language, then please go on our discord server (you can find a link on the sidebar or footer of this page).<br>
Just post it in `#general-chat` and let us know that you want to help translate this plugin into your language but please don't tag any of our admins, we will see your message nonetheless.
