import keyMirror from 'keymirror';
import { useReducer } from 'react';
import './styles.css';

// remove useState, add useReducer
// reducer - pure function
// ifs vs switch
// describe action object
// https://github.com/redux-utilities/flux-standard-action
// term action creator/actionType constants
// ActionTypes - refactor,
// add  keyMirror
// add - add 5, payload

const ActionTypes = {
	INCREMENT: 'INCREMENT',
	DECREMENT: 'DECREMENT',
	ADD: 'ADD',
};
// const ActionTypes = keyMirror({
// 	INCREMENT: null,
// 	DECREMENT: null,
// 	ADD: null,
// });

const counterReducer = (state, action) => {
	switch (action.type) {
		case ActionTypes.INCREMENT: {
			return state + 1;
		}
		case ActionTypes.DECREMENT: {
			return state - 1;
		}
		case ActionTypes.ADD: {
			return state + action.payload;
		}
		default:
			return state;
	}
};

const increment = () => ({ type: ActionTypes.INCREMENT });
const decrement = () => ({ type: ActionTypes.DECREMENT });
const add = (step) => ({ type: ActionTypes.ADD, payload: step });

export default function App() {
	const [counter, dispatch] = useReducer(counterReducer, 0);

	return (
		<div className="w-50 m-auto txt-center">
			<h1>{counter}</h1>
			<p>
				<button onClick={() => dispatch(increment())}>Increment</button>{' '}
				<button onClick={() => dispatch(decrement())}>Decrement</button>{' '}
				<button onClick={() => dispatch(add(5))}>+5</button>{' '}
			</p>
		</div>
	);
}
