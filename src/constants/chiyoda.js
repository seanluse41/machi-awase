export let chiyodaLine = {
    numberOfStations: 20,
    type: "metro",
    line: "chiyoda",
    totalTime: 44,
    stations: [
        {
            name: 'Yoyogi-uehara',
            id: 1,
            type: 'metro',
            line: 'chiyoda',
            previousStationTime: 0,
            nextStationTime: 3,
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Yoyogi-koen',
            id: 2,
            type: 'metro',
            line: 'chiyoda',
            previousStationTime: 3,
            nextStationTime: 2,
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Meiji-jingumae',
            id: 3,
            type: 'metro',
            line: 'chiyoda',
            previousStationTime: 2,
            nextStationTime: 1,
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'fukutoshin',
                    name: 'Meiji-jingumae',
                    id: 15
                },
                {
                    type: 'train',
                    line: 'yamanote',
                    name: 'Harajuku',
                    id: 0
                }
            ]
        },
        {
            name: 'Omote-sando',
            id: 4,
            type: 'metro',
            line: 'chiyoda',
            previousStationTime: 1,
            nextStationTime: 3,
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'ginza',
                    name: 'Omote-sando',
                    id: 2
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
            name: 'Nogizaka',
            id: 5,
            type: 'metro',
            line: 'chiyoda',
            previousStationTime: 3,
            nextStationTime: 2,
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Akasaka',
            id: 6,
            type: 'metro',
            line: 'chiyoda',
            previousStationTime: 2,
            nextStationTime: 2,
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Kokkai-gijidomae',
            id: 7,
            type: 'metro',
            line: 'chiyoda',
            previousStationTime: 2,
            nextStationTime: 2,
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'marunouchi',
                    name: 'Kokkai-gijidomae',
                    id: 14
                },
                {
                    type: 'metro',
                    line: 'ginza',
                    name: 'Tameike-sanno',
                    id: 6
                },
                {
                    type: 'metro',
                    line: 'namboku',
                    name: 'Tameike-sanno',
                    id: 6
                }
            ]
        },
        {
            name: 'Kasumigaseki',
            id: 8,
            type: 'metro',
            line: 'chiyoda',
            previousStationTime: 2,
            nextStationTime: 2,
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'marunouchi',
                    name: 'Kasumigaseki',
                    id: 15
                },
                {
                    type: 'metro',
                    line: 'hibiya',
                    name: 'Kasumigaseki',
                    id: 7
                }
            ]
        },
        {
            name: 'Hibiya',
            id: 9,
            type: 'metro',
            line: 'chiyoda',
            previousStationTime: 2,
            nextStationTime: 2,
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'yurakucho',
                    name: 'Yurakucho',
                    id: 18
                },
                {
                    type: 'metro',
                    line: 'hibiya',
                    name: 'Hibiya',
                    id: 8
                },
                {
                    type: 'metro',
                    line: 'mita',
                    name: 'Hibiya',
                    id: 8
                },
                {
                    type: 'train',
                    line: 'yamanote',
                    name: 'Hibiya',
                    id: 30
                },
                {
                    type: 'train',
                    line: 'keihin-tohoku',
                    name: 'Hibiya',
                    id: 25
                }
            ]
        },
        {
            name: 'Nijubashimae',
            id: 10,
            type: 'metro',
            line: 'chiyoda',
            previousStationTime: 2,
            nextStationTime: 1,
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Otemachi',
            id: 11,
            type: 'metro',
            line: 'chiyoda',
            previousStationTime: 1,
            nextStationTime: 3,
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'marunouchi',
                    name: 'Otemachi',
                    id: 18
                },
                {
                    type: 'metro',
                    line: 'tozai',
                    name: 'Otemachi',
                    id: 9
                },
                {
                    type: 'metro',
                    line: 'hanzomon',
                    name: 'Otemachi',
                    id: 11
                },
                {
                    type: 'metro',
                    line: 'mita',
                    name: 'Otemachi',
                    id: 9
                },
            ]
        },
        {
            name: 'Shin-ochanomizu',
            id: 12,
            type: 'metro',
            line: 'chiyoda',
            previousStationTime: 3,
            nextStationTime: 2,
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'marunouchi',
                    name: 'Awajicho',
                    id: 19
                },
                {
                    type: 'metro',
                    line: 'shinjuku',
                    name: 'Ogawamachi',
                    id: 7
                }
            ]
        },
        {
            name: 'Yushima',
            id: 13,
            type: 'metro',
            line: 'chiyoda',
            previousStationTime: 2,
            nextStationTime: 2,
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Nezu',
            id: 14,
            type: 'metro',
            line: 'chiyoda',
            previousStationTime: 2,
            nextStationTime: 2,
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Sendagi',
            id: 15,
            type: 'metro',
            line: 'chiyoda',
            previousStationTime: 2,
            nextStationTime: 2,
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Nishi-nippori',
            id: 16,
            type: 'metro',
            line: 'chiyoda',
            previousStationTime: 2,
            nextStationTime: 2,
            transfer: true,
            transferInfo: [
                {
                    type: 'train',
                    line: 'yamanote',
                    name: 'Nishi-nippori',
                    id: 0
                },
                {
                    type: 'train',
                    line: 'keihin-tohoku',
                    name: 'Nishi-nippori',
                    id: 0
                },
            ]
        },
        {
            name: 'Machiya',
            id: 17,
            type: 'metro',
            line: 'chiyoda',
            previousStationTime: 2,
            nextStationTime: 4,
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Kita-senju',
            id: 18,
            type: 'metro',
            line: 'chiyoda',
            previousStationTime: 4,
            nextStationTime: 3,
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'hibiya',
                    name: 'Kita-senju',
                    id: 22
                }
            ]
        },
        {
            name: 'Ayase',
            id: 19,
            type: 'metro',
            line: 'chiyoda',
            previousStationTime: 3,
            nextStationTime: 4,
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Kita-ayase',
            id: 20,
            type: 'metro',
            line: 'chiyoda',
            previousStationTime: 4,
            nextStationTime: 0,
            transfer: false,
            transferInfo: []
        },
    ]
};
