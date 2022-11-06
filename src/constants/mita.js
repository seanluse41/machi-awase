export let mitaLine = {
    numberOfStations: 27,
    type: "metro",
    line: "mita",
    stations: [
        {
            name: 'Meguro',
            id: 1,
            type: 'metro',
            line: 'mita',
            previousStationTime: 0,
            nextStationTime: 2,
            transfer: true,
            transferInfo: [
                {
                    type: 'train',
                    line: 'yamanote',
                    name: 'Meguro',
                    id: 22
                },
                {
                    type: 'metro',
                    line: 'namboku',
                    name: 'Meguro',
                    id: 1
                }
            ]
        },
        {
            name: 'Shirokanedai',
            id: 2,
            type: 'metro',
            line: 'mita',
            previousStationTime: 2,
            nextStationTime: 2,
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'namboku',
                    name: 'Shirokanedai',
                    id: 2,
                }
            ]
        },
        {
            name: 'Shirokane-takanawa',
            id: 3,
            type: 'metro',
            line: 'mita',
            previousStationTime: 2,
            nextStationTime: 3,
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'namboku',
                    name: 'Shirokane-takanawa',
                    id: 3
                }
            ]
        },
        {
            name: 'Mita',
            id: 4,
            type: 'metro',
            line: 'mita',
            previousStationTime: 3,
            nextStationTime: 2,
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'asakusa',
                    name: 'Mita',
                    id: 8
                },
                {
                    type: 'train',
                    line: 'yamanote',
                    name: 'Tamachi',
                    id: 27
                },
                {
                    type: 'train',
                    line: 'keihin-tohoku',
                    name: 'Tamachi',
                    id: 22
                }
            ]
        },
        {
            name: 'Shibakoen',
            id: 5,
            type: 'metro',
            line: 'mita',
            previousStationTime: 2,
            nextStationTime: 1,
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Onarimon',
            id: 6,
            type: 'metro',
            line: 'mita',
            previousStationTime: 1,
            nextStationTime: 2,
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Uchisaiwaicho',
            id: 7,
            type: 'metro',
            line: 'mita',
            previousStationTime: 2,
            nextStationTime: 2,
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Hibiya',
            id: 8,
            type: 'metro',
            line: 'mita',
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
                    line: 'chiyoda',
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
            name: 'Otemachi',
            id: 9,
            type: 'metro',
            line: 'mita',
            previousStationTime: 2,
            nextStationTime: 3,
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'chiyoda',
                    name: 'Otemachi',
                    id: 11
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
                    line: 'marunouchi',
                    name: 'Otemachi',
                    id: 18
                },
            ]
        },
        {
            name: 'Jimbocho',
            id: 10,
            type: 'metro',
            line: 'mita',
            previousStationTime: 3,
            nextStationTime: 2,
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'hanzomon',
                    name: 'Jimbocho',
                    id: 7
                },
                {
                    type: 'metro',
                    line: 'shinjuku',
                    name: 'Jimbocho',
                    id: 6
                }
            ]
        },
        {
            name: 'Suidobashi',
            id: 11,
            type: 'metro',
            line: 'mita',
            previousStationTime: 2,
            nextStationTime: 2,
            transfer: true,
            transferInfo: [
                {
                    type: 'train',
                    line: 'sobu',
                    name: 'Suidobashi',
                    id: 17
                },
            ]
        },
        {
            name: 'Kasuga',
            id: 12,
            type: 'metro',
            line: 'mita',
            previousStationTime: 2,
            nextStationTime: 2,
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'marunouchi',
                    name: 'Korakuen',
                    id: 22
                },
                {
                    type: 'metro',
                    line: 'oedo',
                    name: 'Kasuga',
                    id: 7
                },
                {
                    type: 'metro',
                    line: 'namboku',
                    name: 'Korakuen',
                    id: 11
                },
            ]
        },
        {
            name: 'Hakusan',
            id: 13,
            type: 'metro',
            line: 'mita',
            previousStationTime: 2,
            nextStationTime: 2,
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Sengoku',
            id: 14,
            type: 'metro',
            line: 'mita',
            previousStationTime: 2,
            nextStationTime: 2,
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Sugamo',
            id: 15,
            type: 'metro',
            line: 'mita',
            previousStationTime: 2,
            nextStationTime: 2,
            transfer: true,
            transferInfo: [
                {
                    type: 'train',
                    line: 'yamanote',
                    name: 'Sugamo',
                    id: 11
                }
            ]
        }, {
            name: 'Nishi-sugamo',
            id: 16,
            type: 'metro',
            line: 'mita',
            previousStationTime: 2,
            nextStationTime: 2,
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Shin-itabashi',
            id: 17,
            type: 'metro',
            line: 'mita',
            previousStationTime: 2,
            nextStationTime: 2,
            transfer: true,
            transferInfo: [
                {
                    type: 'train',
                    line: 'saikyo',
                    name: 'Itabashi',
                    id: 13
                }
            ]
        }, {
            name: 'Itabashikyuyakushomae',
            id: 18,
            type: 'metro',
            line: 'mita',
            previousStationTime: 2,
            nextStationTime: 2,
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Itabashihoncho',
            id: 19,
            type: 'metro',
            line: 'mita',
            previousStationTime: 2,
            nextStationTime: 1,
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Motohasunuma',
            id: 20,
            type: 'metro',
            line: 'mita',
            previousStationTime: 1,
            nextStationTime: 2,
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Shimura-sakaue',
            id: 21,
            type: 'metro',
            line: 'mita',
            previousStationTime: 2,
            nextStationTime: 2,
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Shimura-sanchome',
            id: 22,
            type: 'metro',
            line: 'mita',
            previousStationTime: 2,
            nextStationTime: 2,
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Hasune',
            id: 23,
            type: 'metro',
            line: 'mita',
            previousStationTime: 2,
            nextStationTime: 2,
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Nishidai',
            id: 24,
            type: 'metro',
            line: 'mita',
            previousStationTime: 2,
            nextStationTime: 2,
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Takashimadaira',
            id: 25,
            type: 'metro',
            line: 'mita',
            previousStationTime: 2,
            nextStationTime: 2,
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Shin-takashimadaira',
            id: 26,
            type: 'metro',
            line: 'mita',
            previousStationTime: 2,
            nextStationTime: 2,
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Nishi-takashimadaira',
            id: 27,
            type: 'metro',
            line: 'mita',
            previousStationTime: 2,
            nextStationTime: 0,
            transfer: false,
            transferInfo: []
        },
    ]
};
