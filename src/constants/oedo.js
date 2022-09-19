let oedoLine = [
    {
        name: 'Shinjuku-nishiguchi',
        id: 1,
        type: 'metro',
        line: 'oedo',
        transfer: true,
        transferInfo: [
            {
                type: 'train',
                line: 'sobu',
                name: 'Shinjuku',
                id: 10
            },
            {
                type: 'metro',
                line: 'marunouchi',
                name: 'Shinjuku-nishiguchi',
                id: 8
            },
            {
                type: 'metro',
                line: 'shinjuku',
                name: 'Shinjuku',
                id: 1
            },
            {
                type: 'train',
                line: 'yamanote',
                name: 'Shinjuku',
                id: 17
            },
            {
                type: 'train',
                line: 'saikyo',
                name: 'Shinjuku',
                id: 12
            },
            {
                type: 'train',
                line: 'chuo',
                name: 'Shinjuku',
                id: 5
            }
        ]
    },
    {
        name: 'Higashi-shinjuku',
        id: 2,
        type: 'metro',
        line: 'oedo',
        transfer: true,
        transferInfo: [
            {
                type: 'metro',
                line: 'fukutoshin',
                name: 'Higashi-shinjuku',
                id: 12
            }
        ]
    },
    {
        name: 'Wakamatsu-kawada',
        id: 3,
        type: 'metro',
        line: 'oedo',
        transfer: false,
        transferInfo: []
    },
    {
        name: 'Ushigome-yanagicho',
        id: 4,
        type: 'metro',
        line: 'oedo',
        transfer: false,
        transferInfo: []
    },
    {
        name: 'Ushigome-kagurazaka',
        id: 5,
        type: 'metro',
        line: 'oedo',
        transfer: false,
        transferInfo: []
    },
    {
        name: 'Iidabashi',
        id: 6,
        type: 'metro',
        line: 'oedo',
        transfer: true,
        transferInfo: [
            {
                type: 'train',
                line: 'sobu',
                name: 'Iidabashi',
                id: 16
            },
            {
                type: 'metro',
                line: 'tozai',
                name: 'Iidabashi',
                id: 6
            },
            {
                type: 'metro',
                line: 'yurakucho',
                name: 'Iidabashi',
                id: 13
            },
            {
                type: 'metro',
                line: 'namboku',
                name: 'Iidabashi',
                id: 10
            },
        ]
    },
    {
        name: 'Kasuga',
        id: 7,
        type: 'metro',
        line: 'oedo',
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
                line: 'mita',
                name: 'Kasuga',
                id: 12
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
        name: 'Hongo-sanchome',
        id: 8,
        type: 'metro',
        line: 'oedo',
        transfer: true,
        transferInfo: [
            {
                type: 'metro',
                line: 'marunouchi',
                name: 'Hongo-sanchome',
                id: 21
            }
        ]
    },
    {
        name: 'Ueno-okachimachi',
        id: 9,
        type: 'metro',
        line: 'oedo',
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
                line: 'ginza',
                name: 'Ueno-hirokoji',
                id: 15
            }
        ]
    },
    {
        name: 'Shin-okachimachi',
        id: 10,
        type: 'metro',
        line: 'oedo',
        transfer: false,
        transferInfo: []
    },
    {
        name: 'Kuramae',
        id: 11,
        type: 'metro',
        line: 'oedo',
        transfer: true,
        transferInfo: [
            {
                type: 'metro',
                line: 'asakusa',
                name: 'Kuramae',
                id: 17
            }
        ]
    },
    {
        name: 'Ryogoku',
        id: 12,
        type: 'metro',
        line: 'oedo',
        transfer: true,
        transferInfo: [
            {
                type: 'train',
                line: 'sobu',
                name: 'Ryogoku',
                id: 21
            }
        ]
    },
    {
        name: 'Morishita',
        id: 13,
        type: 'metro',
        line: 'oedo',
        transfer: true,
        transferInfo: [
            {
                type: 'metro',
                line: 'shinjuku',
                name: 'Morishita',
                id: 11
            },
        ]
    },
    {
        name: 'Kiyosumi-shirakawa',
        id: 14,
        type: 'metro',
        line: 'oedo',
        transfer: true,
        transferInfo: [
            {
                type: 'metro',
                line: 'hanzomon',
                name: 'Kiyosumi-shirakawa',
                id: 11
            }
        ]
    },
    {
        name: 'Monzen-nakacho',
        id: 15,
        type: 'metro',
        line: 'oedo',
        transfer: true,
        transferInfo: [
            {
                type: 'metro',
                line: 'tozai',
                name: 'Monzen-nakacho',
                id: 12
            }
        ]
    },
    {
        name: 'Tsukishima',
        id: 16,
        type: 'metro',
        line: 'oedo',
        transfer: true,
        transferInfo: [
            {
                type: 'metro',
                line: 'yurakucho',
                name: 'Tsukishima',
                id: 21
            }
        ]
    },
    {
        name: 'Kachidoki',
        id: 17,
        type: 'metro',
        line: 'oedo',
        transfer: false,
        transferInfo: []
    },
    {
        name: 'Tsukijishijo',
        id: 18,
        type: 'metro',
        line: 'oedo',
        transfer: false,
        transferInfo: []
    },
    {
        name: 'Shiodome',
        id: 19,
        type: 'metro',
        line: 'oedo',
        transfer: false,
        transferInfo: []
    },
    {
        name: 'Daimon',
        id: 20,
        type: 'metro',
        line: 'oedo',
        transfer: true,
        transferInfo: [
            {
                type: 'metro',
                line: 'asakusa',
                name: 'Daimon',
                id: 9
            },
            {
                type: 'train',
                line: 'yamanote',
                name: 'Hamamatsucho',
                id: 28
            },
            {
                type: 'train',
                line: 'keihin-tohoku',
                name: 'Hamamatsucho',
                id: 23
            }
        ]
    },
    {
        name: 'Akabanebashi',
        id: 21,
        type: 'metro',
        line: 'oedo',
        transfer: false,
        transferInfo: []
    },
    {
        name: 'Azabu-juban',
        id: 22,
        type: 'metro',
        line: 'oedo',
        transfer: true,
        transferInfo: [
            {
                type: 'metro',
                line: 'namboku',
                name: 'Azabu-juban',
                id: 4
            }
        ]
    },
    {
        name: 'Roppongi',
        id: 23,
        type: 'metro',
        line: 'oedo',
        transfer: true,
        transferInfo: [
            {
                type: 'metro',
                line: 'hibiya',
                name: 'Roppongi',
                id: 4
            }
        ]
    },
    {
        name: 'Aoyama-itchome',
        id: 24,
        type: 'metro',
        line: 'oedo',
        transfer: true,
        transferInfo: [
            {
                type: 'metro',
                line: 'ginza',
                name: 'Aoyama-itchome',
                id: 4
            },
            {
                type: 'metro',
                line: 'hanzomon',
                name: 'Aoyama-itchome',
                id: 3
            }
        ]
    },
    {
        name: 'Kokuritsu-kyogijo',
        id: 25,
        type: 'metro',
        line: 'oedo',
        transfer: true,
        transferInfo: [
            {
                type: 'train',
                line: 'sobu',
                name: 'Sendagaya',
                id: 12
            }
        ]
    },
    {
        name: 'Yoyogi',
        id: 26,
        type: 'metro',
        line: 'oedo',
        transfer: true,
        transferInfo: [
            {
                type: 'train',
                line: 'sobu',
                name: 'Yoyogi',
                id: 11
            },
            {
                type: 'train',
                line: 'yamanote',
                name: 'Yoyogi',
                id: 18
            },
        ]
    },
    {
        name: 'Shinjuku',
        id: 27,
        type: 'metro',
        line: 'oedo',
        transfer: true,
        transferInfo: [
            {
                type: 'metro',
                line: 'oedo',
                name: 'Shinjuku-nishiguchi',
                id: 1
            },
            {
                type: 'train',
                line: 'sobu',
                name: 'Shinjuku',
                id: 10
            },
            {
                type: 'metro',
                line: 'marunouchi',
                name: 'Shinjuku',
                id: 8
            },
            {
                type: 'metro',
                line: 'shinjuku',
                name: 'Shinjuku',
                id: 1
            },
            {
                type: 'train',
                line: 'yamanote',
                name: 'Shinjuku',
                id: 17
            },
            {
                type: 'train',
                line: 'saikyo',
                name: 'Shinjuku',
                id: 12
            },
            {
                type: 'train',
                line: 'chuo',
                name: 'Shinjuku',
                id: 5
            }
        ]
    },
];
