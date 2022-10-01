export let nambokuLine = [
    {
        name: 'Meguro',
        id: 1,
        type: 'metro',
        line: 'namboku',
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
                line: 'mita',
                name: 'Meguro',
                id: 1
            }
        ]
    },
    {
        name: 'Shirokanedai',
        id: 2,
        type: 'metro',
        line: 'namboku',
        transfer: true,
        transferInfo: [
            {
                type: 'metro',
                line: 'mita',
                name: 'Shirokanedai',
                id: 2,
            }
        ]
    },
    {
        name: 'Shirokane-takanawa',
        id: 3,
        type: 'metro',
        line: 'namboku',
        transfer: true,
        transferInfo: [
            {
                type: 'metro',
                line: 'mita',
                name: 'Shirokane-takanawa',
                id: 3
            }
        ]
    },
    {
        name: 'Azabu-juban',
        id: 4,
        type: 'metro',
        line: 'namboku',
        transfer: true,
        transferInfo: [
            {
                type: 'metro',
                line: 'oedo',
                name: 'Azabu-juban',
                id: 22
            }
        ]
    },
    {
        name: 'Roppongi-itchome',
        id: 5,
        type: 'metro',
        line: 'namboku',
        transfer: false,
        transferInfo: []
    },
    {
        name: 'Tameike-sanno',
        id: 6,
        type: 'metro',
        line: 'namboku',
        transfer: true,
        transferInfo: [
            {
                type: 'metro',
                line: 'ginza',
                name: 'Tameike-sanno',
                id: 6
            },
            {
                type: 'metro',
                line: 'marunouchi',
                name: 'Kokkai-gijidomae',
                id: 14,
            },
            {
                type: 'metro',
                line: 'chiyoda',
                name: 'Kokkai-gijidomae',
                id: 7
            }
        ]
    },
    {
        name: 'Nagatacho',
        id: 7,
        type: 'metro',
        line: 'namboku',
        transfer: true,
        transferInfo: [
            {
                type: 'metro',
                line: 'yurakucho',
                name: 'Nagatacho',
                id: 16
            },
            {
                type: 'metro',
                line: 'ginza',
                name: 'Akasaka-mitsuke',
                id: 5
            },
            {
                type: 'metro',
                line: 'hanzomon',
                name: 'Nagatacho',
                id: 4
            },
            {
                type: 'metro',
                line: 'marunouchi',
                name: 'Akasaka-mitsuke',
                id: 13
            },
        ]
    },
    {
        name: 'Yotsuya',
        id: 8,
        type: 'metro',
        line: 'namboku',
        transfer: true,
        transferInfo: [
            {
                type: 'train',
                line: 'sobu',
                name: 'Yotsuya',
                id: 0
            },
            {
                type: 'train',
                line: 'chuo',
                name: 'Yotsuya',
                id: 4
            },
            {
                type: 'metro',
                line: 'marunouchi',
                name: 'Yotsuya',
                id: 12
            }
        ]
    },
    {
        name: 'Ichigaya',
        id: 9,
        type: 'metro',
        line: 'namboku',
        transfer: true,
        transferInfo: [
            {
                type: 'train',
                line: 'sobu',
                name: 'Ichigaya',
                id: 15
            },
            {
                type: 'metro',
                line: 'yurakucho',
                name: 'Ichigaya',
                id: 14
            },
            {
                type: 'metro',
                line: 'shinjuku',
                name: 'Ichigaya',
                id: 4,
            }

        ]
    },
    {
        name: 'Iidabashi',
        id: 10,
        type: 'metro',
        line: 'namboku',
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
                line: 'oedo',
                name: 'Iidabashi',
                id: 6
            },
        ]
    },
    {
        name: 'Korakuen',
        id: 11,
        type: 'metro',
        line: 'namboku',
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
                line: 'oedo',
                name: 'Kasuga',
                id: 7
            },
        ]
    },
    {
        name: 'Todaimae',
        id: 12,
        type: 'metro',
        line: 'namboku',
        transfer: false,
        transferInfo: []
    },
    {
        name: 'Hon-komagome',
        id: 13,
        type: 'metro',
        line: 'namboku',
        transfer: false,
        transferInfo: []
    },
    {
        name: 'Komagome',
        id: 14,
        type: 'metro',
        line: 'namboku',
        transfer: true,
        transferInfo: [
            {
                type: 'train',
                line: 'yamanote',
                name: 'Komagome',
                id: 10
            }
        ]
    }, {
        name: 'Nishigahara',
        id: 15,
        type: 'metro',
        line: 'namboku',
        transfer: false,
        transferInfo: []
    },
    {
        name: 'Oji',
        id: 16,
        type: 'metro',
        line: 'namboku',
        transfer: true,
        transferInfo: [
            {
                type: 'train',
                line: 'keihin-tohoku',
                name: 'Oji',
                id: 36
            }
        ]
    }, {
        name: 'Oji-kamiya',
        id: 17,
        type: 'metro',
        line: 'namboku',
        transfer: false,
        transferInfo: []
    },
    {
        name: 'Shimo',
        id: 18,
        type: 'metro',
        line: 'namboku',
        transfer: false,
        transferInfo: []
    },
    {
        name: 'Akabane-iwabuchi',
        id: 19,
        type: 'metro',
        line: 'namboku',
        transfer: false,
        transferInfo: []
    },
];
