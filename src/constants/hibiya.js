export let hibiyaLine = {
    numberOfStations: 22,
    type: "metro",
    line: "hibiya",
    stations: [
        {
            name: 'Naka-meguro',
            id: 1,
            type: 'metro',
            line: 'hibiya',
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Ebisu',
            id: 2,
            type: 'metro',
            line: 'hibiya',
            transfer: true,
            transferInfo: [
                {
                    type: 'train',
                    line: 'yamanote',
                    name: 'Ebisu',
                    id: 21
                },
                {
                    type: 'train',
                    line: 'saikyo',
                    name: 'Ebisu',
                    id: 9
                }
            ]
        },
        {
            name: 'Hiro-o',
            id: 3,
            type: 'metro',
            line: 'hibiya',
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Roppongi',
            id: 4,
            type: 'metro',
            line: 'hibiya',
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'oedo',
                    name: 'Roppongi',
                    id: 23
                }
            ]
        },
        {
            name: 'Kamiyacho',
            id: 5,
            type: 'metro',
            line: 'hibiya',
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Toranomon',
            id: 6,
            type: 'metro',
            line: 'hibiya',
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'ginza',
                    name: 'Toranomon-hills',
                    id: 7
                }
            ]
        },
        {
            name: 'Kasumigaseki',
            id: 7,
            type: 'metro',
            line: 'hibiya',
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'chiyoda',
                    name: 'Kasumigaseki',
                    id: 8
                },
                {
                    type: 'metro',
                    line: 'marunouchi',
                    name: 'Kasumigaseki',
                    id: 15
                }
            ]
        },
        {
            name: 'Hibiya',
            id: 8,
            type: 'metro',
            line: 'hibiya',
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
                    line: 'chiyoda',
                    name: 'Hibiya',
                    id: 9
                },
                {
                    type: 'metro',
                    line: 'mita',
                    name: 'Hibiya',
                    id: 8
                },
            ]
        },
        {
            name: 'Ginza',
            id: 9,
            type: 'metro',
            line: 'hibiya',
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
                    line: 'ginza',
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
            name: 'Higashi-ginza',
            id: 10,
            type: 'metro',
            line: 'hibiya',
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'ginza',
                    name: 'Higashi-ginza',
                    id: 11
                }
            ]
        },
        {
            name: 'Tsukiji',
            id: 11,
            type: 'metro',
            line: 'hibiya',
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'yurakucho',
                    name: 'Shintomicho',
                    id: 20
                }
            ]
        },
        {
            name: 'Hatchobori',
            id: 12,
            type: 'metro',
            line: 'hibiya',
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Kayabacho',
            id: 13,
            type: 'metro',
            line: 'hibiya',
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'tozai',
                    name: 'Kayabacho',
                    id: 11
                }
            ]
        },
        {
            name: 'Ningyocho',
            id: 14,
            type: 'metro',
            line: 'hibiya',
            transfer: false,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'asakusa',
                    name: 'Ningyocho',
                    id: 14
                },
                {
                    type: 'metro',
                    line: 'hanzomon',
                    name: 'Suitengumae',
                    id: 10
                }
            ]
        },
        {
            name: 'Kodemmacho',
            id: 15,
            type: 'metro',
            line: 'hibiya',
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Akihabara',
            id: 16,
            type: 'metro',
            line: 'hibiya',
            transfer: true,
            transferInfo: [
                {
                    type: 'train',
                    line: 'yamanote',
                    name: 'Akihabara',
                    id: 3
                },
                {
                    type: 'train',
                    line: 'keihin-tohoku',
                    name: 'Akihabara',
                    id: 28
                },
                {
                    type: 'train',
                    line: 'sobu',
                    name: 'Akihabara',
                    id: 19
                },
                {
                    type: 'metro',
                    line: 'shinjuku',
                    name: 'Iwamotocho',
                    id: 8
                },
            ]
        },
        {
            name: 'Naka-okachimachi',
            id: 17,
            type: 'metro',
            line: 'hibiya',
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'oedo',
                    name: 'Ueno-okachimachi',
                    id: 9
                },
                {
                    type: 'metro',
                    line: 'ginza',
                    name: 'Ueno-hirokoji',
                    id: 15
                },
                {
                    type: 'train',
                    line: 'keihin-tohoku',
                    name: 'Okachimachi',
                    id: 29
                },
                {
                    type: 'train',
                    line: 'yamanote',
                    name: 'Okachimachi',
                    id: 4
                },
            ]
        },
        {
            name: 'Ueno',
            id: 18,
            type: 'metro',
            line: 'hibiya',
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
                    line: 'ginza',
                    name: 'Ueno',
                    id: 16
                }
            ]
        },
        {
            name: 'Iriya',
            id: 19,
            type: 'metro',
            line: 'hibiya',
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Minowa',
            id: 20,
            type: 'metro',
            line: 'hibiya',
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Minami-senju',
            id: 21,
            type: 'metro',
            line: 'hibiya',
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Kita-senju',
            id: 22,
            type: 'metro',
            line: 'hibiya',
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'chiyoda',
                    name: 'Kita-senju',
                    id: 18
                }
            ]
        },
    ]
};
