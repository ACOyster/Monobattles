handlers.client_state = function (client) {
	//<Monobattles Code> Variables used by Monobattles
	var message_object = {message: "Unit Announcement Error"};
	var message_base = "!LOC:";
	//</Monobattles Code>

    switch (model.mode()) {
        case 'landing':
            if (client.landing_position || model.isSpectator()) {
                model.landingOk();
                model.setMessage({
                    message: loc('!LOC:Waiting for other players to select a spawn location.')
                });
            }
            else
                model.setMessage({
                    message: loc("!LOC:Pick a location inside one of the green zones to spawn your Commander."),
                    helper: true
                });
            	if (window.HodgePodge) {
            		//<Monobattles Code> Prints the given unit to chat at spawn selection
            		console.log("Monobattles: Chat function attempt to read storage");
					message_object["message"] = loc(message_base.concat(localStorage.getItem("monobattles_name")));
					if (message_object["message"] != "null") { //If null, skip. Happened in older versions.
						model.send_message("chat_message", message_object);
						console.log("Monobattles: Unit name successfully read from storage");
						console.log(message_object["message"]);
					}
					//</Monobattles Code>
				}
            break;
        default: /* do nothing */ break;
    }
};

//<Monobattles Code> Random unit is chosen at the start of celestial view, which coincides with the beginning of the game.
var unit_roster = ["/pa/units/air/bomber/bomber.json",
    "/pa/units/air/bomber_adv/bomber_adv.json",
    "/pa/units/air/fighter/fighter.json",
    "/pa/units/air/fighter_adv/fighter_adv.json",
    "/pa/units/air/gunship/gunship.json",
    "/pa/units/land/aa_missile_vehicle/aa_missile_vehicle.json",
    "/pa/units/land/assault_bot/assault_bot.json",
    "/pa/units/land/assault_bot_adv/assault_bot_adv.json",
    "/pa/units/land/bot_bomb/bot_bomb.json",
    "/pa/units/land/bot_grenadier/bot_grenadier.json",
    "/pa/units/land/bot_sniper/bot_sniper.json",
    "/pa/units/land/bot_tactical_missile/bot_tactical_missile.json",
    "/pa/units/land/tank_armor/tank_armor.json",
    "/pa/units/land/tank_heavy_armor/tank_heavy_armor.json",
    "/pa/units/land/tank_heavy_mortar/tank_heavy_mortar.json",
    "/pa/units/land/tank_laser_adv/tank_laser_adv.json",
    "/pa/units/land/tank_light_laser/tank_light_laser.json",
    "/pa/units/orbital/orbital_fighter/orbital_fighter.json",
    "/pa/units/orbital/orbital_laser/orbital_laser.json",
    "/pa/units/sea/attack_sub/attack_sub.json",
    "/pa/units/sea/battleship/battleship.json",
    "/pa/units/sea/destroyer/destroyer.json",
    "/pa/units/sea/frigate/frigate.json",
    "/pa/units/sea/missile_ship/missile_ship.json",
    "/pa/units/sea/nuclear_sub/nuclear_sub.json",
    "/pa/units/sea/sea_scout/sea_scout.json",
    "/pa/units/air/bomber_heavy/bomber_heavy.json",
    "/pa/units/air/solar_drone/solar_drone.json",
    "/pa/units/air/support_platform/support_platform.json",
    "/pa/units/air/titan_air/titan_air.json",
    "/pa/units/land/bot_nanoswarm/bot_nanoswarm.json",
    "/pa/units/land/bot_support_commander/bot_support_commander.json",
    "/pa/units/land/bot_tesla/bot_tesla.json",
    "/pa/units/land/tank_flak/tank_flak.json",
    "/pa/units/land/tank_hover/tank_hover.json",
    "/pa/units/land/tank_nuke/tank_nuke.json",
    "/pa/units/land/titan_bot/titan_bot.json",
    "/pa/units/land/titan_vehicle/titan_vehicle.json",
    "/pa/units/orbital/orbital_battleship/orbital_battleship.json",
    "/pa/units/orbital/orbital_railgun/orbital_railgun.json",
    "/pa/units/orbital/titan_orbital/titan_orbital.json",
    "/pa/units/sea/drone_carrier/carrier/carrier.json",
    "/pa/units/sea/hover_ship/hover_ship.json"]; //Possible units for selection

var unit_names = ["Bumblebee",
    "Hornet",
    "Hummingbird",
    "Pheonix",
    "Kestral",
    "Spinner",
    "Dox",
    "Slammer",
    "Boom",
    "Grenadier",
    "Gil-E",
    "Bluehawk",
    "Inferno",
    "Vanguard",
    "Sheller",
    "Leveller",
    "Ant",
    "Avenger",
    "SSX-1304",
    "Barracuda",
    "Leviathan",
    "Orca",
    "Narwhal",
    "Stingray",
    "Kraken",
    "Piranha",
    "Wyrm",
    "Icarus",
    "Angel",
    "Zeus",
    "Locust",
    "Colonel",
    "Spark",
    "Storm",
    "Drifter",
    "Manhattan",
    "Atlas",
    "Ares",
    "Omega",
    "Artemis",
    "Helios",
    "Typhoon",
    "Kaiju"]; //In the same order as above, display names of units.

//Choose a random number less than the last index of the array
selection_number = Math.round(Math.random() * (unit_roster.length - 1));
console.log("Monobattles: Setting new random unit");

localStorage.setItem("monobattles_selection", unit_roster[selection_number]);
localStorage.setItem("monobattles_name", unit_names[selection_number]);
selected = unit_roster[selection_number];

console.log(selected);
//</Monobattles Code>
