/* * * * *
 *    ____               _  ____            __ _
 *   / ___|_ __ ___   __| |/ ___|_ __ __ _ / _| |_
 *  | |   | '_ ` _ \ / _` | |   | '__/ _` | |_| __|
 *  | |___| | | | | | (_| | |___| | | (_| |  _| |_
 *   \____|_| |_| |_|\__,_|\____|_|  \__,_|_|  \__|
 *
 *  Title           			:   CommandCraft Mod
 *  Code Name       			:   CmdCraft-4.1Stable080618
 *  Author          			:   Fatih Balsoy
 *  Description     			:   Adds more commands than you can imagine!
 *  First Created   			:   Aug. 16, 2014
 *  Last Modified   			:   Aug. 06, 2018
 *  Copyright       			:   Fatih Balsoy (c) 2014-2018. All rights reserved.
 *  License	            	:   AGPL-3.0
 *  Estimated Downloads		:   16,000+
 * * * * */

var msg = "You are playing on ";
var msg2 = "The MC Time is ";
var msg3 = "The Server IP is ";
var msg4 = "No server IP found";
var msg5 = "Your username is ";

///////////////////////////////////

//Version of the mod
var version = "4.1";
//Copyright
var copyright = "Fatih Balsoy (c) 2014-2018";
//Beta?
var beta_compat = 1;
//Beta version only
var beta_version = "Beta 10";
//Beta version date
var beta_date = "(8/06/18)";
//Full Beta Version
var beta = "Milestone: " + beta_version + " " + beta_date;
//Minecraft version that this mod supports
var supported_version = "1.5.2";

//////////////////////////////////

//DONT TOUCH THIS VARIABLE
var dev = 0;
//This is not the command you're looking for....
var denied_access = "§cThis is not the command you're looking for...";

//////////////////////////////////

//Player Coordinates
var pX = Player.getX();
var pY = Player.getY();
var pZ = Player.getZ();

/*
Public Commands:

about
block
camera
clear
coords
disguise
distance
dropitem
entity
explode
fly
fov
gamemode
gamespeed
give
heal
health
help
ignite
ip
kick
kill
me
name
say
spawnpoint
stop
summon
time
tp
version
weather
world
xp

--------------------

Private Commands:

developer
dtest
test

--------------------

Commands in progress:

playsound
enchant
particle
block +> sign
world +> dimension
cape
idname
update
news
*/

//Render Types
var entityRs = {
  "arrow": EntityRenderType.arrow,					//Works
  "bat": EntityRenderType.bat,						//Invisible w/o skin (needs skin)
  "blaze": EntityRenderType.blaze,					//Works Great (needs skin)
  "boat": EntityRenderType.boat,						//Unstable
  "cavespider": EntityRenderType.spider,				//Spider Render Type makes it imposssible for you to walk and look around
  "chicken": EntityRenderType.chicken,				//Unstable (needs skin)
  "cow": EntityRenderType.cow,						//Works (needs skin)
  "creeper": EntityRenderType.creeper,				//Works (needs skin)
  "egg": EntityRenderType.egg,						//Works
  "enderman": EntityRenderType.enderman,				//Works (needs skin)
  "xporb": EntityRenderType.experienceOrb,			//Game Error, Fixed Typo
  "xppotion": EntityRenderType.expPotion,				//Works
  "fireball": EntityRenderType.fireball,				//
  "fishinghook": EntityRenderType.fishHook,			//
  "ghast": EntityRenderType.ghast,					//Works
  "irongolem": EntityRenderType.ironGolem,			//
  "lavaslime": EntityRenderType.lavaSlime,			//
  "lightning": EntityRenderType.lightningBolt,		//Works
  "minecart": EntityRenderType.minecart,				//
  "mooshroom": EntityRenderType.mushroomCow,			//
  "ocelot": EntityRenderType.ocelot,					//
  "pig": EntityRenderType.pig,						//Works
  "zombiepig": EntityRenderType.zombiePigman,			//
  "steve": 27,										//
  "alex": 27,											//
  "tnt": EntityRenderType.tnt,						//
  "rabbit": EntityRenderType.rabbit,					//
  "sheep": EntityRenderType.sheep,					//
  "silverfish": EntityRenderType.silverfish,			//
  "skeleton": EntityRenderType.skeleton,				//Invisible w/o skin
  "slime": EntityRenderType.slime,					//
  "smallfireball": EntityRenderType.smallFireball,	//
  "snowball": EntityRenderType.snowball,				//
  "snowgolem": EntityRenderType.snowGolem,			//
  "spider": EntityRenderType.spider,					//Spider Render Type makes it imposssible for you to walk and look around
  "squid": EntityRenderType.squid,					//
  "villager": EntityRenderType.villager,				//Code Error: Only works on Villagers
  "wolf": EntityRenderType.wolf,						//
  "witch": EntityRenderType.witch,					//
  "zombie": EntityRenderType.zombie,					//
  "zombievillager": EntityRenderType.villagerZombie	//

};
//Summon
var entityIDs = {
  "arrow": EntityType.ARROW,
  "bat": EntityType.BAT,
  "blaze": EntityType.BLAZE,
  "boat": EntityType.BOAT,
  "cavespider": EntityType.CAVE_SPIDER,
  "chicken": EntityType.CHICKEN,
  "cow": EntityType.COW,
  "creeper": EntityType.CREEPER,
  "egg": EntityType.EGG,
  "enderman": EntityType.ENDERMAN,
  "xporb": EntityType.EXPERIENCE_ORB,
  "xppotion": EntityType.EXPERIENCE_POTION,
  "fallingblock": EntityType.FALLING_BLOCK,
  "fireball": EntityType.FIREBALL,
  "fishinghook": EntityType.FISHING_HOOK,
  "ghast": EntityType.GHAST,
  "irongolem": EntityType.IRON_GOLEM,
  "lavaslime": EntityType.LAVA_SLIME,
  "lightning": EntityType.LIGHTNING_BOLT,
  "minecart": EntityType.MINECART,
  "mooshroom": EntityType.MUSHROOM_COW,
  "ocelot": EntityType.OCELOT,
  "pig": EntityType.PIG,
  "zombiepig": EntityType.PIG_ZOMBIE,
  "player": EntityType.PLAYER,
  "primedtnt": EntityType.PRIMED_TNT,
  "rabbit": EntityType.RABBIT,
  "sheep": EntityType.SHEEP,
  "silverfish": EntityType.SILVERFISH,
  "skeleton": EntityType.SKELETON,
  "slime": EntityType.SLIME,
  "smallfireball": EntityType.SMALL_FIREBALL,
  "snowball": EntityType.SNOWBALL,
  "snowgolem": EntityType.SNOW_GOLEM,
  "spider": EntityType.SPIDER,
  "squid": EntityType.SQUID,
  "villager": EntityType.VILLAGER,
  "wolf": EntityType.WOLF,
  "zombie": EntityType.ZOMBIE,
  "zombievillager": EntityType.ZOMBIE_VILLAGER

};
//Effect
var effectIDs = {
  "absorption": MobEffect.absorption,
  "blindness": MobEffect.blindness,
  "confusion": MobEffect.confusion,					//Nausea
  "damageBoost": MobEffect.damageBoost,				//?
  "damageResistance": MobEffect.damageResistance,
  "digSlowdown": MobEffect.digSlowdown, 				//Mining Fatigue
  "digSpeed": MobEffect.digSpeed,						//?
  "fireResistence": MobEffect.fireResistence,
  "harm": MobEffect.harm,								//Instant Damage
  "heal": MobEffect.heal,								//Instant Health
  "healthBoost": MobEffect.healthBoost,
  "hunger": MobEffect.hunger,
  "invisibility": MobEffect.invisibility,
  "jump": MobEffect.jump,								//Jump Boost
  "movementSlowdown": MobEffect.movementSlowdown,		//Slowness
  "movementSpeed": MobEffect.movementSpeed,			//Speed
  "nightVision": MobEffect.nightVision,
  "poison": MobEffect.poison,
  "regeneration": MobEffect.regeneration,
  "saturation": MobEffect.saturation,
  "waterBreathing": MobEffect.waterBreathing,
  "weakness": MobEffect.weakness,
  "wither": MobEffect.wither
};

