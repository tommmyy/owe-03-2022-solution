import { useState } from 'react';
import './styles.css';

export default function App() {
	const [counter, setCounter] = useState(0);

	return (
		<div className="w-50 m-auto txt-center" style={{ textAlign: 'center' }}>
			<h1>{counter}</h1>
			<p>
				<button onClick={() => setCounter((x) => x + 1)}>Increment</button>{' '}
				<button onClick={() => setCounter((x) => x - 1)}>Decrement</button>
			</p>
		</div>
	);
}
