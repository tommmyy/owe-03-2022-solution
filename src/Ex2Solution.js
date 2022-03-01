import keyMirror from 'keymirror';
import { useReducer } from 'react';
import './styles.css';

const ActionTypes = keyMirror({
	INCREMENT: null,
	DECREMENT: null,
	RESET: null,
	ADD: null,
});

const initialValue = 0;
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
		case ActionTypes.RESET: {
			return initialValue;
		}
		default:
			return state;
	}
};

const increment = () => ({ type: ActionTypes.INCREMENT });
const decrement = () => ({ type: ActionTypes.DECREMENT });
const add = (step) => ({ type: ActionTypes.ADD, payload: step });
const reset = () => ({ type: ActionTypes.RESET });

export default function App() {
	const [counter, dispatch] = useReducer(counterReducer, initialValue);

	return (
		<div className="w-50 m-auto txt-center">
			<h1>{counter}</h1>
			<p>
				<button onClick={() => dispatch(increment())}>Increment</button>{' '}
				<button onClick={() => dispatch(decrement())}>Decrement</button>{' '}
				<button onClick={() => dispatch(add(5))}>+5</button>{' '}
				<button onClick={() => dispatch(reset())}>reset</button>{' '}
			</p>
		</div>
	);
}
