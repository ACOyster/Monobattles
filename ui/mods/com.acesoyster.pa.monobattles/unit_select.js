var unit_bans = ["/pa/units/land/fabrication_bot_combat/fabrication_bot_combat.json",
    "/pa/units/land/fabrication_bot_combat_adv/fabrication_bot_combat_adv.json",
    "/pa/units/land/artillery_unit_launcher/artillery_unit_launcher.json",
    "/pa/units/sea/fabrication_barge/fabrication_barge.json"];

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
    "/pa/units/sea/hover_ship/hover_ship.json"];

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
    "Narwhal",
    "Orca",
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
    "Kaiju"];


var unit_bans_length = unit_bans.length;
var unit_roster_length = unit_roster.length;

var selected;

if (!!localStorage.getItem("monobattles_selection")) {
    selected = localStorage.getItem("monobattles_selection");   
}
else {
    selection_number = Math.round(Math.random() * (unit_roster_length - 1));
    console.log(selection_number);

    localStorage.setItem("monobattles_selection", unit_roster[selection_number]);
    localStorage.setItem("monobattles_name", unit_names[selection_number]);
    selected = unit_roster[selection_number];
}

console.log(selected);

unit_roster.splice(unit_roster.indexOf(selected), 1);

if (window.HodgePodge) {
    for (var iter_roster = 0; iter_roster < unit_roster_length; iter_roster++) {
        HodgePodge.removeUnits([
            {
                spec_id: unit_roster[iter_roster]
            },
        ]);
    }
    for (var iter_bans = 0; iter_bans < unit_bans_length; iter_bans++) {
        HodgePodge.removeUnits([
            {
                spec_id: unit_bans[iter_bans]
            },
        ]);
    }
    console.log('Monobattles build, client build bar successfully updated');
}