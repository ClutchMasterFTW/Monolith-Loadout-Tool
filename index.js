//Global Variables
let loadouts = [
    {
        rank: "Officer",
        insignia: "images/insignias/officer.png",
        toggled: false,
        weapons: [
            {
                name: "M1911",
                price: 315,
                class: "secondary",
                image: "images/weapons/M1911.png",
                attachments: [

                ]
            },
            {
                name: "P99",
                price: 225,
                class: "secondary",
                image: "images/weapons/P99.png",
                attachments: [
                    "X2-LAM",
                    "Tundra 9MM Barrel",
                    "M-TI Sights"
                ]
            },
            {
                name: "FN Five-Seven",
                price: 270,
                class: "secondary",
                image: "images/weapons/FN Five-Seven.png",
                attachments: [
                    "X2-LAM",
                    "M-TI Sights",
                    "SAKER Suppressor"
                ]
            },
            {
                name: "Glock 17",
                price: 375,
                class: "secondary",
                image: "images/weapons/Glock 17.png",
                attachments: [
                    "X2-LAM",
                    "Tundra 9MM Barrel",
                    "M-TI Sights"
                ]
            }
        ]
    },
    {
        rank: "Detective",
        insignia: "images/insignias/officer2.png",
        toggled: false,
        weapons: [
            {
                name: "M1911",
                price: 315,
                class: "secondary",
                image: "images/weapons/M1911.png",
                attachments: [

                ]
            },
            {
                name: "FN Five-Seven",
                price: 270,
                class: "secondary",
                image: "images/weapons/FN Five-Seven.png",
                attachments: [
                    "X2-LAM",
                    "M-TI Sights",
                    "SAKER Suppressor"
                ]
            },
            {
                name: "MR96",
                price: 360,
                class: "secondary",
                image: "images/weapons/MR96.png",
                attachments: [
                    "Long Barrel MR96"
                ]
            },
            {
                name: "Desert Eagle",
                price: 360,
                class: "secondary",
                image: "images/weapons/Desert Eagle.png",
                attachments: [
                    "M-TI Sights",
                    "EoTech 552"
                ]
            },
            {
                name: "Glock 18",
                price: 315,
                class: "secondary",
                image: "images/weapons/Glock 18.png",
                attachments: [
                    "Tundra 9MM Barrel"
                ]
            },
            {
                name: "P99",
                price: 225,
                class: "secondary",
                image: "images/weapons/P99.png",
                attachments: [
                    "X2-LAM",
                    "Tundra 9MM Barrel",
                    "M-TI Sights"
                ]
            },
            {
                name: "Glock 17",
                price: 375,
                class: "secondary",
                image: "images/weapons/Glock 17.png",
                attachments: [
                    "X2-LAM",
                    "Tundra 9MM Barrel",
                    "M-TI Sights"
                ]
            }
        ]
    },
    {
        rank: "Officer II",
        insignia: "images/insignias/officer2.png",
        toggled: false,
        weapons: [
            {
                name: "M3 Super 90",
                price: 900,
                class: "shotgun",
                image: "images/weapons/M3 Super 90.png",
                attachments: [
                    "M-TI Sights",
                    "EoTech 552",
                    "ACOG Sights",
                    "Aimpoint Sight"
                ]
            },
            {
                name: "M1911",
                price: 315,
                class: "secondary",
                image: "images/weapons/M1911.png",
                attachments: [

                ]
            },
            {
                name: "P99",
                price: 225,
                class: "secondary",
                image: "images/weapons/P99.png",
                attachments: [
                    "X2-LAM",
                    "Tundra 9MM Barrel",
                    "M-TI Sights"
                ]
            },
            {
                name: "FN Five-Seven",
                price: 270,
                class: "secondary",
                image: "images/weapons/FN Five-Seven.png",
                attachments: [
                    "X2-LAM",
                    "M-TI Sights",
                    "SAKER Suppressor"
                ]
            },
            {
                name: "Glock 17",
                price: 375,
                class: "secondary",
                image: "images/weapons/Glock 17.png",
                attachments: [
                    "X2-LAM",
                    "Tundra 9MM Barrel",
                    "M-TI Sights"
                ]
            }
        ]
    },
    {
        rank: "Officer III",
        insignia: "images/insignias/officer3.png",
        toggled: false,
        weapons: [
            {
                name: "M3 Super 90",
                price: 900,
                class: "shotgun",
                image: "images/weapons/M3 Super 90.png",
                attachments: [
                    "M-TI Sights",
                    "EoTech 552",
                    "ACOG Sights",
                    "Aimpoint Sight"
                ]
            },
            {
                name: "H&K UMP .45",
                price: 517,
                class: "primary",
                image: "images/weapons/H&K UMP .45.png",
                attachments: [
                    "M-TI Sights",
                    "EoTech 552",
                    "Aimpoint Sights"
                ]
            },
            {
                name: "HK MP5",
                price: 450,
                class: "primary",
                image: "images/weapons/H&K MP5.png",
                attachments: [
                    "MP5 30 Magazine Capability",
                    "Aimpoint Sights",
                    "M-TI Sights",
                    "EoTech 552",
                    "MP5 Model K Barrel",
                    "SD Barrel",
                ]
            },
            {
                name: "M1911",
                price: 315,
                class: "secondary",
                image: "images/weapons/M1911.png",
                attachments: [

                ]
            },
            {
                name: "P99",
                price: 225,
                class: "secondary",
                image: "images/weapons/P99.png",
                attachments: [
                    "X2-LAM",
                    "Tundra 9MM Barrel",
                    "M-TI Sights"
                ]
            },
            {
                name: "FN Five-Seven",
                price: 270,
                class: "secondary",
                image: "images/weapons/FN Five-Seven.png",
                attachments: [
                    "X2-LAM",
                    "M-TI Sights",
                    "SAKER Suppressor"
                ]
            },
            {
                name: "Glock 17",
                price: 375,
                class: "secondary",
                image: "images/weapons/Glock 17.png",
                attachments: [
                    "X2-LAM",
                    "Tundra 9MM Barrel",
                    "M-TI Sights"
                ]
            }
        ]
    },
    {
        rank: "Sergeant",
        insignia: "images/insignias/sergeant.png",
        toggled: false,
        weapons: [
            {
                name: "H&K UMP .45",
                price: 517,
                class: "primary",
                image: "images/weapons/H&K UMP .45.png",
                attachments: [
                    "M-TI Sights",
                    "EoTech 552",
                    "Aimpoint Sights"
                ]
            },
            {
                name: "HK MP5",
                price: 450,
                class: "primary",
                image: "images/weapons/H&K MP5.png",
                attachments: [
                    "MP5 30 Magazine Capability",
                    "Aimpoint Sights",
                    "M-TI Sights",
                    "EoTech 552",
                    "MP5 Model K Barrel",
                    "SD Barrel",
                ]
            },
            {
                name: "M3 Super 90",
                price: 900,
                class: "shotgun",
                image: "images/weapons/M3 Super 90.png",
                attachments: [
                    "M-TI Sights",
                    "EoTech 552",
                    "ACOG Sights",
                    "Aimpoint Sight"
                ]
            },
            {
                name: "AR-15",
                price: 900,
                class: "primary",
                image: "images/weapons/AR-15.png",
                attachments: [
                    "Foregrip",
                    "RIS",
                    "ACOG Sights",
                    "Magpul Handguard",
                    "Aimpoint Sight",
                    "AR-15 Heavy Stock",
                    "AN/PEQ-15",
                    "AR-15 QUAD Magazine",
                    "SAKER Suppressor"
                ]
            },
            {
                name: "KRISS Vector",
                price: 900,
                class: "primary",
                image: "images/weapons/Kriss Vector.png",
                attachments: [
                    "M-TI Sights",
                    "EoTech 552",
                    "SAKER Suppressor",
                    "Aimpoint Sight"
                ]
            },
            {
                name: "M1911",
                price: 315,
                class: "secondary",
                image: "images/weapons/M1911.png",
                attachments: [

                ]
            },
            {
                name: "P99",
                price: 225,
                class: "secondary",
                image: "images/weapons/P99.png",
                attachments: [
                    "X2-LAM",
                    "Tundra 9MM Barrel",
                    "M-TI Sights"
                ]
            },
            {
                name: "FN Five-Seven",
                price: 270,
                class: "secondary",
                image: "images/weapons/FN Five-Seven.png",
                attachments: [
                    "X2-LAM",
                    "M-TI Sights",
                    "SAKER Suppressor"
                ]
            },
            {
                name: "Glock 17",
                price: 375,
                class: "secondary",
                image: "images/weapons/Glock 17.png",
                attachments: [
                    "X2-LAM",
                    "Tundra 9MM Barrel",
                    "M-TI Sights"
                ]
            }
        ]
    },
    {
        rank: "Sergeant II",
        insignia: "images/insignias/sergeant2.png",
        toggled: false,
        weapons: [
            {
                name: "H&K UMP .45",
                price: 517,
                class: "primary",
                image: "images/weapons/H&K UMP .45.png",
                attachments: [
                    "M-TI Sights",
                    "EoTech 552",
                    "Aimpoint Sights"
                ]
            },
            {
                name: "BT MP9",
                price: 1100,
                class: "primary",
                image: "images/weapons/BT MP9.png",
                attachments: [
                    "M-TI Sights",
                    "EoTech 552",
                    "Tundra 9MM Barrel"
                ]
            },
            {
                name: "HK MP5",
                price: 450,
                class: "primary",
                image: "images/weapons/H&K MP5.png",
                attachments: [
                    "MP5 30 Magazine Capability",
                    "Aimpoint Sights",
                    "M-TI Sights",
                    "EoTech 552",
                    "MP5 Model K Barrel",
                    "SD Barrel",
                ]
            },
            {
                name: "M3 Super 90",
                price: 900,
                class: "shotgun",
                image: "images/weapons/M3 Super 90.png",
                attachments: [
                    "M-TI Sights",
                    "EoTech 552",
                    "ACOG Sights",
                    "Aimpoint Sight"
                ]
            },
            {
                name: "AR-15",
                price: 900,
                class: "primary",
                image: "images/weapons/AR-15.png",
                attachments: [
                    "Foregrip",
                    "RIS",
                    "ACOG Sights",
                    "Magpul Handguard",
                    "Aimpoint Sight",
                    "AR-15 Heavy Stock",
                    "AN/PEQ-15",
                    "AR-15 QUAD Magazine",
                    "SAKER Suppressor"
                ]
            },
            {
                name: "KRISS Vector",
                price: 900,
                class: "primary",
                image: "images/weapons/Kriss Vector.png",
                attachments: [
                    "M-TI Sights",
                    "EoTech 552",
                    "SAKER Suppressor",
                    "Aimpoint Sight"
                ]
            },
            {
                name: "M1911",
                price: 315,
                class: "secondary",
                image: "images/weapons/M1911.png",
                attachments: [

                ]
            },
            {
                name: "P99",
                price: 225,
                class: "secondary",
                image: "images/weapons/P99.png",
                attachments: [
                    "X2-LAM",
                    "Tundra 9MM Barrel",
                    "M-TI Sights"
                ]
            },
            {
                name: "FN Five-Seven",
                price: 270,
                class: "secondary",
                image: "images/weapons/FN Five-Seven.png",
                attachments: [
                    "X2-LAM",
                    "M-TI Sights",
                    "SAKER Suppressor"
                ]
            },
            {
                name: "Glock 17",
                price: 375,
                class: "secondary",
                image: "images/weapons/Glock 17.png",
                attachments: [
                    "X2-LAM",
                    "Tundra 9MM Barrel",
                    "M-TI Sights"
                ]
            }
        ]
    },
    {
        rank: "Lieutenant",
        insignia: "images/insignias/lieutenant.png",
        toggled: false,
        weapons: [
            {
                name: "M4 Carbine",
                price: 1260,
                class: "primary",
                image: "images/weapons/M4 Carbine.png",
                attachments: [
                    "AN/PEQ-15",
                    "HK Reflex Sight"
                ]
            },
            {
                name: "H&K UMP .45",
                price: 517,
                class: "primary",
                image: "images/weapons/H&K UMP .45.png",
                attachments: [
                    "M-TI Sights",
                    "EoTech 552",
                    "Aimpoint Sights"
                ]
            },
            {
                name: "HK MP5",
                price: 450,
                class: "primary",
                image: "images/weapons/H&K MP5.png",
                attachments: [
                    "MP5 30 Magazine Capability",
                    "Aimpoint Sights",
                    "M-TI Sights",
                    "EoTech 552",
                    "MP5 Model K Barrel",
                    "SD Barrel",
                ]
            },
            {
                name: "G36C",
                price: 1125,
                class: "primary",
                image: "images/weapons/G36C.png",
                attachments: [
                    "EoTech 552",
                    "SAKER Suppressor"
                ]
            },
            {
                name: "M3 Super 90",
                price: 900,
                class: "shotgun",
                image: "images/weapons/M3 Super 90.png",
                attachments: [
                    "M-TI Sights",
                    "EoTech 552",
                    "ACOG Sights",
                    "Aimpoint Sight"
                ]
            },
            {
                name: "AR-15",
                price: 900,
                class: "primary",
                image: "images/weapons/AR-15.png",
                attachments: [
                    "Foregrip",
                    "RIS",
                    "ACOG Sights",
                    "Magpul Handguard",
                    "Aimpoint Sight",
                    "AR-15 Heavy Stock",
                    "AN/PEQ-15",
                    "AR-15 QUAD Magazine",
                    "SAKER Suppressor"
                ]
            },
            {
                name: "KRISS Vector",
                price: 900,
                class: "primary",
                image: "images/weapons/Kriss Vector.png",
                attachments: [
                    "M-TI Sights",
                    "EoTech 552",
                    "SAKER Suppressor",
                    "Aimpoint Sight"
                ]
            },
            {
                name: "M1911",
                price: 315,
                class: "secondary",
                image: "images/weapons/M1911.png",
                attachments: [

                ]
            },
            {
                name: "P99",
                price: 225,
                class: "secondary",
                image: "images/weapons/P99.png",
                attachments: [
                    "X2-LAM",
                    "Tundra 9MM Barrel",
                    "M-TI Sights"
                ]
            },
            {
                name: "FN Five-Seven",
                price: 270,
                class: "secondary",
                image: "images/weapons/FN Five-Seven.png",
                attachments: [
                    "X2-LAM",
                    "M-TI Sights",
                    "SAKER Suppressor"
                ]
            },
            {
                name: "Glock 17",
                price: 375,
                class: "secondary",
                image: "images/weapons/Glock 17.png",
                attachments: [
                    "X2-LAM",
                    "Tundra 9MM Barrel",
                    "M-TI Sights"
                ]
            }
        ]
    },
    {
        rank: "Captain",
        insignia: "images/insignias/captain.png",
        toggled: false,
        weapons: [
            {
                name: "M4 Carbine",
                price: 1260,
                class: "primary",
                image: "images/weapons/M4 Carbine.png",
                attachments: [
                    "AN/PEQ-15",
                    "HK Reflex Sight"
                ]
            },
            {
                name: "H&K UMP .45",
                price: 517,
                class: "primary",
                image: "images/weapons/H&K UMP .45.png",
                attachments: [
                    "M-TI Sights",
                    "EoTech 552",
                    "Aimpoint Sights"
                ]
            },
            {
                name: "HK MP5",
                price: 450,
                class: "primary",
                image: "images/weapons/H&K MP5.png",
                attachments: [
                    "MP5 30 Magazine Capability",
                    "Aimpoint Sights",
                    "M-TI Sights",
                    "EoTech 552",
                    "MP5 Model K Barrel",
                    "SD Barrel",
                ]
            },
            {
                name: "G36C",
                price: 1125,
                class: "primary",
                image: "images/weapons/G36C.png",
                attachments: [
                    "EoTech 552",
                    "SAKER Suppressor"
                ]
            },
            {
                name: "M3 Super 90",
                price: 900,
                class: "shotgun",
                image: "images/weapons/M3 Super 90.png",
                attachments: [
                    "M-TI Sights",
                    "EoTech 552",
                    "ACOG Sights",
                    "Aimpoint Sight"
                ]
            },
            {
                name: "AR-15",
                price: 900,
                class: "primary",
                image: "images/weapons/AR-15.png",
                attachments: [
                    "Foregrip",
                    "RIS",
                    "ACOG Sights",
                    "Magpul Handguard",
                    "Aimpoint Sight",
                    "AR-15 Heavy Stock",
                    "AN/PEQ-15",
                    "AR-15 QUAD Magazine",
                    "SAKER Suppressor"
                ]
            },
            {
                name: "KRISS Vector",
                price: 900,
                class: "primary",
                image: "images/weapons/Kriss Vector.png",
                attachments: [
                    "M-TI Sights",
                    "EoTech 552",
                    "SAKER Suppressor",
                    "Aimpoint Sight"
                ]
            },
            {
                name: "FN Five-Seven",
                price: 270,
                class: "secondary",
                image: "images/weapons/FN Five-Seven.png",
                attachments: [
                    "X2-LAM",
                    "M-TI Sights",
                    "SAKER Suppressor"
                ]
            },
            {
                name: "MR96",
                price: 360,
                class: "secondary",
                image: "images/weapons/MR96.png",
                attachments: [
                    "Long Barrel MR96"
                ]
            },
            {
                name: "P99",
                price: 225,
                class: "secondary",
                image: "images/weapons/P99.png",
                attachments: [
                    "X2-LAM",
                    "Tundra 9MM Barrel",
                    "M-TI Sights"
                ]
            },
            {
                name: "M1911",
                price: 315,
                class: "secondary",
                image: "images/weapons/M1911.png",
                attachments: [

                ]
            },
            {
                name: "Glock 17",
                price: 375,
                class: "secondary",
                image: "images/weapons/Glock 17.png",
                attachments: [
                    "X2-LAM",
                    "Tundra 9MM Barrel",
                    "M-TI Sights"
                ]
            }
        ]
    },
    {
        rank: "Chief",
        insignia: "images/insignias/chief.png",
        toggled: false,
        weapons: [
            {
                name: "M4 Carbine",
                price: 1260,
                class: "primary",
                image: "images/weapons/M4 Carbine.png",
                attachments: [
                    "AN/PEQ-15",
                    "HK Reflex Sight"
                ]
            },
            {
                name: "H&K UMP .45",
                price: 517,
                class: "primary",
                image: "images/weapons/H&K UMP .45.png",
                attachments: [
                    "M-TI Sights",
                    "EoTech 552",
                    "Aimpoint Sights"
                ]
            },
            {
                name: "HK MP5",
                price: 450,
                class: "primary",
                image: "images/weapons/H&K MP5.png",
                attachments: [
                    "MP5 30 Magazine Capability",
                    "Aimpoint Sights",
                    "M-TI Sights",
                    "EoTech 552",
                    "MP5 Model K Barrel",
                    "SD Barrel",
                ]
            },
            {
                name: "G36C",
                price: 1125,
                class: "primary",
                image: "images/weapons/G36C.png",
                attachments: [
                    "EoTech 552",
                    "SAKER Suppressor"
                ]
            },
            {
                name: "M3 Super 90",
                price: 900,
                class: "shotgun",
                image: "images/weapons/M3 Super 90.png",
                attachments: [
                    "M-TI Sights",
                    "EoTech 552",
                    "ACOG Sights",
                    "Aimpoint Sight"
                ]
            },
            {
                name: "AR-15",
                price: 900,
                class: "primary",
                image: "images/weapons/AR-15.png",
                attachments: [
                    "Foregrip",
                    "RIS",
                    "ACOG Sights",
                    "Magpul Handguard",
                    "Aimpoint Sight",
                    "AR-15 Heavy Stock",
                    "AN/PEQ-15",
                    "AR-15 QUAD Magazine",
                    "SAKER Suppressor"
                ]
            },
            {
                name: "KRISS Vector",
                price: 900,
                class: "primary",
                image: "images/weapons/Kriss Vector.png",
                attachments: [
                    "M-TI Sights",
                    "EoTech 552",
                    "SAKER Suppressor",
                    "Aimpoint Sight"
                ]
            },
            {
                name: "FN Five-Seven",
                price: 270,
                class: "secondary",
                image: "images/weapons/FN Five-Seven.png",
                attachments: [
                    "X2-LAM",
                    "M-TI Sights",
                    "SAKER Suppressor"
                ]
            },
            {
                name: "MR96",
                price: 360,
                class: "secondary",
                image: "images/weapons/MR96.png",
                attachments: [
                    "Long Barrel MR96"
                ]
            },
            {
                name: "P99",
                price: 225,
                class: "secondary",
                image: "images/weapons/P99.png",
                attachments: [
                    "X2-LAM",
                    "Tundra 9MM Barrel",
                    "M-TI Sights"
                ]
            },
            {
                name: "M1911",
                price: 315,
                class: "secondary",
                image: "images/weapons/M1911.png",
                attachments: [

                ]
            },
            {
                name: "Glock 17",
                price: 375,
                class: "secondary",
                image: "images/weapons/Glock 17.png",
                attachments: [
                    "X2-LAM",
                    "Tundra 9MM Barrel",
                    "M-TI Sights"
                ]
            }
        ]
    },
    {
        rank: "S.W.A.T Officer",
        insignia: "images/insignias/SWAT.png",
        toggled: false,
        weapons: [
            {
                name: "Glass Riot Shield",
                price: 900,
                class: "police",
                image: "images/weapons/Shield.png",
                attachments: [
                    
                ]
            },
            {
                name: "M4 Carbine",
                price: 1260,
                class: "primary",
                image: "images/weapons/M4 Carbine.png",
                attachments: [
                    "AN/PEQ-15",
                    "HK Reflex Sight"
                ]
            },
            {
                name: "G3A3",
                price: 1305,
                class: "primary",
                image: "images/weapons/G3A3.png",
                attachments: [
                    "G3A3 SG1 Scope",
                    "SAKER Suppressor",
                    "Foregrip",
                    "Aimpoint Sight"
                ]
            },
            {
                name: "HK MP5",
                price: 450,
                class: "primary",
                image: "images/weapons/H&K MP5.png",
                attachments: [
                    "MP5 30 Magazine Capability",
                    "Aimpoint Sights",
                    "M-TI Sights",
                    "EoTech 552",
                    "MP5 Model K Barrel",
                    "SD Barrel",
                ]
            },
            {
                name: "BT MP9",
                price: 1100,
                class: "primary",
                image: "images/weapons/BT MP9.png",
                attachments: [
                    "M-TI Sights",
                    "EoTech 552",
                    "Tundra 9MM Barrel"
                ]
            },
            {
                name: "M3 Super 90",
                price: 900,
                class: "shotgun",
                image: "images/weapons/M3 Super 90.png",
                attachments: [
                    "M-TI Sights",
                    "EoTech 552",
                    "ACOG Sights",
                    "Aimpoint Sight"
                ]
            },
            {
                name: "AR-15",
                price: 900,
                class: "primary",
                image: "images/weapons/AR-15.png",
                attachments: [
                    "Foregrip",
                    "RIS",
                    "ACOG Sights",
                    "Magpul Handguard",
                    "Aimpoint Sight",
                    "AR-15 Heavy Stock",
                    "AN/PEQ-15",
                    "AR-15 QUAD Magazine",
                    "SAKER Suppressor"
                ]
            },
            {
                name: "G36C",
                price: 1125,
                class: "primary",
                image: "images/weapons/G36C.png",
                attachments: [
                    "EoTech 552",
                    "SAKER Suppressor"
                ]
            },
            {
                name: "FN Five-Seven",
                price: 270,
                class: "secondary",
                image: "images/weapons/FN Five-Seven.png",
                attachments: [
                    "X2-LAM",
                    "M-TI Sights",
                    "SAKER Suppressor"
                ]
            },
            {
                name: "MR96",
                price: 360,
                class: "secondary",
                image: "images/weapons/MR96.png",
                attachments: [
                    "Long Barrel MR96"
                ]
            },
            {
                name: "P99",
                price: 225,
                class: "secondary",
                image: "images/weapons/P99.png",
                attachments: [
                    "X2-LAM",
                    "Tundra 9MM Barrel",
                    "M-TI Sights"
                ]
            },
            {
                name: "M1911",
                price: 315,
                class: "secondary",
                image: "images/weapons/M1911.png",
                attachments: [

                ]
            },
            {
                name: "Glock 17",
                price: 375,
                class: "secondary",
                image: "images/weapons/Glock 17.png",
                attachments: [
                    "X2-LAM",
                    "Tundra 9MM Barrel",
                    "M-TI Sights"
                ]
            }
        ]
    },
    {
        rank: "S.W.A.T Commander",
        insignia: "images/insignias/SWAT.png",
        toggled: false,
        weapons: [
            {
                name: "Glass Riot Shield",
                price: 900,
                class: "police",
                image: "images/weapons/Shield.png",
                attachments: [
                    
                ]
            },
            {
                name: "M4 Carbine",
                price: 1260,
                class: "primary",
                image: "images/weapons/M4 Carbine.png",
                attachments: [
                    "AN/PEQ-15",
                    "HK Reflex Sight"
                ]
            },
            {
                name: "SCAR-H",
                price: 1175,
                class: "primary",
                image: "images/weapons/SCAR-H.png",
                attachments: [
                    "EXT RIS",
                    "AN/PEQ-15",
                    "Foregrip",
                    "EoTech 552",
                    "M203 GL",
                    "SAKER Suppressor"
                ]
            },
            {
                name: "HK MP5",
                price: 450,
                class: "primary",
                image: "images/weapons/H&K MP5.png",
                attachments: [
                    "MP5 30 Magazine Capability",
                    "Aimpoint Sights",
                    "M-TI Sights",
                    "EoTech 552",
                    "MP5 Model K Barrel",
                    "SD Barrel",
                ]
            },
            {
                name: "G3A3",
                price: 1305,
                class: "primary",
                image: "images/weapons/G3A3.png",
                attachments: [
                    "G3A3 SG1 Scope",
                    "SAKER Suppressor",
                    "Foregrip",
                    "Aimpoint Sight"
                ]
            },
            {
                name: "M3 Super 90",
                price: 900,
                class: "shotgun",
                image: "images/weapons/M3 Super 90.png",
                attachments: [
                    "M-TI Sights",
                    "EoTech 552",
                    "ACOG Sights",
                    "Aimpoint Sight"
                ]
            },
            {
                name: "AR-15",
                price: 900,
                class: "primary",
                image: "images/weapons/AR-15.png",
                attachments: [
                    "Foregrip",
                    "RIS",
                    "ACOG Sights",
                    "Magpul Handguard",
                    "Aimpoint Sight",
                    "AR-15 Heavy Stock",
                    "AN/PEQ-15",
                    "AR-15 QUAD Magazine",
                    "SAKER Suppressor"
                ]
            },
            {
                name: "BT MP9",
                price: 1100,
                class: "primary",
                image: "images/weapons/BT MP9.png",
                attachments: [
                    "M-TI Sights",
                    "EoTech 552",
                    "Tundra 9MM Barrel"
                ]
            },
            {
                name: "FN Five-Seven",
                price: 270,
                class: "secondary",
                image: "images/weapons/FN Five-Seven.png",
                attachments: [
                    "X2-LAM",
                    "M-TI Sights",
                    "SAKER Suppressor"
                ]
            },
            {
                name: "MR96",
                price: 360,
                class: "secondary",
                image: "images/weapons/MR96.png",
                attachments: [
                    "Long Barrel MR96"
                ]
            },
            {
                name: "P99",
                price: 225,
                class: "secondary",
                image: "images/weapons/P99.png",
                attachments: [
                    "X2-LAM",
                    "Tundra 9MM Barrel",
                    "M-TI Sights"
                ]
            },
            {
                name: "M1911",
                price: 315,
                class: "secondary",
                image: "images/weapons/M1911.png",
                attachments: [

                ]
            },
            {
                name: "Glock 17",
                price: 375,
                class: "secondary",
                image: "images/weapons/Glock 17.png",
                attachments: [
                    "X2-LAM",
                    "Tundra 9MM Barrel",
                    "M-TI Sights"
                ]
            }
        ]
    },
    {
        rank: "S.W.A.T Sniper",
        insignia: "images/insignias/SWAT.png",
        toggled: false,
        weapons: [
            {
                name: "Barrett .50 Cal",
                price: 3000,
                class: "police",
                image: "images/weapons/BMG-50.png",
                attachments: [
                    ".50 Cal Scope",
                    ".50 Cal Bipod"
                ]
            },
            {
                name: "BT MP9",
                price: 1100,
                class: "primary",
                image: "images/weapons/BT MP9.png",
                attachments: [
                    "M-TI Sights",
                    "EoTech 552",
                    "Tundra 9MM Barrel"
                ]
            },
            {
                name: "G3A3",
                price: 1305,
                class: "primary",
                image: "images/weapons/G3A3.png",
                attachments: [
                    "G3A3 SG1 Scope",
                    "SAKER Suppressor",
                    "Foregrip",
                    "Aimpoint Sight"
                ]
            },
            {
                name: "Glass Riot Shield",
                price: 900,
                class: "police",
                image: "images/weapons/Shield.png",
                attachments: [
                    
                ]
            },
            {
                name: "M4 Carbine",
                price: 1260,
                class: "primary",
                image: "images/weapons/M4 Carbine.png",
                attachments: [
                    "AN/PEQ-15",
                    "HK Reflex Sight"
                ]
            },
            {
                name: "FN Five-Seven",
                price: 270,
                class: "secondary",
                image: "images/weapons/FN Five-Seven.png",
                attachments: [
                    "X2-LAM",
                    "M-TI Sights",
                    "SAKER Suppressor"
                ]
            },
            {
                name: "MR96",
                price: 360,
                class: "secondary",
                image: "images/weapons/MR96.png",
                attachments: [
                    "Long Barrel MR96"
                ]
            },
            {
                name: "P99",
                price: 225,
                class: "secondary",
                image: "images/weapons/P99.png",
                attachments: [
                    "X2-LAM",
                    "Tundra 9MM Barrel",
                    "M-TI Sights"
                ]
            },
            {
                name: "M1911",
                price: 315,
                class: "secondary",
                image: "images/weapons/M1911.png",
                attachments: [

                ]
            },
            {
                name: "Glock 17",
                price: 375,
                class: "secondary",
                image: "images/weapons/Glock 17.png",
                attachments: [
                    "X2-LAM",
                    "Tundra 9MM Barrel",
                    "M-TI Sights"
                ]
            }
        ]
    }
];

