# react-hidden-easter-egg

react-hidden-easter-egg is a react base component that allow you to add easter egg, that will trigger after user typing the secret code.

codesandbox demo -> [Demo]()
## Installation

Use the package manager [npm]() to install .

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
```

props | type | default value | info
--- | --- | --- | ---
cb | function | undefined | undefined | Callback function that will trigger when user type the code.
code | string[] | number[] | konami code (['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']) | The code use to trigger callback function or show hidden component.
codeMode | "key" or "keyCode" | "key" | Code mode used to detect user typing (notice keycode is deprecated for some browsers)
children | any | undefined | children to render in case code is enter
resetEggMs | number | 0 | In case you want 'children' to re-hide after a few millisecond use this props. 

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)