var animalList = ["vaquita", "marin_otter", "hawaii_seal", "jp_shark", "oren_stork", "white_shark", "smol_saw", "eu_eel", "blue_tuna", "man_ray", "gharial", "hawk_turtle", "pela_shark", "india_dolphin", "tri_alba", "icefish", "penguin", "sei_whale", "n_right_whale", "blue_whale"]
var animalNames = ["Vaquita", "Marine Otter", "Hawaiian Monk Seal", "Japanese Angel Shark", "Oriental Stork", "Oceanic White Tip Shark", "Smalltooth Sawfish", "European Eel", "Atlantic Bluefin Tuna", "Oceanic Manta Ray", "Gharial", "Hawksbill Turtle", "Pelagic Thresher", "Indian Ocean Humpback Dolphin", "Tristan Albatross", "South Georgia Icefish", "Erect-crested Penguin", "Sei Whale", "North Atlantic Right Whale", "Blue Whale"]
var animalScientificName = [
    "Phocoena sinus",
    "Lontra felina",
    "Neomonachus schauinslandi",
    "Squatina japonica",
    "Ciconia boyciana",
    "Carcharhinus longimanus",
    "Pristis pectinata",
    "Anguilla anguilla",
    "Thunnus thynnus",
    "Mobula birostris",
    "Gavialis gangeticus",
    "Eretmochelys imbricata",
    "Alopias pelagicus",
    "Sousa plumbea",
    "Diomedea dabbenena",
    "Pseudochaenichthys georgianus",
    "Eudyptes sclateri",
    "Balaenoptera borealis",
    "Eubalaena glacialis",
    "Balaenoptera musculus"
]
var animalType = [
    "Pacific Ocean"
    , "Pacific Ocean"
    , "Pacific Ocean"
    , "Pacific Ocean"
    , "Pacific Ocean"
    , "Atlantic Ocean"
    , "Atlantic Ocean"
    , "Atlantic Ocean"
    , "Atlantic Ocean"
    , "Atlantic Ocean"
    , "Indian Ocean"
    , "Indian Ocean"
    , "Indian Ocean"
    , "Indian Ocean"
    , "Antarctic Ocean"
    , "Antarctic Ocean"
    , "Antarctic Ocean"
    , "Antarctic Ocean"
    , "Arctic Ocean"
    , "Arctic Ocean"
]
var animalStatus = [[
    "Critically Endangered (CR)",
    "Endangered (EN)",
    "Endangered (EN)",
    "Critically Endangered (CR)",
    "Endangered (EN)",
    "Critically Endangered (CR)",
    "Critically Endangered (CR)",
    "Critically Endangered (CR)",
    "Endangered (EN)",
    "Endangered (EN)",
    "Critically Endangered (CR)",
    "Critically Endangered (CR)",
    "Endangered (EN)",
    "Endangered (EN)",
    "Critically Endangered (CR)",
    "Endangered (EN)",
    "Endangered (EN)",
    "Endangered (EN)",
    "Critically Endangered (CR)",
    "Endangered (EN)",

], [
    "#ff5757",
    "#ff914d",
    "#ff914d",
    "#ff5757",
    "#ff914d",
    "#ff5757",
    "#ff5757",
    "#ff5757",
    "#ff914d",
    "#ff914d",
    "#ff5757",
    "#ff5757",
    "#ff914d",
    "#ff914d",
    "#ff5757",
    "#ff914d",
    "#ff914d",
    "#ff914d",
    "#ff5757",
    "#ff914d",
]]