for(i = 0; i < loadouts.length; i++) {
    let $mainContainer = document.createElement("div");
    $mainContainer.id = "main-container" + i;
    $($mainContainer).addClass("loadout-container-main");
    $("#content").append($mainContainer)

    let $index = i;
    let $container = document.createElement("div");
    let $image = document.createElement("img");
    $($image).attr("src", loadouts[i].insignia).addClass("loadout-image");
    $image.id = "image" + i;
    $($container).append($image);
    $($mainContainer).append($container);
    $($container).addClass("loadout-container").attr("title", "Click to expand " + loadouts[i].rank + " loadout.").html($($container).html() + loadouts[i].rank).click(() => {
        //On container click:
        if(loadouts[$index].toggled == false) {
            $($container).css("height", "50px").css("font-size", "125%");
            $($container).attr("title", "Click to retract " + loadouts[$index].rank + " loadout.");
            $("#image" + $index).css("max-height", "25px");

            displayLoadout($index, true);

            loadouts[$index].toggled = true;
        } else if(loadouts[$index].toggled == true) {
            $($container).css("height", "100px").css("font-size", "175%");
            $($container).attr("title", "Click to expand " + loadouts[$index].rank + " loadout.");
            $("#image" + $index).css("max-height", "50px");

            displayLoadout($index, false);

            loadouts[$index].toggled = false;
        }
    });
}

