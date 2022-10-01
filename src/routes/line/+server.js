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

  const requestLine = await requestData.request.json();
  let responseLine;

  switch (requestLine.targetLine) {
    case "asakusa":
      responseLine = asakusaLine
      break;
    case "chiyoda":
      responseLine = chiyodaLine
      break;
    case "fukutoshin":
      responseLine = fukutoshinLine
      break;
    case "ginza":
      responseLine = ginzaLine
      break;
    case "hanzomon":
      responseLine = hanzomonLine
      break;
    case "hibiya":
      responseLine = hibiyaLine
      break;
    case "marunouchi":
      responseLine = marunouchiLine
      break;
    case "mita":
      responseLine = mitaLine
      break;
    case "namboku":
      responseLine = nambokuLine
      break;
    case "oedo":
      responseLine = oedoLine
      break;
    case "shinjuku":
      responseLine = shinjukuLine
      break;
    case "tozai":
      responseLine = tozaiLine
      break;
    case "yurakucho":
      responseLine = yurakuchoLine
      break;
    default:
      responseLine = {
        response: "Invalid Line"
      }
      break;
  }

  return json(responseLine);
}