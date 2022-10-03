import { error } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';

import { getAllMetroLines } from '../../constants/getAllMetroLines';


/** @type {import('./$types').RequestHandler} */
export async function POST(requestData) {

  const targetStation = await requestData.request.json();
  let listOfLines = [];
  let returnStationInfo = {};

  if (targetStation.requestStation == "") {
    throw error(400, 'You sent an empty string. Please send the train station name in romaji.');
  }

  let allLines = getAllMetroLines();
  allLines.forEach(lines => {
    lines.stations.forEach(station => {
      if (station.name.toLowerCase() === targetStation.requestStation.toLowerCase()) {
        listOfLines.push(station.line);
        returnStationInfo.name = station.name;
      }
    });
  });

  returnStationInfo.lines = listOfLines;

  if (returnStationInfo == {}) {
    throw error(400, 'Invalid Station');
  }
  return json(returnStationInfo);
}