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
            targetLine: 'oedo'
        })
    });
    let jsonResponse = await response.json();
    lineInfo = jsonResponse.stations
};
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
            requestStation: 'Shinjuku
        })
    });
    stationInfo = await response.json();
    console.log(stationInfo)
};
`