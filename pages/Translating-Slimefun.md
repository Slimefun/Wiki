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

| Released | Language | language code | Progress |
| --- | ---------- | --- | ----------- |
| :heavy_check_mark: | English | `en` | 100% (Default) |
| :heavy_check_mark: | [German](https://gitlocalize.com/repo/3841/de/src/main/resources/languages) | `de` | ![gitlocalized](https://gitlocalize.com/repo/3841/de/badge.svg) |
| :heavy_check_mark: | [French](https://gitlocalize.com/repo/3841/fr/src/main/resources/languages) | `fr` | ![gitlocalized](https://gitlocalize.com/repo/3841/fr/badge.svg) |
| :heavy_check_mark: | [Italian](https://gitlocalize.com/repo/3841/it/src/main/resources/languages) | `it` | ![gitlocalized](https://gitlocalize.com/repo/3841/it/badge.svg) |
| :heavy_check_mark: | [Spanish](https://gitlocalize.com/repo/3841/es/src/main/resources/languages) | `es` | ![gitlocalized](https://gitlocalize.com/repo/3841/es/badge.svg) |
| :x: | [Polish](https://gitlocalize.com/repo/3841/pl/src/main/resources/languages) | `pl` | ![gitlocalized](https://gitlocalize.com/repo/3841/pl/badge.svg) |
| :heavy_check_mark: | [Swedish](https://gitlocalize.com/repo/3841/sv/src/main/resources/languages) | `sv` | ![gitlocalized](https://gitlocalize.com/repo/3841/sv/badge.svg) |
| :x: | [Dutch](https://gitlocalize.com/repo/3841/nl/src/main/resources/languages) | `nl` | ![gitlocalized](https://gitlocalize.com/repo/3841/nl/badge.svg) |
| :heavy_check_mark: | [Russian](https://gitlocalize.com/repo/3841/ru/src/main/resources/languages) | `ru` | ![gitlocalized](https://gitlocalize.com/repo/3841/ru/badge.svg) |
| :heavy_check_mark: | [Hungarian](https://gitlocalize.com/repo/3841/hu/src/main/resources/languages) | `hu` | ![gitlocalized](https://gitlocalize.com/repo/3841/hu/badge.svg) |
| :x: | [Greek](https://gitlocalize.com/repo/3841/el/src/main/resources/languages) | `el` | ![gitlocalized](https://gitlocalize.com/repo/3841/el/badge.svg) |
| :heavy_check_mark: | [Czech](https://gitlocalize.com/repo/3841/cs/src/main/resources/languages) | `cs` | ![gitlocalized](https://gitlocalize.com/repo/3841/cs/badge.svg) |
| :x: | [Latvian](https://gitlocalize.com/repo/3841/lv/src/main/resources/languages) | `lv` | ![gitlocalized](https://gitlocalize.com/repo/3841/lv/badge.svg) |
| :heavy_check_mark: | [Slovak](https://gitlocalize.com/repo/3841/sk/src/main/resources/languages) | `sk` | ![gitlocalized](https://gitlocalize.com/repo/3841/sk/badge.svg) |
| :heavy_check_mark: | [Chinese (China)](https://gitlocalize.com/repo/3841/zh-CN/src/main/resources/languages) | `zh-CN` | ![gitlocalized](https://gitlocalize.com/repo/3841/zh-CN//badge.svg) |
| :heavy_check_mark: | [Chinese (Taiwan)](https://gitlocalize.com/repo/3841/zh-TW/src/main/resources/languages) | `zh-TW` | ![gitlocalized](https://gitlocalize.com/repo/3841/zh-TW//badge.svg) |
| :x: | [Portugese (Portugal)](https://gitlocalize.com/repo/3841/pt/src/main/resources/languages) | `pt` | ![gitlocalized](https://gitlocalize.com/repo/3841/pt//badge.svg) |
| :heavy_check_mark: | [Portugese (Brazil)](https://gitlocalize.com/repo/3841/pt-BR/src/main/resources/languages) | `pt-BR` | ![gitlocalized](https://gitlocalize.com/repo/3841/pt-BR//badge.svg) |
| :heavy_check_mark: | [Vietnamese](https://gitlocalize.com/repo/3841/vi/src/main/resources/languages) | `vi` | ![gitlocalized](https://gitlocalize.com/repo/3841/vi/badge.svg) |
| :heavy_check_mark: | [Indonesian](https://gitlocalize.com/repo/3841/id/src/main/resources/languages) | `id` | ![gitlocalized](https://gitlocalize.com/repo/3841/id/badge.svg) |
| :x: | [Hebrew](https://gitlocalize.com/repo/3841/he/src/main/resources/languages) | `he` | ![gitlocalized](https://gitlocalize.com/repo/3841/he/badge.svg) |
| :heavy_check_mark: | [Arabic](https://gitlocalize.com/repo/3841/ar/src/main/resources/languages) | `ar` | ![gitlocalized](https://gitlocalize.com/repo/3841/ar/badge.svg) |
| :x: | [Danish](https://gitlocalize.com/repo/3841/da/src/main/resources/languages) | `da` | ![gitlocalized](https://gitlocalize.com/repo/3841/da/badge.svg) |
| :x: | [Finnish](https://gitlocalize.com/repo/3841/fi/src/main/resources/languages) | `fi` | ![gitlocalized](https://gitlocalize.com/repo/3841/fi/badge.svg) |
| :x: | [Norwegian](https://gitlocalize.com/repo/3841/no/src/main/resources/languages) | `no` | ![gitlocalized](https://gitlocalize.com/repo/3841/no/badge.svg) |
| :heavy_check_mark: | [Ukrainian](https://gitlocalize.com/repo/3841/uk/src/main/resources/languages) | `uk` | ![gitlocalized](https://gitlocalize.com/repo/3841/uk/badge.svg) |
| :x: | [Afrikaans](https://gitlocalize.com/repo/3841/af/src/main/resources/languages) | `af` | ![gitlocalized](https://gitlocalize.com/repo/3841/af/badge.svg) |
| :x: | [Malay](https://gitlocalize.com/repo/3841/ms/src/main/resources/languages) | `ms` | ![gitlocalized](https://gitlocalize.com/repo/3841/ms/badge.svg) |
| :heavy_check_mark: | [Japanese](https://gitlocalize.com/repo/3841/ja/src/main/resources/languages) | `ja` | ![gitlocalized](https://gitlocalize.com/repo/3841/ja/badge.svg) |
| :x: | [Persian](https://gitlocalize.com/repo/3841/fa/src/main/resources/languages) | `fa` | ![gitlocalized](https://gitlocalize.com/repo/3841/fa/badge.svg) |
| :heavy_check_mark: | [Thai](https://gitlocalize.com/repo/3841/th/src/main/resources/languages) | `th` | ![gitlocalized](https://gitlocalize.com/repo/3841/th/badge.svg) |
| :heavy_check_mark: | [Tagalog](https://gitlocalize.com/repo/3841/tl/src/main/resources/languages) | `tl` | ![gitlocalized](https://gitlocalize.com/repo/3841/tl/badge.svg) |
| :x: | [Romanian](https://gitlocalize.com/repo/3841/ro/src/main/resources/languages) | `ro` | ![gitlocalized](https://gitlocalize.com/repo/3841/ro/badge.svg) |
| :x: | [Bulgarian](https://gitlocalize.com/repo/3841/bg/src/main/resources/languages) | `bg` | ![gitlocalized](https://gitlocalize.com/repo/3841/bg/badge.svg) |
| :heavy_check_mark: | [Turkish](https://gitlocalize.com/repo/3841/tr/src/main/resources/languages) | `tr` | ![gitlocalized](https://gitlocalize.com/repo/3841/tr/badge.svg) |
| :heavy_check_mark: | [Korean](https://gitlocalize.com/repo/3841/ko/src/main/resources/languages) | `ko` | ![gitlocalized](https://gitlocalize.com/repo/3841/ko/badge.svg) |
| :x: | [Macedonian](https://gitlocalize.com/repo/3841/mk/src/main/resources/languages) | `mk` | ![gitlocalized](https://gitlocalize.com/repo/3841/mk/badge.svg) |
| :x: | [Serbian](https://gitlocalize.com/repo/3841/sr/src/main/resources/languages) | `sr` | ![gitlocalized](https://gitlocalize.com/repo/3841/sr/badge.svg) |
| :x: | [Croatian](https://gitlocalize.com/repo/3841/hr/src/main/resources/languages) | `hr` | ![gitlocalized](https://gitlocalize.com/repo/3841/hr/badge.svg) |
| :x: | [Belarusian](https://gitlocalize.com/repo/3841/be/src/main/resources/languages) | `be` | ![gitlocalized](https://gitlocalize.com/repo/3841/be/badge.svg) |

### You want to help us translate?
Just click on the language you want to help translate.
It will bring you to [gitlocalize.com](https://gitlocalize.com/repo/3841/) where the different translations of this repository are hosted.
You will need a GitHub account for this.

Once you are there, just swap out all the messages for your translations and hit "Create review request" once you are done.<br>
We will then start reviewing your changes and add them to this plugin.

### You don't see your language?
If we currently do not support your language, then please go on our discord server (you can find a link on the sidebar or footer of this page).<br>
Just post it in `#translations` and let us know that you want to help translate this plugin into your language but please don't tag any of our admins, we will see your message nonetheless. But please be patient as it can take some time to handle your request.
