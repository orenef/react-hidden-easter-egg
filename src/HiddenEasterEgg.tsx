import React from 'react'
import './style.css';

type CodeMode = 'KEYCODE' | 'KEY'; // KEYCODE is deprecated 

interface Props {
	cb?: () => void | undefined; // function to invoke when code is enter
	code?: string[] | number[];
	codeMode?: CodeMode;
	children: any;
	resetEggMs?: number;
}

export const HiddenEasterEgg: React.FC<Props> = ({
	code = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'],
	codeMode = 'KEY',
	cb = undefined,
	children = undefined,
	resetEggMs = 0,
}) => {
	const [index, setIndex] = React.useState(0);
	const [hide, setHide] = React.useState(true);
	const indexRef =  React.useRef(index);
	indexRef.current = index;

	React.useEffect(() => {
		function onKeyDown(e: KeyboardEvent) {
			let attr = '';
			switch (codeMode) {
				case 'KEY':
					attr = 'key'
					break;
				case 'KEYCODE':
					attr = 'keyCode'
					break;		
				default:
					break;
			}
			if (e[attr] && e[attr] === code[indexRef.current]) {
				if (indexRef.current === (code.length - 1)) { // last key in code
					cb && cb(); // trigger the easter-egg call back.
					setHide(false);
					setIndex(0);
					if (resetEggMs) {
						setTimeout(() => {
							setHide(true);
							setIndex(0);
						}, resetEggMs);
					}
				} else {
					setIndex(prevIndex => prevIndex + 1);
				}
			} else {
				setIndex(0);
			}
		}
	
		document.addEventListener('keydown', onKeyDown);
		return () => {
		  document.removeEventListener('keydown', onKeyDown);
		}
	},[]);

	return (
		<React.Fragment>
			{!hide && children}
		</React.Fragment>
	);
}