var animalDetail1 = [
    "Vaquita is a critically endangered marine mammal native to the northern part of the Gulf of California, Mexico. Known as the world's rarest marine cetacean, this small porpoise has a distinctive appearance with dark eye rings and lip patches, and a streamlined, gray body. Vaquitas are shy and elusive, often avoiding boats and rarely breaching the surface. Their population has declined drastically due to bycatch in illegal fishing nets, particularly those targeting the totoaba fish. Conservation efforts are ongoing to save this unique and gentle species from extinction."
    , "Marine Otter, also known as the sea cat, is a rare and elusive otter species native to the rocky coasts of South America, from Peru to southern Chile. Unlike most otters, it primarily inhabits marine environments, often sheltering in coastal caves and crevices. The marine otter has a dense, water-repellent fur coat, a slender body, and webbed feet, making it an excellent swimmer. It feeds on fish, crustaceans, and mollusks. Classified as endangered due to habitat loss, pollution, and hunting, the marine otter is a vital part of its coastal ecosystem."
    , "Hawaiian Monk Seal is an endangered marine mammal native to the warm, remote waters of the Hawaiian Islands. Known for their solitary nature, these seals have sleek, gray bodies with lighter bellies and can grow up to 7 feet long. They spend time both in the ocean, hunting for fish, octopus, and crustaceans, and on sandy beaches or rocky shores for rest and molting. As one of the oldest seal species, they are a vital part of Hawaii's ecosystem. Their population faces threats from habitat loss, entanglement in fishing gear, and human disturbance. Conservation efforts aim to protect this iconic species and its habitat."
    , "Japanese Angelshark is a flat-bodied shark species found in the coastal waters of the northwest Pacific, including Japan, Korea, and China. With a unique, ray-like appearance, this bottom-dwelling predator has broad pectoral fins and a patterned body that provides excellent camouflage on sandy or muddy seabeds. It feeds primarily on small fish and crustaceans, ambushing prey with a rapid lunge. Although not typically aggressive toward humans, the Japanese Angelshark is vulnerable to habitat degradation and bycatch in fishing operations. Conservation efforts are essential to protect this fascinating and ecologically important species."
    , "Oriental Stork is a large, striking bird found in eastern Asia, particularly in Japan, Korea, and China. Known for its graceful appearance, it has a white body, black wing tips, and a long, red-orange beak. These storks are migratory, breeding in wetlands and grasslands before flying to warmer regions for the winter. They primarily feed on fish, amphibians, and small mammals. Once critically endangered, the Oriental Stork has seen some recovery due to conservation efforts, but habitat loss and environmental changes still threaten its population. The species is a symbol of good fortune in some cultures."
    , "Oceanic Whitetip Shark is a large, pelagic predator known for its distinctive long, rounded pectoral fins tipped with white. Found in tropical and subtropical oceans worldwide, this species thrives in open water, often near the surface. Its diet includes fish and squid, though it is an opportunistic feeder. Known for its bold and curious nature, the Oceanic Whitetip is considered a vulnerable species due to overfishing and bycatch in commercial fisheries. It plays a crucial role in maintaining the balance of marine ecosystems."
    , "Smalltooth Sawfish is a critically endangered species of sawfish characterized by its long, saw-like snout, lined with sharp teeth on either side. Found in shallow coastal waters and estuaries of the Atlantic Ocean, it uses its rostrum to detect and stun prey, such as fish and crustaceans. Once widespread, its population has drastically declined due to habitat loss, fishing, and entanglement in nets. This unique and ancient species is now protected under conservation efforts to prevent extinction."
    , "European Eel is a critically endangered species of fish known for its elongated, snake-like body. Native to European rivers and coastal waters, it has a fascinating life cycle that includes a long migration to the Sargasso Sea in the Atlantic Ocean for breeding. Juveniles, called glass eels, return to freshwater to mature before repeating the cycle. Overfishing, habitat loss, and barriers to migration have significantly reduced their populations, making conservation efforts crucial for their survival."
    , "Atlantic Bluefin Tuna is a powerful and fast-swimming fish prized for its size, speed, and high-quality flesh. Found in the Atlantic Ocean and Mediterranean Sea, this migratory species can grow over 3 meters long and weigh up to 700 kilograms. It is a top predator, feeding on fish, squid, and crustaceans. Highly valued in global markets, particularly for sushi and sashimi, the species has faced severe overfishing."
    , "Oceanic Manta Ray is a majestic and massive ray, recognizable by its triangular pectoral fins, cephalic lobes, and a wingspan that can exceed 7 meters. Found in tropical and subtropical oceans worldwide, it is a filter feeder, consuming plankton and small fish. Known for its intelligence and social behavior, the Oceanic Manta Ray often gathers in groups and exhibits graceful acrobatics. Despite its gentle nature, it is classified as Endangered due to threats like bycatch, habitat degradation, and exploitation for gill plates in traditional medicine. Conservation efforts are critical for its survival."
    , "Gharial is a critically endangered crocodilian known for its long, slender snout lined with sharp teeth, perfectly adapted for catching fish. Native to the rivers of the Indian subcontinent, it can grow up to 6 meters in length. Males are distinguished by a bulbous growth on the tip of their snout called a ghara, used for vocalization and mating displays. Once widespread, the Gharial’s population has declined due to habitat loss, river pollution, and entanglement in fishing nets, making conservation efforts essential to protect this unique and ancient species."
    , "Hawksbill Turtle is a critically endangered sea turtle known for its striking, overlapping scales that form a beautifully patterned shell. Found in tropical and subtropical oceans, it inhabits coral reefs, lagoons, and mangroves. This species plays a vital role in maintaining coral reef ecosystems by feeding on sponges, which promotes coral growth. Despite legal protections, Hawksbill Turtles face threats from habitat loss, illegal trade of their shells, and bycatch in fishing gear. Conservation efforts are crucial to ensure the survival of this iconic marine species."
    , "Pelagic Thresher is a distinctive shark known for its long, whip-like tail, which can be as long as its body. Found in tropical and subtropical oceans, it is a solitary, open-water species often seen near seamounts and reefs. The tail is used as a hunting tool, stunning schools of fish before feeding. Pelagic Threshers are slow-growing and have low reproductive rates, making them vulnerable to overfishing and bycatch. They are listed as Endangered and are a focus of conservation efforts to protect them from declining populations."
    , "Indian Ocean Humpback Dolphin is a coastal species found in the warm waters of the Indian Ocean. Recognized for its distinct hump on the back, which is formed by the dorsal fin, and its gray to pale coloring, this dolphin typically inhabits shallow coastal areas, estuaries, and mangrove environments. It is known for its social behavior, often living in small, tight-knit pods. Facing threats from habitat loss, fishing practices, and pollution, the species is classified as Endangered, with ongoing conservation efforts needed to protect its vulnerable populations."
    , "Tristan Albatross is a large seabird native to the remote Tristan da Cunha archipelago in the South Atlantic Ocean. Known for its impressive wingspan, which can reach up to 3 meters, this bird is an exceptional long-distance flyer, spending most of its life soaring over the open ocean. The Tristan Albatross feeds primarily on squid, fish, and krill. It is critically endangered due to threats such as habitat loss, invasive species on breeding islands, and bycatch in fishing nets. Conservation efforts are crucial for the survival of this iconic seabird."
    , "South Georgia Icefish is a unique species of fish found in the cold waters around South Georgia Island in the Southern Ocean. Known for its translucent body, the icefish is adapted to extreme environments with antifreeze proteins in its blood, allowing it to survive in freezing temperatures. It has a distinctive appearance, with a streamlined body and large pectoral fins, making it an efficient swimmer in its icy habitat. This species plays an important role in the marine ecosystem as both predator and prey."
    , "Erect-crested Penguin is a striking, medium-sized penguin native to the subantarctic Bounty and Antipodes Islands of New Zealand. It is easily recognized by its upright yellow crest feathers and black-and-white plumage, with a robust, reddish-orange bill. Growing to about 60 centimeters tall, these penguins are strong swimmers, feeding primarily on krill, squid, and small fish. Nesting in dense colonies on rocky terrain, they face challenges from limited breeding habitats and climate change. Classified as endangered, their population continues to decline, making conservation efforts critical for their survival."
    , "Sei Whale is a sleek, streamlined baleen whale found in oceans worldwide, favoring deep offshore waters. Reaching lengths of up to 20 meters and weighing up to 28 metric tons, it is among the fastest of all cetaceans, capable of speeds up to 50 km/h. Recognizable by its dark gray body with a lighter underside and a slightly arched dorsal fin, the Sei Whale primarily feeds on krill, small fish, and plankton. Known for its elusive behavior, it often travels alone or in small groups. Despite being protected, the species remains endangered due to past overhunting and threats from modern marine activities."
    , "North Atlantic Right Whale is a critically endangered baleen whale species found primarily along the eastern coasts of North America. Growing up to 16 meters in length and weighing up to 70 metric tons, it is distinguished by its robust body, callosities on its head, and lack of a dorsal fin. Feeding on tiny zooplankton and krill, it uses baleen plates to filter food from the water. Once heavily hunted for oil and baleen, its population now faces threats from ship strikes, entanglement in fishing gear, and habitat loss. With fewer than 350 individuals remaining, it is among the world's most endangered whales."
    , "Blue Whale is the largest animal ever known to exist, reaching lengths of up to 30 meters and weighing as much as 200 metric tons. Found in oceans worldwide, this majestic baleen whale is known for its bluish-gray coloration and slender, streamlined body. It feeds almost exclusively on krill, consuming up to 4 tons daily during feeding seasons. Despite its immense size, the Blue Whale is capable of graceful movement, swimming at speeds of up to 20 mph when necessary. Once driven to near extinction by commercial whaling, it remains endangered but is slowly recovering due to global conservation efforts."
]