//Unnecessary Tip or Additional Tip = UT
//Add later = AL
//Deprecated Command = DC
//§a--Command-- \n§fUsage: \n§7Example: \n§8
var command_usage = {
/*UT*/	"about": "§a--About-- \n§7Everything about this mod",
  "block": "§a--Block-- \n§fUsage: /block <command>\n§a--Block Commands--\n§7 /block data - Shows ID and Data of the block you're looking at\n§7 /block destroy - Destroy the block you're looking at",
  "camera": "§a--Camera-- \n§fUsage: /camera [on | off]\n§7Example: /camera on\n§8Access into any mob, player and block. See where they are and what they're doing\n§8Remote access is coming soon",
/*UT*/	"clear": "§a--Clear-- \n§fUsage: /clear\n§7Clears the entire inventory",
/*UT*/	"coords": "§a--Coordinates-- \n§fUsage: /coords\n§7Gives you the coordinates of where you are in the world\n§7by X, Y and Z coordinates and biome name",
  "disguise": "§a--Disguise-- \n§fUsage: /d <entity>\n§7Example: /d cow OR /disguise minecart\n§8Disguise into any mob you'd like to",
  "distance": "§a--Distance-- \n§fUsage: /dist <x> <y> <z>\n§7Example: /distance 295 14 53\n§8Distance to specific coordinates by block units",
  "dropitem": "§a--Drop Item-- \n§fUsage: /dropitem <x> <y> <z> <item> <amount>\n§7Example: /dropitem 295 14 53 1 64\n§8Drop an item by id to specific coordinates also by the amount to drop",
  "effect": "§a--Effect-- \n§fUsage: /effect <effect> [seconds] [amplifier] [hideParticles]\n§7Examples: \n§7 /effect healthBoost 50 1 false\n§7/effect healthBoost\n§8Add a potion effect to yourself \n§8(Seconds, Amp and Particles are optional)",
/*AL*/	"entity": "",
  "explode": "§a--Explode-- \n§fUsage: /explode <x> <y> <z> <radius> OR /explode here <radius>\n§7Examples: /explode 295 14 53 50 OR /explode here 50\n§8Create an explosion at specific coordinates",
  "fly": "§a--Fly-- \n§fUsage: /fly [on | off]\n§7Example: /fly on\n§8Enable or disable the ability to fly",
/*DC*/	"fov": "§a--FOV-- \n§fUsage: /fov [field of view | reset]\n§7Example: /fov 70\n§8Change the field of view by numbers. Do \"/fov reset\" to reset fov",
  "gamemode": "§a--Gamemode-- \n§fUsage: /gamemode <mode>\n§7Examples:\n§7  0 - Survival\n§7  1 - Creative\n§7  2 - Adventure\n§7  3 - Spectator\n§8I mean, are you serious? You must know this by now :D",
  "gamespeed": "§a--Gamespeed-- \n§fUsage: /gamespeed [speed]\n§7Example: /gamespeed 40\n§8Change the speed of the game. 20 is normal speed.",
  "give": "§a--Give-- \n§fUsage: /give <id> <amount> [damage]*\n§7Example: /give 276 1\n§8Get whatever you want with whatever amount you would like\n§8You must enter them by ID, for example, Stone is 1\n§8Damage is optional*",
/*UT*/	"heal": "§a--Heal-- \n§fUsage: /heal\n§7Heals you, what else ;)",
  "health": "§a--Health-- \n§fUsage: /health [set | add] <amount>\n§7Example: /health set 100\n§8You can set your health to whatever or add health. 20 is normal",
  "help": "§a--Help-- \n§fUsage: /help <page number> OR <command>\n§7Example: /help give\n§8Browse through all the available commands by page number or get additional help with commands",
  "ignite": "§a--Ignite-- \n§fUsage: /ignite <seconds>\n§7Example: /ignite 10\n§8Burn yourself for how much second you'd like to",
  "item": "§a--Item-- \n§fUsage: /item <command>\n§a--Item Commands--\n§7 /item data - Shows ID, damage and count of the item you're holding\n§7 /item remove - Remove the item you're holding",
  "ip": "§a--IP-- \n§fUsage: /ip\n§7Check the IP address of the server you've joined \n§a(Only works at Wi-Fi or Bluetooth multiplayer)",
  "kick": "§a--Kick-- \n§fUsage: /kick\n§7Kick any player or mob by looking at them\n§7Remote kicking is coming soon",
  "kill": "§a--Kill-- \n§fUsage: /kill\n§8Kill yourself, faint, if you mind",
  "me": "§a--Me-- \n§fUsage: /me <message>\n§7Example: /me said \"Hi\" to a cow\n§8This would make a message appear after your name\n§8For example, this would return, \'Steve said \"Hi\" to a cow\'",
/*UT*/	"name": "§a--Name-- \n§fUsage: /name\n§7This would return your name (Useless command)",
  "say": "§a--Say-- \n§fUsage: /say <message>\n§7Example: /say I love nougats\n§8This would make a message appear after your name but with brackets\n§8For example, this would return, \'[Steve] I love nougats\'",
  "spawnpoint": "§a--Spawnpoint-- \n§fUsage: /spawnpoint\n§7This places a spawnpoint at you current location\n§7So whenever you die, you will spawn at that location",
  "stop": "§a--Stop-- \n§fUsage: /stop\n§7Lets you exit the world and return to the Main Menu",
  "summon": "§a--Summon-- \n§fUsage: /summon [x y z OR \"here\"] <entity>\n§7Examples:\n§7 /summon here lightning\n§7 /summon 295 14 53 lightning\n§8Summon anything to anywhere you want or at your current location",
  "time": "§a--Time-- \n§fUsage: /time [set | add]\n§7Examples:\n§7 /time - Returns the current MC time\n§7 /time set 16000\n§7 /time add 80\n§8Change, add or know the time of your world",
/*DC*/	"title": "§a--Title-- \n§fUsage: /title <title>\n§7Example: /title Adventures of Steve\n§8This feature doesn't work as intended",
  "tp": "§a--Teleportation-- \n§fUsage: /tp <x> <y> <z>\n§7Example: /tp 295 14 53\n§8Teleport to anywhere in the world",
  "version": "§a--Version-- \n§fUsage: /version\n§7Shows you the version, milestone and the compatibility of the Mod\n§7Including the MCPE version",
  "weather": "§a--Weather-- \n§fUsage: /weather <command>\n§a--Weather Commands--\n§7 /weather clear - Clears the weather\n§7 /weather rain - Start a rainy weather\n§7 /weather storm - Start a stormy weather\n§7 /weather lightning <level> - Set lightning level to anything without changing the current weather",
  "world": "§a--World-- \n§fUsage: /world\n§7Returns the name of the current world you're in",
  "xp": "§a--Experience Points-- \n§fUsage: /xp [add | set]\n§7Example: /xp add 500\n§8Add or set the amount of xp you'd like (Green Bar)"
};


