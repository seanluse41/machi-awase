export let linePOSTRequestSample = `
const getLine = async () => {
    const response = await fetch('https://machi-awase.com/line', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            targetLine: 'hibiya'
        })
    });
    let trainLineInfo = await response.json();
    console.log(trainLineInfo)
};
`

export let linePOSTResponseSample = `
{
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
       ...
`

export let stationPOSTRequestSample = `
const getStation = async () => {
    const response = await fetch('https://machi-awase.com/station', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            requestStation: 'Shinjuku'
        })
    });
    stationInfo = await response.json();
    console.log(stationInfo)
};
`

export let stationPOSTResponseSample = `
{
    "name":"Ichigaya",
    "lines":[
       "namboku",
       "shinjuku",
       "yurakucho"
    ]
 }
`