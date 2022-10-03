export let yurakuchoLine = {
    numberOfStations: 24,
    type: "metro",
    line: "yurakucho",
    stations: [
        {
            name: 'Wakoshi',
            id: 1,
            type: 'metro',
            line: 'yurakucho',
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'fukutoshin',
                    name: 'Wakoshi',
                    id: 1
                },
            ]
        },
        {
            name: 'Chikatetsu-narimasu',
            id: 2,
            type: 'metro',
            line: 'yurakucho',
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'fukutoshin',
                    name: 'Chikatetsu-narimasu',
                    id: 2
                },
            ]
        },
        {
            name: 'Chikatetsu-akatsuka',
            id: 3,
            type: 'metro',
            line: 'yurakucho',
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'fukutoshin',
                    name: 'Chikatetsu-akatsuka',
                    id: 3
                },
            ]
        },
        {
            name: 'Heiwadai',
            id: 4,
            type: 'metro',
            line: 'yurakucho',
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'fukutoshin',
                    name: 'Heiwadai',
                    id: 4
                },
            ]
        },
        {
            name: 'Hikawadai',
            id: 5,
            type: 'metro',
            line: 'yurakucho',
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'fukutoshin',
                    name: 'Hikawadai',
                    id: 5
                },
            ]
        },
        {
            name: 'Kotake-mukaihara',
            id: 6,
            type: 'metro',
            line: 'yurakucho',
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'fukutoshin',
                    name: 'Kotake-mukaihara',
                    id: 6
                },
            ]
        },
        {
            name: 'Senkawa',
            id: 7,
            type: 'metro',
            line: 'yurakucho',
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'fukutoshin',
                    name: 'Senkawa',
                    id: 7
                }
            ]
        },
        {
            name: 'Kanamecho',
            id: 8,
            type: 'metro',
            line: 'yurakucho',
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'fukutoshin',
                    name: 'Kanamecho',
                    id: 8
                }
            ]
        },
        {
            name: 'Ikebukuro',
            id: 9,
            type: 'metro',
            line: 'yurakucho',
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
                    line: 'fukutoshin',
                    name: 'Ikebukuro',
                    id: 9
                },
            ]
        },
        {
            name: 'Higashi-ikebukuro',
            id: 10,
            type: 'metro',
            line: 'yurakucho',
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Gokokuji',
            id: 11,
            type: 'metro',
            line: 'yurakucho',
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Edogawabashi',
            id: 12,
            type: 'metro',
            line: 'yurakucho',
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Iidabashi',
            id: 13,
            type: 'metro',
            line: 'yurakucho',
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
                    line: 'namboku',
                    name: 'Iidabashi',
                    id: 10
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
            name: 'Ichigaya',
            id: 14,
            type: 'metro',
            line: 'yurakucho',
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
                    line: 'namboku',
                    name: 'Ichigaya',
                    id: 9
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
            name: 'Kojimachi',
            id: 15,
            type: 'metro',
            line: 'yurakucho',
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Nagatacho',
            id: 16,
            type: 'metro',
            line: 'yurakucho',
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'namboku',
                    name: 'Nagatacho',
                    id: 7
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
            name: 'Sakuradamon',
            id: 17,
            type: 'metro',
            line: 'yurakucho',
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Yurakucho',
            id: 18,
            type: 'metro',
            line: 'yurakucho',
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'chiyoda',
                    name: 'Hibiya',
                    id: 9
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
            name: 'Ginza-itchome',
            id: 19,
            type: 'metro',
            line: 'yurakucho',
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
                    line: 'ginza',
                    name: 'Ginza',
                    id: 9
                }
            ]
        },
        {
            name: 'Shintomicho',
            id: 20,
            type: 'metro',
            line: 'yurakucho',
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'hibiya',
                    name: 'Tsukiji',
                    id: 11
                }
            ]
        },
        {
            name: 'Tsukishima',
            id: 21,
            type: 'metro',
            line: 'yurakucho',
            transfer: true,
            transferInfo: [
                {
                    type: 'metro',
                    line: 'oedo',
                    name: 'Tsukishima',
                    id: 16
                }
            ]
        },
        {
            name: 'Toyosu',
            id: 22,
            type: 'metro',
            line: 'yurakucho',
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Tatsumi',
            id: 23,
            type: 'metro',
            line: 'yurakucho',
            transfer: false,
            transferInfo: []
        },
        {
            name: 'Shin-kiba',
            id: 24,
            type: 'metro',
            line: 'yurakucho',
            transfer: false,
            transferInfo: []
        }
    ]
};
