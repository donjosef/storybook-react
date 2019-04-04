/*
Dobbiamo modificare leggermente il config. In questo modo riconoscerà le storie definite nei file .stories.js e potrà usare il nostro custom file CSS. 
Di default storybook vedrà all interno di una cartella /stories quindi dobbiamo fare in modo che capisca che vogliamo usare i .stories.js
*/

import { configure } from '@storybook/react';
import '../src/index.css';
import '../src/components/Button/Button.css';
import '../src/components/Accordion/AccordionItem/AccordionItem.css';

import requireContext from 'require-context.macro';

const req = requireContext('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);