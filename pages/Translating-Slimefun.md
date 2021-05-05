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
Note that only languages that are marked as **Released** can safely be selected on your server.<br>
Unreleased languages are still pending for review or are not fully translated yet.<br>
Development builds of Slimefun may allow a few unreleased languages already.<br>
**Do not select unreleased languages as your server's default language.**

Contributions are very much welcome!

| Released | Language | language code
| --- | ---------- | --- |
| :heavy_check_mark: | English | `en` |
| :heavy_check_mark: | [German](https://crowdin.com/project/slimefun/de) | `de` |
| :heavy_check_mark: | [French](https://crowdin.com/project/slimefun/fr) | `fr` |
| :heavy_check_mark: | [Italian](https://crowdin.com/project/slimefun/it) | `it` |
| :heavy_check_mark: | [Spanish](https://crowdin.com/project/slimefun/es) | `es` |
| :x: | [Polish](https://crowdin.com/project/slimefun/pl) | `pl` |
| :heavy_check_mark: | [Swedish](https://crowdin.com/project/slimefun/sv) | `sv` |
| :x: | [Dutch](https://crowdin.com/project/slimefun/nl) | `nl` |
| :heavy_check_mark: | [Russian](https://crowdin.com/project/slimefun/ru) | `ru` |
| :heavy_check_mark: | [Hungarian](https://crowdin.com/project/slimefun/hu) | `hu` |
| :x: | [Greek](https://crowdin.com/project/slimefun/el) | `el` |
| :heavy_check_mark: | [Czech](https://crowdin.com/project/slimefun/cs) | `cs` |
| :x: | [Latvian](https://crowdin.com/project/slimefun/lv) | `lv` |
| :heavy_check_mark: | [Slovak](https://crowdin.com/project/slimefun/sk) | `sk` |
| :heavy_check_mark: | [Chinese (China)](https://crowdin.com/project/slimefun/zh-CN) | `zh-CN` |
| :heavy_check_mark: | [Chinese (Taiwan)](https://crowdin.com/project/slimefun/zh-TW) | `zh-TW` |
| :x: | [Portugese (Portugal)](https://crowdin.com/project/slimefun/pt) | `pt` |
| :heavy_check_mark: | [Portugese (Brazil)](https://crowdin.com/project/slimefun/pt-BR) | `pt-BR` |
| :heavy_check_mark: | [Vietnamese](https://crowdin.com/project/slimefun/vi) | `vi` |
| :heavy_check_mark: | [Indonesian](https://crowdin.com/project/slimefun/id) | `id` |
| :x: | [Hebrew](https://crowdin.com/project/slimefun/he) | `he` |
| :heavy_check_mark: | [Arabic](https://crowdin.com/project/slimefun/ar) | `ar` |
| :x: | [Danish](https://crowdin.com/project/slimefun/da) | `da` |
| :x: | [Finnish](https://crowdin.com/project/slimefun/fi) | `fi` |
| :x: | [Norwegian](https://crowdin.com/project/slimefun/no) | `no` |
| :heavy_check_mark: | [Ukrainian](https://crowdin.com/project/slimefun/uk) | `uk` |
| :x: | [Afrikaans](https://crowdin.com/project/slimefun/af) | `af` |
| :x: | [Malay](https://crowdin.com/project/slimefun/ms) | `ms` |
| :heavy_check_mark: | [Japanese](https://crowdin.com/project/slimefun/ja) | `ja` |
| :x: | [Persian](https://crowdin.com/project/slimefun/fa) | `fa` |
| :heavy_check_mark: | [Thai](https://crowdin.com/project/slimefun/th) | `th` |
| :heavy_check_mark: | [Tagalog](https://crowdin.com/project/slimefun/tl) | `tl` |
| :x: | [Romanian](https://crowdin.com/project/slimefun/ro) | `ro` |
| :x: | [Bulgarian](https://crowdin.com/project/slimefun/bg) | `bg` |
| :heavy_check_mark: | [Turkish](https://crowdin.com/project/slimefun/tr) | `tr` |
| :heavy_check_mark: | [Korean](https://crowdin.com/project/slimefun/ko) | `ko` |
| :x: | [Macedonian](https://crowdin.com/project/slimefun/mk) | `mk` |
| :x: | [Croatian](https://crowdin.com/project/slimefun/hr) | `hr` |
| :x: | [Belarusian](https://crowdin.com/project/slimefun/be) | `be` |

### You want to help us translate?
Just click on the language you want to help translate.
It will bring you to [Crowdin](https://crowdin.com/project/slimefun/) where the different translations of this repository are hosted.

Once you are there, just swap out all the messages for your translations and hit "Create review request" once you are done.<br>
We will then start reviewing your changes and add them to this plugin.

### You don't see your language?
If we currently do not support your language, then please go on our discord server (you can find a link on the sidebar or footer of this page).<br>
Just post it in `#translations` and let us know that you want to help translate this plugin into your language but please don't tag any of our admins, we will see your message nonetheless. But please be patient as it can take some time to handle your request.
