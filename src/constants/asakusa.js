export let asakusaLine =
{
    numberOfStations: 20,
    type: "metro",
    line: "asakusa",
    stations: [
        {
            name: 'Nishi-magome',
            id: 1,
            type: 'metro',
            line: 'asakusa',
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Magome',
            id: 2,
            type: 'metro',
            line: 'asakusa',
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Nakanobu',
            id: 3,
            type: 'metro',
            line: 'asakusa',
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Togoshi',
            id: 4,
            type: 'metro',
            line: 'asakusa',
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Gotanda',
            id: 5,
            type: 'metro',
            line: 'asakusa',
            transfer: true,
            transferInfo: [
                {
                    type: 'train',
                    line: 'yamanote',
                    name: 'Gotanda',
                    id: 23
                },
            ]
        },
        {
            name: 'Takanawadai',
            id: 6,
            type: 'metro',
            line: 'asakusa',
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Sengakuji',
            id: 7,
            type: 'metro',
            line: 'asakusa',
            transfer: true,
            transferInfo: [
                {
                    type: 'train',
                    line: 'yamanote',
                    name: 'Takanawa Gateway',
                    id: 26
                },
                {
                    type: 'train',
                    line: 'keihin-tohoku',
                    name: 'Takanawa Gateway',
                    id: 21
                },
            ]
        },
        {
            name: 'Mita',
            id: 8,
            type: 'metro',
            line: 'asakusa',
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'mita',
                    name: 'Mita',
                    id: 4
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
            name: 'Daimon',
            id: 9,
            type: 'metro',
            line: 'asakusa',
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'oedo',
                    name: 'Daimon',
                    id: 20
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
            name: 'Shimbashi',
            id: 10,
            type: 'metro',
            line: 'asakusa',
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
                    line: 'ginza',
                    name: 'Shimbashi',
                    id: 8
                }
            ]
        },
        {
            name: 'Higashi-ginza',
            id: 11,
            type: 'metro',
            line: 'asakusa',
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'hibiya',
                    name: 'Higashi-ginza',
                    id: 10
                }
            ]
        },
        {
            name: 'Takaracho',
            id: 12,
            type: 'metro',
            line: 'asakusa',
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Nihombashi',
            id: 13,
            type: 'metro',
            line: 'asakusa',
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
                    line: 'ginza',
                    name: 'Nihombashi',
                    id: 11
                }
            ]
        },
        {
            name: 'Ningyocho',
            id: 14,
            type: 'metro',
            line: 'asakusa',
            transfer: false,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'hibiya',
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
            name: 'Higashi-nihombashi',
            id: 15,
            type: 'metro',
            line: 'asakusa',
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'shinjuku',
                    name: 'Bakuroyokoyama',
                    id: 9
                },
                {
                    type: 'train',
                    line: 'sobu-kaisoku',
                    name: 'Bakurocho',
                    id: 21
                }
            ]
        },
        {
            name: 'Asakusabashi',
            id: 16,
            type: 'metro',
            line: 'asakusa',
            transfer: true,
            transferInfo: [
                {
                    type: 'train',
                    line: 'sobu',
                    name: 'Asakusabashi',
                    id: 20
                },
            ]
        },
        {
            name: 'Kuramae',
            id: 17,
            type: 'metro',
            line: 'asakusa',
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'oedo',
                    name: 'Kuramae',
                    id: 11
                }
            ]
        },
        {
            name: 'Asakusa',
            id: 18,
            type: 'metro',
            line: 'asakusa',
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'ginza',
                    name: 'Asakusa',
                    id: 19
                }
            ]
        },
        {
            name: 'Honjo-azumabashi',
            id: 19,
            type: 'metro',
            line: 'asakusa',
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Oshiage',
            id: 20,
            type: 'metro',
            line: 'asakusa',
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'hanzomon',
                    name: 'Oshiage',
                    id: 14
                }
            ]
        }
    ]
};