var playButtonSvg = "M61.44,0c33.93,0,61.44,27.51,61.44,61.44s-27.51,61.44-61.44,61.44S0,95.37,0,61.44S27.51,0,61.44,0L61.44,0z M84.91,65.52c3.41-2.2,3.41-4.66,0-6.61L49.63,38.63c-2.78-1.75-5.69-0.72-5.61,2.92l0.11,40.98c0.24,3.94,2.49,5.02,5.8,3.19 L84.91,65.52L84.91,65.52z"
var pauseSvg = "M61.44,0c33.93,0,61.44,27.51,61.44,61.44c0,33.93-27.51,61.44-61.44,61.44S0,95.37,0,61.44 C0,27.51,27.51,0,61.44,0L61.44,0z M68.16,33.88H84.1V89l-15.94,0V33.88L68.16,33.88L68.16,33.88z M38.78,33.88h15.94V89l-15.94,0 V33.88L38.78,33.88L38.78,33.88z"
var musicSvg = "M87.9,78.04c2.74-0.48,5.33-0.4,7.6,0.13V24.82L39.05,41.03v61.95c0.03,0.34,0.05,0.69,0.05,1.03 c0,0,0,0.01,0,0.01c0,8.34-8.75,16.62-19.55,18.49C8.76,124.37,0,119.12,0,110.77c0-8.34,8.76-16.62,19.55-18.48 c4.06-0.7,7.84-0.39,10.97,0.71l0-76.26h0.47L104.04,0v85.92c0.13,0.63,0.2,1.27,0.2,1.91c0,0,0,0,0,0.01 c0,6.97-7.32,13.89-16.33,15.44c-9.02,1.56-16.33-2.83-16.33-9.8C71.57,86.51,78.88,79.59,87.9,78.04L87.9,78.04L87.9,78.04z"
var muteSvg = "M7.6,22.7c-2.91-2.12-3.56-6.2-1.44-9.12s6.2-3.56,9.11-1.44L120.2,88.64c2.91,2.12,3.55,6.2,1.43,9.12 c-2.12,2.91-6.2,3.56-9.11,1.44L7.6,22.7L7.6,22.7z M88.85,51.97V23.09l-28.42,8.16l-24.01-17.5L96.79,0v57.76L88.85,51.97 L88.85,51.97z M36.33,57.46v45.08c0.03,0.32,0.05,0.64,0.05,0.96v0.01c0,7.76-8.14,15.46-18.19,17.2C8.15,122.44,0,117.55,0,109.79 c0-7.76,8.15-15.46,18.19-17.19c3.78-0.65,7.29-0.36,10.21,0.66V51.68L36.33,57.46L36.33,57.46z M92.87,98.69 c-2.77,2.77-6.71,4.88-11.09,5.63c-8.39,1.45-15.19-2.63-15.19-9.12c-0.01-4.03,2.62-8.04,6.62-10.84L92.87,98.69L92.87,98.69z"