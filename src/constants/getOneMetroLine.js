import { asakusaLine } from './asakusa';
import { chiyodaLine } from './chiyoda';
import { fukutoshinLine } from './fukutoshin';
import { ginzaLine } from './ginza';
import { hanzomonLine } from './hanzomon';
import { hibiyaLine } from './hibiya';
import { marunouchiLine } from './marunouchi';
import { mitaLine } from './mita';
import { nambokuLine } from './namboku';
import { oedoLine } from './oedo';
import { shinjukuLine } from './shinjuku';
import { tozaiLine } from './tozai';
import { yurakuchoLine } from './yurakucho';

export let getOneMetroLine = (requestLine) => {
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
    
    return responseLine;
}