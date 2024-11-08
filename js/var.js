var animalList = ["vaquita", "marin_otter", "hawaii_seal","jp_shark","oren_stork","white_shark","smol_saw","eu_eel","blue_tuna","man_ray","gharial","hawk_turtle","pela_shark","india_dolphin","tri_alba","icefish","penguin","sei_whale","n_right_whale","blue_whale"]
var animalNames = ["Vaquita", "Marine Otter", "Hawaiian Monk Seal","Japanese Angel Shark","Oriental Stork","Oceanic White Tip Shark","Smalltooth Sawfish","European Eel","Atlantic Bluefin Tuna","Oceanic Manta Ray","Gharial","Hawksbill Turtle","Pelagic Thresher Shark","Indian Ocean Humpback Dolphin","Tristan Albatross","South Georgia Icefish","Erect-crested Penguin","Sei Whale","North Atlantic Right Whale","Blue Whale"]
var animalScientificName = ["Phocoena sinus", "Strigops habroptilus"]

var animalDetail1 = ["The greatest threat to the remaining vaquita is incidental death caused by fishing gear.",
    "This glorious hornbill uplisted 3 levels from Near Threatened to <span>Critically endangered</span> in late 2015."
]
var animalDetail2 = ["Vaquitas are known to die in gillnets set for sharks, rays, mackerels and chano, as well as in <span>illegal and occasionally permitted</span> gillnet sets for an endangered <i>fish called Totoaba.</i> ",
    "Its highly-prized casque is unique in that it is almost completely solid and <span>rich in ivory</span> &ndash; leading to excessive hunting in recent years which is set to increase, with China the largest consumer of the casque. "
]
var animalDetail3 = ["It is believed that about 30 vaquitas are <br/>lost to these threats each year.",
    "Logging and agricultural conversion is contributing to the ominous pressure of hunting, and restoration is complicated further by the hornbill&rsquo;s <span>slow reproductive cycle</span>."
]

var playButtonSvg = "M61.44,0c33.93,0,61.44,27.51,61.44,61.44s-27.51,61.44-61.44,61.44S0,95.37,0,61.44S27.51,0,61.44,0L61.44,0z M84.91,65.52c3.41-2.2,3.41-4.66,0-6.61L49.63,38.63c-2.78-1.75-5.69-0.72-5.61,2.92l0.11,40.98c0.24,3.94,2.49,5.02,5.8,3.19 L84.91,65.52L84.91,65.52z"
var pauseSvg = "M61.44,0c33.93,0,61.44,27.51,61.44,61.44c0,33.93-27.51,61.44-61.44,61.44S0,95.37,0,61.44 C0,27.51,27.51,0,61.44,0L61.44,0z M68.16,33.88H84.1V89l-15.94,0V33.88L68.16,33.88L68.16,33.88z M38.78,33.88h15.94V89l-15.94,0 V33.88L38.78,33.88L38.78,33.88z"
var musicSvg = "M87.9,78.04c2.74-0.48,5.33-0.4,7.6,0.13V24.82L39.05,41.03v61.95c0.03,0.34,0.05,0.69,0.05,1.03 c0,0,0,0.01,0,0.01c0,8.34-8.75,16.62-19.55,18.49C8.76,124.37,0,119.12,0,110.77c0-8.34,8.76-16.62,19.55-18.48 c4.06-0.7,7.84-0.39,10.97,0.71l0-76.26h0.47L104.04,0v85.92c0.13,0.63,0.2,1.27,0.2,1.91c0,0,0,0,0,0.01 c0,6.97-7.32,13.89-16.33,15.44c-9.02,1.56-16.33-2.83-16.33-9.8C71.57,86.51,78.88,79.59,87.9,78.04L87.9,78.04L87.9,78.04z"
var muteSvg = "M7.6,22.7c-2.91-2.12-3.56-6.2-1.44-9.12s6.2-3.56,9.11-1.44L120.2,88.64c2.91,2.12,3.55,6.2,1.43,9.12 c-2.12,2.91-6.2,3.56-9.11,1.44L7.6,22.7L7.6,22.7z M88.85,51.97V23.09l-28.42,8.16l-24.01-17.5L96.79,0v57.76L88.85,51.97 L88.85,51.97z M36.33,57.46v45.08c0.03,0.32,0.05,0.64,0.05,0.96v0.01c0,7.76-8.14,15.46-18.19,17.2C8.15,122.44,0,117.55,0,109.79 c0-7.76,8.15-15.46,18.19-17.19c3.78-0.65,7.29-0.36,10.21,0.66V51.68L36.33,57.46L36.33,57.46z M92.87,98.69 c-2.77,2.77-6.71,4.88-11.09,5.63c-8.39,1.45-15.19-2.63-15.19-9.12c-0.01-4.03,2.62-8.04,6.62-10.84L92.87,98.69L92.87,98.69z"