function displayLoadout($rank, $case) {
    if($case == true) {
        //Show
        for(i = 0; i < loadouts[$rank].weapons.length; i++) {
            let $container = document.createElement("div");
            $container.id = "container-" + $rank + "-" + i;
            $($container).addClass("weapon-container");

            let $image = document.createElement("img");
            $($image).addClass("weapon-image").attr("src", loadouts[$rank].weapons[i].image).attr("title", loadouts[$rank].weapons[i].name);
            switch(loadouts[$rank].weapons[i].class) {
                case "primary":
                    $($image).css("background-image", "linear-gradient(135deg, rgba(252, 182, 95, 0.1), rgb(252, 182, 95))").css("border", "2px solid rgb(255, 140, 0)");
                    break;
                case "secondary":
                    $($image).css("background-image", "linear-gradient(135deg, rgba(87, 142, 214, 0.1), rgb(87, 142, 214))").css("border", "2px solid rgb(0, 110, 255)");
                    break;
                case "shotgun":
                    $($image).css("background-image", "linear-gradient(135deg, rgba(183, 112, 255, 0.1), rgb(183, 112, 255))").css("border", "2px solid rgb(127, 0, 255)");
                    break;
                case "police":
                    $($image).css("background-image", "linear-gradient(135deg, rgba(124, 135, 255, 0.1), rgb(124, 135, 255)").css("border", "2px solid rgb(0, 21, 255)");
                    break;
            }

            let $infoContainer = document.createElement("div");
            $($infoContainer).addClass("weapon-info-container");

            let $name = document.createElement("div");
            $($name).addClass("weapon-name").html(loadouts[$rank].weapons[i].name);

            let $price = document.createElement("div");
            $($price).addClass("weapon-price").html("$" + numberWithCommas(loadouts[$rank].weapons[i].price));

            let $attachmentsMainContainer = document.createElement("div");
            $($attachmentsMainContainer).addClass("attachments-main-container");

            let $attachmentsContainer = document.createElement("div");
            $($attachmentsContainer).addClass("attachments-container");

            $("#main-container" + $rank).append($container);
            $($container).append($image);
            $($container).append($infoContainer);
            $($infoContainer).append($name);
            $($infoContainer).append($price);
            $($container).append($attachmentsMainContainer);
            $($attachmentsMainContainer).append($attachmentsContainer);

            for(j = 0; j < loadouts[$rank].weapons[i].attachments.length; j++) {
                let $attachment = document.createElement("div");
                $($attachment).addClass("attachment").html(loadouts[$rank].weapons[i].attachments[j]).attr("title", loadouts[$rank].weapons[i].attachments[j]);

                $($attachmentsContainer).append($attachment);
            }
        }
    } else if($case == false) {
        //Hide
        for(i = 0; i < loadouts[$rank].weapons.length; i++) {
            $("#container-" + $rank + "-" + i);

            $("#container-" + $rank + "-" + i).remove();
        }
    }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}