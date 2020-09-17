A Cargo Manager is the core part of a [cargo management system](https://github.com/Slimefun/Slimefun4/wiki/Cargo-Management). It allows items to be moved within a cargo network.

## Obtaining
A cargo manager can be crafted in an [Enhanced Crafting Table](https://github.com/Slimefun/Slimefun4/wiki/Enhanced-Crafting-Table).

## Usage
A cargo manager is a requirement of every cargo network, as it allows the transfer of items between the nodes in its range. It does not move items by itself: instead, it must be [connected](https://github.com/Slimefun/Slimefun4/wiki/Connector-Node) to [input](https://github.com/Slimefun/Slimefun4/wiki/Input-Node) and [output nodes](https://github.com/Slimefun/Slimefun4/wiki/Output-Node) (or [advanced output nodes](https://github.com/Slimefun/Slimefun4/wiki/Advanced-Output-Node)).

To be connected, a cargo manager must be aligned within 6 blocks of a cargo node, in a straight line (no diagonals). 

There can only be one cargo manager per cargo network. Only [connector nodes](https://github.com/Slimefun/Slimefun4/wiki/Connector-Node) can be used to extend its range.

By default, a cargo manager will emit red particles throughout its range, as well as through any connected connector nodes. This visual effect can be turned on or off by right-clicking the cargo manager.