export let fukutoshinLine = {
    numberOfStations: 16,
    type: "metro",
    line: "fukutoshin",
    totalTime: 36,
    stations: [
        {
            name: 'Wakoshi',
            id: 1,
            type: 'metro',
            line: 'fukutoshin',
            previousStationTime: 0,
            nextStationTime: 3,
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'yurakucho',
                    name: 'Wakoshi',
                    id: 1
                }
            ]
        },
        {
            name: 'Chikatetsu-narimasu',
            id: 2,
            type: 'metro',
            line: 'fukutoshin',
            previousStationTime: 3,
            nextStationTime: 2,
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'yurakucho',
                    name: 'Chikatestu-narimasu',
                    id: 2
                }
            ]
        },
        {
            name: 'Chikatetsu-akatsuka',
            id: 3,
            type: 'metro',
            line: 'fukutoshin',
            previousStationTime: 2,
            nextStationTime: 3,
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'yurakucho',
                    name: 'Chikatestu-narimasu',
                    id: 3
                }
            ]
        },
        {
            name: 'Heiwadai',
            id: 4,
            type: 'metro',
            line: 'fukutoshin',
            previousStationTime: 3,
            nextStationTime: 2,
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'yurakucho',
                    name: 'Heiwadai',
                    id: 4
                }
            ]
        },
        {
            name: 'Hikawadai',
            id: 5,
            type: 'metro',
            line: 'fukutoshin',
            previousStationTime: 2,
            nextStationTime: 2,
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'yurakucho',
                    name: 'Hikawadai',
                    id: 5
                }
            ]
        },
        {
            name: 'Kotake-mukaihara',
            id: 6,
            type: 'metro',
            line: 'fukutoshin',
            previousStationTime: 2,
            nextStationTime: 2,
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'yurakucho',
                    name: 'Kotake-mukaihara',
                    id: 6
                }
            ]
        },
        {
            name: 'Senkawa',
            id: 7,
            type: 'metro',
            line: 'fukutoshin',
            previousStationTime: 2,
            nextStationTime: 2,
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'yurakucho',
                    name: 'Senkawa',
                    id: 7
                }
            ]
        },
        {
            name: 'Kanamecho',
            id: 8,
            type: 'metro',
            line: 'fukutoshin',
            previousStationTime: 2,
            nextStationTime: 2,
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'yurakucho',
                    name: 'Kanamecho',
                    id: 8
                }
            ]
        },
        {
            name: 'Ikebukuro',
            id: 9,
            type: 'metro',
            line: 'fukutoshin',
            previousStationTime: 2,
            nextStationTime: 3,
            transfer: true,
            transferInfo: [
                {
                    type: 'train',
                    line: 'yamanote',
                    name: 'Ikebukuro',
                    id: 13
                },
                {
                    type: 'train',
                    line: 'saikyo',
                    name: 'Ikebukuro',
                    id: 12
                },
                {
                    type: 'metro',
                    line: 'marunouchi',
                    name: 'Ikebukuro',
                    id: 25
                },
                {
                    type: 'metro',
                    line: 'yurakucho',
                    name: 'Ikebukuro',
                    id: 9
                },
            ]
        },
        {
            name: 'Zoshigaya',
            id: 10,
            type: 'metro',
            line: 'fukutoshin',
            previousStationTime: 3,
            nextStationTime: 2,
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Nishi-waseda',
            id: 11,
            type: 'metro',
            line: 'fukutoshin',
            previousStationTime: 2,
            nextStationTime: 2,
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Higashi-shinjuku',
            id: 12,
            type: 'metro',
            line: 'fukutoshin',
            previousStationTime: 2,
            nextStationTime: 3,
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'oedo',
                    name: 'Higashi-shinjuku',
                    id: 2
                }
            ]
        },
        {
            name: 'Shinjuku-sanchome',
            id: 13,
            type: 'metro',
            line: 'fukutoshin',
            previousStationTime: 3,
            nextStationTime: 2,
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'marunouchi',
                    name: 'Shinjuku-sanchome',
                    id: 9
                },
                {
                    type: 'metro',
                    line: 'shinjuku',
                    name: 'Shinjuku-sanchome',
                    id: 2
                }
            ]
        },
        {
            name: 'Kita-sando',
            id: 14,
            type: 'metro',
            line: 'fukutoshin',
            previousStationTime: 2,
            nextStationTime: 2,
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Meiji-jingumae',
            id: 15,
            type: 'metro',
            line: 'fukutoshin',
            previousStationTime: 2,
            nextStationTime: 2,
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'chiyoda',
                    name: 'Meiji-jingumae',
                    id: 3
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
            name: 'Shibuya',
            id: 16,
            type: 'metro',
            line: 'fukutoshin',
            previousStationTime: 2,
            nextStationTime: 0,
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
                    line: 'ginza',
                    name: 'Shibuya',
                    id: 1
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
    ]
};