function procCmd(cmd) {
  var cline = cmd.split(" ");
  var no_command = "Error: Command " + cline[0] + " not found";

  switch (cline[0]) {


    case "help":
    case "?":
      if (cline[1] % 1 === 0) {
        showHelpPage(cline[1]);
      } else {
        switch (cline[1]) {
          case undefined:
            clientMessage(command_usage["help"]);
            break;
          case "entity":
            showEntityPage(cline[2]);
            break;
          default:
            if (isString(cline[1]) == true) {
              clientMessage(command_usage[cline[1]]);
            }
            break;
        }//switch
      }//if else
      break;
    case "test":
      if (dev == 1) {
        switch (cline[1]) {
          case "help":
            clientMessage(command_usage[cline[2]]);
            break;
          case "disguise":
            switch (cline[2]) {
              case "manual":
                sound = 0;
                disguiseMob("mob/steve.png", cline[3]);
                ModPE.resetImages();
                break;
              case "auto":
                switch (cline[3]) {
                  /*case "villager":
                  case "Villager":

                  break;
                  case "cat":
                  case "Cat":
                  case "Ocelot":
                  case "ocelot":

                  break;
                  case "Sheep":
                  case "sheep":

                  break;*/
                  default:
                    sound = 0;
                    disguiseMob("mob/" + cline[3] + ".png", entityRs[cline[3]]);
                    ModPE.resetImages();
                    break;
                }
                break;
            }
            break;
          case "helppage":
            showHelpPage(cline[2]);
            break;
          default:
            clientMessage(no_command);
            break;
        }
      } else {
        clientMessage(denied_access);
      }
      break;

    case "dev":
    case "developer":
      switch (cline[1]) {
        case "enable":
          switch (cline[2]) {
            case "dev2016!":
              dev = 1;
              clientMessage("§aEnabled Dev Mode\nMode = " + dev);
              break;
          }
          break;
        case "disable":
          dev = 0;
          clientMessage("§cDisabled Dev Mode\nMode = " + dev);
          break;
        case "mode":
          clientMessage("Mode = " + dev);
          break;
        default:
          clientMessage(denied_access);
      }
      break;

    case "camera":
      switch (cline[1]) {
        case "on":
          ModPE.setCamera(Player.getPointedEntity());
          switch (cline[2]) {
            case "hyper":
              var sX = getPlayerX();
              var sY = getPlayerY();
              var sZ = getPlayerZ();
              summonMobHere(sX, sY, sZ, entityIDs[cline[3]], cline[4]);
              ModPE.setGameSpeed(2);
              ModPE.setCamera(Player.getPointedEntity());
              clientMessage("Type \"/camera on cine1\" as fast you can for the action to start");
              break;
            case "hyper1":
              ModPE.setFov(110);
              Level.setTime(0);
              ModPE.setGameSpeed(99999);
              break;
          }
          break;
        case "off":
          ModPE.setCamera(Player.getEntity());
          switch (cline[2]) {
            case "hyper":
              ModPE.setCamera(Player.getEntity());
              ModPE.setFov(70);
              ModPE.setGameSpeed(20);
              Level.setTime(0);
              break;
          }
          break;
        default:
          clientMessage(command_usage["camera"]);
      }
      break;

    case "xp":
      switch (cline[1]) {
        case "add":
          Player.addExp(cline[2]);
          clientMessage("Added " + cline[2] + " experience points to \n" + Player.getName(getPlayerEnt()));
          break;
        case "set":
          Player.setExp(cline[2]);
          clientMessage(Player.getName(getPlayerEnt()) + " set experience points to:\n" + cline[2]);
          break;
        default:
          clientMessage(command_usage["xp"]);
      }
      break;

    case "effect":
      switch (cline[4]) {
        case undefined:
          Entity.addEffect(getPlayerEnt(), effectIDs[cline[1]], cline[2] * (60), cline[3], false, true);
          //					<player>		<effect> 	   [seconds] [amplifier] [ambient] [hideParticles]
          break;
      }
      switch (cline[1]) {
        /*case "removeall":
          Entity.removeAllEffects(getPlayerEnt());
        break;
        case "remove":
          Entity.removeEffect(par1Object, par2int);
        break;*/
        default:
          Entity.addEffect(getPlayerEnt(), effectIDs[cline[1]], cline[2] * 60, cline[3], false, cline[4]);
      }
      break;

    case "time":
      if (cline[1] == undefined) {
        clientMessage(msg2 + Math.round(Level.getTime()));
      } else {
        switch (cline[1]) {
          case "set":
            var time = cline[2];
            switch (cline[2]) {
              case "day":
                time = 0;
                break;
              case "midday":
              case "noon":
                time = 5000;
                break;
              case "night":
                time = 10000;
                break;
              case "midnight":
                time = 14500;
                break;
              default:
                time = Math.round(cline[2]);
            }
            Level.setTime(time);
            clientMessage("Time set to " + time);
            break;
          case "add":
            Level.setTime(Math.round(Level.getTime()) + Math.round(cline[2]));
            clientMessage("Added " + Math.round(cline[2]) + " to the time. ");
            break;
        }
      }
      break;




    case "gamemode":
      var mode;
      msg6 = "Gamemode changed to ";
      switch (cline[1]) {
        case "0":
        case "survival":
        case "s":
          msg6 += "survival";
          adventureMode(0);
          mode = 0;
          break;
        case "1":
        case "creative":
        case "c":
          msg6 += "creative";
          adventureMode(0);
          mode = 1;
          break;
        case "2":
        case "adventure":
        case "a":
          msg6 += "adventure";
          adventureMode(1);
          if (Level.getGameMode() != 0) {
            mode = 0;
          }
          break;
        case "3":
        case "spectator":
        case "sp":
          msg6 += "spectator";
          adventureMode(1);
          mode = 1;
          break;
      }
      clientMessage(msg6);
      Level.setGameMode(mode);
      /*
      if(cline[1] == "0") {

      }else if (cline[1] == "2") {
        msg6 += "adventure";
        adventureMode(1);
      }else{
        msg6 += "creative";
        clientMessage(msg6);

      }*/
      break;

    case "world":
      clientMessage(msg + Level.getWorldName());
      break;

    case "name":
      clientMessage(msg5 + Player.getName(getPlayerEnt()));
      break;

    case "me":
      break;

    case "title":
      cline.shift();
      print(cline.join(" "));
      //replaced with /print
      break;

    case "clear":
      if (Level.getGameMode() === 1) {
        clientMessage("Cannot clear the creative inventory!");
      } else {
        var count = 0;
        for (i = 9; i <= 44; i++) {
          if (Player.getInventorySlot(i) !== 0) {
            for (j = 1; j <= Player.getInventorySlotCount(i); j++) {
              count++;
            }
            Player.clearInventorySlot(i);
          }
        }
        clientMessage("Cleared Inventory");
      }
      break;

    case "health":
      if (cline[1] == undefined) {
        var msghealth = "Your health is "; clientMessage(msghealth + Entity.getHealth(getPlayerEnt()));
      } else {
        switch (cline[1]) {


          case "set":
            if (!parseInt(cline[2])) {
              clientMessage("§7Usage: /health set <hearts>");
            } else {
              Player.setHealth(cline[2]);
              clientMessage("Health set to " + cline[2]);
            }

            break;


          case "add":
            if (!parseInt(cline[2])) {
              clientMessage("§7Usage:/health add <hearts>");
            } else {
              clientMessage("Added " + cline[2] + " half-hearts");
              Player.setHealth(Math.round(cline[2]) + Math.round(Entity.getHealth(getPlayerEnt())));
            }

            break;
        }
      }
      break;

    case "heal":
      Player.setHealth(20);
      Player.setHunger(20);
      clientMessage("Healed player");
      break;

    case "kill":
      if (cline[1] == undefined) {
        Player.setHealth(0);
        clientMessage("Ouch! That looks like it hurt.");
      } else {
        Entity.setHealth(cline[1], 0);
      }
      break;

    case "stop":
      ModPE.leaveGame();
      break;

    case "ignite":
      if (!parseInt(cline[1])) {
        clientMessage("§7Usage: /ignite <seconds>");
      } else {
        Entity.setFireTicks(Player.getEntity(), cline[1]);
        clientMessage("Cooking you for " + cline[1] + " seconds.");
      }
      break;

    case "about":
      var about = "---About---\n CommandCraft " + version + "\n By Fatihcraft2TR\n Supports MCPE " + supported_version + "\n" + copyright;
      clientMessage(about);
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1;//January is 1 now
      var yyyy = today.getFullYear();
      var mod_old = yyyy - 2014;
      if (mm == 8 && dd == 16) {
        clientMessage("\n§aHooray! CmdCraft is " + mod_old + " years old");
        ModPE.showTipMessage("\n\n§aHooray! CmdCraft is " + mod_old + " years old");
      }
      break;

    case "gamespeed":
      if (cline[1] == undefined) {
        ModPE.setGameSpeed(20);
        clientMessage("§7Usage: /gamespeed <ticks>");
      } else if (cline[1] == "0") {
        ModPE.setGameSpeed(20);
        clientMessage("§c0 would freeze the game!");
      } else if (!parseInt(cline[1])) {
        clientMessage("Usage: /gamespeed <ticks>");
        ModPE.setGameSpeed(20);
      } else {
        ModPE.setGameSpeed(cline[1]);
        clientMessage("Gamespeed changed to \n" + cline[1] + " ticks per second");
      }

      switch (cline[1]) {
        case "reset":
          ModPE.setGameSpeed(20);
          clientMessage("Reset gamespeed to 20");
          break;

      }
      break;




    case "give":
      if (!parseInt(cline[2])) {
        clientMessage("§7Usage: /give <item> <amount> [damage]");
      } else if (!parseInt(cline[1])) {
        clientMessage("§7There is no such id as \"" + cline[1] + "\"");
      } else {
        Player.addItemInventory(cline[1], cline[2], cline[3]);
        clientMessage("Given " + "[" + cline[1] + "]" + " * " + cline[2] + " to " + Player.getName(getPlayerEnt()));
      }
      break;



    case "fov":
      if (!parseInt(cline[1])) {
        clientMessage(command_usage["fov"]);
        ModPE.setFov(70);
      } else {
        if (cline[1] == "reset") {
          ModPE.setFov(70);
          clientMessage("Your FOV is reset to 70");
        } else {
          ModPE.setFov(cline[1]);
          clientMessage("Changed FOV to " + cline[1]);
        }
      }
      break;







    case "tp":
      if (!parseInt(cline[1] || cline[2] || cline[3])) {
        clientMessage(command_usage["tp"]);
      } else {
        Entity.setPosition(getPlayerEnt(), cline[1], cline[2], cline[3]);
      }
      switch (cline[1]) {
        case "entity":
          var eX = Entity.getX(cline[2]);
          var eY = Entity.getY(cline[2]);
          var eZ = Entity.getZ(cline[2]);
          var eY1 = eY + 1;
          Entity.setPosition(getPlayerEnt(), eX, eY1, eZ);
          break;
      }
      break;



    case "coords":
      if (cline[1] == undefined) {
        var cX = getPlayerX();
        var cY = getPlayerY();
        var cZ = getPlayerZ();
        clientMessage(Level.getBiomeName(cX, cZ) + " biome");
        clientMessage("x: " + Math.round(cX) + " y: " + Math.round(cY) + " z: " + Math.round(cZ));
      }
      switch (cline[1]) {
        case "pointed":
          clientMessage("x: " + Math.round(Player.getPointedBlockX()) + " y: " + Math.round(Player.getPointedBlockY()) + " z: " + Math.round(Player.getPointedBlockZ()));
          break;
      }
      break;

    case "spawnpoint":
      Level.setSpawn(getPlayerX(), getPlayerY(), getPlayerZ());
      clientMessage("Spawnpoint set");
      break;

    case "summon":
      switch (cline[1]) {
        case "here":
          clientMessage("Object succesfully summoned");
          var sX = getPlayerX();
          var sY = getPlayerY();
          var sZ = getPlayerZ();
          summonMobHere(sX, sY, sZ, entityIDs[cline[2]], cline[3]);
          break;
        default:
          summonMob(cline, entityIDs[cline[4]]);
          break;
      }
      //clientMessage("Summoned " + cline[4] + " at x: " + cline[1] + " y: " + cline[2] + " z: " + cline[3]);
      //Level.spawnMob(x, y, z, typeId, skin);
      break;




    case "item":

      switch (cline[1]) {
        case "id":
        case "data":
          clientMessage("ID: " + Player.getCarriedItem() + ", Damage: " + Player.getCarriedItemData() + ", Count: " + Player.getCarriedItemCount());
          break;
        case "remove":

          break;
        default:
          clientMessage(command_usage["item"]);
          break;
      }
      break;

    case "block":
      switch (cline[1]) {

        case "remove":
        case "destroy":
          Level.destroyBlock(Player.getPointedBlockX(),
            Player.getPointedBlockY(),
            Player.getPointedBlockZ(), cline[1]);
          break;

        case "id":
        case "data":
          clientMessage("ID: " + Player.getPointedBlockId() + ", Data: " + Player.getPointedBlockData());
          break;
        /*
        case "set":
          if(!isset(cline[1]) || !isset(cline[2]) || !isset(cline[3]) || !isset(cline[4])) {
          clientMessage("§7Usage: /block set <x> <y> <z> [drop:<true><false>]");
    }
    else if(isset(cline[5])) {
      Level.setTile(cline[1], cline[2], cline[3], cline[4], cline[5]);
    }
    else {
      Level.setTile(cline[1], cline[2], cline[3], cline[4]);
    }
        break;
        */
        default:
          clientMessage("§7Usage: /block <command>\n§a--Block Commands--\n§7 /block data - Shows ID and Data of the block you're looking at\n§7 /block destroy - Destroy the block you're looking at");
          break;
      }
      break;


    case "dropitem":
      if (!parseInt(cline[1] || cline[2] || cline[3] || cline[4] || cline[5] || cline[6])) {
        clientMessage(command_usage["dropitem"]);
      } else {
        Level.dropItem(cline[1], cline[2], cline[3], 0, cline[4], cline[5], cline[6]);
        /* Level.dropItem(Entity.getX(victim) + 0.5, Entity.getY(victim) - 1, Entity.getZ(victim) + 0.5, 0, 367, 1, 0); */
      }
      break;




    case "explode":
      Level.explode(cline[1], cline[2], cline[3], cline[4]);
      switch (cline[1]) {


        case "here":
          if (!parseInt(cline[2] || cline[3])) {
            clientMessage("§7Usage: /explode here <radius>");
          } else {
            var epX = getPlayerX();
            var epY = getPlayerY();
            var epZ = getPlayerZ();
            Level.explode(epX, epY, epZ, cline[2]);

          }
          break;
        default:
          clientMessage(command_usage["explode"]);
      }
      break;

    case "say":
      cline.shift();
      clientMessage("[" + Player.getName(getPlayerEnt()) + "]" + " " + cline.join(" "));
      break;

    case "ip":
      if (Server.getAddress() == null) {
        clientMessage("§7[error] §7This §7command §7only §7works §7in §7local §7servers");
      } else {
        clientMessage("IP: " + Server.getAddress() + "\nPort: " + Server.getPort());
      }
      break;

    case "fly":
      if (cline[1] == undefined) {
        clientMessage("§7Usage: /fly [on|off]");
      } else {
        switch (cline[1]) {
          case "on":
            Player.setCanFly(true);
            clientMessage("Flying is enabled");
            break;
          case "off":
            Player.isFlying(false);
            Player.setCanFly(false);
            Player.setFlying(false);
            clientMessage("Flying is disabled");

            break;
        }
      }
      break;

    case "idname":
      clientMessage("Player ID: " + getPlayerEnt());
      break;

    case "e":
    case "entity":
      if (cline[1] == undefined) {
        clientMessage("Entity Command §cBeta");
      } else {
        switch (cline[1]) {
          case "skin":
            clientMessage(Entity.getMobSkin(Player.getPointedEntity()));
            switch (cline[2]) {
              case "set":
                clientMessage("Changed entity's skin");
                Entity.setMobSkin(Player.getPointedEntity(), cline[2]);
                break;
            }
            break;
          case "health":
            if (cline[2] == undefined) {
              clientMessage("Entity's health is " + Entity.getHealth(Player.getPointedEntity()));
            } else {
              switch (cline[2]) {
                case "set":
                  Entity.setHealth(Player.getPointedEntity(), cline[3]);
                  break;
              }
            }
            break;

          case "id":
            if (cline[2] == undefined) {
              clientMessage("ID: " + Entity.getEntityTypeId(Player.getPointedEntity()));
            } else {
              clientMessage("ID: " + Entity.getEntityTypeId(cline[2]));
            }
            break;

          case "idname":
            clientMessage("Entity ID: " + Player.getPointedEntity());
            break;

          case "age":
            switch (cline[2]) {
              case "set":
                if (cline[3] == null) {
                  clientMessage("§7Usage: /entity age set <adult | baby");
                }
                switch (cline[3]) {
                  case "adult":
                    Entity.setAnimalAge(Player.getPointedEntity(), 0);
                    break;
                  case "baby":
                    Entity.setAnimalAge(Player.getPointedEntity(), -24000);
                    break;
                }
                break;
            }
            break;
          case "remove":
            if (cline[2] == undefined) {
              clientMessage("Removed entity");
              Entity.remove(Player.getPointedEntity());
            } else if (cline[2] == "1") {
              clientMessage("You cannot remove yourself!");
            } else {
              clientMessage("Removed entity");
              Entity.remove(cline[2]);
            }
            break;
          /*
          case "setname":
            if (isset == cline[2]) {
              Entity.setNameTag(Player.getPointegetPointedEntity, " ");
            } else {
              cline.shift();
              clientMessage("");
              Entity.setNameTag(Player.getPointedEntity, cline.split(1,2));
            }
                       break;*/
          case "sneak":
            switch (cline[2]) {
              case "on":
                Entity.setSneaking(Player.getPointedEntity(), true);
                break;
              case "off":
                Entity.setSneaking(Player.getPointedEntity(), false);
                break;
            }
            break;
          case "tp":
            if (!parseInt(cline[2] || cline[3] || cline[4])) {
              clientMessage("§7Usage: /e tp [id] <x> <y> <z>");
            } else if (cline[5] == undefined) {
              Entity.setPosition(Player.getPointedEntity(), cline[2], cline[3], cline[4]);
            } else {
              Entity.setPosition(cline[3], cline[4], cline[5], cline[2]);
            }
            switch (cline[1]) {
              case "entity":
                var eeX = Entity.getX(cline[2]);
                var eeY = Entity.getY(cline[2]);
                var eeZ = Entity.getZ(cline[2]);
                var eeY1 = eY + 1;
                Entity.setPosition(Player.getPointedEntity(), eeX, eeY1, eeZ);
                break;
            }
            break;
        }
      }
      break;

      break;


    case "kick":
      if (cline[1] == undefined) {
        Entity.remove(Player.getPointedEntity());
      } else {
        Entity.remove(cline[1]);
      }
      break;

    case "version":
      var about2 = "§a---Version---\n§fCommandCraft " + version + "\n" + beta + "\nMCPE " + ModPE.getMinecraftVersion() + "\nSupports MCPE " + supported_version;
      clientMessage(about2);
      break;

    case "d":
    case "disguise":
      if (cline[1] == undefined) {
        clientMessage(command_usage["disguise"]);
      } else {
        disguiseMob(0, entityRs[cline[1]]);
      }
      break;

    case "update":
      clientMessage("§a--(Checking Server...)--");
      compareVersion();
      break;

    case "dtest":
    case (dev = 1):
      disguiseMob("mob/char.png", cline[1]);
      break;
      break;

    case "distance":
    case "dist":
      if (cline[1] == "null") {
        clientMessage("§7Usage: /dist <x> <y> <z>\n§7§oExample: /dist 154 14 53");
      } else {
        clientMessage(distance(cline[1], cline[2], cline[3]));
      }
      break;

    case "weather":
      switch (cline[1]) {
        case "clear":
          Level.setRainLevel(0);
          Level.setLightningLevel(0);
          clientMessage("Set to clear weather");
          break;
        case "rain":
          if (cline[2] == undefined) {
            Level.setRainLevel(1);
            clientMessage("Set to rainy weather");
          } else {
            Level.setRainLevel(cline[2]);
            clientMessage("Rain level set to " + cline[2]);
          }

          break;
        case "storm":
          if (cline[2] === undefined) {
            Level.setRainLevel(3);
            Level.setLightningLevel(1);
            clientMessage("Set to stormy weather");
          } else {
            Level.setRainLevel(cline[2]);
            Level.setLightningLevel(cline[2] - 1);
            clientMessage("Storm level set to " + cline[2]);
          }
          break;
        case "lightning":
          Level.setLightningLevel(cline[2]);
          clientMessage("Lightning level set to " + cline[2]);
          break;
        default:
          clientMessage("§a--Weather Commands--\n§7clear - Clears the weather\n§7rain\n§7storm\n§7lightning - set level of lightning");
          break;
      }
      break;

    case "news":
      clientMessage("Coming Soon...");
      break;

    default:
      clientMessage(no_command);
      break;

  } // switch 0

} // function

