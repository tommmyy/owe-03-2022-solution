// same as Demo1Ex1.js
import { useState } from 'react';
import './styles.css';

const getInitialCookiesValue = () => {
	const raw = window.localStorage.getItem('cookies');
	let initialValue = false;
	if (typeof raw !== 'undefined') {
		initialValue = JSON.parse(raw);
	}
	return initialValue;
};

export default function App() {
	const [text, setText] = useState('');
	const [cookiesEnabled, setCookiesEnabled] = useState(
		getInitialCookiesValue()
	);

	const setAndPersisitCookiesEnabled = (newValue) => {
		localStorage.setItem('cookies', JSON.stringify(newValue));
		setCookiesEnabled(newValue);
	};

	return (
		<div className="w-50 m-auto">
			<p>
				<label htmlFor="cookies-input">Povolit cookies? </label>
				<input
					id="cookies-input"
					type="checkbox"
					checked={cookiesEnabled}
					onChange={(event) => {
						setAndPersisitCookiesEnabled(!!event.target.checked);
					}}
				/>
			</p>
			<p>
				<input
					className="w-100"
					placeholder="I am here just to show rerenders."
					onChange={(event) => setText(event.target.value)}
					value={text}
				/>
			</p>
		</div>
	);
}
