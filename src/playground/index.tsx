import React from 'react';
import ReactDOM from 'react-dom';
import { HiddenEasterEgg } from '../HiddenEasterEgg';
ReactDOM.render(<React.Fragment>
  test
    <HiddenEasterEgg code={['t','e','s','t']} key="test1" resetEggMs={30000} cb={() => console.log('finish1')}> show me </HiddenEasterEgg>
    <HiddenEasterEgg code={[1, 2, 2]} key="test2" codeMode="MOBILE_CLICK" resetEggMs={30000} cb={() => console.log('finish2')}> show me 2 </HiddenEasterEgg>
</React.Fragment>,
  document.getElementById('root'),
);