var helpInfo = {
  1: "§7 /about",
  2: "§7 /block [data | remove]",
  3: "§7 /camera [on | off]",
  4: "§7 /clear",
  5: "§7 /coords",
  6: "§7 /disguise OR /d <entity>",
  7: "§7 /distance <x> <y> <z>",
  8: "§7 /dropitem <x> <y> <z> <item> <amount> [damage]",
  9: "§7 /enchant <effect> [seconds] [amplifier]",
  10: "§7 /entity OR /e",
  11: "§7 /explode <x> <y> <z> <radius>",
  12: "§7 /fly [on|off]",
  13: "§7 /fov <number>",
  14: "§7 /gamemode [0|1|2|3]",
  15: "§7 /gamespeed <ticks>",
  16: "§7 /give <item> <amount> [damage]",
  17: "§7 /heal",
  18: "§7 /health [set|add] <hearts>",
  19: "§7 /help [page]",
  20: "§7 /ignite <seconds>",
  21: "§7 /item data",
  22: "§7 /ip",
  23: "§7 /kick",
  24: "§7 /kill",
  25: "§7 /me <about you>",
  26: "§7 /name",
  27: "§7 /say <message>",
  28: "§7 /spawnpoint OR <x> <y> <z>",
  29: "§7 /stop",
  30: "§7 /summon here <entity>",
  31: "§7 /summon <entity> [<x> <y> <z>] [skin]",
  32: "§7 /time [set | add] <ticks>",
  33: "§7 /tp <x> <y> <z>",
  34: "§7 /version",
  35: "§7 /weather [clear | rain | storm] OR lightning [level]",
  36: "§7 /world",
  37: "§7 /xp [add | set] <amount>",
  "empty": " "
};

