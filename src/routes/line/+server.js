import { error } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';

import { getOneMetroLine } from '../../constants/getOneMetroLine';

/** @type {import('./$types').RequestHandler} */
export async function POST(requestData) {

  const requestLine = await requestData.request.json();
  console.log(requestLine)
  let responseLine = getOneMetroLine(requestLine);

  return json(responseLine);
}