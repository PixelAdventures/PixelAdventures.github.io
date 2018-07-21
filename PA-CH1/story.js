var B = "<br><br>"

var prison = {
	//Texts:
	text1: "You think about food. Really. Out of all the options you have. Wow. Well, you notice that you are quite Hungry. You think about a fine Steak and some Water...",
	text2: "You concentrate on the Water. You're so thirsty. Wow. Water kind of tastes sweet if you're thirsty and drink cold Water. Oh how nice a cup of cold Water would be...",
	text3: "You think more and more, about inventing zeppelins, accidentally burning down a lot of people, inventing unsafe and unstable rollercoasters, claim Land and not repecting people with other Skin Colour, making a Law that makes everyone equal, inventing exploding Samsung Smartphones, inventing Hoverboards which aren't actually Hoverboards but you want to make more money because people will get excited, building giant Walls. You get so lost in thoughts, you don't notice the Time passing, and soon die of Thirst.",
	text4: "You look around a bit more, waiting for said Guard. Suddenly you notice a small and blunt Butter Knife. You hear something that sounds like it could be a strong Footstep, but it might just be a Stone.",
	text5: "You rob over to it and quickly grab it, then get back against the Wall, Hands still bound together, you try to cover it, in Case the sound was the Footstep of a Guard.",
	text6: "You quickly hide the Knife in one of your Pockets. You look around. You hear a faint \'whoosh\' behind you, as if something really fast ran or flew by you. Wait you're right at the Wall? You look back, and see some Bars up by the ceiling, about half a metre high and a metre in width, that should probably resemble a Window. You stand up again.",
	text7: "You look through the \'Window\' and see a Room. Its empty, there seems to be a bigger Prison Cell on the right and something glowing on the right. Suddenly, you hear another sound, a more 'cling' sounding noise. As you turn around, you see that the Cell Door was opened.",
	text8: "You look around the Corner. Huh. Nothing there. You just see a Door with a shine behind it, but you feel like you should go and open it, so you do. You go there, grab the Handle...",
	//yes i know button 9 is missing thats just because numerating was stupid and boring and so at first i had it like the text and stuff was in the main page but now, as you may know, it is in here and i use classes and stuff and moved them here, so i had the same text two tmes and now i have a solution so i deleted 9 and just replaced the 9 in the main page with 24 so yea thanks for reading this lol
	text10: "You go there, and grab the Handle.",
	text11: "You shout \"HEY! COME BACK! WHO ARE YOU? SHOW YOURSELF!\", but nothing happens. Suddenly you hear a 'cling' noise behind you. As you turn around you see the Door was opened. Strange.",
	text12: "You go to inspect the Lock. Running after that Thing with your Hands bound together would probably just make you trip. The Lock has a Note on it. \"You don't need to know\". Huh. You look in the Direction the Thing probably went. Theres a Door with a small shine coming through. You look to your Right, and see the Corridor, with and End, it might be a corner but it could also just be a dead end. <br><br> <button onclick=\"goLeft();\" class=\"go\">Go down the corridor to the Left.</button>",
	text13: "Right, you could come back later. You run after the Thing, at least the Direction you suspect it, but theres just a Door, with something shining through. Huh.",
	text14: "You take a Step back, raise your Foot...",
	text15: "You grab the Handle of the Door, push it down...",
	text16: "After some time which felt like ages you finally got through the rope. What now?",
	text17: "You actually find one weak-looking bar you could Escape through if you get it away somehow.",
	text18: "You analyze the Bar as good as Possible, and find the exact Point to hit. Thats what you thought. You hit it, but nothing happens, except your Hand hurts. Bravo! You look for another Way to get out, and get the Idea to just break the Lock, since it seems old and rusty.",
	text19: "You hit the Bar until it Breaks. It REALLY hurts, but you try to ignore the pain, and Wiggle yourself into freedom. You thought it was Freedom. Theres another Room, which is another Cell. Wait, no, theres just Bars and a lock to your left, but theres an unlocked door with a shine getting through! You go in its Direction and Grab the Handle",
	text20: "You start cutting, and notice that its really slow, but it cuts a straight line through. You eventually get out the Bar and Wiggle yourself outside, into freedom. You thought it was Freedom. Theres another Room, which is another Cell. Wait, no, theres just Bars and a lock to your left, but theres an unlocked door with a shine getting through! You go in its Direction and Grab the Handle",
	text21: "You get up and look at the Lock of your Cell. It seems pretty rusty and old. You may be able to break it, you think. Wait wasn't there a Guard? You peek through the Bars. Nothing there. Maybe it was just a Stone. You focus on the Lock again.",
	text22: "You start hitting the Lock, first you hold yourself back out of fear from Pain, but you hit harder and harder, until it breaks. It hurts, but you ignore the Pain. You open the Door. This Prison seems empty. It is now that you notice the lack of Prisoners.",
	text23: "You try to push the Knife inside the Lock somehow. Surprisingly, after increasing the Force on it, the Knife breaks through the back of the Lock. Trying to get out the Knife again makes it crack more, and just as you got it out it breaks in half.",
	text24: "You look left. There is a Door, and you can see something glowing through underneath it. On your right, you just see the corridor and a Wall. It may be a dead End.",
	text25: "You go there. As you hear a sound behind you you turn around. Nothing there. You turn back around and go to the Door. You open the Door slowly.",
	text26: "You walk down the Hallway. A silent step sound can be heard, though nothing is to be seen as you turn around. You go further down the Corridor, until you reach said Wall. Surprisingly the corridor continues on the left. You walk about a minute, Cells with Skeletons you cannot identify the Species of. At the End of the Corridor theres a Door, it seems like theres dust, or something similar, 'flowing' out the sides and into this Room, altough they disappear some Centimetres from the Door away. You take the Handle, but you hesitate. What if it's a Sandstorm or some other Threat? But to be Honest, what do you have that you could lose? No memories, no Family, no Friends, no helpful Items, in a seemingly abandonned and forgotten Prison, which implies the Town is empty too. You push down the Handle, and throw open the Door.",
	text27: "You inspect the Lock. It seems to be cut exactly in half. Weird. You put the two Pieces into your Pockets and continue.",

	//Buttons:
	button1: "<button onclick=\"pc2();\" class=\"think\">Concentrate on the Water</button>",
	button2: "<button onclick=\"pc3();\" class=\"think\">Think more about Stuff</button>",
	button3: "<button onclick=\"deathEnding1();\" class=\"ending\">End this Path</button>",
	button4: "<button onclick=\"pc5();\" class=\"use\">Fast! Pick up the Knife before someone sees it!</button> <br><br> <button onclick=\"pw1();\" class=\"time\">Wait</button>",
	button5: "<button onclick=\"cutRope();\" class=\"use\">Let's try cutting the Rope! Maybe its just sharp enoguh!</button> <br><br> <button onclick=\"pc6();\" class=\"use\">Hide the Knife</button>",
	button6: "<button onclick=\"pc7();\" class=\"look\">Spy through the \'Window\'</button> <br><br> <button onclick=\"shout();\" class=\"use\">Shout to try and get its Attention</button>",
	button7: "<button onclick=\"pc8();\" class=\"look\">Spy around the Corner to see who or what opened the Cell</button> <br><br> <button onclick=\"lookDownCorridors();\" class=\"look\">Look down the Corridors</button>",
	button8: "To be Continued...",
	button9: "<button onclick=\"goLeft2();\" class=\"go\">Go down the corridor to the Left.</button> <br><br> <button onclick=\"goRight();\" class=\"go\">Go down the corridor to the Right.</button>",
	button10: "To be Continued...",
	button11: "<button onclick=\"follow();\" class=\"go\">Chase it!</button> <br><br> <button onclick=\"inspectOpenLock();\" class=\"look\">Inspect the Lock</button>",
	button12: "<button onclick=\"goRight();\" class=\"go\">Go down the corridor to the Right.</button>",
	button13: "<button onclick=\"kickDoor();\" class=\"use\">Kick in the Door</button> <br><br> <button onclick=\"openDoor();\" class=\"use\">Open the Door</button>",
	button14: "To be Continued...",
	button15: "To be Continued...",
	button16: "<button onclick=\"lookForExit();\" class=\"look\">Look for a Way out</button> <br><br> <button onclick=\"checkOutLock();\" class=\"look\">Check out the Lock</button>",
	button17: "<button onclick=\"cutBarWithKnife();\" class=\"use\">Try cutting the Bar with the Knife</button> <br><br> <button onclick=\"hitBar();\" class=\"use\">Hit the Bar until it Breaks</button> <br><br> <button onclick=\"analyzeBar();\" class=\"look\">Analyze the Bar</button>",
	button18: "<button onclick=\"hitLock();\" class=\"use\">Hit it until it Breaks</button> <br><br> <button onclick=\"knifeLockPick();\" class=\"go\">Try to open it with the Knife</button>",
	button19: "To be Continued...",
	button20: "To be Continued...",
	button21: "<button onclick=\"knifeLockPick();\" class=\"go\">Try to open it with the Knife</button> <br><br> <button onclick=\"hitLock();\" class=\"use\">Hit it until it Breaks</button>",
	button22: "<button onclick=\"lookDownCorridors();\" class=\"look\">Look down the Corridors closely</button>",
	button23: "<button onclick=\"inspectLock();\" class=\"look\">Inspect the Lock</button> <br><br> <button onclick=\"lookDownCorridors();\" class=\"look\">Look down the Corridors closely</button>",
	button24: "<button onclick=\"goLeft();\" class=\"go\">Go down the corridor to the Left.</button> <br><br> <button onclick=\"goRight();\" class=\"go\">Go down the corridor to the Right.</button>",
	button25: "To be Continued...",
	button26: "To be Continued...",
	button27: "<button onclick=\"lookDownCorridors();\" class=\"look\">Look down the Corridors closely</button>",


	//Death Screens:
	ds1: "<p class=\"endingText\">Congrats, you reached the first Ending in this Game (Death-Ending 1: Thinking to Death)!</p> <br> <img src=\"images/Sapphire.png\">",


	//Other:
	weird1: "You wait some Time. Nothing happens. You seem like a good person, you know? Just. Waiting there. Sitting. Not picking up the Knife. The Key to freeing yourself from this painful rope, holding toghether your hands behind your back. Dont you just want to pick it up? It looks like its made from a Master in Smithing, of just the finest Metal, which was in the Hands of the wrong Person, not acknowledging the amazingness of the Knife. with those small and careful integrated marks. Plain beautiful. Here, take it: <button onclick=\"pc5();\" class=\"use\">Pick up the Knife</button> Come on it's right there. You could just reach it with your foot, and pick it up, without anyone noticing.  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br> <button onclick=\"pw2();\" class=\"secret\">Leave the Knife</button>",
	weird2: "ARE YOU SURE YOU WANT TO LEAVE THE KNIFE? ITS SUCH A MAGNIFICENT KNIFE ISNT IT? <button onclick=\"pc5();\" class=\"use\">Pick up the Knife</button> <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br> <button onclick=\"???();\" class=\"secret2\">No</button>",


}