function distance(x, y, z) {
  var cX = getPlayerX();
  var cY = getPlayerY();
  var cZ = getPlayerZ();
  var dx = Math.pow((x - cX), 2);
  var dy = Math.pow((y - cY), 2);
  var dz = Math.pow((z - cZ), 2);

  var dist = Math.round(Math.sqrt(dx + dy + dz)) + " units";
  return "Distance to " + x + ", " + y + ", " + z + ": " + dist;
}

var toString = Object.prototype.toString;

isString = function (obj) {
  return toString.call(obj) == '[object String]';
}

var helpPages = new Array(
  new Array(
    helpInfo[1],
    helpInfo[2],
    helpInfo[3],
    helpInfo[4],
    helpInfo[5]
  ),
  new Array(
    helpInfo[6],
    helpInfo[7],
    helpInfo[8],
    helpInfo[9],
    helpInfo[10]
  ),
  new Array(
    helpInfo[11],
    helpInfo[12],
    helpInfo[13],
    helpInfo[14],
    helpInfo[15]
  ),
  new Array(
    helpInfo[16],
    helpInfo[17],
    helpInfo[18],
    helpInfo[19],
    helpInfo[20]
  ),
  new Array(
    helpInfo[21],
    helpInfo[22],
    helpInfo[23],
    helpInfo[24],
    helpInfo[25]
  ),
  new Array(
    helpInfo[26],
    helpInfo[27],
    helpInfo[28],
    helpInfo[29],
    helpInfo[30]
  ),
  new Array(
    helpInfo[31],
    helpInfo[32],
    helpInfo[33],
    helpInfo[34],
    helpInfo[35]
  ),
  new Array(
    helpInfo[36],
    helpInfo[37],
    helpInfo["empty"],
    helpInfo["empty"],
    helpInfo["empty"]
  )

);

