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
            targetLine: 'ginza'
        })
    });
    let trainLineInfo = await response.json();
    console.log(trainLineInfo)
};
`

export let linePOSTResponseSample = `
{
    "numberOfStations":19,
    "type":"metro",
    "line":"ginza",
    "stations":[
       {
          "name":"Shibuya",
          "id":1,
          "type":"metro",
          "line":"ginza",
          "transfer":true,
          "transferInfo":[
             {
                "type":"train",
                "line":"yamanote",
                "name":"Shibuya",
                "id":20
             },
             {
                "type":"metro",
                "line":"hanzomon",
                "name":"Shibuya",
                "id":1
             },
             {
                "type":"metro",
                "line":"fukutoshin",
                "name":"Shibuya",
                "id":16
             },
             {
                "type":"train",
                "line":"saikyo",
                "name":"Shibuya",
                "id":10
             },
             {
                "type":"train",
                "line":"den-en-toshi",
                "name":"Shibuya",
                "id":1
             }
          ]
       },
       {
          "name":"Omote-sando",
          "id":2,
          "type":"metro",
          "line":"ginza",
          "transfer":true,
          "transferInfo":[
             {
                "type":"metro",
                "line":"chiyoda",
                "name":"Omote-sando",
                "id":4
             },
             {
                "type":"metro",
                "line":"hanzomon",
                "name":"Omote-sando",
                "id":2
             }
          ]
       },
       {
          "name":"Gaienmae",
          "id":3,
          "type":"metro",
          "line":"ginza",
          "transfer":false,
          "transferInfo":[
             
          ]
       } 
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
            requestStation: 'Shinjuku
        })
    });
    stationInfo = await response.json();
    console.log(stationInfo)
};
`

export let stationPOSTResponseSample = `
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