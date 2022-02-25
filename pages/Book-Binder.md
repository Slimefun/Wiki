The Book Binder is an [Electric Machine](https://github.com/Slimefun/Slimefun4/wiki/Electric-Machines) which can be used to combine different books together (much like an anvil would).  

## Book Binder Tiers
The Book Binder currently only has one tier.  
The duration of the action depends on how many enchants and what level they are.

**Power Usage:** 16 J/Sf Tick

## Book Binder Settings
By default, you cannot use this machine to get books above the vanilla limit.  
However for server owners it is possible to adjust this and either add a custom limit, or no limit at all.

| Name                     | Description                                                                   | Type    | Default Value |
| ------------------------ | ----------------------------------------------------------------------------- | ------- | ------------- |
| bypass-vanilla-max-level | If enabled, you will be able to create books higher than vanilla allows.      | boolean | false         |
| has-custom-max-level     | If enabled, the new limit will be the integer provided in `custom-max-level`. | boolean | false         |
| custom-max-level         | The highest enchantment level allowed on books produced in the Book Binder.   | int     | 15            |

**Tip:** Updating machine specific settings can be done in Items.yml
