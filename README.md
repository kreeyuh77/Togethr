# Togethr
Have you ever wanted to go get food but have nobody to go with? Maybe you want to go to a tech meetup but can't think of any of your friends who would be interested to go with you? Simply register an account on Togethr and pair up with like-minded individuals to attend whatever event or activity piques your interest! Togethr makes the process of making connections rather direct, yet super simple. Nowadays, with online status among users being an all-time high, Togethr serves as a great way to build lasting relationships with people of similar interests.

**IMPORTANT NOTICE**
This application is no longer being served or maintained. 

https://togethr.netlify.app/



**Technical Notes: </br>**
The player can toggle between the three good ninjas, Kuro, Aka, and Midori. When the ninjas are in autonomous mode, that is when the player isn't currently controlling them, they wander the map. They do so by randomly selecting a waypoint on the map as target and sending out a [raycast](https://docs.unity3d.com/ScriptReference/Physics.Raycast.html) from their position to the target position. If the raycast returns true, the ninja repeats the process again. Otherwise, the ninja makes it's way to the waypoint and repeats the proces over and over again so long as it is in autonomous mode. 

Uzai, however, uses [A* path finding](https://en.wikipedia.org/wiki/A*_search_algorithm) to navigate the map more intelligently. In order to implement the path finding algorithm, Uzai needed to determine his target, this target was always changing based on game several factors. Thus, Uzai has three states: collecting coins, runing from ninjas, and chasing ninjas. Take a look at [AiDestinationSetter](Assets/AstarPathfindingProject/Behaviors/AIDestinationSetter.cs) to find out more. </br>
</br>**Tools:** React/React Native, JavaScript, Express.js, Node.js, Digital Ocean, MongoDB, Visual Studio, 
GitHub, Windows OS

**How to run:** 
