The Teleporter is a Multiblock GPS-based device.

## Obtaining
The Teleporter is created by placing a [GPS Teleporter Matrix](https://github.com/Slimefun/Slimefun4/wiki/GPS-Teleporter-Matrix) encircled by eight [GPS Teleporter Pylons](https://github.com/Slimefun/Slimefun4/wiki/GPS-Teleporter-Pylon),
and placing a [GPS Activation Device](https://github.com/Slimefun/Slimefun4/wiki/GPS-Activation-Device) on the GPS Teleporter Matrix.

## Usage
The Teleporter is used to teleport to waypoints created by a [GPS Marker Tool](https://github.com/Slimefun/Slimefun4/wiki/GPS-Marker-Tool) or a [GPS Emergency Transmitter](https://github.com/Slimefun/Slimefun4/wiki/GPS-Emergency-Transmitter).

Teleporting speed is determined by the distance of given waypoint and [GPS network complexity](https://github.com/Slimefun/Slimefun4/wiki/GPS-Transmitter). </br>
If the network complexity is lower then 100, it always takes 50 seconds to teleport.
If the network complexity is above 100, the speed is given by the following equation: ![Teleporting Speed Equation](https://raw.githubusercontent.com/Slimefun/Slimefun-Wiki/master/images/TeleportEquation.png) seconds, where DistanceSquared
cannot be greater than 100 000 000, and the whole expression cannot be greater than 20.5 seconds.
