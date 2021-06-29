# react-hidden-easter-egg

![npm](https://img.shields.io/npm/dt/react-hidden-easter-egg) ![npm bundle size](https://img.shields.io/bundlephobia/min/react-hidden-easter-egg) ![NPM](https://img.shields.io/npm/l/react-hidden-easter-egg)

react-hidden-easter-egg is a react base component that allow you to add easter egg, that will trigger after user typing the secret code.

codesandbox demo -> [Demo](https://codesandbox.io/s/react-hidden-easter-egg-l104s) and [advance example](https://9leb2.csb.app/)
## Installation

Use the package manager [npm](https://www.npmjs.com/package/react-hidden-easter-egg) to install .

```bash
npm i react-hidden-easter-egg
```

## Usage

```jsx
import React from "react";
import { HiddenEasterEgg } from "react-hidden-easter-egg";

export default function App() {
  return (
    <div className="App">
        <h1 style={{ top: '50%', left: "50%", position: 'absolute' }}> react-hidden-easter-egg !!! </h1>
          <HiddenEasterEgg resetEggMs={10000} cb={() => console.log('finish')}>
            wow !
          </HiddenEasterEgg>,
    </div>
  );
}

// mobile example
// In MOBILE_CLICK mode, 1 - click , 2 - double click
import React from "react";
import { HiddenEasterEgg } from "react-hidden-easter-egg";

export default function AppMobile() {
  return (
    <div className="App">
        <h1 style={{ top: '50%', left: "50%", position: 'absolute' }}> react-hidden-easter-egg !!! </h1>
          <HiddenEasterEgg code={[1, 2, 1]} codeMode="MOBILE_CLICK" resetEggMs={10000} cb={() => console.log('finish')}>
            wow !
          </HiddenEasterEgg>,
    </div>
  );
}
```

props | type | default value | info
--- | --- | --- | ---
cb | `function` or `undefined` | undefined | Callback function that will trigger when user type the code.
code | `string[]` or `number[]` | konami code (['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']) | The code use to trigger callback function or show hidden component.
codeMode | `"key"` or `"keyCode"` or `"MOBILE_CLICK"` | "key" | Code mode used to detect user typing (notice keycode is deprecated for some browsers).
children | `any` | undefined | children to render in case code is enter
resetEggMs | `number` | 0 | In case you want 'children' to re-hide after a few millisecond use this props. 

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[ISC](https://choosealicense.com/licenses/isc/)
