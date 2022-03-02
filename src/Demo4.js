import { useCallback, useMemo, useState, useEffect } from 'react';
import './styles.css';

const Helmet = ({ title }) => {
	useEffect(() => {
		document.title = title;
		console.log('set title to: ' + title);
	}, [title]);

	return null;
};

// inline: onChange={(event) => setText(event.target.value)}
// vs useMemo(() => (event) => ...)
// vs useCallback((event) => ...)
export default function App() {
	const [text, setText] = useState('');
	return (
		<div className="w-50 m-auto txt-center">
			<Helmet title="OWE" />
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
