---
title: "Game Development"
image: "/../public/images/game-dev/level1-composite.png"
width: 6170
height: 1579
description: "A collection of games that I have worked on in the past decade and beyond."
---

Over the last decade, my self-declared tenure as a game designer has been a self-fulfilling prophecy. Not in a bad way of course. I have spent a lot of time creating and making games for both the digital and physical mediums. Some of my most notable games I will be talking about here.

### 30 Minutes... Or Less!

30 Minutes... Or Less! was our first shipped title. It was a top-down 3D delivery driver game, where the goal of the player was to get the delivery to the destination on thirty minutes of game time or less. Minutes were exaggerated seconds, and the fast-pace of the game was to keep the whole premise interesting. Of course, driving safely is completely optional. By hitting ramps, you could perform insane jumps and stunts, that would net you bonuses for time, as well as collecting power-ups and extra cash. The physical goal of the game was to accumulate the most amount of cash each round until you had the high-score for tip money earned.

The player would progress in stages, where each stage had a number of set spawn points for delivery destinations with distances based on the difficulty of that stage. The stage timer is set to the length of a typical driving shift of around 2-3 hours, which in game time is around 2-3 minutes. During this time, the player begins at the shop, and 1-2 icons would be ready for the player to drive over, indicative of a delivery that needed to go out. Upon driving over the icon, an individual timer of 30 minutes (seconds) would start for each delivery, and the player would have to get to that destination in that time period before tips start to get docked. Each location is marked on the main screen as a hovering icon pointing in the general direction of the delivery.

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

After several platform changes and many rush jobs to bring a demo to PAX East, the product was, to say the least, not in a very desirable form. We had a single level built on a platform called Construct, which in hindsight was more geared towards rapid prototyping and not the finalized product we were anticipating. We had bugs, as we were developing the prototype right up to the release day. But overall, we managed to overcome a great deal of hardships. The real important part was that we were engaging with people that were trying out the game and actually having a pretty good time with it. Our team definitely had focused on marketing and bringing our vision to the masses. I think in this instance, our focus was too much on the marketing and less on proper game design.

When it is all said and done, I was still the producer for PJP, and it was under the guise of the business that I had formed, therefore, retaining legal ownership of the game. There was some disagreements and quarreling among peers which overall didn't end on the greatest note, and therefore the game never fully came to fruition.

All in all, I still stand by my audio and sound design choices for the game, and I think that and the visuals really popped and made the game appealing. Had we been able to set aside our differences and focus on what we needed for execution, we could've really made PJP a great success.

### Warspace

One of my hobbies for many years has been playing card games at our local game shops, with Southeast Michigan being saturated with 40+ locations at their height. During this time, I was inspired by Magic: The Gathering, and wanted to create something similar set in a Sci-Fi setting.

Warspace is a card game inspired by early trading card games that I have been developing in my spare time since the mid 2000's. During this time, I was also doing world-building for a sci-fi setting with the same name. I wanted this to be the first game created for the Warspace Universe, with the potential of a board game and eventually a computer game. Many of those ideas have been written down, and are on my to-accomplish list.

The premise of Warspace is to prepare a fleet of ships within a given time frame and then move to engage the enemy's fleet after that time frame has ended. You start with a flagship, and through the first half of the game, you play ship cards, resources, upgrades and crew to boost the overall strength of your fleet. Each round, a number of command points are available to you to make actions, based on your standing crew and officers, which allow you to issue more orders (actions) during the engagements. You win when you destroy or take over the enemy's flagship.

This game has seen many updates and changes to the core mechanics over time, and has been a passion project that I work on when time permits. One of the biggest things that this card game has taught me is understanding the balance of stat blocks and playtesting those conditions.

I was able to bring this game to my local game store with some of the earlier builds to play test, and had some great success with the test subjects, receiving a lot of positive and constructive feedback to help improve the game. It is currently in its 8th design iteration, moving to simplify as many of the key components as possible while allowing complex strategies to form through that simplicity.

Warspace was one of my first big pushes to use Excel and to utilize stat blocks that can be tested with in a controlled environment. Because there is an element of randomness to outcomes in the game (using dice to decide potential damage, shuffling and drawing cards from a deck), a good amount of minimization to those random elements have been deliberated upon, so that players can make calculated risks to their strategies, and give them a sense that even under dire circumstances, the impossible win can still be possible.

### Project Tsunami

Our latest game development project, currently named Project Tsunami, is an action RPG with heavy puzzle elements. Games like Zelda and Secret of Mana have been some anchors for our inspiration, and my partner and I have taken a lot of time deliberating how to break up the game into all the elements that we can handle without any outside help. As it is, my responsibilities on Tsunami include sound and music design, level design, game mechanics, story design, and Game Design Documentation, while his are primarily coding, architecture, art and animations. We plan on sharing marketing responsibilities, when we reach that point.

For the first part of the design process, we spent a good amount of time deciding on a platform (Unity), language (C#), and production tools we wanted to use (GitHub, Jira, Oceansync, Google Apps, Machinations, Asprite). This would force us to stick with a template and execute on our game in such a way that we weren't switching mid-development like Pro Janitor Police or bringing in new tools mid design that would pivot us away from our goals.

Our first checkpoint was to brainstorm the meat and potatoes of what our RPG is doing that will stand above the others; this comes in the form of our puzzles. Not only are we using the traditional level-based puzzling concepts (interactive doodads, pushing/shooting blocks or triggers, walking over plates, etc.) and story-based puzzles, but external puzzles, being actual literature, media, culture, and internet sources that exist within the real world. Our game will be short enough that a player can play it and still receive satisfaction from completing the game in the 7-10 hour time frame we have planned for the in-game story, but leave enough clues and and puzzle pieces that they realize playing through again will yield a different outcome. We have plans to make it obvious to those paying attention, that the game has not yet completed once they finished the first play through. 

We have spent a lot of time fleshing out the GDD for this project, and as such, doing it on the side is a lot of time and effort against our day jobs. Working on this project has sparked my interest in pivoting from web development to game design and UX. I'm excited to tell a new story and engage the reader, user, player, or whomever you will, in something that inspires a sense of awe, wonder, adventure, excitement, mystery, and emotion. It's these experiences that can leave a lasting impression on the player, and keep them coming back for a new and exciting experience. But being able to create an experience that plays on a console and the real world is something I think would engage the user even further.