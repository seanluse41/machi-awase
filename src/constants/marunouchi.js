let marunouchiLine = [
    {
        name: 'Ogikubo',
        id: 1,
        type: 'metro',
        line: 'marunouchi',
        transfer: true,
        transferInfo: [
            {
                type: 'jr',
                line: 'chuo',
                name: 'Ogikubo',
                id: 0
            }
        ]
    },
    {
        name: 'Minami-asagaya',
        id: 2,
        type: 'metro',
        line: 'marunouchi',
        transfer: true,
        transferInfo: []
    },
    {
        name: 'Shin-koenji',
        id: 3,
        type: 'metro',
        line: 'marunouchi',
        transfer: false,
        transferInfo: []
    },
    {
        name: 'Higashi-koenji',
        id: 4,
        type: 'metro',
        line: 'marunouchi',
        transfer: false,
        transferInfo: []
    },
    {
        name: 'Shin-nakano',
        id: 5,
        type: 'metro',
        line: 'marunouchi',
        transfer: false,
        transferInfo: []
    },
    {
        name: 'Nakano-sakaue',
        id: 6,
        type: 'metro',
        line: 'marunouchi',
        transfer: true,
        transferInfo: [
            {
                type: 'metro',
                line: 'oedo',
                name: 'Nakano-sakaue',
                id: 30
            }
        ]
    },
    {
        name: 'Nishi-shinjuku',
        id: 7,
        type: 'metro',
        line: 'marunouchi',
        transfer: false,
        transferInfo: []
    },
    {
        name: 'Shinjuku',
        id: 8,
        type: 'metro',
        line: 'marunouchi',
        transfer: true,
        transferInfo: [
            {
                type: 'jr',
                line: 'sobu',
                name: 'Shinjuku',
                id: 10
            },
            {
                type: 'metro',
                line: 'oedo',
                name: 'Shinjuku',
                id: 27
            },
            {
                type: 'metro',
                line: 'shinjuku',
                name: 'Shinjuku',
                id: 1
            },
            {
                type: 'jr',
                line: 'yamanote',
                name: 'Shinjuku',
                id: 17
            },
            {
                type: 'jr',
                line: 'saikyo',
                name: 'Shinjuku',
                id: 12
            },
            {
                type: 'jr',
                line: 'chuo',
                name: 'Shinjuku',
                id: 5
            }
        ]
    },
    {
        name: 'Shinjuku-sanchome',
        id: 9,
        type: 'metro',
        line: 'marunouchi',
        transfer: true,
        transferInfo: [
            {
                type: 'metro',
                line: 'fukutoshin',
                name: 'Shinjuku-sanchome',
                id: 13
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
        name: 'Shinjuku-gyoenmae',
        id: 10,
        type: 'metro',
        line: 'marunouchi',
        transfer: false,
        transferInfo: []
    },
    {
        name: 'Yotsuya-sanchome',
        id: 11,
        type: 'metro',
        line: 'marunouchi',
        transfer: false,
        transferInfo: []
    },
    {
        name: 'Yotsuya',
        id: 12,
        type: 'metro',
        line: 'marunouchi',
        transfer: true,
        transferInfo: [
            {
                type: 'jr',
                line: 'sobu',
                name: 'Yotsuya',
                id: 14
            },
            {
                type: 'jr',
                line: 'chuo',
                name: 'Yotsuya',
                id: 4
            },
            {
                type: 'metro',
                line: 'namboku',
                name: 'Yotsuya',
                id: 8
            }
        ]
    },
    {
        name: 'Akasaka-mitsuke',
        id: 13,
        type: 'metro',
        line: 'marunouchi',
        transfer: true,
        transferInfo: [
            {
                type: 'metro',
                line: 'ginza',
                name: 'Akasaka-mitsuke',
                id: 5
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
        name: 'Kokkai-gijidomae',
        id: 14,
        type: 'metro',
        line: 'marunouchi',
        transfer: true,
        transferInfo: [
            {
                type: 'metro',
                line: 'chiyoda',
                name: 'Kokkai-gijidomae',
                id: 7
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
        id: 15,
        type: 'metro',
        line: 'marunouchi',
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
                line: 'hibiya',
                name: 'Kasumigaseki',
                id: 7
            }
        ]
    },
    {
        name: 'Ginza',
        id: 16,
        type: 'metro',
        line: 'marunouchi',
        transfer: true,
        transferInfo: [
            {
                type: 'metro',
                line: 'ginza',
                name: 'Ginza',
                id: 9
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
        name: 'Tokyo',
        id: 17,
        type: 'metro',
        line: 'marunouchi',
        transfer: true,
        transferInfo: [
            {
                type: 'jr',
                line: 'yamanote',
                name: 'Tokyo',
                id: 1
            },
            {
                type: 'jr',
                line: 'keihin-tohoku',
                name: 'Tokyo',
                id: 26
            },
            {
                type: 'jr',
                line: 'chuo',
                name: 'Tokyo',
                id: 1
            },
            {
                type: 'jr',
                line: 'sobu-kaisoku',
                name: 'Tokyo',
                id: 19
            },
        ]
    },
    {
        name: 'Otemachi',
        id: 18,
        type: 'metro',
        line: 'marunouchi',
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
                line: 'mita',
                name: 'Otemachi',
                id: 9
            },
        ]
    },
    {
        name: 'Awajicho',
        id: 19,
        type: 'metro',
        line: 'marunouchi',
        transfer: true,
        transferInfo: [
            {
                type: 'metro',
                line: 'chiyoda',
                name: 'Shin-ochanomizu',
                id: 12,
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
        name: 'Ochanomizu',
        id: 20,
        type: 'metro',
        line: 'marunouchi',
        transfer: true,
        transferInfo: [
            {
                type: 'jr',
                line: 'chuo',
                name: 'Ochanomizu',
                id: 3
            },
            {
                type: 'jr',
                line: 'sobu',
                name: 'Ochanomizu',
                id: 18
            }
        ]
    },
    {
        name: 'Hongo-sanchome',
        id: 21,
        type: 'metro',
        line: 'marunouchi',
        transfer: true,
        transferInfo: [
            {
                type: 'metro',
                line: 'oedo',
                name: 'Hongo-sanchome',
                id: 8
            }
        ]
    },
    {
        name: 'Korakuen',
        id: 22,
        type: 'metro',
        line: 'marunouchi',
        transfer: true,
        transferInfo: [
            {
                type: 'metro',
                line: 'namboku',
                name: 'Korakuen',
                id: 11
            },
            {
                type: 'metro',
                line: 'mita',
                name: 'Kasuga',
                id: 12
            },
            {
                type: 'metro',
                line: 'oedo',
                name: 'Kasuga',
                id: 7
            },
        ]
    },
    {
        name: 'Myogadani',
        id: 23,
        type: 'metro',
        line: 'marunouchi',
        transfer: false,
        transferInfo: []
    },
    {
        name: 'Shin-otsuka',
        id: 24,
        type: 'metro',
        line: 'marunouchi',
        transfer: false,
        transferInfo: []
    },
    {
        name: 'Ikebukuro',
        id: 25,
        type: 'metro',
        line: 'marunouchi',
        transfer: true,
        transferInfo: [
            {
                type: 'jr',
                line: 'yamanote',
                name: 'Ikebukuro',
                id: 13
            },
            {
                type: 'jr',
                line: 'saikyo',
                name: 'Ikebukuro',
                id: 12
            },
            {
                type: 'metro',
                line: 'fukutoshin',
                name: 'Ikebukuro',
                id: 9
            },
            {
                type: 'metro',
                line: 'yurakucho',
                name: 'Ikebukuro',
                id: 9
            },
        ]
    },
];
