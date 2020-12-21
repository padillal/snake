**SNAKE**

This is an application utilizing Javascript to recreate the classic game of Snake. [The current version can be found here](https://padillal.github.io/snake/)

***--Overview--***
In the game of **Snake**, the player uses the arrow keys to move a "**snake**" around the board. As the **snake** finds food, it eats the food, and thereby grows larger. The game ends when the **snake** either moves off the screen or moves into itself. The goal is to make the **snake** as large as possible before that happens.

***--Logic--***
The game was made by first initializing a board in which the action will take place. Within that board a snake is generated in the center of the canvas with the size of 1 grid unit. From there, event listeners are added to check when the directional arrows are pressed in order to perform the movement of the snake. Collision is checked by conditional statements which determine if the head of the snake has come into contact with an occupied unit space. 
