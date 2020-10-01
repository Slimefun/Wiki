An Advanced Output Node is a component of a [cargo network](https://github.com/Slimefun/Slimefun4/wiki/Cargo-Management) which can receive items sent by [input nodes](https://github.com/Slimefun/Slimefun4/wiki/Input-Node).<br>
It is a more complex type of [output node](https://github.com/Slimefun/Slimefun4/wiki/Output-Node), with additional settings to filter items.

## Obtaining
Advanced output nodes can be crafted in an [Enhanced Crafting Table](https://github.com/Slimefun/Slimefun4/wiki/Enhanced-Crafting-Table).

## Usage
Advanced output nodes move the items in the network matching their settings into the container on which they are placed.

### Placement
An advanced output node must be placed (shift-right click) onto a container or [machine](https://github.com/Slimefun/Slimefun4/wiki/Electric-Machines), and aligned within 6 blocks of a [cargo manager](https://github.com/Slimefun/Slimefun4/wiki/Cargo-Manager) or a [connector](https://github.com/Slimefun/Slimefun4/wiki/Connector-Node) in range of one (no diagonals).

### Configuration
Right-clicking an advanced output node displays an interface to configure the following settings, from left to right:
* **3x3 grid** - Items placed there are included/excluded from being received by the node.
* **Type: Whitelist/Blacklist** - Controls whether the items in the grid are whitelisted (included) or blacklisted (excluded).
* **Include Sub-IDs/Durability** - If enabled, only the items with the same durability as the ones in the grid will be whitelisted/blacklisted.
* **Include Lore** - If enabled, only the items with the same lore as the ones in the grid will be whitelisted/blacklisted.
* **Channel** - The channel from which items are taken.