ModPE.setItem(460, "blaze_rod", 0, "Sound Receiver", 1);
//Item.setCategory(460, 2);

var sKind;
var dMob;
var dSkin;
var sound = 0;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
function useItem(x, y, z, itemId, blockId, cline) {
  if (itemId == 460) {
    if (sound == 1) {
      /*stevem = 1;
      steve = Level.spawnMob(x, y + 1, z, 11, "mob/char.png");
      Entity.setRenderType(steve, 3);
      Entity.setHealth(steve, 20);
      clientMessage("<server> Steve Joined The Game");*/
      Level.playSoundEnt(getPlayerEnt(), sKind, 1, 1);
    }
  }
}

function disguiseMob(dSkin, dMob) {
  Entity.setRenderType(Player.getEntity(), dMob);
  if (dSkin != 0) {
    Entity.setMobSkin(Player.getEntity(), dSkin);
  }
}

function summonMob(cline, sMob) {
  Level.spawnMob(cline[1], cline[2], cline[3], sMob, cline[5]);
}

function summonMobHere(sX, sY, sZ, sMob, cline) {
  Level.spawnMob(sX, sY, sZ, sMob, cline);
}


function showHelpPage(page) {
  if (page % 1 === 0) {
    if (page < 1) {
      clientMessage("§cThe page number must be above 0!");
    }
    else if (page > helpPages.length) {
      clientMessage("§cThe page number must be below " + (helpPages.length + 1) + "!");
    }
    else {
      clientMessage("§a---Showing help page " + page + " of " + helpPages.length + "---");
      for (i = 0; i <= 4; i++) {

        clientMessage("§7" + helpPages[page - 1][i]);

      }
    }
  }

}



