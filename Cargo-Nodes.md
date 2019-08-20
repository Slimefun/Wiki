## Connector Node
The Connector Node is used to lengthen the signal between an **Input Node** and an **Output Node**. Without a Connector Node, a system's signal will only extend five blocks from the [Cargo Manager](https://github.com/TheBusyBiscuit/Slimefun4/wiki/cargo-manager) (not diagonally). If, at least five blocks from a Cargo Manager, a Connector Node is placed, then the signal will be extended an additional five blocks from the Connector Node's location. Right clicking a Connector Node will show whether or not it's connected to a [Cargo Channel](https://github.com/TheBusyBiscuit/Slimefun4/wiki/Cargo-Management-System#cargo-management-channels).

## Input Node
The Input Node will always be the beginning of a [Cargo Channel](https://github.com/TheBusyBiscuit/Slimefun4/wiki/Cargo-Management-System#cargo-management-channels) and placed on the sides or top of a container.  When placed, the Input Node will remove items from a container and carry them into the rest of the **Channel** depending on how its toggleable [settings](https://github.com/TheBusyBiscuit/Slimefun4/wiki/Cargo-Nodes#settings) were configured. There may be more than one Input Node in a single **Channel**.

## Output Node
The Output Node, when placed on the top or sides, will collect items from a [Cargo Channel](https://github.com/TheBusyBiscuit/Slimefun4/wiki/Cargo-Management-System#cargo-management-channels) and put them into a container. When right clicked, a menu will be opened to change the Output Node's **Channel**

### Advanced
The Advanced Output Node has the same function as the **Output Node**, however it has the same variety of [settings](https://github.com/TheBusyBiscuit/Slimefun4/wiki/Cargo-Nodes#settings) as the **Input Node**. This additional set of settings allows for much more complex item transportation. 

## Settings

### Items
The items put into this category will be used to determine which items will be transferred through the connected **Channel**. This is typically used for sorting, which allows for complex storage systems, junk filtration, and only letting certain items enter/exit machines.

### Whitelist/Blacklist
When set to whitelist, no items will be carried through the **Channel** unless specified in the items grid. When set to blacklist, however only the items inside the grid will be permitted. 
#### Suggestion:
If no filtration is required, the **Node** can be set to Blacklist with no items in the grid.

### Include Sub IDs/Durability
When toggled on, the **Node** will sort items based on their durability. When toggled off, the **Node** will not take durability into consideration when filtering items.

### Round Robin Mode
Round Robin Mode forces the **Node** to evenly distribute items throughout the **Channel**, as opposed to, by default, prioritizing the first output. 

### Include Lore
When toggled on, the **Node** will sort items based on their lore. When toggled off, the **Node** will not take lore into consideration when filtering items.