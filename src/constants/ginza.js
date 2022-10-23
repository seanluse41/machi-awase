export let ginzaLine = {
    numberOfStations: 19,
    type: "metro",
    line: "ginza",
    totalTime: 31,
    stations: [
        {
            name: 'Shibuya',
            id: 1,
            type: 'metro',
            line: 'ginza',             
            previousStationTime: 0,
            nextStationTime: 2,
            transfer: true,
            transferInfo: [
                {
                    type: 'train',
                    line: 'yamanote',
                    name: 'Shibuya',
                    id: 20
                },
                {
                    type: 'metro',
                    line: 'hanzomon',
                    name: 'Shibuya',
                    id: 1
                },
                {
                    type: 'metro',
                    line: 'fukutoshin',
                    name: 'Shibuya',
                    id: 16
                },
                {
                    type: 'train',
                    line: 'saikyo',
                    name: 'Shibuya',
                    id: 10
                },
                {
                    type: 'train',
                    line: 'den-en-toshi',
                    name: 'Shibuya',
                    id: 1
                },
            ]
        },
        {
            name: 'Omote-sando',
            id: 2,
            type: 'metro',
            line: 'ginza',             
            previousStationTime: 2,
            nextStationTime: 1,
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'chiyoda',
                    name: 'Omote-sando',
                    id: 4
                },
                {
                    type: 'metro',
                    line: 'hanzomon',
                    name: 'Omote-sando',
                    id: 2
                }
            ]
        },
        {
            name: 'Gaienmae',
            id: 3,
            type: 'metro',
            line: 'ginza',             
            previousStationTime: 1,
            nextStationTime: 2,
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Aoyama-itchome',
            id: 4,
            type: 'metro',
            line: 'ginza',             
            previousStationTime: 2,
            nextStationTime: 2,
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'hanzomon',
                    name: 'Aoyama-itchome',
                    id: 3
                },
                {
                    type: 'metro',
                    line: 'oedo',
                    name: 'Aoyama-itchome',
                    id: 24
                }
            ]
        },
        {
            name: 'Akasaka-mitsuke',
            id: 5,
            type: 'metro',
            line: 'ginza',             
            previousStationTime: 2,
            nextStationTime: 2,
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'marunouchi',
                    name: 'Akasaka-mitsuke',
                    id: 13
                },
                {
                    type: 'metro',
                    line: 'yurakucho',
                    name: 'Nagatacho',
                    id: 16
                },
                {
                    type: 'metro',
                    line: 'hanzomon',
                    name: 'Nagatacho',
                    id: 4
                },
                {
                    type: 'metro',
                    line: 'namboku',
                    name: 'Nagatacho',
                    id: 7
                },
            ]
        },
        {
            name: 'Tameike-sanno',
            id: 6,
            type: 'metro',
            line: 'ginza',             
            previousStationTime: 2,
            nextStationTime: 2,
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'namboku',
                    name: 'Tameike-sanno',
                    id: 6
                },
                {
                    type: 'metro',
                    line: 'marunouchi',
                    name: 'Kokkai-gijidomae',
                    id: 14
                },
                {
                    type: 'metro',
                    line: 'chiyoda',
                    name: 'Kokkai-gijidomae',
                    id: 7
                },
            ]
        },
        {
            name: 'Toranomon',
            id: 7,
            type: 'metro',
            line: 'ginza',             
            previousStationTime: 2,
            nextStationTime: 2,
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'hibiya',
                    name: 'Toranomon-hills',
                    id: 6
                }
            ]
        },
        {
            name: 'Shimbashi',
            id: 8,
            type: 'metro',
            line: 'ginza',             
            previousStationTime: 2,
            nextStationTime: 2,
            transfer: true,
            transferInfo: [
                {
                    type: 'train',
                    line: 'yamanote',
                    name: 'Shimbashi',
                    id: 29
                },
                {
                    type: 'train',
                    line: 'keihin-tohoku',
                    name: 'Shimbashi',
                    id: 24
                },
                {
                    type: 'metro',
                    line: 'asakusa',
                    name: 'Shimbashi',
                    id: 10
                }
            ]
        },
        {
            name: 'Ginza',
            id: 9,
            type: 'metro',
            line: 'ginza',             
            previousStationTime: 2,
            nextStationTime: 1,
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'marunouchi',
                    name: 'Ginza',
                    id: 16
                },
                {
                    type: 'metro',
                    line: 'hibiya',
                    name: 'Ginza',
                    id: 9
                },
                {
                    type: 'metro',
                    line: 'yurakucho',
                    name: 'Ginza-itchome',
                    id: 19
                }
            ]
        },
        {
            name: 'Kyobashi',
            id: 10,
            type: 'metro',
            line: 'ginza',             
            previousStationTime: 1,
            nextStationTime: 2,
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Nihombashi',
            id: 11,
            type: 'metro',
            line: 'ginza',             
            previousStationTime: 2,
            nextStationTime: 2,
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'tozai',
                    name: 'Nihombashi',
                    id: 10
                },
                {
                    type: 'metro',
                    line: 'asakusa',
                    name: 'Nihombashi',
                    id: 13
                }
            ]
        },
        {
            name: 'Mitsukoshimae',
            id: 12,
            type: 'metro',
            line: 'ginza',             
            previousStationTime: 2,
            nextStationTime: 1,
            transfer: true,
            transferInfo: [
                {
                    type: 'train',
                    line: 'sobu-kaisoku',
                    name: 'Shin-nihombashi',
                    id: 20
                },
                {
                    type: 'metro',
                    line: 'hanzomon',
                    name: 'Mitsukoshimae',
                    id: 9
                }
            ]
        },
        {
            name: 'Kanda',
            id: 13,
            type: 'metro',
            line: 'ginza',             
            previousStationTime: 1,
            nextStationTime: 2,
            transfer: true,
            transferInfo: [
                {
                    type: 'train',
                    line: 'yamanote',
                    name: 'Kanda',
                    id: 0
                },
                {
                    type: 'train',
                    line: 'keihin-tohoku',
                    name: 'Kanda',
                    id: 0
                },
                {
                    type: 'train',
                    line: 'chuo',
                    name: 'Kanda',
                    id: 0
                },
            ]
        },
        {
            name: 'Suehirocho',
            id: 14,
            type: 'metro',
            line: 'ginza',             
            previousStationTime: 2,
            nextStationTime: 1,
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Ueno-hirokoji',
            id: 15,
            type: 'metro',
            line: 'ginza',             
            previousStationTime: 1,
            nextStationTime: 2,
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'hibiya',
                    name: 'Naka-okachimachi',
                    id: 17
                },
                {
                    type: 'metro',
                    line: 'oedo',
                    name: 'Ueno-okachimachi',
                    id: 9
                }
            ]
        },
        {
            name: 'Ueno',
            id: 16,
            type: 'metro',
            line: 'ginza',             
            previousStationTime: 2,
            nextStationTime: 2,
            transfer: true,
            transferInfo: [
                {
                    type: 'train',
                    line: 'yamanote',
                    name: 'Ueno',
                    id: 5
                },
                {
                    type: 'train',
                    line: 'keihin-tohoku',
                    name: 'Ueno',
                    id: 30
                },
                {
                    type: 'metro',
                    line: 'hibiya',
                    name: 'Ueno',
                    id: 18
                }
            ]
        },
        {
            name: 'Inaricho',
            id: 17,
            type: 'metro',
            line: 'ginza',             
            previousStationTime: 2,
            nextStationTime: 1,
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Tawaramachi',
            id: 18,
            type: 'metro',
            line: 'ginza',             
            previousStationTime: 1,
            nextStationTime: 2,
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Asakusa',
            id: 19,
            type: 'metro',
            line: 'ginza',             
            previousStationTime: 2,
            nextStationTime: 0,
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'asakusa',
                    name: 'Asakusa',
                    id: 18
                }
            ]
        },
    ]
};