var helpEntityPages = new Array(
  new Array(
    "age [set] <adult | baby>",
    "health [set] [number]",
    "id [id]",
    "idname",
    /*"/cannon",*/
    "remove"),
  new Array(
    "setname [id] [name]",
    "skin",
    "tp [id] <x> <y> <z>",
    " ",
    " ")

);

////////////Adventure Mode Settings////////////////

advMode = 0;

var factoryTimes = {
  ///////////////Infinite///////////////
  166: 9999,
  7: 9999,
  137: 9999,
  120: 9999,
  /////////////////100s/////////////////
  8: 100,
  9: 100,
  10: 100,
  11: 100,
  /////////////////50s/////////////////
  49: 50,
  /////////////////22.5s/////////////////
  130: 22.5,
  /////////////////5s/////////////////
  145: 5,
  173: 5,
  57: 5,
  133: 5,
  42: 5,
  152: 5,
  116: 5,
  101: 5,
  71: 5,
  52: 5,
  /////////////////3.5s/////////////////
  23: 3.5,
  158: 3.5,
  61: 3.5,
  /////////////////3s/////////////////
  138: 3,
  41: 3,
  16: 3,
  122: 3,
  56: 3,
  126: 3,
  121: 3,
  14: 3,
  15: 3,
  22: 3,
  21: 3,
  153: 3,
  73: 3,
  96: 3,
  64: 3,
  /////////////////2,5s/////////////////
  54: 2.5,
  146: 2.5,
  58: 2.5,
  /////////////////2s/////////////////
  109: 2,
  98: 2,
  118: 2,
  4: 2,
  67: 2,
  139: 2,
  85: 2,
  188: 2,
  189: 2,
  190: 2,
  191: 2,
  192: 2,
  107: 2,
  183: 2,
  184: 2,
  185: 2,
  186: 2,
  84: 2,
  48: 2,
  112: 2,
  113: 2,
  114: 2,
  44: 2,
  17: 2,
  5: 2,
  126: 2,
  53: 2,
  134: 2,
  135: 2,
  136: 2,
  163: 2,
  164: 2,
  /////////////////1.5s/////////////////
  1: 1.5,
  47: 1.5,
  43: 1.5,
  109: 1.5,
  /////////////////1.25s////////////////
  159: 1.25,
  172: 1.25,
  /////////////////1s///////////////////
  91: 1,
  103: 1,
  397: 1,
  86: 1,
  63: 1,
  68: 1,
  /////////////////0.8s/////////////////
  155: 0.8,
  25: 0.8,
  156: 0.8,
  179: 0.8,
  180: 0.8,
  182: 0.8,
  128: 0.8,
  24: 0.8,
  35: 0.8,
  /////////////////0.75s///////////////
  97: 0.75,
  /////////////////0.7s////////////////
  27: 0.7,
  28: 0.7,
  66: 0.7,
  157: 0.7,
  /////////////////0.6s////////////////
  82: 0.6,
  60: 0.6,
  2: 0.6,
  13: 0.6,
  110: 0.6,
  111: 0.6,
  19: 0.6,
  /////////////////0.5s/////////////////
  117: 0.5,
  77: 0.5,
  143: 0.5,
  92: 0.5,
  3: 0.5,
  170: 0.5,
  79: 0.5,
  69: 0.5,
  174: 0.5,
  29: 0.5,
  33: 0.5,
  12: 0.5,
  88: 0.5,
  147: 0.5,
  148: 0.5,
  70: 0.5,
  72: 0.5,
  /////////////////0.4s/////////////////
  81: 0.4,
  65: 0.4,
  87: 0.4,
  /////////////////0.3s/////////////////
  20: 0.3,
  102: 0.3,
  89: 0.3,
  123: 0.3,
  169: 0.3,
  95: 0.3,
  160: 0.3,
  /////////////////0.2s/////////////////
  26: 0.2,
  127: 0.2,
  151: 0.2,
  99: 0.2,
  100: 0.2,
  18: 0.2,
  80: 0.2,
  106: 0.2,
  /////////////////0.1s/////////////////
  171: 0.1,
  78: 0.1,
  /////////////////0s///////////////////
  141: 0,
  31: 0,
  32: 0,
  51: 0,
  140: 0,
  37: 0,
  38: 0,
  175: 0,
  105: 0,
  39: 0,
  40: 0,
  115: 0,
  142: 0,
  104: 0,
  149: 0,
  494: 0,
  93: 0,
  94: 0,
  76: 0,
  55: 0,
  6: 0,
  83: 0,
  46: 0,
  50: 0,
  132: 0,
  131: 0,
  59: 0
};

