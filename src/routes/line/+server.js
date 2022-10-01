import { error } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';

import { asakusaLine } from '../../constants/asakusa';
import { chiyodaLine } from '../../constants/chiyoda';
import { fukutoshinLine } from '../../constants/fukutoshin';
import { ginzaLine } from '../../constants/ginza';
import { hanzomonLine } from '../../constants/hanzomon';
import { hibiyaLine } from '../../constants/hibiya';
import { marunouchiLine } from '../../constants/marunouchi';
import { mitaLine } from '../../constants/mita';
import { nambokuLine } from '../../constants/namboku';
import { oedoLine } from '../../constants/oedo';
import { shinjukuLine } from '../../constants/shinjuku';
import { tozaiLine } from '../../constants/tozai';
import { yurakuchoLine } from '../../constants/yurakucho';

/** @type {import('./$types').RequestHandler} */
export async function POST(requestData) {

  const targetTrainLine = await requestData.request.json();

  console.log(targetTrainLine.targetLine)


  let allLines = [];
  allLines.push(asakusaLine, chiyodaLine, fukutoshinLine, ginzaLine, hanzomonLine, hibiyaLine, marunouchiLine, mitaLine, nambokuLine, oedoLine, shinjukuLine, tozaiLine, yurakuchoLine)

  if (targetTrainLine == "") {
    throw error(400, 'You sent an empty string. Please send the train line name.');
  }


  return json(allLines);
}