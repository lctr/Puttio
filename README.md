# Puttio
It’s mini golf but you race. 3 holes, lowest time wins. Players can get powerups (start with/find?) to add obstacles or make a shockwave.

## TODO
* geometric objects
* random positioning
* collision
* finish this todo list

# WIP Notes
## Levels
### Generate levels
* For level generation, have a set of shapes, and place them on top of eachother one by one, randomly, with random size/rotation. 
* First and last shape should be a square.
![basic level geometry](/public/assets/basic-level-notes.png)

### Propagate levels
* All shapes in between the first and final squares have a designated amount of obstacles based on the shape’s area. * Obstacles will have an invisible area around them to prevent them from jutting out of the given perimeter for world generation.

### Joining levels
* Levels may be joined by other players.
  * AI for single-player, or none at all?*

## Mechanics