function adventureMode(advMode) {
  if (advMode == 1) {
    for (var ky in factoryTimes) {
      Block.setDestroyTime(ky, 9999);
    }
    /*for (var counter = 0; counter <= 2267; counter++) {
      Block.setDestroyTime(counter,9999);
    }*/
  } else if (advMode == 0) {
    for (var k in factoryTimes) {
      Block.setDestroyTime(k, factoryTimes[k]);
    }
  }

}

////////////////////////////////////////////////

function showEntityPage(page) {
  if (page % 1 === 0) {
    if (page < 1) {
      clientMessage("§cThe page number must be above 0!");
    }
    else if (page > helpEntityPages.length) {
      clientMessage("§cThe page number must be below " + (helpPages.length + 1) + "!");
    }
    else {
      clientMessage("§a---Showing entity help page " + page + " of " + helpEntityPages.length + "---");
      for (i = 0; i <= 4; i++) {

        clientMessage("§7 /e " + helpEntityPages[page - 1][i]);

      }
    }
  }

} //function

function newLevel() {
  clientMessage("[Mods] §7CommandCraft §a" + version + " §2" + beta_version + " " + beta_date);
  //clientMessage("[CmdCraft] §7Version comparison is unavailable");

  //////////////Version Checking according to MCPE Version///////////////
  var mcpe_version = ModPE.getMinecraftVersion();
  var mcpe_verRemDec = mcpe_version.slice(2, 6);
  var sVRemDec = supported_version.slice(2, 6);
  //clientMessage(mcpe_verRemDec);

  if (sVRemDec < mcpe_verRemDec) {
    clientMessage("§c[CmdCraft] §7This mod is compatible with MCPE " + supported_version);
  } else if (sVRemDec == mcpe_verRemDec) {
    clientMessage("§a[CmdCraft] §7You're up to date");
  } else if (sVRemDec > mcpe_verRemDec) {
    clientMessage("§a[CmdCraft] §7Beta test version " + version + " " + beta_version);
  }

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;//January is 1 now
  var yyyy = today.getFullYear();
  var mod_old = yyyy - 2014;
  if (mm == 8 && dd == 16) {
    clientMessage("\n§aHooray! CmdCraft is " + mod_old + " years old");
    ModPE.showTipMessage("\n\n§aHooray! CmdCraft is " + mod_old + " years old");
  }

  ///////////Disabled for now/////////////
  //checkVersion();
  //trackID();
}

function leaveGame() {
  sound = 0;
  //ModPE.resetImages();
}
