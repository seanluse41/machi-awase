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

export let getAllMetroLines = (requestLine) => {
    let allLines = [];
    allLines.push(asakusaLine, chiyodaLine, fukutoshinLine, ginzaLine, hanzomonLine, hibiyaLine, marunouchiLine, mitaLine, nambokuLine, oedoLine, shinjukuLine, tozaiLine, yurakuchoLine)
    return allLines;
}