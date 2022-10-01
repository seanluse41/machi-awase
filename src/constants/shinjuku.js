export let shinjukuLine = [
    {
        name: 'Shinjuku',
        id: 1,
        type: 'metro',
        line: 'shinjuku',
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
                line: 'oedo',
                name: 'Shinjuku',
                id: 27
            },
            {
                type: 'metro',
                line: 'marunouchi',
                name: 'Shinjuku',
                id: 8
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
        name: 'Shinjuku-sanchome',
        id: 2,
        type: 'metro',
        line: 'shinjuku',
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
                line: 'marunouchi',
                name: 'Shinjuku-sanchome',
                id: 9
            }
        ]
    },
    {
        name: 'Akebonobashi',
        id: 3,
        type: 'metro',
        line: 'shinjuku',
        transfer: false,
        transferInfo: []
    },
    {
        name: 'Ichigaya',
        id: 4,
        type: 'metro',
        line: 'shinjuku',
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
                line: 'namboku',
                name: 'Ichigaya',
                id: 9,
            }

        ]
    },
    {
        name: 'Kudanshita',
        id: 5,
        type: 'metro',
        line: 'shinjuku',
        transfer: true,
        transferInfo: [
            {
                type: 'metro',
                line: 'tozai',
                name: 'Kudashita',
                id: 7
            },
            {
                type: 'metro',
                line: 'hanzomon',
                name: 'Kudanshita',
                id: 6
            }
        ]
    },
    {
        name: 'Jimbocho',
        id: 6,
        type: 'metro',
        line: 'shinjuku',
        transfer: true,
        transferInfo: [
            {
                type: 'metro',
                line: 'mita',
                name: 'Jimbocho',
                id: 10
            },
            {
                type: 'metro',
                line: 'hanzomon',
                name: 'Jimbocho',
                id: 7
            }
        ]
    },
    {
        name: 'Ogawamachi',
        id: 7,
        type: 'metro',
        line: 'shinjuku',
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
                line: 'marunouchi',
                name: 'Ogawamachi',
                id: 19
            }
        ]
    },
    {
        name: 'Iwamotocho',
        id: 8,
        type: 'metro',
        line: 'shinjuku',
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
                line: 'hibiya',
                name: 'Akihabara',
                id: 16
            },
        ]
    },
    {
        name: 'Bakuro-yokoyama',
        id: 9,
        type: 'metro',
        line: 'shinjuku',
        transfer: true,
        transferInfo: [
            {
                type: 'train',
                line: 'sobu-kaisoku',
                name: 'Bakurocho',
                id: 21
            },
            {
                type: 'metro',
                line: 'asakusa',
                name: 'Higashi-nihombashi',
                id: 15
            },
        ]
    },
    {
        name: 'Hamacho',
        id: 10,
        type: 'metro',
        line: 'shinjuku',
        transfer: false,
        transferInfo: []
    },
    {
        name: 'Morishita',
        id: 11,
        type: 'metro',
        line: 'shinjuku',
        transfer: true,
        transferInfo: [
            {
                type: 'metro',
                line: 'oedo',
                name: 'Morishita',
                id: 13
            },
        ]
    },
    {
        name: 'Kikukawa',
        id: 12,
        type: 'metro',
        line: 'shinjuku',
        transfer: false,
        transferInfo: []
    },
    {
        name: 'Sumiyoshi',
        id: 13,
        type: 'metro',
        line: 'shinjuku',
        transfer: true,
        transferInfo: [
            {
                type: 'metro',
                line: 'hanzomon',
                name: 'Sumiyoshi',
                id: 12
            }
        ]
    },
    {
        name: 'Nishi-ojima',
        id: 14,
        type: 'metro',
        line: 'shinjuku',
        transfer: false,
        transferInfo: []
    },
    {
        name: 'Ojima',
        id: 15,
        type: 'metro',
        line: 'shinjuku',
        transfer: false,
        transferInfo: []
    },
    {
        name: 'Higashi-ojima',
        id: 16,
        type: 'metro',
        line: 'shinjuku',
        transfer: false,
        transferInfo: []
    },
    {
        name: 'Funabori',
        id: 17,
        type: 'metro',
        line: 'shinjuku',
        transfer: false,
        transferInfo: []
    },
    {
        name: 'Ichinoe',
        id: 18,
        type: 'metro',
        line: 'shinjuku',
        transfer: false,
        transferInfo: []
    },
    {
        name: 'Mizue',
        id: 19,
        type: 'metro',
        line: 'shinjuku',
        transfer: false,
        transferInfo: []
    },
    {
        name: 'Shinozaki',
        id: 20,
        type: 'metro',
        line: 'shinjuku',
        transfer: false,
        transferInfo: []
    },
    {
        name: 'Motoyawata',
        id: 21,
        type: 'metro',
        line: 'shinjuku',
        transfer: true,
        transferInfo: [
            {
                type: 'train',
                line: 'sobu',
                name: 'Motoyawata',
                id: 28
            }
        ]
    },
];
