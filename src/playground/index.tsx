import React from 'react';
import ReactDOM from 'react-dom';
import { HiddenEasterEgg } from '../HiddenEasterEgg';
ReactDOM.render(
  <HiddenEasterEgg code={['s', 'h', 'o', 'w']} resetEggMs={10000} cb={() => console.log('finish')}> show me </HiddenEasterEgg>,
  document.getElementById('root'),
);
