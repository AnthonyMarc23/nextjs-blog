---
title: "Game Development"
---

Over the last decade, my self-declared tenure as a game designer has been a self-fulfilling prophecy. Not in a bad way of course. I have spent a lot of time creating and making games for both the digital and physical mediums. Some of my most notable games I will be talking about here.

### 30 Minutes... Or Less!

30 Minutes... Or Less! was our flagship title, so to speak. It was a top-down 3D delivery driver game, where the goal of the player was to get the delivery to the destination on thirty minutes of game time or less. Minutes were exaggerated seconds, and the fast-pace of the game was to keep the whole premise interesting. Of course, driving safely is completely optional. By hitting ramps, you could perform insane jumps and stunts, that would net you bonuses for time, as well as collecting power-ups and extra cash. The physical goal of the game was to accumulate the most amount of cash each round until you had the high-score for tip money earned.

The player would progress in stages, where each stage had a set of 4-5 set spawn points for delivering to with distances based on the difficulty of that stage. The stage timer is set to the length of a typical driving shift of around 2-3 hours, which in game time is around 2-3 minutes. During this time, the player begins at the shop, and 1-2 icons would be ready for the player to drive over, indicative of a delivery that needed to go out. Upon driving over the icon, an individual timer of 30 minutes (seconds) would start for each delivery, and the player would have to get to that destination in that time period before tips start to get docked. Each location is marked on the main screen as a hovering icon pointing in the general direction of the delivery.

To go, the player simply touches (or clicks and holds with their mouse) a spot on the screen, and the car will turn and align itself to head in that general direction. While holding, the player may drag around the screen wherever they wanted, and the car would turn to that heading while accelerating.

On smaller screens, this sometimes posed a problem as the car may be too big on the screen and seeing on the other side of your finger could be troublesome. To overcome the issue, we made sure that the camera zoomed out and also moved ahead of the car to show the most road ahead of the car when it was moving.

Time and tips were shown in the top right and top left, accordingly, large enough to be visible but also sized appropriately as to take up as little screen real-estate as possible. We wanted to emphasize the importance of being able to get as much visual information as possible so that the player has time to react. We also wanted players to be able to see upcoming items once they were within a certain radius of an item, but due to constraints of time, we had to overlook this feature. Most items, including Dollars and Money Bags, were clearly visible with a golden glow around it to contrast against the grey and green which they often were driving over.

We initially created 10 levels to start, and ended up completing 8 before we shipped. Each level used the same map, but had differing hazards, ramps and items to change up the potential game play. The map was also organized in such a way that the player could technically go "anywhere," but the delivery zones would appear in sections based on the difficulty of those sections. One poor design decision on my part was using cones that were sometimes immovable or movable rigid bodies. In some levels, the cones could physically not move, while in later levels, the cones were then switched to a movable rigid body. This confused some of the early testers and was a major red flag that I had to revisit, as I could not physically keep people from driving wherever they wanted to. I started to realize that half the fun was just exploring the map, even when you weren't making deliveries.

The game ends when you miss enough deliveries during a level. This will get you fired, and returned to the main screen with your current score registered in the high score slot, if one of the highest.

This was my first major project that I had full creative design over, having been the level designer, game designer, and producer. We created 30MOL in Unity, and released to a (now defunct) 3rd party kid-friendly platform called Jabbersmack in 2012. Later, we released to the Google Play store in 2013, but took it down after we stopped supporting it.

One of our biggest failures for 30MOL was not properly marketing our game at the time; I think we had a solid premise and a pretty fun experience overall, but the failed effort to put the next 50% of our effort into properly getting the game to the correct channels fell short.

### Pro Janitor Police

Pro Janitor Police, or PJP, was a side-scrolling beat-em-up headed by our artist and animator at the time. We were playing around with a random game name generator at the time, when these three words popped up, and sparked a great amount of momentum and effort to create our next title.

Pro Janitor Police was one of the biggest learning experiences for our team. We set the bar higher for ourselves this run through, as we gave ourselves a goal of featuring our game to the masses at PAX East. I stepped back from my role as a full designer in PJP, and decided to focus my efforts on sound, audio, and level design.

After several platform changes and many rush jobs to bring a demo to PAX East, the product was, to say the least, not in a very desirable form. We had a single level built on a platform called Construct, which in hindsight was more geared towards rapid prototyping. We had bugs, as we were developing the prototype right up to the release day, and overall, managed to overcome a great deal of hardships. But, the real important part was that we were engaging with people that were trying out the game and actually having a pretty good time with it. Our team definitely had focused on marketing and bringing our vision to the masses. I think in this instance, we focused too much on the marketing and less on proper game design.

When it is all said and done, I was still the producer for PJP as it was under the guise of the business that I had formed, and therefore had the legal ownership of the game. But, there was some push-back and quarreling among peers which didn't end pretty, and therefore the game never fully came to fruition. I still stand by my audio and sound design on the game, as I think that and the visuals really popped and made the game appealing.

### Warspace

Warspace is a card game that I have been developing in my spare time since the mid 2000's, having been an off-shoot of the world building I was doing as a whole for the Warspace Universe. The premise of the game is to summon a fleet of your ships within a given time frame (four turns) and then move to engage the enemy's fleet after that time frame has ended. Ship cards, resources, upgrades and crew are available for your ships to boost stat blocks and abilities. Each round, a number of command points based on your available crew and ship ranks allow you to give more orders, thus taking more action, during the engagements. You win when you destroy the enemy's capitol ship.

This game has seen many updates and changes to the core mechanics over time, and has been a passion project that I work on when time permits. One of the biggest things that this card game has taught me is understanding the balance of stat blocks and playtesting those conditions.

I was able to bring this game to my local game store with some of the earlier builds to play test, and had some great success with the test subjects and positive and constructive feedback to help improve the game. It is currently in its 8th design iteration, moving to simplify as many of the key components as possible while allowing complex strategies to form through that simplicity.

Warspace was one of my first big pushes to use Excel and to utilize stat blocks that can be tested with in a controlled environment. Because there is a good bit of randomness to the elements in the game (using dice to decide potential damage, and the fact that it is designed as a living card game), a good amount of minimization to those random elements have been deliberated upon, so that players can make calculated risks to their strategies, and also give them a sense that the impossible can still be possible.

### Project Tsunami

Our latest game development project, called Project Tsunami currently, is an action RPG with heavy puzzle elements. Games like Zelda and Secret of Mana have been some anchors for our inspiration here, and my partner and I have taken a lot of time on how to break up the game into all the elements that we can handle without any outside help. As it is, my responsibilities on Tsunami include sound and music design, level design, game mechanics, story design, Game Design Documentation, and shared marketing responsibilities when we reach that point.

For the first part of the design process, we spent a good amount of time deciding on a platform (Unity), language (C#), and production tools we wanted to use (GitHub, Jira, Oceansync, Google Apps, Machinations). This would force us to stick with a template and execute on our game in such a way that we weren't switching mid-development like Pro Janitor Police or bringing in new tools mid design that would pivot us away from our goal.

Our first goal was to brainstorm the meat and potatoes of what our RPG is doing that will stand above the others; this comes in the form of our puzzles. Not only are we using level-based puzzling concepts (pushing blocks, interactive doodads, shooting a trigger, walking over plates, etc.), but story-based puzzles as well as external puzzles. Our game will be short enough that when   

We have spent a lot more time fleshing out the GDD for this project, and as such, doing it on the side is a lot of time and effort against our day jobs. This project has also sparked my interest in pivoting from web development to what I think is truly my strongest skillset, design. 